
import { StoryGraph } from "../types/game";

export const xpDetailed: StoryGraph = {
  "xp-role": {
    id: "xp-role",
    text: `<strong>Projeto Real: API de Processamento de Pagamentos Financeiros</strong><br>
Time de 6 desenvolvedores aplicando XP em sistema financeiro de alta criticidade. Vocês são responsáveis por processar R$ 50 milhões em transações mensais com zero margem para erro.<br><br>
<strong>Contexto do projeto atual:</strong><br>
• Sistema legado com 200.000 linhas de código<br>
• Zero testes automatizados no código existente<br>
• Deploys manuais que demoram 8 horas<br>
• Bugs em produção causam perdas financeiras reais<br>
• Compliance rigoroso com regulamentações bancárias<br><br>
<strong>Sprint atual crítica:</strong> Refatorar sistema de validação de cartões mantendo zero downtime e 100% de compatibilidade.<br><br>
Qual papel você assume neste desafio de alta pressão?`,
    choices: [
      { text: "Coach XP", next: "xp-coach-specific-1" },
      { text: "Desenvolvedor Sênior", next: "xp-dev-specific-1" },
      { text: "Customer/Product Owner", next: "xp-customer-specific-1" }
    ]
  },

  // === COACH XP - CENÁRIO ESPECÍFICO ===
  "xp-coach-specific-1": {
    id: "xp-coach-specific-1",
    text: `<strong>Resistência Crítica ao TDD - Sessão de Code Review</strong><br><br>
<strong>Situação de alta tensão:</strong><br>
• Dev sênior João (8 anos exp): "TDD é muito lento para sistema legado financeiro"<br>
• Dev junior Ana: "Não sei escrever testes para código que mexe com dinheiro real"<br>
• Gerente executivo: "Prazos apertados, reguladores cobrando, foquem na funcionalidade"<br>
• Arquiteto: "Testes vão quebrar a arquitetura existente"<br><br>
<strong>Situação atual crítica:</strong><br>
• Cobertura de testes: 12% (inaceitável para sistema financeiro)<br>
• Meta regulatória: 85% de cobertura<br>
• Bugs em produção na última sprint: 8 (alguns causaram transações perdidas)<br>
• Pressão regulatória aumentando semanalmente<br><br>
<strong>Como Coach XP, sua estratégia para superar resistências:</strong>`,
    tag: "tdd-adoption",
    choices: [
      { text: "Golden Master testing para código legado crítico", next: "xp-coach-golden-master" },
      { text: "Pair programming TDD intensivo com dev sênior", next: "xp-coach-pair-senior" },
      { text: "Test-after como transição gradual para TDD", next: "xp-coach-test-after-fail" },
      { text: "Demonstrar ROI do TDD com métricas financeiras", next: "xp-coach-roi-demo" }
    ]
  },

  "xp-coach-golden-master": {
    id: "xp-coach-golden-master",
    text: `<strong>Estratégia Golden Master - Abordagem Conservadora</strong><br>
Você implementou Approval Tests (Golden Master) para capturar comportamento crítico do sistema legado financeiro.<br><br>
<strong>Primeira semana - implementação intensiva:</strong><br>
• 350 cenários críticos de Golden Master criados<br>
• Cobertura de todos os fluxos de pagamento principais<br>
• Captura de edge cases de validação de cartão<br>
• Refatoração segura de 5 classes críticas<br>
• 3 bugs silenciosos interceptados antes da produção<br><br>
<strong>Dev João (convertido):</strong><br>
"Cara, isso realmente funciona! Consegui refatorar o algoritmo de Luhn com total confiança. Pela primeira vez em anos não tive medo de mexer no core financeiro."<br><br>
<strong>Resultado surpreendente:</strong><br>
• Zero regressões em produção durante refatoração<br>
• Confiança do time aumentou drasticamente<br><br>
<strong>Próximo passo estratégico:</strong>`,
    tag: "technical-excellence",
    choices: [
      { text: "Evoluir Golden Masters para testes unitários TDD completos", next: "xp-coach-evolution-success" },
      { text: "Manter apenas Golden Masters como solução final", next: "xp-coach-golden-partial" },
      { text: "Treinar time intensivamente em Test-Driven Refactoring", next: "xp-coach-tdr-success" }
    ]
  },

  "xp-coach-pair-senior": {
    id: "xp-coach-pair-senior",
    text: `<strong>Pair Programming TDD Intensivo com Dev Sênior</strong><br>
Você decide fazer pair programming direto com João, o dev mais resistente, para demonstrar TDD na prática:<br><br>
<strong>Sessão transformadora (4 horas consecutivas):</strong><br>
• Problema real: refatorar validação de CPF crítica<br>
• Você (Navigator): "João, vamos escrever teste que falha primeiro"<br>
• João (Driver): relutantemente escreve teste<br>
• Implementam solução mínima juntos<br>
• Refatoram código emergente<br><br>
<strong>Momento de revelação:</strong><br>
Durante refatoração, vocês descobrem bug silencioso que existia há 2 anos no sistema legado - CPFs com dígitos repetidos passavam por validação incorreta.<br><br>
<strong>João (convertido):</strong><br>
"Meu Deus... este bug custou milhares de reais em transações inválidas. TDD teria pego isso imediatamente!"`,
    tag: "coaching-through-practice",
    choices: [
      { text: "Expandir pair programming TDD para todo o time", next: "xp-coach-team-pairing" },
      { text: "João se torna embaixador TDD para outros devs", next: "xp-coach-peer-advocacy" }
    ]
  },

  "xp-coach-team-pairing": {
    id: "xp-coach-team-pairing",
    text: `<strong>Expansão de Pair Programming TDD para Todo o Time</strong><br>
Com João convertido, você implementa pair programming sistemático em todo o time:<br><br>
<strong>Estrutura implementada:</strong><br>
• Pairs rotacionam a cada 2 horas<br>
• Todos experimentam Navigator/Driver roles<br>
• TDD aplicado religiosamente em todo código novo<br>
• Daily code review de todos os commits<br>
• Knowledge sharing exponencial<br><br>
<strong>3 meses depois - Resultados extraordinários:</strong><br>
• Cobertura de testes: 91% (superou meta regulatória)<br>
• Bugs em produção: zero nos últimos 60 dias<br>
• Velocity aumentou 35% após período adaptação<br>
• Code quality score: 9.2/10<br>
• Time reports: "Trabalhar virou diversão colaborativa"<br><br>
<strong>1 ano depois:</strong><br>
• Sistema financeiro mais estável da empresa<br>
• Auditoria regulatória: aprovação sem ressalvas<br>
• Você promovido a Principal XP Coach<br>
• Metodologia replicada em toda divisão financeira`,
    explanation: `Implementação exemplar das práticas fundamentais de XP conforme extremeprogramming.org:<br><br>
• <strong>Pair Programming</strong> - Colaboração constante elevou qualidade e compartilhamento de conhecimento<br>
• <strong>Test-Driven Development</strong> - Confiança para refatorar sistema crítico<br>
• <strong>Collective Code Ownership</strong> - Todos podem trabalhar em qualquer parte do código<br>
• <strong>Simple Design</strong> - Emergiu através do ciclo TDD<br>
• <strong>Sustainable Pace</strong> - Eliminou stress de bugs em produção<br><br>
Esta jornada demonstra como práticas XP se reforçam mutuamente. Pair programming acelerou adoção de TDD, que permitiu refactoring seguro, que levou a design simples. O resultado em sistema financeiro crítico valida que XP funciona em ambientes de alta pressão.`,
    references: [
      "Extreme Programming Explained - Kent Beck: Pair Programming como prática fundamental",
      "Test-Driven Development by Example - Kent Beck: TDD em sistemas críticos",
      "Refactoring - Martin Fowler: refatoração segura com testes abrangentes"
    ],
    choices: [{ text: "Jogar novamente", next: "xp-role" }]
  },

  "xp-coach-peer-advocacy": {
    id: "xp-coach-peer-advocacy",
    text: `<strong>João como Embaixador TDD - Advocacy Peer-to-Peer</strong><br>
João se torna defensor apaixonado de TDD e lidera evangelização peer-to-peer:<br><br>
<strong>Estratégia de advocacy do João:</strong><br>
• Sessões de pair com cada dev individualmente<br>
• Abordagem "show, don't tell"<br>
• Foco em problemas reais que TDD resolve<br>
• Celebrar pequenas vitórias de cada dev<br><br>
<strong>Resultado após 4 meses:</strong><br>
• Ana (junior): "TDD me deu confiança para mexer em código complexo"<br>
• Carlos (arquiteto): "Design emergente via TDD é superior ao que eu projetava"<br>
• Maria (tester): "Agora posso focar em testes exploratórios ao invés de regressão"<br><br>
<strong>Transformação cultural completa:</strong><br>
• Adoção TDD: 100% em código novo<br>
• Cultura de peer mentoring estabelecida<br>
• Organização de aprendizado genuína<br>
• Você reconhecido como master coach que desenvolve outros coaches`,
    explanation: `Estratégia brilhante de change management através de influência peer:<br><br>
• <strong>Peer Learning</strong> - Conversão de cético em defensor é mais poderosa que coaching top-down<br>
• <strong>Adoção Orgânica</strong> - Práticas adotadas porque desenvolvedores escolheram, não foram impostas<br>
• <strong>Cultura Sustentável</strong> - Peer advocacy cria cultura auto-reforçante<br>
• <strong>Desenvolvimento de Liderança</strong> - Você desenvolveu outros agentes de mudança<br><br>
Esta abordagem exemplifica valor XP de "Respeito" - respeitando resistência inicial e encontrando forma para cada pessoa descobrir valor por si mesma. Peer advocacy é frequentemente mais efetiva que treinamento formal.`,
    references: [
      "Extreme Programming Explained - Kent Beck: Mudança cultural baseada em valores",
      "Fearless Change - Mary Lynn Manns: padrões de peer advocacy",
      "Valores XP: Respeito, Comunicação e aprendizado através da prática"
    ],
    choices: [{ text: "Jogar novamente", next: "xp-role" }]
  },

  "xp-coach-test-after-fail": {
    id: "xp-coach-test-after-fail",
    text: `<strong>Estratégia Test-After - Perdendo o Ponto Principal</strong><br>
Você decide implementar "test-after" como compromisso, achando que será adoção mais fácil:<br><br>
<strong>Estratégia implementada:</strong><br>
• Desenvolvedores escrevem código primeiro<br>
• Depois escrevem testes para cobrir o código<br>
• Foco em percentual de cobertura<br>
• "Pelo menos temos testes agora"<br><br>
<strong>Problemas que emergem (2 meses):</strong><br>
• Testes são frágeis e quebram frequentemente<br>
• Design do código continua acoplado e complexo<br>
• Testes não direcionam melhor design<br>
• Cobertura alta mas confiança baixa<br>
• Refatoração continua arriscada<br><br>
<strong>6 meses depois:</strong><br>
Meta de cobertura atingida (85%) mas qualidade sistêmica não melhorou. Bugs continuam escapando para produção.`,
    explanation: `Falha em compreender essência do Test-Driven Development:<br><br>
• <strong>Impacto no Design Perdido</strong> - TDD não é sobre testes, é sobre design emergente<br>
• <strong>Gap de Confiança</strong> - Test-after não proporciona mesma confiança que TDD<br>
• <strong>Segurança de Refatoração Ausente</strong> - Testes escritos depois não capturam intenção do design<br>
• <strong>Falsa Segurança</strong> - Alta cobertura sem qualidade de design é ilusão<br><br>
O benefício central do TDD não são os testes, mas o design que emerge do pensamento test-first. Test-after perde o ponto fundamental - usar testes para direcionar design, não apenas verificar comportamento.`,
    references: [
      "Test-Driven Development by Example - Kent Beck: TDD é atividade de design, não de teste",
      "Growing Object-Oriented Software - Freeman/Pryce: test-first direcionando design",
      "XP Explained: Simple Design emerge através do ciclo TDD"
    ],
    choices: [{ text: "Jogar novamente", next: "xp-role" }]
  },

  "xp-coach-roi-demo": {
    id: "xp-coach-roi-demo",
    text: `<strong>Demonstração ROI do TDD com Métricas Financeiras</strong><br>
Você prepara business case detalhado mostrando impacto financeiro do TDD:<br><br>
<strong>Análise apresentada:</strong><br>
• Custo médio de bug em produção: R$ 15.000<br>
• 8 bugs/sprint × R$ 15.000 = R$ 120.000/sprint de prejuízo<br>
• Investimento TDD: 20% tempo adicional inicial<br>
• Projeção ROI: break-even em 6 semanas<br>
• Economia longo prazo: R$ 2.8M anuais<br><br>
<strong>Time executivo impressionado:</strong><br>
• CFO: "Com estes números, TDD é imperativo de negócio"<br>
• CTO: "Vamos implementar imediatamente"<br>
• Officer de Compliance: "Aprovação regulatória será muito mais fácil"<br><br>
<strong>Implementação autorizada com suporte executivo total.</strong>`,
    tag: "business-case-success",
    choices: [
      { text: "Implementar TDD com suporte executivo total", next: "xp-coach-executive-support" },
      { text: "Começar piloto pequeno para validar projeções", next: "xp-coach-pilot-validation" }
    ]
  },

  "xp-coach-executive-support": {
    id: "xp-coach-executive-support",
    text: `<strong>Implementação TDD com Suporte Executivo Total</strong><br>
Com backing executivo completo, você implementa TDD sistematicamente:<br><br>
<strong>Recursos disponibilizados:</strong><br>
• Budget de treinamento para experts externos<br>
• Time protegido para curva de aprendizado<br>
• Investimento em ferramentas e infraestrutura<br>
• Dashboard de métricas para acompanhar progresso<br><br>
<strong>Resultado após 8 meses:</strong><br>
• ROI realizado: R$ 3.1M economizados (superou projeção)<br>
• Zero bugs críticos em produção<br>
• Compliance regulatório: 100% aprovação<br>
• Satisfação do time: maior da empresa<br>
• Metodologia expandida para outros sistemas críticos<br><br>
<strong>Você reconhecido como líder de transformação e promovido a Head of Engineering Excellence.</strong>`,
    explanation: `Execução perfeita de mudança organizacional através de alinhamento executivo:<br><br>
• <strong>Domínio de Business Case</strong> - Conectou práticas técnicas com resultados de negócio<br>
• <strong>Patrocínio Executivo</strong> - Garantiu recursos e suporte político necessários<br>
• <strong>Implementação Sistemática</strong> - Abordagem estruturada com suporte adequado<br>
• <strong>Entrega de Resultados</strong> - Superou projeções, validando business case<br><br>
Esta abordagem demonstra como Coach XP deve entender contexto de negócio além de práticas técnicas. Garantir suporte executivo acelera adoção e remove impedimentos organizacionais.`,
    references: [
      "Extreme Programming Explained - Kent Beck: XP requer suporte organizacional",
      "Fearless Change - Mary Lynn Manns: padrão de patrocinador executivo",
      "Business case para práticas técnicas: ROI através de métricas de qualidade"
    ],
    choices: [{ text: "Jogar novamente", next: "xp-role" }]
  },

  "xp-coach-pilot-validation": {
    id: "xp-coach-pilot-validation",
    text: `<strong>Piloto de Validação das Projeções</strong><br>
Você propõe piloto controlado para validar business case antes de rollout completo:<br><br>
<strong>Design do piloto (3 meses):</strong><br>
• 1 feature crítica com TDD vs 1 sem TDD<br>
• Rastreamento detalhado de métricas<br>
• Comparação A/B de resultados<br>
• Relatórios semanais de progresso para executivos<br><br>
<strong>Resultados do piloto (surpreendentes):</strong><br>
• Feature TDD: zero bugs, entregue antecipadamente<br>
• Feature non-TDD: 12 bugs, 40% overtime<br>
• ROI real: 340% vs 280% projetado<br>
• Satisfação do desenvolvedor: dramaticamente maior com TDD<br><br>
<strong>Decisão executiva unânime:</strong><br>
"Escalar TDD imediatamente em todos sistemas críticos!"<br><br>
<strong>Implementação escalada é ainda mais bem-sucedida devido ao proof of concept sólido.</strong>`,
    explanation: `Excelente abordagem de gerenciamento de risco e adoção baseada em evidências:<br><br>
• <strong>Método Científico</strong> - Experimento controlado fornece evidência irrefutável<br>
• <strong>Mitigação de Risco</strong> - Abordagem piloto minimizou risco organizacional<br>
• <strong>Confiança dos Stakeholders</strong> - Resultados reais construíram suporte mais forte que projeções<br>
• <strong>Estratégia de Escala</strong> - Proof of concept tornou adoção completa mais suave<br><br>
Esta estratégia mostra maturidade em change management. Em ambientes de alto risco, validação piloto pode valer o investimento para construir confiança inabalável antes de mudança organizacional maior.`,
    references: [
      "Lean Startup - Eric Ries: validação através de experimentos controlados",
      "Práticas XP: coragem para experimentar combinada com decisões baseadas em evidências",
      "Change management: programas piloto reduzindo resistência através de prova"
    ],
    choices: [{ text: "Jogar novamente", next: "xp-role" }]
  },

  "xp-coach-golden-partial": {
    id: "xp-coach-golden-partial",
    text: `<strong>Golden Masters como Solução Final - Oportunidade Perdida</strong><br>
Você decide manter apenas Golden Master tests sem evoluir para TDD completo:<br><br>
<strong>Benefícios alcançados:</strong><br>
• Refatoração segura do sistema legado<br>
• Bugs de regressão eliminados<br>
• Confiança para mexer em código crítico<br>
• Requisitos de compliance atendidos<br><br>
<strong>Oportunidades perdidas:</strong><br>
• Código novo continua com design subótimo<br>
• Oportunidade de aprendizado de TDD completo perdida<br>
• Time não desenvolve skills TDD para próximos projetos<br>
• Benefícios de design emergente não realizados<br><br>
<strong>Resultado: sucesso parcial mas potencial não totalmente realizado.</strong>`,
    explanation: `Estratégia adequada mas escopo limitado do que poderia ter sido alcançado:<br><br>
• <strong>Abordagem Risk-Averse</strong> - Golden Master é escolha conservadora que funcionou<br>
• <strong>Oportunidade Perdida</strong> - Time poderia ter aprendido skills TDD mais valiosas<br>
• <strong>Sucesso Curto Prazo</strong> - Problema imediato resolvido mas crescimento longo prazo limitado<br>
• <strong>Gap de Coaching</strong> - Não empurrou time para próximo nível de excelência<br><br>
Golden Master testing é estratégia válida para código legado, mas Coach XP deveria idealmente guiar time para domínio TDD completo quando possível. Acomodou-se com "bom o suficiente" quando "excelente" era alcançável.`,
    references: [
      "Working Effectively with Legacy Code - Michael Feathers: Golden Master como ponto de partida",
      "Test-Driven Development by Example - Kent Beck: evolução de characterization para design tests",
      "XP coaching: empurrando times para níveis mais altos de excelência técnica"
    ],
    choices: [{ text: "Jogar novamente", next: "xp-role" }]
  },

  "xp-coach-tdr-success": {
    id: "xp-coach-tdr-success",
    text: `<strong>Domínio de Test-Driven Refactoring</strong><br>
Você treina time intensivamente em Test-Driven Refactoring - combinação de Golden Master com princípios TDD:<br><br>
<strong>Abordagem híbrida desenvolvida:</strong><br>
• Golden Master para comportamento existente<br>
• TDD para novas features dentro do sistema legado<br>
• Test-driven refactoring para melhoria gradual<br>
• Identificação de seams para quebra de dependências<br><br>
<strong>Técnica breakthrough:</strong><br>
Time aprende a criar "characterization tests" que gradualmente evoluem para "specification tests", permitindo modernização sistemática da base de código legada.<br><br>
<strong>1 ano depois - Transformação do sistema legado:</strong><br>
• 200.000 linhas de código legado modernizadas incrementalmente<br>
• Design patterns emergindo através de refatoração<br>
• Novas features são TDD puro<br>
• Zero downtime durante toda transformação<br>
• Time agora experts em modernização de sistema legado`,
    explanation: `Combinação magistral de técnicas de código legado com práticas XP:<br><br>
• <strong>Melhor dos Dois Mundos</strong> - Rede de segurança Golden Master com benefícios de design TDD<br>
• <strong>Modernização Incremental</strong> - Abordagem sistemática para transformação legada<br>
• <strong>Desenvolvimento de Skills</strong> - Time aprendeu técnicas avançadas de refatoração<br>
• <strong>Evolução do Sistema</strong> - Código legado gradualmente melhorado sem rewrite big bang<br><br>
Esta abordagem demonstra compreensão profunda de desafios de código legado combinada com princípios XP. Resultado é conquista rara - refatoração bem-sucedida em larga escala de sistema financeiro crítico sem disrupção de negócio.`,
    references: [
      "Working Effectively with Legacy Code - Michael Feathers: characterization tests e identificação de seams",
      "Refactoring - Martin Fowler: técnicas de refatoração suportadas por testes",
      "Práticas XP aplicadas à modernização legada: melhoria incremental"
    ],
    choices: [{ text: "Jogar novamente", next: "xp-role" }]
  },

  "xp-coach-evolution-success": {
    id: "xp-coach-evolution-success",
    text: `<strong>Evolução Natural para TDD Completo</strong><br>
Golden Masters criaram base de confiança para evolução completa para Test-Driven Development.<br><br>
<strong>Evolução orgânica observada (2 meses):</strong><br>
• Time naturalmente começou escrevendo testes antes do código<br>
• Refatoração tornou-se atividade diária, não mais temida<br>
• Código novo emergiu com design superior<br>
• Tempo de debugging reduziu 70% (testes identificam problemas precisamente)<br><br>
<strong>Resultado final extraordinário (6 meses):</strong><br>
• Cobertura de testes: 89% (superou meta regulatória)<br>
• Bugs em produção: 0 nos últimos 3 meses<br>
• Velocity aumentou 45% após período de adaptação<br>
• Tempo de deploy: 8 horas → 15 minutos (pipeline automatizado)<br>
• Auditoria de compliance: aprovação sem ressalvas<br><br>
<strong>Time voluntariamente solicita TDD em todos novos projetos</strong><br><br>
<strong>Reconhecimento organizacional:</strong><br>
• Caso de sucesso apresentado para C-level<br>
• Metodologia replicada em outros sistemas críticos<br>
• Você promovido a Principal Engineering Coach<br><br>
<strong>CTO testemunha:</strong><br>
"Esta transformação prova que XP funciona mesmo em ambientes regulados e críticos. TDD não é luxo, é necessidade para sistemas financeiros."`,
    explanation: `Implementação exemplar de práticas XP em ambiente crítico, seguindo princípios fundamentais do extremeprogramming.org:<br><br>
• <strong>Test-Driven Development</strong> - Uma das 12 práticas centrais, aplicada progressivamente<br>
• <strong>Refactoring</strong> - Transformou código legado em design limpo e sustentável<br>
• <strong>Simple Design</strong> - Emergiu naturalmente através do ciclo red-green-refactor<br>
• <strong>Collective Code Ownership</strong> - Testes permitiram que todos mexessem em código crítico<br>
• <strong>Sustainable Pace</strong> - Eliminou stress de deploys e bugs de produção<br><br>
A estratégia de Golden Master (Working Effectively with Legacy Code - Michael Feathers) é reconhecida na comunidade XP como primeiro passo para aplicar TDD em código legado. A evolução natural para TDD completo demonstra adoção sustentável e profunda das práticas. O resultado em sistema financeiro crítico valida que XP funciona em ambientes regulados.`,
    references: [
      "Extreme Programming Explained - Kent Beck: Test-Driven Development como prática fundamental",
      "Working Effectively with Legacy Code - Michael Feathers: Characterization Tests (Golden Master)",
      "Refactoring - Martin Fowler: refatoração segura suportada por testes automatizados"
    ],
    choices: [{ text: "Jogar novamente", next: "xp-role" }]
  },

  // === DESENVOLVEDOR XP - CENÁRIO ESPECÍFICO ===
  "xp-dev-specific-1": {
    id: "xp-dev-specific-1",
    text: `<strong>Conflito Técnico em Pair Programming - Daily Standup</strong><br><br>
<strong>Situação técnica complexa:</strong> Você está implementando algoritmo crítico de validação de cartão de crédito que processa milhares de transações por minuto.<br><br>
<strong>Contexto específico do conflito:</strong><br>
• Pareando com dev sênior Carlos há 3 dias consecutivos<br>
• Carlos: "Sua solução é muito simples, vou implementar algo enterprise-grade robusto"<br>
• Você: "YAGNI - só precisamos validar algoritmo de Luhn por enquanto"<br>
• Carlos implementa complex Factory Pattern com 15 classes<br>
• Você sugere começar com TDD: red-green-refactor<br>
• Carlos: "Já sei exatamente como fazer, não preciso escrever teste primeiro"<br>
• Tensão crescendo: vocês gastaram 2 dias discutindo arquitetura<br><br>
<strong>Pressão adicional:</strong><br>
• Manager cobrando entrega para sexta-feira<br>
• Compliance precisa aprovar código antes de produção<br><br>
<strong>Sua estratégia diplomática como desenvolvedor XP experiente:</strong>`,
    tag: "pair-programming-conflict",
    choices: [
      { text: "Navigator/Driver - guiar TDD ativamente como navigator", next: "xp-dev-navigator" },
      { text: "Propor ping-pong pairing estruturado com TDD", next: "xp-dev-pingpong" },
      { text: "Aceitar abordagem do Carlos para manter harmonia", next: "xp-dev-accept-fail" },
      { text: "Solicitar mudança de par ao coach diplomaticamente", next: "xp-dev-change-pair" }
    ]
  },

  "xp-dev-navigator": {
    id: "xp-dev-navigator",
    text: `<strong>Masterclass de Estratégia Navigator em Ação</strong><br>
Você assume papel de Navigator extremamente ativo, guiando TDD de forma educativa e colaborativa:<br><br>
<strong>Sessão transformadora de pairing:</strong><br>
• <strong>Você (Navigator):</strong> "Carlos, vamos escrever primeiro um teste que falha para CPF inválido '000.000.000-00'"<br>
• <strong>Carlos (Driver):</strong> Implementa teste, vê falhar<br>
• <strong>Você:</strong> "Perfeito! Agora escreva o mínimo código possível para fazer passar"<br>
• <strong>Carlos:</strong> Implementa solução simples<br>
• <strong>Você:</strong> "Excelente! Agora vamos refatorar... teste outro caso: CPF com caracteres especiais"<br><br>
<strong>Descoberta colaborativa surpreendente:</strong><br>
• Vocês encontram 6 edge cases que Carlos perderia na abordagem "já sei como fazer"<br>
• Algoritmo emerge limpo e robusto naturalmente<br>
• Code review passa sem comentários<br><br>
<strong>Carlos (genuinamente impressionado):</strong><br>
"Cara, TDD realmente captura casos que minha experiência sozinha perderia! E o código ficou mais limpo que minha arquitetura complexa."<br><br>
<strong>Semana seguinte - Resultado:</strong><br>
• Algoritmo em produção: zero bugs<br>
• Performance superior: 40% mais rápido que versão anterior<br>
• Carlos vira defensor de TDD e pair programming<br>
• Vocês se tornam dupla de referência no time<br><br>
<strong>3 meses depois - Evolução:</strong><br>
• Pair programming adotado por todo o time<br>
• Vocês mentoram outras duplas<br>
• Quality gate: 95% de cobertura mantida<br>
• Carlos te indica para posição de Tech Lead`,
    explanation: `Demonstração exemplar das práticas de XP em ação, conforme princípios do extremeprogramming.org:<br><br>
• <strong>Pair Programming</strong> - Papéis Navigator/Driver aplicados com maestria para resolução de conflitos<br>
• <strong>Test-Driven Development</strong> - Ciclo Red-Green-Refactor mantido religiosamente<br>
• <strong>Simple Design</strong> - YAGNI (You Ain't Gonna Need It) aplicado vs over-engineering<br>
• <strong>Collective Code Ownership</strong> - Ambos contribuíram igualmente para solução final<br>
• <strong>Respect</strong> - Um dos valores fundamentais, demonstrado na colaboração<br><br>
Esta abordagem ilustra como pair programming efetivo resolve conflitos técnicos através de colaboração ativa, não hierarquia ou imposição. O Navigator guia sem dominar, permitindo aprendizado mútuo genuíno. A emergência de design superior através de TDD valida os princípios de Simple Design do XP.`,
    references: [
      "Extreme Programming Explained - Kent Beck: Papéis Navigator/Driver e pair programming efetivo",
      "Pair Programming Illuminated - Williams & Kessler: técnicas avançadas de pairing colaborativo",
      "Test-Driven Development by Example - Kent Beck: TDD como ferramenta de design"
    ],
    choices: [{ text: "Jogar novamente", next: "xp-role" }]
  },

  "xp-dev-pingpong": {
    id: "xp-dev-pingpong",
    text: `<strong>Ping-Pong Pairing Estruturado com TDD</strong><br>
Você propõe estrutura específica de ping-pong pairing para resolver conflito:<br><br>
<strong>Regras estabelecidas:</strong><br>
• Carlos escreve teste que falha<br>
• Você escreve código mínimo para passar<br>
• Carlos refatora se necessário<br>
• Você escreve próximo teste que falha<br>
• Carlos escreve código mínimo para passar<br>
• Você refatora se necessário<br>
• Ciclo continua...<br><br>
<strong>Resultado após 4 horas:</strong><br>
• Ambos os jogadores engajados igualmente<br>
• Emergência natural de bom design<br>
• Carlos aprecia simplicidade que emerge<br>
• Você aprende com skills de refatoração do Carlos<br><br>
<strong>Momento de revelação:</strong><br>
Carlos: "Este ping-pong é como xadrez - cada movimento constrói sobre o anterior. Muito melhor que minha abordagem big design up front!"<br><br>
<strong>Impacto de longo prazo:</strong><br>
• Ping-pong torna-se prática padrão no time<br>
• Transferência de conhecimento acelera<br>
• Qualidade de código melhora drasticamente<br>
• Fator diversão aumenta engajamento`,
    explanation: `Excelente aplicação de técnica de pairing estruturado para resolução de conflitos:<br><br>
• <strong>Colaboração Estruturada</strong> - Formato ping-pong garante participação igual<br>
• <strong>Aprendizado Através da Prática</strong> - Ambos desenvolvedores aprendem com forças do outro<br>
• <strong>Emergência de Design</strong> - Bom design emerge naturalmente através do ciclo TDD<br>
• <strong>Resolução de Conflitos</strong> - Estrutura resolve conflitos de personalidade através de processo<br><br>
Ping-pong pairing é técnica XP avançada que combina pair programming com TDD de forma que naturalmente balanceia contribuições. Esta abordagem mostra maturidade em entender como estrutura pode facilitar colaboração.`,
    references: [
      "Extreme Programming Explained - Kent Beck: abordagens estruturadas para pair programming",
      "Pair Programming Illuminated: ping-pong pairing como técnica avançada",
      "Práticas XP: estrutura facilitando colaboração e aprendizado"
    ],
    choices: [{ text: "Jogar novamente", next: "xp-role" }]
  },

  "xp-dev-accept-fail": {
    id: "xp-dev-accept-fail",
    text: `<strong>Aceitação Prejudicial - Comprometendo Princípios XP</strong><br>
Você decide aceitar abordagem do Carlos para evitar conflito:<br><br>
<strong>Consequências do compromisso:</strong><br>
• Factory pattern complexo implementado<br>
• 15 classes para lógica de validação simples<br>
• Nenhum teste escrito (preferência do Carlos)<br>
• Solução over-engineered que ninguém entende<br>
• Pesadelo de manutenção futura criado<br><br>
<strong>2 semanas depois - Problemas emergem:</strong><br>
• Bug descoberto em produção<br>
• Leva 6 horas para entender código complexo<br>
• Fix requer mudança em 8 classes diferentes<br>
• Time tem medo de tocar no código<br><br>
<strong>6 meses depois:</strong><br>
• Código torna-se débito técnico<br>
• Time evita trabalhar naquele módulo<br>
• Você se arrepende de não defender princípios XP<br>
• Lição aprendida: às vezes conflito é necessário para proteger qualidade do código`,
    explanation: `Falha em manter valores XP quando confrontado com conflito:<br><br>
• <strong>Simplicidade Sacrificada</strong> - Princípio YAGNI abandonado para evitar confronto<br>
• <strong>Collective Code Ownership Perdido</strong> - Código complexo que só uma pessoa entende<br>
• <strong>Sustainable Pace Ameaçado</strong> - Débito técnico cria stress futuro<br>
• <strong>Coragem Ausente</strong> - Falta de coragem para defender boas práticas<br><br>
Valores XP incluem "Coragem" especificamente porque às vezes desenvolvedores devem defender boas práticas. Aceitar abordagens ruins para manter harmonia ultimamente prejudica time e codebase. Às vezes conflito respeitoso é necessário para proteger interesses de longo prazo.`,
    references: [
      "Extreme Programming Explained - Kent Beck: Coragem como valor fundamental XP",
      "Valores XP: Às vezes conflito é necessário para proteger qualidade",
      "Princípios Simple Design: lutar contra complexidade é responsabilidade contínua"
    ],
    choices: [{ text: "Jogar novamente", next: "xp-role" }]
  },

  "xp-dev-change-pair": {
    id: "xp-dev-change-pair",
    text: `<strong>Solicitação Diplomática de Mudança de Par</strong><br>
Você aborda coach diplomaticamente sobre mudar de par:<br><br>
<strong>Sua conversa com coach:</strong><br>
"Coach, Carlos e eu temos abordagens diferentes para este problema. Talvez seria bom para ambos fazermos par com outras pessoas para ter perspectivas frescas?"<br><br>
<strong>Resposta do coach:</strong><br>
"Observação interessante. Vamos tentar rotação - Carlos com Ana, você com Maria, e depois avaliamos."<br><br>
<strong>Resultado da rotação:</strong><br>
• Você e Maria implementam solução TDD limpa<br>
• Carlos e Ana criam abordagem diferente<br>
• Time revisa ambas soluções<br>
• Melhores elementos de cada abordagem são combinados<br><br>
<strong>Resultado positivo:</strong><br>
• Conflito evitado através de solução diplomática<br>
• Múltiplas abordagens exploradas<br>
• Time aprende com diferentes perspectivas<br>
• Solução final é melhor que qualquer abordagem individual<br><br>
<strong>Carlos depois agradece você por sugerir rotação.</strong>`,
    explanation: `Abordagem madura para resolução de conflitos através de meios diplomáticos:<br><br>
• <strong>Evitação de Conflitos</strong> - Encontrou forma de resolver diferenças sem confronto<br>
• <strong>Oportunidade de Aprendizado</strong> - Rotação de pares permitiu exploração de diferentes abordagens<br>
• <strong>Benefício do Time</strong> - Solução beneficiou-se de múltiplas perspectivas<br>
• <strong>Preservação de Relacionamento</strong> - Manteve relacionamento positivo com Carlos<br><br>
Esta abordagem demonstra inteligência emocional e compreensão de que às vezes melhor solução é mudar contexto ao invés de lutar dentro do contexto existente. Resolução diplomática de problemas é skill valiosa em ambientes de time.`,
    references: [
      "Extreme Programming Explained - Kent Beck: rotação de pares como prática padrão",
      "Dinâmicas de time: mudar contexto pode resolver conflitos de personalidade",
      "Práticas XP: flexibilidade em atribuições de pares para otimizar aprendizado"
    ],
    choices: [{ text: "Jogar novamente", next: "xp-role" }]
  },

  // === CUSTOMER/PRODUCT OWNER XP ===
  "xp-customer-specific-1": {
    id: "xp-customer-specific-1",
    text: `<strong>Planning Game Crítico - Definição de Release</strong><br><br>
<strong>Situação de alta pressão:</strong> Definindo próxima iteração de 2 semanas para sistema de pagamentos com deadline regulatório rígido.<br><br>
<strong>User Stories críticas propostas pelo negócio:</strong><br>
• "Processamento de PIX instantâneo" - 13 pontos (alta complexidade)<br>
• "Relatório detalhado de transações para auditores" - 21 pontos (muito complexa)<br>
• "Notificações em tempo real por email/SMS" - 8 pontos (média)<br>
• "Sistema de reconciliação bancária automática" - 34 pontos (épica)<br>
• "Dashboard executivo com métricas financeiras" - 13 pontos (alta)<br><br>
<strong>Realidade técnica:</strong><br>
• Velocity histórica do time: 18-22 pontos por iteração<br>
• Todas as stories são inter-dependentes<br>
• Regulador exige PIX + relatórios funcionando em 30 dias<br><br>
<strong>Pressão executiva extrema:</strong><br>
• CEO: "Precisamos de PIX E relatórios urgente para compliance"<br>
• CFO: "Dashboard é crítico para reunião do board"<br>
• Arquiteto: "Reconciliação é base para tudo funcionar"<br><br>
<strong>Como Customer experiente, sua estratégia de priorização:</strong>`,
    tag: "planning-game",
    choices: [
      { text: "Story splitting técnico: quebrar épicas em entregáveis", next: "xp-customer-split" },
      { text: "PIX + Notificações (21 pontos) - dentro da velocity", next: "xp-customer-conservative" },
      { text: "Negociar iteração de 3 semanas com stakeholders", next: "xp-customer-negotiate-fail" },
      { text: "PIX + versão MVP do relatório de compliance", next: "xp-customer-mvp" }
    ]
  },

  "xp-customer-split": {
    id: "xp-customer-split",
    text: `<strong>Masterclass de Story Splitting - Colaboração Técnica</strong><br>
Você trabalhou intensivamente com o time durante 4 horas para quebrar épicas complexas em user stories entregáveis.<br><br>
<strong>Resultado da sessão colaborativa:</strong><br>
<strong>Relatório de Transações (era 21 pontos):</strong><br>
• "Visual das últimas 50 transações com status" - 5 pontos<br>
• "Filtros básicos: data, valor, status" - 3 pontos<br>
• "Export CSV para auditores" - 5 pontos<br>
• "Campos extras regulatórios" - 8 pontos (próxima iteração)<br><br>
<strong>PIX Instantâneo (era 13 pontos):</strong><br>
• "Processar PIX básico sem validações extras" - 8 pontos<br>
• "Validações de compliance PIX" - 5 pontos (próxima iteração)<br><br>
<strong>Iteração escolhida estrategicamente:</strong><br>
PIX básico (8) + Visual transações (5) + Filtros (3) + Export CSV (5) = 21 pontos<br><br>
<strong>Resultado excepcional após 2 semanas:</strong><br>
• PIX funcionando para 80% dos casos de uso<br>
• Relatório atende 100% das necessidades de compliance<br>
• Regulador aprova funcionalidades entregues<br>
• Time entrega com alta qualidade dentro do prazo<br><br>
<strong>6 meses depois - Transformação completa:</strong><br>
• Ciclo de release estabilizado em 2 semanas<br>
• Compliance nunca mais foi problema<br>
• Time confia nas estimativas e entregas<br>
• Você reconhecido como "Customer que entende o negócio E a técnica"<br><br>
<strong>Depoimento do time:</strong><br>
"Trabalhar com você é diferente - você entende nossas limitações técnicas e nos ajuda a entregar valor real incrementalmente."`,
    explanation: `Implementação exemplar do Planning Game conforme valores e práticas do XP:<br><br>
• <strong>Planning Game</strong> - Colaboração ativa Customer-Developer para escopo realista e entregável<br>
• <strong>Small Releases</strong> - Iterações sustentáveis que entregam valor business real<br>
• <strong>Simple Design</strong> - Foco nas funcionalidades que realmente agregam valor<br>
• <strong>Customer Collaboration</strong> - Priorizando valor incremental vs features completas<br>
• <strong>Courage</strong> - Coragem para quebrar épicas e entregar parcialmente<br><br>
O XP enfatiza que o Customer deve trabalhar intimamente com developers para fazer trade-offs inteligentes baseados em valor real. Story splitting permite entrega de valor mais cedo e feedback mais rápido, princípios fundamentais do XP. A abordagem colaborativa demonstra que Planning Game é sobre parceria, não imposição de requirements.`,
    references: [
      "Extreme Programming Explained - Kent Beck: Planning Game como prática colaborativa",
      "User Stories Applied - Mike Cohn: técnicas avançadas de story splitting",
      "Valores XP: Courage, Simplicity e Feedback através de small releases"
    ],
    choices: [{ text: "Jogar novamente", next: "xp-role" }]
  },

  "xp-customer-conservative": {
    id: "xp-customer-conservative",
    text: `<strong>Abordagem Conservadora - PIX + Notificações</strong><br>
Você escolhe combinação segura de PIX (13 pontos) + Notificações (8 pontos) = 21 pontos, dentro da velocity histórica.<br><br>
<strong>Resultado da iteração:</strong><br>
• PIX implementado completamente<br>
• Sistema de notificações funcionando<br>
• Time entrega no prazo sem stress<br>
• Qualidade mantida<br><br>
<strong>Problema emergente:</strong><br>
• Regulador ainda precisa dos relatórios<br>
• Auditoria de compliance agendada para próximo mês<br>
• Pressão continua para entregar features restantes<br><br>
<strong>Desafio da próxima iteração:</strong><br>
Você ainda tem épica de 21 pontos (relatórios) que não cabe em iteração única, e dashboard de 13 pontos também aguardando.<br><br>
<strong>Aprendizado:</strong><br>
Abordagem conservadora funcionou mas não endereçou problema fundamental de stories oversized. Splitting seria abordagem mais estratégica.`,
    tag: "conservative-planning",
    choices: [
      { text: "Aplicar story splitting para próxima iteração", next: "xp-customer-split-next" },
      { text: "Negociar timeline estendido com stakeholders", next: "xp-customer-timeline-negotiation" }
    ]
  },

  "xp-customer-split-next": {
    id: "xp-customer-split-next",
    text: `<strong>Story Splitting Aplicado na Próxima Iteração</strong><br>
Aprendendo da abordagem conservadora, você aplica story splitting para stories restantes:<br><br>
<strong>Splitting do Relatório (era 21 pontos):</strong><br>
• Relatório core de compliance (8 pontos)<br>
• Filtragem básica (3 pontos)<br>
• Funcionalidade de export (5 pontos)<br>
• Features avançadas (5 pontos - iteração futura)<br><br>
<strong>Plano da próxima iteração:</strong><br>
Core compliance (8) + Filtragem básica (3) + Export (5) + Dashboard MVP (6) = 22 pontos<br><br>
<strong>Resultado após 4 iterações:</strong><br>
• Todos requisitos regulatórios atendidos<br>
• Stakeholders felizes com entrega incremental<br>
• Time mantém ritmo sustentável<br>
• Você demonstra aprendizado e adaptação<br><br>
<strong>Reconhecimento:</strong><br>
"Customer que aprende da experiência e adapta abordagem é invaluável para sucesso XP."`,
    explanation: `Demonstração de melhoria contínua e aprendizado em papel de Customer XP:<br><br>
• <strong>Adaptação</strong> - Aprendeu da abordagem conservadora e aplicou técnica melhor<br>
• <strong>Evolução do Planning Game</strong> - Melhorou skills de planejamento através da prática<br>
• <strong>Entrega de Valor</strong> - Manteve foco em valor de negócio enquanto melhorava processo<br>
• <strong>Crescimento do Customer</strong> - Desenvolveu melhores skills de colaboração com developers<br><br>
Esta jornada mostra que papel de Customer XP requer aprendizado contínuo. Abordagem conservadora inicial não estava errada, mas crescimento vem de aplicar técnicas melhores quando você as aprende.`,
    references: [
      "Extreme Programming Explained - Kent Beck: Planning Game como processo de aprendizado",
      "Evolução do Customer XP: melhorando colaboração ao longo do tempo",
      "Melhoria contínua através de reflexão e adaptação"
    ],
    choices: [{ text: "Jogar novamente", next: "xp-role" }]
  },

  "xp-customer-timeline-negotiation": {
    id: "xp-customer-timeline-negotiation",
    text: `<strong>Negociação de Timeline com Stakeholders</strong><br>
Você aborda stakeholders para negociar timeline realista baseado em constraints técnicas:<br><br>
<strong>Sua apresentação para executivos:</strong><br>
• Velocity atual: 20 pontos por iteração<br>
• Trabalho restante: 34 + 21 + 13 = 68 pontos<br>
• Timeline realista: 4 iterações (8 semanas)<br>
• Risco de apressar: compromisso de qualidade e débito técnico<br><br>
<strong>Reações dos stakeholders:</strong><br>
• CEO: "Não podemos adicionar mais desenvolvedores?"<br>
• CFO: "E overtime?"<br>
• Compliance: "Deadline regulatório é inegociável"<br><br>
<strong>Sua resposta:</strong><br>
"Deixe-me trabalhar com o time para ver se conseguimos otimizar entrega sem comprometer qualidade."<br><br>
<strong>Resultado:</strong><br>
Você ganha tempo para aplicar story splitting e outras técnicas de otimização, ultimamente entregando valor mais efetivamente que plano original.`,
    explanation: `Gerenciamento realista de stakeholders combinado com compreensão técnica:<br><br>
• <strong>Comunicação Baseada em Dados</strong> - Usou dados de velocity para sustentar argumentos<br>
• <strong>Gerenciamento de Risco</strong> - Destacou consequências de apressar<br>
• <strong>Mindset de Problem-Solving</strong> - Procurou alternativas ao invés de apenas dizer "não"<br>
• <strong>Educação de Stakeholders</strong> - Ajudou-os a entender constraints técnicas<br><br>
Bom Customer XP deve balancear pressão de negócio com realidade técnica. Esta abordagem demonstra maturidade em gerenciar demandas conflitantes enquanto procura soluções criativas.`,
    references: [
      "Extreme Programming Explained - Kent Beck: Customer como defensor de negócio e broker de realidade técnica",
      "Planning Game: balanceando necessidades de negócio com constraints técnicas",
      "Valores XP: honestidade na comunicação sobre constraints e possibilidades"
    ],
    choices: [{ text: "Jogar novamente", next: "xp-role" }]
  },

  "xp-customer-negotiate-fail": {
    id: "xp-customer-negotiate-fail",
    text: `<strong>Negociação de 3 Semanas - Quebrando Ritmo XP</strong><br>
Você propõe iteração de 3 semanas para caber mais trabalho:<br><br>
<strong>Problemas que emergem:</strong><br>
• 3 semanas é muito longo para ciclo de feedback efetivo<br>
• Time perde foco em iteração mais longa<br>
• Problemas de integração se acumulam<br>
• Stakeholders perdem visibilidade do progresso<br>
• Risco aumenta com período de compromisso mais longo<br><br>
<strong>Resultado após 3 semanas:</strong><br>
• Apenas 75% das stories realmente completadas<br>
• Bugs de integração descobertos tardiamente<br>
• Stakeholders frustrados com espera longa<br>
• Time stressado por compromisso estendido<br><br>
<strong>Aprendizado:</strong><br>
Ritmo XP de iterações curtas existe por boas razões. Quebrar ritmo para acomodar escopo geralmente resulta em mais problemas.`,
    explanation: `Falha em compreender princípios fundamentais XP sobre duração de iteração:<br><br>
• <strong>Disruption do Loop de Feedback</strong> - Iterações mais longas reduzem frequência valiosa de feedback<br>
• <strong>Acúmulo de Risco</strong> - Compromissos mais longos aumentam risco de não entregar<br>
• <strong>Perda de Foco</strong> - Times performam melhor com compromissos mais curtos e focados<br>
• <strong>Problemas de Integração</strong> - Integração menos frequente leva a mais problemas<br><br>
Duração de iteração XP é cuidadosamente projetada para otimizar feedback, reduzir risco e manter foco. Estender iterações para caber mais escopo geralmente cria mais problemas que resolve.`,
    references: [
      "Extreme Programming Explained - Kent Beck: duração ótima de iteração para feedback e gerenciamento de risco",
      "Práticas XP: iterações curtas como técnica de gerenciamento de risco",
      "Planning Game: trabalhando dentro de constraints ao invés de mudar constraints"
    ],
    choices: [{ text: "Jogar novamente", next: "xp-role" }]
  },

  "xp-customer-mvp": {
    id: "xp-customer-mvp",
    text: `<strong>Estratégia PIX + MVP Report</strong><br>
Você propõe PIX completo (13 pontos) + versão minimal viable do relatório de compliance (8 pontos) = 21 pontos.<br><br>
<strong>Features do MVP Report:</strong><br>
• Listagem básica de transações<br>
• Campos essenciais de compliance<br>
• Export CSV simples<br>
• Sem filtragem fancy ou dashboard<br><br>
<strong>Resultado:</strong><br>
• Funcionalidade PIX totalmente operacional<br>
• Relatório de compliance atende requisitos mínimos regulatórios<br>
• Reguladores aprovam funcionalidade básica<br>
• Stakeholders entendem abordagem incremental<br><br>
<strong>Iterações de follow-up adicionam:</strong><br>
• Filtragem melhorada<br>
• Visualizações de dashboard<br>
• Features avançadas de relatório<br>
• Reconciliação automatizada<br><br>
<strong>6 meses depois:</strong><br>
Feature set completo entregue incrementalmente, cada release adicionando valor, stakeholders educados sobre benefícios de entrega incremental.`,
    explanation: `Excelente aplicação de pensamento MVP dentro de contexto XP:<br><br>
• <strong>Valor Incremental</strong> - Entregou funcionalidade mínima valiosa primeiro<br>
• <strong>Mitigação de Risco</strong> - Atendeu requisitos regulatórios cedo<br>
• <strong>Educação de Stakeholders</strong> - Demonstrou valor de entrega incremental<br>
• <strong>Ritmo Sustentável</strong> - Manteve escopo razoável por iteração<br><br>
Esta abordagem exemplifica valor XP de "Simplicidade" - fazer a coisa mais simples que poderia possivelmente funcionar, depois construir sobre essa fundação. Pensamento MVP alinha perfeitamente com princípios XP de small releases e entrega contínua de valor.`,
    references: [
      "Extreme Programming Explained - Kent Beck: Simplicidade e entrega incremental",
      "Valores XP: fazer a coisa mais simples que funciona, depois evoluir",
      "Small Releases: entregando valor incrementalmente ao invés de big bang"
    ],
    choices: [{ text: "Jogar novamente", next: "xp-role" }]
  }
};
