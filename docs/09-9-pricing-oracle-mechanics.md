---
id: 09-9-pricing-oracle-mechanics
sidebar_position: 9
title: "9. Pricing & Oracle Mechanics"
slug: pricing-oracle-mechanics
---

The Protocol determines indicative pricing using built-in oracle adapters that aggregate rates from selected exchanges and P2P venues into a median/TWAP with fallbacks. These oracles analyze price data from a variety of both centralized and P2P exchanges to determine the trading price for the stablecoin-fiat pair in question.

**Parameters:** source set, staleness bounds, deviation thresholds, and circuit breakers. Quotes carry an expiry to limit exposure; if the oracle fails or exceeds deviation limits, orders pause or re-quote.

---