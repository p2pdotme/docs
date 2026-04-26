import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import styles from './ProgressBar.module.css';

const ProgressBar = () => {
  const { pathname } = useLocation();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Define excluded paths
  const isExcluded = pathname === '/' || pathname === '/stats' || pathname === '/stats/';

  useEffect(() => {
    if (isExcluded) {
      setScrollProgress(0);
      return;
    }

    const handleScroll = () => {
      const windowScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      
      if (height <= 0) {
        setScrollProgress(0);
        return;
      }
      
      const scrolled = (windowScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set progress if page is already scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isExcluded, pathname]);

  if (isExcluded) {
    return null;
  }

  return (
    <div className={styles.progressBarContainer}>
      <div 
        className={styles.progressBar} 
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
