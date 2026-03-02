import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  forUsersSidebar: [
    {
        "type": "category",
        "label": "For Users",
        "collapsible": true,
        "collapsed": false,
        "link": {
            "type": "doc",
            "id": "start-here"
        },
        "items": [
            "before-you-start",
            "order-types",
            "how-to-place-an-order",
            "what-to-do-by-order-type",
            "understanding-order-states",
            "disputes-and-evidence",
            "troubleshooting",
            "faq"
        ]
    }
  ],
};

export default sidebars;
