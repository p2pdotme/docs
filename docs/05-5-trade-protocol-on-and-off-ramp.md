---
id: 05-5-trade-protocol-on-and-off-ramp
sidebar_position: 5
title: "5. Trade Protocol (On- and Off-Ramp)"
slug: trade-protocol-on-and-off-ramp
---

We formalize the order lifecycle as a state machine with timeouts:

```mermaid
stateDiagram-v2
    [*] --> OPEN : User places order
    OPEN --> MATCHED : Merchant assigned via PoC
    OPEN --> EXPIRED : T_match timeout
    MATCHED --> FUNDED : Fiat / USDC transferred
    FUNDED --> CONFIRMED : Payment confirmed
    CONFIRMED --> SETTLED : Contract settles ✓
    CONFIRMED --> DISPUTED : Party raises challenge
    DISPUTED --> RESOLVED : Admin on-chain verdict
    EXPIRED --> [*]
    SETTLED --> [*]
    RESOLVED --> [*]
```

**States:** `OPEN → MATCHED → FUNDED → CONFIRMED → SETTLED | DISPUTED → RESOLVED | EXPIRED`

**Common Parameters (governed):**

- `T_match` (max time to accept a match), `T_fiat` (max time to make fiat transfer), `T_confirm` (confirmation window), `T_dispute` (challenge window).
- `B_bond_user`, `B_bond_merchant` (optional performance bonds/slashing weights by reputation tier and payment rail risk class).
- `min_amount`, `max_amount` per rail/region; fee schedules; quote expiry windows.

## 5.1 On-Ramp (Fiat → USDC on Base; Solana planned)

1. **Open:** User opens BUY order with amount & rail.
2. **Match:** Protocol assigns a merchant (highest compatible Proof-of-Credibility and quote). Refundable bonds may lock.
3. **Fund Fiat:** User pays fiat to provided account within `T_fiat`.
4. **Merchant Ack:** Merchant confirms receipt of fiat payment.
5. **Settle:** Contract releases USDC to user; fees assessed; bonds unlocked.
6. **Dispute:** If conflict, parties submit evidence; authorized admins issue on-chain verdict.

## 5.2 Off-Ramp (USDC on Base → Fiat; Solana planned)

1. **Open:** User opens SELL order; transfers USDC to escrowless settlement adapter (contract holds or streams atomically per design).
2. **Match:** Merchant accepts and posts quote/bond.
3. **Fund Crypto:** User's USDC is locked for settlement.
4. **Merchant Pays Fiat:** Merchant pays fiat and confirms completion; or user challenges.
5. **Settle/Dispute:** As above.

## 5.3 Payment-Rail Risk Classes

Rails differ (instant/irreversible vs reversible/chargeback-prone). The protocol maps rails to bond multipliers, confirmation requirements, and longer/shorter dispute windows.

| Rail Type              | Example     | Reversible?    | Bond Multiplier | Dispute Window |
| ---------------------- | ----------- | -------------- | --------------- | -------------- |
| Instant / Irreversible | UPI, PIX    | ✗              | Low             | Short          |
| Bank Transfer          | SEPA, ACH   | ✓ (chargeback) | High            | Extended       |
| Card / Wallet          | Credit card | ✓ (chargeback) | Highest         | Extended       |

---
