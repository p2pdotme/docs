---
id: 09-9-pricing-oracle-mechanics
sidebar_position: 9
title: "9. Precios y Mecánica de Oráculos"
slug: pricing-oracle-mechanics
---

El Protocolo determina los precios indicativos utilizando adaptadores de oráculo integrados que agregan tasas de exchanges y venues P2P seleccionados en una mediana/TWAP con fallbacks. Estos oráculos analizan datos de precios de una variedad tanto de exchanges centralizados como P2P para determinar el precio de trading del par stablecoin-fiat en cuestión.

**Parámetros:** conjunto de fuentes, límites de obsolescencia, umbrales de desviación y circuit breakers. Las cotizaciones llevan un vencimiento para limitar la exposición; si el oráculo falla o excede los límites de desviación, las órdenes se pausan o se re-cotizan.

---

