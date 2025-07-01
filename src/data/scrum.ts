import { StoryGraph } from "../types/game";

export const scrum: StoryGraph = {
  "scrum-role": {
    id: "scrum-role",
    text: `<strong>Projeto Real: Plataforma de Streaming</strong><br>
Você integra um time Scrum desenvolvendo uma plataforma de streaming para competir com Netflix. A startup recebeu investimento de R$ 15 milhões e tem 6 meses para lançar o MVP com pelo menos 50.000 usuários ativos.<br><br>
<strong>Contexto atual:</strong><br>
• Time: 9 pessoas (5 devs, 2 designers, 1 QA, 1 PO)<br>
• Backlog: 200+ itens não organizados<br>
• Stakeholders: CEO, investidores, marketing, parceiros de conteúdo<br>
• Pressão extrema para competir com gigantes do mercado<br>
• Arquitetura legada de sistema anterior precisa ser migrada<br><br>
<strong>Desafios técnicos:</strong><br>
• Streaming de vídeo de alta qualidade<br>
• Sistema de recomendações personalizado<br>
• Suporte a múltiplos dispositivos<br>
• Integração com sistemas de pagamento<br><br>
Qual papel você assume neste desafio complexo?`,
    choices: [
      { text: "Scrum Master", next: "scrum-master-start" },
      { text: "Product Owner", next: "scrum-po-start" },
      { text: "Developer", next: "scrum-dev-start" }
    ]
  },

  // === JORNADA DETALHADA DO SCRUM MASTER ===
  "scrum-master-start": {
    id: "scrum-master-start",
    text: `<strong>Primeira Semana como Scrum Master</strong><br>
Você observa um cenário caótico que ameaça o sucesso do projeto:<br><br>
<strong>Problemas organizacionais identificados:</strong><br>
• CEO interrompe developers 8-10 vezes por dia com "funcionalidades urgentes"<br>
• Product Owner mudou prioridades 6 vezes esta semana<br>
• Time trabalha 12+ horas/dia, mas entrega apenas 40% do planejado<br>
• Daily Scrum virou reunião de 1 hora com discussões técnicas detalhadas<br>
• Ninguém sabe o que realmente será entregue no fim da Sprint<br>
• Desenvolvedores reclamam de burnout e falta de foco<br><br>
<strong>Situação técnica crítica:</strong><br>
• Sistema legado quebra constantemente<br>
• Testes manuais demoram 2 dias por feature<br>
• Deploy é manual e demora 4 horas<br>
• Bugs descobertos apenas em produção<br><br>
<strong>Stakeholders pressionando:</strong><br>
• Investidores: "Quando teremos usuários pagantes?"<br>
• CEO: "Concorrentes estão lançando features mais rápido!"<br>
• Marketing: "Precisamos da campanha de lançamento agora!"<br><br>
<strong>Sua primeira ação estratégica como Scrum Master:</strong>`,
    tag: "servant-leadership",
    choices: [
      { text: "Implementar Sprint Goal e proteger o time de interrupções", next: "scrum-master-protection" },
      { text: "Organizar workshop intensivo sobre Scrum para toda organização", next: "scrum-master-education" },
      { text: "Confrontar CEO sobre gestão disfuncional", next: "scrum-master-confrontation-fail" },
      { text: "Focar exclusivamente em otimizar eventos Scrum", next: "scrum-master-events-only-fail" },
      { text: "Implementar métricas e transparência radical", next: "scrum-master-metrics-first" }
    ]
  },

  "scrum-master-protection": {
    id: "scrum-master-protection",
    text: `<strong>Blindagem do Time através de Sprint Goal</strong><br>
Você trabalha intensivamente com o PO para estabelecer um Sprint Goal cristalino e implementa proteções organizacionais:<br><br>
<strong>Sprint Goal definido:</strong><br>
"Usuários podem criar conta, fazer login, assistir trailers e adicionar filmes aos favoritos com qualidade HD sem interrupções"<br><br>
<strong>Proteções implementadas:</strong><br>
• Sprint Backlog protegido - mudanças só na próxima Sprint<br>
• Horário de "foco profundo": 9h-12h sem interrupções<br>
• Acordo formal com CEO sobre canais de comunicação<br>
• Buffer de 20% para emergências reais<br>
• Definition of Done rigorosa estabelecida<br><br>
<strong>Resultados na primeira semana:</strong><br>
• Daily Scrum otimizada para 15 minutos focados no Sprint Goal<br>
• Developers reportam 60% menos interrupções<br>
• Velocity aumentou 35% com qualidade mantida<br>
• Time demonstra mais confiança e colaboração<br><br>
<strong>Segunda semana - Novo desafio surge:</strong><br>
Durante a Sprint Review, CEO fica frustrado: "Isso não é suficiente! Concorrentes têm funcionalidades que não vejo aqui. Quero mudanças imediatas!"<br><br>
<strong>Como você responde a esta pressão mantendo integridade do processo?</strong>`,
    tag: "stakeholder-management",
    choices: [
      { text: "Facilitar feedback construtivo e educar sobre empirismo", next: "scrum-master-empiricism" },
      { text: "Aceitar algumas mudanças para manter relacionamento", next: "scrum-master-compromise-fail" },
      { text: "Demonstrar progresso com métricas e roadmap", next: "scrum-master-evidence-based" },
      { text: "Propor sessão de refinamento com stakeholders", next: "scrum-master-stakeholder-refinement" }
    ]
  },

  "scrum-master-education": {
    id: "scrum-master-education",
    text: `<strong>Workshop Organizacional Transformador</strong><br>
Você organiza workshop de 8 horas com todo o time, CEO, investidores e stakeholders principais para estabelecer fundações sólidas:<br><br>
<strong>Agenda do workshop:</strong><br>
• <strong>Manhã:</strong> Valores e princípios Scrum aplicados ao contexto de streaming<br>
• <strong>Tarde:</strong> Papéis, responsabilidades e acordos de trabalho<br>
• <strong>Final:</strong> Definição coletiva de Definition of Done e Sprint Goal<br><br>
<strong>Dinâmicas realizadas:</strong><br>
• Simulação de Sprint com problema real da empresa<br>
• Mapeamento de impedimentos organizacionais<br>
• Criação de acordo de comunicação entre níveis<br>
• Definição de métricas de sucesso compartilhadas<br><br>
<strong>Resultados transformadores:</strong><br>
• CEO compreende impacto das interrupções na produtividade<br>
• PO se compromete com priorização estável por Sprint<br>
• Investidores entendem ciclo de inspect-and-adapt<br>
• Time alinhado sobre padrões de qualidade<br><br>
<strong>Um mês depois - Situação crítica emerge:</strong><br>
Apesar das melhorias, sistema legado causa 40% dos bugs em produção. Performance do streaming é instável e usuários reclamam. Time técnico quer dedicar Sprint inteira para resolver dívida técnica, mas stakeholders pressionam por novas features.<br><br>
<strong>Como você equilibra esta tensão crítica?</strong>`,
    tag: "continuous-improvement",
    choices: [
      { text: "Facilitar negociação baseada em dados sobre impacto técnico", next: "scrum-master-technical-debt" },
      { text: "Implementar Definition of Done que force qualidade", next: "scrum-master-dod-quality" },
      { text: "Propor arquitetura incremental dentro das Sprints", next: "scrum-master-incremental-architecture" },
      { text: "Educar stakeholders sobre sustentabilidade técnica", next: "scrum-master-sustainability-education" }
    ]
  },

  "scrum-master-empiricism": {
    id: "scrum-master-empiricism",
    text: `<strong>Educação sobre Empirismo na Prática</strong><br>
Você transforma a frustração do CEO em oportunidade de aprendizado sobre os pilares empíricos do Scrum:<br><br>
<strong>Sua facilitação educativa:</strong><br>
• <strong>Transparência:</strong> "Vocês veem exatamente o estado real do produto, sem mascarar problemas"<br>
• <strong>Inspeção:</strong> "Avaliamos produto e processo a cada Sprint Review para decisões informadas"<br>
• <strong>Adaptação:</strong> "Usamos aprendizados reais para otimizar próximas entregas"<br><br>
<strong>Demonstração prática:</strong><br>
• Mostrar burndown chart real vs estimado<br>
• Apresentar feedback de usuários beta sobre features entregues<br>
• Comparar velocity quando há vs não há interrupções<br>
• Projetar roadmap baseado em dados, não assumptions<br><br>
<strong>CEO tem insight transformador:</strong><br>
"Entendi... então essa 'lentidão' aparente na verdade nos protege de construir coisas erradas? E feedback rápido é mais valioso que features rápidas?"<br><br>
<strong>6 meses depois - Resultados extraordinários:</strong><br>
• Plataforma lançada com 95.000 usuários ativos (90% acima da meta)<br>
• 4.6/5 stars na app store (superior aos concorrentes)<br>
• 85% das features desenvolvidas são realmente usadas pelos usuários<br>
• Time mantém velocity sustentável sem burnout<br>
• CEO tornou-se defensor do Scrum na indústria<br><br>
<strong>Reconhecimento alcançado:</strong><br>
• Você promovido a Agile Coach da organização<br>
• Metodologia replicada em outros produtos da empresa<br>
• Case study apresentado em conferências internacionais`,
    explanation: `Demonstração magistral das responsabilidades do Scrum Master conforme Scrum Guide:<br><br>
• <strong>Servant Leadership:</strong> Serviu à organização educando sobre empirismo sem confronto<br>
• <strong>Process Authority:</strong> Manteve integridade dos pilares Scrum durante pressão<br>
• <strong>Coaching Organizacional:</strong> Transformou CEO de impedimento em enabler<br>
• <strong>Facilitação de Mudança:</strong> Criou ambiente de aprendizado ao invés de resistência<br><br>
O Scrum Guide 2020 enfatiza que o Scrum Master serve à organização ajudando-a a compreender e implementar Scrum. Esta abordagem de educar através de evidências demonstra como empirismo (transparência, inspeção, adaptação) pode transformar dinâmicas organizacionais disfuncionais.`,
    references: [
      "Scrum Guide 2020 - Pilares Empíricos do Scrum: https://scrumguides.org",
      "Scrum Guide 2020 - Scrum Master serving the Organization: https://scrumguides.org",
      "Scrum Guide 2020 - Transparência, Inspeção e Adaptação: https://scrumguides.org"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-master-metrics-first": {
    id: "scrum-master-metrics-first",
    text: `<strong>Implementação de Transparência Radical</strong><br>
Você estabelece sistema abrangente de métricas para criar transparência organizacional:<br><br>
<strong>Dashboard de transparência implementado:</strong><br>
• Velocity por Sprint com contexto de qualidade<br>
• Lead time de features desde ideação até produção<br>
• Número de interrupções por dia e impacto na entrega<br>
• Bug rate em produção vs tempo gasto em qualidade<br>
• Net Promoter Score de usuários por feature entregue<br>
• Satisfaction score do time por Sprint<br><br>
<strong>Rituais de transparência:</strong><br>
• Dashboard visível em tempo real para toda organização<br>
• Weekly review das métricas com stakeholders<br>
• Correlação entre práticas Scrum e business outcomes<br>
• Retrospectivas públicas sobre impedimentos organizacionais<br><br>
<strong>Impacto transformador (3 meses):</strong><br>
• CEO para de interromper quando vê impacto nos números<br>
• Investidores começam a acompanhar métricas de saúde do time<br>
• Decisões organizacionais baseadas em evidência, não opinião<br>
• Time engajado em melhorar métricas que controlam<br><br>
<strong>Desafio avançado emerge:</strong><br>
Dados mostram que 60% do tempo é gasto em integração manual entre sistemas. Time quer automatizar, mas isso significaria 2 Sprints com pouca entrega visível de features. Como você usa as métricas para justificar este investimento?`,
    tag: "empirical-process-control",
    choices: [
      { text: "Demonstrar ROI de automação através de projeções", next: "scrum-master-roi-analysis" },
      { text: "Propor experimento de uma Sprint para validar hipótese", next: "scrum-master-experiment" },
      { text: "Facilitar negociação sobre valor a longo prazo", next: "scrum-master-long-term-value" }
    ]
  },

  "scrum-master-technical-debt": {
    id: "scrum-master-technical-debt",
    text: `<strong>Facilitação de Negociação Técnica Baseada em Dados</strong><br>
Você facilita sessão estruturada entre time técnico e stakeholders para abordar dívida técnica:<br><br>
<strong>Preparação da facilitação:</strong><br>
• Developers preparam análise de impacto quantificado<br>
• PO mapeia features bloqueadas por problemas técnicos<br>
• Stakeholders definem critérios de risco aceitável<br>
• Métricas de qualidade dos últimos 3 meses analisadas<br><br>
<strong>Dados apresentados na sessão:</strong><br>
• 40% dos bugs vêm de 3 componentes legados específicos<br>
• Cada bug em produção custa 8 horas de trabalho para correção<br>
• Velocity real é 30% menor devido a retrabalho<br>
• 5 features críticas estão bloqueadas por arquitetura atual<br>
• Customer churn rate correlaciona com problemas de performance<br><br>
<strong>Acordo alcançado:</strong><br>
• 30% de cada Sprint dedicado a melhorias técnicas<br>
• Definition of Done inclui refatoração preventiva<br>
• Métricas de qualidade técnica acompanhadas semanalmente<br>
• ROI de melhorias técnicas medido em velocity e satisfação<br><br>
<strong>Resultados em 2 meses:</strong><br>
• Bugs em produção reduzidos em 75%<br>
• Velocity aumentou 45% com qualidade superior<br>
• Time confident para implementar features complexas<br>
• Stakeholders defendem investimento em qualidade`,
    tag: "technical-excellence",
    choices: [
      { text: "Estabelecer métricas contínuas de saúde técnica", next: "scrum-master-technical-health" },
      { text: "Expandir educação sobre sustentabilidade", next: "scrum-master-sustainability-education" }
    ]
  },

  "scrum-master-technical-health": {
    id: "scrum-master-technical-health",
    text: `<strong>Sistema de Monitoramento de Saúde Técnica</strong><br>
Você estabelece framework contínuo para manter qualidade técnica:<br><br>
<strong>Métricas de saúde técnica implementadas:</strong><br>
• Code coverage percentage por Sprint<br>
• Cyclomatic complexity trends<br>
• Technical debt ratio (tempo gasto em manutenção vs features)<br>
• Build time e deployment frequency<br>
• Mean time to recovery de incidentes<br>
• Developer happiness index relacionado a qualidade do código<br><br>
<strong>Práticas sustentáveis estabelecidas:</strong><br>
• 20% time dedicado a melhorias técnicas não negociável<br>
• Refactoring como parte da Definition of Done<br>
• Code review gates que bloqueiam degradação<br>
• Arquitetura evolutiva decidida pelo time<br><br>
<strong>Impacto organizacional (1 ano):</strong><br>
• Plataforma suporta 10x mais usuários com mesma arquitetura<br>
• Time de desenvolvimento se tornou referência na indústria<br>
• Tempo de onboarding de novos developers caiu 60%<br>
• Recruitment melhorou - developers querem trabalhar no time<br>
• CEO usa case como exemplo de excelência técnica sustentável`,
    explanation: `Exemplo excepcional de como Scrum Master pode liderar transformação técnica organizacional:<br><br>
• <strong>Servant Leadership:</strong> Facilitou decisões técnicas sem impor soluções<br>
• <strong>Impediment Removal:</strong> Removeu impedimentos sistêmicos à qualidade<br>
• <strong>Organizational Change:</strong> Transformou cultura organizacional sobre technical debt<br>
• <strong>Sustainable Pace:</strong> Estabeleceu práticas que mantêm qualidade a longo prazo<br><br>
Scrum Guide enfatiza que Scrum Master deve ajudar organização a implementar Scrum efetivamente. Incluir qualidade técnica como parte integral do processo demonstra compreensão de que sustainable development requer technical excellence.`,
    references: [
      "Scrum Guide 2020 - Scrum Master serving Development Team: https://scrumguides.org",
      "Scrum Guide 2020 - Definition of Done ensuring quality: https://scrumguides.org",
      "Scrum Guide 2020 - Sustainable pace through process: https://scrumguides.org"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  // === FALHAS DO SCRUM MASTER ===
  "scrum-master-confrontation-fail": {
    id: "scrum-master-confrontation-fail",
    text: `<strong>Confronto Direto - Deterioração Relacional</strong><br>
Você decide confrontar o CEO diretamente sobre gestão disfuncional:<br><br>
<strong>Sua abordagem confrontativa:</strong><br>
"Suas interrupções constantes estão destruindo a produtividade do time! Você precisa parar de microgerenciar e deixar o Scrum funcionar!"<br><br>
<strong>Reação negativa em cascata:</strong><br>
• CEO se sente atacado publicamente e fica defensivo<br>
• Relacionamento com liderança executiva deteriora rapidamente<br>
• CEO questiona valor do Scrum Master perante investidores<br>
• Time fica desconfortável com conflito aberto<br>
• Outros stakeholders começam a evitar você<br><br>
<strong>Consequências sistêmicas (2 meses):</strong><br>
• Você é removido da posição de Scrum Master<br>
• Time volta ao caos organizacional anterior<br>
• Projeto atrasa significativamente por falta de liderança<br>
• Moral do time despenca com instabilidade de processo<br>
• Empresa contrata consultoria externa para "consertar" Scrum<br><br>
<strong>Lição crítica aprendida:</strong><br>
Confronto direto destrói a base de confiança necessária para servant leadership efetivo.`,
    explanation: `Falha fundamental nos princípios de Servant Leadership do Scrum Master:<br><br>
• <strong>Servant Leadership Violated:</strong> Confronto direto contradiz abordagem de servir<br>
• <strong>Coaching vs Commanding:</strong> Scrum Master deve educar, não confrontar<br>
• <strong>Stakeholder Relationship Destroyed:</strong> Base de confiança é fundamental<br>
• <strong>Organizational Impact:</strong> Mudança organizacional requer tato e paciência<br><br>
Scrum Guide 2020 define Scrum Master como servant-leader que serve à organização. Confronto direto gera resistência ao invés de adoção. Transformação organizacional acontece através de educação, exemplo e facilitação, não confronto.`,
    references: [
      "Scrum Guide 2020 - Servant Leadership: https://scrumguides.org",
      "Scrum Guide 2020 - Scrum Master serving Organization: https://scrumguides.org",
      "Scrum Guide 2020 - Coaching organizational Scrum adoption: https://scrumguides.org"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-master-events-only-fail": {
    id: "scrum-master-events-only-fail",
    text: `<strong>Foco Limitado em Eventos - Visão Míope</strong><br>
Você concentra esforços exclusivamente em otimizar cerimônias Scrum:<br><br>
<strong>Melhorias implementadas nos eventos:</strong><br>
• Daily Scrum otimizada para exatos 15 minutos<br>
• Sprint Planning com agenda estruturada e timeboxes<br>
• Sprint Review com apresentações profissionais<br>
• Sprint Retrospective com dinâmicas criativas<br>
• Todos os eventos acontecem pontualmente<br><br>
<strong>Problemas sistêmicos ignorados:</strong><br>
• CEO continua interrompendo developers constantemente<br>
• Prioridades mudam arbitrariamente durante Sprint<br>
• Qualidade técnica permanece baixa<br>
• Time continua em burnout por pressão externa<br>
• Stakeholders não compreendem valor do Scrum<br><br>
<strong>Resultado após 6 meses:</strong><br>
• Eventos Scrum funcionam perfeitamente como clockwork<br>
• Problemas fundamentais persistem e se agravam<br>
• Projeto entregue com atraso significativo e baixa qualidade<br>
• Time frustra-se com Scrum "que não resolve problemas reais"<br>
• Organização abandona Scrum considerando-o "burocrático"`,
    explanation: `Compreensão limitada das responsabilidades do Scrum Master:<br><br>
• <strong>Tactical vs Strategic Focus:</strong> Eventos são meio, não fim<br>
• <strong>Servant Leadership Incomplete:</strong> Não removeu impedimentos organizacionais<br>
• <strong>Coaching Missed:</strong> Não educou stakeholders sobre Scrum<br>
• <strong>Organizational Serving Ignored:</strong> Foco apenas em mecânica, não transformação<br><br>
Scrum Guide 2020 define responsabilidades do Scrum Master muito além de facilitar eventos. Incluem coaching do time, PO e organização, remoção de impedimentos e ajudar organização a adotar Scrum efetivamente. Focar apenas em eventos é visão muito limitada do papel transformador do Scrum Master.`,
    references: [
      "Scrum Guide 2020 - Scrum Master accountabilities: https://scrumguides.org",
      "Scrum Guide 2020 - Servant Leadership beyond facilitation: https://scrumguides.org",
      "Scrum Guide 2020 - Organizational transformation: https://scrumguides.org"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "scrum-master-compromise-fail": {
    id: "scrum-master-compromise-fail",
    text: `<strong>Compromisso Prejudicial - Erosão da Integridade do Processo</strong><br>
Você aceita mudanças mid-Sprint para manter relacionamento com CEO:<br><br>
<strong>Compromissos feitos:</strong><br>
• Sprint Goal modificado no meio da Sprint<br>
• 3 itens removidos do Sprint Backlog para "emergências"<br>
• Nova feature "crítica" adicionada sem estimativa<br>
• Time precisa entregar escopo original + mudanças<br><br>
<strong>Efeito dominó destrutivo:</strong><br>
• CEO aprende que pode mudar qualquer coisa quando quiser<br>
• Sprint Goal perde significado e credibilidade<br>
• Time trabalha em modo "apagar incêndio" constante<br>
• Planning se torna irrelevante - tudo pode mudar<br>
• Developers perdem confiança no processo Scrum<br><br>
<strong>Escalada dos problemas (3 meses):</strong><br>
• Mudanças mid-Sprint se tornam rotina<br>
• Velocity despenca por constante replanejamento<br>
• Qualidade deteriora por pressão de escopo variável<br>
• Time desenvolve burnout severo<br>
• Projeto falha espetacularmente com entregas inconsistentes<br><br>
<strong>Moral da história:</strong><br>
Comprometer integridade do processo para agradar destrói valor que Scrum oferece.`,
    explanation: `Falha crítica em manter process authority do Scrum Master:<br><br>
• <strong>Sprint Goal Commitment Broken:</strong> Goal é compromisso, não sugestão<br>
• <strong>Process Authority Lost:</strong> Scrum Master deve proteger integridade do framework<br>
• <strong>Servant Leadership Misunderstood:</strong> Servir não significa aceitar tudo<br>
• <strong>Team Protection Failed:</strong> Time precisa de estabilidade para entregar valor<br><br>
Scrum Guide 2020 é explícito que Sprint Goal é compromisso da Sprint Backlog. Scrum Master tem responsabilidade de assegurar que Scrum seja compreendido e implementado. Permitir mudanças arbitrárias destrói empirismo e previsibilidade que são centrais ao Scrum.`,
    references: [
      "Scrum Guide 2020 - Sprint Goal como compromisso: https://scrumguides.org",
      "Scrum Guide 2020 - Scrum Master ensuring Scrum is understood: https://scrumguides.org",
      "Scrum Guide 2020 - Sprint Backlog e Sprint Goal: https://scrumguides.org"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  // === JORNADA DO PRODUCT OWNER ===
  "scrum-po-start": {
    id: "scrum-po-start",
    text: `<strong>Desafio Extremo do Product Owner</strong><br>
Como PO da plataforma de streaming, você enfrenta 200+ itens no Product Backlog e pressões conflitantes intensas:<br><br>
<strong>Stakeholders e suas demandas:</strong><br>
• <strong>CEO:</strong> "Quero todas as features do Netflix no primeiro release!"<br>
• <strong>Marketing:</strong> "Sistema de cupons é obrigatório para campanha de Black Friday"<br>
• <strong>Parceiros de conteúdo:</strong> "DRM avançado precisa estar na versão 1.0"<br>
• <strong>Developers:</strong> "Estes requisitos são impossíveis tecnicamente"<br>
• <strong>Investidores:</strong> "Quando teremos 100.000 usuários pagantes?"<br>
• <strong>UX Team:</strong> "Personalização é crítica para engagement"<br><br>
<strong>Complexidade do Product Backlog:</strong><br>
• 60 features de streaming (qualidade, múltiplos dispositivos)<br>
• 45 funcionalidades de descoberta de conteúdo<br>
• 40 features de monetização e pagamentos<br>
• 35 integrações com fornecedores de conteúdo<br>
• 25 funcionalidades administrativas<br>
• 30 itens técnicos (APIs, performance, segurança)<br><br>
<strong>Pressão temporal extrema:</strong><br>
• Concorrentes lançando features semanalmente<br>
• Window de oportunidade de mercado fechando<br>
• Budget queimando R$ 500k por mês<br><br>
<strong>Sua primeira decisão crítica como PO:</strong>`,
    tag: "product-vision",
    choices: [
      { text: "Definir Product Goal ousado e priorizar por impacto no usuário", next: "scrum-po-vision-driven" },
      { text: "Fazer análise detalhada de mercado e concorrentes", next: "scrum-po-market-analysis" },
      { text: "Delegar priorização técnica para developers", next: "scrum-po-delegate-fail" },
      { text: "Tentar implementar tudo em paralelo", next: "scrum-po-parallel-fail" },
      { text: "Focar em análise de stakeholders para alinhar expectativas", next: "scrum-po-stakeholder-management" }
    ]
  },

  "scrum-po-vision-driven": {
    id: "scrum-po-vision-driven",
    text: `<strong>Product Goal Visionário e Priorização Radical</strong><br>
Você define Product Goal ousado mas alcançável: "Criar a experiência de streaming mais personalizada do Brasil, convertendo 25% dos trial users em assinantes pagos em 30 dias"<br><br>
<strong>Priorização radical baseada em impacto:</strong><br>
• <strong>Sprint 1-3:</strong> Core streaming experience (cadastro, catálogo, player HD)<br>
• <strong>Sprint 4-6:</strong> Sistema de recomendações básico + checkout simplificado<br>
• <strong>Sprint 7-9:</strong> Personalização avançada + analytics de engagement<br>
• <strong>Sprint 10-12:</strong> Features de retenção baseadas em dados reais<br><br>
<strong>Você corta brutalmente 70% das features "essenciais" para focar no core value.</strong><br><br>
<strong>Reação explosiva dos stakeholders:</strong><br>
• CEO: "Cadê as 60 features que prometemos aos investidores?"<br>
• Marketing: "Como vou vender sem sistema de cupons?"<br>
• Parceiros: "DRM é não-negociável!"<br><br>
<strong>Pressão extrema:</strong><br>
Reunião de crise com investidores agendada. Board questiona sua competência. CEO ameaça substituição.<br><br>
<strong>Como você defende esta estratégia arriscada?</strong>`,
    tag: "value-maximization",
    choices: [
      { text: "Apresentar análise de ROI baseada em dados de mercado", next: "scrum-po-roi-defense" },
      { text: "Propor MVP validado com usuários reais", next: "scrum-po-mvp-validation" },
      { text: "Demonstrar roadmap baseado em aprendizado iterativo", next: "scrum-po-learning-roadmap" },
      { text: "Recuar e incluir features para aplacar stakeholders", next: "scrum-po-backtrack-fail" }
    ]
  },

  "scrum-po-market-analysis": {
    id: "scrum-po-market-analysis",
    text: `<strong>Análise Competitiva Profunda</strong><br>
Você investe 4 semanas em research abrangente do mercado de streaming brasileiro:<br><br>
<strong>Research realizado:</strong><br>
• Análise de 15 plataformas concorrentes (features, pricing, UX)<br>
• 200 entrevistas com potenciais usuários<br>
• Análise de gaps de mercado e oportunidades<br>
• Benchmark de conversion rates e engagement metrics<br>
• Mapeamento de parcerias de conteúdo possíveis<br><br>
<strong>Insights transformadores descobertos:</strong><br>
• 78% dos usuários abandonam trials por experiência de onboarding confusa<br>
• Personalização é #1 differentiator, não quantidade de conteúdo<br>
• Usuários pagam 40% mais por experiência sem ads + HD<br>
• 65% cancelam assinatura por problemas de performance/buffering<br>
• Social features aumentam retention em 300%<br><br>
<strong>Estratégia refinada baseada em dados:</strong><br>
• Onboarding perfeito é priority #1<br>
• Qualidade > Quantidade de conteúdo<br>
• Performance técnica é table stakes<br>
• Social sharing como growth driver<br><br>
<strong>Mas surge pressão temporal:</strong><br>
Análise consumiu 1 mês do cronograma. Concorrente lançou feature viral. Board aumenta pressão por resultados rápidos.<br><br>
<strong>Como você equilibra qualidade de decisão vs velocidade de execução?</strong>`,
    tag: "market-understanding",
    choices: [
      { text: "Priorizar MVP baseado em insights mais críticos", next: "scrum-po-insight-driven-mvp" },
      { text: "Estabelecer ciclo contínuo de learning & building", next: "scrum-po-continuous-learning" },
      { text: "Acelerar desenvolvimento sem comprometer research", next: "scrum-po-parallel-research-dev" }
    ]
  },

  "scrum-po-roi-defense": {
    id: "scrum-po-roi-defense",
    text: `<strong>Defesa Baseada em ROI e Market Data</strong><br>
Você prepara apresentação devastadora com dados convincentes para investidores:<br><br>
<strong>Análise de ROI apresentada:</strong><br>
• Plataformas com 50+ features no launch: 12% success rate<br>
• Plataformas com 8-12 features core bem executadas: 73% success rate<br>
• ROI médio de MVP focused vs Full Feature: 4.2x superior<br>
• Time-to-market impact: cada mês de atraso = -25% market share potential<br>
• Customer acquisition cost reduz 60% com experience otimizada<br><br>
<strong>Case studies apresentados:</strong><br>
• Spotify: Começou apenas com music streaming, personalization veio depois<br>
• TikTok: Algoritmo de recomendação > Quantity de features<br>
• Disney+: Apostou em content quality + UX simples<br><br>
<strong>Projeção financeira:</strong><br>
• MVP em 3 meses: Break-even em 8 meses<br>
• Full feature approach: Break-even em 18 meses (se não falhar)<br>
• Risk mitigation: Pivot possível baseado em real user data<br><br>
<strong>Reação do board:</strong><br>
Investidor principal: "Dados são convincentes, mas como garantimos que não perdemos window de oportunidade?"<br><br>
<strong>Seu argumento final decisivo:</strong>`,
    choices: [
      { text: "Propor roadmap adaptativo baseado em metrics", next: "scrum-po-adaptive-roadmap" },
      { text: "Estabelecer gates de validação com usuários", next: "scrum-po-validation-gates" },
      { text: "Comprometer-se com métricas ousadas de sucesso", next: "scrum-po-success-metrics" }
    ]
  },

  "scrum-po-adaptive-roadmap": {
    id: "scrum-po-adaptive-roadmap",
    text: `<strong>Roadmap Adaptativo Baseado em Métricas</strong><br>
Você apresenta estratégia de roadmap que evolui baseado em evidências:<br><br>
<strong>Framework de decisão estabelecido:</strong><br>
• <strong>Months 1-2:</strong> MVP + measurement infrastructure<br>
• <strong>Months 3-4:</strong> Features priorizadas por user behavior data<br>
• <strong>Months 5-6:</strong> Optimization baseada em conversion metrics<br>
• <strong>Months 7-12:</strong> Expansion guiada por market validation<br><br>
<strong>Métricas que dirigem priorização:</strong><br>
• Daily/Monthly Active Users growth rate<br>
• Trial-to-paid conversion rate<br>
• Content engagement duration<br>
• Feature usage analytics<br>
• Net Promoter Score por cohort<br><br>
<strong>Decision gates definidos:</strong><br>
• Se conversion rate < 15%: Pivot onboarding<br>
• Se engagement < 30min/day: Focus em content discovery<br>
• Se churn > 10%/month: Priority para retention features<br><br>
<strong>18 meses depois - Sucesso extraordinário:</strong><br>
• Plataforma #2 em market share no Brasil<br>
• 89% das features desenvolvidas são actively used<br>
• ROI 340% superior à projeção conservadora<br>
• Roadmap approach virou methodology padrão da empresa<br>
• Você promovido a Chief Product Officer<br><br>
<strong>Case study internacional:</strong><br>
Harvard Business School usa seu case como exemplo de evidence-based product management.`,
    explanation: `Demonstração exemplar de Product Ownership estratégico conforme Scrum Guide:<br><br>
• <strong>Product Goal como North Star:</strong> Direcionou todas as decisões de priorização<br>
• <strong>Value Maximization:</strong> Focou em features que realmente impactam usuários<br>
• <strong>Stakeholder Management:</strong> Educou stakeholders sobre trade-offs através de dados<br>
• <strong>Empirical Product Management:</strong> Roadmap baseado em inspect-and-adapt<br><br>
Scrum Guide 2020 estabelece que Product Owner é accountable por maximizar valor do produto. Esta abordagem demonstra como combinar visão estratégica com empirismo para criar produtos que realmente atendem necessidades do mercado ao invés de assumptions internas.`,
    references: [
      "Scrum Guide 2020 - Product Owner maximizing value: https://scrumguides.org",
      "Scrum Guide 2020 - Product Goal como compromisso: https://scrumguides.org",
      "Scrum Guide 2020 - Empiricism no product development: https://scrumguides.org"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  // === JORNADA DETALHADA DO DEVELOPER ===
  "scrum-dev-start": {
    id: "scrum-dev-start",
    text: `<strong>Perspectiva do Senior Developer</strong><br>
Como desenvolvedor sênior da plataforma de streaming, você identifica problemas técnicos críticos que ameaçam o sucesso:<br><br>
<strong>Cenário técnico caótico:</strong><br>
• Sistema legado de monólito PHP com 200k+ linhas<br>
• Deploy manual que falha 40% das vezes<br>
• Testes automatizados inexistentes<br>
• Database queries não otimizadas causam timeouts<br>
• CDN mal configurada resulta em buffering constante<br>
• Code review inexistente - merge direto na main<br><br>
<strong>Problemas de qualidade evidentes:</strong><br>
• 30+ bugs críticos descobertos por usuários<br>
• Performance: 8 segundos para carregar catálogo<br>
• Mobile experience quebrada em 60% dos devices<br>
• Security vulnerabilities expostas (dados de cartão)<br><br>
<strong>Durante Sprint Planning tenso:</strong><br>
PO apresenta User Story: "Como usuário, quero assistir vídeos em 4K com qualidade adaptativa baseada na velocidade da internet"<br><br>
<strong>Problemas da Story:</strong><br>
• Sem critérios de aceitação técnicos<br>
• Não considera limitações de infraestrutura atual<br>
• Dependências de CDN e encoding não mapeadas<br>
• Estimativa impossível sem arquitetura definida<br><br>
<strong>Sua ação como Developer técnico líder:</strong>`,
    tag: "technical-excellence",
    choices: [
      { text: "Propor Definition of Done rigorosa focada em streaming", next: "scrum-dev-streaming-dod" },
      { text: "Questionar Story e propor spike técnico", next: "scrum-dev-technical-spike" },
      { text: "Implementar solution temporária para mostrar progresso", next: "scrum-dev-quick-fix-fail" },
      { text: "Liderar refatoração da arquitetura de streaming", next: "scrum-dev-architecture-leadership" },
      { text: "Focar apenas no código, deixar arquitetura para depois", next: "scrum-dev-code-focus-fail" }
    ]
  },

  "scrum-dev-streaming-dod": {
    id: "scrum-dev-streaming-dod",
    text: `<strong>Definition of Done para Plataforma de Streaming</strong><br>
Você lidera criação de DoD específica para challenges de streaming:<br><br>
<strong>Definition of Done estabelecida:</strong><br>
• Código desenvolvido com padrões de clean architecture<br>
• Unit tests com 85%+ coverage incluindo edge cases<br>
• Integration tests com CDN e encoding services<br>
• Performance tests: <2s load time, <500ms seek time<br>
• Cross-device testing (iOS, Android, Web, Smart TV)<br>
• Security scan passando (OWASP compliance)<br>
• Load testing para concurrent streaming<br>
• Code review com senior developer approval<br>
• Monitoring e alerting implementados<br><br>
<strong>Impacto transformador imediato:</strong><br>
• Time questiona agressivamente User Stories mal definidas<br>
• PO forced to think about technical feasibility<br>
• Qualidade do streaming melhora drasticamente<br>
• Bugs em prod reduzem 80% em 2 Sprints<br><br>
<strong>Resistência surge:</strong><br>
Sprint 4 - Velocity aparentemente "baixa" (15 story points vs 25 anterior). Stakeholders questionam "lentidão". CEO pressiona para relaxar DoD.<br><br>
<strong>Como você defende qualidade técnica crítica para streaming?</strong>`,
    tag: "quality-advocacy",
    choices: [
      { text: "Demonstrar métricas de user experience melhorada", next: "scrum-dev-ux-metrics" },
      { text: "Mostrar redução de operational overhead", next: "scrum-dev-operational-metrics" },
      { text: "Educar sobre consequências de qualidade baixa em streaming", next: "scrum-dev-streaming-education" },
      { text: "Propor automação para aumentar velocity mantendo qualidade", next: "scrum-dev-automation-strategy" }
    ]
  },

  "scrum-dev-technical-spike": {
    id: "scrum-dev-technical-spike",
    text: `<strong>Technical Spike para Adaptive Streaming</strong><br>
Você propõe spike de 1 Sprint para investigar viabilidade técnica de 4K adaptive streaming:<br><br>
<strong>Spike plan estruturado:</strong><br>
• Research de algorithms de adaptive bitrate<br>
• Proof of concept com HLS e DASH protocols<br>
• Testing de CDN options (AWS CloudFront vs Cloudflare)<br>
• Analysis de encoding costs para múltiplas resoluções<br>
• Architecture design para scalable video delivery<br><br>
<strong>Resultados do spike revelam complexidade:</strong><br>
• Adaptive streaming requer complete video pipeline redesign<br>
• Current monolith não suporta real-time bitrate switching<br>
• CDN costs serão 300% maiores que estimado<br>
• Mobile clients precisam de native SDK integration<br>
• Encoding infrastructure precisa de microservices approach<br><br>
<strong>Proposta técnica baseada em findings:</strong><br>
• Break epic em 6 smaller, achievable stories<br>
• Start com single bitrate 1080p bem otimizado<br>
• Build adaptive capability incrementalmente<br>
• Invest em monitoring antes de advanced features<br><br>
<strong>PO inicialmente resiste:</strong><br>
"Mas concorrentes já têm 4K! Usuários vão perceber que somos inferiores!"<br><br>
<strong>Como você argumenta pela abordagem incremental?</strong>`,
    tag: "incremental-development",
    choices: [
      { text: "Demonstrar que 1080p perfeito > 4K quebrado", next: "scrum-dev-quality-over-features" },
      { text: "Propor roadmap técnico realista", next: "scrum-dev-technical-roadmap" },
      { text: "Mostrar competitive analysis de quality vs quantity", next: "scrum-dev-competitive-analysis" }
    ]
  },

  "scrum-dev-quality-over-features": {
    id: "scrum-dev-quality-over-features",
    text: `<strong>Advocating Quality Over Feature Quantity</strong><br>
Você prepara demonstração convincente sobre impacto de qualidade na user experience:<br><br>
<strong>Demo técnica preparada:</strong><br>
• Side-by-side comparison: Netflix 1080p vs concorrente 4K instável<br>
• User testing com 50 beta users sobre preference<br>
• Metrics de engagement: buffering vs resolution preference<br>
• Technical analysis de network conditions no Brasil<br><br>
<strong>Evidências apresentadas:</strong><br>
• 73% dos users preferem 1080p smooth vs 4K com buffering<br>
• Average Brazilian internet: 35 Mbps (insuficiente para 4K estável)<br>
• User churn increases 400% quando buffering > 3 segundos<br>
• Engagement time: smooth streaming +180% vs high resolution<br><br>
<strong>Proposta técnica refinada:</strong><br>
• Perfect 1080p experience como foundation<br>
• Progressive enhancement baseado em network detection<br>
• Quality metrics instrumentation antes de advanced features<br>
• User-centric definition of "quality"<br><br>
<strong>6 meses depois - Validation completa:</strong><br>
• Platform tem highest user satisfaction score no market<br>
• 4.8/5 stars com comments sobre "smooth experience"<br>
• Competitors com 4K têm 2.1x higher churn rate<br>
• Technical foundation permite easy 4K rollout quando needed<br><br>
<strong>Recognition achieved:</strong><br>
• Você promovido a Technical Lead<br>
• Approach se torna development philosophy da empresa<br>
• Case study usado em engineering conferences`,
    explanation: `Demonstração excepcional das responsibilities do Developer conforme Scrum Guide:<br><br>
• <strong>Quality Advocacy:</strong> Priorizou user value real ao invés de feature checklist<br>
• <strong>Technical Leadership:</strong> Educou stakeholders sobre technical trade-offs<br>
• <strong>Cross-functional Collaboration:</strong> Worked closely com PO para refine requirements<br>
• <strong>Definition of Done Excellence:</strong> Maintained quality standards under pressure<br><br>
Scrum Guide 2020 estabelece que Developers são accountable por instilling quality e criar usable Increments. Esta jornada exemplifica como technical excellence deve guide product decisions, não apenas implementar whatever é requested.`,
    references: [
      "Scrum Guide 2020 - Developers instilling quality: https://scrumguides.org",
      "Scrum Guide 2020 - Definition of Done commitment: https://scrumguides.org",
      "Scrum Guide 2020 - Cross-functional collaboration: https://scrumguides.org"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  }
};
