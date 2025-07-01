import React from 'react';
import { Link } from 'react-router-dom';
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

  // Função para renderizar texto com formatação
  const renderFormattedText = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 p-3 rounded mt-2 mb-2 overflow-x-auto"><code>$1</code></pre>')
      .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 rounded">$1</code>')
      .replace(/• (.*?)(?=\n|$)/g, '<li>$1</li>')
      .split('\n')
      .map(line => {
        if (line.trim() === '') return '<br>';
        if (line.includes('<li>')) return line;
        return `<p class="mb-2">${line}</p>`;
      })
      .join('')
      .replace(/(<li>.*<\/li>)/g, '<ul class="list-disc list-inside ml-4 mb-2">$1</ul>');
  };

  return (
    <div className={nodeClass}>
      {/* Texto da história */}
      <div 
        className="story-text"
        dangerouslySetInnerHTML={{ __html: renderFormattedText(node.text) }}
      />

      {/* Explicação detalhada, sempre que existir */}
      {node.explanation && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
          <h3 className="font-semibold text-gray-800 mb-2">
            {isSuccess
              ? "🎯 Por que esta foi uma boa decisão:"
              : "❌ Por que esta decisão não foi ideal:"}
          </h3>
          <div
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: renderFormattedText(node.explanation) }}
          />
        </div>
      )}

      {/* Referências, sempre que existir */}
      {node.references && node.references.length > 0 && (
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

      {/* Botão de feedback */}
      {node.explanation && onOpenFeedback && (
        <div className="mt-4 text-center space-y-2">
          <button
            onClick={onOpenFeedback}
            className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm"
          >
            💭 Dar feedback sobre esta experiência
          </button>
          <div>
            <Link 
              to="/feedbacks" 
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              Ver todos os feedbacks enviados
            </Link>
          </div>
        </div>
      )}

      {/* Choices */}
      <div className="space-y-3 mt-6">
        {node.choices.map((choice, idx) => {
          const available = isChoiceAvailable(choice.requiredPositiveFeedback, choice.requiredTag);
          return (
            <GameCard
              key={`${node.id}-${idx}`}
              choice={choice}
              onClick={onChoiceSelect}
              index={idx}
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
