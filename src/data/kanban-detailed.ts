
import { StoryGraph } from "../types/game";

export const kanbanDetailed: StoryGraph = {
  "kanban-role": {
    id: "kanban-role",
    text: `<strong>Projeto Real: Sistema de Atendimento ao Cliente</strong><br>
Uma empresa de tecnologia está enfrentando problemas com seu sistema de tickets de suporte. O time de 12 pessoas precisa gerenciar 200+ tickets por semana, mas o processo atual está caótico: tickets ficam perdidos, prioridades não são claras, e clientes reclamam de lentidão no atendimento.<br><br>
<strong>Situação atual:</strong><br>
• Backlog: 300 tickets não organizados<br>
• Lead time médio: 15 dias<br>
• 40% dos tickets precisam ser refeitos<br>
• Time trabalha sem visibilidade do fluxo<br><br>
Você foi chamado para implementar Kanban. Qual papel você assume?`,
    choices: [
      { text: "Facilitador/Coach Kanban", next: "kanban-coach-start" },
      { text: "Membro da Equipe", next: "kanban-member-start" },
      { text: "Gerente de Produto", next: "kanban-manager-start" }
    ]
  },

  // === JORNADA DO COACH KANBAN ===
  "kanban-coach-start": {
    id: "kanban-coach-start",
    text: `<strong>Dia 1 - Diagnóstico Inicial</strong><br>
Como Coach Kanban, você precisa entender o fluxo atual antes de implementar mudanças.<br><br>
<strong>Observações da manhã:</strong><br>
• Desenvolvedores pegam tickets aleatoriamente<br>
• QA tem fila de 25 tickets esperando<br>
• Stakeholders interrompem constantemente o trabalho<br>
• Ninguém sabe quantos tickets cada pessoa está fazendo<br><br>
<strong>Conversa com o gerente:</strong><br>
"Precisamos de mais velocidade! O time está lento!"<br><br>
<strong>Sua primeira ação como Coach:</strong>`,
    tag: "kanban-diagnosis",
    choices: [
      { text: "Mapear o fluxo atual com value stream mapping", next: "kanban-coach-mapping" },
      { text: "Implementar quadro Kanban imediatamente", next: "kanban-coach-hasty" },
      { text: "Treinar o time em teoria Kanban primeiro", next: "kanban-coach-theory" },
      { text: "Estabelecer métricas de performance", next: "kanban-coach-metrics" }
    ]
  },

  "kanban-coach-mapping": {
    id: "kanban-coach-mapping",
    text: `<strong>Sessão de Value Stream Mapping</strong><br>
Você reuniu todo o time para mapear o fluxo atual de trabalho.<br><br>
<strong>Descobertas importantes:</strong><br>
• Ticket fica 3 dias em "Análise" (apenas 30min de trabalho real)<br>
• Desenvolvimento: 2 dias de trabalho, 5 dias de espera<br>
• QA: 1 dia de teste, 4 dias na fila<br>
• 60% do tempo é desperdício (waiting)<br><br>
<strong>Time reage:</strong><br>
"Nossa, eu não sabia que meu trabalho ficava parado tanto tempo!"<br><br>
<strong>Próximo passo:</strong>`,
    tag: "process-improvement",
    choices: [
      { text: "Criar quadro Kanban baseado no fluxo mapeado", next: "kanban-coach-board" },
      { text: "Definir WIP limits para cada etapa", next: "kanban-coach-wip" },
      { text: "Implementar daily standup primeiro", next: "kanban-coach-daily" }
    ]
  },

  "kanban-coach-board": {
    id: "kanban-coach-board",
    text: `<strong>Implementação do Quadro Kanban</strong><br>
Baseado no value stream mapping, você criou um quadro com as colunas:<br>
<strong>Backlog → Análise → Desenvolvimento → Code Review → Teste → Deploy → Done</strong><br><br>
<strong>Semana 1 - Resultados:</strong><br>
• Visibilidade total do trabalho em andamento<br>
• Time identifica gargalos facilmente<br>
• Mas... muitos tickets ainda ficam "presos" em certas colunas<br><br>
<strong>Observação crítica:</strong><br>
Coluna "Teste" tem 15 tickets, "Desenvolvimento" tem apenas 3.<br><br>
<strong>Sua intervenção:</strong>`,
    tag: "bottleneck-management",
    choices: [
      { text: "Implementar WIP limit de 5 na coluna Teste", next: "kanban-coach-wip-success" },
      { text: "Contratar mais testadores", next: "kanban-coach-hire-fail" },
      { text: "Mover desenvolvedores para ajudar em testes", next: "kanban-coach-cross-training" },
      { text: "Criar subcoluna 'Waiting for Test'", next: "kanban-coach-subcol" }
    ]
  },

  "kanban-coach-wip-success": {
    id: "kanban-coach-wip-success",
    text: `<strong>WIP Limits Transformam o Fluxo</strong><br>
WIP limit de 5 em "Teste" forçou mudanças comportamentais importantes.<br><br>
<strong>Mês 1 - Resultados:</strong><br>
• Desenvolvedores param de começar novos tickets quando Teste está cheio<br>
• Time começa a colaborar para resolver gargalos<br>
• Lead time cai de 15 para 8 dias<br>
• Qualidade melhora: menos tickets voltam para correção<br><br>
<strong>Feedback do time:</strong><br>
"No início foi frustrante não poder pegar novo trabalho, mas agora entendemos que terminar é mais importante que começar."<br><br>
<strong>Próximo desafio - Stakeholder reclama:</strong><br>
"Vocês estão entregando menos tickets por semana!"`,
    tag: "stakeholder-education",
    choices: [
      { text: "Mostrar métricas de lead time e qualidade", next: "kanban-coach-metrics-success" },
      { text: "Aumentar temporariamente o WIP", next: "kanban-coach-compromise" },
      { text: "Explicar teoria do throughput vs WIP", next: "kanban-coach-theory-success" }
    ]
  },

  "kanban-coach-metrics-success": {
    id: "kanban-coach-metrics-success",
    text: `<strong>O Poder das Métricas</strong><br>
Você apresentou dashboard com dados convincentes:<br><br>
<strong>Métricas Before/After Kanban:</strong><br>
• Lead Time: 15 dias → 8 dias (-47%)<br>
• Throughput: 12 tickets/semana → 18 tickets/semana (+50%)<br>
• Retrabalho: 40% → 15% (-62%)<br>
• Satisfação do cliente: 3.2 → 4.1 (+28%)<br><br>
<strong>Stakeholder:</strong> "Impressionante! Como conseguiram melhorar velocidade E qualidade?"<br><br>
<strong>6 meses depois:</strong><br>
Sistema Kanban está consolidado. Time pede para implementar em outros projetos.`,
    explanation: `Excelente execução dos princípios fundamentais do Kanban:<br><br>
• <strong>Visualizar o trabalho</strong> - quadro tornou fluxo transparente<br>
• <strong>Limitar WIP</strong> - reduziu multitasking e melhorou foco<br>
• <strong>Gerenciar fluxo</strong> - métricas guiaram decisões<br>
• <strong>Tornar políticas explícitas</strong> - WIP limits claros para todos<br>
• <strong>Ciclos de feedback</strong> - dados para melhoria contínua<br>
• <strong>Melhorar colaborativamente</strong> - time evoluiu junto<br><br>
Esta implementação demonstra maturidade Kanban: começar com o que existe, evoluir incrementalmente, e usar dados para guiar decisões. O foco em métricas de fluxo (lead time, throughput) ao invés de apenas velocidade mostra entendimento profundo do método.`,
    references: [
      "Kanban Method - David Anderson: 6 práticas fundamentais",
      "Actionable Agile Metrics - Daniel Vacanti: métricas de fluxo",
      "Kanban Maturity Model - evolução incremental baseada em dados"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  // === JORNADA DO MEMBRO DA EQUIPE ===
  "kanban-member-start": {
    id: "kanban-member-start",
    text: `<strong>Perspectiva do Desenvolvedor</strong><br>
Você é desenvolvedor sênior há 3 anos na empresa. Está acostumado a trabalhar com múltiplos tickets simultaneamente e ser interrompido constantemente por "urgências".<br><br>
<strong>Seu dia típico atual:</strong><br>
• 9h: Começa ticket A (bug crítico)<br>
• 10h: Manager pede para olhar ticket B (novo feature)<br>
• 11h: QA encontra problema no ticket C (feito semana passada)<br>
• 14h: Stakeholder pede estimativa para ticket D<br>
• 16h: Volta para ticket A... onde estava mesmo?<br><br>
<strong>Coach anuncia:</strong> "Vamos implementar Kanban!"<br><br>
<strong>Sua reação inicial:</strong>`,
    tag: "change-resistance",
    choices: [
      { text: "Ceticismo: 'Mais uma metodologia da moda'", next: "kanban-member-skeptic" },
      { text: "Interesse: 'Pode melhorar nossa organização'", next: "kanban-member-interest" },
      { text: "Preocupação: 'Vai burocratizar nosso trabalho'", next: "kanban-member-worry" },
      { text: "Indiferença: 'Tanto faz, só quero programar'", next: "kanban-member-indifferent" }
    ]
  },

  "kanban-member-interest": {
    id: "kanban-member-interest",
    text: `<strong>Adoção Entusiasmada</strong><br>
Você abraça o Kanban desde o início e se torna early adopter.<br><br>
<strong>Primeira semana com quadro Kanban:</strong><br>
• Você move seus cards conscientemente<br>
• Ajuda colegas a entender o fluxo<br>
• Questiona quando vê WIP alto<br>
• Sugere melhorias no processo<br><br>
<strong>Situação real - Terça-feira, 15h:</strong><br>
Manager chega: "Preciso que você dê uma olhada rápida neste bug urgente."<br>
Você olha o quadro: já tem 3 tickets em "Desenvolvimento".<br><br>
<strong>Sua resposta:</strong>`,
    tag: "wip-discipline",
    choices: [
      { text: "'Posso ajudar, mas preciso terminar um dos atuais primeiro'", next: "kanban-member-discipline" },
      { text: "'Claro, vou dar uma olhada rápida agora'", next: "kanban-member-multitask" },
      { text: "'Vamos ver com o time qual prioridade no daily'", next: "kanban-member-team-decision" }
    ]
  },

  "kanban-member-discipline": {
    id: "kanban-member-discipline",
    text: `<strong>Disciplina no WIP</strong><br>
Sua resposta surpreende o manager, mas você explica os benefícios do foco.<br><br>
<strong>Você termina ticket atual em 2 horas, depois pega o "urgente".</strong><br><br>
<strong>Descoberta:</strong> O bug "urgente" era na verdade um problema de configuração, resolvido em 15 minutos.<br><br>
<strong>Manager comenta:</strong> "Interessante... você resolveu mais rápido porque não estava com a cabeça em outras coisas."<br><br>
<strong>3 meses depois:</strong><br>
Você se tornou referência em Kanban. Time pede sua opinião sobre melhorias no processo.<br><br>
<strong>Nova situação - Retrospectiva:</strong><br>
"Como podemos melhorar nosso fluxo ainda mais?"`,
    tag: "continuous-improvement",
    choices: [
      { text: "Propor métricas de cycle time por tipo de ticket", next: "kanban-member-metrics" },
      { text: "Sugerir classes de serviço para diferentes urgências", next: "kanban-member-classes" },
      { text: "Implementar Definition of Ready mais rigorosa", next: "kanban-member-dor" }
    ]
  },

  "kanban-member-classes": {
    id: "kanban-member-classes",
    text: `<strong>Classes de Serviço Implementadas</strong><br>
Sua sugestão resulta em sistema mais sofisticado:<br><br>
<strong>Classes definidas:</strong><br>
• <strong>Expedite</strong> - Bugs críticos (SLA: 4 horas)<br>
• <strong>Standard</strong> - Features normais (SLA: 5 dias)<br>
• <strong>Fixed Date</strong> - Integrações com prazo (SLA: data específica)<br>
• <strong>Intangible</strong> - Refatoração, débito técnico (sem SLA)<br><br>
<strong>Resultado após 6 meses:</strong><br>
• 95% dos expedites cumprindo SLA<br>
• Previsibilidade de entrega melhorou drasticamente<br>
• Stakeholders confiam mais no time<br>
• Você é promovido a Tech Lead`,
    explanation: `Implementação excepcional de conceitos avançados do Kanban:<br><br>
• <strong>Classes of Service</strong> - diferenciação por risco e urgência<br>
• <strong>Service Level Agreements</strong> - compromissos baseados em dados<br>
• <strong>Risk Management</strong> - expedite para verdadeiras emergências<br>
• <strong>Predictability</strong> - SLAs permitem planejamento confiável<br><br>
Classes de serviço são uma prática avançada do Kanban Method que reconhece que nem todo trabalho é igual. Sua sugestão demonstra compreensão madura do sistema e liderança técnica. Esta evolução mostra como membros de equipe podem driving continuous improvement.`,
    references: [
      "Kanban Method - David Anderson: Classes of Service",
      "Kanban Maturity Model - Service delivery planning",
      "Risk Management in Kanban - expedite lanes e SLAs"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  // === JORNADA DO GERENTE DE PRODUTO ===
  "kanban-manager-start": {
    id: "kanban-manager-start",
    text: `<strong>Pressão da Liderança</strong><br>
Como Gerente de Produto, você tem pressão de todos os lados:<br><br>
<strong>CEO:</strong> "Por que demoramos tanto para resolver tickets simples?"<br>
<strong>Clientes:</strong> "Quando minha solicitação será atendida?"<br>
<strong>Time:</strong> "Não conseguimos trabalhar com tantas interrupções."<br>
<strong>Vendas:</strong> "Precisamos daquela feature para fechar o deal."<br><br>
<strong>Situação atual que te preocupa:</strong><br>
• Você não tem visibilidade real do que o time está fazendo<br>
• Estimativas são sempre ultrapassadas<br>
• Prioridades mudam toda semana<br>
• Relacionamento com clientes está desgastado<br><br>
<strong>Sua maior expectativa com Kanban:</strong>`,
    tag: "management-expectations",
    choices: [
      { text: "Ter previsibilidade para commitments com clientes", next: "kanban-manager-predictability" },
      { text: "Aumentar a velocidade de entrega do time", next: "kanban-manager-velocity" },
      { text: "Melhorar comunicação entre áreas", next: "kanban-manager-communication" },
      { text: "Reduzir custos operacionais", next: "kanban-manager-costs" }
    ]
  },

  "kanban-manager-predictability": {
    id: "kanban-manager-predictability",
    text: `<strong>Foco na Previsibilidade</strong><br>
Você trabalha com o coach para implementar métricas que ajudem no planejamento.<br><br>
<strong>Primeiro mês - Coletando dados:</strong><br>
• Lead time médio: 12 dias (com variação alta)<br>
• Throughput: 8-15 tickets/semana (inconsistente)<br>
• 30% dos tickets estouram estimativa original<br><br>
<strong>Terceiro mês - Após estabilizar WIP:</strong><br>
• Lead time médio: 7 dias (variação baixa)<br>
• Throughput: 12-14 tickets/semana (previsível)<br>
• 85% dos tickets entregues no prazo esperado<br><br>
<strong>Situação real - Cliente importante liga:</strong><br>
"Quando posso esperar a integração com nosso sistema?"<br><br>
<strong>Sua resposta baseada em dados Kanban:</strong>`,
    tag: "customer-communication",
    choices: [
      { text: "'Baseado em nosso lead time, em 7-10 dias úteis'", next: "kanban-manager-sla-success" },
      { text: "'Vou verificar com o time e te retorno'", next: "kanban-manager-uncertainty" },
      { text: "'Posso acelerar se for prioridade máxima'", next: "kanban-manager-priority-juggling" }
    ]
  },

  "kanban-manager-sla-success": {
    id: "kanban-manager-sla-success",
    text: `<strong>Previsibilidade Conquistada</strong><br>
Sua resposta baseada em dados reais gera confiança.<br><br>
<strong>Cliente:</strong> "Perfeito! É a primeira vez que vocês me dão um prazo específico. Posso planejar meu projeto baseado nisso."<br><br>
<strong>8 dias depois:</strong> Integração entregue conforme prometido.<br><br>
<strong>6 meses depois - Resultados de negócio:</strong><br>
• NPS de clientes subiu de 6.2 para 8.1<br>
• Renovações de contrato: +35%<br>
• Vendas conseguem prometer prazos realistas<br>
• Você é reconhecido como 'manager data-driven'<br><br>
<strong>CEO comenta:</strong><br>
"Finalmente temos um produto que entrega o que promete!"`,
    explanation: `Transformação exemplar de gestão reativa para gestão baseada em dados:<br><br>
• <strong>Service Level Expectations</strong> - compromissos baseados em dados históricos<br>
• <strong>Predictable Delivery</strong> - Kanban permitiu forecast confiável<br>
• <strong>Customer Trust</strong> - transparência sobre capacidade real<br>
• <strong>Business Value</strong> - métricas técnicas se traduziram em resultados comerciais<br><br>
Esta jornada ilustra como Kanban não é apenas sobre desenvolvimento, mas sobre criar um sistema de entrega previsível que permite à empresa fazer compromissos realistas. A evolução de 'vou verificar' para 'baseado nos dados, X dias' marca maturidade no method.`,
    references: [
      "Actionable Agile Metrics - Daniel Vacanti: forecasting baseado em dados",
      "Kanban Method - David Anderson: Service Level Expectations",
      "Evidence-Based Management - métricas que importam para o negócio"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  }
};
