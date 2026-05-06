---
id: faq
sidebar_position: 9
title: "Preguntas Frecuentes"
slug: faq
---

## ¿En qué chain están desplegados los contratos?

Los smart contracts del protocolo están activos en Base (EVM). El despliegue en Solana está planificado como parte de la expansión multicadena. El token $P2P es un token SPL en Solana. Consulta la [Estrategia Multichain](/es/for-token-holders/multichain-strategy) para más detalles.

## ¿Dónde están las ABIs de los contratos?

Las referencias de contratos están listadas en la sección de [Referencias de Contratos](/es/for-builders/contract-references). El código fuente está pendiente de auditorías y será liberado como open-source en junio de 2026.

## ¿Puedo agregar un nuevo país o moneda?

El framework de expansión de monedas utiliza configuraciones YAML open-source. Cualquiera con conocimiento local de rieles de pago puede proponer una nueva moneda mediante un PR.

## ¿Cómo funcionan las disputas a nivel de contrato?

Los usuarios llaman a `raiseDispute` en `OrderProcessorFacet`. Los admins resuelven mediante `adminSettleDispute` con un tipo de fallo. La resolución desencadena las vías de contabilidad y los hooks de RP. Consulta [Disputas](/es/for-builders/disputes) para el flujo completo.

## ¿Qué es la arquitectura Diamond?

El protocolo utiliza el estándar Diamond EIP-2535. La funcionalidad está dividida en facets que comparten storage, permitiendo actualizaciones modulares sin redesplegar el contrato completo.

## ¿Cómo se integran los RP con el flujo de órdenes?

Los hooks de RP están en la whitelist del `ReputationManager`. Las actualizaciones por volumen de órdenes, las penalizaciones por disputas y las recompensas condicionadas por verificación fluyen a través de estos hooks. Consulta [Reputación](/es/for-builders/reputation).

## ¿Dónde se encuentra el detalle de gobernanza para los poseedores del token?

La gobernanza para poseedores del token (modelo de votación, quórum, descentralización progresiva) está documentada en [`/for-token-holders`](/es/for-token-holders/start-here).

---
