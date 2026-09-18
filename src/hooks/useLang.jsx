import { createContext, useContext, useEffect, useState } from 'react';

const LangContext = createContext({ en: false, toggle: () => {}, t: (it) => it });

export function LangProvider({ children }) {
  const [en, setEn] = useState(() => localStorage.getItem('masca-lang') === 'en');

  useEffect(() => {
    document.documentElement.lang = en ? 'en' : 'it';
    localStorage.setItem('masca-lang', en ? 'en' : 'it');
  }, [en]);

  const value = {
    en,
    toggle: () => setEn((v) => !v),
    t: (it, enText) => (en && enText !== undefined ? enText : it),
  };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
