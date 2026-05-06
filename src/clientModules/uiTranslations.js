import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  function getCurrentLanguage() {
    const firstSegment = window.location.pathname.split('/').filter(Boolean)[0];
    return firstSegment === 'pt' ? 'pt' : firstSegment === 'es' ? 'es' : 'en';
  }

  function updateUITranslations() {
    const lang = getCurrentLanguage();

    // Toggle lang-pt class on html element for CSS-based translations
    document.documentElement.classList.toggle('lang-pt', lang === 'pt');
    document.documentElement.classList.toggle('lang-es', lang === 'es');

    // Translate Previous / Next pagination
    if (lang === 'pt') {
      document.querySelectorAll('.pagination-nav__sublabel').forEach((el) => {
        if (el.textContent.trim() === 'Previous') el.textContent = 'Anterior';
        if (el.textContent.trim() === 'Next') el.textContent = 'Próximo';
      });
    }
    if (lang === 'es') {
      document.querySelectorAll('.pagination-nav__sublabel').forEach((el) => {
        if (el.textContent.trim() === 'Previous') el.textContent = 'Anterior';
        if (el.textContent.trim() === 'Next') el.textContent = 'Siguiente';
      });
    }

    // Translate Search button placeholder and input
    const searchPlaceholder = lang === 'pt' ? 'Pesquisar' : lang === 'es' ? 'Buscar' : 'Search';

    // DocSearch button placeholder
    document.querySelectorAll('.DocSearch-Button-Placeholder').forEach((el) => {
      el.textContent = searchPlaceholder;
    });

    // Search input fields
    document.querySelectorAll(
      'input[placeholder="Search"], input[placeholder="Pesquisar"]'
    ).forEach((input) => {
      input.placeholder = searchPlaceholder;
    });

    // Local search input (easyops-cn/docusaurus-search-local)
    document.querySelectorAll('input.search-local-input').forEach((input) => {
      input.placeholder = searchPlaceholder;
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

