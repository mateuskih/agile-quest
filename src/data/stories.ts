
import { StoryGraph } from "../types/game";
import { start } from "./start";
import { scrumDetailed } from "./scrum-detailed";
import { kanban } from "./kanban";
import { xp } from "./xp";

export const storyData: StoryGraph = {
  ...start,
  ...scrumDetailed,
  ...kanban,
  ...xp
};
