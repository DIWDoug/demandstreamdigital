import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const countryCodes = [
  { code: "+1", country: "US/CA", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+61", country: "AU", flag: "🇦🇺" },
  { code: "+64", country: "NZ", flag: "🇳🇿" },
  { code: "+353", country: "IE", flag: "🇮🇪" },
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
  { code: "+34", country: "ES", flag: "🇪🇸" },
  { code: "+39", country: "IT", flag: "🇮🇹" },
  { code: "+81", country: "JP", flag: "🇯🇵" },
  { code: "+86", country: "CN", flag: "🇨🇳" },
  { code: "+52", country: "MX", flag: "🇲🇽" },
  { code: "+55", country: "BR", flag: "🇧🇷" },
  { code: "+27", country: "ZA", flag: "🇿🇦" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+65", country: "SG", flag: "🇸🇬" },
  { code: "+63", country: "PH", flag: "🇵🇭" },
];

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  countryCode: string;
  onCountryCodeChange: (code: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const PhoneInput = ({
  value,
  onChange,
  countryCode,
  onCountryCodeChange,
  placeholder = "Phone number",
  required = false,
  className = "",
}: PhoneInputProps) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      <Select value={countryCode} onValueChange={onCountryCodeChange}>
        <SelectTrigger className="w-[90px] px-2 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-all shrink-0">
          <SelectValue>
            {countryCodes.find(c => c.code === countryCode)?.flag || "🇺🇸"} {countryCode}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-background border-border">
          {countryCodes.map((country) => (
            <SelectItem key={country.code} value={country.code}>
              {country.flag} {country.code} ({country.country})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <input
        type="tel"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-text-muted focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-all text-base"
      />
    </div>
  );
};

export default PhoneInput;
