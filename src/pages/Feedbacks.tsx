
import React from 'react';
import { Link } from 'react-router-dom';
import { useFeedback } from '../hooks/useFeedback';
import { Button } from '../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { ArrowLeft, Download, ThumbsUp, ThumbsDown, RefreshCw, Trash2 } from 'lucide-react';

const Feedbacks: React.FC = () => {
  const { feedbacks, downloadFeedbacks, clearFeedbacks, refreshFeedbacks } = useFeedback();

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString('pt-BR');
  };

  const formatRating = (rating: 'positive' | 'negative') => {
    return rating === 'positive' ? (
      <div className="flex items-center gap-2 text-green-600">
        <ThumbsUp size={16} />
        <span>Positivo</span>
      </div>
    ) : (
      <div className="flex items-center gap-2 text-red-600">
        <ThumbsDown size={16} />
        <span>Negativo</span>
      </div>
    );
  };

  const handleClearFeedbacks = () => {
    if (confirm('Tem certeza que deseja limpar todos os feedbacks? Esta ação não pode ser desfeita.')) {
      clearFeedbacks();
    }
  };

  const handleRefresh = () => {
    refreshFeedbacks();
  };

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft size={16} className="mr-2" />
                Voltar ao Jogo
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-800">
              Meus Feedbacks
            </h1>
          </div>
          
          <div className="flex gap-2">
            <Button onClick={handleRefresh} variant="outline">
              <RefreshCw size={16} className="mr-2" />
              Atualizar
            </Button>
            <Button onClick={downloadFeedbacks} variant="outline">
              <Download size={16} className="mr-2" />
              Baixar JSON
            </Button>
            <Button onClick={handleClearFeedbacks} variant="destructive">
              <Trash2 size={16} className="mr-2" />
              Limpar Tudo
            </Button>
          </div>
        </div>

        {/* Info */}
        <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-700">
            <strong>📊 Seus Feedbacks:</strong> Os feedbacks ficam salvos localmente no seu navegador. 
            Use o botão "Baixar JSON" para fazer backup dos seus dados.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-600">Total de Feedbacks</h3>
            <p className="text-2xl font-bold text-gray-900">{feedbacks.length}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-600">Feedbacks Positivos</h3>
            <p className="text-2xl font-bold text-green-600">
              {feedbacks.filter(f => f.rating === 'positive').length}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm font-medium text-gray-600">Feedbacks Negativos</h3>
            <p className="text-2xl font-bold text-red-600">
              {feedbacks.filter(f => f.rating === 'negative').length}
            </p>
          </div>
        </div>

        {/* Feedbacks Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {feedbacks.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p className="text-lg">Nenhum feedback enviado ainda.</p>
              <p className="text-sm mt-2">
                Jogue o AgileQuest e envie feedbacks sobre suas decisões para vê-los aqui.
              </p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data/Hora</TableHead>
                  <TableHead>Nó</TableHead>
                  <TableHead>Tag</TableHead>
                  <TableHead>Avaliação</TableHead>
                  <TableHead>Comentário</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feedbacks
                  .sort((a, b) => b.timestamp - a.timestamp)
                  .map((feedback, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-mono text-sm">
                      {formatDate(feedback.timestamp)}
                    </TableCell>
                    <TableCell className="font-medium">
                      {feedback.nodeId}
                    </TableCell>
                    <TableCell>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                        {feedback.tag || 'N/A'}
                      </span>
                    </TableCell>
                    <TableCell>
                      {formatRating(feedback.rating)}
                    </TableCell>
                    <TableCell className="max-w-xs">
                      <div className="truncate" title={feedback.comment}>
                        {feedback.comment || '-'}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
