---
id: 11-11-security-model
sidebar_position: 11
title: "11. Modelo de Seguridad"
slug: security-model
---

## 11.1 Suposiciones y Adversarios

- Disponibilidad de red (liveness) en Base (expansión multichain a Solana planeada); disponibilidad de oráculos; no se requieren suposiciones de mayoría honesta para los rails fiat.
- Los adversarios incluyen estafadores de chargeback, falsificadores de pruebas, manipuladores de oráculos, griefers y sybils.

## 11.2 Mitigaciones

- Bonos/slashing; ventanas por clase de rail; requisitos de verificación de pruebas; guards de desviación de oráculos; throttles de tasa/límite.
- **Auditorías y Bounty:** Los contratos principales, verificadores y circuits serán sometidos a auditorías independientes; un programa de bounty público operará pre-TGE y post-TGE.

---

