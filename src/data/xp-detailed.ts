
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
      { text: "XP Coach", next: "xp-coach-specific-1" },
      { text: "Desenvolvedor Sênior", next: "xp-dev-specific-1" },
      { text: "Customer/Product Owner", next: "xp-customer-specific-1" }
    ]
  },

  // === XP COACH - CENÁRIO ESPECÍFICO ===
  "xp-coach-specific-1": {
    id: "xp-coach-specific-1",
    text: `<strong>Resistência Crítica ao TDD - Code Review Session</strong><br><br>
<strong>Situação de alta tensão:</strong><br>
• Dev sênior João (8 anos exp): "TDD é muito lento para sistema legado financeiro"<br>
• Dev junior Ana: "Não sei escrever testes para código que mexe com dinheiro real"<br>
• Manager executivo: "Prazos apertados, reguladores cobrando, foquem na funcionalidade"<br>
• Arquiteto: "Testes vão quebrar a arquitetura existente"<br><br>
<strong>Situação atual crítica:</strong><br>
• Cobertura de testes: 12% (inaceitável para sistema financeiro)<br>
• Meta regulatória: 85% de cobertura<br>
• Bugs em produção na última sprint: 8 (alguns causaram transações perdidas)<br>
• Pressão regulatória aumentando semanalmente<br><br>
<strong>Como XP Coach, sua estratégia para superar resistências:</strong>`,
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
    text: `<strong>Golden Master Strategy - Approach Conservador</strong><br>
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
• João (Driver): reluctantly escreve teste<br>
• Implementam solução mínima juntos<br>
• Refatoram código emergente<br><br>
<strong>Breakthrough moment:</strong><br>
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
    explanation: `Implementação exemplar das práticas fundamentais de XP:<br><br>
• <strong>Pair Programming</strong> - collaboration constante elevou quality e knowledge sharing<br>
• <strong>Test-Driven Development</strong> - confidence para refatorar sistema crítico<br>
• <strong>Collective Code Ownership</strong> - todos podem trabalhar em qualquer parte do código<br>
• <strong>Simple Design</strong> - emergiu através do ciclo TDD<br>
• <strong>Sustainable Pace</strong> - eliminou stress de bugs em produção<br><br>
Esta jornada demonstra como XP practices se reforçam mutuamente. Pair programming acelerou adoption de TDD, que permitiu refactoring seguro, que levou a simple design. O resultado em sistema financeiro crítico valida que XP funciona em ambientes de alta pressão.`,
    references: [
      "Extreme Programming Explained - Kent Beck: Pair Programming como prática fundamental",
      "Test-Driven Development by Example - Kent Beck: TDD em sistemas críticos",
      "Refactoring - Martin Fowler: refatoração segura com comprehensive tests"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "xp-coach-peer-advocacy": {
    id: "xp-coach-peer-advocacy",
    text: `<strong>João como Embaixador TDD - Peer Advocacy</strong><br>
João se torna defensor apaixonado de TDD e lidera evangelização peer-to-peer:<br><br>
<strong>Estratégia de advocacy do João:</strong><br>
• Pair sessions com cada dev individualmente<br>
• "Show, don't tell" approach<br>
• Focus em problemas reais que TDD resolve<br>
• Celebrar pequenas vitórias de cada dev<br><br>
<strong>Resultado after 4 meses:</strong><br>
• Ana (junior): "TDD me deu confiança para mexer em código complexo"<br>
• Carlos (arquiteto): "Design emergente via TDD é superior ao que eu projetava"<br>
• Maria (tester): "Agora posso focar em testes exploratórios ao invés de regression"<br><br>
<strong>Transformação cultural completa:</strong><br>
• TDD adoption: 100% em código novo<br>
• Peer mentoring culture estabelecida<br>
• Learning organization genuína<br>
• Você reconhecido como master coach que desenvolve outros coaches`,
    explanation: `Strategy brilhante de change management através de peer influence:<br><br>
• <strong>Peer Learning</strong> - conversion de skeptic em advocate é mais powerful que top-down coaching<br>
• <strong>Organic Adoption</strong> - practices adotadas porque developers escolheram, não foram impostas<br>
• <strong>Sustainable Culture</strong> - peer advocacy creates self-reinforcing culture<br>
• <strong>Leadership Development</strong> - você desenvolveu outros change agents<br><br>
Esta abordagem exemplifica XP value de "Respect" - respeitando resistance initial e finding way para cada person discover value por themselves. Peer advocacy é often mais effective que formal training.`,
    references: [
      "Extreme Programming Explained - Kent Beck: Values-based culture change",
      "Fearless Change - Mary Lynn Manns: peer advocacy patterns",
      "XP Values: Respect, Communication e learning through practice"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "xp-coach-test-after-fail": {
    id: "xp-coach-test-after-fail",
    text: `<strong>Test-After Strategy - Missing the Point</strong><br>
Você decide implementar "test-after" como compromisso, achando que será easier adoption:<br><br>
<strong>Strategy implementada:</strong><br>
• Desenvolvedores escrevem código primeiro<br>
• Depois escrevem testes para cobrir o código<br>
• Focus em coverage percentage<br>
• "Pelo menos temos testes agora"<br><br>
<strong>Problemas que emergem (2 meses):</strong><br>
• Testes são frágeis e quebram frequentemente<br>
• Design do código continua acoplado e complexo<br>
• Testes não driving better design<br>
• Coverage high mas confidence low<br>
• Refactoring continua arriscado<br><br>
<strong>6 meses depois:</strong><br>
Coverage goal atingido (85%) mas qualidade sistêmica não melhorou. Bugs continuam escapando para produção.`,
    explanation: `Falha em compreender essence do Test-Driven Development:<br><br>
• <strong>Design Impact Lost</strong> - TDD não é sobre tests, é sobre design emergente<br>
• <strong>Confidence Gap</strong> - test-after não provides same confidence que TDD<br>
• <strong>Refactoring Safety Missing</strong> - testes escritos after não capturing design intent<br>
• <strong>False Security</strong> - high coverage sem design quality é ilusão<br><br>
O core benefit do TDD não são os tests, mas o design que emerge from test-first thinking. Test-after misses fundamental point - usando tests para drive design, não just verify behavior.`,
    references: [
      "Test-Driven Development by Example - Kent Beck: TDD é design activity, não testing activity",
      "Growing Object-Oriented Software - Freeman/Pryce: test-first driving design",
      "XP Explained: Simple Design emerges através de TDD cycle"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "xp-coach-roi-demo": {
    id: "xp-coach-roi-demo",
    text: `<strong>Demonstração ROI do TDD com Métricas Financeiras</strong><br>
Você prepara business case detalhado mostrando impacto financeiro do TDD:<br><br>
<strong>Análise apresentada:</strong><br>
• Custo médio de bug em produção: R$ 15.000<br>
• 8 bugs/sprint × R$ 15.000 = R$ 120.000/sprint de loss<br>
• TDD investment: 20% tempo adicional inicial<br>
• ROI projection: break-even em 6 semanas<br>
• Long-term savings: R$ 2.8M anuais<br><br>
<strong>Executive team impressed:</strong><br>
• CFO: "Com estes números, TDD é business imperative"<br>
• CTO: "Vamos implementar immediately"<br>
• Compliance Officer: "Regulatory approval será muito easier"<br><br>
<strong>Implementation autorizada com full executive support.</strong>`,
    tag: "business-case-success",
    choices: [
      { text: "Implementar TDD com suporte executivo total", next: "xp-coach-executive-support" },
      { text: "Começar piloto small para validar projeções", next: "xp-coach-pilot-validation" }
    ]
  },

  "xp-coach-executive-support": {
    id: "xp-coach-executive-support",
    text: `<strong>Implementação TDD com Suporte Executivo Total</strong><br>
Com backing executivo complete, você implementa TDD systematically:<br><br>
<strong>Resources disponibilizados:</strong><br>
• Training budget para external experts<br>
• Time protegido para learning curve<br>
• Tools e infrastructure investment<br>
• Metrics dashboard para tracking progress<br><br>
<strong>Resultado after 8 meses:</strong><br>
• ROI realized: R$ 3.1M savings (superou projection)<br>
• Zero critical bugs em production<br>
• Regulatory compliance: 100% approval<br>
• Team satisfaction: highest na empresa<br>
• Metodologia expandida para other critical systems<br><br>
<strong>Você reconhecido como transformation leader e promovido a Head of Engineering Excellence.</strong>`,
    explanation: `Perfect execution de organizational change through executive alignment:<br><br>
• <strong>Business Case Mastery</strong> - connected technical practices com business outcomes<br>
• <strong>Executive Sponsorship</strong> - secured resources e political support necessários<br>
• <strong>Systematic Implementation</strong> - approach structured com proper support<br>
• <strong>Results Delivery</strong> - exceeded projections, validating business case<br><br>
Esta approach demonstrates como XP Coach must understand business context além de technical practices. Securing executive support accelerates adoption e removes organizational impediments.`,
    references: [
      "Extreme Programming Explained - Kent Beck: XP requires organizational support",
      "Fearless Change - Mary Lynn Manns: executive sponsor pattern",
      "Business case for technical practices: ROI através de quality metrics"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "xp-coach-pilot-validation": {
    id: "xp-coach-pilot-validation",
    text: `<strong>Piloto de Validação das Projeções</strong><br>
Você propõe piloto controlled para validar business case antes de full rollout:<br><br>
<strong>Piloto design (3 meses):</strong><br>
• 1 feature crítica com TDD vs 1 sem TDD<br>
• Métricas detailed tracking<br>
• A/B comparison of outcomes<br>
• Weekly progress reports to executives<br><br>
<strong>Resultados do piloto (surpreendentes):</strong><br>
• TDD feature: zero bugs, delivered early<br>
• Non-TDD feature: 12 bugs, 40% overtime<br>
• ROI actual: 340% vs 280% projected<br>
• Developer satisfaction: dramatically higher com TDD<br><br>
<strong>Executive decision unânime:</strong><br>
"Scale TDD immediately across all critical systems!"<br><br>
<strong>Scaled implementation é ainda mais successful devido ao proof of concept solid.</strong>`,
    explanation: `Excellent approach de risk management e evidence-based adoption:<br><br>
• <strong>Scientific Method</strong> - controlled experiment provides irrefutable evidence<br>
• <strong>Risk Mitigation</strong> - pilot approach minimized organizational risk<br>
• <strong>Stakeholder Confidence</strong> - real results built stronger support que projections<br>
• <strong>Scaling Strategy</strong> - proof of concept made full adoption smoother<br><br>
Esta strategy shows maturity em change management. Em high-stakes environments, pilot validation can be worth investment para build unshakeable confidence antes de major organizational change.`,
    references: [
      "Lean Startup - Eric Ries: validation através de controlled experiments",
      "XP practices: courage to experiment combined com evidence-based decisions",
      "Change management: pilot programs reducing resistance through proof"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "xp-coach-golden-partial": {
    id: "xp-coach-golden-partial",
    text: `<strong>Golden Masters como Solução Final - Oportunidade Perdida</strong><br>
Você decide manter apenas Golden Master tests sem evoluir para TDD completo:<br><br>
<strong>Benefícios alcançados:</strong><br>
• Refactoring seguro do sistema legado<br>
• Bugs de regressão eliminated<br>
• Confidence para mexer em código crítico<br>
• Compliance requirements met<br><br>
<strong>Oportunidades perdidas:</strong><br>
• Código novo continua com design subótimo<br>
• Learning opportunity de TDD completo missed<br>
• Team não desenvolve TDD skills para próximos projetos<br>
• Design emergente benefits não realizados<br><br>
<strong>Resultado: sucesso partial mas potential não totalmente realizado.</strong>`,
    explanation: `Strategy adequate mas limited scope do que poderia have been achieved:<br><br>
• <strong>Risk-Averse Approach</strong> - Golden Master é conservative choice que worked<br>
• <strong>Missed Opportunity</strong> - team could have learned mais valuable TDD skills<br>
• <strong>Short-term Success</strong> - immediate problem solved mas long-term growth limited<br>
• <strong>Coaching Gap</strong> - didn't push team para next level of excellence<br><br>
Golden Master testing é valid strategy para legacy code, mas XP coach should ideally guide team toward full TDD mastery quando possible. Settled para "good enough" quando "excellent" was achievable.`,
    references: [
      "Working Effectively with Legacy Code - Michael Feathers: Golden Master como starting point",
      "Test-Driven Development by Example - Kent Beck: evolution from characterization para design tests",
      "XP coaching: pushing teams toward higher levels of technical excellence"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "xp-coach-tdr-success": {
    id: "xp-coach-tdr-success",
    text: `<strong>Test-Driven Refactoring Mastery</strong><br>
Você treina time intensivamente em Test-Driven Refactoring - combination de Golden Master com TDD principles:<br><br>
<strong>Approach híbrida desenvolvida:</strong><br>
• Golden Master para comportamento existente<br>
• TDD para novas features dentro do legacy system<br>
• Test-driven refactoring para gradual improvement<br>
• Seam identification para dependency breaking<br><br>
<strong>Breakthrough technique:</strong><br>
Time aprende a criar "characterization tests" que gradually evolve into "specification tests", allowing systematic modernization de legacy codebase.<br><br>
<strong>1 ano depois - Legacy system transformation:</strong><br>
• 200.000 lines de legacy code modernized incrementally<br>
• Design patterns emergindo through refactoring<br>
• New features são pure TDD<br>
• Zero downtime durante entire transformation<br>
• Team agora experts em legacy system modernization`,
    explanation: `Masterful combination de legacy code techniques com XP practices:<br><br>
• <strong>Best of Both Worlds</strong> - Golden Master safety net com TDD design benefits<br>
• <strong>Incremental Modernization</strong> - systematic approach para legacy transformation<br>
• <strong>Skills Development</strong> - team learned advanced refactoring techniques<br>
• <strong>System Evolution</strong> - legacy code gradually improved sem big bang rewrite<br><br>
Esta approach demonstrates deep understanding de legacy code challenges combined com XP principles. Result é rare achievement - successful large-scale refactoring de critical financial system sem business disruption.`,
    references: [
      "Working Effectively with Legacy Code - Michael Feathers: characterization tests e seam identification",
      "Refactoring - Martin Fowler: test-supported refactoring techniques",
      "XP practices applied to legacy modernization: incremental improvement"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "xp-coach-evolution-success": {
    id: "xp-coach-evolution-success",
    text: `<strong>Evolução Natural para TDD Completo</strong><br>
Golden Masters criaram base de confiança para evolução completa para Test-Driven Development.<br><br>
<strong>Evolução orgânica observada (2 meses):</strong><br>
• Time naturalmente começou escrevendo testes antes do código<br>
• Refatoração tornou-se atividade diária, não mais temida<br>
• Código novo emergiu com design superior<br>
• Debugging time reduziu 70% (testes pinpoint problemas)<br><br>
<strong>Resultado final extraordinário (6 meses):</strong><br>
• Cobertura de testes: 89% (superou meta regulatória)<br>
• Bugs em produção: 0 nos últimos 3 meses<br>
• Velocity aumentou 45% após período de adaptação<br>
• Deploy time: 8 horas → 15 minutos (automated pipeline)<br>
• Compliance auditoria: aprovação sem ressalvas<br><br>
<strong>Time voluntariamente solicita TDD em todos novos projetos</strong><br><br>
<strong>Reconhecimento organizacional:</strong><br>
• Caso de sucesso apresentado para C-level<br>
• Metodologia replicada em outros sistemas críticos<br>
• Você promovido a Principal Engineering Coach<br><br>
<strong>CTO testemunha:</strong><br>
"Esta transformação prova que XP funciona mesmo em ambientes regulados e críticos. TDD não é luxo, é necessidade para sistemas financeiros."`,
    explanation: `Implementação exemplar de XP practices em ambiente crítico, seguindo princípios fundamentais do extremeprogramming.org:<br><br>
• <strong>Test-Driven Development</strong> - uma das 12 práticas centrais, aplicada progressivamente<br>
• <strong>Refactoring</strong> - transformou código legado em design limpo e sustentável<br>
• <strong>Simple Design</strong> - emergiu naturalmente através do ciclo red-green-refactor<br>
• <strong>Collective Code Ownership</strong> - testes permitiram que todos mexessem em código crítico<br>
• <strong>Sustainable Pace</strong> - eliminou stress de deploys e bugs de produção<br><br>
A estratégia de Golden Master (Working Effectively with Legacy Code - Michael Feathers) é reconhecida na comunidade XP como primeiro passo para aplicar TDD em código legado. A evolução natural para TDD completo demonstra adoção sustentável e profunda das práticas. O resultado em sistema financeiro crítico valida que XP funciona em ambientes regulados.`,
    references: [
      "Extreme Programming Explained - Kent Beck: Test-Driven Development como prática fundamental",
      "Working Effectively with Legacy Code - Michael Feathers: Characterization Tests (Golden Master)",
      "Refactoring - Martin Fowler: refatoração segura suportada por testes automatizados"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
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
    text: `<strong>Navigator Strategy Masterclass em Ação</strong><br>
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
• Carlos te indica para Tech Lead position`,
    explanation: `Demonstração exemplar das práticas de XP em ação, conforme principles do extremeprogramming.org:<br><br>
• <strong>Pair Programming</strong> - Navigator/Driver roles aplicados com maestria para resolução de conflitos<br>
• <strong>Test-Driven Development</strong> - Red-Green-Refactor cycle mantido religiosamente<br>
• <strong>Simple Design</strong> - YAGNI (You Ain't Gonna Need It) aplicado vs over-engineering<br>
• <strong>Collective Code Ownership</strong> - ambos contribuíram igualmente para solução final<br>
• <strong>Respect</strong> - um dos valores fundamentais, demonstrado na colaboração<br><br>
Esta abordagem ilustra como pair programming efetivo resolve conflitos técnicos através de colaboração ativa, não hierarquia ou imposição. O Navigator guia sem dominar, permitindo aprendizado mútuo genuíno. A emergência de design superior através de TDD valida os princípios de Simple Design do XP.`,
    references: [
      "Extreme Programming Explained - Kent Beck: Navigator/Driver roles e pair programming efetivo",
      "Pair Programming Illuminated - Williams & Kessler: técnicas avançadas de pairing colaborativo",
      "Test-Driven Development by Example - Kent Beck: TDD como ferramenta de design"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "xp-dev-pingpong": {
    id: "xp-dev-pingpong",
    text: `<strong>Ping-Pong Pairing Structured com TDD</strong><br>
Você propõe structure específica de ping-pong pairing para resolver conflict:<br><br>
<strong>Rules estabelecidas:</strong><br>
• Carlos escreve test que falha<br>
• Você escreve minimal code para passar<br>
• Carlos refatora se necessário<br>
• Você escreve próximo test que falha<br>
• Carlos escreve minimal code para passar<br>
• Você refatora se necessário<br>
• Cycle continua...<br><br>
<strong>Resultado após 4 horas:</strong><br>
• Both players engaged equally<br>
• Natural emergence de good design<br>
• Carlos appreciates simplicity que emerges<br>
• Você learns from Carlos's refactoring skills<br><br>
<strong>Breakthrough moment:</strong><br>
Carlos: "Este ping-pong é like chess - cada move builds on anterior. Much better que minha big design up front approach!"<br><br>
<strong>Long-term impact:</strong><br>
• Ping-pong becomes standard practice no time<br>
• Knowledge transfer accelerates<br>
• Code quality dramatically improves<br>
• Fun factor increases engagement`,
    explanation: `Excellent application de structured pairing technique para conflict resolution:<br><br>
• <strong>Structured Collaboration</strong> - ping-pong format ensures equal participation<br>
• <strong>Learning Through Practice</strong> - both developers learn from each other's strengths<br>
• <strong>Design Emergence</strong> - good design emerges naturally through TDD cycle<br>
• <strong>Conflict Resolution</strong> - structure resolves personality conflicts through process<br><br>
Ping-pong pairing é advanced XP technique que combines pair programming com TDD de forma que naturally balances contributions. Esta approach shows maturity em understanding how structure can facilitate collaboration.`,
    references: [
      "Extreme Programming Explained - Kent Beck: structured approaches para pair programming",
      "Pair Programming Illuminated: ping-pong pairing as advanced technique",
      "XP practices: structure facilitating collaboration e learning"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "xp-dev-accept-fail": {
    id: "xp-dev-accept-fail",
    text: `<strong>Aceitação Prejudicial - Comprometendo Princípios XP</strong><br>
Você decide aceitar approach do Carlos para evitar conflict:<br><br>
<strong>Consequences da compromise:</strong><br>
• Complex factory pattern implementado<br>
• 15 classes para simple validation logic<br>
• No tests written (Carlos's preference)<br>
• Over-engineered solution que nobody understands<br>
• Future maintenance nightmare created<br><br>
<strong>2 weeks later - Problems emerge:</strong><br>
• Bug discovered in production<br>
• Takes 6 hours para understand complex code<br>
• Fix requires changing 8 different classes<br>
• Team afraid para touch código<br><br>
<strong>6 months later:</strong><br>
• Code becomes technical debt<br>
• Team avoids working em that module<br>
• You regret not standing up for XP principles<br>
• Lesson learned: sometimes conflict is necessary para protect code quality`,
    explanation: `Failure em maintain XP values when faced com conflict:<br><br>
• <strong>Simplicity Sacrificed</strong> - YAGNI principle abandoned para avoid confrontation<br>
• <strong>Collective Code Ownership Lost</strong> - complex code que only one person understands<br>
• <strong>Sustainable Pace Threatened</strong> - technical debt creates future stress<br>
• <strong>Courage Missing</strong> - lack of courage para defend good practices<br><br>
XP values include "Courage" specifically porque sometimes developers must stand up for good practices. Accepting bad approaches para maintain harmony ultimately hurts team e codebase. Sometimes respectful conflict é necessary para protect long-term interests.`,
    references: [
      "Extreme Programming Explained - Kent Beck: Courage as fundamental XP value",
      "XP Values: Sometimes conflict é necessary para protect quality",
      "Simple Design principles: fighting complexity é ongoing responsibility"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "xp-dev-change-pair": {
    id: "xp-dev-change-pair",
    text: `<strong>Diplomatic Pair Change Request</strong><br>
Você approaches coach diplomatically about changing pairs:<br><br>
<strong>Sua conversation com coach:</strong><br>
"Coach, Carlos e eu temos different approaches para this problem. Maybe seria good para both of us pair com other people para get fresh perspectives?"<br><br>
<strong>Coach response:</strong><br>
"Interesting observation. Let's try rotation - Carlos com Ana, você com Maria, e depois assess."<br><br>
<strong>Resultado da rotation:</strong><br>
• Você e Maria implement clean TDD solution<br>
• Carlos e Ana create different approach<br>
• Team reviews both solutions<br>
• Best elements de cada approach são combined<br><br>
<strong>Outcome positivo:</strong><br>
• Conflict avoided através de diplomatic solution<br>
• Multiple approaches explored<br>
• Team learns from different perspectives<br>
• Final solution é better que either individual approach<br><br>
<strong>Carlos later thanks você for suggesting rotation.</strong>`,
    explanation: `Mature approach para conflict resolution through diplomatic means:<br><br>
• <strong>Conflict Avoidance</strong> - found way para resolve differences sem confrontation<br>
• <strong>Learning Opportunity</strong> - pair rotation allowed exploration de different approaches<br>
• <strong>Team Benefit</strong> - solution benefited from multiple perspectives<br>
• <strong>Relationship Preservation</strong> - maintained positive relationship com Carlos<br><br>
Esta approach demonstrates emotional intelligence e understanding que sometimes best solution é to change context rather than fight within existing context. Diplomatic problem-solving é valuable skill em team environments.`,
    references: [
      "Extreme Programming Explained - Kent Beck: pair rotation as standard practice",
      "Team dynamics: changing context can resolve personality conflicts",
      "XP practices: flexibility em pair assignments para optimize learning"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
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
• CFO: "Dashboard é crítico para board meeting"<br>
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
    text: `<strong>Story Splitting Masterclass - Colaboração Técnica</strong><br>
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
• Release cycle estabilizado em 2 semanas<br>
• Compliance nunca mais foi problema<br>
• Time confia nas estimativas e entregas<br>
• Você reconhecido como "Customer que entende o negócio E a técnica"<br><br>
<strong>Depoimento do time:</strong><br>
"Trabalhar com você é diferente - você entende nossas limitações técnicas e nos ajuda a entregar valor real incrementalmente."`,
    explanation: `Implementação exemplar do Planning Game conforme valores e práticas do XP:<br><br>
• <strong>Planning Game</strong> - colaboração ativa Customer-Developer para scope realista e entregável<br>
• <strong>Small Releases</strong> - iterações sustentáveis que entregam valor business real<br>
• <strong>Simple Design</strong> - foco nas funcionalidades que realmente agregam valor<br>
• <strong>Customer Collaboration</strong> - priorizando valor incremental vs features completas<br>
• <strong>Courage</strong> - coragem para quebrar épicas e entregar parcialmente<br><br>
O XP enfatiza que o Customer deve trabalhar intimamente com developers para fazer trade-offs inteligentes baseados em valor real. Story splitting permite entrega de valor mais cedo e feedback mais rápido, princípios fundamentais do XP. A abordagem colaborativa demonstra que Planning Game é sobre parceria, não imposição de requirements.`,
    references: [
      "Extreme Programming Explained - Kent Beck: Planning Game como prática colaborativa",
      "User Stories Applied - Mike Cohn: técnicas avançadas de story splitting",
      "XP Values: Courage, Simplicity e Feedback através de small releases"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "xp-customer-conservative": {
    id: "xp-customer-conservative",
    text: `<strong>Abordagem Conservadora - PIX + Notificações</strong><br>
Você escolhe combination safe de PIX (13 pontos) + Notificações (8 pontos) = 21 pontos, dentro da velocity histórica.<br><br>
<strong>Resultado da iteração:</strong><br>
• PIX implementado completamente<br>
• Sistema de notificações functioning<br>
• Time entrega no prazo sem stress<br>
• Quality maintained<br><br>
<strong>Problema emergente:</strong><br>
• Regulador ainda precisa dos relatórios<br>
• Compliance audit scheduled para próximo mês<br>
• Pressure continues para deliver remaining features<br><br>
<strong>Próxima iteração challenge:</strong><br>
Você ainda tem epic de 21 pontos (relatórios) que não fits em single iteration, e dashboard de 13 pontos também waiting.<br><br>
<strong>Learning:</strong><br>
Conservative approach worked mas didn't address fundamental problem de oversized stories. Splitting seria more strategic approach.`,
    tag: "conservative-planning",
    choices: [
      { text: "Apply story splitting para próxima iteração", next: "xp-customer-split-next" },
      { text: "Negotiate extended timeline com stakeholders", next: "xp-customer-timeline-negotiation" }
    ]
  },

  "xp-customer-split-next": {
    id: "xp-customer-split-next",
    text: `<strong>Story Splitting Applied na Próxima Iteração</strong><br>
Learning from conservative approach, você applies story splitting para remaining stories:<br><br>
<strong>Relatório splitting (era 21 pontos):</strong><br>
• Core compliance report (8 pontos)<br>
• Basic filtering (3 pontos)<br>
• Export functionality (5 pontos)<br>
• Advanced features (5 pontos - future iteration)<br><br>
<strong>Next iteration plan:</strong><br>
Core compliance (8) + Basic filtering (3) + Export (5) + Dashboard MVP (6) = 22 pontos<br><br>
<strong>Resultado after 4 iterations:</strong><br>
• All regulatory requirements met<br>
• Stakeholders happy com incremental delivery<br>
• Team maintains sustainable pace<br>
• You demonstrate learning e adaptation<br><br>
<strong>Recognition:</strong><br>
"Customer que learns from experience e adapts approach é invaluable para XP success."`,
    explanation: `Demonstration de continuous improvement e learning em XP Customer role:<br><br>
• <strong>Adaptation</strong> - learned from conservative approach e applied better technique<br>
• <strong>Planning Game Evolution</strong> - improved planning skills through practice<br>
• <strong>Value Delivery</strong> - maintained focus em business value enquanto improving process<br>
• <strong>Customer Growth</strong> - developed better collaboration skills com developers<br><br>
Esta journey shows que XP Customer role requires continuous learning. Initial conservative approach wasn't wrong, mas growth comes from applying better techniques when you learn them.`,
    references: [
      "Extreme Programming Explained - Kent Beck: Planning Game as learning process",
      "XP Customer evolution: getting better at collaboration over time",
      "Continuous improvement through reflection e adaptation"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "xp-customer-timeline-negotiation": {
    id: "xp-customer-timeline-negotiation",
    text: `<strong>Timeline Negotiation com Stakeholders</strong><br>
Você approaches stakeholders para negotiate realistic timeline based em technical constraints:<br><br>
<strong>Sua presentation para executives:</strong><br>
• Current velocity: 20 pontos per iteration<br>
• Remaining work: 34 + 21 + 13 = 68 pontos<br>
• Realistic timeline: 4 iterations (8 weeks)<br>
• Risk de rushing: quality compromise e technical debt<br><br>
<strong>Stakeholder reactions:</strong><br>
• CEO: "Can't we add more developers?"<br>
• CFO: "What about overtime?"<br>
• Compliance: "Regulatory deadline é non-negotiable"<br><br>
<strong>Your response:</strong><br>
"Let me work com team para see if we can optimize delivery sem compromising quality."<br><br>
<strong>Outcome:</strong><br>
You buy time para apply story splitting e other optimization techniques, ultimately delivering value more effectively que original plan.`,
    explanation: `Realistic stakeholder management combined com technical understanding:<br><br>
• <strong>Data-Driven Communication</strong> - used velocity data para support arguments<br>
• <strong>Risk Management</strong> - highlighted consequences de rushing<br>
• <strong>Problem-Solving Mindset</strong> - looked for alternatives rather que just saying "no"<br>
• <strong>Stakeholder Education</strong> - helped them understand technical constraints<br><br>
Good XP Customer must balance business pressure com technical reality. This approach demonstrates maturity em managing competing demands while looking for creative solutions.`,
    references: [
      "Extreme Programming Explained - Kent Beck: Customer as business advocate e technical reality broker",
      "Planning Game: balancing business needs com technical constraints",
      "XP Values: honesty em communication about constraints e possibilities"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "xp-customer-negotiate-fail": {
    id: "xp-customer-negotiate-fail",
    text: `<strong>Negociação de 3 Semanas - Breaking XP Rhythm</strong><br>
Você proposes 3-week iteration para fit more work:<br><br>
<strong>Problems que emerge:</strong><br>
• 3 weeks é too long para effective feedback cycle<br>
• Team loses focus em longer iteration<br>
• Integration problems accumulate<br>
• Stakeholders lose visibility into progress<br>
• Risk increases com longer commitment period<br><br>
<strong>Resultado after 3 weeks:</strong><br>
• Only 75% de stories actually completed<br>
• Integration bugs discovered late<br>
• Stakeholders frustrated com long wait<br>
• Team stressed from extended commitment<br><br>
<strong>Learning:</strong><br>
XP rhythm of short iterations exists for good reasons. Breaking rhythm para accommodate scope usually backfires.`,
    explanation: `Failure em understand fundamental XP principles about iteration length:<br><br>
• <strong>Feedback Loop Disruption</strong> - longer iterations reduce valuable feedback frequency<br>
• <strong>Risk Accumulation</strong> - longer commitments increase risk de not delivering<br>
• <strong>Focus Loss</strong> - teams perform better com shorter, focused commitments<br>
• <strong>Integration Issues</strong> - less frequent integration leads para more problems<br><br>
XP iteration length é carefully designed para optimize feedback, reduce risk, e maintain focus. Extending iterations para fit more scope usually creates more problems que it solves.`,
    references: [
      "Extreme Programming Explained - Kent Beck: optimal iteration length para feedback e risk management",
      "XP practices: short iterations as risk management technique",
      "Planning Game: working within constraints rather que changing constraints"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  "xp-customer-mvp": {
    id: "xp-customer-mvp",
    text: `<strong>PIX + MVP Report Strategy</strong><br>
Você proposes PIX completo (13 pontos) + minimal viable version de compliance report (8 pontos) = 21 pontos.<br><br>
<strong>MVP Report features:</strong><br>
• Basic transaction listing<br>
• Essential compliance fields<br>
• Simple CSV export<br>
• No fancy filtering ou dashboard<br><br>
<strong>Resultado:</strong><br>
• PIX functionality fully operational<br>
• Compliance report meets minimum regulatory requirements<br>
• Regulators approve basic functionality<br>
• Stakeholders understand incremental approach<br><br>
<strong>Follow-up iterations add:</strong><br>
• Enhanced filtering<br>
• Dashboard visualizations<br>
• Advanced reporting features<br>
• Automated reconciliation<br><br>
<strong>6 months later:</strong><br>
Full feature set delivered incrementally, cada release adding value, stakeholders educated about incremental delivery benefits.`,
    explanation: `Excellent application de MVP thinking dentro de XP context:<br><br>
• <strong>Incremental Value</strong> - delivered minimum valuable functionality first<br>
• <strong>Risk Mitigation</strong> - met regulatory requirements early<br>
• <strong>Stakeholder Education</strong> - demonstrated value de incremental delivery<br>
• <strong>Sustainable Pace</strong> - maintained reasonable scope per iteration<br><br>
Esta approach exemplifies XP value de "Simplicity" - doing simplest thing que could possibly work, then building em that foundation. MVP thinking aligns perfectly com XP principles de small releases e continuous value delivery.`,
    references: [
      "Extreme Programming Explained - Kent Beck: Simplicity e incremental delivery",
      "XP Values: doing simplest thing que works, then evolving",
      "Small Releases: delivering value incrementally rather que big bang"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  }
};
