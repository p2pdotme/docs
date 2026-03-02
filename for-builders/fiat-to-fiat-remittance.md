---
id: fiat-to-fiat-remittance
sidebar_position: 6
title: "Fiat-to-Fiat Remittance"
slug: fiat-to-fiat-remittance
---

The protocol already settles fiat-to-stablecoin and stablecoin-to-fiat independently. Remittance chains these two legs together atomically. The sender pays fiat in Country A, the receiver gets fiat in Country B, and the stablecoin hop in the middle is invisible to both.

```mermaid
flowchart LR
    sender[SenderFiatIn] --> onramp[OnrampLeg]
    onramp --> settlement[CrossBorderSettlement]
    settlement --> offramp[OfframpLeg]
    offramp --> receiver[ReceiverFiatOut]
```

Onramp, offramp, dispute, and matching rails all exist. The key insight is that remittance is purely a composition problem built from existing primitives. No new trust assumptions are needed.

**What's new for builders.**

- A linked order type that atomically connects onramp and offramp legs
- An escrow contract holding stablecoin between legs (failure on one side refunds the other)
- A receiver claim flow for recipients who don't already have accounts
- Cross-currency quote display and transparent fee breakdown

---