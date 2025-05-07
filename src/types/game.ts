
export interface Choice {
  text: string;
  next: string;
}

export interface StoryNode {
  id: string;
  text: string;
  choices: Choice[];
}

export interface StoryGraph {
  [key: string]: StoryNode;
}

export type GameState = {
  currentNodeId: string;
  history: string[];
  isSuccess: boolean | null;
  isFailure: boolean | null;
};
