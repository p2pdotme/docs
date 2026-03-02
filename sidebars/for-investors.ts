import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  forInvestorsSidebar: [
    {
        "type": "category",
        "label": "For Investors",
        "collapsible": true,
        "collapsed": false,
        "link": {
            "type": "doc",
            "id": "start-here"
        },
        "items": [
            "investor-thesis",
            "why-the-token-exists",
            "token-details",
            "token-utility",
            "token-allocation",
            "metadao-sale",
            "vesting-schedules",
            "treasury-and-token-value",
            "staking-mechanics",
            "token-holder-governance",
            "progressive-decentralization",
            "insurance",
            "financials-and-estimates",
            "faq",
            "why-base-chain-when-will-you-launch-on-solana",
            "disclosures"
        ]
    }
  ],
};

export default sidebars;
