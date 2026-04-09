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
            "whitepaper/01-1-the-vision"
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

