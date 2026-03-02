---
id: 10-10-reputation-points-rp-system
sidebar_position: 11
title: "10. REPUTATION POINTS (RP) SYSTEM"
slug: reputation-points-rp-system
---

*Design rationale: spc.9*

## 10.1 Role Progression Path

**Progression:** User/Merchant (0 RP) → Juror (1.5k RP) → Admin (9k RP + governance vote)

---

## 10.2 User Tiers (U0-U3)

**Entry:** All users start at 0 RP. Verification grants +300 RP.

[S15, S16, S17: Order Limit Validation]

| Tier | RP Range | Max Order (INR) | Max Order (IDR/BRL) | Daily Orders | Monthly Orders |
|------|----------|-----------------|---------------------|--------------|----------------|
| U0 | 0-10 | $0 | $0 | 5 buy / 10 sell | 25 buy |
| U1 | 11-499 | RP ÷ 2 (up to $250) | RP × $1 (up to $499) | 5 buy / 10 sell | 25 buy |
| U2 | 500-799 | $250 + (RP - 500) × $0.50 | $400 (cap) | 5 buy / 10 sell | 25 buy |
| U3 | 800+ | $400 (cap) | $400 (cap) | 5 buy / 10 sell | 25 buy |

*U2 INR formula: At 500 RP = $250, at 799 RP = $399.50, scaling linearly.*


**RP Sources:**
| Action | RP |
|--------|-----|
| KYC verification | +300 |
| Order completion | +2 |
| Dispute win T1/T2/T3 | +10/+50/+150 |
| Referral/Voting (received) | +50 |
| Volume milestone ($500/$2.5K/$10K/$25K) | +75 each |
| LinkedIn/GitHub verification | +100 |
| X/Instagram/Facebook verification | +50 |

**Role-Specific Rights:** Only users can raise `ORDER_DISPUTE` proposals.

**RP Penalties:** See Section 6.3 for dispute loss penalties. Lying (payment claim mismatch): -25 RP.

**Demotion:** RP below 0 = protocol blacklist (applies to all roles).

---

## 10.3 Merchant Tiers (M0-M4)

**Entry:** 0 RP (parallel to User). Requires stake deposit in `exchangeToken`.

[S19, S21-S24: Merchant Economics]

| Tier | RP Range | Max Stake | Max Circles | Concurrent Orders | Fee Share |
|------|----------|-----------|-------------|-------------------|-----------|
| M0 | 0-4,999 | $250 | 1 | 2 | 1.5% |
| M1 | 5,000-14,999 | $500 | 2 | 4 | 1.75% |
| M2 | 15,000-29,999 | $750 | 3 | 6 | 2% |
| M3 | 30,000-49,999 | $1,000 | 3 | 8 | 2.1% |
| M4 | 50,000+ | $1,000 | 3 | 10 | 2.2% |

*Note: Concurrent orders are bounded by available stake. E.g., M0 with $250 stake cannot accept 2× $200 orders simultaneously (would require $400).*

**RP Sources:**
| Action | RP |
|--------|-----|
| Order completion | +5 |
| Dispute win T1/T2/T3 | +10/+50/+150 |
| 30/90 days clean | +100/+500 |


**Slash Consequences:** See Section 6.4 for slash percentages; Section 6.3 for RP penalties.

**Demotion:** RP below 0 = protocol blacklist (applies to all roles).

---

## 10.4 Juror Tiers (J1-J4)

**Entry:** 1,500 RP minimum. No active disputes/claims against participant.

[S4: VRF Selection Weights]

| Tier | RP Range | Eligible Disputes | Audit Voting | Selection Weight |
|------|----------|-------------------|--------------|-------------------|
| J1 | 1,500-2,999 | Under $500 only | No | 1x (base) |
| J2 | 3,000-5,999 | All values | No | 2x |
| J3 | 6,000-14,999 | All + Audits | Yes | 4x |
| J4 | 15,000+ | All + PIP claims | Yes | 8x |

**Selection:** VRF-weighted by RP × tier multiplier. Higher RP and tier = higher selection probability within qualified pool.

**RP Consequences:** See Section 6.3 (Juror correct/wrong). Additional: If T3 overturns T2, aligned jurors get +300 RP, misaligned get -300 RP. If T3 upholds T2, aligned jurors get +100 RP, misaligned get -100 RP. Abstain/timeout = -25 + 7-day selection ban.

**Role in Governance:** Jurors form T2 resolution panels (5 members, 3/5 majority). Per Section 8.2, audits require J3+ jurors (>6k RP).

**Disqualification:** 3 consecutive wrong votes = 30-day ban. RP below 1,500 = ineligible.

---

## 10.5 CoT Admin Tiers (A1-A5)

**Entry:** 9,000 RP minimum + governance approval vote. +4,000 RP bonus on approval.

| Tier | RP Range | Circle Tier | Max Merchants | Max Delegation | CALR Release* |
|------|----------|-------------|---------------|----------------|---------------|
| A1 | 9,000-13,999 | C1 | 100 | 0.5x circle-stake | 67% |
| A2 | 14,000-21,999 | C2 | 150 | 1x circle-stake | 70% |
| A3 | 22,000-29,999 | C3 | 200 | 2x circle-stake | 73% |
| A4 | 30,000-44,999 | C4 | 250 | 3x circle-stake | 76% |
| A5 | 45,000+ | C5 | 300 | 4x circle-stake | 80% |

*CALR Release = % of earnings released immediately (remainder locked 30 days). See Section 7.3 for details.

**RP Sources:**
| Action | RP |
|--------|-----|
| T1 resolution (any outcome) | +5 |
| Decision upheld at T2/T3 | +25/+100 |
| Monthly clean operation | +200 |
| Quarterly audit pass | +500 |

**Role-Specific Rights:** Admins resolve T1 disputes and claims. Subject to SLA (4hr disputes, 7d claims). Per Section 8, auditable if claim approval >80% or >5 claims/merchant/month.

**SLA Breach Penalties:** See Section 4.2 for fine/RP/stake penalties by breach count.

**Demotion:** RP below 9,000 = demoted to merchant. Audit fail (fraud) = permanent ban.

---

## 10.6 RP Decay & Recovery

**Inactivity Decay:**

[S16, S20: Decay Rate Fairness]

| Period | Rate | Period Max | Cumulative Max |
|--------|------|------------|----------------|
| 0-30 days | 0% | 0% | 0% |
| 31-60 days | 0% | 0% | 0% |
| 61-90 days | 1%/week | 4% | 4% |
| 91-180 days | 2%/week | 24% | 28% |
| 181-365 days | 5%/week | 47% | 75% |
| 366+ days | 5%/week | 25% | 100% |

**Decay Mathematics:**

```
effectiveRP = storedRP × (1 - decayPercentage)

where decayPercentage = min(calculateDecay(daysSinceLastActivity), 1.0)
```

| Milestone | Days Inactive | RP Remaining | Example (10,000 RP) |
|-----------|---------------|--------------|---------------------|
| Grace period ends | 60 | 100% | 10,000 |
| Slow decay begins | 90 | 96% | 9,600 |
| Moderate decay | 180 | 72% | 7,200 |
| Severe decay | 365 | 25% | 2,500 |
| Total decay | 400+ | 0% | 0 |

*After ~400 days of complete inactivity (365 days to 75% + ~5 weeks at 5%/week for remaining 25%), RP decays to 0. User is effectively reset but not blacklisted (blacklist requires RP below 0 from penalties, not decay).*

**Implementation Note:** Reputation decay is **lazily calculated**. The stored RP value is not continuously updated; instead, decay is computed on-demand during every `getReputation()` call based on `block.timestamp - lastActivityTimestamp`. This approach:
- Eliminates gas costs for idle accounts
- Ensures accurate RP for active queries
- Allows instant "catch-up" calculation on return from inactivity

**Reset:** Any qualifying activity (order, resolution, vote, active delegation) resets decay clock and persists current effective RP as the new stored value.

**Recovery Paths:**
| From | Path | Minimum Time |
|------|------|--------------|
| Merchant demotion | 90 days clean + volume | 90 days |
| Admin demotion | 180 days clean + audit pass | 180 days |
| Near-blacklist | Governance appeal (5% quorum) | 14 days + bond |

---

## 10.7 Cross-Role Summary

| Role | RP Threshold | Blacklist Trigger | Unique Rights |
|------|--------------|-------------------|---------------|
| User | 0 (+300 verify) | RP below 0 | Raise disputes |
| Merchant | 0 (+ stake) | RP below 0 | Raise claims |
| Juror | 1,500 | RP below 1,500 | T2 voting, audits (J3+) |
| Admin | 9,000 + gov vote | RP below 9,000 or fraud | T1 resolution, Circle ops |

**Unified RP:** Participants hold one RP balance across all roles. Role transitions carry over RP plus bonuses. Any role blacklist = all roles blacklisted.

---