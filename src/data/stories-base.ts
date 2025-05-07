
import { StoryGraph } from "../types/game";

export const storyData: StoryGraph = {
  "start": {
    "id": "start",
    "text": "Bem-vindo ao Agile Quest! Escolha a metodologia ágil para seu projeto:",
    "choices": [
      { "text": "Scrum", "next": "scrum-role" },
      { "text": "Kanban", "next": "kanban-role" },
      { "text": "XP (Extreme Programming)", "next": "xp-role" }
    ]
  },
  "scrum-role": {
    "id": "scrum-role",
    "text": "Você escolheu Scrum! Qual papel deseja assumir?",
    "choices": [
      { "text": "Product Owner", "next": "scrum-po-1" },
      { "text": "Scrum Master", "next": "scrum-sm-1" },
      { "text": "Developer", "next": "scrum-dev-1" }
    ]
  },
  "scrum-po-1": {
    "id": "scrum-po-1",
    "text": "Como Product Owner, você precisa priorizar o backlog. O que faz?",
    "choices": [
      { "text": "Prioriza valor de negócio", "next": "scrum-po-2" },
      { "text": "Prioriza tarefas técnicas", "next": "scrum-po-fail" }
    ]
  },
  "scrum-po-2": {
    "id": "scrum-po-2",
    "text": "O time pede para incluir uma funcionalidade não planejada. O que faz?",
    "choices": [
      { "text": "Avalia impacto e negocia com stakeholders", "next": "scrum-success" },
      { "text": "Aceita sem avaliar", "next": "scrum-po-fail" }
    ]
  },
  "scrum-po-fail": {
    "id": "scrum-po-fail",
    "text": "O backlog ficou desorganizado e o time perdeu o foco. O projeto atrasou!",
    "choices": [
      { "text": "Tentar novamente", "next": "scrum-role" }
    ]
  },
  "scrum-sm-1": {
    "id": "scrum-sm-1",
    "text": "Como Scrum Master, há um conflito entre desenvolvedores. O que faz?",
    "choices": [
      { "text": "Facilita uma reunião para resolver", "next": "scrum-sm-2" },
      { "text": "Ignora o conflito", "next": "scrum-sm-fail" }
    ]
  },
  "scrum-sm-2": {
    "id": "scrum-sm-2",
    "text": "O time está com dificuldades em entregar a tempo. O que faz?",
    "choices": [
      { "text": "Promove retrospectiva focada em melhoria contínua", "next": "scrum-success" },
      { "text": "Cobra mais do time", "next": "scrum-sm-fail" }
    ]
  },
  "scrum-sm-fail": {
    "id": "scrum-sm-fail",
    "text": "O clima do time piorou e a produtividade caiu. O projeto falhou!",
    "choices": [
      { "text": "Tentar novamente", "next": "scrum-role" }
    ]
  },
  "scrum-dev-1": {
    "id": "scrum-dev-1",
    "text": "Como Developer, você pode implementar CI/CD. O que faz?",
    "choices": [
      { "text": "Implementa CI/CD", "next": "scrum-dev-2" },
      { "text": "Deixa para depois", "next": "scrum-dev-fail" }
    ]
  },
  "scrum-dev-2": {
    "id": "scrum-dev-2",
    "text": "Você percebe dívidas técnicas acumulando. O que faz?",
    "choices": [
      { "text": "Sugere refino técnico nas reuniões de planejamento", "next": "scrum-success" },
      { "text": "Ignora para entregar mais rápido", "next": "scrum-dev-fail" }
    ]
  },
  "scrum-dev-fail": {
    "id": "scrum-dev-fail",
    "text": "A qualidade caiu e bugs apareceram em produção. O projeto falhou!",
    "choices": [
      { "text": "Tentar novamente", "next": "scrum-role" }
    ]
  },
  "scrum-success": {
    "id": "scrum-success",
    "text": "Parabéns! Suas decisões levaram ao sucesso do projeto Scrum!",
    "choices": [
      { "text": "Jogar novamente", "next": "start" }
    ]
  },
  "kanban-role": {
    "id": "kanban-role",
    "text": "Você escolheu Kanban! Qual papel deseja assumir?",
    "choices": [
      { "text": "Líder de Equipe", "next": "kanban-lead-1" },
      { "text": "Membro do Time", "next": "kanban-member-1" }
    ]
  },
  "kanban-lead-1": {
    "id": "kanban-lead-1",
    "text": "O fluxo está travado por excesso de tarefas em andamento. O que faz?",
    "choices": [
      { "text": "Remove impedimentos e limita WIP", "next": "kanban-lead-2" },
      { "text": "Ignora o problema", "next": "kanban-fail" }
    ]
  },
  "kanban-lead-2": {
    "id": "kanban-lead-2",
    "text": "O time sugere automatizar deploys. O que faz?",
    "choices": [
      { "text": "Apoia a automação e incentiva experimentação", "next": "kanban-success" },
      { "text": "Prefere manter processos manuais", "next": "kanban-fail" }
    ]
  },
  "kanban-member-1": {
    "id": "kanban-member-1",
    "text": "Você percebe gargalos no quadro. O que faz?",
    "choices": [
      { "text": "Sinaliza para o time e propõe revisão do fluxo", "next": "kanban-success" },
      { "text": "Continua trabalhando normalmente", "next": "kanban-fail" }
    ]
  },
  "kanban-success": {
    "id": "kanban-success",
    "text": "Ótimo trabalho! O fluxo Kanban está saudável e o time entrega valor continuamente!",
    "choices": [
      { "text": "Jogar novamente", "next": "start" }
    ]
  },
  "kanban-fail": {
    "id": "kanban-fail",
    "text": "O fluxo travou e o time ficou sobrecarregado. O projeto não evoluiu!",
    "choices": [
      { "text": "Tentar novamente", "next": "kanban-role" }
    ]
  },
  "xp-role": {
    "id": "xp-role",
    "text": "Você escolheu XP! Qual papel deseja assumir?",
    "choices": [
      { "text": "Coach", "next": "xp-coach-1" },
      { "text": "Desenvolvedor", "next": "xp-dev-1" }
    ]
  },
  "xp-coach-1": {
    "id": "xp-coach-1",
    "text": "O time está com dificuldades em pair programming. O que faz?",
    "choices": [
      { "text": "Promove treinamento e feedbacks", "next": "xp-coach-2" },
      { "text": "Deixa o time se virar", "next": "xp-fail" }
    ]
  },
  "xp-coach-2": {
    "id": "xp-coach-2",
    "text": "O time quer adotar integração contínua. O que faz?",
    "choices": [
      { "text": "Apoia e ajuda a definir boas práticas", "next": "xp-success" },
      { "text": "Acha desnecessário", "next": "xp-fail" }
    ]
  },
  "xp-dev-1": {
    "id": "xp-dev-1",
    "text": "Você pode automatizar testes. O que faz?",
    "choices": [
      { "text": "Automatiza testes e compartilha com o time", "next": "xp-success" },
      { "text": "Testa manualmente", "next": "xp-fail" }
    ]
  },
  "xp-success": {
    "id": "xp-success",
    "text": "Parabéns! O time XP está evoluindo com qualidade e colaboração!",
    "choices": [
      { "text": "Jogar novamente", "next": "start" }
    ]
  },
  "xp-fail": {
    "id": "xp-fail",
    "text": "O time perdeu engajamento e a qualidade caiu. O projeto não teve sucesso!",
    "choices": [
      { "text": "Tentar novamente", "next": "xp-role" }
    ]
  }
};
