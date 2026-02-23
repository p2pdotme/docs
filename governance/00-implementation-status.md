---
id: 00-implementation-status
sidebar_position: 0
title: "Implementation Status"
slug: implementation-status
---

## Implemented On-Chain Now

- Diamond-based protocol contracts with facet-level admin controls.
- Currency-level launch and parameterization (`launchCurrency`) for limits, fees, matching count, and small-order fee/threshold.
- User-initiated disputes with explicit dispute windows.
- Admin-settled dispute outcomes via fault typing, with RP and order-state hooks.
- Reputation system (RP) integrated with order flow and gated reward claims.

## Roadmap / Proposed Architecture

- Tiered dispute governance with juries and token-voting finality.
- Unified governor proposal system for disputes, insurance, audits, and parameter changes.
- Full insurance-pool stack (CAIP/CALR/PIP) as a complete on-chain governance primitive.

---