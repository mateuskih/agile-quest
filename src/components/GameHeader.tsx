
import React from 'react';

interface GameHeaderProps {
  history: string[];
}

const GameHeader: React.FC<GameHeaderProps> = ({ history }) => {
  return (
    <header className="mb-8">
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-quest-gradient mb-2">
          Agile Quest
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Uma jornada pelas metodologias ágeis
        </p>
      </div>
      
      {history.length > 1 && (
        <div className="flex justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-full px-4 py-1 shadow-sm border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Decisões: {history.length - 1}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default GameHeader;
