---
id: 1-end-to-end-fiat-to-fiat-remittance
sidebar_position: 1
title: "1. End-to-End Fiat-to-Fiat Remittance"
slug: end-to-end-fiat-to-fiat-remittance
---

## The idea

The protocol already settles fiat-to-stablecoin and stablecoin-to-fiat independently. Remittance is what happens when you chain these two legs together atomically. The sender pays fiat in Country A, the receiver gets fiat in Country B, and the stablecoin hop in the middle is invisible to both.

## Example Flow

- Sender in Country A initiates transfer in local fiat.
- Protocol settles intermediate value rails.
- Receiver in Country B receives local fiat payout.

```mermaid
flowchart LR
    sender[SenderFiatIn] --> onramp[OnrampLeg]
    onramp --> settlement[CrossBorderSettlement]
    settlement --> offramp[OfframpLeg]
    offramp --> receiver[ReceiverFiatOut]
```

## What this reuses

Onramp, offramp, dispute, and matching rails all exist. No new trust assumptions are needed. The same merchant staking, RP gating, and settlement logic applies to each leg independently. The key insight is that remittance is purely a composition problem built from existing primitives.

## What's new

- A linked order type that atomically connects onramp and offramp legs
- An escrow contract holding stablecoin between legs (so failure on one side refunds the other)
- A receiver claim flow for recipients who don't already have accounts
- Cross-currency quote display and transparent fee breakdown

## Why it matters

Remittance unlocks a much larger addressable market without rebuilding the protocol. Every existing corridor becomes a potential remittance corridor. The user who sends money home doesn't need to understand stablecoins. They see fiat in, fiat out.

---