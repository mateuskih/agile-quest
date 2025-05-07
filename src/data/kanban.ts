import { StoryGraph } from "../types/game";

export const kanban: StoryGraph = {
  "kanban-role": {
    id: "kanban-role",
    text: [
      "Você escolheu **Kanban**! Qual papel deseja assumir?",
      "O quadro exibe tarefas em colunas coloridas."
    ].join("\n"),
    choices: [
      { text: "Líder de Equipe", next: "kanban-lead-1" },
      { text: "Membro do Time", next: "kanban-member-1" }
    ]
  },

  // --- Líder de Equipe ---
  "kanban-lead-1": {
    id: "kanban-lead-1",
    text: [
      "O fluxo travou com WIP alto (8 tarefas).",
      "Stakeholders cobram entregas urgentes."
    ].join("\n"),
    choices: [
      { text: "Limitar WIP a 5 e remover impedimentos", next: "kanban-lead-unblock" },
      { text: "Ignorar e manter fluxo", next: "kanban-fail-light" },
      { text: "Aumentar equipe", next: "kanban-lead-overstaff" },
      { text: "Automatizar workflow", next: "kanban-lead-automation" }
    ]
  },
  "kanban-lead-unblock": {
    id: "kanban-lead-unblock",
    text: [
      "Você agiliza reuniões p/ remover bloqueios; tempo aumenta p/ adaptação."
    ].join("\n"),
    choices: [
      { text: "Celebrar vitórias diárias", next: "kanban-success-total" },
      { text: "Cobrar prazos rígidos", next: "kanban-fail-light" },
      { text: "Promover troca de skills", next: "kanban-success-partial" }
    ]
  },
  "kanban-lead-overstaff": {
    id: "kanban-lead-overstaff",
    text: ["Aumento de equipe gera overhead de comunicação."].join("\n"),
    choices: [
      { text: "Reverter equipe", next: "kanban-success-partial" },
      { text: "Manter equipe e documentar", next: "kanban-fail-light" }
    ]
  },
  "kanban-lead-automation": {
    id: "kanban-lead-automation",
    text: ["Automação reduz esforço manual mas requer manutenção."].join("\n"),
    choices: [
      { text: "Manter automação", next: "kanban-success-total" },
      { text: "Desabilitar", next: "kanban-fail-light" }
    ]
  },

  // --- Membro do Time ---
  "kanban-member-1": {
    id: "kanban-member-1",
    text: [
      "Você vê gargalo no QA; testers sobrecarregados com regressões."
    ].join("\n"),
    choices: [
      { text: "Propor rotação entre dev/testers", next: "kanban-member-rotation" },
      { text: "Sugerir automação de regressão", next: "kanban-member-automation" },
      { text: "Focar na tarefa atual", next: "kanban-fail-light" },
      { text: "Coletar métricas p/ liderança", next: "kanban-member-metrics" }
    ]
  },
  "kanban-member-rotation": {
    id: "kanban-member-rotation",
    text: ["Rotação equilibra carga; alguns resistem."].join("\n"),
    choices: [
      { text: "Treinamento cruzado", next: "kanban-success-total" },
      { text: "Retornar ao fluxo antigo", next: "kanban-fail-light" }
    ]
  },
  "kanban-member-automation": {
    id: "kanban-member-automation",
    text: ["Automação de testes falha em cenários complexos."].join("\n"),
    choices: [
      { text: "Ajustar scripts", next: "kanban-success-partial" },
      { text: "Descontinuar automação", next: "kanban-fail-light" }
    ]
  },
  "kanban-member-metrics": {
    id: "kanban-member-metrics",
    text: ["Liderança aprova políticas Pull e libera fluxo."].join("\n"),
    choices: [{ text: "Implementar e monitorar", next: "kanban-success-total" }]
  },

  "kanban-success-partial": {
    id: "kanban-success-partial",
    text: ["Sucesso parcial: fluxo melhorou, mas há ajustes."].join("\n"),
    choices: [{ text: "Jogar novamente", next: "start" }]
  },
  "kanban-success-total": {
    id: "kanban-success-total",
    text: ["Fluxo otimizado; entregas constantes; time motivado."].join("\n"),
    choices: [{ text: "Jogar novamente", next: "start" }]
  },
  "kanban-fail-light": {
    id: "kanban-fail-light",
    text: ["Tentativa falhou levemente; há espaço p/ melhorar."].join("\n"),
    choices: [{ text: "Tentar novamente", next: "kanban-role" }]
  }
};
