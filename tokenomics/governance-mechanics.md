---
id: governance-mechanics
sidebar_position: 8
title: "Governance Mechanics"
slug: governance-mechanics
---

Target parameterization. For what is live today, see [`/governance`](/governance).

| Parameter | Value |
|-----------|-------|
| Voting Power | 1 staked $P2P = 1 vote (delegatable) |
| Voting Delay | 1 day |
| Voting Period | 7 days |
| Standard Quorum | 4% |
| Critical Quorum | 20% |
| Standard Majority | 50% + 1 |
| Critical Majority | 66% supermajority |
| Timelock | 7 days before execution |

Proposals that pass quorum and threshold are queued and executed after timelock. The dual quorum model (4% standard, 20% critical) exists so routine parameter tuning doesn't require mobilizing the entire token base, while high-impact changes demand broad consensus.

## Governable Parameters

- Fee percentages and spread configuration
- Staking and slashing rules
- Transaction volume limits
- Treasury allocation (amounts exceeding $100k require governance vote)
- Smart contract upgrades
- Token whitelisting

---