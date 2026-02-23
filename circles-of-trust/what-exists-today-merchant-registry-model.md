---
id: what-exists-today-merchant-registry-model
sidebar_position: 1
title: "What Exists Today (Merchant Registry Model)"
slug: what-exists-today-merchant-registry-model
---

The protocol runs on a **merchant registry + payment-channel** model today. The full Circle smart-contract model described in roadmap materials is a separate, planned layer.

This is deliberate. The merchant registry was shipped first because it solves the immediate problem of matching users with vetted, staked liquidity providers without requiring the full Circle governance and delegation stack. Circles add community-driven oversight, insurance layering, and delegation economics on top of this foundation. Building the registry first means the Circle layer inherits a battle-tested order flow and dispute system rather than inventing both simultaneously.

```mermaid
flowchart TD
    user[UserOrder]
    orderFlow[OrderFlowFacet]
    registry[MerchantRegistry]
    country[CountryConfig]
    assignment[EligibilityAndAssignmentChecks]
    settlement[SettlementAndAccounting]

    user --> orderFlow
    orderFlow --> registry
    orderFlow --> country
    registry --> assignment
    country --> assignment
    assignment --> settlement
```

## 1) Merchant Lifecycle

Current merchant operations include the following.

- Register with a supported currency.
- Stake protocol settlement liquidity (USDT in current contracts).
- Add and maintain payment channels tied to active country payment-channel configs.
- Request/approve/cancel unstake flows and fee withdrawal flows.
- Toggle online/offline status and participate in assignment queues when eligible.

All on-chain, all role-gated. The merchant registry is the operational core that Circles will wrap.

## 2) Payment-Channel and Country Controls

Policy is governed at the currency/country layer.

- Supported currencies can be activated/deactivated.
- Payment-channel configs are created/updated/activated/deactivated.
- Monthly volume controls and thresholds are enforced by config.
- Merchant minimum stake and fee percentages are set per currency.

This creates a jurisdiction-aware operating model. When Circles ship, they inherit these per-country controls rather than rebuilding them.

## 3) Assignment, Eligibility, and Risk Gating

Order assignment is constrained by merchant and payment-channel checks.

- Online/offline state.
- Blacklist/dispute/unstake-request status.
- Ongoing-order capacity checks.
- Payment-channel active/approved status.
- Daily and monthly volume checks.
- Fiat and stake-backed liquidity thresholds.

Assignment is deterministic and on-chain. The checks are layered so that a single failing condition (e.g., disputed status, insufficient liquidity) removes a merchant from the candidate pool without affecting others. This design scales to Circles. When Circle-level eligibility checks are added, they compose on top of the existing merchant-level gates.

## 4) Disputes and Operational Integrity

Dispute handling in the live contracts is user-raised and admin-settled, with explicit time windows and order-state requirements.

Dispute settlement triggers the following updates.

- Merchant dispute flags are updated.
- Order accounting and merchant/user outcomes are executed.
- RP hooks are invoked where applicable.

This works today. The Circle roadmap adds jury and governance escalation tiers on top of it, but the base dispute lifecycle does not need to change.

## 5) Operational Guides

For step-by-step usage and operations, see the following guides.

- [`User Guide`](/user-guide) (BUY/SELL/PAY flows, order states, disputes, FAQs)
- [`Merchant Guide`](/merchant-guide) (registration, channels, order handling, disputes, operations, FAQs)

---