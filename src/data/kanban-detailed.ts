
import { StoryGraph } from "../types/game";

export const kanbanDetailed: StoryGraph = {
  "kanban-role": {
    id: "kanban-role",
    text: `<strong>Sistema Kanban Real: E-commerce B2B com 500+ Pedidos Diários</strong><br>
Você faz parte de uma equipe de 8 pessoas gerenciando plataforma de e-commerce B2B que processa mais de 500 pedidos diários, com picos de até 1.200 pedidos em dias de promoção.<br><br>
<strong>Contexto crítico atual:</strong><br>
• Lead time médio de 12 dias (meta: 6 dias)<br>
• 40% dos pedidos ficam bloqueados em "Análise de Crédito"<br>
• Gargalo crítico no setor de Logística<br>
• Escalações de clientes aumentaram 300% no último trimestre<br>
• Reuniões de status consomem 8 horas semanais da equipe<br><br>
<strong>Sistema atual problemático:</strong><br>
• Workflow: Pedido → Análise → Aprovação → Separação → Expedição<br>
• Sem limites WIP definidos<br>
• Trabalho "urgente" sempre interrompe fluxo normal<br>
• Métricas coletadas manualmente<br><br>
Qual função você assumirá para transformar este caos em um sistema Kanban eficiente?`,
    choices: [
      { text: "Gerente de Operações", next: "kanban-manager-1" },
      { text: "Analista de Processos", next: "kanban-analyst-1" },
      { text: "Coordenador de Equipe", next: "kanban-coordinator-1" }
    ]
  },

  // === GERENTE DE OPERAÇÕES ===
  "kanban-manager-1": {
    id: "kanban-manager-1",
    text: `<strong>Crise de Lead Time - Decisão Estratégica</strong><br><br>
<strong>Situação crítica desta manhã:</strong><br>
Cliente VIP (20% do faturamento) ameaça cancelar contrato devido a atrasos constantes. Pedido dele está há 8 dias em "Análise de Crédito" por causa de um backlog de 200 pedidos acumulados.<br><br>
<strong>Dados preocupantes coletados:</strong><br>
• Análise de Crédito: 3 pessoas, 200 pedidos em fila<br>
• Separação: 2 pessoas, 50 pedidos aguardando<br>
• Expedição: 2 pessoas, praticamente ociosas<br>
• Aprovação: 1 pessoa, 15 minutos por pedido<br><br>
<strong>Pressões conflitantes:</strong><br>
• CEO: "Precisamos processar mais pedidos por dia!"<br>
• Comercial: "Clientes não podem esperar 12 dias!"<br>
• Financeiro: "Análise de crédito é obrigatória!"<br>
• Logística: "Não temos espaço para mais estoque!"<br><br>
<strong>Como Gerente, sua primeira ação Kanban para resolver a crise:</strong>`,
    tag: "wip-limits-crisis",
    choices: [
      { text: "Implementar limites WIP imediatamente baseado na capacidade real", next: "kanban-manager-wip-success" },
      { text: "Contratar mais pessoas para Análise de Crédito", next: "kanban-manager-hire-fail" },
      { text: "Criar fila express para clientes VIP", next: "kanban-manager-express-fail" },
      { text: "Análise detalhada do fluxo de valor antes de mudanças", next: "kanban-manager-analysis" }
    ]
  },

  "kanban-manager-wip-success": {
    id: "kanban-manager-wip-success",
    text: `<strong>Implementação Imediata de Limites WIP - Transformação Radical</strong><br><br>
<strong>Análise rápida da capacidade real:</strong><br>
• Análise de Crédito: 3 pessoas × 25 pedidos/dia = 75 pedidos (WIP: 75)<br>
• Aprovação: 1 pessoa × 30 pedidos/dia = 30 pedidos (WIP: 30)<br>
• Separação: 2 pessoas × 40 pedidos/dia = 80 pedidos (WIP: 80)<br>
• Expedição: 2 pessoas × 100 pedidos/dia = 100 pedidos (WIP: 100)<br><br>
<strong>Implementação do sistema com limites WIP:</strong><br>
| Pedidos (∞) | Análise (75) | Aprovação (30) | Separação (80) | Expedição (100) | Entregue |<br><br>
<strong>Resultado na primeira semana - Efeito Dramático:</strong><br>
• Lead time reduziu de 12 para 8 dias imediatamente<br>
• Gargalo de Aprovação identificado claramente<br>
• Análise de Crédito parou de acumular trabalho<br>
• Fluxo tornou-se visível para toda equipe<br>
• Cliente VIP teve pedido processado em 6 dias<br><br>
<strong>Insights revelados pelo sistema:</strong><br>
• Aprovação é o verdadeiro gargalo (30 vs 75 capacidade)<br>
• Expedição tinha capacidade ociosa de 20%<br>
• 60% dos atrasos vinham de retrabalho por informações incompletas<br><br>
<strong>Próxima fase - Otimização do Gargalo:</strong>`,
    tag: "flow-optimization",
    choices: [
      { text: "Melhorar processo de Aprovação com automação", next: "kanban-manager-automation" },
      { text: "Treinar mais uma pessoa em Aprovação", next: "kanban-manager-cross-training" },
      { text: "Implementar classes de serviço por tipo de cliente", next: "kanban-manager-service-classes" }
    ]
  },

  "kanban-manager-automation": {
    id: "kanban-manager-automation",
    text: `<strong>Automação do Processo de Aprovação - Revolução Digital</strong><br><br>
<strong>Sistema automatizado implementado:</strong><br>
• Aprovação automática para pedidos < R$ 5.000 (70% dos casos)<br>
• Validação automática de dados de cliente via API<br>
• Alerts automáticos para casos que precisam revisão manual<br>
• Dashboard em tempo real do status de cada pedido<br><br>
<strong>Resultados extraordinários em 30 dias:</strong><br>
• Lead time médio: 12 dias → 4 dias (67% de melhoria)<br>
• Throughput: 300 → 450 pedidos/dia (50% de aumento)<br>
• Aprovação automática: 70% dos pedidos<br>
• Tempo manual de aprovação: 15 → 5 minutos<br>
• Satisfação do cliente: 60% → 85%<br><br>
<strong>6 meses depois - Transformação Completa:</strong><br>
• Lead time estabilizado em 3-4 dias<br>
• Capacidade para 600+ pedidos/dia sem contratar<br>
• Sistema Kanban replicado em outras operações<br>
• ROI da automação: 300% no primeiro ano<br>
• Você promovido a Diretor de Operações<br><br>
<strong>Cliente VIP (agora satisfeito):</strong><br>
"Vocês transformaram completamente a experiência. De 12 dias para 3 dias é impressionante. Vamos dobrar nossos pedidos com vocês!"`,
    explanation: `Implementação exemplar dos princípios fundamentais do Kanban conforme Kanban University:<br><br>
• <strong>Visualizar o Trabalho</strong> - Board Kanban tornou gargalos visíveis imediatamente<br>
• <strong>Limitar o Trabalho em Progresso (WIP)</strong> - Reduziu multitasking e aumentou fluxo<br>
• <strong>Gerenciar o Fluxo</strong> - Foco na otimização do gargalo real (Aprovação)<br>
• <strong>Tornar Políticas Explícitas</strong> - Automação criou regras claras e consistentes<br>
• <strong>Implementar Ciclos de Feedback</strong> - Dashboard em tempo real<br>
• <strong>Melhorar Colaborativamente</strong> - Evolução baseada em dados e métricas<br><br>
Esta abordagem demonstra como Kanban Method permite evolução gradual sem mudanças disruptivas. A combinação de limites WIP com automação inteligente otimizou o sistema respeitando constraints existentes. O resultado valida que Kanban é sobre melhoria contínua baseada em evidências, não apenas visualização.`,
    references: [
      "Kanban Method - David J. Anderson: Gerenciamento de fluxo e otimização de gargalos",
      "Kanban University: Princípios fundamentais de limitação WIP e melhoria contínua",
      "Essential Kanban Condensed - David J. Anderson: Classes de serviço e automação de políticas"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-manager-cross-training": {
    id: "kanban-manager-cross-training",
    text: `<strong>Cross-Training para Expandir Capacidade</strong><br><br>
<strong>Programa de treinamento implementado:</strong><br>
• Pessoa da Separação treinada em Aprovação<br>
• Conhecimento compartilhado entre equipes<br>
• Flexibilidade para flutuação de demanda<br>
• Backup para ausências e férias<br><br>
<strong>Resultados do cross-training (2 meses):</strong><br>
• Capacidade de Aprovação: 30 → 45 pedidos/dia<br>
• Lead time: 12 → 7 dias<br>
• Flexibilidade aumentada significativamente<br>
• Equipe mais engajada e multifuncional<br><br>
<strong>Benefícios adicionais observados:</strong><br>
• Melhor compreensão do processo end-to-end<br>
• Identificação de melhorias por diferentes perspectivas<br>
• Redução de handoffs desnecessários<br>
• Maior autonomia da equipe<br><br>
<strong>Evolução para sistema mais resiliente:</strong><br>
• Sistema pode adaptar-se a variações de demanda<br>
• Conhecimento não fica concentrado em uma pessoa<br>
• Base sólida para futuras otimizações<br>
• Cultura de melhoria contínua estabelecida`,
    explanation: `Aplicação efetiva do princípio Kanban de capacidade flexível:<br><br>
• <strong>T-shaped Skills</strong> - Pessoas com conhecimento profundo e amplo<br>
• <strong>Sistema Resiliente</strong> - Capacidade de absorver variações<br>
• <strong>Eliminação de Gargalos Humanos</strong> - Conhecimento distribuído<br>
• <strong>Melhoria Colaborativa</strong> - Diferentes perspectivas geram insights<br><br>
Cross-training é strategy fundamental para sistemas Kanban sustentáveis. Permite que sistema se adapte a mudanças sem quebrar fluxo.`,
    references: [
      "Kanban Method: T-shaped skills e capacidade adaptável",
      "Kanban University: Building resilient systems through cross-training",
      "Lean thinking: Eliminação de gargalos através de flexibilidade"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-manager-service-classes": {
    id: "kanban-manager-service-classes",
    text: `<strong>Classes de Serviço por Tipo de Cliente</strong><br><br>
<strong>Sistema de classes implementado:</strong><br>
• <strong>Expedite:</strong> Clientes VIP - SLA 2 dias<br>
• <strong>Standard:</strong> Clientes regulares - SLA 6 dias<br>
• <strong>Intangible:</strong> Pedidos internos - SLA 10 dias<br>
• <strong>Fixed Date:</strong> Eventos especiais - data fixa<br><br>
<strong>Políticas de priorização definidas:</strong><br>
• Expedite sempre tem prioridade máxima<br>
• Fixed Date respeitam deadline específico<br>
• Standard processa por FIFO<br>
• Intangible usa capacidade ociosa<br><br>
<strong>Resultados do sistema de classes:</strong><br>
• Clientes VIP: 12 → 2 dias (83% melhoria)<br>
• Clientes regulares: 12 → 6 dias (50% melhoria)<br>
• Predictibilidade aumentou drasticamente<br>
• Satisfação segmentada por valor do cliente<br><br>
<strong>Impacto no negócio:</strong><br>
• Retenção de clientes VIP: 95%<br>
• Upsell para categoria VIP aumentou 40%<br>
• Reclamações reduziram 60%<br>
• Revenue por cliente aumentou 25%`,
    explanation: `Implementação sofisticada de Classes de Serviço do Kanban Method:<br><br>
• <strong>Risk Management</strong> - Diferentes classes gerenciam diferentes riscos<br>
• <strong>Economic Model</strong> - Alinhamento com valor econômico do cliente<br>
• <strong>Predictability</strong> - SLAs específicos por classe<br>
• <strong>Customer Satisfaction</strong> - Expectativas alinhadas com capacidade<br><br>
Classes de serviço permitem otimização econômica do fluxo, priorizando trabalho de maior valor.`,
    references: [
      "Kanban Method - Classes of Service para otimização econômica",
      "Kanban University: Service Level Agreements e risk management",
      "Essential Kanban: Economic prioritization através de classes"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-manager-hire-fail": {
    id: "kanban-manager-hire-fail",
    text: `<strong>Contratação sem Análise do Sistema - Desperdício de Recursos</strong><br><br>
<strong>Decisão de contratar 2 analistas adicionais:</strong><br>
• Investimento: R$ 15.000/mês em salários<br>
• Tempo de contratação: 6 semanas<br>
• Treinamento: 4 semanas adicionais<br>
• Total: 10 semanas para impacto<br><br>
<strong>Resultado após 3 meses:</strong><br>
• Análise de Crédito: fila zerada<br>
• Aprovação: ainda gargalo com 200 pedidos acumulados<br>
• Lead time: 12 → 10 dias (melhoria marginal)<br>
• Custo adicional sem ROI proporcional<br><br>
<strong>Problemas criados:</strong><br>
• Gargalo apenas se moveu para próxima etapa<br>
• Aumento de custo operacional<br>
• Complexidade de gerenciamento aumentou<br>
• Sistema continua instável<br><br>
<strong>Lição aprendida:</strong><br>
Contratar pessoas sem entender o sistema completo apenas desloca problemas e aumenta custos sem resolver a causa raiz.`,
    explanation: `Falha em aplicar pensamento sistêmico fundamental do Kanban:<br><br>
• <strong>Theory of Constraints Ignorada</strong> - Expandir non-constraint não melhora sistema<br>
• <strong>Local Optimization</strong> - Otimizar parte sem ver todo<br>
• <strong>Waste Creation</strong> - Recursos adicionais sem value stream analysis<br>
• <strong>Root Cause Missing</strong> - Sintoma tratado, causa ignorada<br><br>
Kanban Method emphasiza entender sistema antes de fazer mudanças. Contratar sem analysis é anti-pattern comum que aumenta custos sem melhorar flow.`,
    references: [
      "Theory of Constraints - Eliyahu Goldratt: Gargalos determinam capacidade do sistema",
      "Kanban Method: System thinking antes de local optimization",
      "Lean Manufacturing: Waste elimination através de value stream analysis"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-manager-express-fail": {
    id: "kanban-manager-express-fail",
    text: `<strong>Fila Express para VIPs - Criando Mais Problemas</strong><br><br>
<strong>Sistema implementado:</strong><br>
• Fila separada para clientes VIP<br>
• Prioridade máxima sobre demais pedidos<br>
• Interrupção do trabalho regular<br>
• "Fast-track" sem análise de capacidade<br><br>
<strong>Consequências após 1 mês:</strong><br>
• Clientes VIP: 12 → 6 dias (melhorou)<br>
• Clientes regulares: 12 → 18 dias (piorou)<br>
• Sistema tornou-se mais imprevisível<br>
• Equipe frustrada com constantes interrupções<br>
• Multitasking aumentou drasticamente<br><br>
<strong>Efeitos colaterais graves:</strong><br>
• 40% dos clientes regulares reclamaram<br>
• Rotatividade da equipe aumentou<br>
• Qualidade diminuiu devido a pressão<br>
• Sistema mais complexo e instável<br><br>
<strong>Cliente regular (agora ex-cliente):</strong><br>
"Se nós não somos VIP, encontraremos outro fornecedor que nos trate adequadamente."`,
    explanation: `Violação dos princípios fundamentais do Kanban Method:<br><br>
• <strong>WIP Limits Ignored</strong> - Sistema permitiu trabalho ilimitado<br>
• <strong>Flow Disruption</strong> - Interrupções constantes quebram ritmo<br>
• <strong>System Sub-optimization</strong> - Melhorar para alguns, piorar para maioria<br>
• <strong>Multitasking Waste</strong> - Context switching reduz produtividade<br><br>
Express lanes sem proper design criam more problems que solve. Kanban emphasiza flow para todo sistema, não optimization local.`,
    references: [
      "Kanban Method: Flow optimization para todo o sistema",
      "Kanban University: Avoiding local optimization traps",
      "Lean Principles: Respect for people e system thinking"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-manager-analysis": {
    id: "kanban-manager-analysis",
    text: `<strong>Análise Detalhada do Fluxo de Valor</strong><br><br>
<strong>Value Stream Mapping realizado (2 semanas):</strong><br>
• Mapeamento de cada etapa do processo<br>
• Medição de tempos de ciclo reais<br>
• Identificação de handoffs desnecessários<br>
• Análise de variação e causas de delay<br><br>
<strong>Descobertas importantes:</strong><br>
• 60% do tempo é wait time, não work time<br>
• Retrabalho por informações incompletas: 30%<br>
• Aprovação manual poderia ser 70% automatizada<br>
• Expedição tem capacidade ociosa de 40%<br><br>
<strong>Insights revelados:</strong><br>
• Problemas de qualidade upstream causam delays downstream<br>
• Informações chegam incompletas do comercial<br>
• Sistema ERP não integrado com processo<br><br>
<strong>Plano de melhoria baseado em dados:</strong><br>
• Implementação gradual e medida<br>
• Quick wins identificados<br>
• ROI projetado para cada mudança<br>
• Riscos mapeados e mitigados`,
    tag: "value-stream-analysis",
    choices: [
      { text: "Implementar melhorias baseadas na análise", next: "kanban-manager-data-driven" },
      { text: "Focar nos quick wins primeiro", next: "kanban-manager-quick-wins" }
    ]
  },

  "kanban-manager-data-driven": {
    id: "kanban-manager-data-driven",
    text: `<strong>Implementação de Melhorias Baseadas em Dados</strong><br><br>
<strong>Roadmap de melhorias implementado:</strong><br>
• Fase 1: Qualidade upstream (reduzir retrabalho)<br>
• Fase 2: Automação de aprovações simples<br>
• Fase 3: Integração de sistemas<br>
• Fase 4: Balanceamento de capacidade<br><br>
<strong>Resultados progressivos (6 meses):</strong><br>
• Lead time: 12 → 5 dias (60% melhoria)<br>
• Retrabalho: 30% → 8%<br>
• Throughput: 300 → 480 pedidos/dia<br>
• Satisfação da equipe: 70% → 90%<br><br>
<strong>Sistema Kanban maduro estabelecido:</strong><br>
• Métricas coletadas automaticamente<br>
• Melhoria contínua institucionalizada<br>
• Equipe autogerenciada<br>
• Previsibilidade de 95% nos SLAs<br><br>
<strong>Reconhecimento organizacional:</strong><br>
• Caso de sucesso replicado em outras áreas<br>
• Metodologia virou padrão da empresa<br>
• Você se tornou referência em transformação Kanban`,
    explanation: `Implementação exemplar de transformation baseada em Kanban Method:<br><br>
• <strong>Data-Driven Decisions</strong> - Todas mudanças baseadas em evidências<br>
• <strong>Gradual Evolution</strong> - Mudanças incrementais sem disruption<br>
• <strong>System Thinking</strong> - Visão holística do value stream<br>
• <strong>Continuous Improvement</strong> - Kaizen institucionalizado<br><br>
Esta approach demonstra maturity em Kanban implementation. Value stream analysis seguido de improvement roadmap é gold standard para transformations.`,
    references: [
      "Kanban Method - David J. Anderson: Value stream mapping e data-driven improvement",
      "Kanban University: Gradual evolution principles",
      "Lean Value Streams: System optimization através de evidências"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-manager-quick-wins": {
    id: "kanban-manager-quick-wins",
    text: `<strong>Estratégia de Quick Wins para Momentum</strong><br><br>
<strong>Quick wins implementados (primeiras 4 semanas):</strong><br>
• Checklist padrão para pedidos completos<br>
• Dashboard visual em tempo real<br>
• Limites WIP básicos implementados<br>
• Reunião diária de 15 minutos para blockers<br><br>
<strong>Resultados imediatos:</strong><br>
• Lead time: 12 → 9 dias<br>
• Pedidos incompletos: 30% → 15%<br>
• Visibilidade do fluxo: 100%<br>
• Engagement da equipe aumentou<br><br>
<strong>Momentum criado:</strong><br>
• Equipe vê valor das mudanças<br>
• Resistência diminuiu significativamente<br>
• Confiança na metodologia estabelecida<br>
• Base para mudanças maiores criada<br><br>
<strong>Próximas fases já aceitas pela equipe:</strong><br>
• Automação vista como próximo passo natural<br>
• Investimento em ferramentas aprovado<br>
• Cultura de melhoria contínua nascendo`,
    explanation: `Strategy inteligente de change management através de quick wins:<br><br>
• <strong>Momentum Building</strong> - Sucessos pequenos geram confiança<br>
• <strong>Change Resistance Reduction</strong> - Valor demonstrado reduz resistência<br>
• <strong>Foundation Setting</strong> - Quick wins criam base para mudanças maiores<br>
• <strong>Team Engagement</strong> - Envolvimento aumenta através de resultados visíveis<br><br>
Quick wins são essential para sustainable Kanban transformations. Demonstram value early e build confidence para changes mais significativas.`,
    references: [
      "Change Management: Building momentum through early wins",
      "Kanban Method: Gradual change starting with non-disruptive improvements",
      "Lean Transformation: Quick wins as foundation for continuous improvement"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  // === ANALISTA DE PROCESSOS ===
  "kanban-analyst-1": {
    id: "kanban-analyst-1",
    text: `<strong>Análise Profunda de Processo - Descobrindo a Realidade</strong><br><br>
<strong>Sua missão como Analista:</strong> Mapear detalhadamente o processo atual para identificar desperdícios e gargalos antes de implementar qualquer mudança.<br><br>
<strong>Primeira semana de observação revelou:</strong><br>
• <strong>Tempo de Ciclo Real vs Teórico:</strong><br>
  - Análise de Crédito: 2h teórico vs 8h real<br>
  - Aprovação: 15min teórico vs 4h real<br>
  - Separação: 1h teórico vs 3h real<br>
  - Expedição: 30min teórico vs 2h real<br><br>
<strong>Causas dos atrasos identificadas:</strong><br>
• 40% dos pedidos retornam por informações incompletas<br>
• Sistema ERP trava 3x por dia (2h de downtime total)<br>
• Aprovador está em reuniões 60% do tempo<br>
• Separação aguarda liberação de estoque do WMS<br>
• Expedição espera documentos fiscais<br><br>
<strong>Padrões de fluxo descobertos:</strong><br>
• Picos de entrada: segunda-feira (300 pedidos) e sexta-feira (200 pedidos)<br>
• Vale na quarta-feira (80 pedidos)<br>
• Variação diária: 80-300 pedidos<br><br>
<strong>Sua estratégia de análise mais profunda:</strong>`,
    tag: "process-analysis",
    choices: [
      { text: "Medir tempos de espera vs tempo de trabalho detalhadamente", next: "kanban-analyst-wait-time" },
      { text: "Mapear dependências e handoffs entre etapas", next: "kanban-analyst-dependencies" },
      { text: "Analisar variabilidade e suas causas raiz", next: "kanban-analyst-variability" },
      { text: "Focar na qualidade dos inputs (pedidos incompletos)", next: "kanban-analyst-quality" }
    ]
  },

  "kanban-analyst-wait-time": {
    id: "kanban-analyst-wait-time",
    text: `<strong>Análise Detalhada: Tempo de Espera vs Trabalho</strong><br><br>
<strong>Metodologia aplicada (2 semanas de medição):</strong><br>
• Rastreamento individual de 100 pedidos<br>
• Timestamping de cada transição<br>
• Categorização de todos os tempos de espera<br>
• Análise estatística dos padrões<br><br>
<strong>Descoberta chocante - Breakdown do Lead Time (12 dias):</strong><br>
• <strong>Tempo de Trabalho Real: 4,2 horas (2,4%)</strong><br>
• <strong>Tempo de Espera: 283,8 horas (97,6%)</strong><br><br>
<strong>Detalhamento dos tempos de espera:</strong><br>
• Fila na Análise de Crédito: 156h (55%)<br>
• Aguardando aprovador disponível: 72h (25%)<br>
• Esperando liberação de estoque: 24h (8%)<br>
• Documentos fiscais: 18h (6%)<br>
• Outros atrasos: 13,8h (6%)<br><br>
<strong>Insights revolucionários:</strong><br>
• Sistema não tem problema de capacidade de trabalho<br>
• Problema é 97% logístico/organizacional<br>
• Filas são o verdadeiro inimigo<br>
• WIP limits poderiam transformar tudo<br><br>
<strong>Recomendação baseada em dados:</strong><br>
Implementar sistema Kanban focado em flow, não em productivity individual.`,
    tag: "flow-analysis",
    choices: [
      { text: "Propor sistema Kanban com foco total em flow", next: "kanban-analyst-flow-system" },
      { text: "Apresentar dados para convencer gestão", next: "kanban-analyst-data-presentation" }
    ]
  },

  "kanban-analyst-flow-system": {
    id: "kanban-analyst-flow-system",
    text: `<strong>Sistema Kanban Focado em Flow - Revolução Baseada em Dados</strong><br><br>
<strong>Design do sistema baseado na análise:</strong><br>
• WIP limits calculados matematicamente<br>
• Foco em reduzir wait time, não work time<br>
• Métricas de flow como KPIs principais<br>
• Políticas explícitas para handoffs<br><br>
<strong>Implementação com base científica:</strong><br>
• Lead Time como métrica #1<br>
• Little's Law aplicado para WIP limits<br>
• Flow efficiency como indicador de saúde<br>
• Throughput medido diariamente<br><br>
<strong>Resultados extraordinários (3 meses):</strong><br>
• Lead time: 12 → 3,5 dias (70% redução)<br>
• Flow efficiency: 2,4% → 35%<br>
• Throughput: 300 → 520 pedidos/dia<br>
• Variabilidade: ±8 dias → ±1 dia<br><br>
<strong>Transformação cultural:</strong><br>
• Equipe focada em flow, não busy work<br>
• Métricas compartilhadas por todos<br>
• Melhoria contínua baseada em dados<br>
• Sistema auto-organizável estabelecido<br><br>
<strong>Reconhecimento profissional:</strong><br>
• Case study apresentado em conferência Lean<br>
• Metodologia adotada corporativamente<br>
• Você promovido a Especialista em Flow`,
    explanation: `Aplicação magistral dos princípios científicos do Kanban Method:<br><br>
• <strong>Little's Law</strong> - WIP = Throughput × Lead Time, aplicado corretamente<br>
• <strong>Flow Efficiency</strong> - Métrica fundamental para system health<br>
• <strong>Scientific Method</strong> - Decisões baseadas em measurement e analysis<br>
• <strong>System Optimization</strong> - Foco no whole, não nas partes<br><br>
Esta approach demonstra maturity máxima em process analysis e Kanban implementation. O uso de data science para design de sistema é exemplar na literatura Kanban.`,
    references: [
      "Kanban Method - David J. Anderson: Little's Law e flow efficiency",
      "Kanban University: Scientific approach para system design",
      "This is Lean - Niklas Modig: Flow efficiency como core metric"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-analyst-data-presentation": {
    id: "kanban-analyst-data-presentation",
    text: `<strong>Apresentação de Dados para Convencer Gestão</strong><br><br>
<strong>Apresentação executiva preparada:</strong><br>
• Dashboard com métricas visuais impactantes<br>
• ROI projetado com implementação Kanban<br>
• Benchmark com empresas similares<br>
• Roadmap de implementação gradual<br><br>
<strong>Reação da gestão:</strong><br>
• CFO: "97,6% de waste? Isso não é aceitável!"<br>
• CEO: "Se outros conseguem 3 dias, por que nós não?"<br>
• Diretor: "Quais investimentos precisamos fazer?"<br>
• Aprovação unânime para transformação<br><br>
<strong>Recursos liberados:</strong><br>
• Budget para ferramentas e treinamento<br>
• Tempo protegido para implementação<br>
• Support executivo total<br>
• Autoridade para mudanças necessárias<br><br>
<strong>Implementação acelerada:</strong><br>
• Transformação completa em 6 meses<br>
• Resultados superaram projeções<br>
• Você lidera expansion para outras áreas<br>
• Metodologia vira padrão corporativo`,
    explanation: `Excelente strategy de change management através de data storytelling:<br><br>
• <strong>Evidence-Based Persuasion</strong> - Dados compelling para convince stakeholders<br>
• <strong>Executive Alignment</strong> - Business case clear e actionable<br>
• <strong>Resource Securing</strong> - Support necessário para success<br>
• <strong>Organizational Change</strong> - Foundation para wide adoption<br><br>
Data-driven approach é crucial para Kanban transformations. Executive buy-in accelerates implementation e removes barriers.`,
    references: [
      "Change Management: Data storytelling para executive persuasion",
      "Kanban Method: Business case development e ROI calculation",
      "Organizational Transformation: Securing executive sponsorship"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-analyst-dependencies": {
    id: "kanban-analyst-dependencies",
    text: `<strong>Mapeamento de Dependências e Handoffs</strong><br><br>
<strong>Análise de dependências revelou:</strong><br>
• 15 sistemas diferentes envolvidos no processo<br>
• 23 handoffs entre pessoas/sistemas<br>
• 8 aprovações manuais redundantes<br>
• 12 integrações que falham regularmente<br><br>
<strong>Dependências críticas identificadas:</strong><br>
• ERP → WMS (falha 3x/dia)<br>
• Aprovador manual (bottleneck humano)<br>
• Sistema fiscal (batch processing 1x/dia)<br>
• Validação de crédito externa (SLA 4h)<br><br>
<strong>Redesign proposto:</strong><br>
• Redução de 23 para 8 handoffs<br>
• Automação de 6 aprovações redundantes<br>
• Buffer strategy para system failures<br>
• Parallel processing onde possível<br><br>
<strong>Resultado do redesign:</strong><br>
• Lead time reduziu 60%<br>
• System reliability aumentou<br>
• Process simplificado drasticamente<br>
• Team confusion eliminated`,
    explanation: `Analysis excelente de system dependencies e complexity reduction:<br><br>
• <strong>Dependency Mapping</strong> - Visualização de system interactions<br>
• <strong>Handoff Reduction</strong> - Simplification através de automation<br>
• <strong>Failure Mode Analysis</strong> - Planning para system failures<br>
• <strong>Process Redesign</strong> - Streamlining baseado em analysis<br><br>
Dependency analysis é advanced Kanban technique para complex systems. Reduction de handoffs é key para flow improvement.`,
    references: [
      "Kanban Method: Dependency management e system design",
      "Value Stream Mapping: Handoff analysis e reduction",
      "Systems Thinking: Complex system optimization"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-analyst-variability": {
    id: "kanban-analyst-variability",
    text: `<strong>Análise de Variabilidade e Causas Raiz</strong><br><br>
<strong>Variabilidade medida e categorizada:</strong><br>
• Volume de entrada: CV = 0.8 (alta variabilidade)<br>
• Tempo de processamento: CV = 1.2 (extrema variabilidade)<br>
• Complexity de pedidos: 3 categorias principais<br>
• External factors: sazonalidade e promoções<br><br>
<strong>Causas raiz da variabilidade:</strong><br>
• Lack de standard work procedures<br>
• Different skill levels entre team members<br>
• System performance inconsistencies<br>
• Customer behavior patterns<br><br>
<strong>Strategy para manage variability:</strong><br>
• Classes de serviço por complexity<br>
• Buffer management inteligente<br>
• Skill standardization através de training<br>
• Demand smoothing policies<br><br>
<strong>Resultado da variability management:</strong><br>
• Predictability aumentou drasticamente<br>
• SLA compliance: 95%<br>
• System stability melhorou<br>
• Customer satisfaction aumentou`,
    explanation: `Advanced analysis de variability management em Kanban systems:<br><br>
• <strong>Statistical Analysis</strong> - Coefficient of variation para measure variability<br>
• <strong>Root Cause Analysis</strong> - Systematic identification de variability sources<br>
• <strong>Variability Reduction</strong> - Multiple strategies para manage uncertainty<br>
• <strong>Predictable Delivery</strong> - Outcome de effective variability management<br><br>
Variability é enemy de flow. Managing variability é advanced skill em Kanban practice.`,
    references: [
      "Kanban Method: Variability management e predictable delivery",
      "Statistical Process Control: Measuring e reducing variability",
      "Lean Manufacturing: Standard work para consistency"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-analyst-quality": {
    id: "kanban-analyst-quality",
    text: `<strong>Foco na Qualidade dos Inputs - Prevenção de Defeitos</strong><br><br>
<strong>Análise de qualidade de pedidos:</strong><br>
• 40% pedidos incompletos/incorretos<br>
• 25% missing informações críticas<br>
• 15% dados inconsistentes<br>
• 60% requer rework downstream<br><br>
<strong>Root cause analysis revelou:</strong><br>
• Sales team sem training adequado<br>
• Customer portal confuso<br>
• Validation rules inexistentes<br>
• Feedback loop broken entre sales e operations<br><br>
<strong>Quality improvement program:</strong><br>
• Automated validation no customer portal<br>
• Sales training comprehensive<br>
• Real-time feedback para sales team<br>
• Quality metrics como KPI<br><br>
<strong>Resultado da quality initiative:</strong><br>
• Pedidos incompletos: 40% → 5%<br>
• Rework: 60% → 10%<br>
• First-time-right: 60% → 95%<br>
• Overall lead time reduziu 50%<br><br>
<strong>Cultural transformation:</strong><br>
• Quality mindset em toda organization<br>
• Prevention over correction<br>
• Continuous feedback loops<br>
• Customer-centric focus`,
    explanation: `Foco exemplar em quality at source, principle fundamental do Lean/Kanban:<br><br>
• <strong>Quality at Source</strong> - Prevention de defeitos upstream<br>
• <strong>First Time Right</strong> - Eliminating rework através de quality<br>
• <strong>Feedback Loops</strong> - Continuous improvement através de information flow<br>
• <strong>System Thinking</strong> - Understanding impact de quality em entire value stream<br><br>
Quality improvement upstream tem multiplicative effect downstream. É often mais effective que optimizing individual steps.`,
    references: [
      "Lean Manufacturing: Quality at source e poka-yoke",
      "Kanban Method: Upstream quality improvement",
      "Six Sigma: Defect prevention strategies"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  // === COORDENADOR DE EQUIPE ===
  "kanban-coordinator-1": {
    id: "kanban-coordinator-1",
    text: `<strong>Caos na Equipe - Gestão de Pessoas e Processo</strong><br><br>
<strong>Situação crítica da equipe hoje:</strong><br>
• João (Análise): "Não aguento mais essa pressão, todo pedido é urgente!"<br>
• Maria (Aprovação): "Fico o dia todo em reunião, não consigo aprovar nada"<br>
• Carlos (Separação): "Sistema trava toda hora, perco 2 horas por dia"<br>
• Ana (Expedição): "Ficamos ociosos enquanto separação está lotada"<br><br>
<strong>Dinâmica tóxica observada:</strong><br>
• Blame game entre setores<br>
• Cada um otimizando sua parte isoladamente<br>
• Comunicação acontece só em crises<br>
• Métricas individuais conflitantes<br>
• Burnout generalizado<br><br>
<strong>Pressões externas:</strong><br>
• Gerência cobrando "produtividade individual"<br>
• Clientes escalando reclamações<br>
• Cada setor tem metas conflitantes<br>
• Urgências constantes quebram qualquer planejamento<br><br>
<strong>Como Coordenador, sua abordagem para transformar a dinâmica:</strong>`,
    tag: "team-dynamics",
    choices: [
      { text: "Implementar reuniões diárias de fluxo (standup Kanban)", next: "kanban-coordinator-standup" },
      { text: "Criar métricas compartilhadas de equipe", next: "kanban-coordinator-metrics" },
      { text: "Organizar workshop de visualização do trabalho", next: "kanban-coordinator-visualization" },
      { text: "Estabelecer acordos de trabalho em equipe", next: "kanban-coordinator-agreements" }
    ]
  },

  "kanban-coordinator-standup": {
    id: "kanban-coordinator-standup",
    text: `<strong>Reuniões Diárias de Fluxo - Transformação da Comunicação</strong><br><br>
<strong>Format da reunião implementado (15 min diários):</strong><br>
• Não é status individual, é status do fluxo<br>
• Focus: "O que está impedindo nosso flow?"<br>
• Walk the board da direita para esquerda<br>
• Identify blockers e aging work items<br>
• Collective problem solving<br><br>
<strong>Primeira semana - Mudança dramática:</strong><br>
• João: "Não sabia que Maria estava sobrecarregada"<br>
• Maria: "Carlos pode me ajudar com aprovações simples"<br>
• Carlos: "Ana pode preparar documentos enquanto separo"<br>
• Ana: "Posso ajudar na conferência para acelerar"<br><br>
<strong>Resultados após 1 mês:</strong><br>
• Blockers identificados em avg 4 horas vs 2 dias<br>
• Colaboração cross-functional emergiu naturalmente<br>
• Blame culture → problem-solving culture<br>
• Lead time reduziu 35% só com comunicação<br><br>
<strong>6 meses depois - Equipe Autogerenciada:</strong><br>
• Team identifica e resolve problemas autonomamente<br>
• Continuous improvement ideas vêm da team<br>
• Manager role mudou de controller para enabler<br>
• Employee satisfaction aumentou 80%`,
    explanation: `Transformação cultural exemplar através de Kanban practices:<br><br>
• <strong>Flow-Focused Communication</strong> - Standup focus em system flow, não individual status<br>
• <strong>Collective Problem Solving</strong> - Team ownership de blockers e solutions<br>
• <strong>Visual Management</strong> - Walking the board creates shared understanding<br>
• <strong>Self-Organization</strong> - Team develops problem-solving capabilities<br><br>
Daily standups no Kanban são diferentes de Scrum - focus é em flow optimization e blocker resolution, não status reporting.`,
    references: [
      "Kanban Method: Flow-focused standups e daily management",
      "Kanban University: Visual management e team communication",
      "Essential Kanban: Daily operations e continuous flow"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-coordinator-metrics": {
    id: "kanban-coordinator-metrics",
    text: `<strong>Métricas Compartilhadas de Equipe</strong><br><br>
<strong>Transição de métricas individuais para sistema:</strong><br>
• OLD: João - pedidos analisados/dia<br>
• NEW: Team Lead Time pedido → entrega<br>
• OLD: Maria - aprovações/hora<br>
• NEW: Team Throughput (pedidos completos/dia)<br>
• OLD: Carlos - itens separados<br>
• NEW: Team Flow Efficiency<br><br>
<strong>Dashboard compartilhado criado:</strong><br>
• Lead time trend (objetivo: < 6 dias)<br>
• Throughput diário (objetivo: 400 pedidos)<br>
• WIP por etapa (limites definidos)<br>
• Blockers aging (objetivo: < 24h)<br><br>
<strong>Transformação comportamental:</strong><br>
• Team passa a otimizar flow conjunto<br>
• Ajuda mútua aumenta naturalmente<br>
• Celebração de sucessos compartilhados<br>
• Problem-solving coletivo<br><br>
<strong>Resultado das métricas compartilhadas:</strong><br>
• Silo mentality eliminada<br>
• Collaboration triplicou<br>
• Performance geral melhorou 60%<br>
• Team satisfaction aumentou significativamente`,
    explanation: `Alinhamento perfeito com systems thinking do Kanban Method:<br><br>
• <strong>System Metrics</strong> - Focus em outcomes de todo o system<br>
• <strong>Shared Accountability</strong> - Team ownership de results coletivos<br>
• <strong>Behavior Alignment</strong> - Metrics drive collaborative behavior<br>
• <strong>Flow Optimization</strong> - Individual actions aligned com system performance<br><br>
Shared metrics são powerful tool para culture transformation. Eliminam local optimization e promote system thinking.`,
    references: [
      "Kanban Method: System-level metrics e shared accountability",
      "Kanban University: Team performance measurement",
      "Lean Metrics: Flow-based measurement systems"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-coordinator-visualization": {
    id: "kanban-coordinator-visualization",
    text: `<strong>Workshop de Visualização do Trabalho</strong><br><br>
<strong>Workshop de 4 horas com toda equipe:</strong><br>
• Mapeamento conjunto do processo atual<br>
• Identificação de trabalho "invisível"<br>
• Design colaborativo do board Kanban<br>
• Definição de políticas visuais<br><br>
<strong>Descobertas durante workshop:</strong><br>
• 40% do trabalho não estava visível<br>
• Handoffs eram mais complexos que imaginado<br>
• Diferentes entendimentos do mesmo processo<br>
• Oportunidades de melhoria óbvias emergem<br><br>
<strong>Board Kanban co-criado:</strong><br>
• Colunas definidas pela própria equipe<br>
• Políticas de movimento entre etapas<br>
• Definition of done para cada stage<br>
• Visual indicators para diferentes tipos<br><br>
<strong>Impacto da visualização:</strong><br>
• Shared understanding do processo<br>
• Ownership coletivo do board<br>
• Continuous improvement natural<br>
• Communication gaps eliminated<br><br>
<strong>Evolução do sistema:</strong><br>
• Team refina board semanalmente<br>
• Policies evoluem baseadas em learning<br>
• Visual management expande para outras áreas<br>
• Board torna-se center de team coordination`,
    explanation: `Co-creation exemplar de visual management system:<br><br>
• <strong>Collaborative Design</strong> - Team ownership através de participation<br>
• <strong>Shared Understanding</strong> - Common mental model of process<br>
• <strong>Visual Work</strong> - Making invisible work visible<br>
• <strong>Continuous Evolution</strong> - Living system que evolves com team<br><br>
Workshop approach para board creation é best practice. Ensures buy-in e creates deeper understanding de process complexities.`,
    references: [
      "Kanban Method: Making work visible e collaborative design",
      "Visual Management: Co-creation de visual systems",
      "Team Facilitation: Workshop design para process understanding"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-coordinator-agreements": {
    id: "kanban-coordinator-agreements",
    text: `<strong>Acordos de Trabalho em Equipe</strong><br><br>
<strong>Working agreements estabelecidos:</strong><br>
• "Help downstream before starting new work"<br>
• "Pull, don't push work to next stage"<br>
• "Blockers são priority #1 para toda team"<br>
• "Quality issues voltam para origem"<br>
• "Cross-training é responsibility de todos"<br><br>
<strong>Policies explícitas definidas:</strong><br>
• Definition of ready para cada stage<br>
• Escalation paths para different types de issues<br>
• Communication protocols<br>
• Decision-making authority levels<br><br>
<strong>Resultado dos agreements:</strong><br>
• Conflicts reduziram 90%<br>
• Decision speed aumentou significantly<br>
• Accountability clara estabelecida<br>
• Team self-management emergiu<br><br>
<strong>Culture transformation:</strong><br>
• Psychological safety aumentou<br>
• Innovation e experimentation encouraged<br>
• Learning mindset established<br>
• High-performance team behaviors<br><br>
<strong>Sustainability:</strong><br>
• Agreements revisados mensalmente<br>
• Continuous refinement baseado em experience<br>
• New team members onboarded smoothly<br>
• Practices spread para outras teams`,
    explanation: `Establishment de high-performance team culture através de explicit agreements:<br><br>
• <strong>Explicit Policies</strong> - Clear expectations e behavioral norms<br>
• <strong>Self-Management</strong> - Team authority para make decisions<br>
• <strong>Psychological Safety</strong> - Environment que supports learning e risk-taking<br>
• <strong>Continuous Improvement</strong> - Regular reflection e adaptation<br><br>
Working agreements são foundation para effective Kanban teams. Create clarity, reduce conflicts, e enable self-organization.`,
    references: [
      "Kanban Method: Explicit policies e team agreements",
      "Team Performance: Working agreements e psychological safety",
      "Agile Teams: Self-organization through clear agreements"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  }
};
