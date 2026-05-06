---
id: order-assignment
sidebar_position: 7
title: "Asignación de Órdenes"
slug: order-assignment
---

La asignación de órdenes está restringida por verificaciones del merchant y del canal de pago.

- Estado online/offline
- Estado de blacklist, disputa y solicitud de unstake
- Verificaciones de capacidad de órdenes en curso
- Estado activo/aprobado del canal de pago
- Verificaciones de volumen diario y mensual
- Umbrales de liquidez fiat y respaldada por stake

La asignación es determinística y on-chain. Las verificaciones están escalonadas de manera que una sola condición fallida elimina a un merchant del pool de candidatos sin afectar a los demás.

---
