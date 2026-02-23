---
id: staking-mechanics
sidebar_position: 6
title: "Staking Mechanics"
slug: staking-mechanics
---

Staking serves different purposes at each layer. For implementation status, see [`/circles-of-trust`](/circles-of-trust).

- **Circle Admins** stake $P2P to operate merchant networks. Their stake is slashable, and a portion of their rewards is locked as an insurance buffer. Running a Circle requires active commitment.
- **Merchants** stake USDC as working capital for order fulfillment. Their capacity is bounded by their stake. The protocol cannot commit more to orders than a merchant has at risk.
- **Delegators** stake $P2P to Circles to earn a share of revenue. Only delegation to $P2P-denominated Circles grants governance voting rights, which ties governance influence to active economic participation.

---