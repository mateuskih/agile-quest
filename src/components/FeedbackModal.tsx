
import React, { useState } from 'react';
import { Feedback } from '../types/game';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

interface FeedbackModalProps {
  isOpen: boolean;
  nodeId: string;
  nodeTag?: string;
  onSubmit: (feedback: Feedback) => void;
  onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpen,
  nodeId,
  nodeTag,
  onSubmit,
  onClose
}) => {
  const [rating, setRating] = useState<'positive' | 'negative' | null>(null);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (!rating) return;

    const feedback: Feedback = {
      nodeId,
      rating,
      comment: comment.trim() || undefined,
      timestamp: Date.now(),
      tag: nodeTag
    };

    onSubmit(feedback);
    onClose();
    setRating(null);
    setComment('');
  };

  const handleSkip = () => {
    onClose();
    setRating(null);
    setComment('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md animate-fade-in">
        <h3 className="text-xl font-bold mb-4 text-gray-800">
          Como foi essa decisão?
        </h3>
        
        <p className="text-gray-600 mb-4">
          Seu feedback nos ajuda a melhorar e pode influenciar suas próximas escolhas!
        </p>

        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium text-gray-700">
              Avalie sua decisão:
            </Label>
            <div className="flex gap-3 mt-2">
              <button
                onClick={() => setRating('positive')}
                className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                  rating === 'positive'
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                👍 Boa decisão
              </button>
              <button
                onClick={() => setRating('negative')}
                className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                  rating === 'negative'
                    ? 'border-red-500 bg-red-50 text-red-700'
                    : 'border-gray-200 hover:border-red-300'
                }`}
              >
                👎 Poderia melhorar
              </button>
            </div>
          </div>

          <div>
            <Label htmlFor="comment" className="text-sm font-medium text-gray-700">
              Comentário (opcional):
            </Label>
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="O que você achou dessa situação?"
              className="mt-1"
              rows={3}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={handleSkip}
              className="flex-1 py-2 px-4 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Pular
            </button>
            <button
              onClick={handleSubmit}
              disabled={!rating}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                rating
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Enviar Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
