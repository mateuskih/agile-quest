import { StoryGraph } from "../types/game";

export const xp: StoryGraph = {
  "xp-role": {
    id: "xp-role",
    text: [
      "Você escolheu **XP**! Qual papel deseja assumir?",
      "O board exibe práticas de programação extrema."
    ].join("\n"),
    choices: [
      { text: "Coach", next: "xp-coach-1" },
      { text: "Desenvolvedor", next: "xp-dev-1" }
    ]
  },

  // --- XP Coach ---
  "xp-coach-1": {
    id: "xp-coach-1",
    text: [
      "Time evita pair programming; prefere atalhos individuais.",
      "Como restaurar colaboração?"
    ].join("\n"),
    choices: [
      { text: "Workshop de pair programming", next: "xp-coach-workshop" },
      { text: "Deixar time resolver sozinho", next: "xp-fail-light" },
      { text: "Mob programming temporário", next: "xp-coach-mob" },
      { text: "Apresentar case externo", next: "xp-coach-case" }
    ]
  },
  "xp-coach-workshop": {
    id: "xp-coach-workshop",
    text: [
      "Workshop mostra ganhos, mas há resistência a novos hábitos."
    ].join("\n"),
    choices: [
      { text: "Incentivar sessões diárias", next: "xp-success-partial" },
      { text: "Cancelar por baixa adesão", next: "xp-fail-light" }
    ]
  },
  "xp-coach-mob": {
    id: "xp-coach-mob",
    text: [
      "Mob programming soluciona problemas, mas gera desconforto."
    ].join("\n"),
    choices: [
      { text: "Combinar mob e pair", next: "xp-success-total" },
      { text: "Cancelar mob", next: "xp-fail-light" }
    ]
  },
  "xp-coach-case": {
    id: "xp-coach-case",
    text: [
      "Case externo motiva, mas falta contexto local."
    ].join("\n"),
    choices: [
      { text: "Adaptar p/ contexto local", next: "xp-success-total" },
      { text: "Aplicar sem ajustes", next: "xp-fail-critical" }
    ]
  },

  // --- XP Dev ---
  "xp-dev-1": {
    id: "xp-dev-1",
    text: [
      "Você implementa TDD, linters e refatorações contínuas.",
      "Time reclama de lentidão inicial."
    ].join("\n"),
    choices: [
      { text: "Persistir com TDD", next: "xp-dev-tdd" },
      { text: "Adicionar linters apenas", next: "xp-dev-lint" },
      { text: "Focar só em funcionalidade", next: "xp-fail-light" },
      { text: "Consultar coach", next: "xp-dev-consult" }
    ]
  },
  "xp-dev-tdd": {
    id: "xp-dev-tdd",
    text: [
      "TDD garante qualidade, mas diminui velocidade no começo."
    ].join("\n"),
    choices: [
      { text: "Continuar com TDD", next: "xp-success-total" },
      { text: "Abandonar TDD", next: "xp-fail-light" }
    ]
  },
  "xp-dev-lint": {
    id: "xp-dev-lint",
    text: ["Linters melhoram estilo, mas não evitam bugs lógicos."].join(
      "\n"
    ),
    choices: [
      { text: "Combinar lint com code review", next: "xp-success-partial" },
      { text: "Só lint sem revisão", next: "xp-fail-light" }
    ]
  },
  "xp-dev-consult": {
    id: "xp-dev-consult",
    text: [
      "Coach sugere spike técnico; consome tempo da sprint."
    ].join("\n"),
    choices: [
      { text: "Fazer spike e documentar", next: "xp-success-partial" },
      { text: "Recusar e focar em entrega", next: "xp-fail-light" }
    ]
  },

  // --- Desfechos XP ---
  "xp-success-partial": {
    id: "xp-success-partial",
    text: ["Sucesso parcial: práticas XP incorporadas, mas há refinamentos."].join(
      "\n"
    ),
    choices: [{ text: "Jogar novamente", next: "start" }]
  },
  "xp-success-total": {
    id: "xp-success-total",
    text: ["Sucesso total: XP aplicado com excelência!"].join("\n"),
    choices: [{ text: "Jogar novamente", next: "start" }]
  },
  "xp-fail-light": {
    id: "xp-fail-light",
    text: ["Falha leve: práticas não engajaram totalmente."].join("\n"),
    choices: [{ text: "Tentar novamente", next: "xp-role" }]
  },
  "xp-fail-critical": {
    id: "xp-fail-critical",
    text: ["Falha crítica: adoção equivocada gerou mais problemas."].join("\n"),
    choices: [{ text: "Tentar novamente", next: "xp-role" }]
  }
};
