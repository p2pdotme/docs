---
id: 8-faqs
sidebar_position: 8
title: "8. FAQs"
slug: faqs
---

## Do I need to understand on-chain mechanics?

No. The client app handles all contract interaction. Follow status prompts.

## Why wasn't my order matched instantly?

Merchant assignment depends on real-time eligibility factors, including liquidity, channel status, volume limits, and operational availability. If no merchant qualifies, the order waits or times out.

## Can I appeal a dispute?

Use the in-app dispute process. The roadmap includes governance-driven escalation tiers, but today disputes are admin-settled.

## Is my identity stored on-chain?

No raw PII is stored on-chain. The protocol uses ZK proofs and attestation hashes. Only commitments and verdicts are public.

## How do I know what to do next?

Your order status (`PLACED`, `ACCEPTED`, `PAID`, `COMPLETED`, `CANCELLED`) tells you. Each status implies a specific next action. The app guides you through it.