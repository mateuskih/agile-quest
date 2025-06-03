
import { StoryGraph } from "../types/game";

export const xpDetailed: StoryGraph = {
  "xp-role": {
    id: "xp-role",
    text: `<strong>Projeto Real: API de Processamento de Pagamentos</strong><br>
Time de 6 desenvolvedores aplicando XP em sistema financeiro crítico.<br>
Sprint atual: refatorar sistema legado com zero downtime.<br>
Qual papel você assume neste desafio?`,
    choices: [
      { text: "XP Coach", next: "xp-coach-specific-1" },
      { text: "Desenvolvedor", next: "xp-dev-specific-1" },
      { text: "Customer/Product Owner", next: "xp-customer-specific-1" }
    ]
  },

  // === XP COACH - CENÁRIO ESPECÍFICO ===
  "xp-coach-specific-1": {
    id: "xp-coach-specific-1",
    text: `<strong>Resistência ao TDD - Code Review Session</strong><br><br>
<strong>Situação crítica:</strong><br>
• Dev sênior João: 'TDD é muito lento para sistema legado'<br>
• Dev junior Ana: 'Não sei escrever testes para código existente'<br>
• Manager: 'Prazos apertados, foquem na funcionalidade'<br>
• Cobertura atual: 23% (meta: 80%)<br>
• Bugs em produção: 15 na última semana<br><br>
<strong>Como XP Coach, sua estratégia:</strong>`,
    tag: "tdd-adoption",
    choices: [
      { text: "Golden Master testing para código legado", next: "xp-coach-golden-master" },
      { text: "Pair programming TDD com dev sênior", next: "xp-coach-pair-senior" },
      { text: "Test-after como transição para TDD", next: "xp-coach-test-after-fail" },
      { text: "Demonstrar ROI do TDD com métricas", next: "xp-coach-roi-demo" }
    ]
  },

  "xp-coach-golden-master": {
    id: "xp-coach-golden-master",
    text: `<strong>Golden Master Strategy</strong><br>
Você implementou Approval Tests para capturar comportamento do sistema legado.<br><br>
<strong>Semana 1:</strong><br>
• 200 cenários de Golden Master criados<br>
• Refatoração segura de 3 classes críticas<br>
• 1 bug interceptado que passaria despercebido<br><br>
<strong>Dev João:</strong> 'Isso realmente funciona! Consigo refatorar com confiança.'<br>
<strong>Próximo passo:</strong>`,
    tag: "technical-excellence",
    choices: [
      { text: "Evoluir Golden Masters para testes unitários TDD", next: "xp-coach-evolution-success" },
      { text: "Manter apenas Golden Masters", next: "xp-coach-golden-partial" },
      { text: "Treinar time em Test-Driven Refactoring", next: "xp-coach-tdr-success" }
    ]
  },

  "xp-coach-evolution-success": {
    id: "xp-coach-evolution-success",
    text: `<strong>Evolução Natural para TDD</strong><br>
Golden Masters criaram confiança para refatoração segura.<br>
Time evoluiu naturalmente para Test-Driven Development.<br><br>
<strong>Resultado Month 2:</strong><br>
• Cobertura: 78%<br>
• Bugs em produção: 3 (redução de 80%)<br>
• Velocity aumentou 40% após período de adaptação<br>
• Time solicita TDD em novos projetos`,
    explanation: `Estratégia exemplar de adoção de XP em código legado:<br>
• <strong>Characterization Tests (Golden Master)</strong> - técnica do Michael Feathers<br>
• <strong>Test-Driven Refactoring</strong> - uma das 12 práticas principais do XP<br>
• <strong>Evolutionary Design</strong> - mudança incremental e segura<br>
• <strong>Code Coverage</strong> como métrica de qualidade<br><br>
Working Effectively with Legacy Code ensina que Golden Master é o primeiro passo para tornar código legado testável. A evolução natural para TDD demonstra adoção sustentável das práticas.`,
    references: [
      "Working Effectively with Legacy Code - Michael Feathers: Characterization Tests",
      "Extreme Programming Explained - Kent Beck: Test-Driven Development",
      "Refactoring - Martin Fowler: Refatoração segura com testes"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  // === DESENVOLVEDOR XP - CENÁRIO ESPECÍFICO ===
  "xp-dev-specific-1": {
    id: "xp-dev-specific-1",
    text: `<strong>Pair Programming Conflict - Daily Standup</strong><br><br>
<strong>Situação:</strong> Você está implementando validação de cartão de crédito.<br><br>
<strong>Contexto específico:</strong><br>
• Pareando com dev sênior Carlos há 3 dias<br>
• Carlos: 'Sua solução é muito simples, vou fazer algo robusto'<br>
• Você: 'YAGNI - só precisamos validar Luhn algorithm agora'<br>
• Carlos implementa factory pattern complexo<br>
• Você sugere TDD red-green-refactor<br>
• Carlos: 'Já sei como fazer, não preciso de teste primeiro'<br><br>
<strong>Sua estratégia como desenvolvedor XP:</strong>`,
    tag: "pair-programming-conflict",
    choices: [
      { text: "Navigator/Driver - você guia TDD como navigator", next: "xp-dev-navigator" },
      { text: "Propor ping-pong pairing com TDD", next: "xp-dev-pingpong" },
      { text: "Aceitar abordagem do Carlos para manter harmonia", next: "xp-dev-accept-fail" },
      { text: "Solicitar mudança de par ao coach", next: "xp-dev-change-pair" }
    ]
  },

  "xp-dev-navigator": {
    id: "xp-dev-navigator",
    text: `<strong>Navigator Strategy em Ação</strong><br>
Você assume papel de Navigator ativo, guiando TDD:<br><br>
<strong>Sessão de pairing:</strong><br>
• 'Vamos escrever teste que falha para CPF inválido'<br>
• Carlos (Driver): implementa teste<br>
• 'Agora mínimo código para passar'<br>
• Vocês descobrem edge case: CPF com caracteres especiais<br><br>
<strong>Carlos:</strong> 'Entendi... TDD realmente captura casos que eu perderia!'`,
    explanation: `Excelente aplicação dos papéis de Pair Programming:<br>
• <strong>Navigator/Driver roles</strong> - uma das práticas fundamentais do XP<br>
• <strong>Red-Green-Refactor cycle</strong> - disciplina de TDD mantida<br>
• <strong>Collective Code Ownership</strong> - ambos contribuem igualmente<br>
• <strong>Simple Design</strong> - YAGNI aplicado com TDD<br><br>
Esta abordagem demonstra como pair programming efetivo pode resolver conflitos técnicos através de colaboração ativa, não hierarquia. O Navigator guia sem impor, permitindo aprendizado mútuo.`,
    references: [
      "Extreme Programming Explained - Kent Beck: Navigator/Driver roles",
      "Pair Programming Illuminated - Williams & Kessler: effective pairing techniques",
      "Clean Code - Robert Martin: TDD como design tool"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  // === CUSTOMER/PRODUCT OWNER XP ===
  "xp-customer-specific-1": {
    id: "xp-customer-specific-1",
    text: `<strong>User Stories Definition - Planning Game</strong><br><br>
<strong>Situação:</strong> Definindo próxima iteração de 2 semanas.<br><br>
<strong>Histórias propostas:</strong><br>
• 'Pagamento via PIX' - 8 pontos<br>
• 'Relatório de transações' - 13 pontos<br>
• 'Notificações por email' - 5 pontos<br>
• 'Auditoria de segurança' - 21 pontos<br><br>
<strong>Velocity do time:</strong> 18 pontos/iteração<br>
<strong>Pressão do negócio:</strong> CEO quer PIX + relatórios urgente<br><br>
<strong>Como Customer, sua priorização:</strong>`,
    tag: "planning-game",
    choices: [
      { text: "Split 'Relatório' em histórias menores", next: "xp-customer-split" },
      { text: "PIX + Notificações (total 13 pontos)", next: "xp-customer-conservative" },
      { text: "Negociar iteração de 3 semanas", next: "xp-customer-negotiate-fail" },
      { text: "PIX + parte do relatório (MVP)", next: "xp-customer-mvp" }
    ]
  },

  "xp-customer-split": {
    id: "xp-customer-split",
    text: `<strong>Story Splitting Success</strong><br>
Você trabalhou com o time para quebrar 'Relatório de transações':<br><br>
<strong>Histórias resultantes:</strong><br>
• 'Visualizar últimas 10 transações' - 5 pontos<br>
• 'Filtros por data' - 3 pontos<br>
• 'Export para CSV' - 5 pontos<br><br>
<strong>Iteração escolhida:</strong> PIX (8) + Visualizar transações (5) + Filtros (3) = 16 pontos<br>
Time entrega com qualidade e funcionalidade essencial do relatório.`,
    explanation: `Excelente aplicação do Planning Game do XP:<br>
• <strong>Story Splitting</strong> - técnica fundamental para entregar valor incremental<br>
• <strong>Planning Game</strong> - colaboração Customer-Developer para scope realista<br>
• <strong>Small Releases</strong> - iterações sustentáveis dentro da velocity<br>
• <strong>Customer Collaboration</strong> - priorizando valor real vs features completas<br><br>
O XP enfatiza que o Customer deve trabalhar ativamente com developers para fazer trade-offs inteligentes. Quebrar histórias grandes permite entrega de valor mais cedo e feedback mais rápido.`,
    references: [
      "Extreme Programming Explained - Kent Beck: Planning Game practices",
      "User Stories Applied - Mike Cohn: Story splitting techniques",
      "XP Values: Simplicity and Feedback through small releases"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  }
};
