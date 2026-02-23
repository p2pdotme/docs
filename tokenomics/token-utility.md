---
id: token-utility
sidebar_position: 1
title: "Token Utility"
slug: token-utility
---

## Governance

Token holders vote on protocol parameters such as fees, limits, merchant rules, oracle configs, and treasury allocation. One staked $P2P = one vote, with delegation. The target model uses OpenZeppelin Governor-style mechanics with phased decentralization. For what is live today vs planned, see [`/governance`](/governance).

## Staking

Circle Admins stake $P2P to operate merchant networks. Community members delegate $P2P to Circles to participate in revenue sharing. Merchants stake USDC as working capital. The staking design creates skin-in-the-game at every layer. Admins risk their stake on operational quality, merchants risk theirs on order fulfillment, and delegators share in both risk and reward. For current implementation state, see [`/circles-of-trust`](/circles-of-trust).

## Fee Distribution

Protocol revenue is routed across participants. The split is governance-configurable. The target model follows.

| Recipient | Share of Revenue |
|-----------|-----------------|
| Merchants + Delegators | 53.33% |
| Buy-and-Burn | 20% (increasing to 33% via governance) |
| Insurance Pools | 17.78% |
| Circle Admins | 8.89% |

The design intent is that no single party captures a majority of protocol revenue. Merchants earn the most because they provide working capital and operational labor. Buy-and-burn connects token value to protocol usage. Insurance pools exist so disputes don't become externalised costs.

---