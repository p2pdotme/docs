import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  whitepaperSidebar: [
    {
        "type": "category",
        "label": "Whitepaper",
        "collapsible": true,
        "collapsed": false,
        "link": {
            "type": "doc",
            "id": "00-abstract"
        },
        "items": [
            "01-1-the-vision",
            "02-2-design-goals-and-non-goals",
            "03-3-system-overview",
            "04-4-cryptographic-primitives-proof-integration",
            "05-5-trade-protocol-on-and-off-ramp",
            "06-6-proof-of-credibility-reputation-matching",
            "07-7-fraud-prevention",
            "08-8-dispute-resolution",
            "09-9-pricing-oracle-mechanics",
            "10-10-liquidity-market-design",
            "11-11-security-model",
            "12-12-privacy-model",
            "13-13-compliance-policy-positioning",
            "14-14-accessing-p2p-protocol-clients-sdks",
            "15-15-governance-upgradability",
            "16-16-token-economics",
            "17-17-disclosures-risks",
            "18-18-references",
            "19-appendices"
        ]
    }
  ],
};

export default sidebars;
