import { StoryGraph } from "../types/game";

export const kanban: StoryGraph = {
  // === INÍCIO DA JORNADA KANBAN ===
  "kanban-role": {
    id: "kanban-role",
    text: `<strong>Munidos de Transparência</strong><br>
Você é Engenheiro de Software em uma fintech. O time decide experimentar Kanban para encarar gargalos e reduzir ciclo de deploy.<br><br>
<strong>Contexto inicial:</strong><br>
• Backlog de funcionalidades e bugs misturados (80 itens)<br>
• Deploys manuais de quase 3 horas<br>
• Retrabalho frequente por falta de clareza<br>
• Time sem cadência definida<br><br>
<strong>Sua primeira ação no piloto Kanban:</strong>`,
    choices: [
      { text: "Construir quadro Kanban básico", next: "kanban-board-setup" },
      { text: "Pular configurações e começar a codar", next: "kanban-no-board-fail" },
      { text: "Reunir time para explicar Kanban", next: "kanban-team-alignment" },
      { text: "Analisar métricas atuais antes de configurar", next: "kanban-pre-metrics" }
    ]
  },

  "kanban-team-alignment": {
    id: "kanban-team-alignment",
    text: `<strong>Alinhando Expectativas do Time</strong><br>
Você organiza workshop de 1 hora para apresentar princípios Kanban: visualização, limites de WIP, fluxos puxados e cadências.<br><br>
<strong>Resultados esperados:</strong><br>
• Compreensão compartilhada do método<br>
• Conscientização sobre mudança de hábito<br>
• Compromisso em experimentar`,
    choices: [
      { text: "Configurar quadro Kanban", next: "kanban-board-setup" },
      { text: "Definir métricas antes do quadro", next: "kanban-pre-metrics" },
      { text: "Iniciar piloto em subset de tarefas", next: "kanban-subset-pilot" },
      { text: "Rever objetivos do projeto", next: "kanban-project-goals" }
    ]
  },

  "kanban-pre-metrics": {
    id: "kanban-pre-metrics",
    text: `<strong>Coleta Inicial de Métricas</strong><br>
Você coleta lead time e throughput atuais para referência futura.<br><br>
<strong>Métricas obtidas:</strong><br>
• Lead time médio: 12 dias<br>
• Throughput: 8 itens/semana`,
    choices: [
      { text: "Configurar quadro Kanban", next: "kanban-board-setup" },
      { text: "Compartilhar métricas com o time", next: "kanban-share-metrics" },
      { text: "Ignorar métricas e avançar", next: "kanban-no-metrics-fail" },
      { text: "Discutir objetivos de melhoria", next: "kanban-project-goals" }
    ]
  },

  "kanban-share-metrics": {
    id: "kanban-share-metrics",
    text: `<strong>Compartilhando Métricas com o Time</strong><br>
Você apresenta lead time e throughput atuais para o time e define metas de redução em 30%.`,
    choices: [
      { text: "Configurar quadro Kanban", next: "kanban-board-setup" },
      { text: "Definir metas de WIP limit", next: "kanban-set-wip" },
      { text: "Planejar sessões de monitoramento", next: "kanban-daily-meeting" },
      { text: "Validar objetivos com stakeholders", next: "kanban-project-goals" }
    ]
  },

  "kanban-project-goals": {
    id: "kanban-project-goals",
    text: `<strong>Definindo Objetivos do Projeto</strong><br>
Você debate com PO e stakeholders metas de negócio e técnicos: entregas mais rápidas e menos bugs.<br><br>
<strong>Metas definidas:</strong><br>
• Reduzir lead time em 50%<br>
• Aumentar throughput para 15 itens/semana`,
    choices: [
      { text: "Configurar quadro Kanban", next: "kanban-board-setup" },
      { text: "Coletar métricas atuais", next: "kanban-pre-metrics" },
      { text: "Agendar workshop Kaizen", next: "kanban-kaizen-workshop" },
      { text: "Planejar iteração piloto", next: "kanban-subset-pilot" }
    ]
  },

  "kanban-subset-pilot": {
    id: "kanban-subset-pilot",
    text: `<strong>Piloto em Subconjunto de Tarefas</strong><br>
Você seleciona 10 tickets críticos para rodar o piloto Kanban.<br><br>
<strong>Benefícios:</strong><br>
• Menor risco<br>
• Feedback rápido<br>
• Ajustes antes de expandir`,
    choices: [
      { text: "Configurar quadro Kanban", next: "kanban-board-setup" },
      { text: "Definir WIP limits para piloto", next: "kanban-set-wip" },
      { text: "Monitorar métricas do piloto", next: "kanban-metrics-collection" },
      { text: "Revisar resultados do piloto", next: "kanban-ops-review" }
    ]
  },

  // === FALHAS (FAIL) ===
  "kanban-no-board-fail": {
    id: "kanban-no-board-fail",
    text: `<strong>Sem Quadro – Caos Continua</strong><br>
Você ignora a configuração visual.<br><br>
<strong>Consequências:</strong><br>
• Tarefas se perdem no backlog<br>
• Ninguém sabe status real<br><br>
<strong>Lição:</strong> Visualização é primeiro pilar do Kanban.`,
    explanation: `Sem um quadro, o trabalho permanece escondido e impede inspeção e melhoria contínua.`,
    references: ["Kanban University – Visualização do fluxo de trabalho"],
    choices: [ { text: "Jogar novamente", next: "kanban-role" } ]
  },

  // === CONFIGURAÇÃO DO QUADRO ===
  "kanban-board-setup": {
    id: "kanban-board-setup",
    text: `<strong>Configurando o Quadro Kanban</strong><br>
Você cria colunas: Backlog, Pronto, Em Desenvolvimento, Em Teste, Concluído.<br><br>
<strong>Regras:</strong><br>
• Cartões divididos por tipo (feature/bug/documentação)<br>
• Cada cartão tem descrição, dono e estimativa de esforço (t-shirt size)<br><br>
<strong>Próximo passo:</strong>`,
    tag: "visualization",
    choices: [
      { text: "Definir limites de WIP", next: "kanban-set-wip" },
      { text: "Criar swimlanes sem critério", next: "kanban-bad-swimlanes-fail" },
      { text: "Adicionar políticas de pull", next: "kanban-pull-policy" },
      { text: "Analisar métricas atuais", next: "kanban-pre-metrics" }
    ]
  },

  "kanban-bad-swimlanes-fail": {
    id: "kanban-bad-swimlanes-fail",
    text: `<strong>Swimlanes Sem Critério – Confusão</strong><br>
Você cria swimlanes sem definir critérios claros.<br><br>
<strong>Impacto:</strong><br>
• Cartões erram de faixa<br>
• Priorização falha<br><br>
<strong>Lição:</strong> Swimlanes precisam ter política definida.`,
    explanation: `Swimlanes devem representar classes de serviço ou áreas de foco. Sem essa definição, o quadro perde clareza e utilidade.`,
    references: ["Kanban University – Uso adequado de swimlanes"],
    choices: [ { text: "Jogar novamente", next: "kanban-role" } ]
  },

  // === WIP LIMITS ===
  "kanban-set-wip": {
    id: "kanban-set-wip",
    text: `<strong>Estabelecendo WIP Limits</strong><br>
Você aplica limite de 4 em "Em Desenvolvimento" e 3 em "Em Teste".<br><br>
<strong>Observação:</strong> novos cartões só entram se houver vaga.<br><br>
<strong>Próximo passo:</strong>`,
    tag: "wip-limits",
    choices: [
      { text: "Rastrear bloqueios", next: "kanban-add-blocks" },
      { text: "Ignorar bloqueios", next: "kanban-ignore-block-fail" },
      { text: "Rever políticas de pull", next: "kanban-pull-policy" },
      { text: "Coletar métricas após WIP limits", next: "kanban-metrics-collection" }
    ]
  },

  "kanban-ignore-block-fail": {
    id: "kanban-ignore-block-fail",
    text: `<strong>Bloqueios Ocultos – Gargalos Crescem</strong><br>
Você não sinaliza impedimentos.<br><br>
<strong>Impacto:</strong><br>
• Cartões estagnados sem visibilidade<br>
• Time não sabe onde ajudar<br><br>
<strong>Lição:</strong> Transparência de bloqueios é essencial.`,
    explanation: `Bloqueios não visíveis impedem inspeção. Mostrar impedimentos é necessário para manter fluxo.`,
    references: ["Kanban University – Gerenciamento de bloqueios"],
    choices: [ { text: "Jogar novamente", next: "kanban-role" } ]
  },

  // === BLOQUEIOS ===
  "kanban-add-blocks": {
    id: "kanban-add-blocks",
    text: `<strong>Expondo Bloqueios</strong><br>
Você adiciona coluna "Bloqueado" e etiqueta cartões impedidos.<br><br>
<strong>Processo:</strong><br>
• Registrar causa e quem pode resolver<br>
• Resolver antes de puxar novo cartão<br><br>
<strong>Próximo passo:</strong>`,
    tag: "block-management",
    choices: [
      { text: "Agendar revisão diária de quadro", next: "kanban-daily-meeting" },
      { text: "Definir SLA para bloqueios", next: "kanban-block-sla" },
      { text: "Coletar estatísticas de bloqueios", next: "kanban-metrics-collection" },
      { text: "Revisar políticas de pull", next: "kanban-pull-policy" }
    ]
  },

  "kanban-block-sla": {
    id: "kanban-block-sla",
    text: `<strong>Definindo SLA para Desbloqueios</strong><br>
Você estabelece que bloqueios devem ser resolvidos em até 1 dia útil.<br><br>
<strong>Próximo passo:</strong>`,
    choices: [
      { text: "Agendar revisão diária de quadro", next: "kanban-daily-meeting" },
      { text: "Revisar políticas de SLA com time", next: "kanban-team-alignment" },
      { text: "Coletar métricas após SLA", next: "kanban-metrics-collection" },
      { text: "Planejar workshop Kaizen", next: "kanban-kaizen-workshop" }
    ]
  },

  "kanban-daily-meeting": {
    id: "kanban-daily-meeting",
    text: `<strong>Reunião Diária de Quadro</strong><br>
Você institui um encontro de 5 minutos em frente ao quadro para:<br>
• Revisar cartões bloqueados<br>
• Ajustar prioridades<br>
• Garantir fluxo contínuo<br><br>
<strong>Próximo passo:</strong>`,
    tag: "cadences",
    choices: [
      { text: "Definir políticas de pull", next: "kanban-pull-policy" },
      { text: "Registrar feedback da reunião", next: "kanban-ops-review" },
      { text: "Coletar métricas de frequência", next: "kanban-metrics-collection" },
      { text: "Ajustar WIP limits conforme feedback", next: "kanban-set-wip" }
    ]
  },

  "kanban-no-meeting-fail": {
    id: "kanban-no-meeting-fail",
    text: `<strong>Sem Cadência – Desalinhamento</strong><br>
Sem reuniões regulares, o time perde sincronização.<br><br>
<strong>Resultado:</strong><br>
• Prioridades conflitantes<br>
• Ausência de ownership<br><br>
<strong>Lição:</strong> Cadências leves sustentam inspeção.`,
    explanation: `Falta de cadências cria desalinhamento. Reuniões diárias mantêm ritmo e foco no fluxo.`,
    references: ["Kanban University – Cadências recomendadas"],
    choices: [ { text: "Jogar novamente", next: "kanban-role" } ]
  },

  "kanban-pull-policy": {
    id: "kanban-pull-policy",
    text: `<strong>Definindo Políticas de Pull</strong><br>
Você estabelece regras claras para puxar cartões:<br>
• Critérios de prontidão<br>
• Checklist de revisão de código<br>
• Aprovação de QA para mover a "Concluído"<br><br>
<strong>Próximo passo:</strong>`,
    tag: "policies",
    choices: [
      { text: "Introduzir classes de serviço", next: "kanban-classes-of-service" },
      { text: "Ignorar classes de serviço", next: "kanban-no-classes-of-service-fail" },
      { text: "Coletar métricas de pull", next: "kanban-metrics-collection" },
      { text: "Registrar políticas no cartão", next: "kanban-block-sla" }
    ]
  },

  "kanban-no-pull-fail": {
    id: "kanban-no-pull-fail",
    text: `<strong>Pull Arbitrário – Fluxo Instável</strong><br>
Sem critérios, cartões são puxados sem preparação.<br><br>
<strong>Impacto:</strong><br>
• Retrabalho por defeitos<br>
• Regressões frequentes<br><br>
<strong>Lição:</strong> Políticas claras evitam surpresas.`,
    explanation: `Sem regras definidas, o fluxo se torna imprevisível e propenso a erros.`,
    references: ["Kanban University – Políticas de pull"],
    choices: [ { text: "Jogar novamente", next: "kanban-role" } ]
  },

  "kanban-classes-of-service": {
    id: "kanban-classes-of-service",
    text: `<strong>Introduzindo Classes de Serviço</strong><br>
Você define:<br>
• Expedite: emergências (WIP dedicado)<br>
• Standard: fluxo normal<br>
• Fixed-date: entregas com data fixa<br><br>
<strong>Próximo passo:</strong>`,
    tag: "service-classes",
    choices: [
      { text: "Coletar métricas de fluxo", next: "kanban-metrics-collection" },
      { text: "Ignorar métricas", next: "kanban-no-metrics-fail" },
      { text: "Revisar classes com time", next: "kanban-team-alignment" },
      { text: "Planejar workshop Kaizen", next: "kanban-kaizen-workshop" }
    ]
  },

  "kanban-no-classes-of-service-fail": {
    id: "kanban-no-classes-of-service-fail",
    text: `<strong>Sem Classes de Serviço – Prioridades Perdem Sentido</strong><br>
Você não diferencia tipos de trabalho.<br><br>
<strong>Impacto:</strong><br>
• Emergências bloqueiam fluxo normal<br>
• Prazos fixos não recebem atenção necessária<br><br>
<strong>Lição:</strong> Classes de serviço organizam prioridades.`,
    explanation: `Sem classes de serviço, o time não sabe quais itens são mais urgentes ou críticos.`,
    references: ["Kanban University – Classes de serviço"],
    choices: [ { text: "Jogar novamente", next: "kanban-role" } ]
  },

  "kanban-metrics-collection": {
    id: "kanban-metrics-collection",
    text: `<strong>Coletando Métricas</strong><br>
Você começa a registrar:<br>
• Lead time por cartão<br>
• Throughput semanal<br>
• Taxa de bloqueios por semana<br><br>
<strong>Próximo passo:</strong>`,
    tag: "metrics",
    choices: [
      { text: "Analisar diagrama de fluxo cumulativo (CFD)", next: "kanban-cfd-analysis" },
      { text: "Ignorar diagrama", next: "kanban-no-cfd-fail" },
      { text: "Revisar políticas de SLA", next: "kanban-block-sla" },
      { text: "Planejar revisão de operações", next: "kanban-ops-review" }
    ]
  },

  "kanban-no-metrics-fail": {
    id: "kanban-no-metrics-fail",
    text: `<strong>Sem Métricas – Direção Cega</strong><br>
Sem dados, não há base para decisões.<br><br>
<strong>Consequências:</strong><br>
• Dificuldade em prever entregas<br>
• Melhoria não direcionada<br><br>
<strong>Lição:</strong> Métricas fundamentam evolução.`,
    explanation: `Sem dados, melhorias se tornam arbitrárias e não promovem ganhos sustentáveis.`,
    references: ["Kanban University – Uso de métricas"],
    choices: [ { text: "Jogar novamente", next: "kanban-role" } ]
  },

  "kanban-cfd-analysis": {
    id: "kanban-cfd-analysis",
    text: `<strong>Analisando Diagrama de Fluxo Cumulativo (CFD)</strong><br>
Você interpreta zonas de crescimento de WIP e gargalos visuais.<br><br>
<strong>Observações:</strong><br>
• Faixa empinada indica acúmulo<br>
• Platôs são sinais de gargalo`,
    tag: "cfd",
    choices: [
      { text: "Planejar ações corretivas", next: "kanban-ops-review" },
      { text: "Ajustar WIP limits", next: "kanban-set-wip" },
      { text: "Definir workshop Kaizen", next: "kanban-kaizen-workshop" },
      { text: "Revisar políticas de pull", next: "kanban-pull-policy" }
    ]
  },

  "kanban-no-cfd-fail": {
    id: "kanban-no-cfd-fail",
    text: `<strong>Sem CFD – Gargalos Invisíveis</strong><br>
Você não usa diagrama.<br><br>
<strong>Impacto:</strong><br>
• Nenhuma identificação visual de acúmulo de WIP<br><br>
<strong>Lição:</strong> CFD é ferramenta essencial.`,
    explanation: `Sem CFD, o time perde visão granular de como seu trabalho flui. Ferramenta crucial para inspeção.`,
    references: ["Kanban University – Diagrama de fluxo cumulativo"],
    choices: [ { text: "Jogar novamente", next: "kanban-role" } ]
  },

  "kanban-ops-review": {
    id: "kanban-ops-review",
    text: `<strong>Revisão de Operações Mensal</strong><br>
Você reúne stakeholders para:<br>
• Analisar métricas e CFD<br>
• Identificar gargalos sistêmicos<br>
• Planejar melhorias estruturais`,
    choices: [
      { text: "Facilitar workshop Kaizen", next: "kanban-kaizen-workshop" },
      { text: "Ajustar políticas de SLA", next: "kanban-block-sla" },
      { text: "Revisar classes de serviço", next: "kanban-classes-of-service" },
      { text: "Revisar WIP limits", next: "kanban-set-wip" }
    ]
  },

  "kanban-no-ops-fail": {
    id: "kanban-no-ops-fail",
    text: `<strong>Sem Revisão de Operações – Melhoria Seca</strong><br>
Você não faz reuniões formais de análise.<br><br>
<strong>Impacto:</strong><br>
• Mudanças isoladas sem impacto global<br>
• Gargalos persistentes`,
    explanation: `Ignorar revisões de operações impede a coordenação de melhorias de alto nível, mantendo o time fragmentado.`,
    references: ["Kanban University – Revisão de operações"],
    choices: [ { text: "Jogar novamente", next: "kanban-role" } ]
  },

  "kanban-kaizen-workshop": {
    id: "kanban-kaizen-workshop",
    text: `<strong>Workshop Kaizen</strong><br>
Você facilita sessão de melhorias:<br>
• Brainstorm de gargalos<br>
• Ações pequenas e rápidas<br>
• Responsáveis e prazos curtos`,
    choices: [
      { text: "Implementar melhorias sugeridas", next: "kanban-implement-changes" },
      { text: "Documentar lições aprendidas", next: "kanban-document-learnings" },
      { text: "Celebrar resultados", next: "kanban-conclusion-success" },
      { text: "Reavaliar metas iniciais", next: "kanban-project-goals" }
    ]
  },

  "kanban-implement-changes": {
    id: "kanban-implement-changes",
    text: `<strong>Implementando Melhorias</strong><br>
Você aplica duas melhorias prioritárias:<br>
• Ajuste de WIP limits baseados em CFD<br>
• Automação de notificações de bloqueios`,
    choices: [
      { text: "Coletar métricas pós-implementação", next: "kanban-metrics-collection" },
      { text: "Agendar nova revisão de operações", next: "kanban-ops-review" },
      { text: "Documentar lições aprendidas", next: "kanban-document-learnings" },
      { text: "Celebrar conquistas", next: "kanban-conclusion-success" }
    ]
  },

  "kanban-document-learnings": {
    id: "kanban-document-learnings",
    text: `<strong>Documentando Lições Aprendidas</strong><br>
Você registra no wiki as práticas que funcionaram e erros a evitar para futuros ciclos.`,
    choices: [
      { text: "Compartilhar com stakeholders", next: "kanban-ops-review" },
      { text: "Atualizar políticas de pull", next: "kanban-pull-policy" },
      { text: "Revisar quadro Kanban", next: "kanban-board-setup" },
      { text: "Concluir piloto com sucesso", next: "kanban-conclusion-success" }
    ]
  },

  "kanban-conclusion-success": {
    id: "kanban-conclusion-success",
    text: `<strong>Seu Piloto Kanban Foi um Sucesso!</strong><br>
Agora seu time conta com:<br>
• Fluxo visual claro e controlado<br>
• WIP limits respeitados<br>
• Bloqueios gerenciados imediatamente<br>
• Cadências leves e objetivas<br>
• Políticas de pull e classes de serviço definidas<br>
• Métricas e CFD guiando melhorias<br>
• Cultura de Kaizen estabelecida`,
    explanation: `Você aplicou integralmente os princípios e práticas do método Kanban, gerando um sistema de entrega previsível e sustentável.`,
    references: ["Kanban University – Princípios e práticas Kanban"],
    choices: [ { text: "Jogar novamente", next: "kanban-role" } ]
  }
};
