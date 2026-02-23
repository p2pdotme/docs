import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import { buildSidebar } from "./cross-links";

const ownCategory = {
  type: "category" as const,
  label: "For Builders",
  collapsible: true,
  collapsed: false,
  className: "sidebar-cat-builders",
  link: {
    type: "doc" as const,
    id: "start-here",
  },
  items: [
    "roles-and-permissions",
    "protocol-parameters",
    "disputes",
    "reputation",
    "contract-references",
    "fiat-to-fiat-remittance",
    "global-currency-expansion",
    "rollout-sequence",
    "faq"
],
};

const sidebars: SidebarsConfig = {
  forBuildersSidebar: buildSidebar("for-builders", ownCategory),
};

export default sidebars;
