---
id: 01-1-the-vision
sidebar_position: 1
title: "1. La Visión"
slug: the-vision
---

Hoy en día, mover dinero entre fiat y crypto significa confiar en intermediarios con tus fondos y tu identidad. El Protocolo P2P existe para hacer que el movimiento entre fiat y crypto sea tan privado, neutral y demostrable como enviar un mensaje.
Reemplaza las finanzas del “confía en mí” con una coordinación verificable sin custodia.

## 1.1 De las "rampas" a una economía basada en privacidad y credibilidad

El Protocolo P2P comienza con el punto de estrangulamiento más práctico: el movimiento entre fiat y stablecoins, sin escrow custodial. Las mismas vías, pruebas e incentivos que hacen que una rampa honesta funcione a escala también habilitan el siguiente nivel: liquidez basada en credibilidad, cerrando la brecha entre monedas fiat y cripto para todo DeFi.

En este modelo:

- **La reputación** se gana on-chain a través de operaciones completadas, historiales limpios de disputas y niveles de ZK-KYC, no mediante verificación centralizada de cuentas.
- **La privacidad** se preserva por defecto mediante pruebas de zero-knowledge (ZK) para la verificación de identidad, revelando únicamente que un usuario está verificado y autorizado, sin exponer identidades reales.
- **La utilidad** vence a la teoría: los micropagos, offramps cotidianos, salarios, remesas y pagos a comerciantes tienen prioridad, diseñados para sentirse tan simples como enviar un mensaje.

## 1.2 Cómo se ve el "éxito" para 2026+

- Un usuario en cualquier país soportado puede comprar, vender o pagar con stablecoins en aproximadamente minutos (apuntando a menos de 90 segundos en vías rápidas), sin entregar custodia a nadie.
- Los comerciantes se emparejan on-chain basándose en USDC stakeado, con el spread definido a nivel de protocolo en lugar de competencia entre comerciantes. El sistema Proof-of-Credibility se encarga de la prevención de fraude y la asignación de límites de transacción por niveles.
- El ZK-KYC desbloquea límites más altos y procesos más rápidos mientras mantiene los datos personales fuera de la cadena.
- Las aplicaciones y wallets de terceros integran el protocolo mediante SDKs abiertos; [Coins.me](https://coins.me) es solo un front-end de referencia para usuarios, no una puerta de entrada privilegiada.
- A medida que la credibilidad se acumula, se pueden crear nuevos productos (pagos a plazos, comercio sin escrow, salarios transfronterizos, seguros de disputas) sin necesidad de volver a hacer KYC a todo el mundo.

## 1.3 Principios fundamentales

1. **No custodial por diseño.** Sin escrow de fiat. La crypto solo se mantiene de forma atómica para el settlement cuando sea necesario.
2. **Preservación de la privacidad.** Demostrar solo lo necesario; no revelar nada más.
3. **Neutralidad creíble.** Reglas abiertas, actualizables mediante gobernanza; sin rutas especiales para ningún cliente.
4. **Útil y sencillo.** La experiencia debe sentirse como un solo toque para “Comprar USDC” o “Vender USDC”, con el protocolo manejando la complejidad invisible.
5. **Agnóstico al protocolo.** El diseño no depende de ninguna L2, oráculo o proveedor de pruebas específico. Las implementaciones pueden cambiar sin reescribir el whitepaper.

## 1.4 Qué es (y no es) el Protocolo P2P

**Es:** una capa abierta y descentralizada de coordinación que empareja de forma trustless a un comprador con un comerciante on-chain basado en USDC stakeado; liquida las operaciones con coordinación on-chain; y canaliza tarifas y parámetros a través de la gobernanza.

**No es:** un custodio, un banco ni un corredor de datos. El Protocolo P2P no custodia fiat, no almacena información personal de los usuarios y no promete rendimientos fijos.

## 1.5 Por qué esto importa ahora

En la última década, crypto resolvió las finanzas programáticas pero dejó al mundo real afuera. Hoy tres curvas finalmente se cruzan:

- Las vías locales instantáneas (UPI/PIX/QRIS y similares) son mainstream.
- ZK práctico puede atestiguar hechos del mundo real sin exponer los datos — ya usado para verificación de identidad, con pruebas de transacciones bancarias en la hoja de ruta.
- Las L2 y stablecoins han hecho que los pagos pequeños sean lo suficientemente baratos y rápidos como para importar.

El Protocolo P2P se sitúa exactamente en esa intersección. Convierte el “confía en mí” en “demuéstralo”, y lo hace sin entregar tu dinero ni tu identidad a nadie.

## 1.6 Resultados norte (cómo se ve el "éxito" para nosotros)

Para 2026+:

- Liquidación en menos de 90 segundos en vías rápidas, costo medio inferior a $0.20 por cada $100.
- Más del 99% de las disputas resueltas por pruebas dentro de la ventana, no por moderadores.
- Credibilidad portable: tu reputación y límites te acompañan a través de clientes y países, sin doxxearte.
- Acceso neutral: múltiples wallets y aplicaciones, incluyendo Coins.me como referencia, todas utilizando los mismos SDKs permissionless sobre el Protocolo.
- Utilidad cotidiana: salarios, remesas, pagos de marketplaces y checkout — sin custodia, sin formularios KYC en papel, sin capturas de pantalla.

## 1.7 DeFi basado en credibilidad (más allá de la sobrecolateralización)

La sobrecolateralización hizo seguro el DeFi temprano, pero hace que el mundo cotidiano se sienta restringido y caro. El Protocolo P2P propone un segundo pilar: **la credibilidad**.

- Límites ganados y mejores precios provienen de un historial limpio, operaciones completadas y niveles de ZK-KYC, no de bloquear un 200% de colateral o manipular el sistema.
- Privacidad por defecto: revelas pruebas de acciones, no identidades.
- Composabilidad: el mismo grafo de credibilidad soporta pagos a plazos, comercio sin escrow e incluso primitivos ligeros de crédito en el futuro.

## 1.8 Un protocolo para personas, no solo para power users

Diseñamos para alguien que tiene un teléfono y un sueldo, no un terminal Bloomberg.

- **Amigable con micropagos:** El Protocolo debe sentirse seguro tanto con $15 como con $1,500.
- **Dignidad con privacidad:** Las verificaciones ZK-KYC demuestran solo lo necesario y nada más, sin revelar identificación personal, protegiendo a trabajadores freelance, activistas y cualquiera que valore su privacidad.

## 1.9 Agnóstico al protocolo por diseño

Los proveedores y cadenas cambiarán; los principios no. El whitepaper se compromete a:

- No depender de una sola L2, oráculo o proveedor de pruebas en la lógica.
- Interfaces claras (registro de verificadores, adaptador de oráculos, registro de vías) para que las partes puedan intercambiarse sin reescribir el documento ni el contrato social.
- Código abierto y descentralización de cada parte del Protocolo como bienes públicos.

## 1.10 Credibilidad pero con Privacidad

Piensa en el Proof-of-Credibility del Protocolo P2P como un bien público en sí mismo:

- Se gana, decae con el tiempo y es difícil de manipular.
- Es portable entre clientes y países mediante compromisos on-chain, no PDFs en la bandeja de entrada de alguien.
- Es centrado en la privacidad: solo los compromisos y veredictos son públicos; la evidencia cruda se queda contigo o con tu verificador elegido.

## 1.11 Cumplimiento programable (políticas sin dosieres)

La mayoría de las personas quiere dos cosas al mismo tiempo: privacidad y legalidad. El Protocolo P2P hace esto práctico:

- **Política como parámetros:** vías, tiempos de espera y requisitos de pruebas son gobernados on-chain por región y clase de riesgo.
- **Niveles de ZK-KYC** satisfacen las verificaciones de “usuario autorizado” mientras mantienen la PII fuera de la cadena.
- **Necesidades estilo Travel Rule** se pueden cumplir mediante circuitos de divulgación selectiva (planificados) cuando la contraparte es un negocio registrado, sin convertir el protocolo en un corredor de datos.

## 1.12 Lo que se desbloquea si lo hacemos bien

- **Ingresos sin fronteras:** creadores, contratistas y trabajadores remotos reciben pagos donde viven, sin custodia de exchanges.
- **Pagos a comerciantes:** los marketplaces liquidan a los vendedores en vías locales de forma instantánea, con spreads justos y sin manejo de archivos CSV.
- **Finanzas comunitarias:** ahorros rotativos, microcréditos y marketplaces sin escrow pueden construirse sobre una capa compartida de credibilidad y liquidez entre los dominios fiat y crypto.
- **Resiliencia cívica:** las personas pueden mover valor de forma privada y legal cuando el mundo se vuelve inestable.

## 1.13 Filosofía de gobernanza y administración

- Neutralidad creíble por encima de la conveniencia. Los cambios pasan por gobernanza transparente con salvaguardas (timelocks, pausas limitadas, auditorías).
- Minimizar la gobernanza cuando sea posible: parametrizar, no micromanejar.
- Válvulas de seguridad públicas: circuit breakers de oráculos, sunset de verificadores y pausas de emergencia con vencimiento automático.
- Mentalidad de bounties abiertos: pagar para encontrar fallos temprano; publicar correcciones de forma abierta.

## 1.14 En qué no vamos a ceder

- No custodia de fiat. Nunca.
- Sin honeypots de PII (Información Personal Identificable) on-chain (nunca).
- Sin clientes privilegiados (nunca). Todos usan los mismos canales.
- Sin cajas negras del “confía en nosotros”. Si no se puede demostrar o auditar, no forma parte del núcleo.

## 1.15 Hitos que importan

- **Ubicuidad:** presencia creíble de comerciantes en cada par de región/vía importante.
- **Alcance geográfico:** expansión a más de 20 mercados en Asia, África, Latinoamérica y MENA.
- **Presencia multichain:** Solana es la cadena hub planeada. El token $P2P se lanza primero en Solana para generar efectos de red; el despliegue del protocolo en Solana viene después. Se soportarán cadenas de alto rendimiento adicionales como spokes.
- **Composabilidad:** aplicaciones de terceros lanzando características útiles sobre el SDK sin pedir permiso.
- **Legitimidad self-serve:** reguladores y equipos de riesgo pueden leer la especificación, verificar parámetros on-chain y entender cómo se logra la seguridad, sin puertas traseras.
- **Características del roadmap:** para propuestas de características actuales (incluyendo remesas y expansión de monedas), ver [`/for-builders`](/es/for-builders/start-here).

## 1.16 Un breve manifiesto

```bash
# La privacidad es tanto un problema de interfaz de usuario como de matemáticas.

# La reputación debe ganarse, ser portable y revocable — nunca vendida.

# El mejor KYC es el que demuestra solo lo necesario y nada más.

# Si solo los power users pueden usarlo, no es DeFi — es un club exclusivo.
```

---

