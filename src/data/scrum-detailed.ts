
import { StoryGraph } from "../types/game";

export const scrumDetailed: StoryGraph = {
  "scrum-role": {
    id: "scrum-role",
    text: `<strong>Projeto Real: Sistema de E-commerce</strong><br>
Você faz parte de um time Scrum desenvolvendo uma plataforma de vendas online.<br>
Sprint atual: implementar sistema de pagamentos integrado.<br>
Qual papel você assume neste desafio?`,
    choices: [
      { text: "Product Owner", next: "scrum-po-specific-1" },
      { text: "Scrum Master", next: "scrum-sm-specific-1" },
      { text: "Developer", next: "scrum-dev-specific-1" }
    ]
  },

  // === PRODUCT OWNER - CENÁRIO ESPECÍFICO ===
  "scrum-po-specific-1": {
    id: "scrum-po-specific-1",
    text: `<strong>Situação Crítica - Sprint Planning</strong><br>
É sexta-feira, 14h. A Sprint Planning começou às 13h para uma Sprint de 2 semanas.<br><br>
<strong>Contexto específico:</strong><br>
• Gateway de pagamento PIX deve estar funcional<br>
• Stakeholder exige também cartão de crédito<br>
• Time estima PIX: 13 pontos, Cartão: 21 pontos<br>
• Velocity média: 25 pontos por sprint<br>
• Cliente tem demo marcada para próxima sexta<br><br>
<strong>Sua decisão como PO:</strong>`,
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
    text: `<strong>Resultado: PIX Implementado com Excelência</strong><br>
Você priorizou PIX e o time entregou uma implementação robusta.<br><br>
<strong>Day 8 da Sprint:</strong><br>
Stakeholder pressiona: 'Cadê o cartão de crédito? Era prioridade!'<br><br>
<strong>Sua resposta:</strong>`,
    tag: "stakeholder-management",
    choices: [
      { text: "Mostrar dados: PIX representa 70% dos pagamentos brasileiros", next: "scrum-po-data-success" },
      { text: "Prometer cartão na próxima sprint com refinamento", next: "scrum-po-promise-success" },
      { text: "Culpar o time por não entregar tudo", next: "scrum-po-blame-fail" }
    ]
  },

  "scrum-po-data-success": {
    id: "scrum-po-data-success",
    text: `<strong>Excelente decisão baseada em dados!</strong><br>
Você apresentou pesquisa do Banco Central mostrando que PIX representa 70% dos pagamentos instantâneos no Brasil.<br>
Stakeholder reconheceu a priorização inteligente.`,
    explanation: `Esta foi uma decisão exemplar porque:<br>
• Aplicou o princípio do <strong>'Value Maximization'</strong> do Scrum<br>
• Usou dados reais para justificar priorização<br>
• Manteve foco na entrega de valor incremental<br>
• Demonstrou transparência com stakeholders<br><br>
O Scrum Guide enfatiza que o Product Owner é responsável por maximizar o valor do produto, e isso inclui tomar decisões difíceis de priorização baseadas em evidências.`,
    references: [
      "Scrum Guide 2020 - Product Owner accountabilities: 'maximizing the value of the product'",
      "Scrum Guide 2020 - Empiricism: decisões baseadas em observação e experimentação",
      "Dados Banco Central Brasil 2024 - Estatísticas PIX"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-po-mvp-split": {
    id: "scrum-po-mvp-split",
    text: `<strong>Tentativa de MVP Híbrido</strong><br>
Você propôs: PIX completo + MVP básico de cartão (só validação, sem cobrança).<br><br>
<strong>Sprint Review - Resultado:</strong><br>
PIX funciona perfeitamente, mas MVP do cartão confunde usuários na demo.<br>
Stakeholder questiona: 'Por que tem cartão se não funciona?'`,
    explanation: `Esta decisão teve aspectos positivos e negativos:<br><br>
<strong>Pontos positivos:</strong><br>
• Tentou maximizar valor para stakeholder<br>
• Aplicou conceito de MVP<br><br>
<strong>Problemas identificados:</strong><br>
• MVP mal definido causou confusão<br>
• Violou princípio <strong>'Definition of Done'</strong><br>
• Comprometeu transparência com usuário final<br><br>
O Scrum Guide é claro: incrementos devem ser <strong>'Done'</strong> e potencialmente liberáveis. Um MVP que confunde usuários não atende esses critérios.`,
    references: [
      "Scrum Guide 2020 - Increment: 'concrete stepping stone toward the Product Goal'",
      "Scrum Guide 2020 - Definition of Done: 'formal description of the state of the Increment'"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  // === SCRUM MASTER - CENÁRIO ESPECÍFICO ===
  "scrum-sm-specific-1": {
    id: "scrum-sm-specific-1",
    text: `<strong>Impedimento Real - Daily Scrum</strong><br><br>
<strong>Situação:</strong> 3º dia da Sprint, Daily das 9h.<br><br>
<strong>Contexto específico:</strong><br>
• Ana (Frontend): 'Estou bloqueada há 2 dias. API de validação não retorna dados'<br>
• Carlos (Backend): 'API tá pronta, problema é no frontend'<br>
• Ana: 'Testei com Postman, retorna erro 500'<br>
• Carlos: 'Funciona na minha máquina'<br>
• Tensão crescente, outros devs desconfortáveis<br><br>
<strong>Sua ação imediata como Scrum Master:</strong>`,
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
    text: `<strong>Resolução Colaborativa</strong><br>
Você transformou a Daily em sessão de debugging colaborativo.<br><br>
<strong>Descoberta:</strong> Carlos estava testando em ambiente local, Ana em homologação com dados diferentes.<br><br>
<strong>10 minutos depois:</strong> Problema identificado e resolvido.<br>
Time comemora a solução rápida.`,
    explanation: `Excelente facilitação! Esta decisão foi eficaz porque:<br>
• Aplicou o princípio de <strong>'servant leadership'</strong><br>
• Removeu impedimento rapidamente<br>
• Transformou conflito em colaboração<br>
• Manteve foco no objetivo da Sprint<br>
• Demonstrou valor da transparência técnica<br><br>
O Scrum Master é responsável por remover impedimentos e facilitar eventos. Adaptar o formato da Daily para resolver um bloqueador crítico é uma aplicação inteligente dos valores Scrum.`,
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
    text: `<strong>Problema Técnico Real - Code Review</strong><br><br>
<strong>Situação:</strong> Você está revisando PR da funcionalidade de pagamento PIX.<br><br>
<strong>Código descoberto:</strong><br>
<pre class="bg-gray-100 p-3 rounded mt-2 mb-2">
// Validação de chave PIX
if (pixKey.length > 0) {
  processPayment(pixKey, amount);
}
</pre><br>
<strong>Problemas identificados:</strong><br>
• Sem validação de formato de chave PIX<br>
• Sem tratamento de erro de API<br>
• Sem logs para auditoria<br>
• PR é de colega sênior, pressão para aprovar<br><br>
<strong>Sua decisão:</strong>`,
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
    text: `<strong>Code Review Exemplar</strong><br>
Você reprovou o PR com comentários construtivos:<br>
• Sugeriu regex para validação de CPF/CNPJ/Email/Telefone<br>
• Indicou biblioteca para validação de chave PIX<br>
• Propôs try-catch com logs estruturados<br>
Colega agradeceu o feedback detalhado e corrigiu.`,
    explanation: `Decisão técnica exemplar que demonstra:<br>
• <strong>Commitment</strong> com qualidade técnica<br>
• Responsabilidade compartilhada pelo código<br>
• Aplicação prática de XP em contexto Scrum<br>
• Proteção contra falhas em produção<br><br>
Validação de chave PIX é crítica: CPF (11 dígitos), CNPJ (14), email ou telefone têm formatos específicos. Sem validação, o sistema aceita qualquer string, causando falhas na API do banco.<br><br>
Code review rigoroso é uma das práticas que tornam possível a entrega contínua no Scrum.`,
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
    text: `Decisão inadequada: overtime não é sustentável e viola princípios ágeis.`,
    explanation: `Esta decisão falha porque:<br>
• Viola princípio de <strong>'sustainable pace'</strong> do Manifesto Ágil<br>
• Demonstra má gestão de expectativas com stakeholders<br>
• Compromete qualidade do código por pressão de prazo<br>
• Não resolve o problema real: escopo inadequado para a Sprint<br><br>
O Scrum Guide não menciona horas extras como solução para problemas de Sprint. A abordagem correta é renegociar escopo ou prazo com transparência.`,
    references: [
      "Manifesto Ágil - Sustainable development pace",
      "Scrum Guide 2020 - Transparency: honest communication about progress"
    ],
    choices: [{ text: "Tentar novamente", next: "scrum-role" }]
  }
};
