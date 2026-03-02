---
id: order-assignment
sidebar_position: 7
title: "Order Assignment"
slug: order-assignment
---

Order assignment is constrained by merchant and payment-channel checks.

- Online/offline state
- Blacklist, dispute, and unstake-request status
- Ongoing-order capacity checks
- Payment-channel active/approved status
- Daily and monthly volume checks
- Fiat and stake-backed liquidity thresholds

Assignment is deterministic and on-chain. The checks are layered so that a single failing condition removes a merchant from the candidate pool without affecting others.

---