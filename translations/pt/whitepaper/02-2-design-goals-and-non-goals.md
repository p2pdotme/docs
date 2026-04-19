---
id: 02-2-design-goals-and-non-goals
sidebar_position: 2
title: "2. Objetivos de Design e Não-Objetivos"
slug: design-goals-and-non-goals
---

## 2.1 Objetivos

- On/off-ramp descentralizado entre moeda fiduciária e stablecoins sem escrow fiduciário.
- Privacidade por design usando provas ZK para verificação de identidade enquanto mantém dados brutos fora da chain. Verificação de transações bancárias está planejada (veja [Seção 4.2](/pt/whitepaper/cryptographic-primitives-proof-integration#42-evidence-module-for-bank-transaction-verification-roadmap))
- Neutralidade credível: regras no nível do protocolo são abertas, transparentes e atualizáveis via governança.
- Liquidação rápida: conclusão típica em minutos, visando menos de ~90s para trilhos comuns conforme rede, liquidez e automação melhoram.
- Segurança e integridade: modelo de ameaça explícito, fluxos de disputa e controles de taxa/limite para minimizar fraude.

## 2.2 Não-Objetivos

- O Protocolo não mantém moeda fiduciária ou cripto do cliente em custódia.
- O Protocolo não garante preço ou liquidez; ele coordena pares e entradas de mercado.
- O Protocolo não armazena dados pessoais em nome dos usuários; ele registra compromissos e vereditos necessários on-chain enquanto evidência bruta permanece fora da chain.

---

