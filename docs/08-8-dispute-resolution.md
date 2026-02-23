---
id: 08-8-dispute-resolution
sidebar_position: 10
title: "8. Dispute Resolution"
slug: dispute-resolution
---

The Protocol is designed to minimize unnecessary data disclosure using ZK-principled evidence where available. If a user files a dispute, the counterparty can submit proof of transaction without exposing additional personal data. In the current contract implementation, disputes are resolved on-chain by authorized admins based on submitted evidence and protocol fault rules; deeper automated verifier-driven settlement is part of the roadmap.

**Windows & Burdens:** Default onus: the party claiming completion provides the completion proof. The challenger can present a counter-proof (e.g., bank statement show-non-receipt). Fail-to-prove paths trigger slashing or refunds according to the Protocol rules.

**Penalty for False Claims:** In the event a buyer attempts to proceed without actually making the fiat transfer first, they risk losing Reputation Points (e.g., 50 RP)—creating strong economic disincentives for fraudulent behavior.

---