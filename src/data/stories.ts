
import { StoryGraph } from "../types/game";
import { start } from "./start";
import { scrumDetailed } from "./scrum-detailed";
import { scrumAdvanced } from "./scrum-advanced";
import { kanbanDetailed } from "./kanban-detailed";
import { xpDetailed } from "./xp-detailed";

export const storyData: StoryGraph = {
  ...start,
  ...scrumDetailed,
  ...scrumAdvanced,
  ...kanbanDetailed,
  ...xpDetailed
};
