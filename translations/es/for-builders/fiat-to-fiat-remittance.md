---
id: fiat-to-fiat-remittance
sidebar_position: 6
title: "Remesas Fiat a Fiat"
slug: fiat-to-fiat-remittance
---

El protocolo ya liquida fiat-a-stablecoin y stablecoin-a-fiat de forma independiente. Las remesas encadenan estas dos patas de manera atómica. El emisor paga fiat en el País A, el receptor recibe fiat en el País B, y el salto por stablecoin en el medio es invisible para ambos.

```mermaid
flowchart LR
    sender[EmisorFiatEntrada] --> onramp[PataOnramp]
    onramp --> settlement[LiquidaciónTransfronteriza]
    settlement --> offramp[PataOfframp]
    offramp --> receiver[ReceptorFiatSalida]
```

Los rieles de onramp, offramp, disputas y emparejamiento ya existen. La idea clave es que las remesas son puramente un problema de composición construido sobre primitivas existentes. No se necesitan nuevos supuestos de confianza.

**Lo nuevo para builders.**

- Un tipo de orden vinculada que conecta atómicamente las patas de onramp y offramp
- Un contrato de escrow que mantiene stablecoin entre las patas (si una pata falla, la otra se reembolsa)
- Un flujo de reclamo para receptores que aún no tienen cuenta
- Cotización cross-currency con desglose transparente de tarifas

---
