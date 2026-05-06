import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  esSidebar: [
    {
        "type": "category",
        "label": "Whitepaper",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "whitepaper/00-abstract"
        },
        "items": [
            "whitepaper/01-1-the-vision",
            "whitepaper/02-2-design-goals-and-non-goals",
            "whitepaper/03-3-system-overview",
            "whitepaper/04-4-cryptographic-primitives-proof-integration",
            "whitepaper/05-5-trade-protocol-on-and-off-ramp",
            "whitepaper/06-6-proof-of-credibility-reputation-matching",
            "whitepaper/07-7-fraud-prevention",
            "whitepaper/08-8-dispute-resolution",
            "whitepaper/09-9-pricing-oracle-mechanics",
            "whitepaper/10-10-liquidity-market-design",
            "whitepaper/11-11-security-model",
            "whitepaper/12-12-privacy-model",
            "whitepaper/13-13-compliance-policy-positioning",
            "whitepaper/14-14-accessing-p2p-protocol-clients-sdks",
            "whitepaper/15-15-governance-upgradability",
            "whitepaper/16-16-token-economics",
            "whitepaper/17-17-disclosures-risks",
            "whitepaper/18-18-references",
            "whitepaper/19-appendices"
        ]
    },
    {
        "type": "category",
        "label": "Para Holders del Token",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "for-token-holders/start-here"
        },
        "items": [
            "for-token-holders/protocol-overview",
            "for-token-holders/why-the-token-exists",
            "for-token-holders/token-details",
            "for-token-holders/token-utility",
            "for-token-holders/token-allocation",
            "for-token-holders/past-backers",
            "for-token-holders/metadao-sale",
            "for-token-holders/vesting-schedules",
            "for-token-holders/treasury-operations",
            "for-token-holders/staking-mechanics",
            "for-token-holders/token-holder-governance",
            "for-token-holders/progressive-decentralization",
            "for-token-holders/insurance",
            "for-token-holders/operational-cost-structure",
            "for-token-holders/multichain-strategy",
            "for-token-holders/disclosures",
            "for-token-holders/legal-documents",
            "for-token-holders/faq"
        ]
    },
    {
        "type": "category",
        "label": "Para Builders",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "for-builders/start-here"
        },
        "items": [
            "for-builders/roles-and-permissions",
            "for-builders/protocol-parameters",
            "for-builders/disputes",
            "for-builders/reputation",
            "for-builders/contract-references",
            "for-builders/fiat-to-fiat-remittance",
            "for-builders/global-currency-expansion",
            "for-builders/rollout-sequence",
            "for-builders/faq"
        ]
    },
    {
        "type": "category",
        "label": "Para Merchants P2P",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "for-merchants/start-here"
        },
        "items": [
            "for-merchants/merchant-readiness",
            "for-merchants/merchant-setup-flow",
            "for-merchants/handling-orders",
            "for-merchants/operational-controls",
            "for-merchants/circles-of-trust",
            "for-merchants/payment-channels-and-country-controls",
            "for-merchants/order-assignment",
            "for-merchants/disputes",
            "for-merchants/delegation-and-revenue-sharing",
            "for-merchants/insurance",
            "for-merchants/risk-and-reliability-practices",
            "for-merchants/troubleshooting",
            "for-merchants/faq"
        ]
    },
    {
        "type": "category",
        "label": "Para Usuarios",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "for-users/start-here"
        },
        "items": [
            "for-users/before-you-start",
            "for-users/order-types",
            "for-users/how-to-place-an-order",
            "for-users/what-to-do-by-order-type",
            "for-users/understanding-order-states",
            "for-users/disputes-and-evidence",
            "for-users/troubleshooting",
            "for-users/faq"
        ]
    }
  ]
};

export default sidebars;

