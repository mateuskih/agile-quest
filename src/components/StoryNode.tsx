
import React from 'react';
import { StoryNode as StoryNodeType } from '../types/game';
import GameCard from './GameCard';

interface StoryNodeProps {
  node: StoryNodeType;
  onChoiceSelect: (nextNodeId: string) => void;
  isSuccess?: boolean;
  isFailure?: boolean;
}

const StoryNode: React.FC<StoryNodeProps> = ({ node, onChoiceSelect, isSuccess = false, isFailure = false }) => {
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
        {node.choices.map((choice, index) => (
          <GameCard
            key={`${node.id}-${index}`}
            choice={choice}
            onClick={onChoiceSelect}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default StoryNode;
