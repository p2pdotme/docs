---
id: 04-4-cryptographic-primitives-proof-integration
sidebar_position: 4
title: "4. Primitivas Criptográficas e Integración de Pruebas"
slug: cryptographic-primitives-proof-integration
---

## 4.1 Verificación de Identidad (En vivo)

El Protocolo P2P utiliza pruebas ZK para la verificación de identidad que preserva la privacidad. Un nuevo miembro puede realizar un KYC sin confianza compartiendo una prueba ZK de su identidad — manteniendo sus datos personales privados mientras construye reputación on-chain y desbloquea límites de transacción más altos sin revelar PII crudo on-chain.

El protocolo actualmente soporta la verificación de identidad a través de múltiples métodos basados en ZK:

- **Verificación de ID gubernamental** mediante verificadores de pruebas ZK on-chain para documentos de identidad soportados.
- **Verificación de cuenta social** a través de **Reclaim Protocol** [1], que utiliza pruebas zkTLS para verificar la propiedad y el estatus de cuentas sociales (por ejemplo, redes profesionales, plataformas de desarrolladores, redes sociales) sin exponer credenciales de cuenta ni datos personales.
- **Verificación de pasaporte** mediante sistemas de pruebas ZK que pueden verificar edad, nacionalidad y estatus de sanciones sin revelar el contenido del documento.

Cada verificación exitosa fortalece la reputación on-chain del usuario y expande su capacidad de transacción dentro del protocolo.

## 4.2 Módulo de Evidencia para Verificación de Transacciones Bancarias (Hoja de Ruta)

Un módulo de evidencia planificado extenderá las capacidades ZK del protocolo a la verificación de transacciones bancarias para la resolución de disputas on-chain. Este módulo aprovechará pruebas respaldadas por TLS de modo que un usuario o comerciante pueda producir un testigo criptográfico que demuestre que una afirmación específica sobre una transferencia bancaria o recepción de pago es verdadera — sin exponer credenciales ni detalles de la transacción.

El módulo planificado especificará dónde se verifican las pruebas:

- **Verificador on-chain** para afirmaciones compactas y hashes de atestación.
- **Verificador/relayer off-chain** (referencia de código abierto) para afirmaciones complejas o específicas de cada vía, publicando una atestación sucinta de vuelta en la cadena.

> Las pruebas crudas permanecerán con los usuarios; la cadena solo almacena compromisos y veredictos mínimos.

## 4.3 Propiedades de Privacidad

La implementación actual de ZK-KYC proporciona:

- **Divulgación no interactiva:** compartir solo la prueba, no los datos subyacentes.
- **Revelación selectiva:** solo los campos requeridos por el circuito de verificación se exponen al circuito.
- **Vinculación acotada:** los IDs de protocolo y compromisos minimizan la vinculación entre sesiones cuando es factible.

El módulo de evidencia planificado extenderá estas propiedades de privacidad a la verificación de transacciones bancarias.

---

