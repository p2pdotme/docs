---
id: metadao-sale
sidebar_position: 7
title: "Venta de MetaDAO"
slug: metadao-sale
---

> *Esta página se proporciona con fines informativos para explicar la mecánica del protocolo. No constituye una oferta de valores ni un consejo de inversión. $P2P no está disponible para personas de EE.UU. Nada de lo aquí expuesto debe interpretarse como una promesa de rendimiento financiero. Por favor, lea las [Divulgaciones](/es/for-token-holders/disclosures) completas antes de continuar.*

El token $P2P se lanza en Solana mediante un mecanismo de venta estilo MetaDAO diseñado para una distribución justa y centrada en la comunidad.

1. Los usuarios comprometen USDC en Solana durante una ventana de compromiso de 4 días
2. Los fundadores establecen el total de USDC aceptado (**F**) usando tiers ponderados por compromiso (ver abajo)
3. Si hay sobre-suscripción, las asignaciones y reembolsos se distribuyen pro-rata
4. Se distribuyen 10M tokens proporcionalmente entre todos los participantes en el lanzamiento
5. Después de la venta, el tesoro proporciona el 20% de los USDC recaudados y 2,9M tokens a los pools de liquidez
6. La autoridad de acuñación se transfiere al tesoro gobernado por el mercado

**Nota — sin bid wall.** La venta no utiliza un bid-wall ni una escalera de oferta mínima. La liquidación es pro-rata contra el tope aceptado; cualquier USDC que no se asigne se reembolsa.

## Tamaño de la recaudación, pasos de FDV y reembolsos

El pedido público es **$6M** USDC. Si los compromisos totales exceden **$6M**, solo se llena el monto aceptado; **los compromisos excesivos se reembolsan** según los pasos pro-rata y de preferencia por XP a continuación.

La cantidad que se puede aceptar escala con los **compromisos totales** (**C**):

| Si los compromisos totales **C**… | USDC aceptados | FDV implícito |
|-----------------------------------|----------------|---------------|
| **C** ≤ **$80M**                  | Hasta **$6M**  | **$15,48M**   |
| **$80M** < **C** ≤ **$150M**      | Hasta **$8M**  | **$20,64M**   |
| **C** > **$150M**                 | Hasta **$10M** | **$25,8M**    |

Solo cuando **C** es **mayor a $80M** la venta acepta hasta **$8M** a un FDV de **$20,64M**. Solo cuando **C** es **mayor a $150M** acepta hasta **$10M** a un FDV de **$25,8M**. En todos los casos, el USDC no aceptado se devuelve a los participantes.

Los usuarios existentes del protocolo reciben una asignación preferencial al mismo precio que todos los participantes de la venta pública, basada en su XP en [p2p.foundation](https://p2p.foundation/). Antes de participar, por favor revise las [Divulgaciones](/es/for-token-holders/disclosures).

## Fórmula de asignación preferencial

Lo siguiente define cómo se convierten los compromisos en asignaciones finales cuando la venta está sobre-suscrita y los tiers de XP aplican multiplicadores. Los participantes sin XP siguen recibiendo una porción pro-rata; los tenedores de XP reciben una porción aumentada del monto aceptado, limitada a lo que comprometieron.

### Variables

| Símbolo | Definición |
|---------|------------|
| **C** | USDC total comprometido por todos los participantes |
| **F** | Tope de financiamiento aceptado por los fundadores (**F** ≤ **C**) |
| **c_i** | USDC comprometido por el participante *i* |
| **T1, T2, T3** | Conjuntos de participantes en los tiers de XP 1 (más alto), 2 y 3 |
| **N** | Conjunto de participantes sin XP |
| **m_1 = 3** | Multiplicador del Tier 1 |
| **m_2 = 2** | Multiplicador del Tier 2 |
| **m_3 = 1.5** | Multiplicador del Tier 3 |

### Pasos

**Paso 1 — Tasa pro-rata base.** Calcular la tasa de aceptación como si no existieran preferencias.

```
r = F / C
```

**Paso 2 — Asignación base por participante.** Cada participante recibe una porción base proporcional a su compromiso.

```
base_i = c_i * r
```

**Paso 3 — Aplicar multiplicador XP.** Para cada tenedor de XP en el tier *t*, multiplicar su asignación base por el multiplicador de ese tier. La asignación no puede exceder lo que comprometió.

```
pref_i = min(base_i * m_t, c_i)
```

Los participantes sin XP permanecen sin cambios en este paso.

**Paso 4 — Asignación preferencial total.** Sumar todas las asignaciones preferenciales por XP.

```
A_pref = sum(pref_i)  for all i in T1 + T2 + T3
```

**Paso 5 — Pool restante para tenedores sin XP.** Restar las asignaciones XP del tope de financiamiento.

```
A_remaining = F - A_pref
```

**Paso 6 — Reasignación sin XP.** Los tenedores sin XP se reparten el pool restante pro-rata según su compromiso.

```
C_N = sum(c_j)  for all j in N
final_j = c_j * (A_remaining / C_N)
```

**Paso 7 — Reembolsos.** Cada participante recibe la diferencia entre su compromiso y su asignación final.

```
refund_i = c_i - final_allocation_i
```


### Ejemplo práctico

**Configuración.** Los tenedores de XP son una fracción pequeña del pool. Diez participantes sin XP comprometen cada uno $10.000. Tres tenedores de XP comprometen montos menores.

| Participante | Compromiso | Tier XP | Multiplicador |
|--------------|------------|---------|---------------|
| Alice        | $500       | Tier 1  | 3×            |
| Bob          | $300       | Tier 2  | 2×            |
| Carol        | $200       | Tier 3  | 1,5×          |
| D1 a D10     | $10.000 c/u| Ninguno | 1×            |

- **C** = $101.000 (total comprometido)
- **F** = $10.000 (los fundadores aceptan $10.000; el resto se reembolsa)

**Paso 1 — Tasa base.**

```
r = 10,000 / 101,000 = 0.099010 (9.9%)
```

**Paso 2 — Asignación base.** Nota: los valores intermedios usan precisión completa; los mostrados están redondeados.

| Participante | Compromiso | base_i |
|--------------|------------|--------|
| Alice        | $500       | $49,50 |
| Bob          | $300       | $29,70 |
| Carol        | $200       | $19,80 |
| Cada D       | $10.000    | $990,10|

Sin preferencias, Alice recibiría $49,50 asignados y $450,50 reembolsados.

**Paso 3 — Aplicar multiplicadores.** Los multiplicadores se aplican a los valores base de precisión completa y luego se redondean.

| Participante | base_i | Multiplicador | pref_i |
|--------------|--------|---------------|--------|
| Alice        | $49,50 | 3×            | min($148,51, $500) = **$148,51** |
| Bob          | $29,70 | 2×            | min($59,41, $300) = **$59,41** |
| Carol        | $19,80 | 1,5×          | min($29,70, $200) = **$29,70** |

**Paso 4 — Preferencial total.**

```
A_pref = 148.51 + 59.41 + 29.70 = $237.62
```

**Paso 5 — Pool restante.**

```
A_remaining = 10,000 - 237.62 = $9,762.38
```

**Paso 6 — Reasignación sin XP.**

```
C_N = 10 * 10,000 = $100,000
Each D: 10,000 * (9,762.38 / 100,000) = $976.24
```

**Resultado.** Los totales pueden diferir ligeramente por redondeo.

| Participante      | Asignación final | Reembolso     |
|-------------------|------------------|---------------|
| Alice (T1)        | $148,51          | $351,49       |
| Bob (T2)          | $59,41           | $240,59       |
| Carol (T3)        | $29,70           | $170,30       |
| Cada D (×10)      | $976,24          | $9.023,76     |
| **Total**         | **~$10.000**     | **~$91.000**  |

**Versus sin preferencias.**

| Participante | Sin preferencia | Con preferencia | Diferencia |
|--------------|-----------------|-----------------|------------|
| Alice        | $49,50          | $148,51         | +$99,01 (3×) |
| Bob          | $29,70          | $59,41          | +$29,71 (2×) |
| Carol        | $19,80          | $29,70          | +$9,90 (1,5×)|
| Cada D       | $990,10         | $976,24         | −$13,86    |

Los tenedores de XP reciben aproximadamente **$138,62** más en total de lo que recibirían sin preferencias. Esa cantidad se reparte entre diez participantes sin XP, por lo que cada D recibe aproximadamente **$13,86** menos (alrededor del **1,4%** de su asignación base). El efecto sobre los tenedores sin XP se mantiene pequeño cuando los compromisos de XP representan una porción reducida de **C**.

---

