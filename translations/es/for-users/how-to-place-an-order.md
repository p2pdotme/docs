---
id: how-to-place-an-order
sidebar_position: 3
title: "Cómo Crear una Orden"
slug: how-to-place-an-order
---

1. Abrí la app y seleccioná `BUY`, `SELL` o `PAY`.
2. Ingresá el monto y los datos requeridos del destinatario/pago.
3. Enviá la orden y esperá la asignación de un merchant.
4. Seguí las instrucciones de la app para la transferencia y confirmación.

```mermaid
flowchart LR
    start[Iniciar en la app] --> choose[Elegir tipo de orden]
    choose --> submit[Enviar orden]
    submit --> assign[Merchant asignado]
    assign --> transfer[Completar paso de transferencia]
    transfer --> finish[Estado final de la orden]
```

---
