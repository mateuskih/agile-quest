
import React from 'react';

interface GameHeaderProps {
  history: string[];
  onReset?: () => void;
  feedbackCount?: number;
  positiveFeedbackCount?: number;
}

const GameHeader: React.FC<GameHeaderProps> = ({ 
  history, 
  onReset,
  feedbackCount = 0,
  positiveFeedbackCount = 0
}) => {
  return (
    <div className="w-full max-w-2xl mb-6">
      <div className="text-center mb-4">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
          Agile Quest
        </h1>
        <p className="text-gray-600 text-lg">
          Aventura Interativa sobre Metodologias Ágeis
        </p>
      </div>
      
      <div className="flex flex-wrap justify-between items-center bg-white rounded-lg shadow-sm p-4 mb-4">
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span>Decisões: {history.length - 1}</span>
          <span>Feedbacks: {feedbackCount}</span>
          <span className="text-green-600">👍 {positiveFeedbackCount}</span>
          <span className="text-red-600">👎 {feedbackCount - positiveFeedbackCount}</span>
        </div>
        
        {onReset && (
          <button
            onClick={onReset}
            className="text-sm text-red-600 hover:text-red-800 transition-colors"
          >
            Resetar Progresso
          </button>
        )}
      </div>
    </div>
  );
};

export default GameHeader;
