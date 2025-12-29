// Industry data with average CPC benchmarks and competition factors
// CPCs are approximate averages based on industry research

export interface Industry {
  id: string;
  name: string;
  category: string;
  avgCpc: number; // Average cost per click in USD
  competition: 'low' | 'medium' | 'high' | 'very-high';
  seoComplexity: number; // 1-5 scale
}

// Industry benchmark data for ROI calculator
export interface IndustryBenchmark {
  id: string;
  name: string;
  category: string;
  conversionRate: number; // Website visitor to lead (%)
  closeRate: number; // Lead to customer (%)
  avgCustomerValue: number; // Average revenue per customer ($)
}

export const industryBenchmarks: IndustryBenchmark[] = [
  // Legal
  { id: "legal", name: "Legal Services", category: "Legal", conversionRate: 3.5, closeRate: 25, avgCustomerValue: 4500 },
  // Medical & Healthcare
  { id: "dental", name: "Dental Practice", category: "Medical", conversionRate: 4.2, closeRate: 35, avgCustomerValue: 800 },
  { id: "medical-spa", name: "Med Spa / Cosmetic", category: "Medical", conversionRate: 3.8, closeRate: 28, avgCustomerValue: 1500 },
  { id: "chiropractic", name: "Chiropractic", category: "Medical", conversionRate: 4.5, closeRate: 32, avgCustomerValue: 600 },
  // Home Services
  { id: "hvac", name: "HVAC", category: "Home Services", conversionRate: 3.2, closeRate: 30, avgCustomerValue: 1200 },
  { id: "plumbing", name: "Plumbing", category: "Home Services", conversionRate: 3.8, closeRate: 35, avgCustomerValue: 450 },
  { id: "roofing", name: "Roofing", category: "Home Services", conversionRate: 2.8, closeRate: 22, avgCustomerValue: 8500 },
  { id: "remodeling", name: "Home Remodeling", category: "Home Services", conversionRate: 2.5, closeRate: 18, avgCustomerValue: 15000 },
  // Real Estate
  { id: "real-estate", name: "Real Estate", category: "Real Estate", conversionRate: 2.2, closeRate: 12, avgCustomerValue: 8500 },
  // Financial Services
  { id: "accounting", name: "Accounting / CPA", category: "Financial", conversionRate: 3.0, closeRate: 28, avgCustomerValue: 2500 },
  { id: "insurance", name: "Insurance", category: "Financial", conversionRate: 2.8, closeRate: 20, avgCustomerValue: 1800 },
  // Fitness & Wellness
  { id: "fitness", name: "Gym / Fitness", category: "Fitness", conversionRate: 5.5, closeRate: 40, avgCustomerValue: 500 },
  { id: "spa", name: "Spa / Wellness", category: "Fitness", conversionRate: 4.8, closeRate: 38, avgCustomerValue: 350 },
  // B2B / Professional Services
  { id: "saas", name: "SaaS / Software", category: "Professional", conversionRate: 2.5, closeRate: 15, avgCustomerValue: 5000 },
  { id: "marketing-agency", name: "Marketing Agency", category: "Professional", conversionRate: 2.8, closeRate: 18, avgCustomerValue: 3500 },
  { id: "it-services", name: "IT Services / MSP", category: "Professional", conversionRate: 2.2, closeRate: 22, avgCustomerValue: 4200 },
  // Education
  { id: "education", name: "Education / Training", category: "Education", conversionRate: 4.0, closeRate: 25, avgCustomerValue: 1200 },
  // E-commerce (general reference)
  { id: "ecommerce", name: "E-commerce", category: "Retail", conversionRate: 2.8, closeRate: 45, avgCustomerValue: 85 },
];

export const industries: Industry[] = [
  // Legal
  { id: "legal-personal-injury", name: "Personal Injury Law", category: "Legal", avgCpc: 150, competition: "very-high", seoComplexity: 5 },
  { id: "legal-criminal-defense", name: "Criminal Defense", category: "Legal", avgCpc: 80, competition: "very-high", seoComplexity: 5 },
  { id: "legal-family-law", name: "Family Law / Divorce", category: "Legal", avgCpc: 45, competition: "high", seoComplexity: 4 },
  { id: "legal-immigration", name: "Immigration Law", category: "Legal", avgCpc: 35, competition: "high", seoComplexity: 4 },
  { id: "legal-estate-planning", name: "Estate Planning", category: "Legal", avgCpc: 30, competition: "medium", seoComplexity: 3 },
  { id: "legal-business", name: "Business Law", category: "Legal", avgCpc: 40, competition: "medium", seoComplexity: 4 },
  
  // Medical & Healthcare
  { id: "medical-dental", name: "Dental Practice", category: "Medical", avgCpc: 12, competition: "high", seoComplexity: 3 },
  { id: "medical-cosmetic", name: "Cosmetic / Plastic Surgery", category: "Medical", avgCpc: 35, competition: "very-high", seoComplexity: 4 },
  { id: "medical-dermatology", name: "Dermatology", category: "Medical", avgCpc: 18, competition: "high", seoComplexity: 3 },
  { id: "medical-chiropractic", name: "Chiropractic", category: "Medical", avgCpc: 15, competition: "high", seoComplexity: 3 },
  { id: "medical-optometry", name: "Optometry / Eye Care", category: "Medical", avgCpc: 10, competition: "medium", seoComplexity: 2 },
  { id: "medical-veterinary", name: "Veterinary", category: "Medical", avgCpc: 8, competition: "medium", seoComplexity: 2 },
  { id: "medical-physical-therapy", name: "Physical Therapy", category: "Medical", avgCpc: 12, competition: "medium", seoComplexity: 3 },
  { id: "medical-mental-health", name: "Mental Health / Therapy", category: "Medical", avgCpc: 20, competition: "high", seoComplexity: 3 },
  
  // Home Services
  { id: "home-hvac", name: "HVAC", category: "Home Services", avgCpc: 25, competition: "high", seoComplexity: 3 },
  { id: "home-plumbing", name: "Plumbing", category: "Home Services", avgCpc: 30, competition: "high", seoComplexity: 3 },
  { id: "home-electrical", name: "Electrical", category: "Home Services", avgCpc: 22, competition: "high", seoComplexity: 3 },
  { id: "home-roofing", name: "Roofing", category: "Home Services", avgCpc: 35, competition: "very-high", seoComplexity: 4 },
  { id: "home-landscaping", name: "Landscaping", category: "Home Services", avgCpc: 8, competition: "medium", seoComplexity: 2 },
  { id: "home-pest-control", name: "Pest Control", category: "Home Services", avgCpc: 18, competition: "high", seoComplexity: 3 },
  { id: "home-cleaning", name: "House Cleaning", category: "Home Services", avgCpc: 6, competition: "medium", seoComplexity: 2 },
  { id: "home-remodeling", name: "Home Remodeling", category: "Home Services", avgCpc: 28, competition: "high", seoComplexity: 4 },
  { id: "home-painting", name: "Painting", category: "Home Services", avgCpc: 12, competition: "medium", seoComplexity: 2 },
  { id: "home-garage-door", name: "Garage Door", category: "Home Services", avgCpc: 20, competition: "high", seoComplexity: 3 },
  { id: "home-flooring", name: "Flooring", category: "Home Services", avgCpc: 15, competition: "medium", seoComplexity: 3 },
  { id: "home-windows", name: "Windows & Doors", category: "Home Services", avgCpc: 22, competition: "high", seoComplexity: 3 },
  
  // Automotive
  { id: "auto-repair", name: "Auto Repair", category: "Automotive", avgCpc: 10, competition: "high", seoComplexity: 3 },
  { id: "auto-body-shop", name: "Auto Body Shop", category: "Automotive", avgCpc: 12, competition: "medium", seoComplexity: 3 },
  { id: "auto-dealer", name: "Car Dealership", category: "Automotive", avgCpc: 25, competition: "very-high", seoComplexity: 4 },
  { id: "auto-towing", name: "Towing Service", category: "Automotive", avgCpc: 15, competition: "high", seoComplexity: 2 },
  
  // Real Estate & Property
  { id: "real-estate-agent", name: "Real Estate Agent", category: "Real Estate", avgCpc: 20, competition: "very-high", seoComplexity: 4 },
  { id: "real-estate-property-mgmt", name: "Property Management", category: "Real Estate", avgCpc: 15, competition: "high", seoComplexity: 3 },
  { id: "real-estate-mortgage", name: "Mortgage Lender", category: "Real Estate", avgCpc: 40, competition: "very-high", seoComplexity: 4 },
  
  // Financial Services
  { id: "finance-accounting", name: "Accounting / CPA", category: "Financial", avgCpc: 25, competition: "high", seoComplexity: 3 },
  { id: "finance-insurance", name: "Insurance Agency", category: "Financial", avgCpc: 50, competition: "very-high", seoComplexity: 4 },
  { id: "finance-wealth-mgmt", name: "Financial Advisor", category: "Financial", avgCpc: 35, competition: "high", seoComplexity: 4 },
  { id: "finance-tax", name: "Tax Preparation", category: "Financial", avgCpc: 18, competition: "high", seoComplexity: 3 },
  
  // Fitness & Wellness
  { id: "fitness-gym", name: "Gym / Fitness Center", category: "Fitness", avgCpc: 8, competition: "high", seoComplexity: 2 },
  { id: "fitness-personal-training", name: "Personal Training", category: "Fitness", avgCpc: 10, competition: "medium", seoComplexity: 2 },
  { id: "fitness-yoga", name: "Yoga Studio", category: "Fitness", avgCpc: 6, competition: "medium", seoComplexity: 2 },
  { id: "fitness-spa", name: "Med Spa / Day Spa", category: "Fitness", avgCpc: 15, competition: "high", seoComplexity: 3 },
  { id: "fitness-massage", name: "Massage Therapy", category: "Fitness", avgCpc: 8, competition: "medium", seoComplexity: 2 },
  
  // Food & Hospitality
  { id: "food-restaurant", name: "Restaurant", category: "Food & Hospitality", avgCpc: 4, competition: "medium", seoComplexity: 2 },
  { id: "food-catering", name: "Catering", category: "Food & Hospitality", avgCpc: 8, competition: "medium", seoComplexity: 2 },
  { id: "food-bakery", name: "Bakery", category: "Food & Hospitality", avgCpc: 3, competition: "low", seoComplexity: 1 },
  { id: "food-hotel", name: "Hotel / Lodging", category: "Food & Hospitality", avgCpc: 12, competition: "high", seoComplexity: 3 },
  
  // Professional Services
  { id: "pro-marketing", name: "Marketing Agency", category: "Professional", avgCpc: 30, competition: "very-high", seoComplexity: 4 },
  { id: "pro-it-services", name: "IT Services / MSP", category: "Professional", avgCpc: 35, competition: "high", seoComplexity: 4 },
  { id: "pro-staffing", name: "Staffing Agency", category: "Professional", avgCpc: 20, competition: "high", seoComplexity: 3 },
  { id: "pro-photography", name: "Photography", category: "Professional", avgCpc: 5, competition: "medium", seoComplexity: 2 },
  { id: "pro-event-planning", name: "Event Planning", category: "Professional", avgCpc: 8, competition: "medium", seoComplexity: 2 },
  
  // Education
  { id: "edu-tutoring", name: "Tutoring", category: "Education", avgCpc: 12, competition: "medium", seoComplexity: 2 },
  { id: "edu-driving-school", name: "Driving School", category: "Education", avgCpc: 8, competition: "medium", seoComplexity: 2 },
  { id: "edu-daycare", name: "Daycare / Childcare", category: "Education", avgCpc: 10, competition: "high", seoComplexity: 3 },
  { id: "edu-preschool", name: "Preschool", category: "Education", avgCpc: 12, competition: "high", seoComplexity: 3 },
  
  // Other
  { id: "other-storage", name: "Self Storage", category: "Other", avgCpc: 15, competition: "high", seoComplexity: 3 },
  { id: "other-funeral", name: "Funeral Home", category: "Other", avgCpc: 18, competition: "medium", seoComplexity: 3 },
  { id: "other-senior-care", name: "Senior Care / Assisted Living", category: "Other", avgCpc: 35, competition: "high", seoComplexity: 4 },
  { id: "other-rehab", name: "Addiction Rehab", category: "Other", avgCpc: 80, competition: "very-high", seoComplexity: 5 },
];

// Group industries by category for dropdown display
export const getIndustriesByCategory = (): Record<string, Industry[]> => {
  return industries.reduce((acc, industry) => {
    if (!acc[industry.category]) {
      acc[industry.category] = [];
    }
    acc[industry.category].push(industry);
    return acc;
  }, {} as Record<string, Industry[]>);
};

// CPC-based multipliers for Google Ads pricing
export const getCpcMultiplier = (avgCpc: number): number => {
  if (avgCpc >= 80) return 1.6;  // Very high CPC
  if (avgCpc >= 40) return 1.35; // High CPC
  if (avgCpc >= 20) return 1.15; // Medium-high CPC
  if (avgCpc >= 10) return 1.0;  // Medium CPC
  return 0.85;                   // Low CPC
};

// SEO complexity multipliers
export const getSeoComplexityMultiplier = (complexity: number): number => {
  const multipliers: Record<number, number> = {
    1: 0.8,
    2: 0.9,
    3: 1.0,
    4: 1.2,
    5: 1.4
  };
  return multipliers[complexity] || 1.0;
};

// Competition level multipliers
export const competitionMultipliers: Record<Industry['competition'], number> = {
  'low': 0.8,
  'medium': 1.0,
  'high': 1.25,
  'very-high': 1.5
};
