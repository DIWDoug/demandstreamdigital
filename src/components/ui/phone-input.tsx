import { useState, useMemo, useCallback } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { AsYouType, isValidPhoneNumber, CountryCode } from "libphonenumber-js";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const countries = [
  { code: "+1", id: "US", name: "United States", flag: "🇺🇸" },
  { code: "+1", id: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "+44", id: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+61", id: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "+64", id: "NZ", name: "New Zealand", flag: "🇳🇿" },
  { code: "+353", id: "IE", name: "Ireland", flag: "🇮🇪" },
  { code: "+91", id: "IN", name: "India", flag: "🇮🇳" },
  { code: "+49", id: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "+33", id: "FR", name: "France", flag: "🇫🇷" },
  { code: "+34", id: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "+39", id: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "+81", id: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "+86", id: "CN", name: "China", flag: "🇨🇳" },
  { code: "+52", id: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "+55", id: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "+27", id: "ZA", name: "South Africa", flag: "🇿🇦" },
  { code: "+971", id: "AE", name: "United Arab Emirates", flag: "🇦🇪" },
  { code: "+65", id: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "+63", id: "PH", name: "Philippines", flag: "🇵🇭" },
  { code: "+93", id: "AF", name: "Afghanistan", flag: "🇦🇫" },
  { code: "+355", id: "AL", name: "Albania", flag: "🇦🇱" },
  { code: "+213", id: "DZ", name: "Algeria", flag: "🇩🇿" },
  { code: "+376", id: "AD", name: "Andorra", flag: "🇦🇩" },
  { code: "+244", id: "AO", name: "Angola", flag: "🇦🇴" },
  { code: "+54", id: "AR", name: "Argentina", flag: "🇦🇷" },
  { code: "+374", id: "AM", name: "Armenia", flag: "🇦🇲" },
  { code: "+43", id: "AT", name: "Austria", flag: "🇦🇹" },
  { code: "+994", id: "AZ", name: "Azerbaijan", flag: "🇦🇿" },
  { code: "+973", id: "BH", name: "Bahrain", flag: "🇧🇭" },
  { code: "+880", id: "BD", name: "Bangladesh", flag: "🇧🇩" },
  { code: "+375", id: "BY", name: "Belarus", flag: "🇧🇾" },
  { code: "+32", id: "BE", name: "Belgium", flag: "🇧🇪" },
  { code: "+501", id: "BZ", name: "Belize", flag: "🇧🇿" },
  { code: "+229", id: "BJ", name: "Benin", flag: "🇧🇯" },
  { code: "+975", id: "BT", name: "Bhutan", flag: "🇧🇹" },
  { code: "+591", id: "BO", name: "Bolivia", flag: "🇧🇴" },
  { code: "+387", id: "BA", name: "Bosnia and Herzegovina", flag: "🇧🇦" },
  { code: "+267", id: "BW", name: "Botswana", flag: "🇧🇼" },
  { code: "+673", id: "BN", name: "Brunei", flag: "🇧🇳" },
  { code: "+359", id: "BG", name: "Bulgaria", flag: "🇧🇬" },
  { code: "+226", id: "BF", name: "Burkina Faso", flag: "🇧🇫" },
  { code: "+257", id: "BI", name: "Burundi", flag: "🇧🇮" },
  { code: "+855", id: "KH", name: "Cambodia", flag: "🇰🇭" },
  { code: "+237", id: "CM", name: "Cameroon", flag: "🇨🇲" },
  { code: "+238", id: "CV", name: "Cape Verde", flag: "🇨🇻" },
  { code: "+236", id: "CF", name: "Central African Republic", flag: "🇨🇫" },
  { code: "+235", id: "TD", name: "Chad", flag: "🇹🇩" },
  { code: "+56", id: "CL", name: "Chile", flag: "🇨🇱" },
  { code: "+57", id: "CO", name: "Colombia", flag: "🇨🇴" },
  { code: "+269", id: "KM", name: "Comoros", flag: "🇰🇲" },
  { code: "+242", id: "CG", name: "Congo", flag: "🇨🇬" },
  { code: "+243", id: "CD", name: "DR Congo", flag: "🇨🇩" },
  { code: "+506", id: "CR", name: "Costa Rica", flag: "🇨🇷" },
  { code: "+385", id: "HR", name: "Croatia", flag: "🇭🇷" },
  { code: "+53", id: "CU", name: "Cuba", flag: "🇨🇺" },
  { code: "+357", id: "CY", name: "Cyprus", flag: "🇨🇾" },
  { code: "+420", id: "CZ", name: "Czech Republic", flag: "🇨🇿" },
  { code: "+45", id: "DK", name: "Denmark", flag: "🇩🇰" },
  { code: "+253", id: "DJ", name: "Djibouti", flag: "🇩🇯" },
  { code: "+593", id: "EC", name: "Ecuador", flag: "🇪🇨" },
  { code: "+20", id: "EG", name: "Egypt", flag: "🇪🇬" },
  { code: "+503", id: "SV", name: "El Salvador", flag: "🇸🇻" },
  { code: "+240", id: "GQ", name: "Equatorial Guinea", flag: "🇬🇶" },
  { code: "+291", id: "ER", name: "Eritrea", flag: "🇪🇷" },
  { code: "+372", id: "EE", name: "Estonia", flag: "🇪🇪" },
  { code: "+268", id: "SZ", name: "Eswatini", flag: "🇸🇿" },
  { code: "+251", id: "ET", name: "Ethiopia", flag: "🇪🇹" },
  { code: "+679", id: "FJ", name: "Fiji", flag: "🇫🇯" },
  { code: "+358", id: "FI", name: "Finland", flag: "🇫🇮" },
  { code: "+241", id: "GA", name: "Gabon", flag: "🇬🇦" },
  { code: "+220", id: "GM", name: "Gambia", flag: "🇬🇲" },
  { code: "+995", id: "GE", name: "Georgia", flag: "🇬🇪" },
  { code: "+233", id: "GH", name: "Ghana", flag: "🇬🇭" },
  { code: "+30", id: "GR", name: "Greece", flag: "🇬🇷" },
  { code: "+502", id: "GT", name: "Guatemala", flag: "🇬🇹" },
  { code: "+224", id: "GN", name: "Guinea", flag: "🇬🇳" },
  { code: "+245", id: "GW", name: "Guinea-Bissau", flag: "🇬🇼" },
  { code: "+592", id: "GY", name: "Guyana", flag: "🇬🇾" },
  { code: "+509", id: "HT", name: "Haiti", flag: "🇭🇹" },
  { code: "+504", id: "HN", name: "Honduras", flag: "🇭🇳" },
  { code: "+852", id: "HK", name: "Hong Kong", flag: "🇭🇰" },
  { code: "+36", id: "HU", name: "Hungary", flag: "🇭🇺" },
  { code: "+354", id: "IS", name: "Iceland", flag: "🇮🇸" },
  { code: "+62", id: "ID", name: "Indonesia", flag: "🇮🇩" },
  { code: "+98", id: "IR", name: "Iran", flag: "🇮🇷" },
  { code: "+964", id: "IQ", name: "Iraq", flag: "🇮🇶" },
  { code: "+972", id: "IL", name: "Israel", flag: "🇮🇱" },
  { code: "+225", id: "CI", name: "Ivory Coast", flag: "🇨🇮" },
  { code: "+962", id: "JO", name: "Jordan", flag: "🇯🇴" },
  { code: "+7", id: "KZ", name: "Kazakhstan", flag: "🇰🇿" },
  { code: "+254", id: "KE", name: "Kenya", flag: "🇰🇪" },
  { code: "+686", id: "KI", name: "Kiribati", flag: "🇰🇮" },
  { code: "+965", id: "KW", name: "Kuwait", flag: "🇰🇼" },
  { code: "+996", id: "KG", name: "Kyrgyzstan", flag: "🇰🇬" },
  { code: "+856", id: "LA", name: "Laos", flag: "🇱🇦" },
  { code: "+371", id: "LV", name: "Latvia", flag: "🇱🇻" },
  { code: "+961", id: "LB", name: "Lebanon", flag: "🇱🇧" },
  { code: "+266", id: "LS", name: "Lesotho", flag: "🇱🇸" },
  { code: "+231", id: "LR", name: "Liberia", flag: "🇱🇷" },
  { code: "+218", id: "LY", name: "Libya", flag: "🇱🇾" },
  { code: "+423", id: "LI", name: "Liechtenstein", flag: "🇱🇮" },
  { code: "+370", id: "LT", name: "Lithuania", flag: "🇱🇹" },
  { code: "+352", id: "LU", name: "Luxembourg", flag: "🇱🇺" },
  { code: "+853", id: "MO", name: "Macau", flag: "🇲🇴" },
  { code: "+261", id: "MG", name: "Madagascar", flag: "🇲🇬" },
  { code: "+265", id: "MW", name: "Malawi", flag: "🇲🇼" },
  { code: "+60", id: "MY", name: "Malaysia", flag: "🇲🇾" },
  { code: "+960", id: "MV", name: "Maldives", flag: "🇲🇻" },
  { code: "+223", id: "ML", name: "Mali", flag: "🇲🇱" },
  { code: "+356", id: "MT", name: "Malta", flag: "🇲🇹" },
  { code: "+222", id: "MR", name: "Mauritania", flag: "🇲🇷" },
  { code: "+230", id: "MU", name: "Mauritius", flag: "🇲🇺" },
  { code: "+373", id: "MD", name: "Moldova", flag: "🇲🇩" },
  { code: "+377", id: "MC", name: "Monaco", flag: "🇲🇨" },
  { code: "+976", id: "MN", name: "Mongolia", flag: "🇲🇳" },
  { code: "+382", id: "ME", name: "Montenegro", flag: "🇲🇪" },
  { code: "+212", id: "MA", name: "Morocco", flag: "🇲🇦" },
  { code: "+258", id: "MZ", name: "Mozambique", flag: "🇲🇿" },
  { code: "+95", id: "MM", name: "Myanmar", flag: "🇲🇲" },
  { code: "+264", id: "NA", name: "Namibia", flag: "🇳🇦" },
  { code: "+674", id: "NR", name: "Nauru", flag: "🇳🇷" },
  { code: "+977", id: "NP", name: "Nepal", flag: "🇳🇵" },
  { code: "+31", id: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "+505", id: "NI", name: "Nicaragua", flag: "🇳🇮" },
  { code: "+227", id: "NE", name: "Niger", flag: "🇳🇪" },
  { code: "+234", id: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "+850", id: "KP", name: "North Korea", flag: "🇰🇵" },
  { code: "+389", id: "MK", name: "North Macedonia", flag: "🇲🇰" },
  { code: "+47", id: "NO", name: "Norway", flag: "🇳🇴" },
  { code: "+968", id: "OM", name: "Oman", flag: "🇴🇲" },
  { code: "+92", id: "PK", name: "Pakistan", flag: "🇵🇰" },
  { code: "+680", id: "PW", name: "Palau", flag: "🇵🇼" },
  { code: "+970", id: "PS", name: "Palestine", flag: "🇵🇸" },
  { code: "+507", id: "PA", name: "Panama", flag: "🇵🇦" },
  { code: "+675", id: "PG", name: "Papua New Guinea", flag: "🇵🇬" },
  { code: "+595", id: "PY", name: "Paraguay", flag: "🇵🇾" },
  { code: "+51", id: "PE", name: "Peru", flag: "🇵🇪" },
  { code: "+48", id: "PL", name: "Poland", flag: "🇵🇱" },
  { code: "+351", id: "PT", name: "Portugal", flag: "🇵🇹" },
  { code: "+974", id: "QA", name: "Qatar", flag: "🇶🇦" },
  { code: "+40", id: "RO", name: "Romania", flag: "🇷🇴" },
  { code: "+7", id: "RU", name: "Russia", flag: "🇷🇺" },
  { code: "+250", id: "RW", name: "Rwanda", flag: "🇷🇼" },
  { code: "+685", id: "WS", name: "Samoa", flag: "🇼🇸" },
  { code: "+378", id: "SM", name: "San Marino", flag: "🇸🇲" },
  { code: "+239", id: "ST", name: "São Tomé and Príncipe", flag: "🇸🇹" },
  { code: "+966", id: "SA", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+221", id: "SN", name: "Senegal", flag: "🇸🇳" },
  { code: "+381", id: "RS", name: "Serbia", flag: "🇷🇸" },
  { code: "+248", id: "SC", name: "Seychelles", flag: "🇸🇨" },
  { code: "+232", id: "SL", name: "Sierra Leone", flag: "🇸🇱" },
  { code: "+421", id: "SK", name: "Slovakia", flag: "🇸🇰" },
  { code: "+386", id: "SI", name: "Slovenia", flag: "🇸🇮" },
  { code: "+677", id: "SB", name: "Solomon Islands", flag: "🇸🇧" },
  { code: "+252", id: "SO", name: "Somalia", flag: "🇸🇴" },
  { code: "+82", id: "KR", name: "South Korea", flag: "🇰🇷" },
  { code: "+211", id: "SS", name: "South Sudan", flag: "🇸🇸" },
  { code: "+94", id: "LK", name: "Sri Lanka", flag: "🇱🇰" },
  { code: "+249", id: "SD", name: "Sudan", flag: "🇸🇩" },
  { code: "+597", id: "SR", name: "Suriname", flag: "🇸🇷" },
  { code: "+46", id: "SE", name: "Sweden", flag: "🇸🇪" },
  { code: "+41", id: "CH", name: "Switzerland", flag: "🇨🇭" },
  { code: "+963", id: "SY", name: "Syria", flag: "🇸🇾" },
  { code: "+886", id: "TW", name: "Taiwan", flag: "🇹🇼" },
  { code: "+992", id: "TJ", name: "Tajikistan", flag: "🇹🇯" },
  { code: "+255", id: "TZ", name: "Tanzania", flag: "🇹🇿" },
  { code: "+66", id: "TH", name: "Thailand", flag: "🇹🇭" },
  { code: "+670", id: "TL", name: "Timor-Leste", flag: "🇹🇱" },
  { code: "+228", id: "TG", name: "Togo", flag: "🇹🇬" },
  { code: "+676", id: "TO", name: "Tonga", flag: "🇹🇴" },
  { code: "+216", id: "TN", name: "Tunisia", flag: "🇹🇳" },
  { code: "+90", id: "TR", name: "Turkey", flag: "🇹🇷" },
  { code: "+993", id: "TM", name: "Turkmenistan", flag: "🇹🇲" },
  { code: "+688", id: "TV", name: "Tuvalu", flag: "🇹🇻" },
  { code: "+256", id: "UG", name: "Uganda", flag: "🇺🇬" },
  { code: "+380", id: "UA", name: "Ukraine", flag: "🇺🇦" },
  { code: "+598", id: "UY", name: "Uruguay", flag: "🇺🇾" },
  { code: "+998", id: "UZ", name: "Uzbekistan", flag: "🇺🇿" },
  { code: "+678", id: "VU", name: "Vanuatu", flag: "🇻🇺" },
  { code: "+379", id: "VA", name: "Vatican City", flag: "🇻🇦" },
  { code: "+58", id: "VE", name: "Venezuela", flag: "🇻🇪" },
  { code: "+84", id: "VN", name: "Vietnam", flag: "🇻🇳" },
  { code: "+967", id: "YE", name: "Yemen", flag: "🇾🇪" },
  { code: "+260", id: "ZM", name: "Zambia", flag: "🇿🇲" },
  { code: "+263", id: "ZW", name: "Zimbabwe", flag: "🇿🇼" },
];

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  countryCode: string;
  onCountryCodeChange: (code: string) => void;
  countryId?: string;
  onCountryIdChange?: (id: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  showValidation?: boolean;
}

const PhoneInput = ({
  value,
  onChange,
  countryCode,
  onCountryCodeChange,
  countryId,
  onCountryIdChange,
  placeholder = "Phone number",
  required = false,
  className = "",
  showValidation = true,
}: PhoneInputProps) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // Find selected country by matching code and id
  const selectedCountry = useMemo(() => {
    // If countryId is provided, use it directly
    if (countryId) {
      const match = countries.find(c => c.id === countryId);
      if (match) return match;
    }
    // Fall back to matching by code
    const matches = countries.filter(c => c.code === countryCode);
    if (matches.length === 1) return matches[0];
    // For shared codes like +1, default to first match (US)
    return matches[0] || countries[0];
  }, [countryCode, countryId]);

  // Format phone number as user types
  const handlePhoneChange = useCallback((inputValue: string) => {
    try {
      const formatter = new AsYouType(selectedCountry.id as CountryCode);
      const formatted = formatter.input(inputValue);
      onChange(formatted);
    } catch {
      // If formatting fails, just use the raw input
      onChange(inputValue);
    }
  }, [selectedCountry.id, onChange]);

  // Validate phone number
  const isValid = useMemo(() => {
    if (!value || value.length < 3) return null; // Not enough input to validate
    try {
      return isValidPhoneNumber(value, selectedCountry.id as CountryCode);
    } catch {
      return null;
    }
  }, [value, selectedCountry.id]);

  // Popular countries to show at top
  const popularIds = ["US", "GB", "CA", "AU"];

  // Filter and organize countries
  const { popularCountries, otherCountries } = useMemo(() => {
    const query = searchQuery.toLowerCase();
    const filtered = searchQuery
      ? countries.filter(
          (country) =>
            country.name.toLowerCase().includes(query) ||
            country.code.includes(query) ||
            country.id.toLowerCase().includes(query)
        )
      : countries;

    return {
      popularCountries: filtered.filter((c) => popularIds.includes(c.id)),
      otherCountries: filtered.filter((c) => !popularIds.includes(c.id)),
    };
  }, [searchQuery]);

  // Handle country selection
  const handleCountrySelect = useCallback((country: typeof countries[0]) => {
    onCountryCodeChange(country.code);
    onCountryIdChange?.(country.id);
    setOpen(false);
    setSearchQuery("");
  }, [onCountryCodeChange, onCountryIdChange]);

  return (
    <div className={`flex gap-2 ${className}`}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[120px] justify-between px-3 py-3 h-auto rounded-lg bg-background border border-border text-foreground hover:bg-background/80 focus:border-cta focus:ring-1 focus:ring-cta shrink-0"
          >
            <span className="flex items-center gap-1.5 text-sm">
              <span>{selectedCountry.flag}</span>
              <span>{selectedCountry.code}</span>
            </span>
            <ChevronsUpDown className="ml-1 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[280px] p-0 bg-background border-border z-50" align="start">
          <Command shouldFilter={false}>
            <CommandInput
              placeholder="Search country..."
              value={searchQuery}
              onValueChange={setSearchQuery}
              className="h-10"
            />
            <CommandList className="max-h-[300px]">
              <CommandEmpty>No country found.</CommandEmpty>
              {popularCountries.length > 0 && (
                <CommandGroup heading="Popular">
                  {popularCountries.map((country) => (
                    <CommandItem
                      key={country.id}
                      value={country.id}
                      onSelect={() => handleCountrySelect(country)}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Check
                        className={cn(
                          "h-4 w-4",
                          selectedCountry.id === country.id
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      <span>{country.flag}</span>
                      <span className="flex-1 truncate">{country.name}</span>
                      <span className="text-text-muted text-sm">{country.code}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
              {otherCountries.length > 0 && (
                <CommandGroup heading={searchQuery ? "Results" : "All Countries"}>
                  {otherCountries.map((country) => (
                    <CommandItem
                      key={country.id}
                      value={country.id}
                      onSelect={() => handleCountrySelect(country)}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Check
                        className={cn(
                          "h-4 w-4",
                          selectedCountry.id === country.id
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      <span>{country.flag}</span>
                      <span className="flex-1 truncate">{country.name}</span>
                      <span className="text-text-muted text-sm">{country.code}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <div className="relative flex-1">
        <input
          type="tel"
          placeholder={placeholder}
          value={value}
          onChange={(e) => handlePhoneChange(e.target.value)}
          onBlur={() => setIsTouched(true)}
          required={required}
          className={cn(
            "w-full px-4 py-3 rounded-lg bg-background border text-foreground placeholder:text-text-muted focus:outline-none focus:ring-1 transition-all text-base",
            showValidation && isTouched && value.length > 3
              ? isValid
                ? "border-green-500 focus:border-green-500 focus:ring-green-500"
                : "border-red-400 focus:border-red-400 focus:ring-red-400"
              : "border-border focus:border-cta focus:ring-cta"
          )}
        />
        {showValidation && isTouched && value.length > 3 && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {isValid ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <span className="text-red-400 text-xs">Invalid</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneInput;
