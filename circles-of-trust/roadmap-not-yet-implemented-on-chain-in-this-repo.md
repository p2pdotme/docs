---
id: roadmap-not-yet-implemented-on-chain-in-this-repo
sidebar_position: 3
title: "Roadmap (Not Yet Implemented On-Chain In This Repo)"
slug: roadmap-not-yet-implemented-on-chain-in-this-repo
---

The following should be read as target architecture.

## A) Circle Entity Layer

- Create one or more Circle objects with dedicated lifecycle/state.
- Circle Admin role with explicit stake and operational responsibilities.
- Circle-scoped merchant grouping and policy controls.

## B) Delegation and Circle Economics

- Public delegation to Circle Admins.
- Circle-level reward routing and lock mechanics.
- Circle-linked insurance funding and slash pathways.

## C) Tiered Circle Dispute / Claims Operations

- Escalation ladders (admin -> jury -> governance) as a Circle-native process.
- Insurance claim workflows routed by Circle-level risk pools.

## D) Fine-Grained Circle RBAC

- Explicit on-chain permission maps per Circle role and operation.
- Delegated ops with revocation and auditable policy boundaries.

```mermaid
flowchart LR
    merchantModel[CurrentMerchantRegistryModel] --> circleEntity[CircleEntityLayer]
    circleEntity --> delegation[DelegationAndCircleEconomics]
    delegation --> circleDisputes[CircleDisputesAndClaims]
    circleDisputes --> circleRbac[FineGrainedCircleRBAC]
```

---