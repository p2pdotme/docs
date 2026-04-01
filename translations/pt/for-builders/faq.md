---
id: faq
sidebar_position: 9
title: "FAQ"
slug: faq
---

### Em qual chain os contratos estão implantados?

Os contratos inteligentes do protocolo estão ativos na **Base (EVM)**. A implantação na **Solana** está planejada como parte da expansão multichain. O token **$P2P** é um token SPL na Solana. Veja **[Estratégia Multichain](/pt/for-token-holders/multichain-strategy)** para mais detalhes.

---

### Onde estão os ABIs dos contratos?

As referências dos contratos estão listadas na seção **[Referências dos Contratos](/pt/for-builders/contract-references)**. O código-fonte ainda está passando por auditorias e será open-source até junho de 2026.

---

### Posso adicionar um novo país ou moeda?

O framework de expansão de moedas usa configurações YAML open-source. Qualquer pessoa com conhecimento sobre trilhos de pagamento locais pode propor uma nova moeda via PR.

---

### Como funcionam as disputas no nível de contrato?

Usuários chamam `raiseDispute` no `OrderProcessorFacet`. Administradores resolvem via `adminSettleDispute`, definindo um tipo de falha. A resolução aciona a contabilização e hooks de RP. Veja **[Disputas](/pt/for-builders/disputes)** para o fluxo completo.

---

### O que é a arquitetura Diamond?

O protocolo utiliza o padrão **EIP-2535 Diamond**. A funcionalidade é dividida em *facets* que compartilham armazenamento, permitindo upgrades modulares sem precisar reimplantar o contrato completo.

---

### Como o RP se integra ao fluxo de ordens?

Os hooks de RP são whitelistados no `ReputationManager`. Volume das ordens são atualizados, penalidades por disputa e recompensas condicionadas à verificação passam por esses hooks. Veja **[Reputação](/pt/for-builders/reputation)**.

---

### Onde ficam os detalhes de governança para holders do token?

A governança para detentores do token (modelo de votação, quórum, descentralização progressiva) está documentada em **[Para Detentores do Token](/pt/for-token-holders/start-here)**.


---

