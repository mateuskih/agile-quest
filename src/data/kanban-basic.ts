
import { StoryGraph } from "../types/game";

// Arquivo mantido para compatibilidade - cenários básicos
export const kanban: StoryGraph = {
  "kanban-success-partial": {
    id: "kanban-success-partial",
    text: ["Sucesso parcial: fluxo melhorou, mas há ajustes pendentes."].join("\n"),
    choices: [{ text: "Jogar novamente", next: "start" }]
  },
  "kanban-success-total": {
    id: "kanban-success-total",
    text: ["Fluxo otimizado; entregas constantes; time motivado."].join("\n"),
    choices: [{ text: "Jogar novamente", next: "start" }]
  },
  "kanban-fail-light": {
    id: "kanban-fail-light",
    text: ["Tentativa falhou levemente; há espaço para melhorar."].join("\n"),
    choices: [{ text: "Tentar novamente", next: "kanban-role" }]
  }
};
