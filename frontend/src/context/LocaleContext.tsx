"use client";

import { createContext, useState, useContext, ReactNode } from "react";
import { translations, Locale, TranslationObject } from "@/locales";

type InterpolateProps = {
  template: string;
  variables?: Record<string, string | number>;
};

function interpolate({ template, variables }: InterpolateProps): string {
  return template.replace(/%\{(\w+)\}/g, (_, key) => {
    return variables && variables[key] !== undefined
      ? String(variables[key])
      : `%{${key}}`; 
  });
}

function getNestedValue(
  obj: TranslationObject,
  keys: string[]
): string | undefined {
  let value: unknown = obj;

  for (const key of keys) {
    if (typeof value === "object" && value !== null && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }

  return typeof value === "string" ? value : undefined;
}

// -------------------------
// Context type
// -------------------------
type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, variables?: Record<string, string | number>) => string;
};

// -------------------------
// Create context
// -------------------------
export const LocaleContext = createContext<LocaleContextType | undefined>(
  undefined
);

export default function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const t = (key: string, variables?: Record<string, string | number>): string => {
    const keys = key.split(".");
    const translation = translations[locale];
    const value = getNestedValue(translation, keys);

    if (!value) return key;

    return variables ? interpolate({ template: value, variables }) : value;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
