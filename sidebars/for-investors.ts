import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import { buildSidebar } from "./cross-links";

const ownCategory = {
  type: "category" as const,
  label: "For Investors",
  collapsible: true,
  collapsed: false,
  className: "sidebar-cat-investors",
  link: {
    type: "doc" as const,
    id: "start-here",
  },
  items: [
    "investor-thesis",
    "why-the-token-exists",
    "token-details",
    "token-utility",
    "token-allocation",
    "metadao-sale",
    "vesting-schedules",
    "buy-and-burn",
    "staking-mechanics",
    "token-holder-governance",
    "progressive-decentralization",
    "insurance",
    "faq",
    "disclosures"
],
};

const sidebars: SidebarsConfig = {
  forInvestorsSidebar: buildSidebar("for-investors", ownCategory),
};

export default sidebars;
