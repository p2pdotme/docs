import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  forMerchantsSidebar: [
    {
        "type": "category",
        "label": "For P2P Merchants",
        "collapsible": true,
        "collapsed": false,
        "link": {
            "type": "doc",
            "id": "start-here"
        },
        "items": [
            "merchant-readiness",
            "merchant-setup-flow",
            "handling-orders",
            "operational-controls",
            "circles-of-trust",
            "payment-channels-and-country-controls",
            "order-assignment",
            "disputes",
            "delegation-and-revenue-sharing",
            "insurance",
            "risk-and-reliability-practices",
            "troubleshooting",
            "faq"
        ]
    }
  ],
};

export default sidebars;
