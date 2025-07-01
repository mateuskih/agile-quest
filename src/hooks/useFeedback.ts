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

  // Salvar feedbacks no localStorage e em arquivo
  const saveFeedback = (feedback: Feedback) => {
    const updatedFeedbacks = [...feedbacks, feedback];
    setFeedbacks(updatedFeedbacks);
    localStorage.setItem('agile-quest-feedbacks', JSON.stringify(updatedFeedbacks));
    
    // Salvar em arquivo JSON para download
    saveToFile(updatedFeedbacks);
  };

  // Função para salvar feedbacks em arquivo JSON
  const saveToFile = (feedbacksData: Feedback[]) => {
    try {
      const dataStr = JSON.stringify(feedbacksData, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      
      // Criar URL temporária para o arquivo
      const url = URL.createObjectURL(dataBlob);
      
      // Armazenar a URL para acesso posterior
      localStorage.setItem('agile-quest-feedbacks-file', url);
    } catch (error) {
      console.error('Erro ao salvar arquivo de feedbacks:', error);
    }
  };

  // Função para fazer download do arquivo de feedbacks
  const downloadFeedbacks = () => {
    try {
      const dataStr = JSON.stringify(feedbacks, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `agile-quest-feedbacks-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erro ao fazer download dos feedbacks:', error);
    }
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
    clearFeedbacks,
    downloadFeedbacks
  };
};
