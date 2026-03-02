import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  forCommunitySidebar: [
    {
        "type": "category",
        "label": "For Community",
        "collapsible": true,
        "collapsed": false,
        "link": {
            "type": "doc",
            "id": "start-here"
        },
        "items": [
            "cypherpunk-20-manifesto",
            "hierarchy",
            "four-tracks",
            "how-to-join",
            "weekly-updates-and-offboarding",
            "remuneration",
            "discord-structure",
            "principles",
            "faq"
        ]
    }
  ],
};

export default sidebars;
