
import { useState, useEffect } from 'react';
import { Feedback } from '../types/game';

export const useFeedback = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  // Carregar feedbacks do localStorage
  useEffect(() => {
    const savedFeedbacks = localStorage.getItem('agile-quest-feedbacks');
    if (savedFeedbacks) {
      try {
        const parsed = JSON.parse(savedFeedbacks);
        setFeedbacks(parsed);
      } catch (error) {
        console.error('Erro ao carregar feedbacks:', error);
      }
    }
  }, []);

  // Salvar feedbacks no localStorage
  const saveFeedback = (feedback: Feedback) => {
    const updatedFeedbacks = [...feedbacks, feedback];
    setFeedbacks(updatedFeedbacks);
    localStorage.setItem('agile-quest-feedbacks', JSON.stringify(updatedFeedbacks));
  };

  // Contar feedbacks positivos por tag
  const getPositiveFeedbackCount = (tag?: string): number => {
    return feedbacks.filter(f => 
      f.rating === 'positive' && 
      (!tag || f.tag === tag)
    ).length;
  };

  // Verificar se uma escolha está disponível baseado nos feedbacks
  const isChoiceAvailable = (requiredPositiveFeedback?: number, requiredTag?: string): boolean => {
    if (!requiredPositiveFeedback) return true;
    
    const count = getPositiveFeedbackCount(requiredTag);
    return count >= requiredPositiveFeedback;
  };

  // Limpar todos os feedbacks
  const clearFeedbacks = () => {
    setFeedbacks([]);
    localStorage.removeItem('agile-quest-feedbacks');
  };

  return {
    feedbacks,
    saveFeedback,
    getPositiveFeedbackCount,
    isChoiceAvailable,
    clearFeedbacks
  };
};
