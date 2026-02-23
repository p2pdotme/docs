---
id: 08-8-cot-oversight
sidebar_position: 9
title: "8. COT OVERSIGHT"
slug: cot-oversight
---

## 8.1 Audit Triggers

Audits prevent admin-merchant collusion (fake claims, biased disputes, volume inflation).

| Flag | Threshold |
|------|-----------|
| Claim approval rate | >80% |
| Claims per merchant | >5/month |
| Audit cooldown | fewer than 90 days |

## 8.2 Audit Process

1. **Submit:** 1,000 RP + 100 $P2P bond required; target must have the 3 flags
2. **Vote:** 7-day period, >50% majority, 5% quorum
3. **Evidence:** Admin has 7 days to provide documentation
4. **Review:** 5 jurors (J3+, >6k RP) vote 3/5 majority
5. **Appeal:** 14-day window, 66% supermajority, 500 $P2P bond

## 8.3 Audit Outcomes

| Result | Admin | Proposer |
|--------|-------|----------|
| PASS | Cleared | -100 $P2P |
| FAIL (Minor) | -10% stake, -1000 RP, probation | +100 $P2P, +200 RP |
| FAIL (Major) | -50% stake, -5000 RP, 6mo suspend | +100 $P2P, +500 RP |
| FAIL (Fraud) | -100% stake, permanent ban | +100 $P2P, +1000 RP |

## 8.4 Anti-Collusion Mechanisms

1. **CALR Lock:** Revenue locked per Section 7.3; slashed first on fraud detection
2. **Dual Review:** Claims >$200 require 2nd admin approval (spc.6.2)
3. **Audit Proposals:** Community-driven scrutiny

---