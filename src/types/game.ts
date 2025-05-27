
export interface Choice {
  text: string;
  next: string;
  requiredPositiveFeedback?: number; // Quantidade mínima de feedback positivo necessário
  requiredTag?: string; // Tag específica necessária para desbloquear
}

export interface StoryNode {
  id: string;
  text: string;
  choices: Choice[];
  tag?: string; // Tag para categorizar o tipo de decisão
}

export interface StoryGraph {
  [key: string]: StoryNode;
}

export interface Feedback {
  nodeId: string;
  rating: 'positive' | 'negative';
  comment?: string;
  timestamp: number;
  tag?: string;
}

export type GameState = {
  currentNodeId: string;
  history: string[];
  isSuccess: boolean | null;
  isFailure: boolean | null;
  feedbacks: Feedback[];
  showFeedbackModal: boolean;
};
