
import { StoryGraph } from "../types/game";

export const kanbanDetailed: StoryGraph = {
  "kanban-role": {
    id: "kanban-role",
    text: `<strong>Projeto Real: Plataforma de Atendimento ao Cliente</strong><br>
Sua equipe gerencia um sistema de tickets de suporte com Kanban.<br>
Estado atual: 150 tickets em andamento, 12 desenvolvedores, tempo de ciclo médio de 8 dias.<br>
Qual papel você assume neste desafio?`,
    choices: [
      { text: "Líder de Equipe", next: "kanban-lead-specific-1" },
      { text: "Membro do Time", next: "kanban-member-specific-1" },
      { text: "Analista de Processo", next: "kanban-analyst-specific-1" }
    ]
  },

  // === LÍDER DE EQUIPE - CENÁRIO ESPECÍFICO ===
  "kanban-lead-specific-1": {
    id: "kanban-lead-specific-1",
    text: `<strong>Crise de WIP Alto - Segunda-feira, 9h</strong><br>
Você chega e vê o quadro Kanban:<br><br>
<strong>Situação atual:</strong><br>
• To Do: 45 tickets<br>
• Em Análise: 12 tickets (WIP: 8)<br>
• Em Desenvolvimento: 18 tickets (WIP: 10)<br>
• Em Teste: 15 tickets (WIP: 6)<br>
• Code Review: 8 tickets<br>
• Done: 3 tickets na semana<br><br>
<strong>Problema:</strong> Analistas sobrecarregados, desenvolvedores ociosos esperando especificações.<br>
<strong>Sua ação imediata:</strong>`,
    tag: "wip-management",
    choices: [
      { text: "Implementar WIP rígido de 5 em Análise", next: "kanban-lead-wip-rigid" },
      { text: "Realocar 2 devs para apoiar análise", next: "kanban-lead-reallocation" },
      { text: "Criar política pull entre colunas", next: "kanban-lead-pull-policy" },
      { text: "Adiar novos tickets até estabilizar", next: "kanban-lead-defer-fail" }
    ]
  },

  "kanban-lead-wip-rigid": {
    id: "kanban-lead-wip-rigid",
    text: `<strong>Implementação de WIP Rígido</strong><br>
WIP de 5 em Análise forçou bloqueio de novos tickets.<br><br>
<strong>Resultado Day 3:</strong><br>
• Análise mais focada, qualidade subiu<br>
• Stakeholders reclamam de lentidão<br>
• 2 bugs críticos descobertos na análise mais detalhada<br><br>
<strong>Stakeholder questiona:</strong> 'Por que estamos mais lentos?'<br>
<strong>Sua resposta:</strong>`,
    tag: "stakeholder-management", 
    choices: [
      { text: "Mostrar métricas: bugs evitados vs velocidade", next: "kanban-lead-metrics-success" },
      { text: "Propor aumento temporário do WIP", next: "kanban-lead-compromise" },
      { text: "Manter política e explicar long-term benefits", next: "kanban-lead-longterm-success" }
    ]
  },

  "kanban-lead-metrics-success": {
    id: "kanban-lead-metrics-success",
    text: `<strong>Decisão Baseada em Dados</strong><br>
Você apresentou dashboard com métricas de qualidade:<br>
• Bugs em produção: redução de 60%<br>
• Retrabalho: queda de 40%<br>
• Lead time: aumento inicial, mas tendência de melhoria<br><br>
Stakeholder convencido pelos dados objetivos.`,
    explanation: `Excelente aplicação dos princípios Kanban:<br>
• <strong>Medir e gerenciar o fluxo</strong> - uma das práticas fundamentais<br>
• <strong>Tornar políticas explícitas</strong> - WIP limits baseados em dados<br>
• <strong>Feedback loops</strong> - métricas para demonstrar valor<br>
• <strong>Kaizen</strong> - melhoria contínua através de evidências<br><br>
O Kanban Method enfatiza que mudanças devem ser graduais e baseadas em dados. Mostrar correlation entre WIP baixo e qualidade alta demonstra maturidade no método.`,
    references: [
      "Kanban Method - David Anderson: 'Measure and manage flow'",
      "Kanban Guide for Scrum Teams: WIP limits para melhorar qualidade",
      "Lean Principles: redução de defeitos através de fluxo controlado"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  // === MEMBRO DO TIME - CENÁRIO ESPECÍFICO ===
  "kanban-member-specific-1": {
    id: "kanban-member-specific-1",
    text: `<strong>Gargalo Identificado - Daily Standup</strong><br><br>
<strong>Situação:</strong> Você é desenvolvedor e nota padrão recorrente.<br><br>
<strong>Observação específica:</strong><br>
• QA sempre tem fila de 8-10 tickets<br>
• Apenas 2 testadores para 8 desenvolvedores<br>
• Tickets voltam do QA com bugs básicos de validação<br>
• Tempo médio em teste: 4 dias<br>
• Desenvolvedores iniciam novos tickets enquanto QA sobrecarregado<br><br>
<strong>Sua proposta no daily:</strong>`,
    tag: "bottleneck-identification",
    choices: [
      { text: "Definition of Ready mais rigorosa com critérios de QA", next: "kanban-member-dor" },
      { text: "Pair programming dev-tester em tickets críticos", next: "kanban-member-pairing" },
      { text: "Automatizar testes de regressão básicos", next: "kanban-member-automation" },
      { text: "Só focar na sua tarefa atual", next: "kanban-member-ignore-fail" }
    ]
  },

  "kanban-member-dor": {
    id: "kanban-member-dor",
    text: `<strong>Definition of Ready Implementada</strong><br>
Time adotou checklist rigorosa antes de mover para desenvolvimento:<br>
• Casos de teste definidos<br>
• Critérios de aceitação testáveis<br>
• Mockups/wireframes anexados<br><br>
<strong>Resultado Semana 2:</strong><br>
Tickets chegam melhor preparados no QA, mas velocidade inicial caiu 30%.`,
    explanation: `Decisão estratégica baseada em princípios sólidos:<br>
• <strong>Qualidade Built-in</strong> - prevenir defeitos ao invés de corrigi-los<br>
• <strong>Definition of Ready</strong> - conceito do Scrum aplicado ao fluxo Kanban<br>
• <strong>Shift-left testing</strong> - mover qualidade para etapas anteriores<br><br>
Esta abordagem demonstra maturidade em <strong>Lean Thinking</strong>: investir tempo na preparação para evitar retrabalho posterior. A queda inicial de velocidade é esperada e temporária quando se implementa qualidade preventiva.`,
    references: [
      "Lean Software Development - Mary Poppendieck: 'Build quality in'",
      "Scrum Guide 2020 - Definition of Ready como ferramenta de qualidade",
      "Kanban Method - Anderson: 'Improve collaboratively, evolve experimentally'"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  // === ANALISTA DE PROCESSO ===
  "kanban-analyst-specific-1": {
    id: "kanban-analyst-specific-1",
    text: `<strong>Análise de Métricas - Retrospectiva Mensal</strong><br><br>
<strong>Dados coletados:</strong><br>
• Lead Time médio: 12 dias (meta: 7 dias)<br>
• Cycle Time médio: 8 dias<br>
• Throughput: 15 tickets/semana (era 20)<br>
• Blockers: 35% dos tickets ficam bloqueados<br>
• Principais causas: dependências externas (60%), specs incompletas (40%)<br><br>
<strong>Sua recomendação baseada nos dados:</strong>`,
    tag: "metrics-analysis",
    choices: [
      { text: "Service Level Agreement de 5 dias para dependências", next: "kanban-analyst-sla" },
      { text: "Implementar Expedite Lane para bugs críticos", next: "kanban-analyst-expedite" },
      { text: "Criar coluna específica para 'Waiting External'", next: "kanban-analyst-waiting-column" },
      { text: "Focar apenas em throughput sem analisar qualidade", next: "kanban-analyst-throughput-fail" }
    ]
  },

  "kanban-analyst-sla": {
    id: "kanban-analyst-sla",
    text: `<strong>SLA Implementado com Sucesso</strong><br>
Service Level Agreement de 5 dias forçou melhoria na comunicação com stakeholders externos.<br><br>
<strong>Resultado Month 2:</strong><br>
• Dependências resolvidas em média 3.2 dias<br>
• Lead time caiu para 8.5 dias<br>
• Transparência melhorou relacionamento com clientes<br>
• CFD (Cumulative Flow Diagram) mostra fluxo mais estável`,
    explanation: `Implementação exemplar de práticas avançadas do Kanban:<br>
• <strong>Service Level Expectations (SLE)</strong> - comprometimento baseado em dados históricos<br>
• <strong>Classes of Service</strong> - diferentes SLAs para diferentes tipos de trabalho<br>
• <strong>Managing Dependencies</strong> - uma das capabilities do Kanban Maturity Model<br>
• <strong>Customer Focus</strong> - transparência sobre capacidade de entrega<br><br>
Esta decisão demonstra evolução para Kanban Level 2-3, onde métricas avançadas guiam decisões estratégicas e melhoram previsibilidade.`,
    references: [
      "Kanban Maturity Model - Kanban University: Service Level Expectations",
      "Actionable Agile Metrics - Daniel Vacanti: SLE como ferramenta de previsibilidade",
      "Kanban Method - Anderson: Classes of Service e SLA diferenciados"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  }
};
