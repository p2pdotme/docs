---
id: 08-8-dispute-resolution
sidebar_position: 8
title: "8. Resolución de Disputas"
slug: dispute-resolution
---

El Protocolo está diseñado para minimizar la divulgación innecesaria de datos durante las disputas. Si un usuario presenta una disputa, la contraparte puede enviar evidencia de la transacción sin exponer datos personales adicionales. En la implementación actual del contrato, las disputas se resuelven on-chain por administradores autorizados según la evidencia presentada y las reglas de fallos del protocolo. La verificación de transacciones bancarias preservando la privacidad y una liquidación automatizada más profunda forman parte del roadmap (ver [Sección 4.2](/es/whitepaper/cryptographic-primitives-proof-integration#42-módulo-de-evidencia-para-verificación-de-transacciones-bancarias-roadmap)).

## 8.1 Ventanas y Cargas de Prueba

Carga por defecto: la parte que reclama la finalización proporciona evidencia de la finalización. El retador puede presentar contraevidencia (por ejemplo, un extracto bancario que muestre la no recepción). Los caminos de no-probar activan slashing o reembolsos según las reglas del Protocolo.

## 8.2 Penalización por Reclamaciones Falsas

En el caso de que un comprador intente proceder sin haber realizado realmente la transferencia fiat primero, arriesga perder Puntos de Reputación (RP) — creando fuertes desincentivos económicos contra el comportamiento fraudulento.

---

