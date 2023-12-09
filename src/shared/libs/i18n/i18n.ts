import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import * as en from './translations/en.json';
import * as ua from './translations/ua.json';

export const defaultNS = 'translation';

export const resources = {
  en,
  ua,
};




i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: resources,
    defaultNS,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
  });

export default i18n;
