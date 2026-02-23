---
id: protocol-parameters
sidebar_position: 2
title: "Protocol Parameters"
slug: protocol-parameters
---

Protocol behavior is heavily parameterized rather than hardcoded because markets differ. A spread that works for INR/USDC on UPI rails would be wrong for BRL/USDC on PIX. Parameterization lets the protocol adapt per-currency without redeploying contracts.

**Pricing and spread.** Base spread and price bump by currency, adjusted for local liquidity conditions.

**Risk limits.** Min stake, volume caps, RP-per-USDT limits, and max tx limits. These gate how much risk the protocol takes per merchant and per user.

**Fee controls.** Merchant fee percentage and small-order fixed fees, tuned to make micro-transactions viable without subsidizing them.

**Operational controls.** Currency and payment-channel activation lifecycles.

---