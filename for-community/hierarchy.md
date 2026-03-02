---
id: hierarchy
sidebar_position: 2
title: "Hierarchy"
slug: hierarchy
---

| Level | Role | Code Name |
|-------|------|-----------|
| Core Team | Protocol founders and leads | "Core Team" |
| Country Lead | Manages all tracks in a country | "Country Lead" |
| Coordinator | Track coordinators | "Keymaster" |
| Contributor | Community ambassadors | "Cipher" |

```mermaid
flowchart TD
    CT["1. Core Team"]
    
    subgraph india [India]
        CL_IN["2. Country Lead"]
        KM_IN_Relay["3. Keymaster - Relay Guild"]
        KM_IN_Node["3. Keymaster - Node Guild"]
        KM_IN_Signal["3. Keymaster - Signal Guild"]
        KM_IN_Forge["3. Keymaster - Forge Guild"]
        CL_IN --> KM_IN_Relay
        CL_IN --> KM_IN_Node
        CL_IN --> KM_IN_Signal
        CL_IN --> KM_IN_Forge
    end
    
    subgraph brazil [Brazil]
        CL_BR["2. Country Lead"]
        KM_BR["3. Keymasters..."]
        CL_BR --> KM_BR
    end
    
    subgraph other [Other Countries...]
        CL_X["2. Country Lead"]
        KM_X["3. Keymasters..."]
        CL_X --> KM_X
    end
    
    CT --> CL_IN
    CT --> CL_BR
    CT --> CL_X
```

Each "Keymaster" manages up to 5 "Ciphers".

## Country Lead Responsibilities

Each "Country Lead" manages all four tracks in their country.

| Code Name | Scope |
|-----------|-------|
| **Relay Guild** | Country Discord/Telegram channels |
| **Node Guild** | Colleges and local events |
| **Signal Guild** | Regional social media (local language content) |
| **Forge Guild** | Translations, local dev community |

---