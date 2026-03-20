import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  let lastActiveLink = null;
  let observer = null;
  let scrollTimeout = null;

  const scrollActiveIntoView = () => {
    const tocContainer = document.querySelector('.theme-doc-toc-desktop');
    if (!tocContainer) return;

    const activeLink = tocContainer.querySelector('.table-of-contents__link--active');
    if (!activeLink || activeLink === lastActiveLink) return;

    lastActiveLink = activeLink;

    const containerRect = tocContainer.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    const isAbove = linkRect.top < containerRect.top + 50;
    const isBelow = linkRect.bottom > containerRect.bottom - 50;

    if (isAbove || isBelow) {
      const linkOffsetTop = activeLink.offsetTop;
      const containerHeight = tocContainer.clientHeight;
      const scrollTo = linkOffsetTop - (containerHeight / 2) + (activeLink.clientHeight / 2);

      tocContainer.scrollTo({
        top: Math.max(0, scrollTo),
        behavior: 'smooth'
      });
    }
  };

  const onScroll = () => {
    if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
    scrollTimeout = requestAnimationFrame(scrollActiveIntoView);
  };

  const startObserving = () => {
    if (observer) {
      observer.disconnect();
    }
    lastActiveLink = null;

    const tocContainer = document.querySelector('.theme-doc-toc-desktop');
    if (tocContainer) {
      observer = new MutationObserver(onScroll);
      observer.observe(tocContainer, {
        attributes: true,
        subtree: true,
        attributeFilter: ['class'],
      });
      scrollActiveIntoView();
    } else {
      setTimeout(startObserving, 500);
    }
  };

  const init = () => {
    window.addEventListener('scroll', onScroll, { passive: true });
    startObserving();

    const originalPushState = history.pushState;
    history.pushState = function() {
      originalPushState.apply(this, arguments);
      setTimeout(startObserving, 100);
    };
  };

  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('load', init);
  }
}
