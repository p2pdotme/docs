# For Investors

## Start Here

This page covers the token thesis, economics, governance model, and investor FAQs in one place.

**Quick links to key sections.**

- [Investor thesis](/for-investors/investor-thesis)
- [Why the token exists](/for-investors/why-the-token-exists)
- [Token details and allocation](/for-investors/token-details)
- [MetaDAO sale](/for-investors/metadao-sale)
- [Vesting schedules](/for-investors/vesting-schedules)
- [Buy-and-burn](/for-investors/buy-and-burn)
- [Staking mechanics](/for-investors/staking-mechanics)
- [Token-holder governance](/for-investors/token-holder-governance)
- [Progressive decentralization](/for-investors/progressive-decentralization)
- [Insurance](/for-investors/insurance)
- [FAQ](/for-investors/faq)

Also see [`/whitepaper`](/whitepaper/abstract) for protocol context and [`/for-builders`](/for-builders/start-here) for contract-level governance detail.

---

## Investor Thesis

- **Working core rails exist today.** Onramp/offramp, matching, disputes, and on-chain parameter controls are live and processing volume.
- **Expansion path is clear.** Remittance and multi-currency tracks build on existing rails. They add corridors and users, not new trust assumptions.
- **Early-stage structure.** Compact launch supply with no insider tokens at TGE.
- **Governance transition path.** Admin-operated today, with a documented multi-phase migration to token-governed control.
- **Value capture is explicit.** Staking, delegation, and buy-and-burn connect protocol revenue to token economics.

---

## Why the Token Exists

P2P on/off ramping is critical infrastructure for emerging markets. Millions of people depend on it to move between fiat and stablecoins every day. Infrastructure this important cannot remain under the control of a single operator. The token exists to decentralize ownership of this utility so that no single team, company, or jurisdiction can shut it down, censor it, or extract from it unfairly.

`$P2P` is an ownership token. Holders control protocol financials, govern operational parameters, direct treasury spending, and hold enforceable claim over protocol IP. If protocol resources or IP were ever misappropriated, token governance gives holders the mechanism to redirect control. This follows the same ownership-token model used by projects with futarchy and market-governed treasuries, applied to real, revenue-generating infrastructure.

The token enables four things.

- **Decentralized governance.** Holders vote on fees, limits, merchant rules, and treasury allocation. No single operator controls these decisions.
- **Trust staking ("Circles of Trust").** Token holders stake $P2P on merchant liquidity pools to attest to their trustworthiness, earning stablecoin yield from the Circle's transaction revenue.
- **Revenue-linked ownership.** Protocol revenue funds buybacks and burns, directly connecting token value to network usage and growth.
- **Censorship resistance.** Decentralized ownership means no single point of failure. The protocol can survive regulatory pressure in any one jurisdiction because control is distributed globally among token holders.

---

## Token Details

| Field | Value |
|-------|-------|
| Name | P2P Governance Token |
| Ticker | $P2P |
| Total Supply | 25,800,000 (25.8M at launch) |
| Initial Float | 12.9M at TGE (10M sale + 2.9M liquidity = 50%) |
| Future Issuance | Only via governance-approved proposals (futarchy) |

---

## Token Utility

**Governance.** Token holders vote on protocol parameters such as fees, limits, merchant rules, oracle configs, and treasury allocation. One staked $P2P = one vote, with delegation.

**Staking.** Circle Admins stake $P2P to operate merchant networks. Community members delegate $P2P to Circles to participate in revenue sharing. Merchants stake USDC as working capital. The staking design creates skin-in-the-game at every layer.

**Fee distribution.** Protocol revenue is routed across participants.

| Recipient | Share of Revenue |
|-----------|-----------------|
| Merchants + Delegators | 53.33% |
| Buy-and-Burn | 20% (increasing to 33% via governance) |
| Insurance Pools | 17.78% |
| Circle Admins | 8.89% |

No single party captures a majority of protocol revenue. Merchants earn the most because they provide working capital and operational labor. Buy-and-burn connects token value to protocol usage. Insurance pools exist so disputes don't become externalised costs.

---

## Token Allocation

| Category | Tokens | % of Supply | Vesting |
|----------|--------|-----------|---------|
| **MetaDAO Sale** | **10,000,000** | **38.8%** | Unlocked at launch |
| **Liquidity** | **2,900,000** | **11.2%** | Treasury-provided to DEX pools at launch |
| **Team** | **7,740,000** | **30%** | Performance-based (see vesting) |
| **Investors** | **5,160,000** | **20%** | 1-year cliff, then quarterly (see vesting) |
| **Total** | **25,800,000** | **100%** | |

No investor or team tokens unlock at TGE. At launch, 12.9M tokens circulate (10M sale + 2.9M liquidity). Future issuance is governance-gated.

---

## MetaDAO Sale

The $P2P token launches through a MetaDAO-style sale mechanism designed for fair, community-first distribution.

1. Users commit USDC during a 4-day commitment window
2. Founders set a discretionary cap on total raise accepted
3. If oversubscribed, allocations and refunds are distributed pro-rata
4. 10M tokens are distributed proportionally among all participants at launch
5. Post-sale, the treasury provides 20% of raised USDC and 2.9M tokens to liquidity pools
6. Mint authority transfers to the market-governed treasury

Existing protocol users with XP receive allocations and priority access.

---

## Vesting Schedules

### Team Tokens (30% / 7.74M)

Team tokens follow the MetaDAO performance package model. Rather than time-based vesting, tokens unlock based on protocol performance milestones.

- 5 equal tranches of 1,548,000 tokens each
- Tranches unlock at 2x, 4x, 8x, 16x, 32x ICO price
- Minimum unlock time is 18 months from launch per tranche
- Price measured via 3-month TWAP

The team only benefits when the protocol grows.

### Investor Tokens (20% / 5.16M)

- Months 0 through 12 are fully locked (cliff)
- At month 12, 1,032,000 tokens unlock (20%)
- At months 15, 18, 21, and 24, 1,032,000 tokens unlock each quarter
- Fully vested at month 24

Vesting is enforced via on-chain vesting contracts. Locked tokens cannot be staked.

---

## Buy-and-Burn

Buy-and-burn ties token supply reduction directly to protocol usage.

- 20% of protocol revenue allocated to buy-and-burn (increasing to 33% via governance by 2027)
- Tokens purchased on open market via DEX and sent to zero address
- First burn expected Q2 2026 (~3 months post-TGE)

The mechanism is deliberately simple. Revenue comes in, and tokens are burned. The burn rate scales with volume, creating a direct link between product traction and supply pressure.

---

## Staking Mechanics

- **Circle Admins** stake $P2P to operate merchant networks. Their stake is slashable, and a portion of their rewards is locked as an insurance buffer.
- **Merchants** stake USDC as working capital for order fulfillment. Their capacity is bounded by their stake.
- **Delegators** stake $P2P to Circles to earn a share of revenue. Only delegation to $P2P-denominated Circles grants governance voting rights.

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

**Phase 1 (months 0-6 post-TGE).** Foundation multisig controls upgrades. Emergency pause capability exists.

**Phase 2 (months 6-18 post-TGE).** Token-holder voting activates for non-critical parameters. Community can submit governance proposals.

**Phase 3 (month 18+ post-TGE).** Full DAO control. Foundation veto authority sunsets permanently. All protocol parameters governed by token holders.

---

## Insurance

The protocol design includes a three-tier insurance stack.

**CAIP (Circle Admin Insurance Pool).** First-line coverage funded by a percentage of Circle volume plus slashed stakes.

**CALR (Circle Admin Locked Rewards).** A portion of admin earnings locked in a rolling buffer.

**PIP (Protocol Insurance Pool).** Backstop for systemic failures or depleted lower-tier pools.

*The full insurance-pool stack with programmable slash/reward logic and dispute-linked payouts is planned for a future release.*

---

## FAQ

### Why does P2P need a token?

P2P on/off ramping is essential financial infrastructure in emerging markets. Without a token, control over this infrastructure stays with a single operator who can change fees, censor users, or shut it down. The token transfers that control to the community.

### Is this an ownership token?

Yes. This is protocol ownership, distinct from equity in a traditional company. The "Why the Token Exists" section above covers the full ownership thesis.

### How does the MetaDAO-style sale work?

Users commit USDC during a 4-day window. If oversubscribed, allocations are pro-rata. Existing protocol users with XP get priority. No private rounds happen at TGE. The sale is the primary distribution event.

### What unlocks at TGE?

10M sale tokens + 2.9M liquidity tokens (12.9M total, 50% of supply). Zero investor or team tokens unlock at launch.

### How does buy-and-burn work?

20% of protocol revenue buys tokens on the open market and sends them to the zero address. The mechanism is funded entirely by real transaction revenue from a working product. More protocol usage means more burn pressure.

### Is supply fixed?

Yes, fixed at launch (25.8M). Future issuance requires governance approval via futarchy. The protocol runs on transaction revenue, not token emissions.

### Why Base chain?

Low fees and fast finality make frequent small transactions practical. Multi-chain expansion is on the roadmap. Chain choice does not lock the token design.

### How do I separate what's live from what's planned?

Inline notes throughout the docs mark features planned for future releases. For contract-level detail on what is deployed, see [`/for-builders`](/for-builders/start-here).

---

## Disclosures

The $P2P token provides governance rights and economic utility within the protocol, independently of any corporate entity. It carries no claim on foundation assets and no debt obligation. Value derives from protocol usage and network effects rather than any promise of returns.
