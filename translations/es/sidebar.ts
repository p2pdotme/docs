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
            "whitepaper/05-5-trade-protocol-on-and-off-ramp"
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

