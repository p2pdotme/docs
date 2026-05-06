---
id: protocol-parameters
sidebar_position: 2
title: "Parámetros del Protocolo"
slug: protocol-parameters
---

El comportamiento del protocolo está altamente parametrizado en lugar de hardcodeado, porque los mercados difieren. Un spread que funciona para INR/USDC en rieles UPI sería incorrecto para BRL/USDC en PIX. La parametrización permite que el protocolo se adapte por moneda sin redesplegar contratos.

**Precios y spread.** Spread base y price bump por moneda, ajustados según las condiciones de liquidez locales.

**Límites de riesgo.** Stake mínimo, topes de volumen, límites de RP-por-USDT y límites máximos por transacción. Estos controlan cuánto riesgo asume el protocolo por merchant y por usuario.

**Controles de tarifas.** Porcentaje de comisión al merchant y tarifas fijas para órdenes pequeñas, ajustadas para hacer viables las microtransacciones sin subsidiarlas.

**Controles operativos.** Ciclos de activación de monedas y canales de pago.

---
