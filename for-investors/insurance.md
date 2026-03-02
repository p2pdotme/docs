---
id: insurance
sidebar_position: 12
title: "Insurance"
slug: insurance
---

The protocol design includes a three-tier insurance stack.

**CAIP (Circle Admin Insurance Pool).** First-line coverage funded by a percentage of Circle volume plus slashed stakes.

**CALR (Circle Admin Locked Rewards).** A portion of admin earnings locked in a rolling buffer.

**PIP (Protocol Insurance Pool).** Backstop for systemic failures or depleted lower-tier pools.

*The full insurance-pool stack with programmable slash/reward logic and dispute-linked payouts is planned for a future release.*

---