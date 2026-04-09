import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt' | 'es';

interface GlobalStateContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  formSubmitted: boolean;
  setFormSubmitted: (status: boolean) => void;
  isFloatingElementVisible: boolean;
  setFloatingElementVisible: (visible: boolean) => void;
  variant: 'A' | 'B';
}

const GlobalStateContext = createContext<GlobalStateContextType | undefined>(undefined);

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('i18nextLng');
    if (saved === 'en' || saved === 'pt' || saved === 'es') return saved;
    return 'pt';
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isFloatingElementVisible, setFloatingElementVisible] = useState(true);
  
  const [variant] = useState<'A' | 'B'>(() => {
    const saved = localStorage.getItem('ab_variant');
    if (saved === 'A' || saved === 'B') return saved;
    const chosen = Math.random() > 0.5 ? 'A' : 'B';
    localStorage.setItem('ab_variant', chosen);
    return chosen;
  });

  return (
    <GlobalStateContext.Provider value={{
      language, setLanguage,
      formSubmitted, setFormSubmitted,
      isFloatingElementVisible, setFloatingElementVisible,
      variant
    }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};
