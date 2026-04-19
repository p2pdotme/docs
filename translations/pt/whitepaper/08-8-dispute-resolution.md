---
id: 08-8-dispute-resolution
sidebar_position: 8
title: "8. Resolução de Disputas"
slug: dispute-resolution
---

O Protocolo é projetado para minimizar divulgação desnecessária de dados durante disputas. Se um usuário registra uma disputa, a contraparte pode submeter evidência da transação sem expor dados pessoais adicionais. Na implementação atual do contrato, disputas são resolvidas on-chain por admins autorizados com base em evidência submetida e regras de falha do protocolo. Verificação de transação bancária preservadora de privacidade e liquidação automatizada mais profunda fazem parte do roadmap (veja [Seção 4.2](/pt/whitepaper/cryptographic-primitives-proof-integration#42-evidence-module-for-bank-transaction-verification-roadmap)).

## 8.1 Janelas e Ônus

Ônus padrão: a parte reivindicando conclusão fornece evidência de conclusão. O desafiante pode apresentar contra-evidência (ex: extrato bancário mostrando não-recebimento). Caminhos de falha-em-provar acionam slashing ou reembolsos de acordo com as regras do Protocolo.

## 8.2 Penalidade por Reivindicações Falsas

No evento de um comprador tentar prosseguir sem realmente fazer a transferência fiduciária primeiro, ele corre o risco de perder Pontos de Reputação — criando desincentivos econômicos fortes para comportamento fraudulento.

---

