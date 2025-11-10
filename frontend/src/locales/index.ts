import { en } from "./ts/en";
import { devEn } from "./ts/devise.en";
import { es } from "./ts/es";

export const translations = { en, /* es, devEn */ };

export type Locale = keyof typeof translations;

export type TranslationObject = typeof en;