---
id: 11-11-security-model
sidebar_position: 11
title: "11. Security Model"
slug: security-model
---

## 11.1 Assumptions & Adversaries

- Network liveness on Base (Solana planned); oracle availability; honest-majority assumptions not required for fiat rails.
- Adversaries include chargeback fraudsters, proof forgers, oracle manipulators, griefers, and sybils.

## 11.2 Mitigations

- Bonds/slashing; rail-class windows; proof verification requirements; oracle deviation guards; rate/limit throttles.
- **Audits & Bounty:** Core contracts, verifiers, and circuits will undergo independent audits; a public bounty program will operate pre- and post-TGE.

---