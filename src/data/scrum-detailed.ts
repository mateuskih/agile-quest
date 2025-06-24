
import { StoryGraph } from "../types/game";

export const scrumDetailed: StoryGraph = {
  "scrum-role": {
    id: "scrum-role",
    text: `<strong>Projeto Real: E-commerce Mobile App</strong><br>
Você faz parte de um time Scrum desenvolvendo um aplicativo de e-commerce para uma startup que acabou de receber investimento de R$ 2 milhões. O CEO quer lançar em 3 meses para competir com grandes players do mercado.<br><br>
<strong>Contexto atual:</strong><br>
• Time: 7 pessoas (3 devs, 2 designers, 1 QA, 1 PO)<br>
• Backlog: 150 itens não priorizados<br>
• Stakeholders: CEO, investidores, marketing<br>
• Pressão alta para entrega rápida<br><br>
Qual papel você assume neste desafio?`,
    choices: [
      { text: "Scrum Master", next: "scrum-master-start" },
      { text: "Product Owner", next: "scrum-po-start" },
      { text: "Developer", next: "scrum-dev-start" }
    ]
  },

  // === JORNADA DO SCRUM MASTER ===
  "scrum-master-start": {
    id: "scrum-master-start",
    text: `<strong>Primeira Semana como Scrum Master</strong><br>
O time está em caos. Você observa durante a primeira semana:<br><br>
<strong>Problemas identificados:</strong><br>
• CEO interrompe developers diariamente com "ideias urgentes"<br>
• Product Owner mudou prioridades 4 vezes esta semana<br>
• Time trabalha até tarde, mas velocity é baixa<br>
• Ninguém sabe exatamente o que será entregue no final da Sprint<br>
• Daily Scrum dura 45 minutos com discussões técnicas detalhadas<br><br>
<strong>Desenvolvedores reclamam:</strong><br>
"Não conseguimos nos concentrar com tantas mudanças!"<br><br>
<strong>Sua primeira ação como Scrum Master:</strong>`,
    tag: "servant-leadership",
    choices: [
      { text: "Implementar Sprint Goal claro e proteger o time", next: "scrum-master-protect" },
      { text: "Organizar workshop sobre fundamentos Scrum", next: "scrum-master-workshop" },
      { text: "Confrontar CEO sobre interrupções", next: "scrum-master-confront-fail" },
      { text: "Focar apenas em otimizar cerimônias", next: "scrum-master-ceremonies-only" }
    ]
  },

  "scrum-master-protect": {
    id: "scrum-master-protect",
    text: `<strong>Implementando Sprint Goal</strong><br>
Você trabalha com o PO para definir um Sprint Goal claro: "Usuário pode criar conta, fazer login e visualizar produtos".<br><br>
<strong>Ações tomadas:</strong><br>
• Sprint Goal visível para todos<br>
• Acordo com CEO: mudanças só na próxima Sprint<br>
• Daily focada no progresso em direção ao Goal<br>
• Time protegido de interrupções externas<br><br>
<strong>Semana 2 - Resultados:</strong><br>
• Daily reduzida para 15 minutos<br>
• Developers mais focados<br>
• Velocity aumentou 40%<br><br>
<strong>Mas surge novo desafio...</strong><br>
Na Sprint Review, CEO fica insatisfeito: "Isso não é o que imaginei. Quero mudanças agora!"<br><br>
<strong>Sua resposta:</strong>`,
    tag: "stakeholder-management",
    choices: [
      { text: "Facilitar feedback construtivo e planejar próxima Sprint", next: "scrum-master-feedback" },
      { text: "Aceitar mudanças para não confrontar CEO", next: "scrum-master-compromise-fail" },
      { text: "Educar sobre valor do ciclo inspect-and-adapt", next: "scrum-master-educate" }
    ]
  },

  "scrum-master-workshop": {
    id: "scrum-master-workshop",
    text: `<strong>Workshop de Fundamentos Scrum</strong><br>
Você organiza uma sessão de 4 horas com todo o time e stakeholders para alinhar sobre Scrum.<br><br>
<strong>Conteúdo do workshop:</strong><br>
• Valores e princípios do Scrum<br>
• Papéis e responsabilidades<br>
• Eventos e artefatos<br>
• Importância do Sprint Goal<br><br>
<strong>Resultado positivo:</strong><br>
• Time entende melhor os papéis<br>
• CEO aceita não interromper durante Sprint<br>
• PO se compromete com priorização estável<br><br>
<strong>2 semanas depois:</strong><br>
Velocity melhorou 30%, mas ainda há problemas de qualidade. Muitos bugs chegam em produção.<br><br>
<strong>Próxima ação:</strong>`,
    tag: "continuous-improvement",
    choices: [
      { text: "Implementar Definition of Done rigorosa", next: "scrum-master-dod" },
      { text: "Focar em práticas técnicas com o time", next: "scrum-master-technical" },
      { text: "Ignorar qualidade para manter velocidade", next: "scrum-master-velocity-fail" }
    ]
  },

  "scrum-master-dod": {
    id: "scrum-master-dod",
    text: `<strong>Definition of Done Transformadora</strong><br>
Você facilita a criação de DoD com todo o Scrum Team:<br><br>
<strong>Definition of Done estabelecida:</strong><br>
• Código desenvolvido e testado<br>
• Code review aprovado<br>
• Testes automatizados passando<br>
• Documentação atualizada<br>
• Feature testada em ambiente de staging<br>
• Aprovação do Product Owner<br><br>
<strong>6 meses depois - Transformação completa:</strong><br>
• Bugs em produção: redução de 85%<br>
• Velocity estabilizada e sustentável<br>
• Time orgulhoso da qualidade entregue<br>
• App lançado com sucesso: 4.4/5 estrelas<br>
• CEO: "Qualidade se tornou nosso diferencial"<br><br>
<strong>Reconhecimento:</strong><br>
• Você promovido a Agile Coach<br>
• Metodologia replicada em outros times`,
    explanation: `Excelente demonstração de servant leadership do Scrum Master:<br><br>
• <strong>Facilitação</strong> - conduziu workshop educativo e criação colaborativa de DoD<br>
• <strong>Coaching</strong> - ajudou time a entender qualidade como parte integral do desenvolvimento<br>
• <strong>Process Authority</strong> - garantiu que Definition of Done fosse respeitada<br>
• <strong>Continuous Improvement</strong> - evoluiu o processo baseado em problemas reais<br><br>
O Scrum Guide define que o Scrum Master serve ao Scrum Team ajudando-os a melhorar práticas. A Definition of Done é um compromisso essencial que garante transparência sobre qualidade do trabalho realizado.`,
    references: [
      "Scrum Guide 2020 - Definition of Done como compromisso do Increment",
      "Scrum Guide 2020 - Scrum Master accountabilities: coaching e facilitação",
      "Scrum Guide 2020 - Transparência através de artefatos e compromissos"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-master-technical": {
    id: "scrum-master-technical",
    text: `<strong>Foco em Práticas Técnicas</strong><br>
Você trabalha com Developers para implementar práticas técnicas sólidas:<br><br>
<strong>Práticas implementadas:</strong><br>
• Pair programming para knowledge sharing<br>
• Test-driven development para qualidade<br>
• Continuous integration/deployment<br>
• Code review sistemático<br>
• Refactoring regular<br><br>
<strong>Resultado após 4 meses:</strong><br>
• Lead time de features: redução de 60%<br>
• Bugs em produção: quase zero<br>
• Time mais confiante e colaborativo<br>
• Velocity alta e sustentável<br><br>
<strong>Sucesso completo:</strong><br>
App lançado como referência no mercado, time reconhecido pela excelência técnica.`,
    explanation: `Abordagem excelente do Scrum Master apoiando práticas técnicas:<br><br>
• <strong>Servant Leadership</strong> - removeu impedimentos para adoção de boas práticas<br>
• <strong>Coaching</strong> - ajudou Developers a melhorar skills técnicas<br>
• <strong>Facilitação</strong> - criou ambiente para experimentação e aprendizado<br><br>
Embora o Scrum Guide não prescreva práticas técnicas específicas, o Scrum Master deve ajudar o time a entregar Increments de alta qualidade. Práticas como TDD e pair programming são complementares aos valores Scrum.`,
    references: [
      "Scrum Guide 2020 - Scrum Master serving the Developers",
      "Scrum Guide 2020 - Self-managing teams e technical excellence",
      "Scrum Guide 2020 - Increment deve ser utilizável e atender Definition of Done"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-master-confront-fail": {
    id: "scrum-master-confront-fail",
    text: `<strong>Confronto Direto - Falha de Relacionamento</strong><br>
Você vai diretamente ao CEO e diz: "Você está atrapalhando o time com suas interrupções constantes!"<br><br>
<strong>Reação negativa:</strong><br>
• CEO se sente atacado e defensivo<br>
• Relacionamento entre você e liderança deteriora<br>
• CEO começa a questionar valor do Scrum Master<br>
• Time fica desconfortável com conflito aberto<br><br>
<strong>3 meses depois:</strong><br>
• Você é removido da função de Scrum Master<br>
• Time volta ao caos anterior<br>
• Projeto atrasa significativamente<br><br>
<strong>Lição aprendida:</strong><br>
Confronto direto raramente funciona em transformações organizacionais.`,
    explanation: `Esta abordagem falha nos princípios fundamentais do Scrum Master:<br><br>
• <strong>Servant Leadership</strong> - confronto direto não é servant leadership<br>
• <strong>Coaching vs Commanding</strong> - Scrum Master deve educar, não confrontar<br>
• <strong>Stakeholder Management</strong> - relacionamentos devem ser construídos, não destruídos<br><br>
O Scrum Guide enfatiza que o Scrum Master serve à organização ajudando-a a entender Scrum. Isso requer tato, educação e paciência, não confronto direto que pode gerar resistência.`,
    references: [
      "Scrum Guide 2020 - Scrum Master serving the Organization",
      "Scrum Guide 2020 - Servant Leadership como abordagem fundamental",
      "Scrum Guide 2020 - Coaching organizational Scrum adoption"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-master-ceremonies-only": {
    id: "scrum-master-ceremonies-only",
    text: `<strong>Foco Apenas em Cerimônias - Visão Limitada</strong><br>
Você concentra todos os esforços apenas em otimizar os eventos Scrum:<br><br>
<strong>Melhorias implementadas:</strong><br>
• Daily Scrum reduzida para 15 minutos<br>
• Sprint Planning mais estruturada<br>
• Sprint Review com apresentações organizadas<br>
• Sprint Retrospective com dinâmicas<br><br>
<strong>Problemas não resolvidos:</strong><br>
• CEO continua interrompendo o time<br>
• Prioridades ainda mudam constantemente<br>
• Qualidade permanece baixa<br>
• Time continua estressado e desmotivado<br><br>
<strong>6 meses depois:</strong><br>
Cerimônias funcionam bem, mas problemas fundamentais persistem. Projeto entregue com atraso e baixa qualidade.`,
    explanation: `Abordagem limitada que ignora responsabilidades principais do Scrum Master:<br><br>
• <strong>Servant Leadership Incompleto</strong> - facilitou eventos mas não removeu impedimentos sistêmicos<br>
• <strong>Coaching Insuficiente</strong> - não educou stakeholders sobre Scrum<br>
• <strong>Visão Tática vs Estratégica</strong> - focou em mecânica ao invés de princípios<br><br>
O Scrum Guide define que o Scrum Master deve servir ao Scrum Team, Product Owner E organização. Focar apenas em eventos é uma visão muito limitada do papel. O verdadeiro valor está em transformar o ambiente de trabalho.`,
    references: [
      "Scrum Guide 2020 - Scrum Master accountabilities são mais amplas que facilitar eventos",
      "Scrum Guide 2020 - Servant Leadership para todo o sistema organizacional",
      "Scrum Guide 2020 - Coaching organizacional para adoção efetiva do Scrum"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-master-feedback": {
    id: "scrum-master-feedback",
    text: `<strong>Facilitando Feedback Construtivo</strong><br>
Você transforma a frustração do CEO em oportunidade de aprendizado:<br><br>
<strong>Sua facilitação:</strong><br>
"Entendo sua preocupação. Vamos usar esse feedback para planejar a próxima Sprint. O que exatamente vocês esperavam ver?"<br><br>
<strong>Resultado da Sprint Review:</strong><br>
• Feedback específico coletado<br>
• Expectativas alinhadas para próxima Sprint<br>
• CEO entende o processo incremental<br>
• Time motivado com direção clara<br><br>
<strong>Próximas Sprints mostram evolução consistente baseada em feedback real.</strong>`,
    tag: "feedback-loops",
    choices: [
      { text: "Educar sobre valor do ciclo inspect-and-adapt", next: "scrum-master-educate" },
      { text: "Continuar facilitando feedback nas próximas Reviews", next: "scrum-master-feedback-cycle" }
    ]
  },

  "scrum-master-feedback-cycle": {
    id: "scrum-master-feedback-cycle",
    text: `<strong>Ciclo de Feedback Estabelecido</strong><br>
Você estabelece um ciclo consistente de feedback e melhoria:<br><br>
<strong>Após 6 meses de Sprint Reviews bem facilitadas:</strong><br>
• Stakeholders aprendem a dar feedback construtivo<br>
• Time desenvolve confiança em apresentar trabalho<br>
• Produto evoluiu baseado em feedback real de usuários<br>
• Relacionamento entre time e negócio fortalecido<br><br>
<strong>Resultado final:</strong><br>
• App lançado com alta aceitação do mercado<br>
• Processo de desenvolvimento maduro e sustentável<br>
• Você reconhecido como facilitador excepcional<br><br>
<strong>CEO testemunha:</strong><br>
"Aprendi que feedback frequente constrói produtos muito melhores que especificações perfeitas."`,
    explanation: `Implementação exemplar do empirismo Scrum através de feedback loops:<br><br>
• <strong>Inspeção</strong> - Sprint Reviews se tornaram momentos genuínos de inspeção<br>
• <strong>Adaptação</strong> - feedback direcionou adaptações do produto<br>
• <strong>Transparência</strong> - stakeholders viram progresso real regularmente<br>
• <strong>Facilitação</strong> - Scrum Master criou ambiente seguro para feedback<br><br>
O Scrum Guide enfatiza que Sprint Review é oportunidade de inspecionar Increment e adaptar Product Backlog. Sua facilitação transformou este evento em verdadeiro driver de valor para o produto.`,
    references: [
      "Scrum Guide 2020 - Sprint Review como evento de inspeção e adaptação",
      "Scrum Guide 2020 - Empirismo através de transparência, inspeção e adaptação",
      "Scrum Guide 2020 - Scrum Master facilitando eventos Scrum eficazes"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-master-compromise-fail": {
    id: "scrum-master-compromise-fail",
    text: `<strong>Compromisso Prejudicial - Perdendo Autoridade do Processo</strong><br>
Você aceita as mudanças do CEO para evitar conflito:<br><br>
<strong>Consequências imediatas:</strong><br>
• Sprint Goal original abandonado<br>
• Time confuso sobre prioridades<br>
• Trabalho da Sprint descartado<br>
• Developer frustrados com mudança constante<br><br>
<strong>Padrão estabelecido:</strong><br>
CEO aprende que pode mudar qualquer coisa a qualquer momento, tornando Sprint Goal irrelevante.<br><br>
<strong>6 meses depois:</strong><br>
Time trabalha em modo "apagar incêndio", sem previsibilidade. Projeto entregue com baixa qualidade e moral do time destruído.`,
    explanation: `Falha crítica em manter a integridade do processo Scrum:<br><br>
• <strong>Sprint Goal Comprometido</strong> - aceitar mudanças mid-Sprint destruiu o compromisso<br>
• <strong>Process Authority Perdida</strong> - Scrum Master deve proteger o processo<br>
• <strong>Servant Leadership Equivocada</strong> - servir não significa aceitar tudo<br><br>
O Scrum Guide é claro que o Sprint Goal é um compromisso. O Scrum Master deve educar sobre por que mudanças mid-Sprint são prejudiciais, não simplesmente aceitar para evitar conflito.`,
    references: [
      "Scrum Guide 2020 - Sprint Goal como compromisso da Sprint",
      "Scrum Guide 2020 - Scrum Master como guardian do processo Scrum",
      "Scrum Guide 2020 - Sprint Backlog pode ser adaptado, mas Sprint Goal permanece"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-master-educate": {
    id: "scrum-master-educate",
    text: `<strong>Educando sobre Empirismo</strong><br>
Você explica os pilares do Scrum para o CEO e stakeholders:<br><br>
<strong>Sua apresentação:</strong><br>
• <strong>Transparência:</strong> "Vocês veem exatamente o que foi feito"<br>
• <strong>Inspeção:</strong> "Avaliamos o produto e processo regularmente"<br>
• <strong>Adaptação:</strong> "Usamos aprendizados para melhorar o próximo Sprint"<br><br>
<strong>CEO:</strong> "Entendi... então o que vimos hoje nos ajuda a planejar melhor a próxima Sprint?"<br><br>
<strong>3 meses depois - Resultados finais:</strong><br>
• App lançado com features core funcionando<br>
• Time desenvolveu 85% das funcionalidades planejadas<br>
• Feedback de usuários: 4.2/5 estrelas<br>
• CEO: "Aprendi que feedback rápido é melhor que planos perfeitos"<br><br>
<strong>Métricas do sucesso:</strong><br>
• Velocity estabilizada: 34 story points/sprint<br>
• Sprint Goals atingidos: 90%<br>
• Satisfação do time: 8.5/10`,
    explanation: `Excelente aplicação da função de Scrum Master como definida pelo Scrum Guide:<br><br>
• <strong>Servant Leadership</strong> - serviu ao time removendo impedimentos e protegendo de interrupções<br>
• <strong>Facilitação</strong> - facilitou eventos Scrum eficazes (Daily, Sprint Review)<br>
• <strong>Coaching</strong> - educou stakeholders sobre empirismo e valores Scrum<br>
• <strong>Process Authority</strong> - manteve integridade do processo Scrum<br><br>
O Scrum Guide enfatiza que o Scrum Master deve ajudar todos a entenderem os pilares empíricos (transparência, inspeção, adaptação). Sua abordagem de educar ao invés de confrontar demonstra verdadeira servant leadership, criando ambiente de aprendizado organizacional.`,
    references: [
      "Scrum Guide 2020 - Pilares Empíricos: Transparência, Inspeção e Adaptação",
      "Scrum Guide 2020 - Scrum Master como Servant Leader",
      "Scrum Guide 2020 - Sprint Goal como foco e compromisso"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-master-velocity-fail": {
    id: "scrum-master-velocity-fail",
    text: `<strong>Priorização Equivocada - Velocidade vs Qualidade</strong><br>
Você decide ignorar problemas de qualidade para manter alta velocidade:<br><br>
<strong>Consequências a curto prazo:</strong><br>
• Velocity aparentemente alta (40 story points/sprint)<br>
• Stakeholders satisfeitos com "progresso"<br>
• Time trabalhando em ritmo acelerado<br><br>
<strong>Realidade após 2 meses:</strong><br>
• 60% das features têm bugs críticos<br>
• Time gasta 70% do tempo corrigindo problemas<br>
• Velocity real despenca para 15 story points/sprint<br>
• Moral do time no fundo do poço<br><br>
<strong>Resultado final:</strong><br>
Projeto entregue com 3 meses de atraso, qualidade inaceitável, time esgotado. Você substituído como Scrum Master.`,
    explanation: `Falha fundamental em entender o papel do Scrum Master:<br><br>
• <strong>Sustainable Pace Ignorado</strong> - velocity alta insustentável levou ao burnout<br>
• <strong>Definition of Done Negligenciada</strong> - qualidade é parte integral do Increment<br>
• <strong>Servant Leadership Falha</strong> - não protegeu o time de expectativas irreais<br><br>
O Scrum Guide enfatiza que Increments devem ser "Done" conforme Definition of Done. Velocity sem qualidade é ilusão que sempre cobra seu preço. O Scrum Master deve educar sobre sustentabilidade a longo prazo.`,
    references: [
      "Scrum Guide 2020 - Definition of Done garante qualidade do Increment",
      "Scrum Guide 2020 - Sustainable pace através de práticas sustentáveis",
      "Scrum Guide 2020 - Scrum Master protegendo o time de pressões externas prejudiciais"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  // === JORNADA DO PRODUCT OWNER ===
  "scrum-po-start": {
    id: "scrum-po-start",
    text: `<strong>Desafio do Product Owner</strong><br>
Como PO, você tem 150 itens no Product Backlog sem priorização clara.<br><br>
<strong>Pressões que você enfrenta:</strong><br>
• CEO: "Quero tudo isso no primeiro release!"<br>
• Marketing: "Precisamos de sistema de cupons para campanha"<br>
• Developers: "Estes requisitos não estão claros"<br>
• Investidores: "Quando teremos o MVP?"<br><br>
<strong>Situação atual do Backlog:</strong><br>
• 40 features de interface<br>
• 30 integrações com pagamentos<br>
• 25 funcionalidades de admin<br>
• 35 features de marketing<br>
• 20 itens técnicos (APIs, performance)<br><br>
<strong>Sua primeira ação como PO:</strong>`,
    tag: "product-vision",
    choices: [
      { text: "Definir Product Goal e priorizar por valor", next: "scrum-po-goal" },
      { text: "Fazer levantamento detalhado com stakeholders", next: "scrum-po-survey" },
      { text: "Deixar time técnico decidir prioridades", next: "scrum-po-delegate-fail" },
      { text: "Implementar todas as features simultaneamente", next: "scrum-po-parallel-fail" }
    ]
  },

  "scrum-po-goal": {
    id: "scrum-po-goal",
    text: `<strong>Definindo Product Goal</strong><br>
Você define um Product Goal claro: "Criar experiência de compra mobile intuitiva que converta 15% dos visitantes em compradores".<br><br>
<strong>Priorização baseada em valor:</strong><br>
1. <strong>Sprint 1-2:</strong> Cadastro, login, catálogo de produtos<br>
2. <strong>Sprint 3-4:</strong> Carrinho de compras, checkout básico<br>
3. <strong>Sprint 5-6:</strong> Pagamentos, confirmação de pedido<br><br>
<strong>Você corta 60% das features iniciais para o MVP.</strong><br><br>
<strong>Reação dos stakeholders:</strong><br>
• CEO: "Mas e as outras funcionalidades?"<br>
• Marketing: "E o sistema de cupons?"<br><br>
<strong>Sua resposta baseada em dados:</strong>`,
    tag: "value-maximization",
    choices: [
      { text: "Mostrar métricas de apps similares e ROI", next: "scrum-po-metrics" },
      { text: "Prometer entregar tudo em sprints futuros", next: "scrum-po-promise-fail" },
      { text: "Explicar conceito de MVP e validação", next: "scrum-po-mvp-success" }
    ]
  },

  "scrum-po-survey": {
    id: "scrum-po-survey",
    text: `<strong>Levantamento Detalhado com Stakeholders</strong><br>
Você passa 3 semanas fazendo entrevistas detalhadas com todos os stakeholders:<br><br>
<strong>Resultado do levantamento:</strong><br>
• CEO quer 80 features "essenciais"<br>
• Marketing quer 45 features "críticas"<br>
• Vendas quer 30 features "imprescindíveis"<br>
• UX quer 25 features "fundamentais"<br>
• Total: 180 features "obrigatórias"<br><br>
<strong>Problema emergiu:</strong><br>
Todos os stakeholders consideram suas necessidades prioritárias. Você não consegue decidir e acaba priorizando tudo como "alta prioridade".<br><br>
<strong>3 sprints depois:</strong><br>
Time perdido, sem foco, entregando pedaços de várias features mas nada funcionando completamente.`,
    tag: "stakeholder-management",
    choices: [
      { text: "Definir critérios objetivos de priorização", next: "scrum-po-criteria" },
      { text: "Fazer workshop de priorização colaborativa", next: "scrum-po-workshop" },
      { text: "Continuar tentando agradar todos", next: "scrum-po-pleasing-fail" }
    ]
  },

  "scrum-po-criteria": {
    id: "scrum-po-criteria",
    text: `<strong>Critérios Objetivos de Priorização</strong><br>
Você estabelece framework claro de priorização baseado em valor:<br><br>
<strong>Critérios definidos:</strong><br>
1. <strong>Impacto no usuário final (40%)</strong> - Core user journey<br>
2. <strong>ROI estimado (30%)</strong> - Revenue potential<br>
3. <strong>Effort técnico (20%)</strong> - Complexity assessment<br>
4. <strong>Dependencies (10%)</strong> - Technical prerequisites<br><br>
<strong>Resultado da priorização:</strong><br>
• Top 20 features emergem claramente<br>
• Stakeholders entendem o racional<br>
• Roadmap de 6 meses fica visível<br><br>
<strong>6 meses depois:</strong><br>
MVP lançado focado, 18% conversion rate (superou meta), stakeholders alinhados com processo de priorização baseado em dados.`,
    explanation: `Excelente aplicação das responsabilidades do Product Owner:<br><br>
• <strong>Product Backlog Management</strong> - priorizou baseado em critérios objetivos de valor<br>
• <strong>Stakeholder Alignment</strong> - trouxe clareza sobre trade-offs e decisões<br>
• <strong>Value Maximization</strong> - focou em features com maior impacto no Product Goal<br>
• <strong>Transparency</strong> - critérios claros tornaram decisões compreensíveis<br><br>
O Scrum Guide estabelece que o PO é responsável por maximizar valor. Critérios objetivos permitem decisões consistentes e defensáveis, construindo confiança dos stakeholders no processo.`,
    references: [
      "Scrum Guide 2020 - Product Owner maximizing value of product",
      "Scrum Guide 2020 - Product Backlog Management como accountability principal",
      "Scrum Guide 2020 - Transparência através de Product Backlog orden e claro"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-po-workshop": {
    id: "scrum-po-workshop",
    text: `<strong>Workshop de Priorização Colaborativa</strong><br>
Você facilita sessão de priorização com todos os stakeholders usando técnica MoSCoW:<br><br>
<strong>Processo colaborativo:</strong><br>
• <strong>Must Have:</strong> 15 features essenciais para MVP<br>
• <strong>Should Have:</strong> 25 features importantes para v2<br>
• <strong>Could Have:</strong> 30 features nice-to-have<br>
• <strong>Won't Have:</strong> 80 features descartadas ou postergadas<br><br>
<strong>Resultado transformador:</strong><br>
• Consenso real entre stakeholders<br>
• Todos entendem trade-offs<br>
• Ownership compartilhado das decisões<br><br>
<strong>1 ano depois:</strong><br>
Produto evoluiu de forma sustentável, stakeholders continuam usando o processo para novas decisões, você reconhecido como facilitador excepcional.`,
    explanation: `Implementação exemplar de stakeholder collaboration pelo Product Owner:<br><br>
• <strong>Facilitation Leadership</strong> - conduziu processo colaborativo efetivo<br>
• <strong>Consensus Building</strong> - criou alinhamento genuíno entre stakeholders<br>
• <strong>Shared Understanding</strong> - todos compreendem rationale das decisões<br>
• <strong>Sustainable Process</strong> - estabeleceu método replicável para futuras decisões<br><br>
Embora o Scrum Guide não prescreva técnicas específicas, enfatiza que o PO deve engajar stakeholders efetivamente. Workshops colaborativos criam ownership compartilhado, reduzindo conflitos futuros.`,
    references: [
      "Scrum Guide 2020 - Product Owner engaging with stakeholders",
      "Scrum Guide 2020 - Product Backlog como resultado de colaboração",
      "Scrum Guide 2020 - Transparência facilitando inspeção e adaptação"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-po-pleasing-fail": {
    id: "scrum-po-pleasing-fail",
    text: `<strong>Tentativa de Agradar Todos - Paralisia por Análise</strong><br>
Você continua tentando encontrar forma de incluir todas as necessidades de todos os stakeholders:<br><br>
<strong>Consequências da indecisão:</strong><br>
• Product Backlog cresce para 200+ itens<br>
• Sprints planning demoram 6+ horas<br>
• Time perdido sobre o que realmente importa<br>
• Features meio desenvolvidas, nada terminado<br>
• Stakeholders frustrados com falta de progresso<br><br>
<strong>6 meses depois:</strong><br>
Projeto cancelado por falta de progresso tangível. Você substituído por PO com mais experiência em trade-offs.`,
    explanation: `Falha crítica em uma das principais responsabilidades do Product Owner:<br><br>
• <strong>Decision Making Paralysis</strong> - PO deve tomar decisões difíceis sobre prioridades<br>
• <strong>Value Maximization Failed</strong> - tentar fazer tudo resulta em valor zero<br>
• <strong>Stakeholder Management Inadequate</strong> - educar sobre trade-offs é essencial<br><br>
O Scrum Guide é claro que o Product Owner é uma pessoa, não um comitê. A responsabilidade de maximizar valor requer coragem para dizer "não" e fazer escolhas difíceis. Agradar todos não é sustentável.`,
    references: [
      "Scrum Guide 2020 - Product Owner é uma pessoa, não um comitê",
      "Scrum Guide 2020 - Maximização de valor requer decisões sobre trade-offs",
      "Scrum Guide 2020 - Product Owner authority sobre Product Backlog"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-po-delegate-fail": {
    id: "scrum-po-delegate-fail",
    text: `<strong>Delegação Inadequada - Abdição de Responsabilidade</strong><br>
Você deixa o time técnico decidir as prioridades: "Vocês entendem melhor a arquitetura, decidam o que implementar primeiro."<br><br>
<strong>Consequências da ausência de product ownership:</strong><br>
• Developers priorizam tarefas técnicas interessantes<br>
• Features de usuário final ficam para depois<br>
• Arquitetura perfeita, mas pouco valor entregue<br>
• Stakeholders não sabem o que esperar<br>
• Time trabalha sem visão de produto<br><br>
<strong>4 meses depois:</strong><br>
Sistema técnicamente robusto mas sem funcionalidades úteis para usuários. Stakeholders perdem confiança no projeto.`,
    explanation: `Falha fundamental no papel do Product Owner:<br><br>
• <strong>Product Ownership Abdicated</strong> - PO não pode delegar responsabilidade sobre valor<br>
• <strong>Business Value Lost</strong> - decisões técnicas não otimizam valor para usuário<br>
• <strong>Stakeholder Disconnect</strong> - ausência de visão de produto clara<br><br>
O Scrum Guide estabelece que Product Owner é accountable pelo valor do produto. Esta responsabilidade não pode ser delegada. Developers são excelentes em decisões técnicas, mas precisam de direção sobre valor de negócio.`,
    references: [
      "Scrum Guide 2020 - Product Owner accountability por maximização de valor",
      "Scrum Guide 2020 - Product Owner não pode delegar accountability",
      "Scrum Guide 2020 - Separação clara entre product decisions e technical decisions"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-po-parallel-fail": {
    id: "scrum-po-parallel-fail",
    text: `<strong>Desenvolvimento Paralelo - Caos Organizacional</strong><br>
Você decide implementar todas as 150 features simultaneamente, dividindo o time:<br><br>
<strong>Estratégia caótica:</strong><br>
• 2 developers para pagamentos<br>
• 1 developer para interface<br>
• 2 developers para features de marketing<br>
• 2 developers para admin<br><br>
<strong>Resultado desastroso:</strong><br>
• Nenhuma feature completa em 3 meses<br>
• Integração entre componentes impossível<br>
• Bugs multiplicam exponencialmente<br>
• Time fragmentado, sem comunicação<br>
• Arquitetura inconsistente<br><br>
<strong>Projeto cancelado após 5 meses de caos total.</strong>`,
    explanation: `Violação completa dos princípios fundamentais do Scrum:<br><br>
• <strong>Focus Lost</strong> - ausência total de Sprint Goal e foco<br>
• <strong>Team Fragmentation</strong> - destruiu cross-functionality e colaboração<br>
• <strong>Integration Nightmare</strong> - trabalho paralelo sem coordenação<br>
• <strong>Value Delivery Failed</strong> - nenhum incremento utilizável entregue<br><br>
O Scrum Guide enfatiza que Scrum Team trabalha em Sprint Goal comum. Paralelização excessiva destrói os benefícios de colaboração, inspeção e adaptação que são centrais ao Scrum.`,
    references: [
      "Scrum Guide 2020 - Sprint Goal como foco unificador do Sprint",
      "Scrum Guide 2020 - Cross-functional teams trabalhando juntos",
      "Scrum Guide 2020 - Increment deve ser utilizável e integrado"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-po-metrics": {
    id: "scrum-po-metrics",
    text: `<strong>Apresentação Baseada em Dados</strong><br>
Você apresenta análise detalhada de apps similares e projeções de ROI:<br><br>
<strong>Dados apresentados:</strong><br>
• Apps com 50+ features no launch: 23% success rate<br>
• Apps com 10-15 features core: 67% success rate<br>
• ROI médio MVP vs Full Product: 3.4x superior<br>
• Time-to-market impact: cada mês de atraso = -15% market share<br><br>
<strong>Reação dos stakeholders:</strong><br>
CEO: "Os dados são convincentes. Vamos com o MVP focado."<br>
Marketing: "Podemos testar cupons na v2 baseado no feedback real."<br><br>
<strong>Resultado estratégico:</strong><br>
Decisão data-driven criou alinhamento e confiança no approach incremental.`,
    tag: "data-driven-decisions",
    choices: [
      { text: "Continuar com MVP e validação", next: "scrum-po-mvp-success" },
      { text: "Expandir análise para roadmap completo", next: "scrum-po-roadmap" }
    ]
  },

  "scrum-po-roadmap": {
    id: "scrum-po-roadmap",
    text: `<strong>Roadmap Estratégico Baseado em Dados</strong><br>
Você expande a análise criando roadmap completo baseado em métricas e aprendizados:<br><br>
<strong>Roadmap evolutivo (12 meses):</strong><br>
• <strong>Months 1-2:</strong> MVP core features + analytics<br>
• <strong>Months 3-4:</strong> Features baseadas em user feedback<br>
• <strong>Months 5-6:</strong> Optimization baseada em conversion data<br>
• <strong>Months 7-12:</strong> Advanced features baseadas em market validation<br><br>
<strong>1 ano depois - Sucesso extraordinário:</strong><br>
• App líder no segmento com 4.7/5 rating<br>
• ROI 450% superior à projeção inicial<br>
• Roadmap tornou-se modelo para outros produtos da empresa<br>
• Você promovido a Head of Product`,
    explanation: `Masterclass em Product Ownership estratégico:<br><br>
• <strong>Evidence-Based Planning</strong> - roadmap baseado em dados reais, não opinions<br>
• <strong>Incremental Value Delivery</strong> - cada release baseada em aprendizados anteriores<br>
• <strong>Stakeholder Confidence</strong> - transparência sobre rationale das decisões<br>
• <strong>Market-Driven Evolution</strong> - produto evoluiu baseado em feedback real<br><br>
Esta abordagem exemplifica como o Product Owner deve combinar vision com pragmatismo data-driven. O Scrum Guide enfatiza maximização de valor - esta estratégia demonstra como dados podem guiar decisões de produto sustentáveis.`,
    references: [
      "Scrum Guide 2020 - Product Owner maximizing value através de decisions informadas",
      "Scrum Guide 2020 - Product Goal guiando roadmap estratégico",
      "Scrum Guide 2020 - Empirismo aplicado ao development de produto"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-po-promise-fail": {
    id: "scrum-po-promise-fail",
    text: `<strong>Promessas Insustentáveis - Perda de Credibilidade</strong><br>
Você promete entregar todas as features em sprints futuros para acalmar stakeholders:<br><br>
<strong>Promessas feitas:</strong><br>
• "Sistema de cupons na Sprint 4"<br>
• "Dashboard analytics na Sprint 5"<br>
• "Integração social na Sprint 6"<br>
• "Features premium na Sprint 7"<br><br>
<strong>Realidade após 4 sprints:</strong><br>
• MVP ainda não finalizado completamente<br>
• Complexidade subestimada sistematicamente<br>
• Time sob pressão constante<br>
• Stakeholders cobrando promessas não cumpridas<br><br>
<strong>Resultado final:</strong><br>
Credibilidade perdida, stakeholders desconfiantes, time desmotivado. Você substituído por PO mais experiente.`,
    explanation: `Falha clássica em Product Ownership - promessas sem base empírica:<br><br>
• <strong>Empiricism Violated</strong> - promessas baseadas em esperança, não evidência<br>
• <strong>Stakeholder Trust Lost</strong> - credibilidade é ativo mais importante do PO<br>
• <strong>Team Pressure</strong> - promessas irreais criaram ambiente insustentável<br>
• <strong>Planning Fallacy</strong> - subestimação sistemática de complexidade<br><br>
O Scrum Guide enfatiza empirismo e transparência. Product Owner deve educar stakeholders sobre incerteza inerente ao desenvolvimento, não fazer promessas que não pode garantir.`,
    references: [
      "Scrum Guide 2020 - Empirismo como base para planning e expectations",
      "Scrum Guide 2020 - Transparência sobre uncertainty e complexity",
      "Scrum Guide 2020 - Product Owner building trust através de realistic expectations"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-po-mvp-success": {
    id: "scrum-po-mvp-success",
    text: `<strong>Educando sobre MVP</strong><br>
Você explica o conceito de Minimum Viable Product:<br><br>
<strong>Sua apresentação:</strong><br>
"Vamos lançar com funcionalidades core para validar se usuários realmente compram pelo app. Dados do mercado mostram que 70% das features são raramente usadas."<br><br>
<strong>Estratégia adotada:</strong><br>
• MVP em 2 meses ao invés de 6<br>
• Feedback real de usuários guiará próximas features<br>
• Budget preservado para iterações baseadas em dados<br><br>
<strong>Resultados após 4 meses:</strong><br>
• MVP lançado no prazo<br>
• 1.000 downloads na primeira semana<br>
• Taxa de conversão: 12% (próximo da meta de 15%)<br>
• Feedback users: sistema de cupons não é prioridade<br>
• Feature mais requisitada: avaliações de produtos<br><br>
<strong>CEO:</strong> "Incrível! Se tivéssemos construído tudo, teríamos perdido tempo em coisas que users nem querem!"`,
    explanation: `Execução exemplar das responsabilidades do Product Owner conforme Scrum Guide:<br><br>
• <strong>Product Goal</strong> - definiu objetivo claro e mensurável para o produto<br>
• <strong>Product Backlog Management</strong> - priorizou itens baseado em valor para usuário<br>
• <strong>Value Maximization</strong> - focou em entregar valor rapidamente com MVP<br>
• <strong>Stakeholder Engagement</strong> - educou stakeholders sobre princípios lean<br><br>
O Scrum Guide estabelece que o PO é responsável por maximizar valor do produto. Sua abordagem de MVP demonstra compreensão de que valor real vem de feedback de usuários, não de assumptions internas. A coragem de cortar 60% das features mostra verdadeiro product ownership.`,
    references: [
      "Scrum Guide 2020 - Product Owner accountabilities",
      "Scrum Guide 2020 - Product Goal como compromisso do Product Backlog",
      "Scrum Guide 2020 - Maximização de valor do produto resultante do trabalho do Scrum Team"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  // === JORNADA DO DEVELOPER ===
  "scrum-dev-start": {
    id: "scrum-dev-start",
    text: `<strong>Perspectiva do Developer</strong><br>
Como desenvolvedor sênior, você observa problemas técnicos e de processo:<br><br>
<strong>Situação técnica atual:</strong><br>
• Código sem testes automatizados<br>
• Deploy manual que demora 3 horas<br>
• Bugs descobertos apenas em produção<br>
• Definition of Done inexistente<br>
• Code review não é praticado<br><br>
<strong>Durante Sprint Planning:</strong><br>
PO apresenta User Story: "Como usuário, quero fazer login social"<br>
• Não tem critérios de aceitação claros<br>
• Não foi estimada pelo time<br>
• Dependência de API externa não mapeada<br><br>
<strong>Sua ação como Developer experiente:</strong>`,
    tag: "technical-excellence",
    choices: [
      { text: "Propor Definition of Done e práticas técnicas", next: "scrum-dev-dod" },
      { text: "Implementar a feature mesmo sem clareza", next: "scrum-dev-implement-fail" },
      { text: "Questionar e refinar a User Story", next: "scrum-dev-refine" },
      { text: "Focar apenas no código, deixar processo para SM", next: "scrum-dev-code-only" }
    ]
  },

  "scrum-dev-dod": {
    id: "scrum-dev-dod",
    text: `<strong>Propondo Definition of Done</strong><br>
Você lidera a criação de DoD com o time:<br><br>
<strong>Definition of Done estabelecida:</strong><br>
• Código desenvolvido seguindo padrões<br>
• Testes unitários com 80%+ cobertura<br>
• Code review aprovado por outro developer<br>
• Teste de integração passando<br>
• Feature testada em ambiente de staging<br>
• Documentação atualizada<br><br>
<strong>Impacto imediato:</strong><br>
• Time questiona User Stories mal definidas<br>
• Qualidade do código melhora drasticamente<br>
• Bugs em produção reduzem 70%<br><br>
<strong>Sprint 3 - Novo desafio:</strong><br>
Time está entregando menos story points, mas com qualidade alta. PO questiona a "lentidão".<br><br>
<strong>Sua resposta:</strong>`,
    tag: "sustainable-pace",
    choices: [
      { text: "Mostrar métricas de qualidade e redução de bugs", next: "scrum-dev-metrics-success" },
      { text: "Relaxar Definition of Done para entregar mais", next: "scrum-dev-relax-fail" },
      { text: "Propor automação para aumentar eficiência", next: "scrum-dev-automation" }
    ]
  },

  "scrum-dev-refine": {
    id: "scrum-dev-refine",
    text: `<strong>Refinamento Colaborativo da User Story</strong><br>
Você questiona construtivamente a User Story com PO durante Sprint Planning:<br><br>
<strong>Suas perguntas:</strong><br>
• "Quais provedores de login social específicos?"<br>
• "Como deve ser o fluxo para usuários já cadastrados?"<br>
• "Qual comportamento esperado se API externa estiver fora?"<br>
• "Como mapear dados do social para nosso modelo de usuário?"<br><br>
<strong>Resultado da colaboração:</strong><br>
• User Story refinada com critérios claros<br>
• Dependências identificadas e endereçadas<br>
• Estimativa mais precisa (8 story points)<br>
• Plano de implementação técnica definido<br><br>
<strong>2 semanas depois:</strong><br>
Feature entregue sem surpresas, funcionando perfeitamente, zero bugs em produção.`,
    tag: "collaboration",
    choices: [
      { text: "Estabelecer processo regular de refinement", next: "scrum-dev-refinement-process" },
      { text: "Continuar questionando stories individualmente", next: "scrum-dev-individual-refinement" }
    ]
  },

  "scrum-dev-refinement-process": {
    id: "scrum-dev-refinement-process",
    text: `<strong>Processo Sistemático de Product Backlog Refinement</strong><br>
Você propõe e implementa sessões regulares de refinement com todo o Scrum Team:<br><br>
<strong>Processo estabelecido:</strong><br>
• 2 horas por semana dedicadas ao refinement<br>
• PO apresenta próximas User Stories<br>
• Developers fazem perguntas técnicas<br>
• Stories são quebradas quando necessário<br>
• Critérios de aceitação são definidos colaborativamente<br><br>
<strong>6 meses depois - Transformação completa:</strong><br>
• Sprint Planning reduzida de 8h para 2h<br>
• 95% das stories entregues conforme planejado<br>
• Zero surpresas técnicas durante desenvolvimento<br>
• Relationship PO-Developers fortalecido<br>
• Velocity previsível e sustentável<br><br>
<strong>Você reconhecido como líder técnico que melhora processos.</strong>`,
    explanation: `Demonstração exemplar de collaboration e continuous improvement pelos Developers:<br><br>
• <strong>Product Backlog Refinement</strong> - ajudou a estabelecer processo vital para Scrum<br>
• <strong>Cross-functional Collaboration</strong> - ponte efetiva entre perspectivas técnica e negócio<br>
• <strong>Shared Understanding</strong> - garantiu clareza antes do desenvolvimento<br>
• <strong>Process Innovation</strong> - liderou melhoria que beneficiou todo o Scrum Team<br><br>
O Scrum Guide menciona que Product Backlog refinement é atividade contínua. Sua iniciativa de formalizar este processo demonstra como Developers podem liderar melhorias organizacionais além do código.`,
    references: [
      "Scrum Guide 2020 - Product Backlog refinement como ongoing activity",
      "Scrum Guide 2020 - Developers contribuindo para Product Backlog refinement",
      "Scrum Guide 2020 - Shared understanding através de collaboration"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-dev-individual-refinement": {
    id: "scrum-dev-individual-refinement",
    text: `<strong>Abordagem Individual vs Sistemática</strong><br>
Você continua questionando stories individualmente ao invés de estabelecer processo sistemático:<br><br>
<strong>Problemas que persistem:</strong><br>
• Nem todos os developers fazem as mesmas perguntas<br>
• Refinement acontece ad-hoc durante Sprint Planning<br>
• Alguns pontos técnicos passam despercebidos<br>
• Sprint Planning ainda demora 6+ horas<br><br>
<strong>Resultado após 6 meses:</strong><br>
Suas stories são sempre bem refinadas, mas time como um todo ainda tem problemas de clareza e estimativa. Oportunidade perdida de systematic improvement.<br><br>
<strong>Lesson learned:</strong><br>
Individual excellence é importante, mas system thinking gera maior impacto organizacional.`,
    explanation: `Resultado positivo individual mas oportunidade perdida de system-level improvement:<br><br>
• <strong>Individual Mastery</strong> - demonstrou excelência em collaboration com PO<br>
• <strong>Missed Leadership Opportunity</strong> - poderia ter liderado melhoria para todo o time<br>
• <strong>System Thinking</strong> - foco individual vs improvement organizacional<br><br>
Embora o Scrum Guide não exija que Developers sejam change agents, o framework beneficia quando membros do team lideram melhorias processuais. Individual excellence é valioso, mas system improvement multiplica o impacto.`,
    references: [
      "Scrum Guide 2020 - Self-managing teams podem evoluir suas práticas",
      "Scrum Guide 2020 - Continuous improvement através de Sprint Retrospectives",
      "Scrum Guide 2020 - Shared accountability dos Developers"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-dev-implement-fail": {
    id: "scrum-dev-implement-fail",
    text: `<strong>Implementação sem Clareza - Retrabalho Inevitável</strong><br>
Você decide implementar a feature mesmo sem critérios claros, assumindo o que PO "provavelmente quer":<br><br>
<strong>Suas assumptions:</strong><br>
• Implementa apenas Google e Facebook login<br>
• Assume que deve criar conta automaticamente<br>
• Não trata cenários de erro da API<br>
• Interface simples baseada em seu julgamento<br><br>
<strong>Sprint Review - Feedback devastador:</strong><br>
• PO: "Precisava incluir LinkedIn para B2B users"<br>
• Stakeholder: "Como usuários vão conectar contas existentes?"<br>
• QA: "Sistema quebra quando API externa está lenta"<br><br>
<strong>Resultado:</strong><br>
Feature rejeitada, 2 sprints de retrabalho necessário, time desmoralizado.`,
    explanation: `Falha em collaboration fundamental entre Developer e Product Owner:<br><br>
• <strong>Shared Understanding Missing</strong> - implementação baseada em assumptions<br>
• <strong>Waste Generation</strong> - retrabalho por falta de clareza inicial<br>
• <strong>Quality Compromise</strong> - edge cases não considerados<br>
• <strong>Team Morale Impact</strong> - frustração por trabalho rejeitado<br><br>
O Scrum Guide enfatiza que Developers devem trabalhar closely com Product Owner. Implementar sem clareza viola princípios de transparency e collaboration que são fundamentais ao Scrum.`,
    references: [
      "Scrum Guide 2020 - Developers trabalhando closely com Product Owner",
      "Scrum Guide 2020 - Shared understanding como base para development",
      "Scrum Guide 2020 - Transparency evitando waste e retrabalho"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-dev-code-only": {
    id: "scrum-dev-code-only",
    text: `<strong>Foco Exclusivo em Código - Visão Limitada</strong><br>
Você decide focar apenas na implementação técnica, deixando questões de processo para o Scrum Master:<br><br>
<strong>Sua abordagem:</strong><br>
• Implementa features conforme especificado<br>
• Código tecnicamente excellente<br>
• Não questiona requirements<br>
• Não se envolve em discussions sobre processo<br><br>
<strong>Problemas que persistem no time:</strong><br>
• Stories mal definidas continuam gerando retrabalho<br>
• Sprint Planning continua caótico<br>
• Definition of Done fraca<br>
• Qualidade geral do produto baixa<br><br>
<strong>6 meses depois:</strong><br>
Seu código é excelente, mas projeto like um todo sofre com problemas processuais que você poderia ter ajudado a resolver.`,
    explanation: `Abordagem tecnicamente competente mas limitada em terms de team contribution:<br><br>
• <strong>Technical Excellence</strong> - demonstrou skills técnicas sólidas<br>
• <strong>Limited Team Impact</strong> - perdeu oportunidades de liderar melhorias<br>
• <strong>Narrow Focus</strong> - Developers no Scrum têm responsibilities além de coding<br><br>
O Scrum Guide estabelece que Developers são accountable por creating usable Increments e instilling quality. Isso vai além de escrever código para incluir collaboration, planning e process improvement.`,
    references: [
      "Scrum Guide 2020 - Developers accountabilities incluem mais que coding",
      "Scrum Guide 2020 - Self-managing teams contributing para process improvement",
      "Scrum Guide 2020 - Cross-functional collaboration além de technical skills"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-dev-metrics-success": {
    id: "scrum-dev-metrics-success",
    text: `<strong>Demonstrando Valor através de Métricas</strong><br>
Você apresenta dados convincentes sobre o impacto da qualidade:<br><br>
<strong>Métricas Before/After Definition of Done:</strong><br>
• Bugs em produção: 25/sprint → 3/sprint (-88%)<br>
• Tempo gasto em bug fixes: 40% → 8% (-80%)<br>
• Customer satisfaction: 3.1 → 4.5 (+45%)<br>
• Deploy confidence: Baixa → Alta<br>
• Technical debt: Crescendo → Estabilizado<br><br>
<strong>PO impressionado:</strong><br>
"Não sabia que qualidade impactava tanto velocity real. Menos bugs = mais tempo para features!"<br><br>
<strong>Resultado transformador:</strong><br>
DoD fortalecida ainda mais, time orgulhoso da qualidade, você reconhecido como technical leader que entende business impact.`,
    tag: "quality-advocacy",
    choices: [
      { text: "Propor automação para aumentar eficiência ainda mais", next: "scrum-dev-automation" },
      { text: "Estabelecer métricas de qualidade contínuas", next: "scrum-dev-continuous-metrics" }
    ]
  },

  "scrum-dev-continuous-metrics": {
    id: "scrum-dev-continuous-metrics",
    text: `<strong>Sistema de Métricas de Qualidade Contínuas</strong><br>
Você estabelece dashboard permanente de métricas de qualidade para transparência contínua:<br><br>
<strong>Métricas tracked continuamente:</strong><br>
• Code coverage percentage<br>
• Cyclomatic complexity trends<br>
• Bug escape rate por Sprint<br>
• Mean time to resolution<br>
• Customer satisfaction correlations<br><br>
<strong>1 ano depois - Impacto organizacional:</strong><br>
• Sistema replicado em todos os teams de desenvolvimento<br>
• Você nomeado Quality Champion da empresa<br>
• Cultura data-driven de qualidade estabelecida<br>
• Produtos da empresa reconhecidos por reliability<br><br>
<strong>CEO reconhece:</strong><br>
"A cultura de qualidade que você ajudou a criar é agora nosso diferencial competitivo."`,
    explanation: `Liderança excepcional em quality advocacy e organizational change:<br><br>
• <strong>Continuous Measurement</strong> - estabeleceu transparency sobre quality através de dados<br>
• <strong>Business Connection</strong> - conectou métricas técnicas com business outcomes<br>
• <strong>Cultural Change</strong> - liderou transformação de mindset organizacional<br>
• <strong>System Thinking</strong> - impact além do próprio team para entire organization<br><br>
Esta jornada exemplifica como Developers podem ser agents of organizational change. O Scrum Guide enfatiza quality e transparency - sua abordagem demonstra como technical leadership pode driving business results.`,
    references: [
      "Scrum Guide 2020 - Instilling quality by adhering to Definition of Done",
      "Scrum Guide 2020 - Transparency através de empirical evidence",
      "Scrum Guide 2020 - Self-managing teams driving organizational improvement"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-dev-relax-fail": {
    id: "scrum-dev-relax-fail",
    text: `<strong>Compromisso Prejudicial na Qualidade</strong><br>
Você aceita relaxar Definition of Done para aparentemente entregar mais story points:<br><br>
<strong>DoD relaxada:</strong><br>
• Code review torna-se opcional<br>
• Testes automatizados "quando possível"<br>
• Testing em staging "se houver tempo"<br>
• Documentation "pode ser depois"<br><br>
<strong>Consequências previsíveis (2 meses):</strong><br>
• Bugs voltam a crescer exponencialmente<br>
• Time gasta 60% do tempo em firefighting<br>
• Velocity real despenca ainda mais<br>
• Moral do time no fundo do poço<br>
• Customer complaints explodem<br><br>
<strong>Você aprende que não existe atalho para qualidade sustentável.</strong>`,
    explanation: `Lesson clássica sobre false economy de sacrificar qualidade:<br><br>
• <strong>Short-term vs Long-term</strong> - ganho aparente imediato, cost exponencial depois<br>
• <strong>Definition of Done Compromise</strong> - quality não é negotiable em sustainable development<br>
• <strong>Technical Debt Explosion</strong> - debt acumula juros compostos<br>
• <strong>Team Morale Destruction</strong> - working em codebase de baixa qualidade é demoralizing<br><br>
O Scrum Guide define Definition of Done como commitment. Comprometer quality para velocity aparente sempre backfires. Sustainable pace requer sustainable practices.`,
    references: [
      "Scrum Guide 2020 - Definition of Done como commitment não negotiable",
      "Scrum Guide 2020 - Sustainable pace através de quality practices",
      "Scrum Guide 2020 - Technical debt impact em long-term velocity"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-dev-automation": {
    id: "scrum-dev-automation",
    text: `<strong>Implementando Automação</strong><br>
Você lidera iniciativas de automação durante as Sprints:<br><br>
<strong>Melhorias implementadas:</strong><br>
• CI/CD pipeline automatizado<br>
• Testes automatizados executando a cada commit<br>
• Deploy para staging automático<br>
• Code quality gates integrados<br><br>
<strong>Resultados após 2 meses:</strong><br>
• Tempo de deploy: 3 horas → 15 minutos<br>
• Detection de bugs: produção → desenvolvimento<br>
• Story points entregues aumentaram 60%<br>
• Confidence do time para refatorar código<br><br>
<strong>Sprint Retrospective - Time comenta:</strong><br>
"Agora podemos focar em resolver problemas de negócio ao invés de problemas técnicos!"<br><br>
<strong>Final do projeto - 6 meses depois:</strong><br>
• App entregue com qualidade excepcional<br>
• Zero bugs críticos em produção<br>
• Time reconhecido como referência em práticas técnicas<br>
• Você é promovido a Tech Lead`,
    explanation: `Demonstração exemplar das responsabilidades do Developer no Scrum:<br><br>
• <strong>Self-Organizing</strong> - time auto-organizou práticas técnicas sem imposição externa<br>
• <strong>Cross-Functional</strong> - desenvolveu skills além de programação (DevOps, Quality)<br>
• <strong>Accountability</strong> - assumiu responsabilidade pela qualidade do produto<br>
• <strong>Continuous Improvement</strong> - usou Retrospectives para melhorar práticas<br><br>
O Scrum Guide estabelece que Developers são responsáveis por criar um plano para a Sprint, instill quality by adhering to DoD, e adaptar seu plano daily. Sua iniciativa de propor DoD e automação mostra compreensão de que qualidade é responsabilidade do time, não apenas do QA.`,
    references: [
      "Scrum Guide 2020 - Developers accountabilities",
      "Scrum Guide 2020 - Definition of Done como compromisso do Increment",
      "Scrum Guide 2020 - Self-organizing teams e cross-functionality"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  }
};
