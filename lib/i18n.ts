import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";

export const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "sv", label: "Svenska", flag: "🇸🇪" },
  { code: "mk", label: "Македонски", flag: "🇲🇰" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "bg", label: "Български", flag: "🇧🇬" },
  { code: "ca", label: "Català", flag: "🏴󠁥󠁳󠁣󠁴󠁿" },
  { code: "cs", label: "Čeština", flag: "🇨🇿" },
  { code: "da", label: "Dansk", flag: "🇩🇰" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "el", label: "Ελληνικά", flag: "🇬🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "et", label: "Eesti", flag: "🇪🇪" },
  { code: "fa", label: "فارسی", flag: "🇮🇷" },
  { code: "fi", label: "Suomi", flag: "🇫🇮" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "ga", label: "Gaeilge", flag: "🇮🇪" },
  { code: "hr", label: "Hrvatski", flag: "🇭🇷" },
  { code: "hu", label: "Magyar", flag: "🇭🇺" },
  { code: "is", label: "Íslenska", flag: "🇮🇸" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "lt", label: "Lietuvių", flag: "🇱🇹" },
  { code: "lv", label: "Latviešu", flag: "🇱🇻" },
  { code: "mt", label: "Malti", flag: "🇲🇹" },
  { code: "nb", label: "Norsk", flag: "🇳🇴" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "pl", label: "Polski", flag: "🇵🇱" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
  { code: "ro", label: "Română", flag: "🇷🇴" },
  { code: "sk", label: "Slovenčina", flag: "🇸🇰" },
  { code: "sl", label: "Slovenščina", flag: "🇸🇮" },
  { code: "so", label: "Soomaali", flag: "🇸🇴" },
  { code: "sq", label: "Shqip", flag: "🇦🇱" },
  { code: "sr", label: "Srpski", flag: "🇷🇸" },
];

const SUPPORTED_CODES = LANGUAGES.map((l) => l.code);

function getInitialLanguage(): string {
  if (typeof window === "undefined") return "sv";
  const stored = localStorage.getItem("europea_lang");
  if (stored && SUPPORTED_CODES.includes(stored)) return stored;
  // No stored preference -> always default to Swedish. Browser-language
  // auto-detection intentionally removed so the site has a single,
  // predictable default regardless of visitor locale. Language only changes
  // when the user explicitly selects one (persisted to localStorage).
  return "sv";
}

if (!i18n.isInitialized) {
  i18n
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`../public/locales/${language}/${namespace}.json`),
      ),
    )
    .use(initReactI18next)
    .init({
      lng: getInitialLanguage(),
      fallbackLng: "en",
      defaultNS: "common",
      ns: ["common"],
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
    });
}

export default i18n;
