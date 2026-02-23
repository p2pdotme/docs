---
id: 04-4-cryptographic-primitives-proof-integration
sidebar_position: 6
title: "4. Cryptographic Primitives & Proof Integration"
slug: cryptographic-primitives-proof-integration
---

## 4.1 Identity Verification (Live)

P2P Protocol uses ZK proofs for privacy-preserving identity verification. A new member can perform trustless KYC by sharing a ZK proof of their identity—keeping their personal data private while building on-chain reputation and unlocking higher transaction limits without revealing raw PII on-chain.

The protocol currently supports identity verification through multiple ZK-based methods:

- **Government ID verification** via on-chain ZK proof verifiers for supported identity documents.
- **Social account verification** via **Reclaim Protocol** [1], which uses zkTLS proofs to verify ownership and standing of social accounts (e.g., professional networks, developer platforms, social media) without exposing account credentials or personal data.
- **Passport verification** via ZK proof systems that can verify age, nationality, and sanctions status without disclosing document contents.

Each successful verification strengthens the user's on-chain reputation and expands their transaction capacity within the protocol.

## 4.2 Evidence Module for Bank Transaction Verification (Roadmap)

A planned evidence module will extend the protocol's ZK capabilities to bank transaction verification for on-chain dispute resolution. This module will leverage TLS-backed proofs so that a user or merchant can produce a cryptographic witness that a specific statement about a bank transfer or payment receipt is true—without exposing credentials or transaction details.

The planned module will specify where proofs are verified:

- **On-chain verifier** for compact claims and attestation hashes.
- **Off-chain verifier/relayer** (open-source reference) for complex or rail-specific statements, posting a succinct attestation back on-chain.

> Raw proofs will remain with users; the chain stores only minimal commitments and verdicts.

## 4.3 Privacy Properties

The current ZK-KYC implementation provides:

- **Non-interactive disclosure:** share only the proof, not the underlying data.
- **Selective reveal:** only fields required by the verification circuit are exposed to the circuit.
- **Bounded linkage:** protocol IDs and commitments minimize cross-session linkability where feasible.

The planned evidence module will extend these privacy properties to bank transaction verification.

---