---
id: faq
sidebar_position: 8
title: "FAQ"
slug: faq
---

## Do I need to understand on-chain mechanics?

No. The client app handles all contract interaction. Follow status prompts.

## Why wasn't my order matched instantly?

Merchant assignment depends on real-time eligibility factors, including liquidity, channel status, volume limits, and operational availability. If no merchant qualifies, the order waits or times out.

## Can I appeal a dispute?

Use the in-app dispute process. *Governance-driven escalation tiers are planned for a future release.*

## Is my identity stored on-chain?

No raw PII is stored on-chain. The protocol uses ZK-KYC proofs for identity verification and stores only commitments and verdicts on-chain.

## How do I know what to do next?

Your order status (`PLACED`, `ACCEPTED`, `PAID`, `COMPLETED`, `CANCELLED`) tells you. Each status implies a specific next action. The app guides you through it.