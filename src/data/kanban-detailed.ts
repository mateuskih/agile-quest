
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
    choices: [{ text: "Jogar novamente", next: "start" }]
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
<strong>Sua reação inicial honest:</strong>`,
    tag: "change-resistance",
    choices: [
      { text: "Ceticismo: 'Mais uma metodologia da moda que vai passar'", next: "kanban-member-skeptic" },
      { text: "Interesse genuíno: 'Pode realmente melhorar nossa organização'", next: "kanban-member-interest" },
      { text: "Preocupação: 'Vai burocratizar demais nosso trabalho'", next: "kanban-member-worry" },
      { text: "Indiferença: 'Tanto faz, só quero programar em paz'", next: "kanban-member-indifferent" }
    ]
  },

  "kanban-member-interest": {
    id: "kanban-member-interest",
    text: `<strong>Adoção Entusiasmada e Transformação</strong><br>
Você abraça o Kanban desde o primeiro dia e se torna early adopter enthusiástico.<br><br>
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
    choices: [{ text: "Jogar novamente", next: "start" }]
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
    choices: [{ text: "Jogar novamente", next: "start" }]
  }
};
