import 'server-only'
 
const dictionaries = {
  en: () => import('@/i18n/en.json').then((module) => module.default),
  zh: () => import('@/i18n/zh.json').then((module) => module.default),
  ja: () => import('@/i18n/ja.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => dictionaries[locale]()