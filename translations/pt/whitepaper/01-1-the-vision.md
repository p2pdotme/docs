---
id: 01-1-the-vision
sidebar_position: 1
title: "1. A Visão"
slug: the-vision
---

## 1.1 De "ramps" para uma economia baseada em privacidade e credibilidade

O Protocolo P2P começa com o ponto de estrangulamento mais prático — movimentação entre moeda fiduciária e stablecoins — sem custódia de escrow. Os mesmos trilhos, provas e incentivos que tornam um ramp honesto funcionar em escala também habilitam a próxima camada: liquidez baseada em credibilidade, fechando a lacuna entre moedas fiduciárias e criptográficas, para todo o DeFi.

Neste modelo:

- **Reputação** é conquistada on-chain através de negociações concluídas, históricos de disputas limpos e níveis de ZK-KYC — não através de verificação centralizada de contas.
- **Privacidade** é preservada por padrão via provas de conhecimento zero para verificação de identidade, revelando apenas que um usuário é verificado e permitido — sem expor identidades brutas.
- **Utilidade** vence a teoria: micropagamentos, off-ramps cotidianos, salários, remessas e pagamentos a comerciantes vêm em primeiro lugar — projetados para parecer tão simples quanto enviar uma mensagem.

## 1.2 Como "bom" se parece em 2026+

- Um usuário em qualquer país suportado pode comprar ou vender stablecoins em ~minutos — visando conclusão em menos de 90 segundos em trilhos rápidos — sem dar custódia a ninguém.
- Comerciantes são combinados on-chain com base em USDC apostado, com spread definido no nível do protocolo em vez de através de competição entre comerciantes. O sistema Proof-of-Credibility lida com prevenção de fraude e escalonamento de limites de transação.
- ZK-KYC desbloqueia limites mais altos e caminhos mais rápidos enquanto mantém dados pessoais fora da chain.
- Aplicativos e carteiras de terceiros integram o protocolo através de SDKs abertos; [Coins.me](https://coins.me) é apenas um front-end de consumidor de referência, não um gateway privilegiado.
- Conforme a credibilidade se acumula, novos produtos (pagamentos em parcelas, comércio sem escrow, salários transfronteiriços, seguro de disputas) podem ser construídos sem re-KYCar o mundo.

## 1.3 Primeiros princípios

1. **Não-custodial por construção.** Sem escrow fiduciário. Cripto apenas mantida atomicamente para liquidação quando necessário.
2. **Preservação de privacidade.** Prove o que é necessário; não revele nada mais.
3. **Neutralidade credível.** Regras abertas, atualizáveis por governança; sem rotas especiais para nenhum cliente.
4. **Útil e simples.** A experiência deve parecer um toque para "Comprar USDC" ou "Sacar", com o protocolo lidando com a complexidade invisível.
5. **Agnóstico de protocolo.** O design não depende de nenhuma L2, oráculo ou fornecedor de prova único. As implementações podem mudar sem reescrever o whitepaper.

## 1.4 O que é o Protocolo P2P (e o que não é)

**É:** uma camada de coordenação aberta e descentralizada que combina de forma trustless um comprador com um comerciante on-chain com base em USDC apostado; liquida negociações com coordenação on-chain; e roteia taxas e parâmetros através de governança.

**Não é:** um custodiante, um banco ou um corretor de dados. O Protocolo P2P não custódia moeda fiduciária, não armazena informações pessoais dos usuários e não promete rendimentos fixos.

## 1.5 Por que isso importa agora

Na última década, cripto resolveu finanças programáticas mas deixou o mundo real na porta. Hoje três curvas finalmente se cruzam:

- Trilhos locais instantâneos (UPI/PIX/QRIS e pares) são mainstream.
- ZK prático pode atestar fatos do mundo real sem expor os dados — já usado para verificação de identidade, com provas de transações bancárias no roadmap.
- L2s e stablecoins tornaram pequenos pagamentos baratos e rápidos o suficiente para se importar.

O Protocolo P2P fica exatamente nessa interseção. Ele transforma *confie em mim* em *prove*, e faz isso sem entregar seu dinheiro ou identidade a ninguém.

## 1.6 Resultados da estrela do norte (como "bom" se parece para nós)

Até 2026+:

- Liquidação em menos de 90 segundos em trilhos rápidos, custo mediano abaixo de $0,20 por $100.
- >99% das disputas resolvidas por provas dentro da janela, não por moderadores.
- Credibilidade portátil: sua reputação e limites viajam com você entre clientes e países — sem te doxxar.
- Acesso neutro: múltiplas carteiras e aplicativos, incluindo Coins.me como referência, todos usando os mesmos SDKs sem permissão no topo do Protocolo.
- Utilidade cotidiana: salários, remessas, pagamentos de marketplace e checkout — sem custódia, sem formulários de KYC em papel, sem screenshots.

## 1.7 DeFi baseado em credibilidade (além da sobre-colateralização)

A sobre-colateralização tornou o DeFi inicial seguro, mas torna o mundo cotidiano parecer fechado e caro. O Protocolo P2P propõe um segundo pilar: **credibilidade**.

- Limites conquistados e melhores preços vêm de histórico limpo, negociações concluídas e níveis de ZK-KYC, não de bloquear 200% de colateral ou jogar o sistema.
- Privacidade por padrão: você revela provas de ação, não identidades.
- Composabilidade: o mesmo gráfico de credibilidade suporta pagamentos em parcelas, comércio sem escrow e até primitivos de crédito leve no futuro.

## 1.8 Um protocolo para pessoas, não apenas usuários avançados

Projetamos para alguém que tem um telefone e um salário, não um terminal Bloomberg.

- **Amigável a micro:** O Protocolo deve parecer seguro em $15 tanto quanto em $1.500.
- **Dignidade com Privacidade:** Verificações ZK-KYC provam o que é necessário e nada mais, sem revelação de Identificação Pessoal — protegendo trabalhadores autônomos, ativistas e qualquer um que valorize privacidade.

## 1.9 Agnóstico de protocolo por design

Fornecedores e chains mudarão; os princípios não. O whitepaper se compromete com:

- Nenhuma L2, oráculo ou provedor de prova único incorporado na lógica.
- Interfaces claras (registro de verificador, adaptador de oráculo, registro de trilhos) para que partes possam ser trocadas sem reescrever o papel ou o contrato social.
- Open-sourcing e descentralização de cada parte do Protocolo como bens públicos.

## 1.10 Credibilidade mas com Privacidade

Pense no Proof-of-Credibility do Protocolo P2P como um bem público em si:

- É conquistada, decai ao longo do tempo e é difícil de jogar.
- É portátil entre clientes e países via compromissos on-chain, não PDFs na caixa de entrada de alguém.
- É privacidade-primeiro: apenas compromissos e vereditos são públicos; evidência bruta fica com você ou seu verificador escolhido.

## 1.11 Conformidade programável (política sem dossiês)

A maioria das pessoas quer duas coisas ao mesmo tempo: privacidade e legalidade. O Protocolo P2P torna isso prático:

- **Política-como-parâmetros:** trilhos, timeouts e requisitos de prova são governados on-chain por região e classe de risco.
- **Níveis de ZK-KYC** satisfazem verificações de "usuário permitido" enquanto mantêm PII fora da chain.
- **Necessidades de estilo Travel-Rule** podem ser atendidas via circuitos de divulgação seletiva (planejado) quando uma contraparte é um negócio registrado — sem transformar o protocolo em um corretor de dados.

## 1.12 O que é desbloqueado se acertarmos

- **Renda sem fronteiras:** criadores, contratados e trabalhadores remotos são pagos onde vivem, sem custódia de exchange.
- **Pagamentos a comerciantes:** marketplaces liquidam para vendedores em trilhos locais instantaneamente, em spreads justos, sem malabarismo de CSV.
- **Finanças comunitárias:** poupança rotativa, micro-empréstimos e marketplaces sem escrow podem ser construídos em uma camada de credibilidade e liquidez compartilhada entre os domínios de moeda fiduciária e cripto.
- **Resiliência cívica:** as pessoas podem mover valor privadamente e legalmente quando o mundo fica instável.

## 1.13 Filosofia de administração e governança

- Neutralidade credível sobre conveniência. Mudanças passam por governança transparente com guardrails (timelocks, pausas estreitas, auditorias).
- Minimize governança onde possível: parametrize, não microgerencie.
- Válvulas de segurança públicas: disjuntores de oráculo, pôr do sol de verificador e pausas de emergência com expiração automática.
- Mentalidade de recompensa aberta: pague para encontrar falhas cedo; publique correções abertamente.

## 1.14 O que não comprometeremos

- Não-custódia de moeda fiduciária (nunca).
- Sem honeypots de PII (Informações de Identificação Pessoal) on-chain (nunca).
- Sem clientes privilegiados (nunca). Todos usam os mesmos tubos.
- Sem caixas pretas "confie em nós". Se não pode ser provado ou auditado, não entra no núcleo.

## 1.15 Marcos que importam

- **Ubiquidade:** presença credível de comerciantes em cada par de região/trilho principal.
- **Alcance geográfico:** expansão para 20+ mercados na Ásia, África, América Latina e MENA.
- **Presença multi-chain:** implantação Solana planejada em seis meses; suporte para chains adicionais de alto desempenho emergentes a seguir.
- **Composabilidade:** aplicativos de terceiros entregando recursos úteis no SDK sem pedir permissão.
- **Legitimidade de auto-atendimento:** reguladores e equipes de risco podem ler a especificação, verificar parâmetros on-chain e entender como a segurança é alcançada — sem backdoors.
- **Recursos de roadmap:** para propostas de faixa de recursos atuais (incluindo remessa e expansão de moeda), veja [`/for-builders`](/for-builders/start-here).

## 1.16 Um manifesto curto

> Privacidade é um problema de interface de usuário tanto quanto um problema de matemática.

> Reputação deve ser conquistada, portátil e revogável — nunca vendida.

> O melhor KYC é aquele que prova o que é necessário e nada mais.

> Se apenas usuários avançados podem usá-lo, não é DeFi — é um clube fechado.

---

