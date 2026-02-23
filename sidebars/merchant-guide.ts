import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  merchantGuideSidebar: [
    {
        "type": "category",
        "label": "Merchant Guide",
        "collapsible": true,
        "collapsed": false,
        "link": {
            "type": "doc",
            "id": "start-here"
        },
        "items": [
            "1-merchant-readiness",
            "2-merchant-setup-flow",
            "3-handling-orders",
            "4-operational-controls",
            "5-disputes-and-evidence",
            "6-risk-and-reliability-practices",
            "7-troubleshooting",
            "8-faqs"
        ]
    }
  ],
};

export default sidebars;
