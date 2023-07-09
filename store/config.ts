import { create } from "zustand";
import { cn } from "../config/i18n/cn";
import { en } from "../config/i18n/en";
type LocaleConfig = {
  locale: typeof cn,
  
}
export const useLocaleStore = create((set) => ({
  locale: cn,
  setLocaleCN: () => set(() => ({ locale: cn })),
  setLocaleEN: () => set(() => ({ locale: en })),
}));
