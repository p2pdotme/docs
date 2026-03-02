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

  stylesheets: [],

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
                "type": "dropdown",
                "label": "Whitepaper",
                "position": "left",
                "items": [
                        {
                                "type": "doc",
                                "docId": "00-abstract",
                                "label": "Abstract"
                        },
                        {
                                "type": "doc",
                                "docId": "01-1-the-vision",
                                "label": "1. The Vision"
                        },
                        {
                                "type": "doc",
                                "docId": "02-2-design-goals-and-non-goals",
                                "label": "2. Design Goals and Non-Goals"
                        },
                        {
                                "type": "doc",
                                "docId": "03-3-system-overview",
                                "label": "3. System Overview"
                        },
                        {
                                "type": "doc",
                                "docId": "04-4-cryptographic-primitives-proof-integration",
                                "label": "4. Cryptographic Primitives & Proof Integration"
                        },
                        {
                                "type": "doc",
                                "docId": "05-5-trade-protocol-on-and-off-ramp",
                                "label": "5. Trade Protocol (On- and Off-Ramp)"
                        },
                        {
                                "type": "doc",
                                "docId": "06-6-proof-of-credibility-reputation-matching",
                                "label": "6. Proof-of-Credibility (Reputation & Matching)"
                        },
                        {
                                "type": "doc",
                                "docId": "07-7-fraud-prevention",
                                "label": "7. Fraud Prevention"
                        },
                        {
                                "type": "doc",
                                "docId": "08-8-dispute-resolution",
                                "label": "8. Dispute Resolution"
                        },
                        {
                                "type": "doc",
                                "docId": "09-9-pricing-oracle-mechanics",
                                "label": "9. Pricing & Oracle Mechanics"
                        },
                        {
                                "type": "doc",
                                "docId": "10-10-liquidity-market-design",
                                "label": "10. Liquidity & Market Design"
                        },
                        {
                                "type": "doc",
                                "docId": "11-11-security-model",
                                "label": "11. Security Model"
                        },
                        {
                                "type": "doc",
                                "docId": "12-12-privacy-model",
                                "label": "12. Privacy Model"
                        },
                        {
                                "type": "doc",
                                "docId": "13-13-compliance-policy-positioning",
                                "label": "13. Compliance & Policy Positioning"
                        },
                        {
                                "type": "doc",
                                "docId": "14-14-accessing-p2p-protocol-clients-sdks",
                                "label": "14. Accessing P2P Protocol: Clients & SDKs"
                        },
                        {
                                "type": "doc",
                                "docId": "15-15-governance-upgradability",
                                "label": "15. Governance & Upgradability"
                        },
                        {
                                "type": "doc",
                                "docId": "16-16-token-economics",
                                "label": "16. Token Economics"
                        },
                        {
                                "type": "doc",
                                "docId": "17-17-disclosures-risks",
                                "label": "17. Disclosures & Risks"
                        },
                        {
                                "type": "doc",
                                "docId": "18-18-references",
                                "label": "18. References"
                        },
                        {
                                "type": "doc",
                                "docId": "19-appendices",
                                "label": "Appendices"
                        }
                ]
        },
        {
                "type": "dropdown",
                "label": "For Investors",
                "position": "left",
                "items": [
                        {
                                "type": "doc",
                                "docId": "start-here",
                                "label": "Start Here",
                                "docsPluginId": "for-investors"
                        },
                        {
                                "type": "doc",
                                "docId": "investor-thesis",
                                "label": "Investor Thesis",
                                "docsPluginId": "for-investors"
                        },
                        {
                                "type": "doc",
                                "docId": "why-the-token-exists",
                                "label": "Why the Token Exists",
                                "docsPluginId": "for-investors"
                        },
                        {
                                "type": "doc",
                                "docId": "token-details",
                                "label": "Token Details",
                                "docsPluginId": "for-investors"
                        },
                        {
                                "type": "doc",
                                "docId": "token-utility",
                                "label": "Token Utility",
                                "docsPluginId": "for-investors"
                        },
                        {
                                "type": "doc",
                                "docId": "token-allocation",
                                "label": "Token Allocation",
                                "docsPluginId": "for-investors"
                        },
                        {
                                "type": "doc",
                                "docId": "metadao-sale",
                                "label": "MetaDAO Sale",
                                "docsPluginId": "for-investors"
                        },
                        {
                                "type": "doc",
                                "docId": "vesting-schedules",
                                "label": "Vesting Schedules",
                                "docsPluginId": "for-investors"
                        },
                        {
                                "type": "doc",
                                "docId": "treasury-and-token-value",
                                "label": "Treasury and Token Value",
                                "docsPluginId": "for-investors"
                        },
                        {
                                "type": "doc",
                                "docId": "staking-mechanics",
                                "label": "Staking Mechanics",
                                "docsPluginId": "for-investors"
                        },
                        {
                                "type": "doc",
                                "docId": "token-holder-governance",
                                "label": "Token-Holder Governance",
                                "docsPluginId": "for-investors"
                        },
                        {
                                "type": "doc",
                                "docId": "progressive-decentralization",
                                "label": "Progressive Decentralization",
                                "docsPluginId": "for-investors"
                        },
                        {
                                "type": "doc",
                                "docId": "insurance",
                                "label": "Insurance",
                                "docsPluginId": "for-investors"
                        },
                        {
                                "type": "doc",
                                "docId": "financials-and-estimates",
                                "label": "Financials and Estimates",
                                "docsPluginId": "for-investors"
                        },
                        {
                                "type": "doc",
                                "docId": "faq",
                                "label": "FAQ",
                                "docsPluginId": "for-investors"
                        },
                        {
                                "type": "doc",
                                "docId": "why-base-chain-when-will-you-launch-on-solana",
                                "label": "Why Base chain? When will you launch on solana?",
                                "docsPluginId": "for-investors"
                        },
                        {
                                "type": "doc",
                                "docId": "disclosures",
                                "label": "Disclosures",
                                "docsPluginId": "for-investors"
                        }
                ]
        },
        {
                "type": "dropdown",
                "label": "For Builders",
                "position": "left",
                "items": [
                        {
                                "type": "doc",
                                "docId": "start-here",
                                "label": "Start Here",
                                "docsPluginId": "for-builders"
                        },
                        {
                                "type": "doc",
                                "docId": "roles-and-permissions",
                                "label": "Roles and Permissions",
                                "docsPluginId": "for-builders"
                        },
                        {
                                "type": "doc",
                                "docId": "protocol-parameters",
                                "label": "Protocol Parameters",
                                "docsPluginId": "for-builders"
                        },
                        {
                                "type": "doc",
                                "docId": "disputes",
                                "label": "Disputes",
                                "docsPluginId": "for-builders"
                        },
                        {
                                "type": "doc",
                                "docId": "reputation",
                                "label": "Reputation",
                                "docsPluginId": "for-builders"
                        },
                        {
                                "type": "doc",
                                "docId": "contract-references",
                                "label": "Contract References",
                                "docsPluginId": "for-builders"
                        },
                        {
                                "type": "doc",
                                "docId": "fiat-to-fiat-remittance",
                                "label": "Fiat-to-Fiat Remittance",
                                "docsPluginId": "for-builders"
                        },
                        {
                                "type": "doc",
                                "docId": "global-currency-expansion",
                                "label": "Global Currency Expansion",
                                "docsPluginId": "for-builders"
                        },
                        {
                                "type": "doc",
                                "docId": "rollout-sequence",
                                "label": "Rollout Sequence",
                                "docsPluginId": "for-builders"
                        },
                        {
                                "type": "doc",
                                "docId": "faq",
                                "label": "FAQ",
                                "docsPluginId": "for-builders"
                        }
                ]
        },
        {
                "type": "dropdown",
                "label": "For P2P Merchants",
                "position": "left",
                "items": [
                        {
                                "type": "doc",
                                "docId": "start-here",
                                "label": "Start Here",
                                "docsPluginId": "for-merchants"
                        },
                        {
                                "type": "doc",
                                "docId": "merchant-readiness",
                                "label": "Merchant Readiness",
                                "docsPluginId": "for-merchants"
                        },
                        {
                                "type": "doc",
                                "docId": "merchant-setup-flow",
                                "label": "Merchant Setup Flow",
                                "docsPluginId": "for-merchants"
                        },
                        {
                                "type": "doc",
                                "docId": "handling-orders",
                                "label": "Handling Orders",
                                "docsPluginId": "for-merchants"
                        },
                        {
                                "type": "doc",
                                "docId": "operational-controls",
                                "label": "Operational Controls",
                                "docsPluginId": "for-merchants"
                        },
                        {
                                "type": "doc",
                                "docId": "circles-of-trust",
                                "label": "Circles of Trust",
                                "docsPluginId": "for-merchants"
                        },
                        {
                                "type": "doc",
                                "docId": "payment-channels-and-country-controls",
                                "label": "Payment Channels and Country Controls",
                                "docsPluginId": "for-merchants"
                        },
                        {
                                "type": "doc",
                                "docId": "order-assignment",
                                "label": "Order Assignment",
                                "docsPluginId": "for-merchants"
                        },
                        {
                                "type": "doc",
                                "docId": "disputes",
                                "label": "Disputes",
                                "docsPluginId": "for-merchants"
                        },
                        {
                                "type": "doc",
                                "docId": "delegation-and-revenue-sharing",
                                "label": "Delegation and Revenue Sharing",
                                "docsPluginId": "for-merchants"
                        },
                        {
                                "type": "doc",
                                "docId": "insurance",
                                "label": "Insurance",
                                "docsPluginId": "for-merchants"
                        },
                        {
                                "type": "doc",
                                "docId": "risk-and-reliability-practices",
                                "label": "Risk and Reliability Practices",
                                "docsPluginId": "for-merchants"
                        },
                        {
                                "type": "doc",
                                "docId": "troubleshooting",
                                "label": "Troubleshooting",
                                "docsPluginId": "for-merchants"
                        },
                        {
                                "type": "doc",
                                "docId": "faq",
                                "label": "FAQ",
                                "docsPluginId": "for-merchants"
                        }
                ]
        },
        {
                "type": "dropdown",
                "label": "For Users",
                "position": "left",
                "items": [
                        {
                                "type": "doc",
                                "docId": "start-here",
                                "label": "Start Here",
                                "docsPluginId": "for-users"
                        },
                        {
                                "type": "doc",
                                "docId": "before-you-start",
                                "label": "Before You Start",
                                "docsPluginId": "for-users"
                        },
                        {
                                "type": "doc",
                                "docId": "order-types",
                                "label": "Order Types",
                                "docsPluginId": "for-users"
                        },
                        {
                                "type": "doc",
                                "docId": "how-to-place-an-order",
                                "label": "How to Place an Order",
                                "docsPluginId": "for-users"
                        },
                        {
                                "type": "doc",
                                "docId": "what-to-do-by-order-type",
                                "label": "What to Do by Order Type",
                                "docsPluginId": "for-users"
                        },
                        {
                                "type": "doc",
                                "docId": "understanding-order-states",
                                "label": "Understanding Order States",
                                "docsPluginId": "for-users"
                        },
                        {
                                "type": "doc",
                                "docId": "disputes-and-evidence",
                                "label": "Disputes and Evidence",
                                "docsPluginId": "for-users"
                        },
                        {
                                "type": "doc",
                                "docId": "troubleshooting",
                                "label": "Troubleshooting",
                                "docsPluginId": "for-users"
                        },
                        {
                                "type": "doc",
                                "docId": "faq",
                                "label": "FAQ",
                                "docsPluginId": "for-users"
                        }
                ]
        },
        {
                "type": "dropdown",
                "label": "For Community",
                "position": "left",
                "items": [
                        {
                                "type": "doc",
                                "docId": "start-here",
                                "label": "Start Here",
                                "docsPluginId": "for-community"
                        },
                        {
                                "type": "doc",
                                "docId": "cypherpunk-20-manifesto",
                                "label": "Cypherpunk 2.0 Manifesto",
                                "docsPluginId": "for-community"
                        },
                        {
                                "type": "doc",
                                "docId": "hierarchy",
                                "label": "Hierarchy",
                                "docsPluginId": "for-community"
                        },
                        {
                                "type": "doc",
                                "docId": "four-tracks",
                                "label": "Four Tracks",
                                "docsPluginId": "for-community"
                        },
                        {
                                "type": "doc",
                                "docId": "how-to-join",
                                "label": "How to Join",
                                "docsPluginId": "for-community"
                        },
                        {
                                "type": "doc",
                                "docId": "weekly-updates-and-offboarding",
                                "label": "Weekly Updates and Offboarding",
                                "docsPluginId": "for-community"
                        },
                        {
                                "type": "doc",
                                "docId": "remuneration",
                                "label": "Remuneration",
                                "docsPluginId": "for-community"
                        },
                        {
                                "type": "doc",
                                "docId": "discord-structure",
                                "label": "Discord Structure",
                                "docsPluginId": "for-community"
                        },
                        {
                                "type": "doc",
                                "docId": "principles",
                                "label": "Principles",
                                "docsPluginId": "for-community"
                        },
                        {
                                "type": "doc",
                                "docId": "faq",
                                "label": "FAQ",
                                "docsPluginId": "for-community"
                        }
                ]
        }
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
