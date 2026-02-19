// Shared constants across the site

// Site URL (canonical, non-www)
export const SITE_URL = "https://serviceforgedigital.com";

// Contact Information
export const PHONE_NUMBER = "+1 (214) 307-2995";
export const PHONE_NUMBER_RAW = "+12143072995";
export const PHONE_HREF = `tel:${PHONE_NUMBER_RAW}`;
export const EMAIL = "hello@serviceforgedigital.com";

// NAP (Name, Address, Phone) - Critical for Local SEO
export const BUSINESS_NAME = "ServiceForge Digital";
export const ADDRESS = {
  street: "4849 Greenville Ave Suite 100 176",
  city: "Dallas",
  state: "TX",
  zip: "75206",
  country: "United States",
  full: "4849 Greenville Ave Suite 100 176, Dallas, TX 75206, United States"
};

// Business Hours
export const BUSINESS_HOURS = {
  monday: { open: "08:00", close: "18:00" },
  tuesday: { open: "08:00", close: "18:00" },
  wednesday: { open: "08:00", close: "18:00" },
  thursday: { open: "08:00", close: "18:00" },
  friday: { open: "08:00", close: "18:00" },
  saturday: null, // Closed
  sunday: null, // Closed
};
