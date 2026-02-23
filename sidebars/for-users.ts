import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import { buildSidebar } from "./cross-links";

const ownCategory = {
  type: "category" as const,
  label: "For Users",
  collapsible: true,
  collapsed: false,
  className: "sidebar-cat-users",
  link: {
    type: "doc" as const,
    id: "start-here",
  },
  items: [
    "before-you-start",
    "order-types",
    "how-to-place-an-order",
    "what-to-do-by-order-type",
    "understanding-order-states",
    "disputes-and-evidence",
    "troubleshooting",
    "faq"
],
};

const sidebars: SidebarsConfig = {
  forUsersSidebar: buildSidebar("for-users", ownCategory),
};

export default sidebars;
