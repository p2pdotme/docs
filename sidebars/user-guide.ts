import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  userGuideSidebar: [
    {
        "type": "category",
        "label": "User Guide",
        "collapsible": true,
        "collapsed": false,
        "link": {
            "type": "doc",
            "id": "start-here"
        },
        "items": [
            "1-before-you-start",
            "2-order-types",
            "3-how-to-place-an-order",
            "4-what-to-do-by-order-type",
            "5-understanding-order-states",
            "6-disputes-and-evidence",
            "7-troubleshooting",
            "8-faqs"
        ]
    }
  ],
};

export default sidebars;
