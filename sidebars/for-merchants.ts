import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import { buildSidebar } from "./cross-links";

const ownCategory = {
  type: "category" as const,
  label: "For Merchants",
  collapsible: true,
  collapsed: false,
  className: "sidebar-cat-merchants",
  link: {
    type: "doc" as const,
    id: "start-here",
  },
  items: [
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
],
};

const sidebars: SidebarsConfig = {
  forMerchantsSidebar: buildSidebar("for-merchants", ownCategory),
};

export default sidebars;
