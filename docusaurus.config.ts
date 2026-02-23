import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'P2P Foundation Docs',
  tagline: 'Documentation for P2P Foundation',
  favicon: 'img/favicon.svg',

  markdown: {
    mermaid: true,
  },

  url: 'https://docs.p2p.foundation',
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  headTags: [
    // Favicons - dark icon for light mode, light icon for dark mode
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/img/favicondark.svg',
        media: '(prefers-color-scheme: light)',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/img/favicon.svg',
        media: '(prefers-color-scheme: dark)',
      },
    },
    // SEO Meta Tags
    {
      tagName: 'meta',
      attributes: {
        property: 'og:title',
        content: 'P2P Foundation Docs',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:description',
        content: 'Documentation for P2P Foundation',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image',
        content: 'https://firebasestorage.googleapis.com/v0/b/p2px-421205.appspot.com/o/user-app%2Fv2%2Fimages%2Fthumbnails%2FfoundationWebsitePreview.png?alt=media&token=b9776f2a-a5c1-43ef-a8cb-764524e16fe4',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:url',
        content: 'https://docs.p2p.foundation',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:title',
        content: 'P2P Foundation Docs',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:description',
        content: 'Documentation for P2P Foundation',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:image',
        content: 'https://firebasestorage.googleapis.com/v0/b/p2px-421205.appspot.com/o/user-app%2Fv2%2Fimages%2Fthumbnails%2FfoundationWebsitePreview.png?alt=media&token=b9776f2a-a5c1-43ef-a8cb-764524e16fe4',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'Documentation for P2P Foundation',
      },
    },
  ],

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;700&display=swap',
  ],

  clientModules: [
    './src/clientModules/tocAutoScroll.js',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars/whitepaper.ts',
          routeBasePath: 'whitepaper',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "docusaurus-biel",
      {
        enable: true, project: "rn55vy2lao", headerTitle: "P2P.ME", footerText: "AI assistant · p2p.me", buttonPosition: "bottom-right", modalPosition: "sidebar-right", buttonStyle: "dark", version: "latest"
      },
    ],[
      '@docusaurus/plugin-content-docs',
      {
        id: 'for-investors',
        path: 'for-investors',
        routeBasePath: 'for-investors',
        sidebarPath: './sidebars/for-investors.ts',
      },
    ],[
      '@docusaurus/plugin-content-docs',
      {
        id: 'for-builders',
        path: 'for-builders',
        routeBasePath: 'for-builders',
        sidebarPath: './sidebars/for-builders.ts',
      },
    ],[
      '@docusaurus/plugin-content-docs',
      {
        id: 'for-merchants',
        path: 'for-merchants',
        routeBasePath: 'for-merchants',
        sidebarPath: './sidebars/for-merchants.ts',
      },
    ],[
      '@docusaurus/plugin-content-docs',
      {
        id: 'for-users',
        path: 'for-users',
        routeBasePath: 'for-users',
        sidebarPath: './sidebars/for-users.ts',
      },
    ],[
      '@docusaurus/plugin-content-docs',
      {
        id: 'for-community',
        path: 'for-community',
        routeBasePath: 'for-community',
        sidebarPath: './sidebars/for-community.ts',
      },
    ]
  ],
  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: ["whitepaper", "for-investors", "for-builders", "for-merchants", "for-users", "for-community"],
        docsDir: ["docs", "for-investors", "for-builders", "for-merchants", "for-users", "for-community"],
        searchResultLimits: 10,
        searchResultContextMaxLength: 50,
      },
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: true,
      },
    },
    image: 'https://firebasestorage.googleapis.com/v0/b/p2px-421205.appspot.com/o/user-app%2Fv2%2Fimages%2Fthumbnails%2FfoundationWebsitePreview.png?alt=media&token=b9776f2a-a5c1-43ef-a8cb-764524e16fe4',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'P2P Foundation',
        src: 'img/p2p-foundation-main.svg',
        srcDark: 'img/p2p-foundation-2.svg',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `
        <div class="footer-row-container">
          <div class="footer-left">
            <img src="/img/p2p-logo.svg" alt="P2P Foundation" class="footer-logo" />
          </div>
          <div class="footer-center">
            <span>© ${new Date().getFullYear()} P2P Foundation.</span>
          </div>
          <div class="footer-right">
            <a href="https://discord.gg/p2pfoundation" target="_blank" rel="noopener noreferrer" class="footer-social-link discord"></a>
            <a href="https://t.me/P2Pdotme" target="_blank" rel="noopener noreferrer" class="footer-social-link telegram"></a>
            <a href="https://x.com/p2pdotfound" target="_blank" rel="noopener noreferrer" class="footer-social-link twitter"></a>
            <a href="https://www.youtube.com/@onchainbank" target="_blank" rel="noopener noreferrer" class="footer-social-link youtube"></a>
          </div>
        </div>
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
