// Email Marketing Industry Benchmarks (2024-2025)
// Sources: HubSpot (2025), Klaviyo (2025), MailerLite (2024), Campaign Monitor (2024), Mailchimp (2024)

export interface EmailBenchmark {
  id: string;
  name: string;
  category: string;
  openRate: number;       // Percentage
  clickRate: number;      // CTR percentage
  conversionRate: number; // Post-click conversion percentage
  avgOrderValue: number;  // Typical AOV for industry
  source: string;
}

export const emailBenchmarks: EmailBenchmark[] = [
  // Retail & E-commerce
  { id: "retail-general", name: "Retail (General)", category: "Retail & E-commerce", openRate: 38.58, clickRate: 1.34, conversionRate: 1.8, avgOrderValue: 85, source: "Klaviyo 2025" },
  { id: "ecommerce", name: "E-commerce", category: "Retail & E-commerce", openRate: 39.2, clickRate: 1.89, conversionRate: 2.1, avgOrderValue: 95, source: "Klaviyo 2025" },
  { id: "fashion-apparel", name: "Fashion & Apparel", category: "Retail & E-commerce", openRate: 36.5, clickRate: 1.45, conversionRate: 1.5, avgOrderValue: 120, source: "Klaviyo 2025" },
  { id: "jewelry", name: "Jewelry & Accessories", category: "Retail & E-commerce", openRate: 37.8, clickRate: 1.52, conversionRate: 1.2, avgOrderValue: 250, source: "Klaviyo 2025" },
  { id: "home-garden", name: "Home & Garden", category: "Retail & E-commerce", openRate: 40.1, clickRate: 2.05, conversionRate: 1.9, avgOrderValue: 145, source: "MailerLite 2024" },
  
  // Food & Hospitality
  { id: "restaurant", name: "Restaurant", category: "Food & Hospitality", openRate: 45.21, clickRate: 2.43, conversionRate: 3.2, avgOrderValue: 45, source: "MailerLite 2024" },
  { id: "food-beverage", name: "Food & Beverage", category: "Food & Hospitality", openRate: 43.5, clickRate: 2.31, conversionRate: 2.8, avgOrderValue: 55, source: "Mailchimp 2024" },
  { id: "hospitality-travel", name: "Hospitality & Travel", category: "Food & Hospitality", openRate: 45.21, clickRate: 2.43, conversionRate: 2.5, avgOrderValue: 350, source: "MailerLite 2024" },
  { id: "hotels", name: "Hotels & Lodging", category: "Food & Hospitality", openRate: 44.8, clickRate: 2.35, conversionRate: 2.2, avgOrderValue: 280, source: "Campaign Monitor 2024" },
  
  // Professional Services
  { id: "legal", name: "Legal Services", category: "Professional Services", openRate: 42.1, clickRate: 2.28, conversionRate: 1.5, avgOrderValue: 500, source: "HubSpot 2025" },
  { id: "accounting", name: "Accounting & Finance", category: "Professional Services", openRate: 41.8, clickRate: 2.15, conversionRate: 1.8, avgOrderValue: 350, source: "HubSpot 2025" },
  { id: "consulting", name: "Consulting", category: "Professional Services", openRate: 40.5, clickRate: 2.45, conversionRate: 2.0, avgOrderValue: 750, source: "HubSpot 2025" },
  { id: "b2b-services", name: "B2B Services", category: "Professional Services", openRate: 39.48, clickRate: 2.21, conversionRate: 1.6, avgOrderValue: 400, source: "Brevo 2024" },
  { id: "insurance", name: "Insurance", category: "Professional Services", openRate: 41.2, clickRate: 2.08, conversionRate: 1.4, avgOrderValue: 1200, source: "Mailchimp 2024" },
  
  // Healthcare & Wellness
  { id: "healthcare", name: "Healthcare", category: "Healthcare & Wellness", openRate: 46.21, clickRate: 2.50, conversionRate: 2.2, avgOrderValue: 200, source: "MailerLite 2024" },
  { id: "dental", name: "Dental", category: "Healthcare & Wellness", openRate: 45.5, clickRate: 2.35, conversionRate: 2.8, avgOrderValue: 350, source: "MailerLite 2024" },
  { id: "medical-practice", name: "Medical Practice", category: "Healthcare & Wellness", openRate: 47.2, clickRate: 2.62, conversionRate: 2.5, avgOrderValue: 275, source: "HubSpot 2025" },
  { id: "fitness-gym", name: "Fitness & Gym", category: "Healthcare & Wellness", openRate: 44.8, clickRate: 2.55, conversionRate: 3.5, avgOrderValue: 75, source: "MailerLite 2024" },
  { id: "spa-wellness", name: "Spa & Wellness", category: "Healthcare & Wellness", openRate: 43.9, clickRate: 2.48, conversionRate: 3.0, avgOrderValue: 125, source: "Campaign Monitor 2024" },
  { id: "chiropractor", name: "Chiropractor", category: "Healthcare & Wellness", openRate: 46.0, clickRate: 2.45, conversionRate: 2.6, avgOrderValue: 150, source: "MailerLite 2024" },
  
  // Home Services
  { id: "home-services", name: "Home Services (General)", category: "Home Services", openRate: 44.12, clickRate: 2.10, conversionRate: 2.4, avgOrderValue: 350, source: "MailerLite 2024" },
  { id: "hvac", name: "HVAC", category: "Home Services", openRate: 43.5, clickRate: 2.15, conversionRate: 2.2, avgOrderValue: 450, source: "MailerLite 2024" },
  { id: "plumbing", name: "Plumbing", category: "Home Services", openRate: 44.0, clickRate: 2.08, conversionRate: 2.5, avgOrderValue: 380, source: "MailerLite 2024" },
  { id: "electrical", name: "Electrical", category: "Home Services", openRate: 43.8, clickRate: 2.12, conversionRate: 2.3, avgOrderValue: 320, source: "MailerLite 2024" },
  { id: "roofing", name: "Roofing", category: "Home Services", openRate: 42.5, clickRate: 1.95, conversionRate: 1.8, avgOrderValue: 8500, source: "HubSpot 2025" },
  { id: "landscaping", name: "Landscaping", category: "Home Services", openRate: 44.5, clickRate: 2.22, conversionRate: 2.8, avgOrderValue: 250, source: "MailerLite 2024" },
  { id: "cleaning", name: "Cleaning Services", category: "Home Services", openRate: 45.2, clickRate: 2.35, conversionRate: 3.2, avgOrderValue: 180, source: "Campaign Monitor 2024" },
  { id: "pest-control", name: "Pest Control", category: "Home Services", openRate: 43.0, clickRate: 2.18, conversionRate: 2.6, avgOrderValue: 220, source: "MailerLite 2024" },
  
  // Real Estate
  { id: "real-estate", name: "Real Estate", category: "Real Estate", openRate: 41.59, clickRate: 2.39, conversionRate: 1.2, avgOrderValue: 5000, source: "MailerLite 2024" },
  { id: "property-management", name: "Property Management", category: "Real Estate", openRate: 40.8, clickRate: 2.25, conversionRate: 1.5, avgOrderValue: 1500, source: "Campaign Monitor 2024" },
  { id: "mortgage", name: "Mortgage & Lending", category: "Real Estate", openRate: 39.5, clickRate: 2.10, conversionRate: 1.0, avgOrderValue: 3500, source: "HubSpot 2025" },
  
  // Automotive
  { id: "automotive", name: "Automotive", category: "Automotive", openRate: 41.5, clickRate: 2.18, conversionRate: 1.8, avgOrderValue: 450, source: "Mailchimp 2024" },
  { id: "auto-repair", name: "Auto Repair", category: "Automotive", openRate: 42.8, clickRate: 2.25, conversionRate: 2.5, avgOrderValue: 380, source: "MailerLite 2024" },
  { id: "auto-dealer", name: "Auto Dealership", category: "Automotive", openRate: 40.2, clickRate: 1.95, conversionRate: 0.8, avgOrderValue: 2500, source: "HubSpot 2025" },
  
  // Education
  { id: "education", name: "Education", category: "Education", openRate: 44.90, clickRate: 3.55, conversionRate: 2.8, avgOrderValue: 250, source: "MailerLite 2024" },
  { id: "training-courses", name: "Training & Courses", category: "Education", openRate: 43.5, clickRate: 3.20, conversionRate: 3.2, avgOrderValue: 350, source: "Campaign Monitor 2024" },
  { id: "childcare", name: "Childcare & Daycare", category: "Education", openRate: 46.2, clickRate: 2.85, conversionRate: 2.5, avgOrderValue: 800, source: "MailerLite 2024" },
  
  // Beauty & Personal Care
  { id: "beauty-salon", name: "Beauty Salon", category: "Beauty & Personal Care", openRate: 42.5, clickRate: 2.35, conversionRate: 3.5, avgOrderValue: 85, source: "Klaviyo 2025" },
  { id: "barbershop", name: "Barbershop", category: "Beauty & Personal Care", openRate: 43.8, clickRate: 2.42, conversionRate: 3.8, avgOrderValue: 40, source: "MailerLite 2024" },
  { id: "medspa", name: "Med Spa", category: "Beauty & Personal Care", openRate: 44.2, clickRate: 2.55, conversionRate: 2.8, avgOrderValue: 450, source: "Klaviyo 2025" },
  
  // Technology & SaaS
  { id: "saas", name: "SaaS", category: "Technology", openRate: 38.14, clickRate: 1.19, conversionRate: 2.5, avgOrderValue: 150, source: "ActiveCampaign 2024" },
  { id: "technology", name: "Technology", category: "Technology", openRate: 39.5, clickRate: 1.85, conversionRate: 2.0, avgOrderValue: 200, source: "HubSpot 2025" },
  { id: "it-services", name: "IT Services", category: "Technology", openRate: 40.2, clickRate: 2.05, conversionRate: 1.8, avgOrderValue: 500, source: "HubSpot 2025" },
  
  // Nonprofit
  { id: "nonprofit", name: "Nonprofit", category: "Nonprofit", openRate: 46.49, clickRate: 2.66, conversionRate: 4.5, avgOrderValue: 75, source: "Campaign Monitor 2024" },
  { id: "religious", name: "Religious Organizations", category: "Nonprofit", openRate: 48.2, clickRate: 2.85, conversionRate: 5.0, avgOrderValue: 50, source: "MailerLite 2024" },
  
  // Entertainment & Recreation
  { id: "entertainment", name: "Entertainment", category: "Entertainment", openRate: 42.8, clickRate: 2.45, conversionRate: 3.0, avgOrderValue: 65, source: "Mailchimp 2024" },
  { id: "events", name: "Events & Venues", category: "Entertainment", openRate: 44.5, clickRate: 2.68, conversionRate: 3.5, avgOrderValue: 120, source: "Campaign Monitor 2024" },
  { id: "photography", name: "Photography", category: "Entertainment", openRate: 43.2, clickRate: 2.52, conversionRate: 2.2, avgOrderValue: 500, source: "MailerLite 2024" },
  
  // Pet Services
  { id: "pet-services", name: "Pet Services", category: "Pet Services", openRate: 45.8, clickRate: 2.75, conversionRate: 3.2, avgOrderValue: 85, source: "Klaviyo 2025" },
  { id: "veterinary", name: "Veterinary", category: "Pet Services", openRate: 47.2, clickRate: 2.85, conversionRate: 3.5, avgOrderValue: 180, source: "MailerLite 2024" },
  { id: "pet-grooming", name: "Pet Grooming", category: "Pet Services", openRate: 46.5, clickRate: 2.80, conversionRate: 4.0, avgOrderValue: 65, source: "Campaign Monitor 2024" },
];

// Get benchmarks grouped by category
export const getEmailBenchmarksByCategory = (): Record<string, EmailBenchmark[]> => {
  return emailBenchmarks.reduce((acc, benchmark) => {
    if (!acc[benchmark.category]) {
      acc[benchmark.category] = [];
    }
    acc[benchmark.category].push(benchmark);
    return acc;
  }, {} as Record<string, EmailBenchmark[]>);
};

// All industries average (2024-2025)
export const allIndustriesAverage: EmailBenchmark = {
  id: "all-industries",
  name: "All Industries Average",
  category: "General",
  openRate: 42.35,
  clickRate: 2.30,
  conversionRate: 1.22,
  avgOrderValue: 150,
  source: "MailerLite/HubSpot 2024-2025"
};

// Data sources for citation
export const emailBenchmarkSources = [
  { name: "Klaviyo", year: "2025", url: "https://www.klaviyo.com/products/email-marketing/benchmarks" },
  { name: "HubSpot", year: "2025", url: "https://blog.hubspot.com/marketing/email-marketing-stats" },
  { name: "MailerLite", year: "2024", url: "https://www.mailerlite.com/blog/compare-your-email-performance-metrics-industry-benchmarks" },
  { name: "Campaign Monitor", year: "2024", url: "https://www.campaignmonitor.com/resources/guides/email-marketing-benchmarks/" },
  { name: "Mailchimp", year: "2024", url: "https://mailchimp.com/resources/email-marketing-benchmarks/" },
  { name: "Litmus", year: "2023", url: "https://www.litmus.com/resources/email-marketing-roi" },
];
