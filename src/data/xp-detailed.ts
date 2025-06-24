
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
  }
};
