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
            "for-token-holders/protocol-overview"
        ]
    }
  ]
};

export default sidebars;

