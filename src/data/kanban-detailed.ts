
import { StoryGraph } from "../types/game";

export const kanbanDetailed: StoryGraph = {
  "kanban-role": {
    id: "kanban-role",
    text: `<strong>Projeto Real: Sistema de Atendimento ao Cliente</strong><br>
Uma empresa de tecnologia está enfrentando problemas críticos com seu sistema de tickets de suporte. O time de 12 pessoas precisa gerenciar 200+ tickets por semana, mas o processo atual está em completo caos.<br><br>
<strong>Situação atual crítica:</strong><br>
• Backlog: 300 tickets não organizados<br>
• Lead time médio: 15 dias úteis<br>
• 40% dos tickets precisam ser refeitos<br>
• Time trabalha sem visibilidade do fluxo<br>
• Clientes reclamando massivamente<br>
• SLA sendo descumprido em 60% dos casos<br><br>
Você foi chamado para implementar Kanban e transformar este cenário. Qual papel você assume?`,
    choices: [
      { text: "Facilitador/Coach Kanban", next: "kanban-coach-start" },
      { text: "Membro da Equipe", next: "kanban-member-start" },
      { text: "Gerente de Produto", next: "kanban-manager-start" }
    ]
  },

  // === JORNADA DO COACH KANBAN ===
  "kanban-coach-start": {
    id: "kanban-coach-start",
    text: `<strong>Dia 1 - Diagnóstico Profundo</strong><br>
Como Coach Kanban, você precisa entender completamente o fluxo atual antes de implementar mudanças.<br><br>
<strong>Observações detalhadas da primeira semana:</strong><br>
• Desenvolvedores pegam tickets aleatoriamente do pool<br>
• QA tem fila de 25 tickets esperando há mais de 5 dias<br>
• Stakeholders interrompem trabalho constantemente<br>
• Ninguém sabe quantos tickets cada pessoa está trabalhando<br>
• Tickets "urgentes" são criados diariamente<br>
• Handoffs entre áreas demoram 2-3 dias<br><br>
<strong>Conversa reveladora com o gerente:</strong><br>
"Precisamos de mais velocidade! O time está muito lento! Talvez precisemos contratar mais pessoas."<br><br>
<strong>Sua primeira ação estratégica como Coach:</strong>`,
    tag: "kanban-diagnosis",
    choices: [
      { text: "Mapear o fluxo atual com value stream mapping", next: "kanban-coach-mapping" },
      { text: "Implementar quadro Kanban imediatamente", next: "kanban-coach-hasty-fail" },
      { text: "Treinar o time em teoria Kanban primeiro", next: "kanban-coach-theory" },
      { text: "Estabelecer métricas de performance primeiro", next: "kanban-coach-metrics-first" }
    ]
  },

  "kanban-coach-hasty-fail": {
    id: "kanban-coach-hasty-fail",
    text: `<strong>Implementação Precipitada - Resistência Organizacional</strong><br>
Você criou um quadro Kanban sem entender o fluxo atual ou envolver o time no processo.<br><br>
<strong>Resultado desastroso após 2 semanas:</strong><br>
• Time não usa o quadro, continua trabalhando como antes<br>
• "Mais uma ferramenta que não funciona na prática"<br>
• Gerência questiona sua competência como coach<br>
• Stakeholders criam tickets "urgentes" que bypassing o quadro<br>
• Visibilidade continua zero, caos permanece<br><br>
<strong>Manager frustrado:</strong><br>
"Contratamos um expert e nada mudou! Kanban não funciona aqui."<br><br>
<strong>6 meses depois:</strong><br>
• Quadro abandonado, volta ao processo anterior<br>
• Sua credibilidade como coach destruída<br>
• Time perdeu confiança em metodologias ágeis<br>
• Problemas originais permaneceram sem solução`,
    explanation: `Falha crítica em aplicar os princípios fundamentais do Método Kanban:<br><br>
• <strong>Start with what you do now</strong> - não mapeou o processo atual antes da mudança<br>
• <strong>Agree to pursue incremental change</strong> - tentou mudança big-bang ao invés de evolução<br>
• <strong>Respect current process and roles</strong> - impôs ferramenta sem entender contexto<br>
• <strong>Encourage leadership at all levels</strong> - não envolveu o time na criação do sistema<br><br>
O primeiro princípio do Kanban Method (David Anderson) é sempre começar com o que você tem hoje. Implementar ferramentas sem entender o fluxo atual é uma das principais causas de falha na adoção do Kanban. Change management é fundamental para o sucesso.`,
    references: [
      "Kanban Method - David Anderson: Start with what you do now",
      "Kanban University: Change Management e resistência organizacional",
      "Princípios do Kanban: evolução incremental vs mudança radical"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-coach-theory": {
    id: "kanban-coach-theory",
    text: `<strong>Treinamento Teórico Intensivo</strong><br>
Você decide começar com 16 horas de treinamento em teoria Kanban antes de qualquer implementação prática.<br><br>
<strong>Conteúdo do treinamento:</strong><br>
• História e princípios do Kanban<br>
• Teoria das Filas e Lei de Little<br>
• WIP limits e fluxo contínuo<br>
• Métricas: Lead Time, Cycle Time, Throughput<br><br>
<strong>Reação do time após 2 dias de teoria:</strong><br>
• "Muito conceito, quando vamos praticar?"<br>
• "Parece complicado demais para nosso dia a dia"<br>
• "Preferia ver isso funcionando na prática primeiro"<br><br>
<strong>Resultado após 1 mês:</strong><br>
• Time conhece teoria mas não sabe aplicar<br>
• Paralisia por análise: "não sabemos se estamos fazendo certo"<br>
• Processos antigos continuam sendo usados<br>
• Teoria sem prática não gera transformação`,
    explanation: `Abordagem excessivamente teórica que falha em gerar mudança prática:<br><br>
• <strong>Learning by Doing</strong> - Kanban é melhor aprendido através da prática<br>
• <strong>Start with what you do now</strong> - teoria deve emergir da aplicação prática<br>
• <strong>Evolutionary Change</strong> - pequenas mudanças práticas são mais efetivas<br>
• <strong>Empirical Process</strong> - aprendizado deve ser baseado em experimentação<br><br>
Embora teoria seja importante, o Kanban Method enfatiza começar com a prática atual e evoluir incrementalmente. Treinamento intensivo sem aplicação imediata raramente resulta em mudança comportamental sustentável.`,
    references: [
      "Kanban Method: prática antes da teoria para mudança real",
      "Kanban University: learning by doing e experimentação",
      "David Anderson: evolutionary change através de small steps"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-coach-metrics-first": {
    id: "kanban-coach-metrics-first",
    text: `<strong>Foco Prematuro em Métricas</strong><br>
Você tenta estabelecer sistema de métricas detalhado antes de visualizar e estabilizar o fluxo.<br><br>
<strong>Métricas implementadas:</strong><br>
• Tracking manual de lead time para cada ticket<br>
• Planilhas complexas de throughput<br>
• Relatórios diários de performance individual<br>
• Dashboards com 15 métricas diferentes<br><br>
<strong>Problemas que emergiram:</strong><br>
• Time gasta mais tempo coletando dados que trabalhando<br>
• Métricas inconsistentes devido ao processo caótico<br>
• Foco em números ao invés de melhoria do fluxo<br>
• Resistência: "virou microgerenciamento"<br><br>
<strong>3 meses depois:</strong><br>
• Dados abundantes mas insights zero<br>
• Processo continua caótico<br>
• Time desmotivado com overhead administrativo<br>
• Métricas abandonadas gradualmente`,
    explanation: `Erro comum de colocar métricas antes de estabilizar o sistema de trabalho:<br><br>
• <strong>Visualize first</strong> - é impossível medir fluxo que não está visível<br>
• <strong>Stabilize before optimize</strong> - métricas só fazem sentido em processo previsível<br>
• <strong>Flow over metrics</strong> - foco deve ser em melhorar fluxo, métricas são consequência<br>
• <strong>Simple before complex</strong> - começar com métricas básicas após visualização<br><br>
Métricas são importantes no Kanban, mas devem ser introduzidas após visualização do trabalho e estabilização básica do fluxo. Medir processo caótico gera dados sem valor para melhoria.`,
    references: [
      "Actionable Agile Metrics - Daniel Vacanti: quando introduzir métricas",
      "Kanban Method: visualização antes de medição",
      "Flow Metrics: estabilidade como pré-requisito para medição útil"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-coach-mapping": {
    id: "kanban-coach-mapping",
    text: `<strong>Sessão Intensiva de Value Stream Mapping</strong><br>
Você reuniu todo o time por 4 horas para mapear completamente o fluxo atual de trabalho.<br><br>
<strong>Descobertas chocantes:</strong><br>
• Ticket fica 3 dias em "Análise" (apenas 30min de trabalho real)<br>
• Desenvolvimento: 2 dias de trabalho, 5 dias esperando code review<br>
• QA: 1 dia de teste, 4 dias na fila esperando testador<br>
• Deploy: 2 horas de trabalho, 3 dias esperando janela<br>
• <strong>Total:</strong> 60% do tempo é desperdício (waiting time)<br><br>
<strong>Reação emocional do time:</strong><br>
"Nossa, eu não fazia ideia que meu trabalho ficava parado tanto tempo!"<br>
"Agora entendo por que os clientes reclamam da demora!"<br><br>
<strong>Próximo passo estratégico:</strong>`,
    tag: "process-improvement",
    choices: [
      { text: "Criar quadro Kanban baseado no fluxo mapeado", next: "kanban-coach-board" },
      { text: "Definir WIP limits para cada etapa primeiro", next: "kanban-coach-wip-early" },
      { text: "Implementar daily standup primeiro", next: "kanban-coach-daily-first" }
    ]
  },

  "kanban-coach-wip-early": {
    id: "kanban-coach-wip-early",
    text: `<strong>WIP Limits Sem Visualização - Estratégia Prematura</strong><br>
Você tenta definir limites de trabalho em progresso antes de implementar visualização completa.<br><br>
<strong>Tentativa de implementação:</strong><br>
• "Máximo 3 tickets por desenvolvedor"<br>
• "QA pode ter apenas 5 tickets por vez"<br>
• "Análise limitada a 2 tickets simultâneos"<br><br>
<strong>Problemas imediatos:</strong><br>
• Sem quadro visual, ninguém sabe quantos tickets cada um tem<br>
• Regras impossíveis de monitorar<br>
• Time ignora limites pela dificuldade de controle<br>
• Frustração: "mais regras sem ferramentas para seguir"<br><br>
<strong>Resultado após 3 semanas:</strong><br>
• WIP limits abandonados informalmente<br>
• Processo volta ao caos anterior<br>
• Credibilidade do coach questionada<br>
• Lição aprendida: visualização deve vir antes dos limits`,
    explanation: `Tentativa de implementar WIP limits sem infraestrutura de visualização:<br><br>
• <strong>Visualize the workflow first</strong> - WIP limits só funcionam com visibilidade total<br>
• <strong>Make policies explicit</strong> - regras invisíveis não podem ser seguidas<br>
• <strong>Tool before rule</strong> - necessário ferramental antes das políticas<br>
• <strong>Collaborative implementation</strong> - WIP limits devem emergir do time<br><br>
WIP limits são fundamentais no Kanban, mas requerem sistema visual para serem efetivos. Tentar implementar policies sem visualization é uma das causas mais comuns de falha na adoção.`,
    references: [
      "Kanban Method - David Anderson: Limit WIP após Visualize",
      "Essential Kanban Condensed: visualização como base para policies",
      "Kanban practices: sequência correta de implementação"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-coach-daily-first": {
    id: "kanban-coach-daily-first",
    text: `<strong>Daily Standup Sem Estrutura Kanban</strong><br>
Você implementa reuniões diárias antes de ter visualização adequada do trabalho.<br><br>
<strong>Daily meetings implementadas:</strong><br>
• 15 minutos todas as manhãs<br>
• "O que fez ontem, o que vai fazer hoje, impedimentos"<br>
• Sem quadro visual para referenciar<br>
• Foco em atividades individuais<br><br>
<strong>Problemas observados:</strong><br>
• Discussões longas sem foco no fluxo<br>
• Impedimentos identificados mas não resolvidos<br>
• Status updates ao invés de colaboração<br>
• Time perde interesse: "reunião inútil"<br><br>
<strong>1 mês depois:</strong><br>
• Dailies canceladas por "falta de valor"<br>
• Time volta à comunicação ad-hoc<br>
• Oportunidade perdida de criar disciplina colaborativa<br>
• Coach precisa recomeçar com base mais sólida`,
    explanation: `Daily meetings sem estrutura Kanban perdem efetividade:<br><br>
• <strong>Visual management required</strong> - daily deve ser centrado no board<br>
• <strong>Flow-focused discussion</strong> - foco no work, não no worker<br>
• <strong>Collaborative problem solving</strong> - impedimentos devem ser resolvidos<br>
• <strong>System thinking</strong> - discussão sobre fluxo, não tarefas individuais<br><br>
Daily meetings no Kanban são diferentes do Scrum - focam no fluxo de trabalho usando o board como guia. Sem visualização adequada, tornam-se apenas status reports ineficazes.`,
    references: [
      "Kanban Method: daily meetings centrados no flow",
      "Kanban practices: board como centro das discussões diárias",
      "Flow-based daily meetings vs status-based meetings"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-coach-board": {
    id: "kanban-coach-board",
    text: `<strong>Implementação Estratégica do Quadro Kanban</strong><br>
Baseado no value stream mapping, você criou um quadro que reflete o fluxo real:<br>
<strong>Colunas: Backlog → Análise → Desenvolvimento → Code Review → Teste → Deploy → Done</strong><br><br>
<strong>Semana 1 - Primeiros resultados:</strong><br>
• Visibilidade total do trabalho em andamento<br>
• Time identifica gargalos facilmente<br>
• Mas muitos tickets ainda ficam "presos" em certas colunas<br><br>
<strong>Observação crítica na semana 2:</strong><br>
• Coluna "Teste" tem 15 tickets acumulados<br>
• Coluna "Desenvolvimento" tem apenas 3 tickets<br>
• Developers ficam ociosos enquanto QA está sobrecarregado<br>
• Lead time ainda está em 12 dias<br><br>
<strong>Sua intervenção estratégica:</strong>`,
    tag: "bottleneck-management",
    choices: [
      { text: "Implementar WIP limit de 5 na coluna Teste", next: "kanban-coach-wip-success" },
      { text: "Contratar mais testadores", next: "kanban-coach-hire-fail" },
      { text: "Mover desenvolvedores para ajudar em testes", next: "kanban-coach-cross-training" },
      { text: "Criar subcoluna 'Waiting for Test'", next: "kanban-coach-subcol" }
    ]
  },

  "kanban-coach-hire-fail": {
    id: "kanban-coach-hire-fail",
    text: `<strong>Solução Cara e Ineficaz - Contratar Mais Testadores</strong><br>
Você recomenda contratar 2 testadores adicionais para resolver o gargalo.<br><br>
<strong>Processo de contratação (3 meses):</strong><br>
• Aprovação orçamentária: 1 mês<br>
• Recrutamento e entrevistas: 1.5 mês<br>
• Onboarding e treinamento: 3 semanas<br>
• Custo adicional: R$ 240.000/ano<br><br>
<strong>Resultado inesperado após contratação:</strong><br>
• Gargalo se move para "Code Review"<br>
• Agora há fila de 20 tickets esperando revisão<br>
• Testadores novos ficam ociosos<br>
• Empresa questiona ROI da contratação<br><br>
<strong>6 meses depois:</strong><br>
• Lead time permanece alto (11 dias)<br>
• Gargalos continuam se movendo pelo sistema<br>
• Solução cara que não resolveu problema sistêmico<br>
• Lição: adicionar recursos não melhora fluxo automaticamente`,
    explanation: `Erro clássico de tentar resolver problemas de fluxo com mais recursos:<br><br>
• <strong>Theory of Constraints</strong> - gargalo se move quando não é tratado sistemicamente<br>
• <strong>Flow over capacity</strong> - mais pessoas não melhoram fluxo automaticamente<br>
• <strong>System thinking</strong> - problema é sistêmico, não de capacidade individual<br>
• <strong>Waste of investment</strong> - recursos caros para problema que WIP limits resolveriam<br><br>
O Kanban Method enfatiza que gargalos são problemas sistêmicos. A Lei de Conway e Theory of Constraints mostram que adicionar recursos sem otimizar fluxo apenas move o problema para outro lugar.`,
    references: [
      "Theory of Constraints - Goldratt: gargalos sistêmicos vs capacidade",
      "Kanban Method: flow optimization antes de capacity expansion",
      "Lean Thinking: eliminação de waste vs adição de recursos"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-coach-cross-training": {
    id: "kanban-coach-cross-training",
    text: `<strong>Cross-Training Estratégico para Balanceamento</strong><br>
Você implementa programa de cross-training para desenvolvedores aprenderem testes básicos.<br><br>
<strong>Programa implementado:</strong><br>
• 2 desenvolvedores aprendem testes manuais<br>
• 1 testador aprende automação básica<br>
• Pairing sessions entre devs e QA<br>
• Knowledge sharing sobre cases de teste<br><br>
<strong>Resultado após 6 semanas:</strong><br>
• Gargalo em testes reduzido significativamente<br>
• Lead time melhora para 8 dias<br>
• Time mais colaborativo e flexível<br>
• Qualidade melhora com devs testando melhor<br><br>
<strong>8 meses depois - Transformação cultural:</strong><br>
• Cross-functional teams naturalmente estabelecidos<br>
• Gargalos resolvidos colaborativamente<br>
• Lead time estável em 5-6 dias<br>
• Throughput aumentou 40%<br>
• Você reconhecido como coach que desenvolve people e system`,
    explanation: `Solução sistêmica excelente que desenvolve capacidades e melhora fluxo:<br><br>
• <strong>Cross-functional teams</strong> - reduz dependências e gargalos<br>
• <strong>System optimization</strong> - trata causa raiz, não apenas sintoma<br>
• <strong>Knowledge sharing</strong> - aumenta bus factor e flexibilidade<br>
• <strong>Sustainable solution</strong> - melhoria duradoura vs fix temporário<br><br>
Cross-training é estratégia fundamental no Kanban para criar flow suave. Desenvolve pessoas e sistema simultaneamente, alinhado com valores de respect for people e continuous improvement.`,
    references: [
      "Kanban Method: cross-functional capabilities para flow optimization",
      "Lean Development: T-shaped people e knowledge sharing",
      "System optimization através de people development"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-coach-subcol": {
    id: "kanban-coach-subcol",
    text: `<strong>Subcolunas para Maior Transparência</strong><br>
Você adiciona subcoluna "Waiting for Test" para separar trabalho ativo de waiting time.<br><br>
<strong>Novo design do board:</strong><br>
• Teste: "Doing" | "Waiting for Test"<br>
• Desenvolvimento: "Doing" | "Waiting for Review"<br>
• Análise: "Doing" | "Waiting for Clarification"<br><br>
<strong>Impacto imediato (2 semanas):</strong><br>
• Waiting time torna-se visível e chocante<br>
• Time percebe que 70% do tempo é waste<br>
• Discussões produtivas sobre como reduzir waits<br>
• Natural pressure para resolver impedimentos<br><br>
<strong>3 meses depois:</strong><br>
• Waiting time reduzido em 60%<br>
• Lead time diminui para 6 dias<br>
• Culture of continuous improvement estabelecida<br>
• Board evoluindo organicamente com needs do time<br>
• Sistema visual driving mudanças comportamentais positivas`,
    explanation: `Uso inteligente de visual management para expor waste e drive improvement:<br><br>
• <strong>Make waste visible</strong> - subcolunas expõem waiting time claramente<br>
• <strong>Visual management</strong> - board design influencia comportamento<br>
• <strong>Continuous improvement</strong> - transparência motiva resolução de problemas<br>
• <strong>System evolution</strong> - board evolui com necessidades do time<br><br>
Subcolunas são técnica avançada do Kanban Method para aumentar transparência. Separar "doing" de "waiting" é forma poderosa de expor waste e motivar improvement actions.`,
    references: [
      "Kanban Method: visual management e board design avançado",
      "Essential Kanban: subcolunas para transparência de waste",
      "Continuous improvement através de visual feedback loops"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-coach-wip-success": {
    id: "kanban-coach-wip-success",
    text: `<strong>WIP Limits Transformam Completamente o Fluxo</strong><br>
WIP limit de 5 em "Teste" forçou mudanças comportamentais fundamentais.<br><br>
<strong>Mês 1 - Transformação observada:</strong><br>
• Desenvolvedores param de começar novos tickets quando Teste está cheio<br>
• Time começa a colaborar ativamente para resolver gargalos<br>
• Cross-training emergente: devs aprendem a fazer testes básicos<br>
• Lead time cai de 15 para 8 dias<br>
• Qualidade melhora drasticamente: apenas 15% dos tickets voltam<br><br>
<strong>Feedback transformador do time:</strong><br>
"No início foi frustrante não poder pegar novo trabalho, mas agora entendemos que terminar é mais importante que começar."<br><br>
<strong>Mês 2 - Stakeholder executive reclama:</strong><br>
"Vocês estão entregando menos tickets por semana! Onde está a melhoria?"<br><br>
<strong>Sua resposta baseada em dados:</strong>`,
    tag: "stakeholder-education",
    choices: [
      { text: "Mostrar métricas de lead time e qualidade", next: "kanban-coach-metrics-presentation" },
      { text: "Aumentar temporariamente o WIP para agradar", next: "kanban-coach-compromise-fail" },
      { text: "Explicar teoria do throughput vs WIP cientificamente", next: "kanban-coach-theory-success" }
    ]
  },

  "kanban-coach-compromise-fail": {
    id: "kanban-coach-compromise-fail",
    text: `<strong>Compromisso Prejudicial - Cedendo à Pressão</strong><br>
Você aumenta WIP limit de 5 para 8 para "agradar" stakeholders preocupados com números.<br><br>
<strong>Resultado imediato (2 semanas):</strong><br>
• Mais tickets em andamento simultâneo<br>
• Aparente aumento na "produtividade"<br>
• Stakeholders temporariamente satisfeitos<br><br>
<strong>Consequências sistêmicas (1 mês):</strong><br>
• Lead time volta a subir: 8 → 12 dias<br>
• Context switching aumenta<br>
• Qualidade deteriora: 15% → 30% de retrabalho<br>
• Gargalos se tornam invisíveis novamente<br>
• Time frustra: "voltamos ao caos anterior"<br><br>
<strong>3 meses depois:</strong><br>
• Credibilidade do coach severamente prejudicada<br>
• Stakeholders culpam Kanban por "não funcionar"<br>
• Sistema volta ao estado original de caos<br>
• Lição dolorosa: principles não podem ser comprometidos`,
    explanation: `Falha crítica em manter integridade dos princípios Kanban sob pressão:<br><br>
• <strong>WIP limits are non-negotiable</strong> - são fundamentais para flow optimization<br>
• <strong>Stakeholder education required</strong> - deve educar, não ceder à pressão<br>
• <strong>Long-term thinking</strong> - sacrifice short-term comfort para long-term benefits<br>
• <strong>Courage in change management</strong> - coach deve defend proven practices<br><br>
Este cenário ilustra porque WIP limits são considerados practice central do Kanban. Comprometer principles para agradar stakeholders uninformed destrói benefits sistêmicos do method.`,
    references: [
      "Kanban Method - David Anderson: WIP limits como practice fundamental",
      "Change Management: holding firm on proven principles",
      "Stakeholder education: coach responsibility em educate sobre flow"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-coach-theory-success": {
    id: "kanban-coach-theory-success",
    text: `<strong>Educação Científica sobre Fluxo</strong><br>
Você prepara apresentação educativa baseada em teoria científica para stakeholders.<br><br>
<strong>Conceitos apresentados:</strong><br>
• Lei de Little: Lead Time = WIP / Throughput<br>
• Teoria das Filas: mais WIP = mais waiting time<br>
• Multitasking penalty: 25% loss por task switch<br>
• Quality vs Speed: inverse relationship em high WIP<br><br>
<strong>Demonstração prática com dados reais:</strong><br>
• WIP 8: Lead Time 12 dias, Throughput 15/semana<br>
• WIP 5: Lead Time 8 dias, Throughput 17/semana<br>
• "Menos simultâneo = mais entregue"<br><br>
<strong>Stakeholder enlightened:</strong><br>
"Nunca pensei que fazer menos coisas ao mesmo tempo resultaria em entregar mais! Isso é contraintuitivo mas os dados não mentem."<br><br>
<strong>1 ano depois - Transformação organizacional:</strong><br>
• Stakeholders se tornam defensores de WIP limits<br>
• Metodologia Kanban expandida para outros departamentos<br>
• Você promovido a Head of Continuous Improvement<br>
• Company culture shift para flow-based thinking`,
    explanation: `Educação stakeholder excepcional usando scientific foundation do Kanban:<br><br>
• <strong>Little's Law application</strong> - mathematical proof para WIP/Throughput relationship<br>
• <strong>Queueing Theory</strong> - scientific basis para flow optimization<br>
• <strong>Data-driven education</strong> - facts overcome intuition<br>
• <strong>Systems thinking</strong> - focus em system optimization vs local optimization<br><br>
Esta approach demonstra deep understanding do theoretical foundation do Kanban Method. Using science para educate stakeholders creates lasting change em organizational thinking.`,
    references: [
      "Little's Law em Kanban Systems - mathematical foundation",
      "Queueing Theory - Kanban University advanced concepts",
      "David Anderson: scientific management através de flow metrics"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-coach-metrics-presentation": {
    id: "kanban-coach-metrics-presentation",
    text: `<strong>O Poder Transformador das Métricas</strong><br>
Você preparou um dashboard completo com dados irrefutáveis:<br><br>
<strong>Métricas Before/After Kanban (6 meses):</strong><br>
• Lead Time: 15 dias → 6 dias (-60%)<br>
• Throughput: 12 tickets/semana → 22 tickets/semana (+83%)<br>
• Retrabalho: 40% → 12% (-70%)<br>
• Satisfação do cliente: 3.2 → 4.3 (+34%)<br>
• SLA compliance: 40% → 88% (+120%)<br>
• Custo por ticket: R$ 450 → R$ 280 (-38%)<br><br>
<strong>Stakeholder impressionado:</strong><br>
"Inacreditável! Como conseguiram melhorar velocidade E qualidade simultaneamente?"<br><br>
<strong>1 ano depois - Transformação organizacional:</strong><br>
• Sistema Kanban expandido para toda a empresa<br>
• Você promovido a Head of Process Excellence<br>
• Case study apresentado em conferências internacionais<br>
• ROI documentado: R$ 2.3M em eficiência anual<br><br>
<strong>CEO testemunha:</strong><br>
"Kanban não apenas resolveu nosso problema de atendimento, transformou nossa cultura organizacional para foco em fluxo e valor."`,
    explanation: `Implementação exemplar dos princípios fundamentais do Kanban Method conforme David Anderson:<br><br>
• <strong>Visualize the Workflow</strong> - quadro tornou todo fluxo transparente<br>
• <strong>Limit Work in Progress</strong> - WIP limits reduziram multitasking e melhoraram foco<br>
• <strong>Manage Flow</strong> - métricas de lead time e throughput guiaram todas as decisões<br>
• <strong>Make Process Policies Explicit</strong> - WIP limits e Definition of Done claros<br>
• <strong>Implement Feedback Loops</strong> - dados quantitativos para melhoria contínua<br>
• <strong>Improve Collaboratively</strong> - evolução do sistema baseada em evidências<br><br>
Sua abordagem demonstra maturidade no Kanban Method: começar com o que existe, evoluir incrementalmente, e usar dados para guiar todas as decisões. O foco em métricas de fluxo (lead time, throughput, quality) ao invés de apenas velocidade mostra compreensão profunda dos princípios lean.`,
    references: [
      "Kanban - David Anderson: Os 6 princípios fundamentais do Kanban Method",
      "Actionable Agile Metrics - Daniel Vacanti: métricas que realmente importam",
      "Kanban University: Kanban Maturity Model e evolução baseada em evidências"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  // === JORNADA DO MEMBRO DA EQUIPE ===
  "kanban-member-start": {
    id: "kanban-member-start",
    text: `<strong>Perspectiva do Desenvolvedor Experiente</strong><br>
Você é desenvolvedor sênior há 3 anos na empresa. Está completamente acostumado a trabalhar com múltiplos tickets simultaneamente e ser constantemente interrompido por "urgências" que aparecem diariamente.<br><br>
<strong>Seu dia típico atual (caótico):</strong><br>
• 9h: Começa ticket A (bug crítico do sistema de pagamento)<br>
• 10h: Manager pede para olhar ticket B (novo feature urgente)<br>
• 11h: QA encontra problema no ticket C (desenvolvido semana passada)<br>
• 14h: Stakeholder pede estimativa urgente para ticket D<br>
• 15h: Reunião não planejada sobre prioridades<br>
• 16h: Finalmente volta para ticket A... mas onde estava mesmo?<br><br>
<strong>Seu estado mental:</strong> Constantemente estressado, sensação de nunca terminar nada completamente.<br><br>
<strong>Coach Kanban anuncia:</strong> "Vamos implementar Kanban para organizar nosso trabalho!"<br><br>
<strong>Sua reação inicial honesta:</strong>`,
    tag: "change-resistance",
    choices: [
      { text: "Ceticismo: 'Mais uma metodologia da moda que vai passar'", next: "kanban-member-skeptic" },
      { text: "Interesse genuíno: 'Pode realmente melhorar nossa organização'", next: "kanban-member-interest" },
      { text: "Preocupação: 'Vai burocratizar demais nosso trabalho'", next: "kanban-member-worry" },
      { text: "Indiferença: 'Tanto faz, só quero programar em paz'", next: "kanban-member-indifferent" }
    ]
  },

  "kanban-member-skeptic": {
    id: "kanban-member-skeptic",
    text: `<strong>Ceticismo Inicial - "Mais uma Metodologia da Moda"</strong><br>
Você aborda Kanban com ceticismo total, esperando que seja mais uma iniciativa que vai ser abandonada em 6 meses.<br><br>
<strong>Suas atitudes nas primeiras semanas:</strong><br>
• Participa do mapeamento de fluxo mas não se engaja<br>
• Usa o quadro quando lembrado, mas prefere suas anotações<br>
• Comenta para colegas: "logo vão inventar outra coisa"<br>
• Continua pegando múltiplos tickets como antes<br><br>
<strong>Momento de virada (semana 3):</strong><br>
Você nota que Ana, que abraçou o Kanban, está visivelmente menos estressada e termina mais tickets que você, trabalhando em menos coisas simultaneamente.<br><br>
<strong>Sua decisão:</strong>`,
    choices: [
      { text: "Experimentar seriamente por 2 semanas", next: "kanban-member-conversion" },
      { text: "Continuar resistindo - 'funciona para ela, não para mim'", next: "kanban-member-stubborn-fail" }
    ]
  },

  "kanban-member-stubborn-fail": {
    id: "kanban-member-stubborn-fail",
    text: `<strong>Resistência Persistente - Oportunidade Perdida</strong><br>
Você mantém resistência enquanto o resto do time evolui com Kanban.<br><br>
<strong>3 meses depois - contraste doloroso:</strong><br>
• Time: Lead time médio 6 dias, trabalho colaborativo<br>
• Você: Lead time 12 dias, constantemente estressado<br>
• Colleagues: "Por que você não usa o board como nós?"<br>
• Manager: "Precisa se alinhar com o processo do time"<br><br>
<strong>6 meses depois:</strong><br>
• Performance review negativa<br>
• Time considera você "gargalo humano"<br>
• Isolamento profissional crescente<br>
• Oportunidade de promoção perdida para Ana<br><br>
<strong>1 ano depois:</strong><br>
• Finalmente forçado a seguir Kanban<br>
• Adaptação tardia e dolorosa<br>
• Relacionamentos profissionais prejudicados<br>
• Lição aprendida: resistir mudança positiva prejudica principalmente a si mesmo`,
    explanation: `Resistência a mudanças positivas resulta em isolamento e declínio de performance:<br><br>
• <strong>Individual vs System</strong> - tentar manter práticas antigas em sistema novo<br>
• <strong>Network effects</strong> - benefícios do Kanban aumentam com adoption coletiva<br>
• <strong>Professional evolution</strong> - resistance to improvement é career limiting<br>
• <strong>Adaptation advantage</strong> - early adopters têm vantagem sobre late adopters<br><br>
Esta jornada ilustra como individual resistance em team environment leva ao isolamento. Kanban benefits são amplificados quando todo o team participa colaborativamente.`,
    references: [
      "Change Management: individual resistance em system changes",
      "Kanban adoption: network effects e collaborative benefits",
      "Professional development: adaptation como competitive advantage"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-member-conversion": {
    id: "kanban-member-conversion",
    text: `<strong>Experimentação Séria - Conversão Gradual</strong><br>
Você decide dar uma chance real ao Kanban por 2 semanas completas.<br><br>
<strong>Experiment setup pessoal:</strong><br>
• Limita-se a 2 tickets simultâneos (WIP personal limit)<br>
• Atualiza board religiosamente<br>
• Participa ativamente do daily meeting<br>
• Evita multitasking conscientemente<br><br>
<strong>Descobertas surpreendentes (semana 1):</strong><br>
• Foco em 2 tickets permite trabalho mais profundo<br>
• Menos context switching = menos fadiga mental<br>
• Terminar tickets gera sensação de accomplishment<br><br>
<strong>Semana 2 - breakthrough moment:</strong><br>
Você termina 5 tickets vs 2-3 na abordagem anterior, com qualidade superior e muito menos stress.<br><br>
<strong>Próximo passo na jornada:</strong>`,
    choices: [
      { text: "Tornar-se defensor ativo do Kanban no time", next: "kanban-member-advocate" },
      { text: "Focar em otimizar ainda mais seu workflow pessoal", next: "kanban-member-optimization" }
    ]
  },

  "kanban-member-advocate": {
    id: "kanban-member-advocate",
    text: `<strong>De Cético a Defensor Ativo</strong><br>
Transformado pela experiência, você se torna evangelista interno do Kanban.<br><br>
<strong>Suas ações de advocacy:</strong><br>
• Compartilha dados pessoais de produtividade com céticos<br>
• Oferece pair sessions para ensinar práticas<br>
• Sugere melhorias no board baseadas na experiência<br>
• Defende WIP limits quando stakeholders pressionam<br><br>
<strong>6 meses depois - reconhecimento:</strong><br>
• Você lidera initiatives de melhoria contínua<br>
• Coach te considera "change champion"<br>
• Time te procura para advice sobre flow optimization<br>
• Promovido a Senior Developer com foco em process improvement<br><br>
<strong>1 ano depois:</strong><br>
• Você treina novos team members em Kanban<br>
• Contribui para scaling methodology para outros times<br>
• Case study: "De maior cético a maior defensor"<br>
• Career evolution através de process leadership`,
    explanation: `Transformação completa de resistência para leadership em process improvement:<br><br>
• <strong>Experience-based advocacy</strong> - credibilidade através de results pessoais<br>
• <strong>Peer influence</strong> - conversion de cético é powerful change agent<br>
• <strong>Continuous improvement mindset</strong> - focus em optimize system constantemente<br>
• <strong>Leadership emergence</strong> - process expertise como career differentiator<br><br>
Esta jornada exemplifica como individual transformation pode drive organizational change. Converted skeptics often become most effective advocates devido à authentic experience com both old e new ways.`,
    references: [
      "Change Management: converted skeptics como powerful advocates",
      "Kanban practices: peer-to-peer knowledge transfer",
      "Professional growth através de process improvement leadership"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-member-optimization": {
    id: "kanban-member-optimization",
    text: `<strong>Otimização Pessoal Contínua</strong><br>
Você foca em refinar constantemente seu workflow pessoal usando princípios Kanban.<br><br>
<strong>Otimizações implementadas:</strong><br>
• Personal Kanban board com planning, doing, done<br>
• Time blocking para minimize context switching<br>
• Daily personal retrospectives<br>
• WIP limits para email e meetings<br><br>
<strong>Resultados após 4 meses:</strong><br>
• 50% aumento em throughput pessoal<br>
• Work-life balance drasticamente melhorado<br>
• Stress levels significativamente reduzidos<br>
• Você se torna referência em personal productivity<br><br>
<strong>8 meses depois:</strong><br>
• Colleagues pedem coaching em personal Kanban<br>
• Você escreve blog posts sobre personal flow optimization<br>
• Palestras em meetups locais sobre Kanban pessoal<br>
• Recognition como thought leader em productivity<br>
• Career opportunities emergem através de expertise única`,
    explanation: `Aplicação avançada de Kanban principles para personal productivity optimization:<br><br>
• <strong>Personal Kanban</strong> - application de principles em individual level<br>
• <strong>Continuous improvement</strong> - constant optimization de personal workflow<br>
• <strong>Flow principles</strong> - WIP limits e visual management para personal work<br>
• <strong>Knowledge sharing</strong> - expertise development através de personal mastery<br><br>
Esta approach mostra how Kanban principles transcend team level para personal effectiveness. Individual mastery often leads para broader influence e career opportunities.`,
    references: [
      "Personal Kanban - Jim Benson: individual application de Kanban principles",
      "Kanban Method: flow optimization em personal level",
      "Continuous improvement: personal mastery como foundation para team leadership"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-member-worry": {
    id: "kanban-member-worry",
    text: `<strong>Preocupação com Burocratização</strong><br>
Sua principal preocupação é que Kanban adicione overhead burocrático ao trabalho.<br><br>
<strong>Preocupações específicas:</strong><br>
• "Vou perder tempo movendo cartões?"<br>
• "Mais reuniões e processos?"<br>
• "Vai limitar minha flexibilidade?"<br>
• "Management vai usar para microgerenciamento?"<br><br>
<strong>Primeira semana com Kanban:</strong><br>
• Board update takes 30 segundos por ticket<br>
• Daily meeting é focused em flow, não reporting<br>
• Mais visibility sobre seu trabalho<br>
• Menos interrupções porque priorities são claras<br><br>
<strong>Sua descoberta surpreendente:</strong><br>
Kanban na verdade REDUZ bureaucracy ao fazer work e priorities transparentes.<br><br>
<strong>Próxima percepção:</strong>`,
    choices: [
      { text: "Kanban gives mais autonomia, não menos", next: "kanban-member-autonomy" },
      { text: "Resistance ainda permanece sobre visibility", next: "kanban-member-privacy-concern" }
    ]
  },

  "kanban-member-autonomy": {
    id: "kanban-member-autonomy",
    text: `<strong>Descoberta: Kanban Aumenta Autonomia</strong><br>
Você percebe que Kanban na verdade te dá mais controle sobre seu trabalho.<br><br>
<strong>Autonomias descobertas:</strong><br>
• Você escolhe próximo ticket baseado em WIP limits<br>
• Priorities são claras, menos micro-management<br>
• Board protege contra constant interruptions<br>
• Work speaks for itself - menos status reporting<br><br>
<strong>3 meses depois - transformação pessoal:</strong><br>
• Confiança aumentada em capacity planning<br>
• Better work-life balance through predictable flow<br>
• Professional growth através de visibility de contributions<br>
• Leadership skills emergindo through board facilitation<br><br>
<strong>6 meses depois:</strong><br>
• Você lidera board design improvements<br>
• Mentora novos team members em Kanban practices<br>
• Recognition por balanced approach para process e people<br>
• Promoted para Technical Lead com process expertise<br>
• Case study: "Kanban empowers individual contributors"`,
    explanation: `Descoberta que Kanban aumenta rather que diminui individual autonomy:<br><br>
• <strong>Self-organization</strong> - WIP limits create framework para autonomous decisions<br>
• <strong>Protection from chaos</strong> - process protects individuals from constant interruption<br>
• <strong>Visibility benefits</strong> - transparent work leads para recognition e trust<br>
• <strong>Empowerment through structure</strong> - clear boundaries increase rather que limit freedom<br><br>
Esta insight é comum em successful Kanban adoptions. Structure e visibility often lead para increased autonomy e trust, opposite do initial fear de micromanagement.`,
    references: [
      "Kanban Method: self-organization within structured flow",
      "Individual empowerment através de process clarity",
      "Visual management como protection mechanism para developers"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-member-privacy-concern": {
    id: "kanban-member-privacy-concern",
    text: `<strong>Resistência Persistente sobre Visibilidade</strong><br>
Apesar dos benefits, você ainda se sente desconfortável com total transparency do seu work.<br><br>
<strong>Concerns específicas:</strong><br>
• "Manager pode ver se eu fico stuck em algo"<br>
• "Peers podem compare minha speed com deles"<br>
• "Pressure para constantly move cards"<br>
• "What if I need break ou thinking time?"<br><br>
<strong>Consequências dessa resistance (2 meses):</strong><br>
• Você updates board irregularly<br>
• Miss oportunidades para collaboration quando stuck<br>
• Team não pode help effectively porque work não é visible<br>
• You become bottleneck que others can't predict<br><br>
<strong>Performance review feedback:</strong><br>
"Seu technical skills são excellent, mas collaboration e transparency needs improvement."<br><br>
<strong>Coaching conversation com tech lead:</strong><br>
"Visibility é sobre help, não judgment. Team quer support você, não criticize."`,
    choices: [
      { text: "Aceitar coaching e embrace transparency gradualmente", next: "kanban-member-gradual-acceptance" },
      { text: "Continue resistance - request transfer para different team", next: "kanban-member-transfer-fail" }
    ]
  },

  "kanban-member-gradual-acceptance": {
    id: "kanban-member-gradual-acceptance",
    text: `<strong>Aceitação Gradual da Transparência</strong><br>
Com coaching support, você gradualmente aceita que visibility é about support, não judgment.<br><br>
<strong>Mindset shift gradual:</strong><br>
• Week 1: Update board consistently mas quietly<br>
• Week 2: Ask for help quando stuck pela primeira vez<br>
• Week 3: Participate actively em daily discussions<br>
• Week 4: Suggest process improvements baseado em observations<br><br>
<strong>Breakthrough moment:</strong><br>
Quando você admite estar stuck em complex algorithm, Carlos immediately offers pairing session que resolve problem em 2 horas (vs struggling alone por days).<br><br>
<strong>4 meses depois - complete transformation:</strong><br>
• Transparency becomes natural habit<br>
• You actively seek collaboration quando appropriate<br>
• Team efficiency increases through better coordination<br>
• Work satisfaction improves dramatically<br>
• Recognition por professional growth e adaptability`,
    explanation: `Successful transition from privacy concern para collaborative transparency:<br><br>
• <strong>Gradual adaptation</strong> - step-by-step approach para comfort building<br>
• <strong>Support system</strong> - coaching e team support facilita change<br>
• <strong>Experience-based learning</strong> - positive results reinforce new behaviors<br>
• <strong>Cultural integration</strong> - individual adaptation contributes para team effectiveness<br><br>
Esta jornada é common em Kanban implementations. Initial discomfort com transparency usually resolves quando people experience collaborative benefits de shared visibility.`,
    references: [
      "Change management: gradual adaptation para new transparency levels",
      "Kanban culture: psychological safety em transparent environments",
      "Team collaboration: visibility como enabler para mutual support"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-member-transfer-fail": {
    id: "kanban-member-transfer-fail",
    text: `<strong>Transfer Request - Evitando o Problema</strong><br>
Você request transfer para team que doesn't use Kanban, hoping para avoid transparency requirements.<br><br>
<strong>6 meses em new team:</strong><br>
• Back para old chaotic ways<br>
• Constant context switching e interruptions<br>
• No visibility into team work<br>
• Individual silos e poor collaboration<br>
• You realize quanto Kanban actually helped, despite discomfort<br><br>
<strong>1 year later:</strong><br>
• New team struggles com delivery predictability<br>
• Your previous team (still using Kanban) consistently outperforms<br>
• Career progression slower due para less process maturity<br>
• Professional regret about running from beneficial change<br><br>
<strong>18 months later:</strong><br>
• You request transfer BACK para Kanban team<br>
• Now willing para embrace transparency<br>
• Valuable lesson: avoiding beneficial change hurts long-term growth`,
    explanation: `Avoiding beneficial change por comfort reasons leads para professional stagnation:<br><br>
• <strong>Change avoidance</strong> - running from discomfort prevents growth<br>
• <strong>Process maturity advantage</strong> - teams com better processes outperform<br>
• <strong>Career impact</strong> - avoiding modern practices limits professional development<br>
• <strong>Learning opportunity lost</strong> - resistance prevents skill development<br><br>
Esta scenario illustrates how avoiding process improvements para preserve comfort zone can be career limiting. Modern software development increasingly values transparency e collaboration.`,
    references: [
      "Professional development: adapting para modern collaborative practices",
      "Change management: cost de avoiding beneficial organizational changes",
      "Career growth: process expertise como competitive advantage"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-member-indifferent": {
    id: "kanban-member-indifferent",
    text: `<strong>Indiferença - "Só Quero Programar em Paz"</strong><br>
Você tem attitude completely indifferent para Kanban - não resiste, mas também não se engaja.<br><br>
<strong>Sua approach:</strong><br>
• Follows instructions minimally<br>
• Updates board quando reminded<br>
• Attends meetings but doesn't contribute much<br>
• Focus purely on technical work, ignores process aspects<br><br>
<strong>2 meses depois - você notices:</strong><br>
• Less interruptions porque work é visible<br>
• Clearer priorities reduce decision fatigue<br>
• Team coordination é smoother<br>
• You actually get para "program em paz" mais often<br><br>
<strong>Gradual realization:</strong><br>
Process improvements actually ENABLE better technical work.<br><br>
<strong>Sua evolution:</strong>`,
    choices: [
      { text: "Embrace Kanban como tool que supports your technical focus", next: "kanban-member-tool-appreciation" },
      { text: "Remain indifferent - just following minimum requirements", next: "kanban-member-passive-participation" }
    ]
  },

  "kanban-member-tool-appreciation": {
    id: "kanban-member-tool-appreciation",
    text: `<strong>Apreciação do Kanban como Technical Tool</strong><br>
Você começa para appreciate Kanban specifically porque ele supports your technical focus.<br><br>
<strong>Technical benefits você discovers:</strong><br>
• WIP limits reduce context switching (better para deep programming)<br>
• Clear priorities mean fewer technical debt decisions<br>
• Visibility prevents duplicate work e rework<br>
• Flow metrics help optimize technical processes<br><br>
<strong>6 meses depois - deeper engagement:</strong><br>
• You suggest technical improvements para board design<br>
• Propose automation tools para board updates<br>
• Lead initiatives para integrate development tools com Kanban<br>
• Become go-to person para technical aspects de process<br><br>
<strong>1 year depois:</strong><br>
• Your technical expertise + process knowledge = unique value<br>
• Lead engineering practices improvements using Kanban principles<br>
• Recognized como "technical process expert"<br>
• Career growth através de intersection de technical e process skills<br>
• Case study: "How Kanban enhanced rather que distracted from technical excellence"`,
    explanation: `Successful integration de process awareness com technical excellence:<br><br>
• <strong>Process as enabler</strong> - Kanban supports rather que hinders technical work<br>
• <strong>Technical process expertise</strong> - unique combination de skills<br>
• <strong>Automation opportunities</strong> - technical skills applied para process optimization<br>
• <strong>Career differentiation</strong> - intersection expertise creates unique value<br><br>
Esta jornada shows how technical people can find value em process improvements quando they see direct benefits para their core work. Process expertise combined com technical skills é highly valuable.`,
    references: [
      "Technical process integration: using engineering skills para optimize flow",
      "Kanban Method: technical implementation e automation opportunities",
      "Career development: intersection expertise em technical e process domains"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-member-passive-participation": {
    id: "kanban-member-passive-participation",
    text: `<strong>Participação Passiva - Minimum Requirements</strong><br>
Você continues com minimal engagement, doing just enough para meet expectations.<br><br>
<strong>Long-term consequences (1 year):</strong><br>
• You miss opportunities para influence process improvements<br>
• Team evolves around você, but without your input<br>
• No recognition para process contribution (porque não há)<br>
• Career growth limited para purely technical track<br>
• Missed learning opportunities em modern development practices<br><br>
<strong>Performance review feedback:</strong><br>
"Technical skills são solid, mas leadership potential e collaboration needs development."<br><br>
<strong>Reflection 18 months later:</strong><br>
Watching colleagues advance porque they embrace both technical E process expertise, você realize que indifference pode be career limiting em modern software development.<br><br>
<strong>Decision point:</strong><br>
Either engage mais fully with process improvement ou accept limited career trajectory.`,
    explanation: `Passive participation limits career growth em modern collaborative environments:<br><br>
• <strong>Missed opportunities</strong> - indifference prevents leadership development<br>
• <strong>Limited influence</strong> - não contributing para process means less voice em decisions<br>
• <strong>Career stagnation</strong> - modern roles increasingly require process awareness<br>
• <strong>Learning gaps</strong> - avoiding process learning creates skill gaps<br><br>
Em today's collaborative software development, pure technical focus without process engagement increasingly limits career options. Cross-functional skills are becoming essential.`,
    references: [
      "Modern software development: collaboration e process skills como requirements",
      "Career development: technical expertise alone insufficient para leadership roles",
      "Professional growth: engagement with process improvement como career enabler"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-member-interest": {
    id: "kanban-member-interest",
    text: `<strong>Adoção Entusiasmada e Transformação</strong><br>
Você abraça o Kanban desde o primeiro dia e se torna early adopter entusiasmático.<br><br>
<strong>Primeira semana com quadro Kanban - mudanças comportamentais:</strong><br>
• Você move seus cards conscientemente entre as colunas<br>
• Ativamente ajuda colegas a entender o fluxo<br>
• Questiona quando vê WIP alto em alguma coluna<br>
• Sugere melhorias práticas no processo<br>
• Celebra quando tickets chegam em "Done"<br><br>
<strong>Situação real de teste - Terça-feira, 15h:</strong><br>
Manager chega desesperado: "Preciso URGENTE que você dê uma olhada rápida neste bug crítico. Clientes estão reclamando!"<br><br>
Você olha o quadro: já tem 3 tickets em "Desenvolvimento" (seu WIP limit).<br><br>
<strong>Sua resposta transformada:</strong>`,
    tag: "wip-discipline",
    choices: [
      { text: "'Posso ajudar, mas preciso terminar um dos atuais primeiro'", next: "kanban-member-discipline" },
      { text: "'Claro, vou dar uma olhada rápida agora mesmo'", next: "kanban-member-multitask-fail" },
      { text: "'Vamos discutir prioridades no daily de amanhã'", next: "kanban-member-team-decision" }
    ]
  },

  "kanban-member-multitask-fail": {
    id: "kanban-member-multitask-fail",
    text: `<strong>Quebra de Disciplina - Multitasking Prejudicial</strong><br>
Você cede à pressão e adiciona o quarto ticket, quebrando seu WIP limit.<br><br>
<strong>Consequências imediatas:</strong><br>
• Context switching entre 4 tickets diferentes<br>
• Qualidade do trabalho diminui em todos<br>
• Tempo para resolver o "urgente" se estende<br>
• Outros 3 tickets ficam parados mais tempo<br><br>
<strong>1 semana depois:</strong><br>
• Nenhum dos 4 tickets foi concluído<br>
• Manager frustrado: "Achei que seria rápido!"<br>
• Time nota sua inconsistência com processo<br>
• Stress level aumenta significativamente<br><br>
<strong>Reflection:</strong><br>
Você aprende dolorosamente que WIP limits existem por razões válidas. A pressão para multitasking é constante, mas resistir é essencial para manter flow efetivo.<br><br>
<strong>Recovery action:</strong><br>
Próxima vez que similar situation ocorre, você mantém disciplina e explica benefits do foco para stakeholders.`,
    explanation: `Lição importante sobre maintaining discipline under pressure:<br><br>
• <strong>WIP discipline</strong> - limites devem ser respeitados mesmo sob pressure<br>
• <strong>Multitasking penalty</strong> - context switching diminui quality e speed<br>
• <strong>Short-term pressure vs long-term flow</strong> - ceder para urgency hurts overall throughput<br>
• <strong>Stakeholder education</strong> - need para educate sobre flow principles<br><br>
Esta experience é common learning moment em Kanban adoption. Maintaining WIP discipline under pressure é skill que develops com practice e team support.`,
    references: [
      "Kanban Method: WIP limits como discipline necessária para flow",
      "Multitasking research: context switching costs e quality impacts",
      "Stakeholder management: educating sobre flow principles"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-member-team-decision": {
    id: "kanban-member-team-decision",
    text: `<strong>Decisão Colaborativa - Envolvendo o Time</strong><br>
Você propõe discutir priorities como team no próximo daily meeting.<br><br>
<strong>Daily meeting discussion:</strong><br>
• Team analisa true urgency do new request<br>
• Decides collectively para pause one current ticket<br>
• Move resources para address critical issue<br>
• Clear communication sobre impact em other work<br><br>
<strong>Resultado positivo:</strong><br>
• Critical issue resolved efficiently<br>
• Team maintains WIP discipline collectively<br>
• Stakeholder learns about proper prioritization process<br>
• No disruption para overall flow<br><br>
<strong>3 meses depois:</strong><br>
• You become known por thoughtful process adherence<br>
• Team trusts you para maintain flow discipline<br>
• Stakeholders learn para work through proper channels<br>
• Your collaborative approach influencia team culture positively<br>
• Recognition como emerging team leader através de process maturity`,
    explanation: `Excellent example de collaborative decision making within Kanban framework:<br><br>
• <strong>Team-based decisions</strong> - prioritization como collaborative activity<br>
• <strong>Process respect</strong> - working within system rather que breaking it<br>
• <strong>Stakeholder education</strong> - teaching proper channels para requests<br>
• <strong>Leadership development</strong> - influencing through process expertise<br><br>
Esta approach demonstrates mature understanding de Kanban principles. Individual discipline combined com team collaboration creates sustainable flow.`,
    references: [
      "Kanban Method: collaborative flow management",
      "Team leadership: influencing através de process expertise",
      "Stakeholder education: building understanding de flow principles"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-member-discipline": {
    id: "kanban-member-discipline",
    text: `<strong>Disciplina Rigorosa no WIP - Transformação Pessoal</strong><br>
Sua resposta surpreende completamente o manager, mas você explica calmamente os benefícios do foco total.<br><br>
<strong>Sua explanação educativa:</strong><br>
"Entendo a urgência, mas se eu parar meus 3 tickets atuais para começar um quarto, todos vão demorar mais para terminar. Deixe-me finalizar este que estou terminando agora - 2 horas no máximo - e depois pego seu urgente com total atenção."<br><br>
<strong>Resultado surpreendente:</strong><br>
• Você termina ticket atual em exatas 2 horas<br>
• Pega o bug "urgente" com mente clara<br>
• Descobre que era problema de configuração, resolve em 15 minutos<br><br>
<strong>Manager impressionado comenta:</strong><br>
"Incrível... você resolveu mais rápido porque não estava com a cabeça dividida em outras coisas. Faz sentido!"<br><br>
<strong>3 meses depois - Reconhecimento:</strong><br>
• Você se tornou referência interna em Kanban<br>
• Time frequentemente pede sua opinião sobre melhorias<br>
• Produtividade pessoal aumentou 40%<br>
• Nível de estresse diminuiu drasticamente<br><br>
<strong>Nova situação - Retrospectiva mensal:</strong><br>
"Pessoal, como podemos melhorar nosso fluxo ainda mais?"<br><br>
<strong>Sua proposta de evolução:</strong>`,
    tag: "continuous-improvement",
    choices: [
      { text: "Propor métricas de cycle time por tipo de ticket", next: "kanban-member-metrics" },
      { text: "Sugerir classes de serviço para diferentes urgências", next: "kanban-member-classes" },
      { text: "Implementar Definition of Ready mais rigorosa", next: "kanban-member-dor" }
    ]
  },

  "kanban-member-metrics": {
    id: "kanban-member-metrics",
    text: `<strong>Proposta de Métricas de Cycle Time por Tipo</strong><br>
Você sugere tracking detalhado de diferentes types de work para better predictability.<br><br>
<strong>Métricas propostas:</strong><br>
• Bug fixes: cycle time médio<br>
• New features: cycle time médio<br>
• Technical debt: cycle time médio<br>
• Emergency fixes: cycle time médio<br><br>
<strong>Implementation após 2 meses:</strong><br>
• Clear patterns emerge para different work types<br>
• Better estimation accuracy para stakeholders<br>
• Resource planning becomes more predictable<br>
• Team can commit para realistic timelines<br><br>
<strong>6 meses depois:</strong><br>
• You become team's data analysis expert<br>
• Lead improvements baseadas em metrics insights<br>
• Recognition por analytical approach para process improvement<br>
• Promoted para Senior Developer com analytics focus<br>
• Your data-driven insights influence organizational decisions`,
    explanation: `Excellent application de analytical thinking para Kanban optimization:<br><br>
• <strong>Work type classification</strong> - different types have different flow characteristics<br>
• <strong>Predictability improvement</strong> - data enables better forecasting<br>
• <strong>Evidence-based improvement</strong> - metrics guide optimization decisions<br>
• <strong>Stakeholder value</strong> - better predictability improves business relationships<br><br>
Esta approach demonstrates advanced Kanban practice - using metrics para understand e optimize flow characteristics de different work types.`,
    references: [
      "Actionable Agile Metrics - Daniel Vacanti: work type analysis",
      "Kanban Method: metrics-driven continuous improvement",
      "Flow-based forecasting usando historical cycle time data"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-member-dor": {
    id: "kanban-member-dor",
    text: `<strong>Definition of Ready Mais Rigorosa</strong><br>
Você propõe melhorar quality de work items antes de enter development.<br><br>
<strong>DoR criteria propostos:</strong><br>
• Clear acceptance criteria defined<br>
• Dependencies identified e resolved<br>
• Technical approach agreed upon<br>
• Estimates within confidence range<br><br>
<strong>Implementation results:</strong><br>
• 60% reduction em work que returns para analysis<br>
• Developers start work with clear understanding<br>
• Less context switching due para incomplete requirements<br>
• Improved flow consistency<br><br>
<strong>Team feedback:</strong><br>
"Much easier para work on tickets quando they're properly prepared!"<br><br>
<strong>6 meses depois:</strong><br>
• You lead requirements analysis improvements<br>
• Become bridge between business e development<br>
• Recognition por quality focus em process improvement<br>
• Evolution para Business Analyst role com technical background<br>
• Your quality-first approach influences team standards`,
    explanation: `Smart focus em upstream quality para improve downstream flow:<br><br>
• <strong>Prevention over rework</strong> - better preparation reduces later problems<br>
• <strong>Flow optimization</strong> - clear requirements improve development flow<br>
• <strong>Cross-functional bridge</strong> - connecting business needs com technical delivery<br>
• <strong>Quality systems</strong> - systematic approach para work preparation<br><br>
Definition of Ready é advanced Kanban practice que significantly improves flow quality. Focus em upstream quality prevents downstream disruption.`,
    references: [
      "Kanban Method: Definition of Ready como flow quality gate",
      "Lean principles: prevention over rework",
      "Requirements engineering: quality criteria para development readiness"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-member-classes": {
    id: "kanban-member-classes",
    text: `<strong>Classes de Serviço - Inovação no Sistema</strong><br>
Sua sugestão resulta em implementação de sistema mais sofisticado e eficiente:<br><br>
<strong>Classes de Serviço definidas colaborativamente:</strong><br>
• <strong>Expedite (Vermelho)</strong> - Bugs críticos de produção (SLA: 4 horas)<br>
• <strong>Standard (Azul)</strong> - Features e melhorias normais (SLA: 5 dias úteis)<br>
• <strong>Fixed Date (Laranja)</strong> - Integrações com deadline específico<br>
• <strong>Intangible (Verde)</strong> - Refatoração, débito técnico (sem SLA rígido)<br><br>
<strong>Resultado extraordinário após 6 meses:</strong><br>
• 96% dos expedites cumprindo SLA rigorosamente<br>
• Previsibilidade de entrega melhorou 200%<br>
• Stakeholders desenvolveram confiança total no time<br>
• Interrupções "urgentes" diminuíram 80%<br>
• Cliente satisfaction score: 4.6/5<br><br>
<strong>Reconhecimento organizacional:</strong><br>
• Você é promovido a Tech Lead<br>
• Modelo replicado em outros times da empresa<br>
• Você palestra sobre Kanban em meetups locais<br><br>
<strong>CEO comenta publicamente:</strong><br>
"A transformação deste time é um exemplo de como pessoas comprometidas podem revolucionar processos inteiros."`,
    explanation: `Implementação excepcional e avançada dos conceitos do Kanban Method:<br><br>
• <strong>Classes of Service</strong> - diferenciação inteligente por risco, urgência e tipo de trabalho<br>
• <strong>Service Level Agreements</strong> - compromissos realistas baseados em dados históricos<br>
• <strong>Risk Management</strong> - expedite lane para verdadeiras emergências organizacionais<br>
• <strong>Predictable Delivery</strong> - SLAs permitiram planejamento organizacional confiável<br>
• <strong>Continuous Evolution</strong> - sistema evoluiu organicamente baseado em necessidades reais<br><br>
Classes de Serviço são uma prática avançada do Kanban Method que reconhece que nem todo trabalho tem o mesmo nível de urgência, risco ou valor. Sua sugestão e liderança na implementação demonstram compreensão madura do sistema e verdadeira liderança técnica bottom-up. Esta evolução exemplifica como membros individuais podem driving continuous improvement organizacional.`,
    references: [
      "Kanban Method - David Anderson: Classes of Service e risk management",
      "Kanban University: Service Level Expectations e delivery planning",
      "Essential Kanban Condensed - Andy Carmichael: políticas de fluxo explícitas"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  // === JORNADA DO GERENTE DE PRODUTO ===
  "kanban-manager-start": {
    id: "kanban-manager-start",
    text: `<strong>Pressão Executiva Intensa</strong><br>
Como Gerente de Produto, você está recebendo pressão esmagadora de múltiplas direções:<br><br>
<strong>CEO (diariamente):</strong> "Por que demoramos 15 dias para resolver tickets simples? Concorrentes resolvem em 2 dias!"<br>
<strong>Clientes (constantemente):</strong> "Quando exatamente minha solicitação será atendida? Preciso de uma data!"<br>
<strong>Time técnico:</strong> "Não conseguimos trabalhar com tantas interrupções e mudanças de prioridade!"<br>
<strong>Vendas:</strong> "Precisamos daquela integração para fechar o deal de R$ 500k na sexta!"<br><br>
<strong>Situação que te mantém acordado à noite:</strong><br>
• Você não tem visibilidade real do que o time está fazendo<br>
• Estimativas são sistematicamente ultrapassadas<br>
• Prioridades mudam 3-4 vezes por semana<br>
• Relacionamento com clientes está deteriorando rapidamente<br>
• Sua credibilidade executiva está em risco<br><br>
<strong>Sua maior expectativa (desesperada) com Kanban:</strong>`,
    tag: "management-expectations",
    choices: [
      { text: "Ter previsibilidade real para commitments com clientes", next: "kanban-manager-predictability" },
      { text: "Aumentar drasticamente a velocidade de entrega", next: "kanban-manager-velocity" },
      { text: "Melhorar comunicação entre todas as áreas", next: "kanban-manager-communication" },
      { text: "Reduzir custos operacionais significativamente", next: "kanban-manager-costs" }
    ]
  },

  "kanban-manager-velocity": {
    id: "kanban-manager-velocity",
    text: `<strong>Foco Equivocado na Velocidade</strong><br>
Você pressure team para deliver more tickets faster usando Kanban como accelerator tool.<br><br>
<strong>Metrics você implements:</strong><br>
• Count de tickets delivered per week<br>
• Time tracking individual performance<br>
• Pressure para reduce cycle time<br>
• WIP limits ignored when "urgent" work appears<br><br>
<strong>Short-term apparent success (1 month):</strong><br>
• Ticket count increases 30%<br>
• Executive team impressed<br>
• You feel vindicated<br><br>
<strong>System breakdown (3 months):</strong><br>
• Quality deteriorates severely<br>
• Technical debt accumulates rapidly<br>
• Team burnout increases<br>
• Customer complaints skyrocket<br>
• Long-term delivery capacity crashes<br><br>
<strong>6 months later:</strong><br>
• System nearly unusable due para technical debt<br>
• Team turnover 40%<br>
• Customer satisfaction at all-time low<br>
• Executive questions your product leadership<br>
• Kanban blamed para failure, methodology abandoned`,
    explanation: `Classic mistake de treating Kanban como speed tool rather que flow optimization system:<br><br>
• <strong>Velocity vs Flow</strong> - optimizing para speed destroys sustainable delivery<br>
• <strong>Quality sacrifice</strong> - pressure para quantity undermines long-term capacity<br>
• <strong>Sustainable pace ignored</strong> - burnout reduces overall system effectiveness<br>
• <strong>System gaming</strong> - metrics focused em wrong outcomes<br><br>
Kanban não é about going faster - é about creating sustainable, predictable flow. Velocity focus without quality consideration é recipe para system breakdown.`,
    references: [
      "Kanban Method: sustainable flow vs speed optimization",
      "Little's Law: relationship between throughput, WIP e lead time",
      "System thinking: local optimization vs system optimization"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-manager-communication": {
    id: "kanban-manager-communication",
    text: `<strong>Foco na Melhoria da Comunicação</strong><br>
Você implements Kanban primarily como communication e coordination tool.<br><br>
<strong>Communication improvements implemented:</strong><br>
• Daily standup meetings around board<br>
• Visual status updates para stakeholders<br>
• Regular progress reports baseadas em board state<br>
• Clear escalation paths para blocked work<br><br>
<strong>Positive results (2 months):</strong><br>
• Much better visibility across teams<br>
• Reduced confusion about priorities<br>
• Faster identification de impediments<br>
• Improved stakeholder satisfaction com transparency<br><br>
<strong>However, missing deeper optimization:</strong><br>
• Lead times remain high<br>
• Throughput doesn't improve significantly<br>
• Quality issues persist<br>
• Limited improvement em delivery predictability<br><br>
<strong>Learning opportunity:</strong><br>
Good communication é necessary but not sufficient. Kanban pode deliver much more quando flow optimization principles são applied.`,
    choices: [
      { text: "Expand para flow optimization practices", next: "kanban-manager-communication-evolution" },
      { text: "Focus purely on communication benefits", next: "kanban-manager-communication-limited" }
    ]
  },

  "kanban-manager-communication-evolution": {
    id: "kanban-manager-communication-evolution",
    text: `<strong>Evolução para Otimização de Fluxo</strong><br>
Building on communication success, você expands para comprehensive flow optimization.<br><br>
<strong>Additional practices implemented:</strong><br>
• WIP limits para prevent overloading<br>
• Lead time tracking e analysis<br>
• Bottleneck identification e resolution<br>
• Continuous improvement based em metrics<br><br>
<strong>Comprehensive results after 6 months:</strong><br>
• Lead time reduced from 15 para 7 days<br>
• Throughput increased 45%<br>
• Quality improved significantly<br>
• Predictability enabling reliable customer commitments<br>
• Team satisfaction increased due para sustainable pace<br><br>
<strong>Recognition:</strong><br>
• Model replicated across organization<br>
• You promoted para VP Product<br>
• Case study em successful process transformation<br>
• Balance de communication E flow optimization achieved`,
    explanation: `Successful evolution from communication focus para comprehensive flow optimization:<br><br>
• <strong>Building on foundation</strong> - communication improvements enabled further optimization<br>
• <strong>Comprehensive approach</strong> - addressing both collaboration E system flow<br>
• <strong>Sustainable results</strong> - long-term improvements em multiple dimensions<br>
• <strong>Organizational impact</strong> - success scaled beyond single team<br><br>
Esta jornada illustrates how communication improvements can be foundation para deeper process optimization. Starting com visible benefits enables broader transformation.`,
    references: [
      "Kanban Method: communication como foundation para flow optimization",
      "Organizational change: building em early wins para expand transformation",
      "Process maturity: evolution from basic para advanced practices"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-manager-communication-limited": {
    id: "kanban-manager-communication-limited",
    text: `<strong>Limitação ao Foco em Comunicação</strong><br>
Você maintains focus apenas em communication benefits sem expand para flow optimization.<br><br>
<strong>Results after 1 year:</strong><br>
• Good transparency e coordination maintained<br>
• Stakeholder satisfaction com visibility<br>
• But delivery performance plateaued<br>
• Competitive disadvantage develops<br>
• Limited career advancement due para modest results<br><br>
<strong>Missed opportunities:</strong><br>
• Could have achieved dramatic flow improvements<br>
• Team capable de much higher performance<br>
• Customers would benefit from faster, reliable delivery<br>
• Organization could have competitive advantage<br><br>
<strong>Learning:</strong><br>
Communication improvements são valuable mas represent apenas fraction de Kanban potential. Full benefits require comprehensive flow optimization approach.`,
    explanation: `Limited scope approach que doesn't realize full potential de Kanban Method:<br><br>
• <strong>Partial implementation</strong> - communication without flow optimization<br>
• <strong>Plateau effect</strong> - benefits level off without deeper practices<br>
• <strong>Missed competitive advantage</strong> - competitors com full Kanban can outperform<br>
• <strong>Opportunity cost</strong> - team capable de much higher performance<br><br>
Esta scenario shows importance de comprehensive approach para Kanban implementation. Communication alone não unlocks full system potential.`,
    references: [
      "Kanban Method: comprehensive practices para full benefits",
      "System optimization: communication alone insufficient para flow improvement",
      "Competitive advantage através de superior delivery capability"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-manager-costs": {
    id: "kanban-manager-costs",
    text: `<strong>Foco em Redução de Custos</strong><br>
Você approaches Kanban primarily como cost reduction initiative.<br><br>
<strong>Cost reduction strategies:</strong><br>
• Reduce team size through efficiency gains<br>
• Minimize "waste" em development process<br>
• Track individual productivity metrics<br>
• Cut training e improvement investments<br><br>
<strong>Short-term cost savings (3 months):</strong><br>
• Team reduced from 12 para 9 people<br>
• Process overhead minimized<br>
• Training budget eliminated<br>
• Executive team pleased com cost savings<br><br>
<strong>Long-term degradation (6 months):</strong><br>
• Remaining team overloaded e stressed<br>
• Knowledge gaps develop<br>
• Innovation decreases<br>
• Quality issues increase<br>
• Customer satisfaction declines<br><br>
<strong>1 year later:</strong><br>
• Major production incidents due para knowledge gaps<br>
• Customer churn increases<br>
• Revenue impact exceeds cost savings<br>
• Need para hire back (expensive rehiring process)<br>
• Reputation damage em market`,
    explanation: `Cost reduction focus que undermines system capability e long-term value:<br><br>
• <strong>False economy</strong> - cutting capability reduces long-term value creation<br>
• <strong>System degradation</strong> - optimization para cost destroys flow quality<br>
• <strong>Knowledge loss</strong> - team reduction eliminates critical capabilities<br>
• <strong>Revenue impact</strong> - poor delivery affects customer retention<br><br>
Kanban should optimize para value delivery, not cost cutting. Focus em efficiency through better flow, not through resource reduction.`,
    references: [
      "Lean principles: eliminate waste, don't eliminate capacity",
      "Value stream optimization: focus em value delivery",
      "System thinking: cost cuts can undermine overall system performance"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-manager-predictability": {
    id: "kanban-manager-predictability",
    text: `<strong>Foco Estratégico na Previsibilidade</strong><br>
Você trabalha intensivamente com o coach para implementar métricas que realmente ajudem no planejamento estratégico.<br><br>
<strong>Primeiro mês - Coletando dados baseline (chocantes):</strong><br>
• Lead time médio atual: 12 dias (variação extrema: 3-28 dias)<br>
• Throughput inconsistente: 8-15 tickets/semana<br>
• 35% dos tickets estouram estimativa original por fator 2x+<br>
• 25% dos "urgentes" não eram realmente urgentes<br><br>
<strong>Terceiro mês - Após estabilizar WIP e fluxo:</strong><br>
• Lead time médio: 6 dias (variação controlada: 4-8 dias)<br>
• Throughput previsível: 12-14 tickets/semana consistentemente<br>
• 87% dos tickets entregues dentro do prazo esperado<br>
• Expedites reais: apenas 5% do volume total<br><br>
<strong>Situação de teste real - Cliente estratégico liga:</strong><br>
"Preciso urgente da integração com nosso ERP. Quando posso esperar isso funcionando? Meu CEO está cobrando uma data específica."<br><br>
<strong>Sua resposta transformada (baseada em dados reais):</strong>`,
    tag: "customer-communication",
    choices: [
      { text: "'Baseado em nosso lead time atual, em 6-8 dias úteis'", next: "kanban-manager-sla-success" },
      { text: "'Vou verificar com o time e te retorno em 24h'", next: "kanban-manager-uncertainty" },
      { text: "'Posso acelerar se for classificada como expedite'", next: "kanban-manager-priority-juggling" }
    ]
  },

  "kanban-manager-uncertainty": {
    id: "kanban-manager-uncertainty",
    text: `<strong>Retorno à Incerteza - Oportunidade Perdida</strong><br>
Apesar de ter dados de lead time, você falls back em old pattern de uncertainty.<br><br>
<strong>Customer reaction:</strong><br>
"Novamente a mesma resposta vaga... vocês nunca conseguem me dar uma data específica."<br><br>
<strong>Internal discussion com team:</strong><br>
• Team confirms work é standard complexity<br>
• Historical data shows 85% confidence para 6-8 days<br>
• You realize missed opportunity para demonstrate predictability<br><br>
<strong>Learning moment:</strong><br>
Having data sem confidence para use it limits value de process improvements. Need para build confidence em using metrics para customer communication.<br><br>
<strong>Next customer call:</strong><br>
You resolve para use data-driven responses e build reputation para reliability.`,
    explanation: `Missed opportunity para leverage process improvements para customer value:<br><br>
• <strong>Data without confidence</strong> - having metrics mas not using them effectively<br>
• <strong>Old patterns persist</strong> - reverting para previous behavior despite better information<br>
• <strong>Customer relationships</strong> - predictability é major competitive advantage<br>
• <strong>Learning opportunity</strong> - recognition de need para change communication approach<br><br>
This scenario shows que technical process improvements must be coupled com changed management behaviors para deliver full value.`,
    references: [
      "Customer communication: using flow metrics para build trust",
      "Kanban Method: predictability como competitive advantage",
      "Change management: adapting communication patterns para leverage process improvements"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-manager-priority-juggling": {
    id: "kanban-manager-priority-juggling",
    text: `<strong>Priority Juggling - Undermining Flow Discipline</strong><br>
Você offers para reclassify work como expedite para accommodate customer pressure.<br><br>
<strong>Immediate response:</strong><br>
Customer pleased com apparent priority treatment<br><br>
<strong>System impact over time:</strong><br>
• More requests para expedite classification<br>
• WIP limits broken para accommodate "urgent" work<br>
• Flow disruption affects all other work<br>
• Predictability deteriorates<br>
• Team stress increases due para constant priority changes<br><br>
<strong>3 months later:</strong><br>
• 40% de work classified como expedite<br>
• System back para previous chaotic state<br>
• Lead times increase para 10+ days<br>
• Customer satisfaction declines due para unreliable delivery<br><br>
<strong>Learning:</strong><br>
Priority juggling destroys flow discipline. True expedite classification must be rare e rigorously controlled para maintain system integrity.`,
    explanation: `System degradation through expedite abuse e priority juggling:<br><br>
• <strong>Expedite inflation</strong> - too many expedites destroys classification value<br>
• <strong>Flow disruption</strong> - constant priority changes prevent stable flow<br>
• <strong>WIP discipline lost</strong> - exceptions become rule<br>
• <strong>System gaming</strong> - stakeholders learn para request expedite status<br><br>
Classes de Service require strict governance. Expedite deve ser truly exceptional para maintain system effectiveness.`,
    references: [
      "Kanban Method: Classes of Service e expedite governance",
      "Flow disruption: impact de constant priority changes",
      "System integrity: maintaining discipline em classification policies"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  },

  "kanban-manager-sla-success": {
    id: "kanban-manager-sla-success",
    text: `<strong>Previsibilidade Conquistada - Transformação Completa</strong><br>
Sua resposta baseada em dados históricos reais gera impacto transformador.<br><br>
<strong>Cliente impressionado:</strong><br>
"Uau! É a primeira vez em 2 anos que vocês me dão um prazo específico e confiável. Finalmente posso planejar meu projeto e comunicar com meu CEO com segurança!"<br><br>
<strong>7 dias depois:</strong> Integração entregue exatamente conforme prometido, funcionando perfeitamente.<br><br>
<strong>6 meses depois - Transformação organizacional completa:</strong><br>
• NPS de clientes: 6.2 → 8.4 (+35%)<br>
• Taxa de renovação de contratos: +42%<br>
• Vendas conseguem prometer prazos realistas em propostas<br>
• Você reconhecido como 'manager data-driven do ano'<br>
• Zero escalações executivas relacionadas a prazos<br><br>
<strong>1 ano depois - Impacto no negócio:</strong><br>
• Revenue recorrente cresceu 28% (retenção + upsell)<br>
• Custo de aquisição diminuiu (referências orgânicas)<br>
• Você promovido a VP of Product<br><br>
<strong>CEO testemunha em all-hands:</strong><br>
"A transformação do nosso produto delivery é o maior case de sucesso dos últimos 3 anos. Finalmente temos um produto que entrega consistentemente o que promete, quando promete."`,
    explanation: `Transformação exemplar de gestão reativa para gestão baseada em evidências, seguindo princípios do Kanban Method:<br><br>
• <strong>Service Level Expectations</strong> - compromissos baseados em dados históricos reais, não esperanças<br>
• <strong>Predictable Delivery</strong> - Kanban criou sistema de forecast confiável e sustentável<br>
• <strong>Customer Trust</strong> - transparência radical sobre capacidade real vs promessas irreais<br>
• <strong>Business Value Optimization</strong> - métricas técnicas se traduziram diretamente em resultados comerciais<br>
• <strong>Stakeholder Alignment</strong> - dados objetivos eliminaram conflitos sobre prioridades<br><br>
Esta jornada ilustra perfeitamente como Kanban transcende desenvolvimento de software para se tornar sistema de entrega organizacional previsível. A evolução de "vou verificar" para "baseado nos dados históricos, X dias" marca verdadeira maturidade no method. O impacto no business (revenue, retention, NPS) demonstra que operational excellence drives business results.`,
    references: [
      "Actionable Agile Metrics - Daniel Vacanti: forecasting baseado em dados históricos",
      "Kanban Method - David Anderson: Service Level Expectations e business agility",
      "Kanban University: métricas que conectam operational performance com business outcomes"
    ],
    choices: [{ text: "Jogar novamente", next: "kanban-role" }]
  }
};
