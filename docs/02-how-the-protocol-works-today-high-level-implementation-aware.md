---
id: 02-how-the-protocol-works-today-high-level-implementation-aware
sidebar_position: 2
title: "How the protocol works today (high level, implementation-aware)"
slug: how-the-protocol-works-today-high-level-implementation-aware
---

1. **Placing orders.** A user clicks "Buy USDC" (or "Sell USDC") and enters an amount. Users can import an existing wallet address to start transacting.
2. **Order matching.** An innovative Proof-of-Credibility algorithm keeps a list of carefully vetted stablecoin merchants queued for order matching. A fiat payment address is shared over the smart contract, encrypted via the user's keys; for off-ramps, a wallet address is presented.
3. **Transfers and confirmation.** The payer completes the fiat or crypto transfer; the counterparty acknowledges or either party submits a zero-knowledge proof that the payment event occurred. Settlement completes within minutes in the common case.
4. **Disputes.** If a party files a dispute, either side can submit evidence (including ZK/TLS-backed proofs where available) without disclosing unnecessary personal data. Under current contracts, disputes are raised by users within defined windows and settled by authorized admins on-chain.
5. **On-chain operations.** Order state, matching, settlement accounting, and dispute state transitions are on-chain. Proof systems and verifier attestations are integrated as evidence paths, with expanded automated verifier routing planned as the protocol evolves.

---