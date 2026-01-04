/**
 * Clean blog content by removing scraped junk from the old WordPress site
 */
export function cleanBlogContent(content: string): string {
  // Patterns to remove (in order)
  const patternsToRemove = [
    // Skip links at the beginning
    /^Skip links[\s\S]*?Skip to content\]\([^)]+\)\s*/i,
    /^- \[Skip to primary navigation\][^\n]*\n- \[Skip to content\][^\n]*\n+/i,
    
    // "You may also like" section and everything after it
    /## You may also like[\s\S]*$/i,
    /You may also like[\s\S]*$/i,
    
    // Comment form sections
    /Leave a comment[\s\S]*?Cancel reply[\s\S]*?Δ/gi,
    /Save my name, email, and website[\s\S]*?comment\./i,
    /This site uses Akismet[\s\S]*?processed\.\]\([^)]+\)/i,
    
    // Cookie notices and UI elements
    /This website uses cookies[\s\S]*?Accept/i,
    /Notifications[\s\S]*?Loading\.\.\./gi,
    /Adding \{\{itemName\}\} to cart[\s\S]*?Loading\.\.\./i,
    /Explore\s*\n\s*Drag/i,
    
    // "Interested in working with us?" form section
    /## Interested in working with us\?[\s\S]*$/i,
    /Interested in working with us\?[\s\S]*?reCAPTCHA[\s\S]*$/i,
    
    // reCAPTCHA notices
    /reCAPTCHA[\s\S]*?Terms\]\([^)]+\)/gi,
    /protected by \*\*reCAPTCHA\*\*[\s\S]*?Terms\]\([^)]+\)/gi,
    
    // WPForms remnants
    /\[wpforms id="[^"]+"\]/gi,
    
    // Remove ALL images from content (we only want hero image)
    /!\[[^\]]*\]\([^)]+\)/gi,
    /\*\*!\[[^\]]*\]\([^)]+\)\*\*/gi,
    
    // Old site navigation remnants
    /"\*" indicates required fields[\s\S]*?How can we help you\?/gi,
    
    // Form field labels that got scraped
    /Name\*\s*\n+Email\*\s*\n+Phone\*[\s\S]*?Monthly Marketing Budget\*/gi,
    
    // Delta symbols (form markers)
    /\nΔ\s*\n/g,
    
    // December date patterns at the end (leftover from old posts)
    /\n+December \d+, \d{4}\s*\n+Blog\s*$/gi,
    
    // Empty lines cleanup (more than 2 consecutive)
    /\n{4,}/g,
  ];

  let cleaned = content;
  
  for (const pattern of patternsToRemove) {
    cleaned = cleaned.replace(pattern, '\n\n');
  }
  
  // Final cleanup: trim and normalize whitespace
  cleaned = cleaned.trim();
  
  // Remove any trailing junk that might have partial matches
  const junkIndicators = [
    'Select budget below',
    'wpforms',
    'reCAPTCHA',
    'Privacy - Terms',
    'Δ',
    'December 23, 2025\n\nBlog',
  ];
  
  for (const indicator of junkIndicators) {
    const idx = cleaned.indexOf(indicator);
    if (idx !== -1 && idx > cleaned.length * 0.7) {
      // Only remove if it is in the last 30% of content
      cleaned = cleaned.substring(0, idx).trim();
    }
  }
  
  return cleaned;
}
