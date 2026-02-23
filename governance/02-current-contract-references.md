---
id: 02-current-contract-references
sidebar_position: 2
title: "Current Contract References"
slug: current-contract-references
---

The following contract surfaces represent the live governance model.

- `facets/CountryFacet.sol` (`launchCurrency`, currency and payment-channel config governance)
- `facets/P2pConfigFacet.sol` (pricing/spread/admin configuration)
- `facets/OrderProcessorFacet.sol` (`raiseDispute`, `adminSettleDispute`, limits, thresholds)
- `facets/MerchantRegistryFacet.sol` and `facets/MerchantOnboardFacet.sol` (merchant controls, fees, stake/unstake and status actions)
- `ReputationManager.sol` (RP hooks, reward/verification gating)

---