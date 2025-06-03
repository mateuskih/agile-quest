
import { StoryGraph } from "../types/game";

export const scrumDetailed: StoryGraph = {
  "scrum-role": {
    id: "scrum-role",
    text: [
      "**Projeto Real: Sistema de E-commerce**",
      "Você faz parte de um time Scrum desenvolvendo uma plataforma de vendas online.",
      "Sprint atual: implementar sistema de pagamentos integrado.",
      "Qual papel você assume neste desafio?"
    ].join("\n"),
    choices: [
      { text: "Product Owner", next: "scrum-po-specific-1" },
      { text: "Scrum Master", next: "scrum-sm-specific-1" },
      { text: "Developer", next: "scrum-dev-specific-1" }
    ]
  },

  // === PRODUCT OWNER - CENÁRIO ESPECÍFICO ===
  "scrum-po-specific-1": {
    id: "scrum-po-specific-1",
    text: [
      "**Situação Crítica - Sprint Planning**",
      "É sexta-feira, 14h. A Sprint Planning começou às 13h para uma Sprint de 2 semanas.",
      "**Contexto específico:**",
      "• Gateway de pagamento PIX deve estar funcional",
      "• Stakeholder exige também cartão de crédito", 
      "• Time estima PIX: 13 pontos, Cartão: 21 pontos",
      "• Velocity média: 25 pontos por sprint",
      "• Cliente tem demo marcada para próxima sexta",
      "",
      "**Sua decisão como PO:**"
    ].join("\n"),
    tag: "prioritization",
    choices: [
      { text: "Priorizar apenas PIX para garantir qualidade", next: "scrum-po-pix-focus" },
      { text: "Tentar fazer ambos, dividindo em MVP", next: "scrum-po-mvp-split" },
      { text: "Negociar prazo da demo com stakeholder", next: "scrum-po-negotiate" },
      { text: "Aumentar velocity com horas extras", next: "scrum-po-overtime-fail" }
    ]
  },

  "scrum-po-pix-focus": {
    id: "scrum-po-pix-focus",
    text: [
      "**Resultado: PIX Implementado com Excelência**",
      "Você priorizou PIX e o time entregou uma implementação robusta.",
      "**Day 8 da Sprint:**",
      "Stakeholder pressiona: 'Cadê o cartão de crédito? Era prioridade!'",
      "**Sua resposta:**"
    ].join("\n"),
    tag: "stakeholder-management",
    choices: [
      { text: "Mostrar dados: PIX representa 70% dos pagamentos brasileiros", next: "scrum-po-data-success" },
      { text: "Prometer cartão na próxima sprint com refinamento", next: "scrum-po-promise-success" },
      { text: "Culpar o time por não entregar tudo", next: "scrum-po-blame-fail" }
    ]
  },

  "scrum-po-data-success": {
    id: "scrum-po-data-success",
    text: [
      "**Excelente decisão baseada em dados!**",
      "Você apresentou pesquisa do Banco Central mostrando que PIX representa 70% dos pagamentos instantâneos no Brasil.",
      "Stakeholder reconheceu a priorização inteligente."
    ].join("\n"),
    explanation: [
      "Esta foi uma decisão exemplar porque:",
      "• Aplicou o princípio do 'Value Maximization' do Scrum",
      "• Usou dados reais para justificar priorização",
      "• Manteve foco na entrega de valor incremental",
      "• Demonstrou transparência com stakeholders",
      "",
      "O Scrum Guide enfatiza que o Product Owner é responsável por maximizar o valor do produto, e isso inclui tomar decisões difíceis de priorização baseadas em evidências."
    ].join("\n"),
    references: [
      "Scrum Guide 2020 - Product Owner accountabilities: 'maximizing the value of the product'",
      "Scrum Guide 2020 - Empiricism: decisões baseadas em observação e experimentação",
      "Dados Banco Central Brasil 2024 - Estatísticas PIX"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-po-mvp-split": {
    id: "scrum-po-mvp-split",
    text: [
      "**Tentativa de MVP Híbrido**",
      "Você propôs: PIX completo + MVP básico de cartão (só validação, sem cobrança).",
      "**Sprint Review - Resultado:**",
      "PIX funciona perfeitamente, mas MVP do cartão confunde usuários na demo.",
      "Stakeholder questiona: 'Por que tem cartão se não funciona?'"
    ].join("\n"),
    explanation: [
      "Esta decisão teve aspectos positivos e negativos:",
      "**Pontos positivos:**",
      "• Tentou maximizar valor para stakeholder",
      "• Aplicou conceito de MVP",
      "",
      "**Problemas identificados:**",
      "• MVP mal definido causou confusão",
      "• Violou princípio 'Definition of Done'",
      "• Comprometeu transparência com usuário final",
      "",
      "O Scrum Guide é claro: incrementos devem ser 'Done' e potencialmente liberáveis. Um MVP que confunde usuários não atende esses critérios."
    ].join("\n"),
    references: [
      "Scrum Guide 2020 - Increment: 'concrete stepping stone toward the Product Goal'",
      "Scrum Guide 2020 - Definition of Done: 'formal description of the state of the Increment'"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  // === SCRUM MASTER - CENÁRIO ESPECÍFICO ===
  "scrum-sm-specific-1": {
    id: "scrum-sm-specific-1",
    text: [
      "**Impedimento Real - Daily Scrum**",
      "**Situação:** 3º dia da Sprint, Daily das 9h.",
      "**Contexto específico:**",
      "• Ana (Frontend): 'Estou bloqueada há 2 dias. API de validação não retorna dados'",
      "• Carlos (Backend): 'API tá pronta, problema é no frontend'",
      "• Ana: 'Testei com Postman, retorna erro 500'",
      "• Carlos: 'Funciona na minha máquina'",
      "• Tensão crescente, outros devs desconfortáveis",
      "",
      "**Sua ação imediata como Scrum Master:**"
    ].join("\n"),
    tag: "impediment-removal",
    choices: [
      { text: "Pausar Daily e facilitar debugging conjunto", next: "scrum-sm-debug-session" },
      { text: "Agendar reunião pós-Daily para investigar", next: "scrum-sm-post-daily" },
      { text: "Sugerir que Ana e Carlos resolvam offline", next: "scrum-sm-offline-fail" },
      { text: "Escalar para tech lead imediatamente", next: "scrum-sm-escalate-premature" }
    ]
  },

  "scrum-sm-debug-session": {
    id: "scrum-sm-debug-session",
    text: [
      "**Resolução Colaborativa**",
      "Você transformou a Daily em sessão de debugging colaborativo.",
      "**Descoberta:** Carlos estava testando em ambiente local, Ana em homologação com dados diferentes.",
      "**10 minutos depois:** Problema identificado e resolvido.",
      "Time comemora a solução rápida."
    ].join("\n"),
    explanation: [
      "Excelente facilitação! Esta decisão foi eficaz porque:",
      "• Aplicou o princípio de 'servant leadership'",
      "• Removeu impedimento rapidamente",
      "• Transformou conflito em colaboração",
      "• Manteve foco no objetivo da Sprint",
      "• Demonstrou valor da transparência técnica",
      "",
      "O Scrum Master é responsável por remover impedimentos e facilitar eventos. Adaptar o formato da Daily para resolver um bloqueador crítico é uma aplicação inteligente dos valores Scrum."
    ].join("\n"),
    references: [
      "Scrum Guide 2020 - Scrum Master accountabilities: 'removing impediments'",
      "Scrum Guide 2020 - Daily Scrum: 'inspect progress toward Sprint Goal'",
      "Manifesto Ágil - Individuals and interactions over processes and tools"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  // === DEVELOPER - CENÁRIO ESPECÍFICO ===
  "scrum-dev-specific-1": {
    id: "scrum-dev-specific-1",
    text: [
      "**Problema Técnico Real - Code Review**",
      "**Situação:** Você está revisando PR da funcionalidade de pagamento PIX.",
      "**Código descoberto:**",
      "```javascript",
      "// Validação de chave PIX",
      "if (pixKey.length > 0) {",
      "  processPayment(pixKey, amount);",
      "}",
      "```",
      "**Problemas identificados:**",
      "• Sem validação de formato de chave PIX",
      "• Sem tratamento de erro de API",
      "• Sem logs para auditoria",
      "• PR é de colega sênior, pressão para aprovar",
      "",
      "**Sua decisão:**"
    ].join("\n"),
    tag: "code-quality",
    choices: [
      { text: "Reprovar PR com comentários técnicos detalhados", next: "scrum-dev-detailed-review" },
      { text: "Aprovar mas sugerir melhorias em issue separada", next: "scrum-dev-compromise" },
      { text: "Aprovar para não atrasar Sprint", next: "scrum-dev-approve-fail" },
      { text: "Conversar pessoalmente antes de reprovar", next: "scrum-dev-personal-chat" }
    ]
  },

  "scrum-dev-detailed-review": {
    id: "scrum-dev-detailed-review",
    text: [
      "**Code Review Exemplar**",
      "Você reprovou o PR com comentários construtivos:",
      "• Sugeriu regex para validação de CPF/CNPJ/Email/Telefone",
      "• Indicou biblioteca para validação de chave PIX",
      "• Propôs try-catch com logs estruturados",
      "Colega agradeceu o feedback detalhado e corrigiu."
    ].join("\n"),
    explanation: [
      "Decisão técnica exemplar que demonstra:",
      "• Commitment com qualidade técnica",
      "• Responsabilidade compartilhada pelo código",
      "• Aplicação prática de XP em contexto Scrum",
      "• Proteção contra falhas em produção",
      "",
      "Validação de chave PIX é crítica: CPF (11 dígitos), CNPJ (14), email ou telefone têm formatos específicos. Sem validação, o sistema aceita qualquer string, causando falhas na API do banco.",
      "",
      "Code review rigoroso é uma das práticas que tornam possível a entrega contínua no Scrum."
    ].join("\n"),
    references: [
      "Scrum Guide 2020 - Definition of Done: quality measures",
      "Extreme Programming Explained - Collective Code Ownership",
      "Banco Central do Brasil - Especificações técnicas PIX"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  // Nós de falha com explicações
  "scrum-po-overtime-fail": {
    id: "scrum-po-overtime-fail",
    text: ["Decisão inadequada: overtime não é sustentável e viola princípios ágeis."].join("\n"),
    explanation: [
      "Esta decisão falha porque:",
      "• Viola princípio de 'sustainable pace' do Manifesto Ágil",
      "• Demonstra má gestão de expectativas com stakeholders",
      "• Compromise qualidade do código por pressão de prazo",
      "• Não resolve o problema real: escopo inadequado para a Sprint",
      "",
      "O Scrum Guide não menciona horas extras como solução para problemas de Sprint. A abordagem correta é renegociar escopo ou prazo com transparência."
    ].join("\n"),
    references: [
      "Manifesto Ágil - Sustainable development pace",
      "Scrum Guide 2020 - Transparency: honest communication about progress"
    ],
    choices: [{ text: "Tentar novamente", next: "scrum-role" }]
  }
};
