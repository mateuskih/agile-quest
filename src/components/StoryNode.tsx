
import React from 'react';
import { StoryNode as StoryNodeType } from '../types/game';
import GameCard from './GameCard';

interface StoryNodeProps {
  node: StoryNodeType;
  onChoiceSelect: (nextNodeId: string) => void;
  isSuccess?: boolean;
  isFailure?: boolean;
  isChoiceAvailable: (requiredPositiveFeedback?: number, requiredTag?: string) => boolean;
  getPositiveFeedbackCount: (tag?: string) => number;
}

const StoryNode: React.FC<StoryNodeProps> = ({ 
  node, 
  onChoiceSelect, 
  isSuccess = false, 
  isFailure = false,
  isChoiceAvailable,
  getPositiveFeedbackCount
}) => {
  let nodeClass = "quest-card p-6 md:p-8 animate-fade-in";
  
  if (isSuccess) {
    nodeClass += " success-card";
  } else if (isFailure) {
    nodeClass += " failure-card";
  }

  return (
    <div className={nodeClass}>
      <div className="story-text">{node.text}</div>
      <div className="space-y-3">
        {node.choices.map((choice, index) => {
          const available = isChoiceAvailable(choice.requiredPositiveFeedback, choice.requiredTag);
          
          return (
            <GameCard
              key={`${node.id}-${index}`}
              choice={choice}
              onClick={onChoiceSelect}
              index={index}
              isAvailable={available}
              requiredFeedback={choice.requiredPositiveFeedback}
              currentFeedback={getPositiveFeedbackCount(choice.requiredTag)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StoryNode;
