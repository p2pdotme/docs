---
id: faq
sidebar_position: 9
title: "FAQ"
slug: faq
---

## Where are the contract ABIs?

Contract references are listed in the [Contract References](/for-builders/contract-references) section. Source code is available under the terms described in the protocol's licensing documentation.

## Can I add a new country or currency?

The currency expansion framework uses open-source YAML configs. Anyone with local payment-rail knowledge can propose a new currency via PR.

## How do disputes work at the contract level?

Users call `raiseDispute` on `OrderProcessorFacet`. Admins settle via `adminSettleDispute` with a fault type. Settlement triggers accounting and RP hooks. See [Disputes](/for-builders/disputes) for the full flow.

## What is the Diamond architecture?

The protocol uses EIP-2535 Diamond Standard. Functionality is split across facets that share storage, enabling modular upgrades without redeploying the full contract.

## How does RP integrate with order flow?

RP hooks are whitelisted in the `ReputationManager`. Order volume updates, dispute penalties, and verification-gated rewards all flow through these hooks. See [Reputation](/for-builders/reputation).

## Where does governance detail live for token holders?

Token-holder governance (voting model, quorum, progressive decentralization) is documented in [`/for-investors`](/for-investors/start-here).