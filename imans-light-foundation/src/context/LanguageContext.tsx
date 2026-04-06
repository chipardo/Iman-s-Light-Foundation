'use client';

import { createContext, useState, ReactNode } from 'react';

type Lang = 'en' | 'es';

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
