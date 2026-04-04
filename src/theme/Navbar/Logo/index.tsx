import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig, type NavbarLogo} from '@docusaurus/theme-common';
import {useLocation} from '@docusaurus/router';
import ThemedImage from '@theme/ThemedImage';
import type {Props} from '@theme/Logo';

const LOCALE_PREFIXES = ['pt'];

function LogoThemedImage({
  logo,
  alt,
  imageClassName,
}: {
  logo: NavbarLogo;
  alt: string;
  imageClassName?: string;
}) {
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };
  const themedImage = (
    <ThemedImage
      className={logo.className}
      sources={sources}
      height={logo.height}
      width={logo.width}
      alt={alt}
      style={logo.style}
    />
  );

  return imageClassName ? (
    <div className={imageClassName}>{themedImage}</div>
  ) : (
    themedImage
  );
}

function useLocaleAwareLogoLink(): string {
  const location = useLocation();
  const baseUrl = useBaseUrl('/');
  const firstSegment = location.pathname.split('/').filter(Boolean)[0];
  if (firstSegment && LOCALE_PREFIXES.includes(firstSegment)) {
    return `/${firstSegment}/`;
  }
  return baseUrl;
}

export default function NavbarLogo(): ReactNode {
  const {
    siteConfig: {title},
  } = useDocusaurusContext();
  const {
    navbar: {title: navbarTitle, logo},
  } = useThemeConfig();

  const logoLink = useLocaleAwareLogoLink();
  const fallbackAlt = navbarTitle ? '' : title;
  const alt = logo?.alt ?? fallbackAlt;

  return (
    <Link
      to={logoLink}
      className="navbar__brand"
      {...(logo?.target && {target: logo.target})}>
      {logo && (
        <LogoThemedImage
          logo={logo}
          alt={alt}
          imageClassName="navbar__logo"
        />
      )}
      {navbarTitle != null && (
        <b className="navbar__title text--truncate">{navbarTitle}</b>
      )}
    </Link>
  );
}
