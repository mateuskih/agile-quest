
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
  onOpenFeedback?: () => void;
}

const StoryNode: React.FC<StoryNodeProps> = ({ 
  node, 
  onChoiceSelect, 
  isSuccess = false, 
  isFailure = false,
  isChoiceAvailable,
  getPositiveFeedbackCount,
  onOpenFeedback
}) => {
  let nodeClass = "quest-card p-6 md:p-8 animate-fade-in";
  
  if (isSuccess) {
    nodeClass += " success-card";
  } else if (isFailure) {
    nodeClass += " failure-card";
  }

  const isEndNode = isSuccess || isFailure;

  return (
    <div className={nodeClass}>
      <div className="story-text">{node.text}</div>
      
      {/* Explicação detalhada para nós finais */}
      {isEndNode && node.explanation && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
          <h3 className="font-semibold text-gray-800 mb-2">
            {isSuccess ? "🎯 Por que esta foi uma boa decisão:" : "❌ Por que esta decisão não foi ideal:"}
          </h3>
          <div className="text-gray-700 whitespace-pre-line">{node.explanation}</div>
        </div>
      )}

      {/* Referências aos manuais oficiais */}
      {isEndNode && node.references && node.references.length > 0 && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-800 mb-2">📚 Referências:</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            {node.references.map((ref, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{ref}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Botão de feedback para nós finais */}
      {isEndNode && onOpenFeedback && (
        <div className="mt-4 text-center">
          <button
            onClick={onOpenFeedback}
            className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm"
          >
            💭 Dar feedback sobre esta experiência
          </button>
        </div>
      )}

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
