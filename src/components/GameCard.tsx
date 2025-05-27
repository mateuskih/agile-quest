
import React from 'react';
import { Choice } from '../types/game';

interface GameCardProps {
  choice: Choice;
  onClick: (nextNodeId: string) => void;
  index: number;
  isAvailable?: boolean;
  requiredFeedback?: number;
  currentFeedback?: number;
}

const GameCard: React.FC<GameCardProps> = ({ 
  choice, 
  onClick, 
  index, 
  isAvailable = true,
  requiredFeedback,
  currentFeedback = 0
}) => {
  const handleClick = () => {
    if (isAvailable) {
      onClick(choice.next);
    }
  };

  return (
    <div 
      className={`choice-card animate-fade-in ${
        !isAvailable 
          ? 'opacity-50 cursor-not-allowed bg-gray-100' 
          : 'cursor-pointer hover:bg-blue-50'
      }`}
      style={{ animationDelay: `${index * 0.15}s` }}
      onClick={handleClick}
    >
      <p className={`text-lg font-medium ${!isAvailable ? 'text-gray-500' : ''}`}>
        {choice.text}
      </p>
      
      {!isAvailable && requiredFeedback && (
        <div className="mt-2 text-sm text-gray-500 flex items-center gap-1">
          🔒 Requer {requiredFeedback} feedback{requiredFeedback > 1 ? 's' : ''} positivo{requiredFeedback > 1 ? 's' : ''} 
          ({currentFeedback}/{requiredFeedback})
        </div>
      )}
    </div>
  );
};

export default GameCard;
