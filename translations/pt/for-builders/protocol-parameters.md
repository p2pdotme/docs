---
id: protocol-parameters
sidebar_position: 2
title: "Parâmetros do Protocolo"
slug: protocol-parameters
---

O comportamento do protocolo é fortemente padronizado, em vez de codificado de forma fixa, porque os mercados são diferentes. Um spread que funciona para INR/USDC na infraestrutura da UPI seria inadequado para BRL/USDC no PIX. A padronização permite que o protocolo se adapte por moeda sem precisar reimplantar contratos.

**Precificação e spread.** Spread base e ajuste de preço por moeda, adaptados às condições locais de liquidez.

**Limites de risco.** Stake mínimo, limites de volume, limites de RP por USDT e limites máximos de transação. Esses fatores controlam quanto risco o protocolo assume por comerciante e por usuário.

**Controles de taxa.** Percentual de taxa do comerciante e taxas fixas para pedidos pequenos, ajustadas para tornar microtransações viáveis sem subsidiá-las.

**Controles operacionais.** Ciclos de ativação de moedas e canais de pagamento.

---