import { isValidPhoneNumber, parsePhoneNumberFromString, CountryCode } from "libphonenumber-js";

const COUNTRY_FROM_CODE: Record<string, CountryCode> = {
  "+1": "US",
  "+44": "GB",
  "+61": "AU",
  "+64": "NZ",
  "+353": "IE",
  "+91": "IN",
  "+49": "DE",
  "+33": "FR",
  "+34": "ES",
  "+39": "IT",
  "+81": "JP",
  "+86": "CN",
  "+52": "MX",
  "+55": "BR",
  "+27": "ZA",
  "+971": "AE",
  "+65": "SG",
  "+63": "PH",
};

/**
 * Returns true only when the phone number is non-empty AND parses as valid
 * for the supplied country dialing code.
 */
export function isValidPhone(value: string, countryCode: string): boolean {
  if (!value || !value.trim()) return false;
  const country = COUNTRY_FROM_CODE[countryCode];
  try {
    if (country && isValidPhoneNumber(value, country)) return true;
    // Fallback: attempt international parse using "+<code><digits>"
    const digits = value.replace(/\D/g, "");
    if (!digits) return false;
    const parsed = parsePhoneNumberFromString(`${countryCode}${digits}`);
    return !!parsed?.isValid();
  } catch {
    return false;
  }
}
