import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'P2P Foundation Docs',
  tagline: 'Documentation for P2P Foundation',
  favicon: 'img/favicon.svg',

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
        id: 'roadmap-features',
        path: 'roadmap-features',
        routeBasePath: 'roadmap-features',
        sidebarPath: './sidebars/roadmap-features.ts',
      },
    ],[
      '@docusaurus/plugin-content-docs',
      {
        id: 'tokenomics',
        path: 'tokenomics',
        routeBasePath: 'tokenomics',
        sidebarPath: './sidebars/tokenomics.ts',
      },
    ],[
      '@docusaurus/plugin-content-docs',
      {
        id: 'governance',
        path: 'governance',
        routeBasePath: 'governance',
        sidebarPath: './sidebars/governance.ts',
      },
    ],[
      '@docusaurus/plugin-content-docs',
      {
        id: 'circles-of-trust',
        path: 'circles-of-trust',
        routeBasePath: 'circles-of-trust',
        sidebarPath: './sidebars/circles-of-trust.ts',
      },
    ],[
      '@docusaurus/plugin-content-docs',
      {
        id: 'ambassador',
        path: 'ambassador',
        routeBasePath: 'ambassador',
        sidebarPath: './sidebars/ambassador.ts',
      },
    ],[
      '@docusaurus/plugin-content-docs',
      {
        id: 'user-guide',
        path: 'user-guide',
        routeBasePath: 'user-guide',
        sidebarPath: './sidebars/user-guide.ts',
      },
    ],[
      '@docusaurus/plugin-content-docs',
      {
        id: 'merchant-guide',
        path: 'merchant-guide',
        routeBasePath: 'merchant-guide',
        sidebarPath: './sidebars/merchant-guide.ts',
      },
    ],[
      '@docusaurus/plugin-content-docs',
      {
        id: 'investor-guide',
        path: 'investor-guide',
        routeBasePath: 'investor-guide',
        sidebarPath: './sidebars/investor-guide.ts',
      },
    ]
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: ["whitepaper", "roadmap-features", "tokenomics", "governance", "circles-of-trust", "ambassador", "user-guide", "merchant-guide", "investor-guide"],
        docsDir: ["docs", "roadmap-features", "tokenomics", "governance", "circles-of-trust", "ambassador", "user-guide", "merchant-guide", "investor-guide"],
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
      defaultMode: 'light',
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
  items: [
    {
      type: 'docSidebar',
      sidebarId: 'whitepaperSidebar',
      label: 'Whitepaper',
      position: 'left',
    },
    {
      type: 'docSidebar',
      sidebarId: 'roadmapFeaturesSidebar',
      label: 'Roadmap',
      docsPluginId: 'roadmap-features',
      position: 'left',
    },
    {
      type: 'docSidebar',
      sidebarId: 'tokenomicsSidebar',
      label: 'Token Economics',
      docsPluginId: 'tokenomics',
      position: 'left',
    },
    {
      type: 'docSidebar',
      sidebarId: 'governanceSidebar',
      label: 'Governance',
      docsPluginId: 'governance',
      position: 'left',
    },

    {
      type: 'docSidebar',
      sidebarId: 'ambassadorSidebar',
      label: 'Ambassador Program',
      docsPluginId: 'ambassador',
      position: 'left',
    },

    // GROUP GUIDES IN DROPDOWN
    {
      label: 'Guides',
      position: 'left',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'userGuideSidebar',
          label: 'User Guide',
          docsPluginId: 'user-guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'merchantGuideSidebar',
          label: 'Merchant Guide',
          docsPluginId: 'merchant-guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'investorGuideSidebar',
          label: 'Investor Guide',
          docsPluginId: 'investor-guide',
        },
      ],
    },

    
  ],
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
