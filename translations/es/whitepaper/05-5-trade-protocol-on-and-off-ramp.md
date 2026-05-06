---
id: 05-5-trade-protocol-on-and-off-ramp
sidebar_position: 5
title: "5. Protocolo de Negociación (On-Ramp y Off-Ramp)"
slug: trade-protocol-on-and-off-ramp
---

Formalizamos el ciclo de vida de las órdenes como una máquina de estados con tiempos de espera:

**Estados:** `OPEN → MATCHED → FUNDED → CONFIRMED → SETTLED | DISPUTED → RESOLVED | EXPIRED`

**Parámetros comunes (gobernados):**

- `T_match` (tiempo máximo para aceptar un emparejamiento), `T_fiat` (tiempo máximo para realizar la transferencia fiat), `T_confirm` (ventana de confirmación), `T_dispute` (ventana de disputa).
- `B_bond_user`, `B_bond_merchant` (bonos de desempeño opcionales / pesos de slashing según nivel de reputación y clase de riesgo de la vía de pago).
- `min_amount`, `max_amount` por vía/región; horarios de comisiones; ventanas de expiración de cotizaciones.

## 5.1 On-Ramp (Fiat → USDC en Base; expandiendo a Solana)

1. **Abrir:** El usuario abre una orden de BUY (compra) con monto y vía.
2. **Emparejamiento:** El protocolo asigna un merchant on-chain basado en USDC stakeado. Se pueden bloquear bonos reembolsables.
3. **Transferir Fiat:** El usuario paga fiat a la cuenta proporcionada dentro de `T_fiat`.
4. **Confirmación del Merchant:** El merchant confirma la recepción del pago fiat.
5. **Liquidación:** El contrato libera USDC al usuario; se cobran comisiones; se desbloquean bonos.
6. **Disputa:** En caso de conflicto, las partes presentan evidencia; administradores autorizados emiten un veredicto on-chain.

## 5.2 Off-Ramp (USDC en Base → Fiat; expandiendo a Solana)

1. **Abrir:** El usuario abre una orden de SELL (venta); transfiere USDC al adaptador de liquidación sin escrow (el contrato mantiene o transmite de forma atómica según el diseño).
2. **Emparejamiento:** El merchant acepta y publica cotización/bono.
3. **Fondos Crypto:** El USDC del usuario se bloquea para la liquidación.
4. **Merchant paga Fiat:** El merchant paga fiat y confirma la finalización; o el usuario impugna.
5. **Liquidación:** El contrato libera USDC al merchant; se cobran comisiones; se desbloquean bonos.
6. **Disputa:** En caso de conflicto, las partes presentan evidencia; administradores autorizados emiten un veredicto on-chain.

## 5.3 Clases de Riesgo por Vía de Pago

Las vías difieren (instantáneas/irreversibles vs. reversibles/propensas a chargebacks). El protocolo asigna a cada vía multiplicadores de bonos, requisitos de confirmación y ventanas de disputa más largas o más cortas.

---

