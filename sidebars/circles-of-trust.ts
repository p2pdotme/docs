import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  cotSidebar: [
    {
        "type": "category",
        "label": "Circles of Trust",
        "collapsible": true,
        "collapsed": false,
        "link": {
            "type": "doc",
            "id": "implementation-status"
        },
        "items": [
            "what-exists-today-merchant-registry-model",
            "contract-surfaces-current",
            "roadmap-not-yet-implemented-on-chain-in-this-repo",
            "integration-guidance"
        ]
    }
  ],
};

export default sidebars;
