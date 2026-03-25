# For Token Holders

## Start Here

> *This page is provided for informational purposes to explain protocol mechanics. It does not constitute an offer of securities or investment advice. $P2P is not available to US persons. Nothing herein should be construed as a promise of financial return. Please read the full [Disclosures](/for-token-holders/disclosures) before proceeding.*

This page covers the token mechanics, governance model, and FAQs in one place.

**Quick links to key sections.**

- [Protocol overview](/for-token-holders/protocol-overview)
- [Why the token exists](/for-token-holders/why-the-token-exists)
- [Token details and allocation](/for-token-holders/token-details)
- [MetaDAO sale](/for-token-holders/metadao-sale)
- [Vesting schedules](/for-token-holders/vesting-schedules)
- [Treasury operations](/for-token-holders/treasury-operations)
- [Staking mechanics](/for-token-holders/staking-mechanics)
- [Token-holder governance](/for-token-holders/token-holder-governance)
- [Progressive decentralization](/for-token-holders/progressive-decentralization)
- [Insurance](/for-token-holders/insurance)
- [Legal documents](/for-token-holders/legal-documents)
- [FAQ](/for-token-holders/faq)

Also see [`/whitepaper`](/whitepaper/abstract) for protocol context and [`/for-builders`](/for-builders/start-here) for contract-level governance detail.

---

## Protocol Overview

> *This page is provided for informational purposes to explain protocol mechanics. It does not constitute an offer of securities or investment advice. $P2P is not available to US persons. Nothing herein should be construed as a promise of financial return. Please read the full [Disclosures](/for-token-holders/disclosures) before proceeding.*

- **Working core rails exist today.** Onramp/offramp, matching, disputes, and on-chain parameter controls are live and processing volume.
- **Expansion path is clear.** Remittance and multi-currency tracks build on existing rails. They add corridors and users, not new trust assumptions. B2B SDK for third-party developers to integrate P2P Protocol rails is set to launch by June 2026.
- **50% of supply circulates at launch.** No team or backer tokens unlock at TGE.
- **Governance transition path.** Admin-operated today, with a documented multi-phase migration to token-governed control.
- **Operational participation is explicit.** Staking, delegation, and treasury governance connect active participants to protocol operations.
- **Historical volume.** Over the last 16 months an average month-on-month growth of 27% is recorded, with 2 years of live transaction volume and $4M monthly volume recorded in February 2026. Protocol metrics can be tracked on-chain [here](https://dune.com/p2pme/latest). Past growth is not indicative of future performance.
- **Fee-generating today.** The protocol collects fees on every transaction. 20% of protocol fees are directed to the on-chain treasury, governed by token holders. Current and historical fee data is verifiable on [Dune](https://dune.com/p2pme/latest).

---

## Why the Token Exists

> *This page is provided for informational purposes to explain protocol mechanics. It does not constitute an offer of securities or investment advice. $P2P is not available to US persons. Nothing herein should be construed as a promise of financial return. Please read the full [Disclosures](/for-token-holders/disclosures) before proceeding.*

P2P on/off ramping is critical infrastructure for emerging markets. Millions of people depend on it to move between fiat and stablecoins every day. Infrastructure this important cannot remain under the control of a single operator. The token exists to decentralize governance of this utility so that no single team, company, or jurisdiction can shut it down, censor it, or extract from it unfairly.

`$P2P` is a **governance and utility token**. The protocol's key parameters, treasury funds, and the ability to mint new tokens are controlled by market-driven governance (futarchy), not by any single team or entity. Token holders govern operational parameters, direct treasury deployment, and participate in protocol operations through staking and delegation. Governance provides a mechanism to redirect control if protocol resources were ever mismanaged.

The token enables four things.

- **Decentralized governance.** Holders vote on fees, limits, merchant rules, and treasury allocation. No single operator controls these decisions.
- **Trust staking ("Circles of Trust").** Token holders stake $P2P on merchant liquidity pools to attest to their trustworthiness. Delegators who actively monitor Circle performance, evaluate merchant conduct, and participate in dispute oversight may receive incentive allocations from the protocol's fee distribution contracts, conditional on the Circle's operational performance. Delegation requires ongoing engagement with the Circle's operations.
- **Governance-directed treasury.** 20% of protocol fees flow to an on-chain treasury, planned to increase to 35% as the protocol matures, subject to MetaDAO futarchy governance. Token holders decide how these funds are deployed, including ecosystem development, liquidity operations, or other protocol-serving actions. Treasury deployment is a governance-determined operational parameter, not a contractual right. No individual token holder has a claim to treasury funds.
- **Operational resilience.** Distributed governance means no single point of failure. The protocol can continue operating even if any single operator or jurisdiction becomes unavailable, because control is distributed globally among token holders.

---

## Token Details

| Field | Value |
|-------|-------|
| Name | P2P Governance Token |
| Ticker | $P2P |
| Chain | Solana (SPL token) |
| Total Supply | 25,800,000 (25.8M at launch) |
| Initial Float | 12.9M at TGE (10M sale + 2.9M liquidity = 50%) |
| Future Issuance | Only via governance-approved proposals (futarchy) |

---

## Token Utility

> *This page is provided for informational purposes to explain protocol mechanics. It does not constitute an offer of securities or investment advice. $P2P is not available to US persons. Nothing herein should be construed as a promise of financial return. Please read the full [Disclosures](/for-token-holders/disclosures) before proceeding.*

**Governance.** $P2P is a governance token. Protocol parameters, treasury deployment, and the ability to mint new tokens are controlled by token holders through futarchy-based governance, not by any single team, foundation, or entity. Governance provides a mechanism to redirect protocol control if resources were ever mismanaged. Decisions that affect token supply (minting) must pass through a decision-market governance mechanism, where participants stake real capital on whether a proposal benefits the protocol. Proposals that the market predicts will harm the protocol are automatically rejected.

**Voting.** Token holders vote on protocol parameters such as fees, limits, merchant rules, oracle configs, and treasury allocation. One staked $P2P = one vote, with delegation.

**Staking.** Circle Admins stake $P2P to operate merchant networks. Delegators stake $P2P to Circles to participate in protocol operations: monitoring Circle performance, evaluating merchant conduct, and engaging in dispute oversight. Delegators who fulfill these operational duties may receive incentive allocations from the fee distribution contracts, conditional on the Circle's performance. Merchants stake USDC as working capital. The staking design creates skin-in-the-game at every layer.

**Fee routing.** Protocol fees are routed across participants based on their operational roles.

| Recipient | Share of Fees |
|-----------|--------------|
| Merchants + Delegators | 53.33% |
| Treasury | 20%, planned increase to 35% (governed via MetaDAO futarchy) |
| Insurance Pools | 17.78% |
| Circle Admins | 8.89% |

No single party captures a majority of protocol fees. Merchants receive the largest share because they provide working capital and operational labor. Treasury contributions are governed by token holders via MetaDAO futarchy. Governance may direct these funds toward ecosystem development, liquidity operations, or other protocol-serving measures. Insurance pools exist so disputes don't become externalised costs.

---

## Token Allocation

| Category | Tokens | % of Supply | Vesting |
|----------|--------|-----------|---------|
| **MetaDAO Sale** | **10,000,000** | **38.8%** | Unlocked at launch |
| **Liquidity** | **2,900,000** | **11.2%** | Treasury-provided to DEX pools at launch |
| **Team** | **7,740,000** | **30%** | Performance-based (see vesting) |
| **Backers** | **5,160,000** | **20%** | 1-year cliff, then quarterly (see vesting) |
| **Total** | **25,800,000** | **100%** | |

No backer or team tokens unlock at TGE. At launch, 12.9M tokens circulate (10M sale + 2.9M liquidity). Future issuance is governance-gated.

---

## Past Backers

- **[Reclaim Protocol](https://reclaimprotocol.org/)** angel invested in P2P Protocol in March 2023. They own **3.45%** of the supply and invested $80K.
- **[Alliance DAO](https://alliance.xyz/)** invested in March 2024. They own **4.66%** of supply and invested $350K.
- **[Multicoin Capital](https://multicoin.capital/)** is the first institutional backer of P2P Protocol. They committed $1.4 million in January 2025 at $15M FDV and own **9.33%** of the supply.
- **[Coinbase Ventures](https://www.coinbase.com/ventures)** invested $500K in P2P Protocol in February 2025 at $19.5M FDV. They own **2.56%** of the supply.

---

## MetaDAO Sale

> *This page is provided for informational purposes to explain protocol mechanics. It does not constitute an offer of securities or investment advice. $P2P is not available to US persons. Nothing herein should be construed as a promise of financial return. Please read the full [Disclosures](/for-token-holders/disclosures) before proceeding.*

The $P2P token launches on Solana through a MetaDAO-style sale mechanism designed for fair, community-first distribution.

1. Users commit USDC on Solana during a 4-day commitment window
2. Founders set the total USDC accepted (**F**) using commitment-weighted tiers (see below)
3. If oversubscribed, allocations and refunds are distributed pro-rata
4. 10M tokens are distributed proportionally among all participants at launch
5. Post-sale, the treasury provides 20% of raised USDC and 2.9M tokens to liquidity pools
6. Mint authority transfers to the market-governed treasury

**Note — no bid wall.** The sale does not use a bid-wall or minimum-bid ladder. Clearing is pro-rata against the accepted cap; any USDC that is not allocated is refunded.

### Raise size, FDV steps, and refunds

The public ask is **$6M** USDC. If total commitments exceed **$6M**, only the accepted amount is filled; **excess commitments are refunded** according to the pro-rata and XP-preference steps below.

How much can be accepted scales with **total commitments** (**C**):

| If total commitments **C**… | USDC accepted | Implied FDV |
|----------------------------|---------------|-------------|
| **C** ≤ **$80M** | Up to **$6M** | **$15.48M** |
| **$80M** < **C** ≤ **$150M** | Up to **$8M** | **$20.64M** |
| **C** > **$150M** | Up to **$10M** | **$25.8M** |

Only when **C** is **greater than $80M** does the sale accept up to **$8M** at **$20.64M** FDV. Only when **C** is **greater than $150M** does it accept up to **$10M** at **$25.8M** FDV. In all cases, unaccepted USDC is returned to participants.

Existing protocol users receive a preferential allocation at the same valuation as all public sale participants, based on their XP on [p2p.foundation](https://p2p.foundation/). Before participating, please review the [Disclosures](/for-token-holders/disclosures).

### Preferential allocation formula

The following defines how commitments are converted into final allocations when the sale is oversubscribed and XP tiers apply multipliers. Non-XP participants still receive a pro-rata share; XP holders receive a boosted slice of the accepted raise, capped at what they committed.

#### Variables

| Symbol | Definition |
|--------|------------|
| **C** | Total USDC committed by all participants |
| **F** | Funding cap accepted by founders (**F** ≤ **C**) |
| **c_i** | USDC committed by participant *i* |
| **T1, T2, T3** | Sets of participants in XP tiers 1 (highest), 2, and 3 |
| **N** | Set of non-XP participants |
| **m_1 = 3** | Tier 1 multiplier |
| **m_2 = 2** | Tier 2 multiplier |
| **m_3 = 1.5** | Tier 3 multiplier |

#### Steps

**Step 1 — Base pro-rata rate.** Compute the acceptance rate as if no preferences existed.

```
r = F / C
```

**Step 2 — Base allocation per participant.** Every participant receives a base slice proportional to their commitment.

```
base_i = c_i * r
```

**Step 3 — Apply XP multiplier.** For each XP holder in tier *t*, multiply their base allocation by that tier's multiplier. Allocation cannot exceed what they committed.

```
pref_i = min(base_i * m_t, c_i)
```

Non-XP participants are unchanged at this step.

**Step 4 — Total preferred allocation.** Sum all XP-preferred allocations.

```
A_pref = sum(pref_i)  for all i in T1 + T2 + T3
```

**Step 5 — Remaining pool for non-XP holders.** Subtract XP allocations from the funding cap.

```
A_remaining = F - A_pref
```

**Step 6 — Non-XP reallocation.** Non-XP holders split the remaining pool pro-rata by commitment.

```
C_N = sum(c_j)  for all j in N
final_j = c_j * (A_remaining / C_N)
```

**Step 7 — Refunds.** Each participant receives the difference between commitment and final allocation.

```
refund_i = c_i - final_allocation_i
```

#### Worked example

**Setup.** XP holders are a small fraction of the pool. Ten non-XP participants each commit $10,000. Three XP holders commit smaller amounts.

| Participant | Commitment | XP tier | Multiplier |
|---------------|------------|---------|------------|
| Alice | $500 | Tier 1 | 3× |
| Bob | $300 | Tier 2 | 2× |
| Carol | $200 | Tier 3 | 1.5× |
| D1 through D10 | $10,000 each | None | 1× |

- **C** = $101,000 (total committed)
- **F** = $10,000 (founders accept $10,000; the remainder is refunded)

**Step 1 — Base rate.**

```
r = 10,000 / 101,000 = 0.099010 (9.9%)
```

**Step 2 — Base allocation.** Note: intermediate values use full precision; displayed values are rounded.

| Participant | Commitment | base_i |
|---------------|------------|--------|
| Alice | $500 | $49.50 |
| Bob | $300 | $29.70 |
| Carol | $200 | $19.80 |
| Each D | $10,000 | $990.10 |

Without preferences, Alice would receive $49.50 allocated and $450.50 refunded.

**Step 3 — Apply multipliers.** Multipliers are applied to full-precision base values, then rounded.

| Participant | base_i | Multiplier | pref_i |
|---------------|--------|------------|--------|
| Alice | $49.50 | 3× | min($148.51, $500) = **$148.51** |
| Bob | $29.70 | 2× | min($59.41, $300) = **$59.41** |
| Carol | $19.80 | 1.5× | min($29.70, $200) = **$29.70** |

**Step 4 — Total preferred.**

```
A_pref = 148.51 + 59.41 + 29.70 = $237.62
```

**Step 5 — Remaining pool.**

```
A_remaining = 10,000 - 237.62 = $9,762.38
```

**Step 6 — Non-XP reallocation.**

```
C_N = 10 * 10,000 = $100,000
Each D: 10,000 * (9,762.38 / 100,000) = $976.24
```

**Result.** Totals may differ by small amounts due to rounding.

| Participant | Final allocation | Refund |
|-------------|------------------|--------|
| Alice (T1) | $148.51 | $351.49 |
| Bob (T2) | $59.41 | $240.59 |
| Carol (T3) | $29.70 | $170.30 |
| Each D (×10) | $976.24 | $9,023.76 |
| **Total** | **~$10,000** | **~$91,000** |

**Versus no preferences.**

| Participant | Without preference | With preference | Difference |
|---------------|-------------------|-----------------|------------|
| Alice | $49.50 | $148.51 | +$99.01 (3×) |
| Bob | $29.70 | $59.41 | +$29.71 (2×) |
| Carol | $19.80 | $29.70 | +$9.90 (1.5×) |
| Each D | $990.10 | $976.24 | −$13.86 |

XP holders receive approximately **$138.62** more in aggregate than they would without preferences. That amount is spread across ten non-XP participants, so each D is lower by approximately **$13.86** (about **1.4%** of their base allocation). The effect on non-XP holders stays small when XP commitments are a small share of **C**.

---

## Vesting Schedules

### Team Tokens (30% / 7.74M)

Team tokens follow the MetaDAO performance package model. Rather than time-based vesting, tokens unlock based on protocol performance milestones.

- 5 equal tranches of 1,548,000 tokens each
- Tranches unlock at 2x, 4x, 8x, 16x, 32x sale price
- Minimum unlock time: 12-month cliff, then 3-month TWAP measurement (15 months minimum)
- Price measured via 3-month TWAP

### Backer Tokens (20% / 5.16M)

- Months 0 through 12 are fully locked (cliff)
- At month 12, 1,032,000 tokens unlock (20%)
- At months 15, 18, 21, and 24, 1,032,000 tokens unlock each quarter
- Fully vested at month 24

Vesting is enforced via on-chain vesting contracts. Locked tokens cannot be staked.

---

## Treasury Operations

> *This page is provided for informational purposes to explain protocol mechanics. It does not constitute an offer of securities or investment advice. $P2P is not available to US persons. Nothing herein should be construed as a promise of financial return. Please read the full [Disclosures](/for-token-holders/disclosures) before proceeding.*

20% of protocol fees are contributed to the treasury, planned to increase to 35% as the protocol matures, subject to MetaDAO futarchy governance.

- 20% of protocol fees flow to the on-chain treasury (planned increase to 35% via MetaDAO futarchy governance)
- Via MetaDAO futarchy governance, token holders decide how treasury funds are deployed, including ecosystem development, liquidity operations, or other protocol-serving actions
- All treasury deployment requires governance approval and is subject to the futarchy mechanism
- First treasury governance activation is planned for approximately 3 months post-TGE, subject to governance readiness

Token holders govern how treasury funds are deployed. All treasury actions require governance approval through the futarchy mechanism. No treasury deployment is automatic or guaranteed. No individual token holder has a claim to treasury funds.

---

## Staking Mechanics

> *This page is provided for informational purposes to explain protocol mechanics. It does not constitute an offer of securities or investment advice. $P2P is not available to US persons. Nothing herein should be construed as a promise of financial return. Please read the full [Disclosures](/for-token-holders/disclosures) before proceeding.*

- **Circle Admins** stake $P2P to operate merchant networks. Their stake is slashable, and a portion of their allocations is locked as an insurance buffer.
- **Merchants** stake USDC as working capital for order fulfillment. Their capacity is bounded by their stake.
- **Delegators** stake $P2P to Circles and take on operational duties: monitoring Circle performance, evaluating merchant conduct, and participating in dispute oversight. Delegators who fulfill these duties may receive incentive allocations conditional on the Circle's performance. Only delegation to $P2P-denominated Circles grants governance voting rights.

---

## Token-Holder Governance

The target model gives token holders direct control over protocol parameters, treasury, and upgrades.

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

Governable parameters include fee percentages, spread configuration, staking and slashing rules, transaction volume limits, treasury allocation, smart contract upgrades, and token whitelisting.

For contract-level governance detail (roles, permissions, dispute mechanics), see [`/for-builders`](/for-builders/start-here).

---

## Progressive Decentralization

Decentralization is phased because governance quality matters more than governance speed.

**Phase 1 (months 4-6 post-TGE).** Insurance pools, disputes, and claims go live on-chain. Foundation multisig controls upgrades. Emergency pause capability exists.

**Phase 2 (months 7-9 post-TGE).** Token-holder voting activates for non-critical parameters. Community can submit governance proposals.

**Phase 3 (months 10-12 post-TGE).** Foundation veto authority sunset planning begins. Full DAO control is the target end-state, with all protocol parameters governed by token holders.

---

## Insurance

The protocol design includes a three-tier insurance stack.

**CAIP (Circle Admin Insurance Pool).** First-line coverage funded by a percentage of Circle volume plus slashed stakes.

**CALR (Circle Admin Locked Rewards).** A portion of admin allocations locked in a rolling buffer.

**PIP (Protocol Insurance Pool).** Backstop for systemic failures or depleted lower-tier pools.

*The full insurance-pool stack with programmable slash/reward logic and dispute-linked payouts is planned for a future release.*

---

## Operational Cost Structure

> *This page is provided for informational purposes to explain protocol mechanics. It does not constitute an offer of securities or investment advice. $P2P is not available to US persons. Nothing herein should be construed as a promise of financial return. Please read the full [Disclosures](/for-token-holders/disclosures) before proceeding.*

### Monthly Operational Expenses

| Expense | Cost |
|---------|------|
| Core team salaries (4 members) | $30,000 |
| Engineering & product team salaries (7 members) | $20,000 |
| Global operations team (10 members) | $15,000 |
| Global marketing & growth team (5 members) | $10,000 |
| Monthly average legal and miscellaneous corporate expenses | $10,000 |
| Growth marketing campaigns, rewards & cashback programme spends | $50,000 |
| Gas sponsorships to users & technical infra costs | $15,000 |
| Travel, emergency buffers, team incentives, SaaS & AI subscriptions | $25,000 |
| **Total Monthly Expenses** | **$175,000** |

### Key Assumptions

| Assumption | Value |
|------------|-------|
| Monthly volume growth rate | 30% |
| Transaction fees | 1.25% |
| Merchant commission | 0.75% |
| March 2026 volume | $5,000,000 |
| Variable gas/cloud costs | 5% |
| Monthly operational expense growth rate | 12% |

### Operational Forecast ($'000s)

*The following projections are internal operational planning estimates based on stated assumptions. They are not investment return projections, guarantees of any kind, or representations of expected token performance. Actual results may differ materially. These figures describe protocol-level economics (fee collection, operating costs) and do not represent or imply financial returns to token holders. Token value is not mechanically linked to protocol operations. Past growth is not indicative of future performance.*

| | Apr 2026 | Jul 2026 | Oct 2026 | Jan 2027 | Apr 2027 | Jul 2027 |
|---|---|---|---|---|---|---|
| **Volume** | $6,500 | $14,281 | $31,374 | $68,929 | $151,438 | $332,708 |
| Transaction fees | $81 | $179 | $392 | $862 | $1,893 | $4,159 |
| Transaction cost | $49 | $107 | $235 | $517 | $1,136 | $2,495 |
| Variable cost | $4 | $9 | $20 | $43 | $95 | $208 |
| **Total COGS** | $53 | $116 | $255 | $560 | $1,231 | $2,703 |
| **Net fee revenue** | $28 | $63 | $137 | $302 | $662 | $1,456 |
| Operational expenses | $196 | $275 | $387 | $544 | $764 | $1,073 |
| **Operating surplus/(deficit)** | **($168)** | **($212)** | **($250)** | **($242)** | **($102)** | **$383** |

These estimates are provided for operational transparency and should not be interpreted as investment return projections.

---

## Multichain Strategy

P2P Protocol envisions a multichain future with Solana as its hub chain.

The protocol's smart contracts are live on Base today, chosen during the bootstrapping phase for low fees and fast finality. The $P2P token launches on Solana deliberately: building network effects and community in the Solana ecosystem is the precursor to deploying the protocol there. Once the protocol is live on Solana, it becomes the hub of a multichain architecture, with Base and future chains as supported spokes.

### Does chain choice lock the protocol?

No. The protocol is chain-agnostic by architecture. Verifier registries, oracle adapters, and rail registries are designed as swappable interfaces. Deploying on a new chain requires re-deployment, not a rewrite.

### How do I separate what's live from what's planned?

Inline notes throughout the docs mark features planned for future releases. For contract-level detail on what is deployed, see [`/for-builders`](/for-builders/start-here).

---

## Disclosures

This section is provided solely to describe the operational mechanics of the protocol. It does not constitute an offer, solicitation, or recommendation to purchase or acquire any asset, nor does it constitute investment, financial, or legal advice. The protocol and associated participation mechanisms are not directed at, nor available to, persons located in the United States or any other restricted jurisdiction.

The $P2P token is a coordination and governance mechanism used within the protocol to facilitate participation in decision-making processes and operational activities. It is not intended to function as, or be understood as, a financial instrument, investment contract, or security of any kind.

Holding or using $P2P does not guarantee any value, utility, or continued participation rights. Any roles, permissions, or influence within the protocol are entirely contingent on governance processes and may be modified, limited, or revoked at any time according to the governance processes.

Any rewards, incentives, or allocations that may arise within the protocol are strictly a function of active participation and ongoing contribution, as determined by decentralized governance processes. Such outcomes are variable, discretionary, and not guaranteed, and should not be interpreted as a return on investment or expectation of profit.

The protocol may describe mechanisms relating to fee flows or resource allocation; such descriptions are purely illustrative of system design and do not create enforceable rights, entitlements, or expectations for any participant.

Participation in the protocol is experimental, involves risk, and may result in total loss of any value associated with participation. Prospective participants are encouraged to seek independent legal, financial, and tax advice prior to engaging with the protocol.


---

## Legal Documents

The following documents contain the corporate formation and token warrant agreements underlying the $P2P token and protocol entity structure.

- **[Company Formation and Token Warrant Documents](https://docsend.com/view/s/umhy65d8uus5whun)** — Corporate formation documents and token warrant agreements with existing backers.


---

## FAQ

### Why is the token launching on Solana if the protocol is on Base?

The protocol is live on Base today. The token launches on Solana to build network effects ahead of deploying the protocol there. Solana is the planned hub of a multichain architecture. See [Multichain Strategy](/for-token-holders/multichain-strategy) for the full roadmap.

### Why does P2P need a token?

P2P on/off ramping is essential financial infrastructure in emerging markets. Without a token, control over this infrastructure stays with a single operator who can change fees, censor users, or shut it down. The token transfers that control to the community.

### Is this a governance token?

Yes. $P2P confers governance rights over protocol parameters, treasury deployment, and protocol upgrades. It is distinct from equity in a traditional company. The "Why the Token Exists" section above covers the full governance thesis.

### How does the MetaDAO-style sale work?

Users commit USDC during a 4-day window. **There is no bid wall**, clearing is pro-rata against the accepted cap, with refunds for any unallocated USDC. The ask is **$6M**; if commitments exceed that, excess is refunded. If total commitments are **above $80M** (and up to **$150M**), up to **$8M** is accepted at **$20.64M** FDV; if they are **above $150M**, up to **$10M** is accepted at **$25.8M** FDV. If oversubscribed at the active cap, allocations follow the pro-rata and XP-preference rules on the [MetaDAO sale](/for-token-holders/metadao-sale) page. Existing protocol users receive a preferential allocation at the same valuation as all public sale participants, based on their XP on [p2p.foundation](https://p2p.foundation/). No private rounds happen at TGE. The sale is the primary distribution event.

### What unlocks at TGE?

10M sale tokens + 2.9M liquidity tokens (12.9M total, 50% of supply). Zero backer or team tokens unlock at launch.

### How does the treasury work?

20% of protocol fees flow to the on-chain treasury, planned to increase to 35% as the protocol matures, subject to MetaDAO futarchy governance. Token holders decide how to deploy these funds. All treasury deployment requires governance approval. The treasury is funded by protocol fees from a working product. No individual token holder has a claim to treasury funds. All deployment decisions are made through governance.

### Is supply fixed?

Yes, fixed at launch (25.8M). Future issuance requires governance approval via futarchy. The protocol runs on transaction fees, not token emissions.
