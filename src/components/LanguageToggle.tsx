import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 px-4 py-2 bg-gradient-to-r from-purple-900/50 to-green-900/50 rounded-full text-green-300 text-sm border border-green-500/20 hover:border-green-500/40 transition-all transform hover:scale-105"
    >
      {language === 'pt' ? 'EN' : 'PT'}
    </button>
  );
}