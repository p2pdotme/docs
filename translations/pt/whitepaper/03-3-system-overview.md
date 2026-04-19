---
id: 03-3-system-overview
sidebar_position: 3
title: "3. Visão Geral do Sistema"
slug: system-overview
---

## 3.1 Atores

O protocolo envolve vários participantes-chave trabalhando juntos para habilitar transações peer-to-peer trustless.

**Compradores e Vendedores** são usuários cotidianos que iniciam pedidos de on-ramp ou off-ramp. Eles interagem com o protocolo através de aplicativos cliente usando carteiras integradas e transacionando sem entregar a custódia de seus fundos.

**Comerciantes**, também conhecidos como pares de liquidez, servem como as contrapartes que medeiam liquidez entre stablecoins e moedas fiduciárias. Estes são participantes cuidadosamente verificados que mantêm liquidez suficiente e estabeleceram reputações fortes através do sistema Proof-of-Credibility.

**Contratos de Protocolo** são os contratos inteligentes on-chain que orquestram todo o ciclo de vida do pedido. Eles lidam com fila de pedidos, correspondência baseada em pontuações de credibilidade, verificação de estado e resultados finais de liquidação. Estes contratos atualmente operam em Base L2 (Solana planejado).

**Verificadores de Prova** atualmente validam provas ZK-KYC para verificação de identidade (IDs governamentais, contas sociais e passaportes via Reclaim Protocol e outros verificadores ZK). Verificação de transações bancárias está planejada (veja [Seção 4.2](/pt/whitepaper/cryptographic-primitives-proof-integration#42-evidence-module-for-bank-transaction-verification-roadmap)).

**Governança** abrange os mecanismos através dos quais parâmetros do protocolo, atualizações e decisões de tesouro são feitas. A implementação atual é operada por admin/multisig, com uma transição planejada para governança mais ampla de detentores de tokens conforme o protocolo amadurece.

## 3.2 Componentes

- **Contratos inteligentes Base L2** (Solana planejado) para ciclo de vida do pedido, correspondência, janelas de disputa, registro de parâmetros e roteamento de taxas.
- **Registro de reputação** implementando Proof-of-Credibility (entradas, pontuação, decaimento).
- **Adaptador de oráculo** para preços de referência e salvaguardas (mediana/TWAP, fallbacks, disjuntores).
- **SDKs de cliente** e aplicativos de referência (ex: Coins.me) que falam o protocolo.

## 3.3 Fluxo de Alto Nível

1. **Colocando Pedidos:** Um usuário clica "Comprar USDC" (ou "Vender USDC") e insere o valor. O aplicativo fornece uma carteira integrada para a transação.
2. **Correspondência de Pedidos:** Um comerciante é atribuído on-chain com base em USDC apostado. Um endereço de pagamento fiduciário é compartilhado sobre o contrato inteligente, criptografado com as chaves do usuário; para off-ramps, um endereço USDC em Base (Solana planejado) é apresentado.
3. **Transferência Fiduciária/Stablecoin:** O pagador realiza a transferência no trilho designado.
4. **Confirmação/Liquidação:** Em minutos, a liquidação é bem-sucedida uma vez que o comerciante confirma o recebimento. Os saldos da carteira são atualizados de acordo.
5. **Janela de Disputa:** Se uma parte contesta, ela submete evidência de que um pagamento ou ação ocorreu (ou não). Na implementação ao vivo, admins autorizados liquidam pedidos disputados on-chain de acordo com regras de falha do protocolo e janelas de disputa.

```mermaid
flowchart LR
    place[Colocar pedido] --> match[Correspondência de comerciante]
    match --> transfer[Transferência fiduciária ou stablecoin]
    transfer --> confirm[Confirmar e liquidar]
    confirm --> done[Concluído]
    confirm --> dispute[Disputa levantada]
    dispute --> adminSettle[Liquidação de admin on-chain]
    adminSettle --> resolved[Resolvido]
```

## 3.4 Fluxo de On-Ramp

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    FLUXO DE ON-RAMP (Fiduciário → USDC)                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   ┌──────────┐         ┌──────────────┐         ┌──────────────┐        │
│   │ USUÁRIO  │         │   PROTOCOLO  │         │ COMERCIANTE  │        │
│   └────┬─────┘         └──────┬───────┘         └──────┬───────┘        │
│        │                      │                        │                │
│        │  1. Abrir pedido BUY │                        │                │
│        │  (valor + trilho)    │                        │                │
│        │─────────────────────►│                        │                │
│        │                      │                        │                │
│        │                      │  2. Corresponder via   │                │
│        │                      │  PoC (pontuação)      │                │
│        │                      │───────────────────────►│                │
│        │                      │                        │                │
│        │  3. Receber endereço │                        │                │
│        │  de pagamento        │                        │                │
│        │  fiduciário          │                        │                │
│        │◄─────────────────────│                        │                │
│        │  (criptografado)     │                        │                │
│        │                      │                        │                │
│        │  4. Transferir       │                        │                │
│        │  fiduciário via      │                        │                │
│        │  banco/UPI/PIX       │                        │                │
│        │──────────────────────────────────────────────►│                │
│        │                      │                        │                │
│        │                      │  5. Comerciante       │                │
│        │                      │  confirma recebimento │                │
│        │                      │◄───────────────────────│                │
│        │                      │                        │                │
│        │  6. USDC liberado    │                        │                │
│        │  para carteira do    │                        │                │
│        │  usuário             │                        │                │
│        │◄─────────────────────│                        │                │
│        │                      │                        │                │
│   ┌────▼─────┐         ┌──────▼───────┐         ┌──────▼───────┐        │
│   │  USDC    │         │    TAXAS     │         │   TÍTULOS    │        │
│   │ RECEBIDO │         │  COLETADAS   │         │  DESBLOQUEADOS│        │
│   └──────────┘         └──────────────┘         └──────────────┘        │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## 3.5 Fluxo de Off-Ramp

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    FLUXO DE OFF-RAMP (USDC → Fiduciário)                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   ┌──────────┐         ┌──────────────┐         ┌──────────────┐        │
│   │ USUÁRIO  │         │   PROTOCOLO  │         │ COMERCIANTE  │        │
│   └────┬─────┘         └──────┬───────┘         └──────┬───────┘        │
│        │                      │                        │                │
│        │  1. Abrir pedido     │                        │                │
│        │  SELL + bloquear     │                        │                │
│        │  USDC                │                        │                │
│        │─────────────────────►│                        │                │
│        │                      │                        │                │
│        │                      │  2. Corresponder via   │                │
│        │                      │  PoC + comerciante     │                │
│        │                      │  publica título        │                │
│        │                      │───────────────────────►│                │
│        │                      │                        │                │
│        │  3. Compartilhar     │                        │                │
│        │  endereço fiduciário │                        │                │
│        │─────────────────────►│                        │                │
│        │  (criptografado)     │                        │                │
│        │                      │                        │                │
│        │                      │  4. Comerciante       │                │
│        │                      │  envia pagamento      │                │
│        │  Fiduciário recebido │  fiduciário           │                │
│        │◄──────────────────────────────────────────────│                │
│        │                      │                        │                │
│        │                      │  5. Comerciante       │                │
│        │                      │  submete confirmação  │                │
│        │                      │  de pagamento         │                │
│        │                      │◄───────────────────────│                │
│        │                      │                        │                │
│        │                      │  6. USDC liberado     │                │
│        │                      │  para comerciante     │                │
│        │                      │───────────────────────►│                │
│        │                      │                        │                │
│   ┌────▼─────┐         ┌──────▼───────┐         ┌──────▼───────┐        │
│   │ FIDUCIÁRIO│        │    TAXAS     │         │    USDC      │        │
│   │ RECEBIDO │         │  COLETADAS   │         │  RECEBIDO    │        │
│   └──────────┘         └──────────────┘         └──────────────┘        │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## 3.6 Considerações-Chave

- O **comerciante** serve a função de mediar liquidez para as transações.
- O **ônus de confirmar pagamento** repousa sobre o comerciante (para off-ramps) ou pode ser fornecido por qualquer uma das partes.
- **ZK-KYC realiza verificação de identidade trustless** para o usuário sem expor dados pessoais.
- **Evidência é submetida e revisada** em disputas. No sistema atual, resultados são executados via liquidação de admin on-chain; resolução mais ampla orientada por verificador e governança permanece no roadmap (veja [Seção 4.2](/pt/whitepaper/cryptographic-primitives-proof-integration#42-evidence-module-for-bank-transaction-verification-roadmap)).
- **Reclaim Protocol** habilita verificação de identidade preservadora de privacidade via contas sociais e IDs governamentais.

---

