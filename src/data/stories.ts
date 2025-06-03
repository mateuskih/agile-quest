
import { StoryGraph } from "../types/game";
import { start } from "./start";
import { scrumDetailed } from "./scrum-detailed";
import { scrumAdvanced } from "./scrum-advanced";
import { kanbanDetailed } from "./kanban-detailed";
import { kanban } from "./kanban-basic";
import { xpDetailed } from "./xp-detailed";
import { xp } from "./xp-basic";

export const storyData: StoryGraph = {
  ...start,
  ...scrumDetailed,
  ...scrumAdvanced,
  ...kanbanDetailed,
  ...kanban,
  ...xpDetailed,
  ...xp
};
