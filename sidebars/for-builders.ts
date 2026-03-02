import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  forBuildersSidebar: [
    {
        "type": "category",
        "label": "For Builders",
        "collapsible": true,
        "collapsed": false,
        "link": {
            "type": "doc",
            "id": "start-here"
        },
        "items": [
            "roles-and-permissions",
            "protocol-parameters",
            "disputes",
            "reputation",
            "contract-references",
            "fiat-to-fiat-remittance",
            "global-currency-expansion",
            "rollout-sequence",
            "faq"
        ]
    }
  ],
};

export default sidebars;
