---
id: 04-4-dispute-outcomes
sidebar_position: 5
title: "4. DISPUTE OUTCOMES"
slug: dispute-outcomes
---

*Design rationale: spc.3, spc.4*

> Only users can raise disputes. Fiat payments (off-chain) are disputable; USDC transfers are not.

## 4.1 Outcome Matrix ($1,000 order example)

**Fees:** See Section 6.2. [S17: Fee/RP/Slash Balance]

| Path | User | Merchant | CoT Admin | T2 Jurors* |
|------|------|----------|-----------|------------|
| **T1: User wins** | +$975, +10 RP | -$1,000, -25 RP | +$25, +5 RP | N/A |
| **T1: Merchant wins (SELL)** | -$1,000, -25 RP | +$975, +10 RP | +$25, +5 RP | N/A |
| **T1: Merchant wins (BUY)** | -250 RP only | +$1,000, +10 RP | +$25†, +5 RP | N/A |
| **T2: User wins** | +$950, +50 RP | -$1,000, -100 RP | -$25‡, -100 RP, -1% stake | ±50 RP |
| **T2: Merchant wins (SELL)** | -$1,000, -100 RP | +$950, +50 RP | +$25, +25 RP | ±50 RP |
| **T2: Merchant wins (BUY)** | -500 RP only | +$1,000, +50 RP | +$25, +25 RP | ±50 RP |
| **T3: User wins** | +$900, +150 RP | -$1,000, -300 RP, -50% stake, BAN | -$50‡, -500 RP, -10% stake | ±300 RP |
| **T3: Merchant wins (SELL)** | -$1,000, -300 RP, BAN | +$900, +150 RP | +$50, +100 RP | ±100 RP |
| **T3: Merchant wins (BUY)** | -1000 RP, BAN if RP falls below 0 | +$1,000, +150 RP | +$50, +100 RP | ±100 RP |

*T2 Jurors column at T3: Jurors who voted at T2 receive RP based on alignment with final T3 outcome. T3 uses governance voting, not jury.

†BUY dispute T1 fee: Deducted from merchant stake as resolution cost (no user escrow exists), merchant can claim it back from CoT Admin if they win the dispute.

‡Admin penalty when overturned: Fine paid from Admin stake to CAIP, separate from fee distribution.

## 4.2 T1 Resolution SLA Breach Penalties (CoTAdmin)

[S4: SLA Breach Deterrence]

| Breach # | Fine | RP | Stake | Suspension |
|----------|------|----|-------|------------|
| 1st | -$50 | -100 | 0% | Warning |
| 2nd | -$100 | -200 | -2% | 7 days |
| 3rd | -$200 | -500 | -5% | 30 days |
| 4th | -$500 | -1000 | -10% | 90 days |
| 5th | N/A | N/A | -100% | PERMANENT |

## 4.3 Bank Freeze Classification

| Type | Fault | Merchant RP | User RP | Resolution |
|------|-------|-------------|---------|------------|
| Merchant's Bank | Merchant | -200 | 0 | Stake pays user, blacklist |
| User's Funds | User | 0 | -100 | User loses, merchant keeps |
| Regulatory | None | 0 | 0 | CAIP pays user |
| Merchant Negligence | Merchant | -150 | 0 | Partial stake payout |
| User Misrepresentation | User | 0 | -150 | User blacklisted |

**Freeze Risk Classification:**

| Condition | Risk | Action |
|-----------|------|--------|
| 3+ fault freezes | HIGH | Ban |

---