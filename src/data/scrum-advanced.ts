
import { StoryGraph } from "../types/game";

export const scrumAdvanced: StoryGraph = {
  // === CENÁRIOS AVANÇADOS DE SCRUM ===
  "scrum-po-promise-success": {
    id: "scrum-po-promise-success",
    text: `<strong>Gestão de Expectativas Profissional</strong><br>
Você comunica transparência total: PIX entregue com qualidade, cartão refinado para próxima Sprint.<br><br>
<strong>Outcome:</strong><br>
• Stakeholder aprecia honestidade<br>
• Refinement session detalhada gera melhor Story para cartão<br>
• Próxima Sprint tem 40% menos bugs que a média`,
    explanation: `Gestão exemplar de expectativas seguindo valores Scrum:<br>
• <strong>Transparência</strong> - comunicação honesta sobre capacidade<br>
• <strong>Commitment</strong> - foco na qualidade do que foi prometido<br>
• <strong>Empirical Process Control</strong> - refinement baseado em learning<br>
• <strong>Product Goal</strong> - alinhamento estratégico vs pressão tática<br><br>
Esta abordagem constrói confiança long-term com stakeholders e demonstra maturidade na aplicação dos valores Scrum.`,
    references: [
      "Scrum Guide 2020 - Scrum Values: Commitment and Transparency",
      "Professional Scrum Product Owner - stakeholder management",
      "Evidence-Based Management - métricas de valor vs velocity"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-po-blame-fail": {
    id: "scrum-po-blame-fail",
    text: `<strong>Quebra de Confiança</strong><br>
Culpar o time destruiu psychological safety e quebrou valores fundamentais do Scrum.<br>
Time perde confiança na liderança do Product Owner.`,
    explanation: `Esta decisão viola múltiplos aspectos fundamentais do Scrum:<br>
• <strong>Scrum Values</strong> - falta de respeito e courage para assumir responsabilidade<br>
• <strong>Self-Managing Teams</strong> - culpar time quebra autonomia<br>
• <strong>Servant Leadership</strong> - PO deve servir o time, não culpá-lo<br>
• <strong>Psychological Safety</strong> - ambiente de medo prejudica performance<br><br>
O Scrum Guide é explícito: o Product Owner é responsável por maximizar valor do produto, incluindo decisões de priorização e suas consequências.`,
    references: [
      "Scrum Guide 2020 - Product Owner accountabilities",
      "Team Topologies - psychological safety in agile teams",
      "Google's Project Aristotle - psychological safety research"
    ],
    choices: [{ text: "Tentar novamente", next: "scrum-role" }]
  },

  "scrum-po-negotiate": {
    id: "scrum-po-negotiate",
    text: `<strong>Negociação Estratégica</strong><br>
Você propõe demo intermediária: PIX funcional em Day 8, cartão como preview conceitual.<br><br>
<strong>Stakeholder response:</strong> 'Interessante... podemos ter feedback dos usuários sobre PIX antes de investir em cartão.'<br><br>
<strong>Resultado:</strong> Approach data-driven aprovada, demo redefinida para value validation.`,
    explanation: `Negociação inteligente aplicando princípios ágeis avançados:<br>
• <strong>Inspect and Adapt</strong> - usar demo como learning opportunity<br>
• <strong>Empirical Process</strong> - validar PIX antes de investir em cartão<br>
• <strong>Value Maximization</strong> - focar no que gera mais value primeiro<br>
• <strong>Stakeholder Collaboration</strong> - transformar pressão em parceria<br><br>
Esta abordagem demonstra maturidade em Product Management, usando frameworks como Build-Measure-Learn para reduzir waste.`,
    references: [
      "Scrum Guide 2020 - Empirical Process Control",
      "Lean Startup - Eric Ries: Build-Measure-Learn",
      "Evidence-Based Management - hypothesis-driven development"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-sm-post-daily": {
    id: "scrum-sm-post-daily",
    text: `<strong>Facilitação Estruturada</strong><br>
Você agenda 'Technical Alignment Session' para 10h com Ana, Carlos e mais 1 dev experiente.<br><br>
<strong>Outcome da sessão:</strong><br>
• Problema: ambiente de homologação com dados corrompidos<br>
• Solução: script de reset + dados de teste consistentes<br>
• Implementação: 30 minutos<br>
• Learning: processo de troubleshooting documentado`,
    explanation: `Facilitação eficaz aplicando servant leadership:<br>
• <strong>Servant Leadership</strong> - facilitar sem impor soluções<br>
• <strong>Self-Organization</strong> - time resolve problema com suporte<br>
• <strong>Continuous Improvement</strong> - documentar processo para evitar recorrência<br>
• <strong>Focus</strong> - manter Daily ágil e resolver impedimento adequadamente<br><br>
Esta abordagem demonstra como Scrum Master eficaz remove impedimentos sem micro-management, mantendo team autonomy.`,
    references: [
      "Scrum Guide 2020 - Scrum Master accountabilities: removing impediments",
      "Coaching Agile Teams - Lyssa Adkins: servant leadership practices",
      "The Great ScrumMaster - Zuzana Sochova: facilitation techniques"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-sm-offline-fail": {
    id: "scrum-sm-offline-fail",
    text: `<strong>Impedimento Não Resolvido</strong><br>
'Resolvam offline' não remove impedimento real. Ana continua bloqueada, Carlos frustra-se.<br>
Sprint Goal em risco no Day 3.`,
    explanation: `Falha em aplicar responsabilidades fundamentais do Scrum Master:<br>
• <strong>Impediment Removal</strong> - responsabilidade principal não cumprida<br>
• <strong>Servant Leadership</strong> - delegou problema ao invés de facilitar<br>
• <strong>Sprint Goal</strong> - não protegeu objetivo da Sprint<br>
• <strong>Team Effectiveness</strong> - perdeu oportunidade de coaching<br><br>
O Scrum Guide é explícito: Scrum Master é responsável por removing impediments. 'Resolver offline' sem facilitação ativa não constitui remoção de impedimento.`,
    references: [
      "Scrum Guide 2020 - Scrum Master accountabilities",
      "Professional Scrum Master - impediment removal techniques",
      "Scrum Mastery - Geoff Watts: active vs passive facilitation"
    ],
    choices: [{ text: "Tentar novamente", next: "scrum-role" }]
  },

  "scrum-sm-escalate-premature": {
    id: "scrum-sm-escalate-premature",
    text: `<strong>Escalação Prematura</strong><br>
Tech lead resolve rapidamente, mas time perde oportunidade de learning e self-organization.<br>
Dependência externa criada desnecessariamente.`,
    explanation: `Escalação prematura compromete princípios do Scrum:<br>
• <strong>Self-Managing Teams</strong> - time perdeu chance de resolver autonomamente<br>
• <strong>Empirical Learning</strong> - debugging conjunto geraria knowledge sharing<br>
• <strong>Servant Leadership</strong> - facilitar deveria ser primeira opção<br>
• <strong>Continuous Improvement</strong> - root cause não foi explorada pelo time<br><br>
Escalar deve ser último recurso após tentativas de facilitation. O Scrum valoriza team autonomy e collective problem-solving.`,
    references: [
      "Scrum Guide 2020 - Self-Managing Teams",
      "Coaching Agile Teams - facilitation before escalation",
      "Team Topologies - reducing external dependencies"
    ],
    choices: [{ text: "Tentar novamente", next: "scrum-role" }]
  },

  "scrum-dev-compromise": {
    id: "scrum-dev-compromise",
    text: `<strong>Technical Debt Acumulado</strong><br>
Aprovar PR com promessa de melhoria posterior acumula technical debt.<br>
Issue de melhoria fica 3 sprints em backlog sem priorização.`,
    explanation: `Esta decisão compromete qualidade técnica:<br>
• <strong>Definition of Done</strong> - código não atende padrões de qualidade<br>
• <strong>Technical Excellence</strong> - postergação compromete arquitetura<br>
• <strong>Continuous Improvement</strong> - melhorias 'prometidas' raramente acontecem<br>
• <strong>Sustainable Pace</strong> - technical debt gera overtime futuro<br><br>
O Manifesto Ágil valoriza working software, mas também enfatiza technical excellence. Code review é momento crítico para manter qualidade.`,
    references: [
      "Agile Manifesto - Principles: technical excellence and good design",
      "Clean Code - Robert Martin: code review standards",
      "Scrum Guide 2020 - Definition of Done quality gates"
    ],
    choices: [{ text: "Tentar novamente", next: "scrum-role" }]
  },

  "scrum-dev-approve-fail": {
    id: "scrum-dev-approve-fail",
    text: `<strong>Falha Crítica em Produção</strong><br>
Código sem validação PIX aceita qualquer string. Transações inválidas processadas.<br>
Banco Central notifica empresa sobre não-conformidade regulatória.`,
    explanation: `Aprovação sem critério causou falha regulatória crítica:<br>
• <strong>Definition of Done</strong> - ignorada sob pressão de prazo<br>
• <strong>Quality Assurance</strong> - responsabilidade coletiva negligenciada<br>
• <strong>Risk Management</strong> - código financeiro requer validação rigorosa<br>
• <strong>Professional Responsibility</strong> - desenvolvedor deve zelar por qualidade<br><br>
Em sistemas financeiros, validação de chave PIX é obrigatória por regulamentação. Pressão de Sprint nunca justifica ignorar requirements críticos de segurança.`,
    references: [
      "Banco Central do Brasil - Regulamentação PIX",
      "Clean Code - professionalism and responsibility",
      "Scrum Guide 2020 - shared accountability for quality"
    ],
    choices: [{ text: "Tentar novamente", next: "scrum-role" }]
  },

  "scrum-dev-personal-chat": {
    id: "scrum-dev-personal-chat",
    text: `<strong>Abordagem Colaborativa</strong><br>
Conversa 1:1 revela que colega sênior estava sob pressão de deadline pessoal.<br>
Juntos, vocês refinam o código em 45 minutos com pair programming.<br><br>
<strong>Resultado:</strong> Validação PIX robusta + relacionamento fortalecido.`,
    explanation: `Abordagem madura de code review e relacionamento:<br>
• <strong>Respect</strong> - um dos valores fundamentais do Scrum<br>
• <strong>Collective Code Ownership</strong> - responsabilidade compartilhada<br>
• <strong>Pair Programming</strong> - XP practice que melhora qualidade<br>
• <strong>Psychological Safety</strong> - conversa 1:1 reduz defensividade<br><br>
Esta approach demonstra que code review efetivo é sobre collaboration, não criticism. Pair programming para resolver issues é uma excellent practice.`,
    references: [
      "Scrum Values - Respect and Collaboration",
      "Extreme Programming - Collective Code Ownership",
      "Crucial Conversations - difficult conversations techniques"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  }
};
