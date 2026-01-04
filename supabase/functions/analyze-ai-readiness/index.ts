const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Request logging middleware
function logRequest(req: Request, context: { functionName: string; userId?: string }) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const userAgent = req.headers.get("user-agent") || "unknown";
  const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                   req.headers.get("cf-connecting-ip") || "unknown";
  
  console.log(JSON.stringify({
    type: "request",
    timestamp,
    function: context.functionName,
    method,
    url,
    userId: context.userId || "anonymous",
    clientIP,
    userAgent: userAgent.substring(0, 100),
  }));
}

function logResponse(context: { functionName: string; userId?: string; statusCode: number; durationMs: number }) {
  const timestamp = new Date().toISOString();
  
  console.log(JSON.stringify({
    type: "response",
    timestamp,
    function: context.functionName,
    userId: context.userId || "anonymous",
    statusCode: context.statusCode,
    durationMs: context.durationMs,
  }));
}

interface AnalysisResult {
  url: string;
  metrics: {
    id: string;
    label: string;
    score: number;
    status: 'pass' | 'warning' | 'fail';
    details: string;
  }[];
  overallScore: number;
  html?: string;
  metadata?: Record<string, string>;
}

// SSRF protection: validate URL is public and not internal
function isValidPublicUrl(urlString: string): boolean {
  try {
    const url = new URL(urlString);
    
    // Only allow HTTP/HTTPS
    if (!['http:', 'https:'].includes(url.protocol)) {
      return false;
    }
    
    // Block private IP ranges and localhost
    const hostname = url.hostname.toLowerCase();
    const privatePatterns = [
      /^localhost$/i,
      /^127\.\d+\.\d+\.\d+$/,
      /^10\.\d+\.\d+\.\d+$/,
      /^172\.(1[6-9]|2\d|3[01])\.\d+\.\d+$/,
      /^192\.168\.\d+\.\d+$/,
      /^169\.254\.\d+\.\d+$/,
      /^0\.0\.0\.0$/,
      /^::1$/,
      /^fe80:/i,
      /^fc00:/i,
      /^fd00:/i,
    ];
    
    if (privatePatterns.some(pattern => pattern.test(hostname))) {
      return false;
    }
    
    return true;
  } catch {
    return false;
  }
}

async function checkUrlExists(url: string): Promise<{ exists: boolean; content?: string }> {
  // Validate URL before making request
  if (!isValidPublicUrl(url)) {
    return { exists: false };
  }
  
  try {
    const response = await fetch(url, { 
      method: 'GET',
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; AIReadyCheck/1.0)' }
    });
    if (response.ok) {
      const content = await response.text();
      return { exists: true, content };
    }
    return { exists: false };
  } catch {
    return { exists: false };
  }
}

function analyzeHeadingHierarchy(html: string): { score: number; details: string } {
  const h1Matches = html.match(/<h1[^>]*>/gi) || [];
  const h2Matches = html.match(/<h2[^>]*>/gi) || [];
  const h3Matches = html.match(/<h3[^>]*>/gi) || [];
  
  const h1Count = h1Matches.length;
  const h2Count = h2Matches.length;
  const h3Count = h3Matches.length;
  
  let score = 0;
  const issues: string[] = [];
  
  if (h1Count === 1) {
    score += 40;
  } else if (h1Count === 0) {
    issues.push('No H1 tag found');
  } else {
    issues.push(`Multiple H1 tags (${h1Count}) found`);
    score += 20;
  }
  
  if (h2Count > 0) {
    score += 30;
  } else {
    issues.push('No H2 tags found');
  }
  
  if (h3Count > 0) {
    score += 30;
  } else {
    issues.push('No H3 tags found');
  }
  
  const details = issues.length > 0 
    ? issues.join('; ') 
    : `Good hierarchy: 1 H1, ${h2Count} H2s, ${h3Count} H3s`;
  
  return { score, details };
}

function analyzeMetadata(html: string): { score: number; details: string; metadata: Record<string, string> } {
  const metadata: Record<string, string> = {};
  let score = 0;
  const issues: string[] = [];
  
  // Title
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  if (titleMatch) {
    metadata.title = titleMatch[1].trim();
    const titleLength = metadata.title.length;
    if (titleLength >= 30 && titleLength <= 60) {
      score += 25;
    } else {
      score += 15;
      issues.push(`Title length: ${titleLength} chars (ideal: 30-60)`);
    }
  } else {
    issues.push('No title tag found');
  }
  
  // Meta description
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                    html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  if (descMatch) {
    metadata.description = descMatch[1].trim();
    const descLength = metadata.description.length;
    if (descLength >= 120 && descLength <= 160) {
      score += 25;
    } else {
      score += 15;
      issues.push(`Description length: ${descLength} chars (ideal: 120-160)`);
    }
  } else {
    issues.push('No meta description found');
  }
  
  // Open Graph
  const ogTitleMatch = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/i);
  const ogDescMatch = html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/i);
  
  if (ogTitleMatch) {
    metadata.ogTitle = ogTitleMatch[1].trim();
    score += 25;
  } else {
    issues.push('No OG title');
  }
  
  if (ogDescMatch) {
    metadata.ogDescription = ogDescMatch[1].trim();
    score += 25;
  } else {
    issues.push('No OG description');
  }
  
  const details = issues.length > 0 ? issues.join('; ') : 'All metadata present and optimized';
  
  return { score, details, metadata };
}

function analyzeSemanticHTML(html: string): { score: number; details: string } {
  const semanticTags = ['header', 'nav', 'main', 'article', 'section', 'aside', 'footer'];
  const found: string[] = [];
  
  semanticTags.forEach(tag => {
    const regex = new RegExp(`<${tag}[^>]*>`, 'gi');
    if (html.match(regex)) {
      found.push(tag);
    }
  });
  
  const score = Math.round((found.length / semanticTags.length) * 100);
  const missing = semanticTags.filter(t => !found.includes(t));
  
  const details = missing.length > 0 
    ? `Missing: ${missing.join(', ')}` 
    : 'All semantic elements present';
  
  return { score, details };
}

function analyzeAccessibility(html: string): { score: number; details: string } {
  let score = 0;
  const issues: string[] = [];
  
  // Check for alt attributes on images
  const imgTags = html.match(/<img[^>]*>/gi) || [];
  const imgsWithAlt = imgTags.filter(img => /alt=["'][^"']+["']/i.test(img));
  
  if (imgTags.length > 0) {
    const altRatio = imgsWithAlt.length / imgTags.length;
    score += Math.round(altRatio * 40);
    if (altRatio < 1) {
      issues.push(`${imgTags.length - imgsWithAlt.length}/${imgTags.length} images missing alt text`);
    }
  } else {
    score += 40; // No images, so no penalty
  }
  
  // Check for aria-labels
  const ariaLabels = html.match(/aria-label/gi) || [];
  if (ariaLabels.length > 0) {
    score += 30;
  } else {
    issues.push('No ARIA labels found');
  }
  
  // Check for lang attribute
  if (/<html[^>]*lang=["'][^"']+["']/i.test(html)) {
    score += 30;
  } else {
    issues.push('No lang attribute on HTML');
  }
  
  const details = issues.length > 0 ? issues.join('; ') : 'Good accessibility practices';
  
  return { score, details };
}

function analyzeReadability(html: string): { score: number; details: string } {
  // Strip HTML tags to get text content
  const text = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                   .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                   .replace(/<[^>]+>/g, ' ')
                   .replace(/\s+/g, ' ')
                   .trim();
  
  const words = text.split(/\s+/).filter(w => w.length > 0);
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  
  if (words.length < 50 || sentences.length < 3) {
    return { score: 50, details: 'Insufficient text content for analysis' };
  }
  
  const avgWordsPerSentence = words.length / sentences.length;
  
  // Simple readability heuristic
  let score = 100;
  const notes: string[] = [];
  
  if (avgWordsPerSentence > 25) {
    score -= 30;
    notes.push('Sentences too long (avg > 25 words)');
  } else if (avgWordsPerSentence > 20) {
    score -= 15;
    notes.push('Sentences slightly long');
  }
  
  if (words.length < 300) {
    score -= 20;
    notes.push('Limited content (< 300 words)');
  }
  
  const details = notes.length > 0 
    ? notes.join('; ') 
    : `Good readability: ${Math.round(avgWordsPerSentence)} words/sentence avg`;
  
  return { score: Math.max(0, score), details };
}

Deno.serve(async (req) => {
  const startTime = Date.now();
  const functionName = "analyze-ai-readiness";
  let statusCode = 200;
  
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  logRequest(req, { functionName });

  try {
    const { url } = await req.json();

    if (!url) {
      return new Response(
        JSON.stringify({ success: false, error: 'URL is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Format URL
    let formattedUrl = url.trim();
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = `https://${formattedUrl}`;
    }

    // SSRF validation
    if (!isValidPublicUrl(formattedUrl)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid or private URL' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const baseUrl = new URL(formattedUrl).origin;

    console.log('Analyzing URL:', formattedUrl);

    // Fetch the main page
    const mainPage = await checkUrlExists(formattedUrl);
    if (!mainPage.exists || !mainPage.content) {
      return new Response(
        JSON.stringify({ success: false, error: 'Could not fetch the URL' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const html = mainPage.content;
    const metrics: AnalysisResult['metrics'] = [];

    // 1. Check for llms.txt
    const llmsTxt = await checkUrlExists(`${baseUrl}/llms.txt`);
    metrics.push({
      id: 'llms-txt',
      label: 'LLMs.txt',
      score: llmsTxt.exists ? 100 : 0,
      status: llmsTxt.exists ? 'pass' : 'fail',
      details: llmsTxt.exists ? 'LLMs.txt file found' : 'No LLMs.txt file - AI crawlers have no guidance'
    });

    // 2. Check for robots.txt
    const robotsTxt = await checkUrlExists(`${baseUrl}/robots.txt`);
    let robotsScore = 0;
    let robotsDetails = 'No robots.txt found';
    if (robotsTxt.exists && robotsTxt.content) {
      robotsScore = 100;
      robotsDetails = 'robots.txt found';
      // Check if it blocks AI crawlers
      const content = robotsTxt.content.toLowerCase();
      if (content.includes('gptbot') || content.includes('claudebot') || content.includes('anthropic')) {
        robotsScore = 50;
        robotsDetails = 'robots.txt found but may block AI crawlers';
      }
    }
    metrics.push({
      id: 'robots-txt',
      label: 'Robots.txt',
      score: robotsScore,
      status: robotsScore >= 80 ? 'pass' : robotsScore >= 50 ? 'warning' : 'fail',
      details: robotsDetails
    });

    // 3. Check for sitemap
    const sitemapXml = await checkUrlExists(`${baseUrl}/sitemap.xml`);
    const sitemapIndex = await checkUrlExists(`${baseUrl}/sitemap_index.xml`);
    const hasSitemap = sitemapXml.exists || sitemapIndex.exists;
    metrics.push({
      id: 'sitemap',
      label: 'Sitemap',
      score: hasSitemap ? 100 : 0,
      status: hasSitemap ? 'pass' : 'fail',
      details: hasSitemap ? 'Sitemap found' : 'No sitemap found - crawlers may miss pages'
    });

    // 4. Heading hierarchy
    const headings = analyzeHeadingHierarchy(html);
    metrics.push({
      id: 'headings',
      label: 'Heading Hierarchy',
      score: headings.score,
      status: headings.score >= 80 ? 'pass' : headings.score >= 50 ? 'warning' : 'fail',
      details: headings.details
    });

    // 5. Readability
    const readability = analyzeReadability(html);
    metrics.push({
      id: 'readability',
      label: 'Content Readability',
      score: readability.score,
      status: readability.score >= 80 ? 'pass' : readability.score >= 50 ? 'warning' : 'fail',
      details: readability.details
    });

    // 6. Metadata
    const metadataResult = analyzeMetadata(html);
    metrics.push({
      id: 'metadata',
      label: 'Metadata Quality',
      score: metadataResult.score,
      status: metadataResult.score >= 80 ? 'pass' : metadataResult.score >= 50 ? 'warning' : 'fail',
      details: metadataResult.details
    });

    // 7. Semantic HTML
    const semantic = analyzeSemanticHTML(html);
    metrics.push({
      id: 'semantic',
      label: 'Semantic HTML',
      score: semantic.score,
      status: semantic.score >= 80 ? 'pass' : semantic.score >= 50 ? 'warning' : 'fail',
      details: semantic.details
    });

    // 8. Accessibility
    const accessibility = analyzeAccessibility(html);
    metrics.push({
      id: 'accessibility',
      label: 'Accessibility',
      score: accessibility.score,
      status: accessibility.score >= 80 ? 'pass' : accessibility.score >= 50 ? 'warning' : 'fail',
      details: accessibility.details
    });

    // Calculate overall score
    const overallScore = Math.round(metrics.reduce((sum, m) => sum + m.score, 0) / metrics.length);

    const result: AnalysisResult = {
      url: formattedUrl,
      metrics,
      overallScore,
      metadata: metadataResult.metadata
    };

    console.log('Analysis complete. Overall score:', overallScore);

    logResponse({ functionName, statusCode: 200, durationMs: Date.now() - startTime });
    return new Response(
      JSON.stringify({ success: true, data: result }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    statusCode = 500;
    console.error('Error analyzing URL:', error);
    logResponse({ functionName, statusCode, durationMs: Date.now() - startTime });
    return new Response(
      JSON.stringify({ success: false, error: 'An error occurred processing your request' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
