
import React from 'react';
import { Choice } from '../types/game';

interface GameCardProps {
  choice: Choice;
  onClick: (nextNodeId: string) => void;
  index: number;
}

const GameCard: React.FC<GameCardProps> = ({ choice, onClick, index }) => {
  return (
    <div 
      className="choice-card animate-fade-in"
      style={{ animationDelay: `${index * 0.15}s` }}
      onClick={() => onClick(choice.next)}
    >
      <p className="text-lg font-medium">{choice.text}</p>
    </div>
  );
};

export default GameCard;
