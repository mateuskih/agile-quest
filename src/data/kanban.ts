import { StoryGraph } from "../types/game";

export const kanban: StoryGraph = {
  // === INÍCIO DA JORNADA KANBAN ===
  "kanban-role": {
    id: "kanban-role",
    text: `<strong>Cenário Real: Transformação Digital de Banco</strong><br>
Você é Engenheiro de Software em uma fintech que compete com bancos tradicionais. A empresa decidiu adotar Kanban para otimizar fluxo de desenvolvimento e reduzir time-to-market de features críticas.<br><br>
<strong>Contexto desafiador:</strong><br>
• Backlog caótico: 150+ itens misturando features, bugs e débito técnico<br>
• Deploys manuais que demoram 4+ horas e falham 30% das vezes<br>
• Retrabalho constante por requisitos unclear<br>
• Time de 12 pessoas sem cadência ou processo definido<br>
• Pressão regulatória: compliance não pode ser comprometido<br>
• Concorrência lançando features semanalmente<br><br>
<strong>Problemas críticos identificados:</strong><br>
• Work in Progress descontrolado (todos trabalhando em tudo)<br>
• Gargalos invisíveis causando delays sistemáticos<br>
• Falta de visibilidade sobre status real das entregas<br>
• Qualidade inconsistente gerando incidents em produção<br><br>
<strong>Sua primeira ação estratégica no piloto Kanban:</strong>`,
    choices: [
      { text: "Mapear fluxo atual e construir quadro Kanban", next: "kanban-flow-mapping" },
      { text: "Implementar WIP limits imediatamente", next: "kanban-wip-first" },
      { text: "Pular setup e começar a trabalhar", next: "kanban-no-setup-fail" },
      { text: "Facilitar workshop de alinhamento com time", next: "kanban-team-workshop" },
      { text: "Analisar métricas históricas antes de mudanças", next: "kanban-baseline-metrics" }
    ]
  },

  "kanban-flow-mapping": {
    id: "kanban-flow-mapping",
    text: `<strong>Mapeamento Detalhado do Fluxo de Trabalho</strong><br>
Você conduz sessão de value stream mapping para entender fluxo atual:<br><br>
<strong>Fluxo atual mapeado:</strong><br>
• <strong>Ideation:</strong> Stakeholder requests (sem filtro)<br>
• <strong>Analysis:</strong> BA clarifica requisitos (bottleneck de 3 dias)<br>
• <strong>Ready for Dev:</strong> Stories prontas para desenvolvimento<br>
• <strong>In Development:</strong> Coding + unit testing<br>
• <strong>Code Review:</strong> Peer review (outro bottleneck)<br>
• <strong>QA Testing:</strong> Manual testing (gargalo maior - 5 dias)<br>
• <strong>UAT:</strong> User acceptance testing<br>
• <strong>Ready for Deploy:</strong> Approved para produção<br>
• <strong>Done:</strong> Em produção funcionando<br><br>
<strong>Gargalos identificados:</strong><br>
• Analysis: 1 BA para 12 developers<br>
• QA Testing: 2 QAs para todo o fluxo<br>
• Code Review: Apenas 3 seniors fazem review<br><br>
<strong>Quadro Kanban inicial construído com colunas refletindo fluxo real.</strong><br><br>
<strong>Próxima decisão crítica:</strong>`,
    tag: "workflow-visualization",
    choices: [
      { text: "Estabelecer WIP limits baseados em capacidade", next: "kanban-capacity-based-wip" },
      { text: "Atacar gargalos imediatamente", next: "kanban-bottleneck-attack" },
      { text: "Implementar métricas de fluxo", next: "kanban-flow-metrics" },
      { text: "Treinar time em políticas de pull", next: "kanban-pull-policies" }
    ]
  },

  "kanban-team-workshop": {
    id: "kanban-team-workshop",
    text: `<strong>Workshop de Alinhamento Kanban</strong><br>
Você facilita workshop de 4 horas com time completo e stakeholders chave:<br><br>
<strong>Agenda do workshop:</strong><br>
• <strong>Contexto:</strong> Por que Kanban? Problemas atuais vs objetivos<br>
• <strong>Princípios:</strong> Start with what you do, agree to pursue improvement<br>
• <strong>Práticas:</strong> Visualização, WIP limits, flow management<br>
• <strong>Métricas:</strong> Lead time, throughput, flow efficiency<br>
• <strong>Cadências:</strong> Daily standup, replenishment, reviews<br><br>
<strong>Resultados do workshop:</strong><br>
• Time entende filosofia de flow optimization<br>
• Acordo sobre experimentar com WIP limits<br>
• Compromisso de medir e adaptar baseado em dados<br>
• Stakeholders compreendem que mudança leva tempo<br><br>
<strong>Definições estabelecidas:</strong><br>
• Definition of Ready para cada coluna<br>
• Definition of Done rigorosa<br>
• Service Level Agreements para diferentes tipos de work<br><br>
<strong>Semana seguinte - Implementação:</strong><br>
Time está engajado mas surge resistência quando WIP limits começam a "bloquear" trabalho.<br><br>
<strong>Como você gerencia esta resistência natural?</strong>`,
    tag: "change-management",
    choices: [
      { text: "Educar sobre benefits de WIP limits com exemplos", next: "kanban-wip-education" },
      { text: "Começar com limites altos e reduzir gradualmente", next: "kanban-gradual-wip" },
      { text: "Focar em medir impacto antes de ajustar limits", next: "kanban-measure-first" },
      { text: "Facilitar retrospectiva sobre blockers", next: "kanban-blocker-retro" }
    ]
  },

  "kanban-capacity-based-wip": {
    id: "kanban-capacity-based-wip",
    text: `<strong>WIP Limits Baseados em Capacidade Real</strong><br>
Você estabelece limites baseados na capacidade real de cada etapa do fluxo:<br><br>
<strong>WIP Limits estabelecidos:</strong><br>
• <strong>Analysis:</strong> 6 items (1 BA × 6 working days)<br>
• <strong>In Development:</strong> 10 items (5 devs × 2 items simultâneos)<br>
• <strong>Code Review:</strong> 4 items (3 seniors, review takes 1 day)<br>
• <strong>QA Testing:</strong> 6 items (2 QAs × 3 days per item)<br>
• <strong>UAT:</strong> 4 items (business users availability)<br><br>
<strong>Regras de pull implementadas:</strong><br>
• Só puxa item quando há capacidade real<br>
• Bloqueios são sinalizados imediatamente<br>
• Time ajuda a resolver gargalos coletivamente<br>
• Prioridade: desbloquear antes de puxar novo work<br><br>
<strong>Primeiros resultados (2 semanas):</strong><br>
• Work in Progress visível e controlado<br>
• Gargalos ficam evidentes rapidamente<br>
• Colaboração aumenta para resolver blocks<br>
• Lead time reduz 25% mesmo com menos WIP<br><br>
<strong>Desafio emergente:</strong><br>
QA continua sendo bottleneck crítico. Items acumulam antes de testing. Como você endereça este constraint sistêmico?`,
    tag: "constraint-management",
    choices: [
      { text: "Implementar shift-left testing strategy", next: "kanban-shift-left-testing" },
      { text: "Cross-train developers em QA skills", next: "kanban-cross-training" },
      { text: "Automatizar testes para reduzir manual work", next: "kanban-test-automation" },
      { text: "Renegociar capacidade de QA com management", next: "kanban-capacity-negotiation" }
    ]
  },

  "kanban-shift-left-testing": {
    id: "kanban-shift-left-testing",
    text: `<strong>Strategy de Shift-Left Testing</strong><br>
Você implementa abordagem para mover testing para esquerda no fluxo:<br><br>
<strong>Práticas implementadas:</strong><br>
• <strong>Acceptance Criteria Details:</strong> Test scenarios definidos em Analysis<br>
• <strong>Developer Testing:</strong> Devs testam own work antes de code review<br>
• <strong>Automated Unit/Integration Tests:</strong> Coverage mínimo de 80%<br>
• <strong>Test-Driven Development:</strong> Para features críticas de compliance<br>
• <strong>Early QA Involvement:</strong> QA participa de analysis e planning<br><br>
<strong>Impacto no fluxo (1 mês):</strong><br>
• QA testing time reduz de 5 para 2 dias em average<br>
• Bugs encontrados em development, não em QA<br>
• Rework reduz 60% por better quality upstream<br>
• QA pode focar em exploratory e user experience testing<br><br>
<strong>Métricas de melhoria:</strong><br>
• Lead time: 12 dias → 7 dias<br>
• Flow efficiency: 35% → 58%<br>
• Defect escape rate: 15% → 3%<br>
• Team satisfaction: 6.2 → 8.1/10<br><br>
<strong>Novo desafio surge:</strong><br>
Success gera demanda. Stakeholders querem acelerar ainda mais. Pressão para relaxar quality gates.<br><br>
<strong>Como você mantém sustainability sem comprometer quality?</strong>`,
    choices: [
      { text: "Demonstrar correlation entre quality e speed", next: "kanban-quality-speed-correlation" },
      { text: "Implementar classes de serviço para priorização", next: "kanban-service-classes-advanced" },
      { text: "Estabelecer SLAs baseados em complexity", next: "kanban-complexity-slas" }
    ]
  },

  "kanban-quality-speed-correlation": {
    id: "kanban-quality-speed-correlation",
    text: `<strong>Demonstrando Correlação Quality-Speed</strong><br>
Você prepara análise convincente sobre relationship entre quality practices e delivery speed:<br><br>
<strong>Dados coletados e apresentados:</strong><br>
• <strong>Before Quality Focus:</strong> 12 dias lead time, 40% rework rate<br>
• <strong>After Quality Focus:</strong> 7 dias lead time, 8% rework rate<br>
• <strong>Velocity paradox:</strong> Menos WIP = mais throughput<br>
• <strong>Cost analysis:</strong> Prevention vs correction costs<br><br>
<strong>Demonstração visual:</strong><br>
• CFD showing smooth flow vs chaotic flow<br>
• Scatter plot: quality metrics vs delivery speed<br>
• Customer satisfaction correlation com deployment frequency<br>
• Developer happiness impact em sustainable pace<br><br>
<strong>Business case presentation:</strong><br>
• Quality investment ROI: 340% em 6 meses<br>
• Reduced operational overhead liberates capacity<br>
• Predictable delivery enables better business planning<br>
• Risk mitigation para regulatory compliance<br><br>
<strong>1 ano depois - Transformação completa:</strong><br>
• Fintech reconhecida como leader em delivery excellence<br>
• Kanban methodology replicada em outros departamentos<br>
• Você promovido a Principal Engineering Manager<br>
• Team case study apresentado em Kanban University conference<br>
• Regulatory audits passam sem issues devido à quality focus`,
    explanation: `Exemplar implementation dos princípios Kanban conforme Kanban University:<br><br>
• <strong>Start with what you do now:</strong> Mapeou fluxo existente sem revolutionary changes<br>
• <strong>Agree to pursue improvement:</strong> Established continuous improvement culture<br>
• <strong>Respect current process:</strong> Evolved process incrementally baseado em evidence<br>
• <strong>Leadership at all levels:</strong> Demonstrated technical leadership driving organizational change<br><br>
Kanban University emphasizes que sustainable improvement comes through evolutionary change guided por metrics e customer focus. Esta jornada exemplifica como technical practices podem drive business results quando properly measured e communicated.`,
    references: [
      "Kanban University - Evolutionary Change: https://kanban.university",
      "Kanban University - Flow Metrics: https://kanban.university", 
      "Kanban University - Service Delivery: https://kanban.university"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  // === EXTENDED FAILURE SCENARIOS ===
  "kanban-no-setup-fail": {
    id: "kanban-no-setup-fail",
    text: `<strong>Skip Setup - Caos Perpetuado</strong><br>
Você decide pular configuração e começar a trabalhar imediatamente:<br><br>
<strong>Consequências imediatas:</strong><br>
• Work permanece invisible e desorganizado<br>
• Multiple pessoas trabalham nos mesmos items<br>
• Priorities conflicting constantemente<br>
• Ninguém sabe real status de entregas<br>
• Same gargalos persistem sem visibility<br><br>
<strong>3 meses depois:</strong><br>
• Situation piora - mais chaos que antes<br>
• Team frustra-se com "Kanban que não funciona"<br>
• Management perde confidence no processo<br>
• Stakeholders demand volta ao processo anterior<br><br>
<strong>Lesson crítica:</strong><br>
Kanban requires foundation - visualization é primeiro step fundamental.`,
    explanation: `Fundamental violation dos princípios Kanban:<br><br>
• <strong>Visualization Missing:</strong> Sem board, work permanece hidden<br>
• <strong>No Flow Management:</strong> Impossível optimize what you can't see<br>
• <strong>Improvement Blocked:</strong> Sem baseline, no way to measure progress<br><br>
Kanban University emphasizes que visualization é cornerstone de flow management. Without seeing work, teams cannot identify bottlenecks, measure flow, ou make informed decisions about improvement.`,
    references: [
      "Kanban University - Visualization Practices: https://kanban.university",
      "Kanban University - Getting Started: https://kanban.university"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  // === ADVANCED KANBAN SCENARIOS ===
  "kanban-service-classes-advanced": {
    id: "kanban-service-classes-advanced",
    text: `<strong>Implementing Advanced Service Classes</strong><br>
Você estabelece service classes sofisticadas para different types of work:<br><br>
<strong>Service Classes definidas:</strong><br>
• <strong>Expedite:</strong> Critical security/compliance issues (SLA: 24h)<br>
• <strong>Fixed Date:</strong> Regulatory deadlines (protected capacity)<br>
• <strong>Standard:</strong> Regular feature development (normal flow)<br>
• <strong>Intangible:</strong> Technical debt, research (20% capacity)<br><br>
<strong>Policies implemented:</strong><br>
• Expedite has dedicated swim lane e bypasses WIP limits<br>
• Fixed date items have reserved capacity slots<br>
• Standard work flows through normal Kanban system<br>
• Intangible work has minimum allocation guarantee<br><br>
<strong>Risk management integration:</strong><br>
• Service classes tied to business risk levels<br>
• SLAs based on regulatory requirements<br>
• Escalation policies para missed SLAs<br>
• Capacity planning considers service mix<br><br>
<strong>Business impact (6 months):</strong><br>
• Zero missed regulatory deadlines<br>
• Customer-facing incidents resolved 5x faster<br>
• Technical debt managed sustainably<br>
• Predictable delivery enables business planning`,
    choices: [
      { text: "Establish advanced metrics e reporting", next: "kanban-advanced-metrics" },
      { text: "Scale Kanban para multiple teams", next: "kanban-scaling" },
      { text: "Focus em continuous improvement", next: "kanban-kaizen-advanced" }
    ]
  },

  "kanban-advanced-metrics": {
    id: "kanban-advanced-metrics",
    text: `<strong>Advanced Metrics e Analytics</strong><br>
Você implementa sophisticated measurement system para drive continuous improvement:<br><br>
<strong>Metrics dashboard implementado:</strong><br>
• <strong>Flow Metrics:</strong> Lead time, cycle time, throughput por service class<br>
• <strong>Quality Metrics:</strong> Defect rate, escape rate, customer satisfaction<br>
• <strong>Predictability:</strong> SLA compliance, estimation accuracy<br>
• <strong>Team Health:</strong> WIP age, blocked time, team satisfaction<br>
• <strong>Business Value:</strong> Value delivery rate, ROI por initiative<br><br>
<strong>Advanced analytics capabilities:</strong><br>
• Monte Carlo simulations para delivery forecasting<br>
• Statistical process control para identify trends<br>
• Correlation analysis between practices e outcomes<br>
• Automated alerting para SLA risks<br><br>
<strong>Decision-making transformation:</strong><br>
• Data-driven capacity planning<br>
• Evidence-based process improvements<br>
• Predictive resource allocation<br>
• Risk-informed prioritization<br><br>
<strong>Organizational impact:</strong><br>
• Fintech becomes industry benchmark para delivery excellence<br>
• Metrics methodology licensed para other companies<br>
• You become recognized expert em flow-based management<br>
• Approach scales para entire organization`,
    explanation: `Masterful implementation of advanced Kanban practices:<br><br>
• <strong>Evolutionary Approach:</strong> Built sophisticated system incrementally<br>
• <strong>Evidence-Based Management:</strong> Decisions driven by data, not opinions<br>
• <strong>Service Orientation:</strong> Different work types managed appropriately<br>
• <strong>Continuous Improvement:</strong> Metrics enable ongoing optimization<br><br>
This represents mature Kanban implementation que goes beyond basic practices para create competitive advantage through superior flow management.`,
    references: [
      "Kanban University - Advanced Metrics: https://kanban.university",
      "Kanban University - Service Classes: https://kanban.university",
      "Kanban University - Flow-Based Management: https://kanban.university"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  }
};
