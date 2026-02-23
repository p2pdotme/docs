---
id: 02-2-design-goals-and-non-goals
sidebar_position: 4
title: "2. Design Goals and Non-Goals"
slug: design-goals-and-non-goals
---

## 2.1 Goals

- Decentralized on/off-ramp between fiat and stablecoins without fiat escrow.
- Privacy by design using ZK proofs for identity verification while keeping raw data off-chain. A planned evidence module will extend privacy-preserving verification to bank transaction events.
- Credible neutrality: protocol-level rules are open, transparent, and upgradable via governance.
- Fast settlement: typical completion within minutes, targeting sub-~90s for common rails as network, liquidity, and automation improve.
- Safety & integrity: explicit threat model, dispute flows, and rate/limit controls to minimize fraud.

## 2.2 Non-Goals

- The Protocol does not hold customer fiat or crypto in custody.
- The Protocol does not guarantee price or liquidity; it coordinates peers and market inputs.
- The Protocol does not store personal data on behalf of users; it records necessary commitments and verdicts on-chain while raw evidence remains off-chain.

---