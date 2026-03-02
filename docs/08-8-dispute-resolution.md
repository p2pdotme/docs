---
id: 08-8-dispute-resolution
sidebar_position: 8
title: "8. Dispute Resolution"
slug: dispute-resolution
---

The Protocol is designed to minimize unnecessary data disclosure during disputes. If a user files a dispute, the counterparty can submit evidence of the transaction without exposing additional personal data. In the current contract implementation, disputes are resolved on-chain by authorized admins based on submitted evidence and protocol fault rules. Privacy-preserving bank transaction verification and deeper automated settlement are part of the roadmap (see Section 4.2).

**Windows & Burdens:** Default onus: the party claiming completion provides evidence of completion. The challenger can present counter-evidence (e.g., bank statement showing non-receipt). Fail-to-prove paths trigger slashing or refunds according to the Protocol rules.

**Penalty for False Claims:** In the event a buyer attempts to proceed without actually making the fiat transfer first, they risk losing Reputation Points—creating strong economic disincentives for fraudulent behavior.

---