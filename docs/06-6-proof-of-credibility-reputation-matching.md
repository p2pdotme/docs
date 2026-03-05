---
id: 06-6-proof-of-credibility-reputation-matching
sidebar_position: 6
title: "6. Proof-of-Credibility (Reputation & Matching)"
slug: proof-of-credibility-reputation-matching
---

P2P Protocol works using a unique on-chain reputation system which not only builds up user trust and privileges but actively helps prevent fraudulent activity within the P2P landscape.

```mermaid
flowchart TD
    subgraph Inputs["📥 Reputation Inputs"]
        A["✅ Successful Trades\n(size-weighted)"]
        B["🪪 ZK-KYC Tier\n(Gov ID / Passport / Social)"]
        C["🌍 Rail & Geography\nDiversity"]
        D["👥 Referral\nAttestations"]
        E["⚠️ Slashed Events\n(negative delta)"]
    end

    subgraph Score["⚖️ Proof-of-Credibility Score"]
        F["RP Score\n(with decay & anti-gaming)"]
    end

    subgraph Outputs["📤 Unlocked Privileges"]
        G["💰 Higher Order Limits"]
        H["💸 Lower Fee Tiers"]
        I["🏦 Reduced Bond Requirements"]
        J["🚀 Matching Priority"]
    end

    A & B & C & D --> F
    E -->|"reduces"| F
    F --> G & H & I & J
```

## 6.1 Building Trust Through Reputation

A user can increase their Reputation Points (RP) score via a series of on-chain tasks which make them more trustworthy in the eyes of the community. From completing anonymous KYC to referring friends, each newly completed task reinforces the user's on-chain reputation while unlocking fresh rights and benefits along with upgraded transaction limits.

## 6.2 Inputs (illustrative, governed)

- Successful trades (size-weighted), age/decay, dispute history.
- KYC proof tier (ZK-KYC completed, source diversity).
- Rail diversity & geography; referral attestations.
- Slashed events (negative deltas), appeals outcomes.

## 6.3 Outputs

- Order limits (min/max), fee tiers, bond multipliers, matching priority.
- Regional caps by compliance policy.

## 6.4 Sybil & Gaming Resistance

- Weighted decay, diminishing returns, rail-mix requirements, and anti-gaming and fraud detection engine checks.
- Optional attested device/account fingerprints (privacy-respecting commitments).

---
