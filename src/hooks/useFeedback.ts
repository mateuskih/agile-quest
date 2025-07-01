
import { useState, useEffect } from 'react';
import { Feedback } from '../types/game';

const STORAGE_KEY = 'agile-quest-feedbacks';
const LAST_UPDATE_KEY = 'agile-quest-feedbacks-last-update';

export const useFeedback = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  // Carregar feedbacks do localStorage
  useEffect(() => {
    loadFeedbacks();
    
    // Verificar atualizações periodicamente (simula sincronização)
    const interval = setInterval(() => {
      loadFeedbacks();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Carregar feedbacks do localStorage
  const loadFeedbacks = () => {
    try {
      const savedFeedbacks = localStorage.getItem(STORAGE_KEY);
      if (savedFeedbacks) {
        const parsed = JSON.parse(savedFeedbacks);
        setFeedbacks(Array.isArray(parsed) ? parsed : []);
        console.log('Feedbacks carregados:', parsed.length);
      } else {
        console.log('Nenhum feedback encontrado no localStorage');
      }
    } catch (error) {
      console.error('Erro ao carregar feedbacks:', error);
      setFeedbacks([]);
    }
  };

  // Salvar feedback
  const saveFeedback = (feedback: Feedback) => {
    try {
      const updatedFeedbacks = [...feedbacks, feedback];
      setFeedbacks(updatedFeedbacks);
      
      // Salvar no localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFeedbacks));
      localStorage.setItem(LAST_UPDATE_KEY, new Date().toISOString());
      
      console.log('Feedback salvo com sucesso:', feedback);
      console.log('Total de feedbacks:', updatedFeedbacks.length);
    } catch (error) {
      console.error('Erro ao salvar feedback:', error);
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
      
      console.log('Download de feedbacks iniciado');
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
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(LAST_UPDATE_KEY);
    console.log('Todos os feedbacks foram limpos');
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
