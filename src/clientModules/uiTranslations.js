import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  function getCurrentLanguage() {
    const firstSegment = window.location.pathname.split('/').filter(Boolean)[0];
    return firstSegment === 'pt' ? 'pt' : 'en';
  }

  function updateUITranslations() {
    const lang = getCurrentLanguage();

    // Toggle lang-pt class on html element for CSS-based translations
    document.documentElement.classList.toggle('lang-pt', lang === 'pt');

    // Translate Previous / Next pagination
    if (lang === 'pt') {
      document.querySelectorAll('.pagination-nav__sublabel').forEach((el) => {
        if (el.textContent.trim() === 'Previous') el.textContent = 'Anterior';
        if (el.textContent.trim() === 'Next') el.textContent = 'Próximo';
      });
    }

    // Translate Search button placeholder
    document.querySelectorAll('.DocSearch-Button-Placeholder').forEach((el) => {
      el.textContent = lang === 'pt' ? 'Pesquisar' : 'Search';
    });

    document.querySelectorAll(
      'input[placeholder="Search"], input[placeholder="Pesquisar"]'
    ).forEach((input) => {
      input.placeholder = lang === 'pt' ? 'Pesquisar' : 'Search';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateUITranslations);
  } else {
    updateUITranslations();
  }

  // Re-run on SPA navigation (history changes)
  const origPushState = history.pushState;
  history.pushState = function () {
    origPushState.apply(this, arguments);
    setTimeout(updateUITranslations, 50);
  };
  window.addEventListener('popstate', () => setTimeout(updateUITranslations, 50));

  const observer = new MutationObserver(() => {
    updateUITranslations();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

