import React, { useState } from 'react';
import type { JSX } from 'react';
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
];

function urlSegmentForLanguage(lang: Language): string | undefined {
  if (lang.code === 'en') {
    return undefined;
  }
  return lang.code;
}

function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  const matched = languages.find((l) => urlSegmentForLanguage(l) === first);
  if (matched && urlSegmentForLanguage(matched)) {
    const rest = segments.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }
  return pathname || '/';
}

function pathForLanguage(lang: Language, pathWithoutLocale: string): string {
  if (lang.code === 'en') {
    return pathWithoutLocale === '/' ? '/' : pathWithoutLocale;
  }
  const segment = urlSegmentForLanguage(lang);
  if (!segment) {
    return '/';
  }
  if (pathWithoutLocale === '/') {
    return `/${segment}/`;
  }
  return `/${segment}${pathWithoutLocale}`;
}

export default function LanguageSwitcher(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const getCurrentLanguage = (): Language => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];
    const byPrefix = languages.find(
      (l) => urlSegmentForLanguage(l) === firstSegment,
    );
    if (byPrefix) {
      return byPrefix;
    }
    return languages[0];
  };

  const currentLanguage = getCurrentLanguage();

  const handleLanguageChange = (langCode: string) => {
    const targetLang =
      languages.find((l) => l.code === langCode) ?? languages[0];
    const { pathname, search, hash } = location;
    const withoutLocale = stripLocalePrefix(pathname);
    const targetPath = pathForLanguage(targetLang, withoutLocale) + search + hash;
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

