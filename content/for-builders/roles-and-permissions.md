---
id: roles-and-permissions
sidebar_position: 1
title: "Roles and Permissions"
slug: roles-and-permissions
---

The protocol defines three governance scopes.

**Super admin** launches currencies, sets core risk/limit parameters, and manages critical protocol configuration.

**Admin** manages operational parameters including spread, merchant fee percentages, disputes, and merchant/payment-channel actions.

**Merchant and user** scope covers order lifecycle, staking/registration flows, and dispute initiation according to contract rules.

```mermaid
flowchart TD
    superAdmin[SuperAdmin]
    admin[Admin]
    users[UsersAndMerchants]
    facets[DiamondFacets]
    state[ProtocolState]

    superAdmin -->|launchCurrencyAndCoreParams| facets
    admin -->|opsParamsFeesDisputes| facets
    users -->|ordersStakingDisputeRaise| facets
    facets --> state
```

---