import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  const translations = {
    en: { searchPlaceholder: 'Search' },
    pt: { searchPlaceholder: 'Pesquisar' },
  };

  function getCurrentLanguage() {
    const firstSegment = window.location.pathname.split('/').filter(Boolean)[0];
    return firstSegment === 'pt' ? 'pt' : 'en';
  }

  function hideBielInPortuguese() {
    const lang = getCurrentLanguage();
    const styleId = 'biel-hide-pt';
    const existingStyle = document.getElementById(styleId);

    if (lang === 'pt') {
      // Hide Biel for PT
      if (!existingStyle) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          biel-button,
          [data-biel],
          .biel-widget,
          .biel-button,
          iframe[src*="biel"],
          [class*="biel"] {
            display: none !important;
            visibility: hidden !important;
          }
        `;
        document.head.appendChild(style);
      }
    } else {
      // Show Biel for EN - remove the hide style
      if (existingStyle) {
        existingStyle.remove();
      }
    }
  }

  function updateSearchBarPlaceholder() {
    const lang = getCurrentLanguage();
    const placeholder = translations[lang].searchPlaceholder;

    document.querySelectorAll(
      'input[placeholder="Search"], input[placeholder="Pesquisar"]'
    ).forEach((input) => {
      input.placeholder = placeholder;
    });

    document.querySelectorAll('.DocSearch-Button-Placeholder').forEach((btn) => {
      btn.textContent = placeholder;
    });
  }

  function updateTranslations() {
    hideBielInPortuguese();
    updateSearchBarPlaceholder();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateTranslations);
  } else {
    updateTranslations();
  }

  const observer = new MutationObserver(() => {
    updateTranslations();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // Ensure Biel is hidden on page load for PT
  window.addEventListener('load', () => {
    updateTranslations();
  });
}

