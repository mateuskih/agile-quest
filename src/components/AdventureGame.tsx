
import React, { useState, useEffect } from 'react';
import { storyData } from '../data/stories';
import { GameState } from '../types/game';
import StoryNode from './StoryNode';
import GameHeader from './GameHeader';
import FeedbackModal from './FeedbackModal';
import { useFeedback } from '../hooks/useFeedback';

const AdventureGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentNodeId: 'start',
    history: ['start'],
    isSuccess: null,
    isFailure: null,
    feedbacks: [],
    showFeedbackModal: false,
  });

  const {
    feedbacks,
    saveFeedback,
    isChoiceAvailable,
    getPositiveFeedbackCount,
    clearFeedbacks
  } = useFeedback();

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
    // Se o próximo nó é 'start', resetar tudo
    if (nextNodeId === 'start') {
      clearFeedbacks();
      setGameState({
        currentNodeId: 'start',
        history: ['start'],
        isSuccess: null,
        isFailure: null,
        feedbacks: [],
        showFeedbackModal: false,
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const currentNode = storyData[gameState.currentNodeId];
    
    setGameState((prev) => {
      const newState = {
        ...prev,
        currentNodeId: nextNodeId,
        history: [...prev.history, nextNodeId],
        isSuccess: isSuccessNode(nextNodeId),
        isFailure: isFailureNode(nextNodeId),
        showFeedbackModal: true, // Mostrar modal de feedback após cada escolha
      };
      return newState;
    });
    
    // Scroll to top when making a choice
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle feedback submission
  const handleFeedbackSubmit = (feedback: any) => {
    saveFeedback(feedback);
    setGameState(prev => ({ ...prev, showFeedbackModal: false }));
  };

  // Handle feedback modal close
  const handleFeedbackClose = () => {
    setGameState(prev => ({ ...prev, showFeedbackModal: false }));
  };

  // Reset game and clear feedbacks
  const handleResetGame = () => {
    if (confirm('Isso irá limpar todo seu progresso e feedbacks. Continuar?')) {
      clearFeedbacks();
      setGameState({
        currentNodeId: 'start',
        history: ['start'],
        isSuccess: null,
        isFailure: null,
        feedbacks: [],
        showFeedbackModal: false,
      });
    }
  };

  // Get current story node
  const currentNode = storyData[gameState.currentNodeId];
  const previousNodeId = gameState.history[gameState.history.length - 2];

  return (
    <div className="flex flex-col items-center">
      <GameHeader 
        history={gameState.history} 
        onReset={handleResetGame}
        feedbackCount={feedbacks.length}
        positiveFeedbackCount={getPositiveFeedbackCount()}
      />
      
      <div className="w-full max-w-2xl">
        {currentNode && (
          <StoryNode 
            node={currentNode}
            onChoiceSelect={handleChoiceSelect}
            isSuccess={gameState.isSuccess}
            isFailure={gameState.isFailure}
            isChoiceAvailable={isChoiceAvailable}
            getPositiveFeedbackCount={getPositiveFeedbackCount}
          />
        )}
      </div>
      
      <FeedbackModal
        isOpen={gameState.showFeedbackModal && previousNodeId !== undefined}
        nodeId={previousNodeId || ''}
        nodeTag={previousNodeId ? storyData[previousNodeId]?.tag : undefined}
        onSubmit={handleFeedbackSubmit}
        onClose={handleFeedbackClose}
      />
      
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Desenvolvido por Equipe Agile Quest: Allison Sampaio, Mateus Oliveira de Souza e Thales Salata</p>
      </div>
    </div>
  );
};

export default AdventureGame;
