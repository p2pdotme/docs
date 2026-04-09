import React, {type ReactNode, useRef, useState, useEffect} from 'react';
import clsx from 'clsx';
import {useLocation} from '@docusaurus/router';
import {
  useThemeConfig,
  ErrorCauseBoundary,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem, {type Props as NavbarItemConfig} from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';
import LanguageSwitcher from '@site/src/components/LanguageSwitcher';

import styles from './styles.module.css';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  const allItems = useThemeConfig().navbar.items as NavbarItemConfig[];
  return allItems;
}

function NavbarItems({items}: {items: NavbarItemConfig[]}): ReactNode {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              {cause: error},
            )
          }>
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

function ScrollableNavbarItems({items}: {items: NavbarItemConfig[]}): ReactNode {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkOverflow = () => {
    const el = scrollRef.current;
    if (el) {
      // Check if content overflows
      const isOverflowing = el.scrollWidth > el.clientWidth;
      
      // We only show arrows if it is overflowing
      if (isOverflowing) {
        setShowLeftArrow(el.scrollLeft > 0);
        // Use a small tolerance for float arithmetic
        setShowRightArrow(Math.ceil(el.scrollLeft) < el.scrollWidth - el.clientWidth);
      } else {
        setShowLeftArrow(false);
        setShowRightArrow(false);
      }
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      checkOverflow();
      el.addEventListener('scroll', checkOverflow);
      window.addEventListener('resize', checkOverflow);
      
      // Also check periodically in case of layout shifts or font loading
      const interval = setInterval(checkOverflow, 500);

      return () => {
        el.removeEventListener('scroll', checkOverflow);
        window.removeEventListener('resize', checkOverflow);
        clearInterval(interval);
      };
    }
  }, [items]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (el) {
        const scrollAmount = 200;
        el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.scrollableContainer}>
      {showLeftArrow && (
        <button 
          className={styles.scrollButtonLeft} 
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
      )}
      <div className={styles.scrollableItems} ref={scrollRef}>
        <NavbarItems items={items} />
      </div>
      {showRightArrow && (
        <button 
          className={styles.scrollButtonRight} 
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
           <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      )}
    </div>
  );
}

function NavbarContentLayout({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <div className="navbar__inner">
      <div
        className={clsx(
          ThemeClassNames.layout.navbar.containerLeft,
          'navbar__items',
        )}>
        {left}
      </div>
      <div
        className={clsx(
          ThemeClassNames.layout.navbar.containerRight,
          'navbar__items navbar__items--right',
        )}>
        {right}
      </div>
    </div>
  );
}

export default function NavbarContent(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);

  const searchBarItem = items.find((item) => item.type === 'search');

  return (
    <NavbarContentLayout
      left={
        <>
          {!mobileSidebar.disabled && !isHomePage && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <ScrollableNavbarItems items={leftItems} />
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          <LanguageSwitcher />
          <NavbarItems items={rightItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
        </>
      }
    />
  );
}
