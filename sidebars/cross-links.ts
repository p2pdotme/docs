type LinkItem = {
  type: 'link';
  label: string;
  href: string;
};

type SectionDef = {
  key: string;
  label: string;
  className: string;
  items: LinkItem[];
};

const SECTION_ORDER: SectionDef[] = [
  {
    "key": "whitepaper",
    "label": "Whitepaper",
    "className": "sidebar-cat-whitepaper",
    "items": [
      {
        "type": "link",
        "label": "Abstract",
        "href": "/whitepaper/abstract"
      },
      {
        "type": "link",
        "label": "1. The Vision",
        "href": "/whitepaper/the-vision"
      },
      {
        "type": "link",
        "label": "How the protocol works today (high level, implementation-aware)",
        "href": "/whitepaper/how-the-protocol-works-today-high-level-implementation-aware"
      },
      {
        "type": "link",
        "label": "Why credibility matters (and why over-collateralization shouldn't be the only answer)",
        "href": "/whitepaper/why-credibility-matters-and-why-over-collateralization-shouldnt-be-the-only-answer"
      },
      {
        "type": "link",
        "label": "2. Design Goals and Non-Goals",
        "href": "/whitepaper/design-goals-and-non-goals"
      },
      {
        "type": "link",
        "label": "3. System Overview",
        "href": "/whitepaper/system-overview"
      },
      {
        "type": "link",
        "label": "4. Cryptographic Primitives & Proof Integration",
        "href": "/whitepaper/cryptographic-primitives-proof-integration"
      },
      {
        "type": "link",
        "label": "5. Trade Protocol (On- and Off-Ramp)",
        "href": "/whitepaper/trade-protocol-on-and-off-ramp"
      },
      {
        "type": "link",
        "label": "6. Proof-of-Credibility (Reputation & Matching)",
        "href": "/whitepaper/proof-of-credibility-reputation-matching"
      },
      {
        "type": "link",
        "label": "7. Fraud Prevention",
        "href": "/whitepaper/fraud-prevention"
      },
      {
        "type": "link",
        "label": "8. Dispute Resolution",
        "href": "/whitepaper/dispute-resolution"
      },
      {
        "type": "link",
        "label": "9. Pricing & Oracle Mechanics",
        "href": "/whitepaper/pricing-oracle-mechanics"
      },
      {
        "type": "link",
        "label": "10. Liquidity & Market Design",
        "href": "/whitepaper/liquidity-market-design"
      },
      {
        "type": "link",
        "label": "11. Security Model",
        "href": "/whitepaper/security-model"
      },
      {
        "type": "link",
        "label": "12. Privacy Model",
        "href": "/whitepaper/privacy-model"
      },
      {
        "type": "link",
        "label": "13. Compliance & Policy Positioning",
        "href": "/whitepaper/compliance-policy-positioning"
      },
      {
        "type": "link",
        "label": "14. Accessing P2P Protocol: Clients & SDKs",
        "href": "/whitepaper/accessing-p2p-protocol-clients-sdks"
      },
      {
        "type": "link",
        "label": "15. Governance & Upgradability",
        "href": "/whitepaper/governance-upgradability"
      },
      {
        "type": "link",
        "label": "16. Token Economics",
        "href": "/whitepaper/token-economics"
      },
      {
        "type": "link",
        "label": "17. Disclosures & Risks",
        "href": "/whitepaper/disclosures-risks"
      },
      {
        "type": "link",
        "label": "18. References",
        "href": "/whitepaper/references"
      },
      {
        "type": "link",
        "label": "Appendices",
        "href": "/whitepaper/appendices"
      }
    ]
  },
  {
    "key": "for-investors",
    "label": "For Investors",
    "className": "sidebar-cat-investors",
    "items": [
      {
        "type": "link",
        "label": "Start Here",
        "href": "/for-investors/start-here"
      },
      {
        "type": "link",
        "label": "Investor Thesis",
        "href": "/for-investors/investor-thesis"
      },
      {
        "type": "link",
        "label": "Why the Token Exists",
        "href": "/for-investors/why-the-token-exists"
      },
      {
        "type": "link",
        "label": "Token Details",
        "href": "/for-investors/token-details"
      },
      {
        "type": "link",
        "label": "Token Utility",
        "href": "/for-investors/token-utility"
      },
      {
        "type": "link",
        "label": "Token Allocation",
        "href": "/for-investors/token-allocation"
      },
      {
        "type": "link",
        "label": "MetaDAO Sale",
        "href": "/for-investors/metadao-sale"
      },
      {
        "type": "link",
        "label": "Vesting Schedules",
        "href": "/for-investors/vesting-schedules"
      },
      {
        "type": "link",
        "label": "Buy-and-Burn",
        "href": "/for-investors/buy-and-burn"
      },
      {
        "type": "link",
        "label": "Staking Mechanics",
        "href": "/for-investors/staking-mechanics"
      },
      {
        "type": "link",
        "label": "Token-Holder Governance",
        "href": "/for-investors/token-holder-governance"
      },
      {
        "type": "link",
        "label": "Progressive Decentralization",
        "href": "/for-investors/progressive-decentralization"
      },
      {
        "type": "link",
        "label": "Insurance",
        "href": "/for-investors/insurance"
      },
      {
        "type": "link",
        "label": "FAQ",
        "href": "/for-investors/faq"
      },
      {
        "type": "link",
        "label": "Disclosures",
        "href": "/for-investors/disclosures"
      }
    ]
  },
  {
    "key": "for-builders",
    "label": "For Builders",
    "className": "sidebar-cat-builders",
    "items": [
      {
        "type": "link",
        "label": "Start Here",
        "href": "/for-builders/start-here"
      },
      {
        "type": "link",
        "label": "Roles and Permissions",
        "href": "/for-builders/roles-and-permissions"
      },
      {
        "type": "link",
        "label": "Protocol Parameters",
        "href": "/for-builders/protocol-parameters"
      },
      {
        "type": "link",
        "label": "Disputes",
        "href": "/for-builders/disputes"
      },
      {
        "type": "link",
        "label": "Reputation",
        "href": "/for-builders/reputation"
      },
      {
        "type": "link",
        "label": "Contract References",
        "href": "/for-builders/contract-references"
      },
      {
        "type": "link",
        "label": "Fiat-to-Fiat Remittance",
        "href": "/for-builders/fiat-to-fiat-remittance"
      },
      {
        "type": "link",
        "label": "Global Currency Expansion",
        "href": "/for-builders/global-currency-expansion"
      },
      {
        "type": "link",
        "label": "Rollout Sequence",
        "href": "/for-builders/rollout-sequence"
      },
      {
        "type": "link",
        "label": "FAQ",
        "href": "/for-builders/faq"
      }
    ]
  },
  {
    "key": "for-merchants",
    "label": "For Merchants",
    "className": "sidebar-cat-merchants",
    "items": [
      {
        "type": "link",
        "label": "Start Here",
        "href": "/for-merchants/start-here"
      },
      {
        "type": "link",
        "label": "Merchant Readiness",
        "href": "/for-merchants/merchant-readiness"
      },
      {
        "type": "link",
        "label": "Merchant Setup Flow",
        "href": "/for-merchants/merchant-setup-flow"
      },
      {
        "type": "link",
        "label": "Handling Orders",
        "href": "/for-merchants/handling-orders"
      },
      {
        "type": "link",
        "label": "Operational Controls",
        "href": "/for-merchants/operational-controls"
      },
      {
        "type": "link",
        "label": "Circles of Trust",
        "href": "/for-merchants/circles-of-trust"
      },
      {
        "type": "link",
        "label": "Payment Channels and Country Controls",
        "href": "/for-merchants/payment-channels-and-country-controls"
      },
      {
        "type": "link",
        "label": "Order Assignment",
        "href": "/for-merchants/order-assignment"
      },
      {
        "type": "link",
        "label": "Disputes",
        "href": "/for-merchants/disputes"
      },
      {
        "type": "link",
        "label": "Delegation and Revenue Sharing",
        "href": "/for-merchants/delegation-and-revenue-sharing"
      },
      {
        "type": "link",
        "label": "Insurance",
        "href": "/for-merchants/insurance"
      },
      {
        "type": "link",
        "label": "Risk and Reliability Practices",
        "href": "/for-merchants/risk-and-reliability-practices"
      },
      {
        "type": "link",
        "label": "Troubleshooting",
        "href": "/for-merchants/troubleshooting"
      },
      {
        "type": "link",
        "label": "FAQ",
        "href": "/for-merchants/faq"
      }
    ]
  },
  {
    "key": "for-users",
    "label": "For Users",
    "className": "sidebar-cat-users",
    "items": [
      {
        "type": "link",
        "label": "Start Here",
        "href": "/for-users/start-here"
      },
      {
        "type": "link",
        "label": "Before You Start",
        "href": "/for-users/before-you-start"
      },
      {
        "type": "link",
        "label": "Order Types",
        "href": "/for-users/order-types"
      },
      {
        "type": "link",
        "label": "How to Place an Order",
        "href": "/for-users/how-to-place-an-order"
      },
      {
        "type": "link",
        "label": "What to Do by Order Type",
        "href": "/for-users/what-to-do-by-order-type"
      },
      {
        "type": "link",
        "label": "Understanding Order States",
        "href": "/for-users/understanding-order-states"
      },
      {
        "type": "link",
        "label": "Disputes and Evidence",
        "href": "/for-users/disputes-and-evidence"
      },
      {
        "type": "link",
        "label": "Troubleshooting",
        "href": "/for-users/troubleshooting"
      },
      {
        "type": "link",
        "label": "FAQ",
        "href": "/for-users/faq"
      }
    ]
  },
  {
    "key": "for-community",
    "label": "For Community",
    "className": "sidebar-cat-community",
    "items": [
      {
        "type": "link",
        "label": "Start Here",
        "href": "/for-community/start-here"
      },
      {
        "type": "link",
        "label": "Cypherpunk 2.0 Manifesto",
        "href": "/for-community/cypherpunk-20-manifesto"
      },
      {
        "type": "link",
        "label": "Hierarchy",
        "href": "/for-community/hierarchy"
      },
      {
        "type": "link",
        "label": "Four Tracks",
        "href": "/for-community/four-tracks"
      },
      {
        "type": "link",
        "label": "How to Join",
        "href": "/for-community/how-to-join"
      },
      {
        "type": "link",
        "label": "Weekly Updates and Offboarding",
        "href": "/for-community/weekly-updates-and-offboarding"
      },
      {
        "type": "link",
        "label": "Remuneration",
        "href": "/for-community/remuneration"
      },
      {
        "type": "link",
        "label": "Discord Structure",
        "href": "/for-community/discord-structure"
      },
      {
        "type": "link",
        "label": "Principles",
        "href": "/for-community/principles"
      },
      {
        "type": "link",
        "label": "FAQ",
        "href": "/for-community/faq"
      }
    ]
  }
];

export function buildSidebar(currentKey: string, ownCategory: any): any[] {
  return SECTION_ORDER.map((section) => {
    if (section.key === currentKey) {
      return ownCategory;
    }
    return {
      type: 'category' as const,
      label: section.label,
      collapsible: true,
      collapsed: true,
      className: section.className,
      items: section.items,
    };
  });
}
