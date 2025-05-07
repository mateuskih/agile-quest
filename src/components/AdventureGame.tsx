
import React, { useState, useEffect } from 'react';
import { storyData } from '../data/stories';
import { GameState } from '../types/game';
import StoryNode from './StoryNode';
import GameHeader from './GameHeader';

const AdventureGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentNodeId: 'start',
    history: ['start'],
    isSuccess: null,
    isFailure: null,
  });

  // Check if node is a success node
  const isSuccessNode = (nodeId: string): boolean => {
    return nodeId.includes('success');
  };

  // Check if node is a failure node
  const isFailureNode = (nodeId: string): boolean => {
    return nodeId.includes('fail');
  };

  // Handle choice selection
  const handleChoiceSelect = (nextNodeId: string) => {
    setGameState((prev) => {
      const newState = {
        currentNodeId: nextNodeId,
        history: [...prev.history, nextNodeId],
        isSuccess: isSuccessNode(nextNodeId),
        isFailure: isFailureNode(nextNodeId),
      };
      return newState;
    });
    
    // Scroll to top when making a choice
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get current story node
  const currentNode = storyData[gameState.currentNodeId];

  // Render graph visualization (not implemented in this version)
  const renderGraph = () => {
    // Future implementation could render a visual representation of the decision tree
    return null;
  };

  return (
    <div className="flex flex-col items-center">
      <GameHeader history={gameState.history} />
      
      <div className="w-full max-w-2xl">
        {currentNode && (
          <StoryNode 
            node={currentNode}
            onChoiceSelect={handleChoiceSelect}
            isSuccess={gameState.isSuccess}
            isFailure={gameState.isFailure}
          />
        )}
      </div>
      
      {/* Graph visualization would go here in a future version */}
      {renderGraph()}
      
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Desenvolvido por Equipe Agile Quest: Allison Sampaio, Mateus Oliveira de Souza e Thales Salata</p>
      </div>
    </div>
  );
};

export default AdventureGame;
