import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  translationsPtWhitepaperSidebar: [
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
            {
                "type": "doc",
                "id": "00-abstract",
                "label": "Resumo"
            }
        ]
    }
  ],
};

export default sidebars;

