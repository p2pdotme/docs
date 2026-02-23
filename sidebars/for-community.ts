import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import { buildSidebar } from "./cross-links";

const ownCategory = {
  type: "category" as const,
  label: "For Community",
  collapsible: true,
  collapsed: false,
  className: "sidebar-cat-community",
  link: {
    type: "doc" as const,
    id: "start-here",
  },
  items: [
    "cypherpunk-20-manifesto",
    "hierarchy",
    "four-tracks",
    "how-to-join",
    "weekly-updates-and-offboarding",
    "remuneration",
    "discord-structure",
    "principles",
    "faq"
],
};

const sidebars: SidebarsConfig = {
  forCommunitySidebar: buildSidebar("for-community", ownCategory),
};

export default sidebars;
