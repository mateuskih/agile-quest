
import { StoryGraph } from "../types/game";

export const scrum: StoryGraph = {
  "scrum-role": {
    id: "scrum-role",
    text: [
      "Você escolheu **Scrum**! Qual papel deseja assumir?",
      "No grande salão virtual do projeto, quadros de tarefas e gráficos de burndown aguardam sua decisão."
    ].join("\n"),
    choices: [
      { text: "Product Owner", next: "scrum-po-1" },
      { text: "Scrum Master", next: "scrum-sm-1" },
      { text: "Developer", next: "scrum-dev-1" },
      { 
        text: "🔥 Agile Coach (Modo Especialista)", 
        next: "scrum-coach-1", 
        requiredPositiveFeedback: 3,
        requiredTag: "leadership"
      }
    ]
  },

  // --- Product Owner ---
  "scrum-po-1": {
    id: "scrum-po-1",
    text: [
      "Como Product Owner, você encara um backlog conflituoso:",
      "• Cliente exige relatórios avançados;",
      "• Time alerta sobre dívida técnica;",
      "• Há um bug crítico em produção.",
      "Qual estratégia de priorização?"
    ].join("\n"),
    tag: "prioritization",
    choices: [
      { text: "Negociar prazo maior p/ relatório e priorizar bug", next: "scrum-po-bug-path" },
      { text: "Reunir time p/ estimativas criteriosas", next: "scrum-po-estimate-path" },
      { text: "Focar só em valor de negócio, adiar correções", next: "scrum-po-fail-light" },
      { text: "Aplicar matriz impacto/esforço", next: "scrum-po-balanced-path" }
    ]
  },
  "scrum-po-bug-path": {
    id: "scrum-po-bug-path",
    text: [
      "O time corrige o bug mas encontra efeito colateral em outro módulo.",
      "Como você reage?"
    ].join("\n"),
    tag: "crisis-management",
    choices: [
      { text: "Alocar dois devs p/ investigação paralela", next: "scrum-po-bug-success" },
      { text: "Suspender correção adjacente", next: "scrum-po-fail-critical" },
      { text: "Registrar incidente p/ próxima sprint", next: "scrum-po-fail-light" },
      { text: "Lançar release emergencial", next: "scrum-po-bug-emergency" }
    ]
  },
  "scrum-po-bug-success": {
    id: "scrum-po-bug-success",
    text: [
      "Bug e efeito colateral resolvidos sem impactos maiores.",
      "Cliente elogia a transparência e confiança do time aumenta."
    ].join("\n"),
    tag: "leadership",
    choices: [{ text: "Planejar próxima sprint", next: "scrum-success-total" }]
  },
  "scrum-po-bug-emergency": {
    id: "scrum-po-bug-emergency",
    text: [
      "Release emergencial aprovado, mas surgem novos bugs pela pressa.",
      "Time faz plantão para mitigar riscos."
    ].join("\n"),
    choices: [
      { text: "Revisão pós-release", next: "scrum-success-partial" },
      { text: "Liberar sem testes", next: "scrum-po-fail-critical" }
    ]
  },
  "scrum-po-estimate-path": {
    id: "scrum-po-estimate-path",
    text: [
      "Estimativas variam de 2 a 8 pontos; cliente pressiona por rapidez.",
      "Como você decide?"
    ].join("\n"),
    choices: [
      { text: "Definir MVP e reestimar", next: "scrum-po-estimate-success" },
      { text: "Aceitar estimativa mais baixa", next: "scrum-po-fail-critical" },
      { text: "Trazer especialista externo", next: "scrum-po-estimate-expert" },
      { text: "Dividir em sub-histórias", next: "scrum-po-refine-path" }
    ]
  },
  "scrum-po-estimate-success": {
    id: "scrum-po-estimate-success",
    text: ["MVP reduzido aprovado; estimativa em 3 pontos."].join("\n"),
    choices: [{ text: "Avançar p/ sprint", next: "scrum-success-partial" }]
  },
  "scrum-po-refine-path": {
    id: "scrum-po-refine-path",
    text: [
      "História dividida em três sub-histórias claras.",
      "Time identifica dependências e ajusta estimativas."
    ].join("\n"),
    tag: "planning",
    choices: [
      { text: "Registrar e iniciar sprint", next: "scrum-success-total" },
      { text: "Rever escopo c/ cliente", next: "scrum-po-estimate-success" }
    ]
  },
  "scrum-po-estimate-expert": {
    id: "scrum-po-estimate-expert",
    text: ["Especialista sugere buffer de 20%; cliente convencido."].join("\n"),
    choices: [
      { text: "Formalizar e iniciar sprint", next: "scrum-success-total" },
      { text: "Negociar novo escopo", next: "scrum-po-estimate-success" }
    ]
  },
  "scrum-po-balanced-path": {
    id: "scrum-po-balanced-path",
    text: [
      "Matriz impacto/esforço aplicada; prioridades claras.",
      "Stakeholders aprovam transparência."
    ].join("\n"),
    tag: "strategic-thinking",
    choices: [
      { text: "Entregas semanais incrementais", next: "scrum-po-balanced-success" },
      { text: "Ignorar pressão externa", next: "scrum-po-fail-light" },
      { text: "Reavaliar matriz", next: "scrum-po-estimate-path" }
    ]
  },
  "scrum-po-balanced-success": {
    id: "scrum-po-balanced-success",
    text: ["Cliente confiante; time sustentável; dívida técnica reduzida."].join("\n"),
    tag: "leadership",
    choices: [{ text: "Sprint concluído com retrospectiva", next: "scrum-success-total" }]
  },
  "scrum-po-fail-light": {
    id: "scrum-po-fail-light",
    text: ["Backlog inchado; pendências na demo; recuperável na próxima sprint."].join(
      "\n"
    ),
    choices: [{ text: "Tentar novamente", next: "scrum-role" }]
  },
  "scrum-po-fail-critical": {
    id: "scrum-po-fail-critical",
    text: ["2h de downtime; cliente ameaça cancelar contrato."].join("\n"),
    choices: [{ text: "Tentar novamente", next: "scrum-role" }]
  },

  // --- Scrum Master ---
  "scrum-sm-1": {
    id: "scrum-sm-1",
    text: [
      "Como Scrum Master, você presencia conflito intenso entre devs.",
      "Sprint atrasado e tensão crescente."
    ].join("\n"),
    tag: "conflict-resolution",
    choices: [
      { text: "Facilitar reunião de conflitos", next: "scrum-sm-mediation" },
      { text: "Ignorar conflito", next: "scrum-sm-fail-light" },
      { text: "Impor solução sozinho", next: "scrum-sm-fail-critical" },
      { text: "Escalar ao PO", next: "scrum-sm-escalate" }
    ]
  },
  "scrum-sm-mediation": {
    id: "scrum-sm-mediation",
    text: [
      "Você aplica escuta ativa, mapeia causas e documenta acordos.",
      "Um dev resiste à mediação."
    ].join("\n"),
    tag: "leadership",
    choices: [
      { text: "Validar acordos e seguir", next: "scrum-sm-mediation-success" },
      { text: "Interromper mediação", next: "scrum-sm-fail-light" },
      { text: "Chamar coach externo", next: "scrum-sm-expert" }
    ]
  },
  "scrum-sm-mediation-success": {
    id: "scrum-sm-mediation-success",
    text: ["Time adota solução híbrida; clima melhora e fluxo restaura."].join("\n"),
    tag: "leadership",
    choices: [{ text: "Conduzir retrospectiva", next: "scrum-success-total" }]
  },
  "scrum-sm-expert": {
    id: "scrum-sm-expert",
    text: ["Coach externo resolve impasse com práticas avançadas."].join("\n"),
    choices: [{ text: "Registrar lições aprendidas", next: "scrum-success-partial" }]
  },
  "scrum-sm-escalate": {
    id: "scrum-sm-escalate",
    text: ["Escalar ao PO gera desconfiança e intervenção do cliente."].join("\n"),
    choices: [
      { text: "Implementar decisão do cliente", next: "scrum-sm-fail-critical" },
      { text: "Voltar à mediação", next: "scrum-sm-mediation" }
    ]
  },
  "scrum-sm-fail-light": {
    id: "scrum-sm-fail-light",
    text: ["Conflito persiste silencioso; produtividade cai levemente."].join("\n"),
    choices: [{ text: "Tentar novamente", next: "scrum-role" }]
  },
  "scrum-sm-fail-critical": {
    id: "scrum-sm-fail-critical",
    text: ["Time dividido; atrasos dobram; reputação abalada."].join("\n"),
    choices: [{ text: "Tentar novamente", next: "scrum-role" }]
  },

  // --- Scrum Developer ---
  "scrum-dev-1": {
    id: "scrum-dev-1",
    text: [
      "Como Developer, você enfrenta builds quebrados e deploys manuais.",
      "Como melhorar a entrega?"
    ].join("\n"),
    tag: "technical-excellence",
    choices: [
      { text: "Configurar pipeline CI/CD", next: "scrum-dev-ci-path" },
      { text: "Automatizar testes unitários", next: "scrum-dev-test-path" },
      { text: "Adiar CI/CD", next: "scrum-dev-fail-light" },
      { text: "Consultar Scrum Master", next: "scrum-dev-sm-consult" }
    ]
  },
  "scrum-dev-ci-path": {
    id: "scrum-dev-ci-path",
    text: [
      "Você monta pipeline completo, mas runs falham por config de ambiente.",
      "Decida o próximo passo."
    ].join("\n"),
    choices: [
      { text: "Corrigir configurações", next: "scrum-dev-ci-success" },
      { text: "Desabilitar etapas", next: "scrum-dev-fail-critical" },
      { text: "Registrar e pedir ajuda", next: "scrum-dev-sm-consult" }
    ]
  },
  "scrum-dev-ci-success": {
    id: "scrum-dev-ci-success",
    text: [
      "Pipeline verde! Deploys fluem sem intervenção manual.",
      "Time ganha confiança."
    ].join("\n"),
    tag: "technical-excellence",
    choices: [{ text: "Compartilhar e treinar time", next: "scrum-success-total" }]
  },
  "scrum-dev-test-path": {
    id: "scrum-dev-test-path",
    text: [
      "Automatizar testes unitários aumenta cobertura, mas deploy falha.",
      "Qual ação?"
    ].join("\n"),
    choices: [
      { text: "Manter deploy manual temporário", next: "scrum-success-partial" },
      { text: "Implementar deploy automático", next: "scrum-dev-ci-path" }
    ]
  },
  "scrum-dev-sm-consult": {
    id: "scrum-dev-sm-consult",
    text: [
      "Scrum Master sugere envolver Ops; aumenta escopo.",
      "Você aceita?"
    ].join("\n"),
    choices: [
      { text: "Sim, envolver Ops", next: "scrum-success-partial" },
      { text: "Não, manter escopo", next: "scrum-dev-fail-light" }
    ]
  },
  "scrum-dev-fail-light": {
    id: "scrum-dev-fail-light",
    text: ["CI/CD adiado; builds instáveis atrasam entregas."].join("\n"),
    choices: [{ text: "Tentar novamente", next: "scrum-role" }]
  },
  "scrum-dev-fail-critical": {
    id: "scrum-dev-fail-critical",
    text: ["Código quebrado em produção e rollback necessário."].join("\n"),
    choices: [{ text: "Tentar novamente", next: "scrum-role" }]
  },

  // --- Agile Coach (Desbloqueado por feedbacks) ---
  "scrum-coach-1": {
    id: "scrum-coach-1",
    text: [
      "🔥 Como Agile Coach, você tem acesso a práticas avançadas!",
      "A organização quer implementar Scrum em escala. Qual sua estratégia?"
    ].join("\n"),
    tag: "coaching",
    choices: [
      { text: "Implementar SAFe framework", next: "scrum-coach-safe" },
      { text: "Começar com Scrum of Scrums", next: "scrum-coach-scrums" },
      { 
        text: "🎯 Customizar framework próprio", 
        next: "scrum-coach-custom",
        requiredPositiveFeedback: 2,
        requiredTag: "strategic-thinking"
      }
    ]
  },
  "scrum-coach-safe": {
    id: "scrum-coach-safe",
    text: ["SAFe implementado mas equipes resistem à burocracia."].join("\n"),
    choices: [
      { text: "Simplificar processos", next: "scrum-success-total" },
      { text: "Manter SAFe integral", next: "scrum-success-partial" }
    ]
  },
  "scrum-coach-scrums": {
    id: "scrum-coach-scrums",
    text: ["Scrum of Scrums funciona bem; times colaboram efetivamente."].join("\n"),
    tag: "leadership",
    choices: [{ text: "Expandir para mais times", next: "scrum-success-total" }]
  },
  "scrum-coach-custom": {
    id: "scrum-coach-custom",
    text: ["Framework customizado perfeito para a organização!"].join("\n"),
    tag: "innovation",
    choices: [{ text: "Documentar e evangelizar", next: "scrum-success-total" }]
  },

  "scrum-success-partial": {
    id: "scrum-success-partial",
    text: ["Sucesso parcial: melhorias aplicadas, mas há refinamentos."].join("\n"),
    choices: [{ text: "Jogar novamente", next: "start" }]
  },
  "scrum-success-total": {
    id: "scrum-success-total",
    text: ["Sucesso total: projeto Scrum concluído com excelência!"].join("\n"),
    choices: [{ text: "Jogar novamente", next: "start" }]
  }
};
