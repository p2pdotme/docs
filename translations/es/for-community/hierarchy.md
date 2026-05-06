---
id: hierarchy
sidebar_position: 2
title: "Jerarquía"
slug: hierarchy
---

| Nivel | Rol | Nombre Código |
|-------|-----|---------------|
| Core Team | Fundadores y líderes del protocolo | "Core Team" |
| Country Lead | Gestiona todos los tracks en un país | "Country Lead" |
| Coordinador | Coordinadores de track | "Keymaster" |
| Contribuidor | Embajadores de la comunidad | "Cipher" |

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
    
    subgraph brazil [Brasil]
        CL_BR["2. Country Lead"]
        KM_BR["3. Keymasters..."]
        CL_BR --> KM_BR
    end
    
    subgraph other [Otros Países...]
        CL_X["2. Country Lead"]
        KM_X["3. Keymasters..."]
        CL_X --> KM_X
    end
    
    CT --> CL_IN
    CT --> CL_BR
    CT --> CL_X
```

Cada "Keymaster" gestiona hasta 5 "Ciphers".

## Responsabilidades del Country Lead

Cada "Country Lead" gestiona los cuatro tracks en su país.

| Nombre Código | Alcance |
|---------------|---------|
| **Relay Guild** | Canales de Discord/Telegram del país |
| **Node Guild** | Universidades y eventos locales |
| **Signal Guild** | Redes sociales regionales (contenido en idioma local) |
| **Forge Guild** | Traducciones, comunidad local de devs |

---
