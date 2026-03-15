---
id: multichain-strategy
sidebar_position: 12
title: "Multichain Strategy"
slug: multichain-strategy
---

P2P Protocol envisions a multichain future with Solana as its hub chain.

## Where things stand today

The protocol's smart contracts are **live on Base**—chosen during the bootstrapping phase for its low fees and fast finality, which make frequent small transactions practical for emerging-market users.

The **$P2P token launches on Solana**. This is deliberate, not incidental.

## Why the token launches on Solana

Launching the token on Solana builds network effects and community in the ecosystem where the protocol will deploy next. Solana's throughput, cost structure, and DeFi liquidity make it the strongest candidate for the protocol's long-term hub chain. The token launch is the first step in establishing that presence.

## Roadmap

1. **Now:** Protocol live on Base. Token launches on Solana.
2. **Next:** Protocol deploys on Solana, making it the hub chain.
3. **Later:** Multichain expansion—Base and future high-performance chains operate as supported spokes, with Solana as the primary coordination layer.

## Does chain choice lock the protocol?

No. The protocol is chain-agnostic by architecture (see [Section 1.9 of the whitepaper](/whitepaper/the-vision#19-protocol-agnostic-by-design)). Verifier registries, oracle adapters, and rail registries are designed as swappable interfaces. Deploying on a new chain does not require rewriting the protocol—only re-deploying the same contracts.

## How do I separate what's live from what's planned?

Inline notes throughout the docs mark features planned for future releases. For contract-level detail on what is deployed today, see [`/for-builders`](/for-builders/start-here).

---
