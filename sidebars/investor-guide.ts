import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  investorGuideSidebar: [
    {
        "type": "category",
        "label": "Investor Guide",
        "collapsible": true,
        "collapsed": false,
        "link": {
            "type": "doc",
            "id": "start-here"
        },
        "items": [
            "investor-thesis",
            "why-the-token-exists",
            "faqs",
            "where-to-go-next"
        ]
    }
  ],
};

export default sidebars;
