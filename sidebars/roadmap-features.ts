import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  roadmapFeaturesSidebar: [
    {
        "type": "category",
        "label": "Roadmap Features",
        "collapsible": true,
        "collapsed": false,
        "link": {
            "type": "doc",
            "id": "start-here"
        },
        "items": [
            "1-end-to-end-fiat-to-fiat-remittance",
            "2-global-currency-expansion",
            "suggested-rollout-sequence"
        ]
    }
  ],
};

export default sidebars;
