---
id: 14-appendix-c-simulation-results
sidebar_position: 14
title: "Appendix C: Simulation Results"
slug: appendix-c-simulation-results
---

*Results from comprehensive 5-year adversarial and economic simulations. Ref, `simulation.py`.*

**Executive Summary:**
- **Adversarial:** 14 attacks tested, 0 succeeded, 14 failed
- **Economic:** 7 parameters OK, 3 suboptimal, 0 critical
- **Recommended Changes:** Protocol quorum 20%->15%

---

## C.1 Adversarial Results

| ID | Scenario | Status | Key Finding |
|----|----------|--------|-------------|
| S1 | NS-1: Token Accumulation | DEFENDED | $608M cost, 244,142% price increase makes capture irrational |
| S2 | NS-2: Dispute Flooding | DEFENDED | 95% rejection at T1; fee escalation + RP penalties effective |
| S3 | NS-3: Merchant Infiltration | DEFENDED | 79% detection via multi-layer social KYC |
| S4 | NS-4: Juror/Admin Capture | DEFENDED | RP cannot be purchased; ~28 days to Juror, ~380 days to Admin |
| S5 | NS-5: Economic Pressure | DEFENDED | Protocol uses USDC; token price affects governance only |
| S6 | CP-1: Coordinated Unstaking | DEFENDED | 30-day cooldown spreads impact; 0 crisis days |
| S7 | CP-2: Insurance Drain | DEFENDED | 95% rejection; dual review >$200; CAIP replenishes from 0.1% volume |
| S8 | CP-3: Deleveraging Spiral | DEFENDED | 30-day unstaking cooldown; protocol uses USDC |
| S9 | HK-1: Sybil Army | DEFENDED | 85% detection; volume limits cap damage to $13.2M/month |
| S10 | HK-2: Governance Flash | DEFENDED | OZ Governor snapshots at proposal creation; flash loans ineffective |
| S11 | HK-3: Insurance Fraud | DEFENDED | 94% detection via audit triggers (>5 claims/merchant/month) |
| S12 | CR-1: Money Laundering | DEFENDED | 1.7% success rate; volume limits block 98% |
| S13 | CR-2: Structuring | DEFENDED | 9.4% success rate; monthly limits + 20% pattern detection |
| S14 | CR-3: Terrorist Financing | DEFENDED | 5.6% success rate; Aadhaar KYC + 95% sanctions screening |

---

## C.2 Economic Results

| ID | Parameter | Current | Status | Recommendation |
|----|-----------|---------|--------|----------------|
| S15 | dailyBuyOrderLimit | 5 | OK | No change (0% users affected) |
| S16 | monthlyBuyOrderLimit | 25 | SUBOPTIMAL | Consider 35 (15% users affected) |
| S17 | maxBuyTxLimit | $400 | OK | No change (5% need larger) |
| S18 | RP_earning_rate_U2 | ~0 days | OK | Instant with KYC (+300 RP) |
| S19 | RP_earning_rate_Juror | ~28 days | OK | Achievable within 30-day target |
| S20 | RP_earning_rate_Admin | ~380 days | OK | Achievable within 365-day target |
| S21 | minStake | $250 | OK | Accessible in 4/4 target regions |
| S22 | minStake_deterrent | $1900 total | OK | 95% deterrent ratio |
| S23 | merchantFeePercentage | 2.0% | OK | 4/5 tiers profitable |
| S24 | merchant_ROI | 0.4 months | OK | Attractive ROI |

---

## C.3 Governance Optimization

| ID | Parameter | Current | Recommended | Confidence |
|----|-----------|---------|-------------|------------|
| S25 | rpToVotesMultiplier | 100 | 100 | 75% — RP gets meaningful voice |
| S26 | quorumPercentages.T3 | 4% | 4% | 80% — Allows routine participation |
| S27 | quorumPercentages.Protocol | 20% | **15%** | 80% — Requires engagement, not paralysis |
| S28 | votingPeriod | 7 days | 7 days | 85% — OZ standard |
| S29 | emergencyDelay | 3 days | 3 days | 70% — Covers 2/4 emergency scenarios |

---

## C.4 Parameter Design Validation

| ID | Parameter | Proposed | Range | Risk | Rationale |
|----|-----------|----------|-------|------|-----------|
| S30 | CAIP_CONTRIBUTION | 0.1% | 0.1%-0.15% | Low | ~1.2x coverage ratio |
| S31 | DISPUTE_FEES | 2.5%/2.5%/5% | 2%-3%/2%-3%/4%-6% | Medium | Deters 39% frivolous, suppresses fewer than 0.1% legitimate |
| S32 | RP_PENALTIES (SELL) | -25/-100/-300 | -15 to -25 (T1) | Medium | Veterans survive T3 loss |
| S33 | RP_PENALTIES (BUY) | -250/-500/-1000 | -100 to -250 (T1) | Medium | New users blacklisted on T3 loss (intentional) |
| S34 | TIER_THRESHOLDS | J1:1.5k, A1:9k | J1:1k-2k | Low | Juror ~1mo, Admin ~13mo for active users |

---

## C.5 Defense Mechanisms

| Defense | Description | Validated By |
|---------|-------------|--------------|
| Market Dynamics | Token price increases with demand; no artificial cap | S1 |
| Social KYC | Aged accounts required (Aadhaar + LinkedIn/GitHub) | S3, S9 |
| OpenZeppelin Governor | Balance snapshots prevent flash attacks | S10 |
| Volume Limits | 5 buy/10 sell daily, 25 monthly, $400 max | S12, S13, S14 |
| Insurance Hierarchy | CAIP -> CALR -> PIP with validation gates | S7, S11 |
| Unstaking Cooldown | 30-day cooldown prevents deleveraging | S6, S8 |
| RP Requirements | Cannot purchase reputation; must earn over time | S4 |
| Fee Escalation | 2.5%/5%/10% cumulative by tier | S2 |
| VRF Jury Selection | Random selection prevents juror capture | S4 |