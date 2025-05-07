import { StoryGraph } from "../types/game";

export const start: StoryGraph = {
  "start": {
    id: "start",
    text: "Bem‑vindo ao Agile Quest! Escolha a metodologia ágil para seu projeto:",
    choices: [
      { text: "Scrum", next: "scrum-role" },
      { text: "Kanban", next: "kanban-role" },
      { text: "XP (Extreme Programming)", next: "xp-role" }
    ]
  }
};
