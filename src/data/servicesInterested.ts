export interface ServiceInterestOption {
  value: string;
  label: string;
}

export const serviceInterestOptions: ServiceInterestOption[] = [
  { value: "local-seo", label: "Local SEO" },
  { value: "google-maps", label: "Google Maps / GBP" },
  { value: "paid-media", label: "Paid Media (Google/Meta)" },
  { value: "content-marketing", label: "Content Marketing" },
  { value: "reporting", label: "Reporting & Dashboards" },
  { value: "authority", label: "Authority / Links" },
  { value: "email-marketing", label: "Email Marketing" },
  { value: "social-media", label: "Social Media" },
];
