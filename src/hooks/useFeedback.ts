
import { useState, useEffect } from 'react';
import { Feedback } from '../types/game';

export const useFeedback = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  // Carregar feedbacks do arquivo JSON
  useEffect(() => {
    loadFeedbacks();
  }, []);

  // Carregar feedbacks do arquivo JSON
  const loadFeedbacks = async () => {
    try {
      const response = await fetch('/feedbacks.json');
      if (response.ok) {
        const data = await response.json();
        setFeedbacks(data.feedbacks || []);
      }
    } catch (error) {
      console.error('Erro ao carregar feedbacks:', error);
      // Fallback para localStorage se o arquivo não existir
      const savedFeedbacks = localStorage.getItem('agile-quest-feedbacks');
      if (savedFeedbacks) {
        try {
          const parsed = JSON.parse(savedFeedbacks);
          setFeedbacks(parsed);
        } catch (error) {
          console.error('Erro ao carregar feedbacks do localStorage:', error);
        }
      }
    }
  };

  // Salvar feedback
  const saveFeedback = async (feedback: Feedback) => {
    const updatedFeedbacks = [...feedbacks, feedback];
    setFeedbacks(updatedFeedbacks);
    
    // Salvar no localStorage como backup
    localStorage.setItem('agile-quest-feedbacks', JSON.stringify(updatedFeedbacks));
    
    // Salvar no arquivo JSON
    await saveFeedbacksToFile(updatedFeedbacks);
  };

  // Salvar feedbacks no arquivo JSON
  const saveFeedbacksToFile = async (feedbacksData: Feedback[]) => {
    try {
      const dataToSave = {
        feedbacks: feedbacksData,
        lastUpdated: new Date().toISOString()
      };

      // Para desenvolvimento local, vamos simular salvando no localStorage
      // e criando um arquivo para download
      const dataStr = JSON.stringify(dataToSave, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      
      // Criar URL para o arquivo
      const url = URL.createObjectURL(dataBlob);
      
      // Salvar referência do arquivo
      localStorage.setItem('agile-quest-feedbacks-file-url', url);
      
      console.log('Feedbacks salvos com sucesso');
    } catch (error) {
      console.error('Erro ao salvar feedbacks:', error);
    }
  };

  // Função para fazer download do arquivo de feedbacks
  const downloadFeedbacks = () => {
    try {
      const dataToSave = {
        feedbacks: feedbacks,
        lastUpdated: new Date().toISOString(),
        totalCount: feedbacks.length,
        positiveCount: feedbacks.filter(f => f.rating === 'positive').length,
        negativeCount: feedbacks.filter(f => f.rating === 'negative').length
      };
      
      const dataStr = JSON.stringify(dataToSave, null, 2);
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
  const clearFeedbacks = async () => {
    setFeedbacks([]);
    localStorage.removeItem('agile-quest-feedbacks');
    await saveFeedbacksToFile([]);
  };

  // Recarregar feedbacks
  const refreshFeedbacks = () => {
    loadFeedbacks();
  };

  return {
    feedbacks,
    saveFeedback,
    getPositiveFeedbackCount,
    isChoiceAvailable,
    clearFeedbacks,
    downloadFeedbacks,
    refreshFeedbacks
  };
};
