import React, { useState } from 'react';
import { useLocation, useHistory } from '@docusaurus/router';
import styles from './LanguageSwitcher.module.css';

interface Language {
  code: string;
  label: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

export default function LanguageSwitcher(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const getCurrentLanguage = (): Language => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];

    const lang = languages.find(l => l.code === firstSegment);
    return lang || languages[0]; // Default to English
  };

  const currentLanguage = getCurrentLanguage();

  const handleLanguageChange = (langCode: string) => {
    // Navigate to the home page of the selected language
    const targetPath = langCode === 'en' ? '/' : `/${langCode}/`;
    history.push(targetPath);
    setIsOpen(false);
  };

  return (
    <div className={styles.languageSwitcher}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
        title="Change language"
      >
        <span className={styles.flag}>{currentLanguage.flag}</span>
        <span className={styles.label}>{currentLanguage.label}</span>
        <span className={styles.icon}>▼</span>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`${styles.option} ${
                lang.code === currentLanguage.code ? styles.active : ''
              }`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className={styles.flag}>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

