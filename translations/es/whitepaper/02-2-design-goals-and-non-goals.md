---
id: 02-2-design-goals-and-non-goals
sidebar_position: 2
title: "2. Objetivos de Diseño y No-Objetivos"
slug: design-goals-and-non-goals
---

## 2.1 Objetivos

- Rampa de entrada/salida (on/off-ramp) descentralizada entre fiat y stablecoins sin escrow de fiat.
- Privacidad por diseño mediante pruebas de zero-knowledge (ZK) para la verificación de identidad, manteniendo los datos crudos fuera de la cadena. La verificación de transacciones bancarias está planificada (ver [Sección 4.2](/es/whitepaper/cryptographic-primitives-proof-integration#42-módulo-de-evidencia-para-verificación-de-transacciones-bancarias-roadmap))
- Neutralidad creíble: las reglas a nivel de protocolo son abiertas, transparentes y actualizables mediante gobernanza.
- Liquidación rápida: finalización típica en minutos, apuntando a menos de ~90 segundos para las vías comunes a medida que la red, la liquidez y la automatización mejoren.
- Seguridad e integridad: modelo de amenazas explícito, flujos de disputas y controles de tasa/límite para minimizar el fraude.

## 2.2 No objetivos

- El Protocolo no mantiene en custodia fiat o crypto de los clientes.
- El Protocolo no garantiza precio ni liquidez; coordina entre pares e inputs de mercado.
- El Protocolo no almacena datos personales en nombre de los usuarios; registra los compromisos y veredictos necesarios on-chain mientras la evidencia cruda permanece fuera de la cadena.

---

