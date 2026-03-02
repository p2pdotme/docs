---
id: 07-7-insurance-pools
sidebar_position: 8
title: "7. INSURANCE POOLS"
slug: insurance-pools
---

## 7.1 Pool Hierarchy

| Pool | Source | Coverage | Max Claim |
|------|--------|----------|-----------|
| **CAIP** | 0.1% Circle volume + slashes | Circle-specific | $5,000 |
| **CALR** | 33% admin revenue (see 7.3) | CAIP overflow | $10,000 |
| **PIP** | 5% protocol revenue + T3 slashes | Systemic failures | Unlimited (gov >$50k) |

Flow: CAIP > CALR > PIP

**Stake Depletion Fallback:** If merchant stake is depleted mid-dispute (concurrent orders/slashes), user receives pro-rata payout from remaining stake; remainder claimed from CAIP following the pool priority.

## 7.2 CAIP Funding

| Source | Contribution |
|--------|--------------|
| Monthly volume | 0.1% |
| Admin slashes | 100% of slashed amount |
| Merchant slashes | 100% of slashed amount |

## 7.3 CALR Mechanism

| Parameter | Value |
|-----------|-------|
| Lock % | 33% of earnings (base) |
| Lock duration | 30 days rolling |
| Immediate release | 67%-80% (tier-based, see Section 10.5) |

*CALR creates anti-collusion incentive: locked revenue can be slashed if admin is found fraudulent within the lock window. Higher-tier admins earn faster release as reward for proven track record. See Section 10.5 for tier-specific release percentages.*

## 7.4 PIP Approval Thresholds

[S7: Insurance Pool Validation]

| Amount | Approval | Time |
|--------|----------|------|
| Under $1,000 | 2 CoT Admins | Instant |
| $1k-$10k | 3 CoT Admins (different Circles) | 24hr |
| $10k-$50k | Jury vote | 72hr |
| > $50k | Governance vote | 7-14 days |

---