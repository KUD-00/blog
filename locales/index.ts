import CN from "./cn";
import EN from "./en";


function merge(target: any, source: any) {
  Object.keys(source).forEach(function (key) {
    if (source[key] && typeof source[key] === "object") {
      merge((target[key] = target[key] || {}), source[key]);
      return;
    }
    target[key] = source[key];
  });
}

export type { LocaleType, RequiredLocaleType } from "./cn";

export const AllLangs = [
  "en",
  "cn",
  "jp",
] as const;
export type Lang = (typeof AllLangs)[number];

export const ALL_LANG_OPTIONS: Record<Lang, string> = {
  cn: "简体中文",
  en: "English",
  jp:"日本語",
};

const LANG_KEY = "lang";
const DEFAULT_LANG = "en";

function getItem(key: string) {
    try {
      return localStorage.getItem(key)
    } catch {
      return null
    }
}

function setItem(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

function getLanguage() {
  try {
    return navigator.language.toLowerCase();
  } catch {
    console.log("[Lang] failed to detect user lang.");
    return DEFAULT_LANG;
  }
}

export function getLang(): Lang {
  const savedLang = getItem(LANG_KEY);
  if (AllLangs.includes((savedLang ?? "") as Lang)) {
    return savedLang as Lang;
  }

  const lang = getLanguage();

  for (const option of AllLangs) {
    if (lang.includes(option)) {
      return option;
    }
  }
  return DEFAULT_LANG;
}

export function getLocale(): typeof CN {
  const targetLang = {
    en: EN,
    cn: CN,
  }[getLang()]; // 这里使用了 getLang 函数

  // if target lang missing some fields, it will use fallback lang string
  merge(EN, targetLang);

  return targetLang as typeof CN;
}

export function changeLang(lang: Lang) {
  setItem(LANG_KEY, lang);
  location.reload();
}

const fallbackLang = EN;
const targetLang = {
  en: EN,
  cn: CN,
}[getLang()] as typeof CN;

// if target lang missing some fields, it will use fallback lang string
merge(fallbackLang, targetLang);

export default fallbackLang as typeof CN;