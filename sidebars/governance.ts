import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  governanceSidebar: [
    {
        "type": "category",
        "label": "Governance",
        "collapsible": true,
        "collapsed": false,
        "link": {
            "type": "doc",
            "id": "00-implementation-status"
        },
        "items": [
            "01-what-is-live-today",
            "02-current-contract-references",
            "03-roadmap-not-yet-implemented-on-chain-in-this-repo",
            "04-reading-guide"
        ]
    }
  ],
};

export default sidebars;
