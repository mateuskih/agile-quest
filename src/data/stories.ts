import { StoryGraph } from "../types/game";
import { start } from "./start";
import { scrum } from "./scrum";
import { kanban } from "./kanban";
import { xp } from "./xp";

export const storyData: StoryGraph = {
  ...start,
  ...scrum,
  ...kanban,
  ...xp
};
