// US Metropolitan areas with populations (2024 estimates)
// Includes all metros with 200,000+ population
// Organized by population tier for pricing calculations

export interface Metro {
  name: string;
  state: string;
  population: number;
  tier: 'small' | 'medium' | 'large' | 'major' | 'mega';
}

export const metros: Metro[] = [
  // Mega metros (5M+)
  { name: "New York", state: "NY", population: 19500000, tier: "mega" },
  { name: "Los Angeles", state: "CA", population: 12900000, tier: "mega" },
  { name: "Chicago", state: "IL", population: 9500000, tier: "mega" },
  { name: "Dallas-Fort Worth", state: "TX", population: 7900000, tier: "mega" },
  { name: "Houston", state: "TX", population: 7300000, tier: "mega" },
  { name: "Washington DC", state: "DC", population: 6400000, tier: "mega" },
  { name: "Philadelphia", state: "PA", population: 6200000, tier: "mega" },
  { name: "Atlanta", state: "GA", population: 6200000, tier: "mega" },
  { name: "Miami", state: "FL", population: 6100000, tier: "mega" },
  { name: "Phoenix", state: "AZ", population: 5000000, tier: "mega" },
  
  // Major metros (2M-5M)
  { name: "Boston", state: "MA", population: 4900000, tier: "major" },
  { name: "San Francisco Bay Area", state: "CA", population: 4700000, tier: "major" },
  { name: "Riverside-San Bernardino", state: "CA", population: 4600000, tier: "major" },
  { name: "Detroit", state: "MI", population: 4300000, tier: "major" },
  { name: "Seattle", state: "WA", population: 4000000, tier: "major" },
  { name: "Minneapolis-St. Paul", state: "MN", population: 3700000, tier: "major" },
  { name: "San Diego", state: "CA", population: 3300000, tier: "major" },
  { name: "Tampa Bay", state: "FL", population: 3200000, tier: "major" },
  { name: "Denver", state: "CO", population: 2900000, tier: "major" },
  { name: "St. Louis", state: "MO", population: 2800000, tier: "major" },
  { name: "Orlando", state: "FL", population: 2700000, tier: "major" },
  { name: "Charlotte", state: "NC", population: 2700000, tier: "major" },
  { name: "San Antonio", state: "TX", population: 2600000, tier: "major" },
  { name: "Portland", state: "OR", population: 2500000, tier: "major" },
  { name: "Sacramento", state: "CA", population: 2400000, tier: "major" },
  { name: "Pittsburgh", state: "PA", population: 2400000, tier: "major" },
  { name: "Austin", state: "TX", population: 2300000, tier: "major" },
  { name: "Las Vegas", state: "NV", population: 2300000, tier: "major" },
  { name: "Cincinnati", state: "OH", population: 2200000, tier: "major" },
  { name: "Kansas City", state: "MO", population: 2200000, tier: "major" },
  { name: "Columbus", state: "OH", population: 2100000, tier: "major" },
  { name: "Indianapolis", state: "IN", population: 2100000, tier: "major" },
  { name: "Cleveland", state: "OH", population: 2000000, tier: "major" },
  
  // Large metros (1M-2M)
  { name: "Nashville", state: "TN", population: 1900000, tier: "large" },
  { name: "San Jose", state: "CA", population: 1900000, tier: "large" },
  { name: "Virginia Beach-Norfolk", state: "VA", population: 1800000, tier: "large" },
  { name: "Jacksonville", state: "FL", population: 1600000, tier: "large" },
  { name: "Providence", state: "RI", population: 1600000, tier: "large" },
  { name: "Milwaukee", state: "WI", population: 1600000, tier: "large" },
  { name: "Oklahoma City", state: "OK", population: 1400000, tier: "large" },
  { name: "Raleigh-Durham", state: "NC", population: 1400000, tier: "large" },
  { name: "Memphis", state: "TN", population: 1300000, tier: "large" },
  { name: "Richmond", state: "VA", population: 1300000, tier: "large" },
  { name: "Louisville", state: "KY", population: 1300000, tier: "large" },
  { name: "Salt Lake City", state: "UT", population: 1200000, tier: "large" },
  { name: "Hartford", state: "CT", population: 1200000, tier: "large" },
  { name: "Birmingham", state: "AL", population: 1100000, tier: "large" },
  { name: "Buffalo", state: "NY", population: 1100000, tier: "large" },
  { name: "Rochester", state: "NY", population: 1100000, tier: "large" },
  { name: "Grand Rapids", state: "MI", population: 1100000, tier: "large" },
  { name: "Tucson", state: "AZ", population: 1000000, tier: "large" },
  { name: "Honolulu", state: "HI", population: 1000000, tier: "large" },
  { name: "Tulsa", state: "OK", population: 1000000, tier: "large" },
  { name: "Urban Honolulu", state: "HI", population: 980000, tier: "large" },
  
  // Medium metros (500K-1M)
  { name: "Fresno", state: "CA", population: 990000, tier: "medium" },
  { name: "Bridgeport-Stamford", state: "CT", population: 950000, tier: "medium" },
  { name: "Worcester", state: "MA", population: 950000, tier: "medium" },
  { name: "Albuquerque", state: "NM", population: 920000, tier: "medium" },
  { name: "Omaha", state: "NE", population: 900000, tier: "medium" },
  { name: "New Haven", state: "CT", population: 870000, tier: "medium" },
  { name: "New Orleans", state: "LA", population: 850000, tier: "medium" },
  { name: "Greenville", state: "SC", population: 850000, tier: "medium" },
  { name: "Bakersfield", state: "CA", population: 830000, tier: "medium" },
  { name: "Albany", state: "NY", population: 820000, tier: "medium" },
  { name: "Knoxville", state: "TN", population: 800000, tier: "medium" },
  { name: "McAllen", state: "TX", population: 790000, tier: "medium" },
  { name: "El Paso", state: "TX", population: 780000, tier: "medium" },
  { name: "Baton Rouge", state: "LA", population: 770000, tier: "medium" },
  { name: "Dayton", state: "OH", population: 760000, tier: "medium" },
  { name: "Columbia", state: "SC", population: 750000, tier: "medium" },
  { name: "Sarasota", state: "FL", population: 750000, tier: "medium" },
  { name: "North Port-Bradenton", state: "FL", population: 740000, tier: "medium" },
  { name: "Charleston", state: "SC", population: 730000, tier: "medium" },
  { name: "Colorado Springs", state: "CO", population: 720000, tier: "medium" },
  { name: "Greensboro", state: "NC", population: 720000, tier: "medium" },
  { name: "Little Rock", state: "AR", population: 700000, tier: "medium" },
  { name: "Stockton", state: "CA", population: 690000, tier: "medium" },
  { name: "Boise", state: "ID", population: 680000, tier: "medium" },
  { name: "Akron", state: "OH", population: 680000, tier: "medium" },
  { name: "Syracuse", state: "NY", population: 650000, tier: "medium" },
  { name: "Winston-Salem", state: "NC", population: 640000, tier: "medium" },
  { name: "Wichita", state: "KS", population: 630000, tier: "medium" },
  { name: "Madison", state: "WI", population: 620000, tier: "medium" },
  { name: "Cape Coral-Fort Myers", state: "FL", population: 610000, tier: "medium" },
  { name: "Lakeland", state: "FL", population: 600000, tier: "medium" },
  { name: "Ogden", state: "UT", population: 590000, tier: "medium" },
  { name: "Des Moines", state: "IA", population: 580000, tier: "medium" },
  { name: "Toledo", state: "OH", population: 570000, tier: "medium" },
  { name: "Springfield", state: "MA", population: 550000, tier: "medium" },
  { name: "Jackson", state: "MS", population: 540000, tier: "medium" },
  { name: "Harrisburg", state: "PA", population: 530000, tier: "medium" },
  { name: "Chattanooga", state: "TN", population: 520000, tier: "medium" },
  { name: "Spokane", state: "WA", population: 510000, tier: "medium" },
  { name: "Deltona-Daytona Beach", state: "FL", population: 510000, tier: "medium" },
  { name: "Palm Bay-Melbourne", state: "FL", population: 505000, tier: "medium" },
  
  // Small metros (200K-500K) - Expanded list
  { name: "Scranton", state: "PA", population: 490000, tier: "small" },
  { name: "Modesto", state: "CA", population: 480000, tier: "small" },
  { name: "Fayetteville", state: "AR", population: 470000, tier: "small" },
  { name: "Lansing", state: "MI", population: 460000, tier: "small" },
  { name: "Augusta", state: "GA", population: 450000, tier: "small" },
  { name: "Lexington", state: "KY", population: 440000, tier: "small" },
  { name: "Reno", state: "NV", population: 430000, tier: "small" },
  { name: "Fort Wayne", state: "IN", population: 420000, tier: "small" },
  { name: "Pensacola", state: "FL", population: 410000, tier: "small" },
  { name: "Santa Rosa", state: "CA", population: 400000, tier: "small" },
  { name: "Huntsville", state: "AL", population: 390000, tier: "small" },
  { name: "Asheville", state: "NC", population: 380000, tier: "small" },
  { name: "Savannah", state: "GA", population: 370000, tier: "small" },
  { name: "Shreveport", state: "LA", population: 360000, tier: "small" },
  { name: "Mobile", state: "AL", population: 350000, tier: "small" },
  { name: "Tallahassee", state: "FL", population: 340000, tier: "small" },
  { name: "Salinas", state: "CA", population: 330000, tier: "small" },
  { name: "Santa Barbara", state: "CA", population: 320000, tier: "small" },
  { name: "Peoria", state: "IL", population: 310000, tier: "small" },
  { name: "Amarillo", state: "TX", population: 300000, tier: "small" },
  { name: "Lubbock", state: "TX", population: 290000, tier: "small" },
  { name: "Corpus Christi", state: "TX", population: 280000, tier: "small" },
  { name: "Eugene", state: "OR", population: 270000, tier: "small" },
  { name: "Myrtle Beach", state: "SC", population: 260000, tier: "small" },
  { name: "Salem", state: "OR", population: 250000, tier: "small" },
  { name: "Lincoln", state: "NE", population: 240000, tier: "small" },
  { name: "Fort Collins", state: "CO", population: 230000, tier: "small" },
  { name: "Gainesville", state: "FL", population: 220000, tier: "small" },
  { name: "Evansville", state: "IN", population: 210000, tier: "small" },
  { name: "Green Bay", state: "WI", population: 200000, tier: "small" },
  // Additional cities 200K+ - expanded coverage
  { name: "Provo-Orem", state: "UT", population: 480000, tier: "small" },
  { name: "Oxnard-Thousand Oaks", state: "CA", population: 460000, tier: "small" },
  { name: "Killeen-Temple", state: "TX", population: 450000, tier: "small" },
  { name: "Durham-Chapel Hill", state: "NC", population: 440000, tier: "small" },
  { name: "Palm Coast", state: "FL", population: 320000, tier: "small" },
  { name: "Visalia", state: "CA", population: 320000, tier: "small" },
  { name: "Brownsville", state: "TX", population: 315000, tier: "small" },
  { name: "Fayetteville", state: "NC", population: 310000, tier: "small" },
  { name: "Anchorage", state: "AK", population: 300000, tier: "small" },
  { name: "Hickory", state: "NC", population: 290000, tier: "small" },
  { name: "Beaumont-Port Arthur", state: "TX", population: 285000, tier: "small" },
  { name: "South Bend", state: "IN", population: 280000, tier: "small" },
  { name: "Spartanburg", state: "SC", population: 275000, tier: "small" },
  { name: "Reading", state: "PA", population: 270000, tier: "small" },
  { name: "Canton", state: "OH", population: 265000, tier: "small" },
  { name: "Rockford", state: "IL", population: 260000, tier: "small" },
  { name: "Shreveport-Bossier City", state: "LA", population: 360000, tier: "small" },
  { name: "Flint", state: "MI", population: 255000, tier: "small" },
  { name: "Youngstown", state: "OH", population: 250000, tier: "small" },
  { name: "Atlantic City", state: "NJ", population: 245000, tier: "small" },
  { name: "Waco", state: "TX", population: 240000, tier: "small" },
  { name: "Clarksville", state: "TN", population: 235000, tier: "small" },
  { name: "Kalamazoo", state: "MI", population: 230000, tier: "small" },
  { name: "Lafayette", state: "LA", population: 225000, tier: "small" },
  { name: "Ann Arbor", state: "MI", population: 220000, tier: "small" },
  { name: "Springfield", state: "MO", population: 215000, tier: "small" },
  { name: "Tyler", state: "TX", population: 210000, tier: "small" },
  { name: "Wilmington", state: "NC", population: 210000, tier: "small" },
  { name: "Davenport", state: "IA", population: 205000, tier: "small" },
  { name: "Huntington", state: "WV", population: 205000, tier: "small" },
  { name: "Fort Smith", state: "AR", population: 200000, tier: "small" },
  { name: "Montgomery", state: "AL", population: 200000, tier: "small" },
  { name: "Trenton", state: "NJ", population: 200000, tier: "small" },
  // Popular vacation/resort metros
  { name: "Destin-Fort Walton Beach", state: "FL", population: 210000, tier: "small" },
  { name: "Naples", state: "FL", population: 380000, tier: "small" },
  { name: "Panama City", state: "FL", population: 205000, tier: "small" },
  { name: "Port St. Lucie", state: "FL", population: 320000, tier: "small" },
  { name: "Ocala", state: "FL", population: 285000, tier: "small" },
  { name: "Hilton Head-Bluffton", state: "SC", population: 205000, tier: "small" },
  { name: "Bend", state: "OR", population: 210000, tier: "small" },
  { name: "Santa Fe", state: "NM", population: 200000, tier: "small" },
  { name: "Boulder", state: "CO", population: 330000, tier: "small" },
  { name: "Lake Havasu City-Kingman", state: "AZ", population: 215000, tier: "small" },
  { name: "Prescott", state: "AZ", population: 240000, tier: "small" },
  { name: "St. George", state: "UT", population: 200000, tier: "small" },
  { name: "Coeur d'Alene", state: "ID", population: 200000, tier: "small" },
  // Florida Gulf Coast cities (part of Tampa Bay metro but searchable individually)
  { name: "St. Petersburg", state: "FL", population: 265000, tier: "small" },
  { name: "Clearwater", state: "FL", population: 117000, tier: "small" },
  { name: "Bradenton", state: "FL", population: 115000, tier: "small" },
  // Additional Saint-named cities
  { name: "St. Augustine", state: "FL", population: 200000, tier: "small" },
  { name: "St. Cloud", state: "MN", population: 220000, tier: "small" },
  { name: "St. Joseph", state: "MO", population: 200000, tier: "small" },
];

// Population tier multipliers for pricing
export const tierMultipliers: Record<Metro['tier'], number> = {
  small: 0.85,
  medium: 1.0,
  large: 1.15,
  major: 1.35,
  mega: 1.55
};

// Get metros filtered and sorted for search
// Handles "Saint" vs "St." variations for better matching
export const searchMetros = (query: string): Metro[] => {
  if (!query || query.length < 2) return [];
  const lower = query.toLowerCase();
  
  // Normalize search variations: "saint" <-> "st." and "st " <-> "saint "
  const normalizeForSearch = (text: string): string => {
    return text
      .replace(/\bsaint\b/gi, 'st.')
      .replace(/\bst\b/gi, 'st.')
      .toLowerCase();
  };
  
  const normalizedQuery = normalizeForSearch(lower);
  
  return metros
    .filter(m => {
      const normalizedName = normalizeForSearch(m.name);
      const normalizedFull = normalizeForSearch(`${m.name}, ${m.state}`);
      return normalizedName.includes(normalizedQuery) || 
        m.state.toLowerCase().includes(lower) ||
        normalizedFull.includes(normalizedQuery) ||
        m.name.toLowerCase().includes(lower);
    })
    .sort((a, b) => b.population - a.population) // Sort by population descending
    .slice(0, 15); // Show more results
};

// Format population for display
export const formatPopulation = (pop: number): string => {
  if (pop >= 1000000) {
    return `${(pop / 1000000).toFixed(1)}M`;
  }
  return `${(pop / 1000).toFixed(0)}K`;
};
