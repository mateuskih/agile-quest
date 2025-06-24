
import { StoryGraph } from "../types/game";

export const scrumDetailed: StoryGraph = {
  "scrum-role": {
    id: "scrum-role",
    text: `<strong>Projeto Real: E-commerce Mobile App</strong><br>
Você faz parte de um time Scrum desenvolvendo um aplicativo de e-commerce para uma startup que acabou de receber investimento de R$ 2 milhões. O CEO quer lançar em 3 meses para competir com grandes players do mercado.<br><br>
<strong>Contexto atual:</strong><br>
• Time: 7 pessoas (3 devs, 2 designers, 1 QA, 1 PO)<br>
• Backlog: 150 itens não priorizados<br>
• Stakeholders: CEO, investidores, marketing<br>
• Pressão alta para entrega rápida<br><br>
Qual papel você assume neste desafio?`,
    choices: [
      { text: "Scrum Master", next: "scrum-master-start" },
      { text: "Product Owner", next: "scrum-po-start" },
      { text: "Developer", next: "scrum-dev-start" }
    ]
  },

  // === JORNADA DO SCRUM MASTER ===
  "scrum-master-start": {
    id: "scrum-master-start",
    text: `<strong>Primeira Semana como Scrum Master</strong><br>
O time está em caos. Você observa durante a primeira semana:<br><br>
<strong>Problemas identificados:</strong><br>
• CEO interrompe developers diariamente com "ideias urgentes"<br>
• Product Owner mudou prioridades 4 vezes esta semana<br>
• Time trabalha até tarde, mas velocity é baixa<br>
• Ninguém sabe exatamente o que será entregue no final da Sprint<br>
• Daily Scrum dura 45 minutos com discussões técnicas detalhadas<br><br>
<strong>Desenvolvedores reclamam:</strong><br>
"Não conseguimos nos concentrar com tantas mudanças!"<br><br>
<strong>Sua primeira ação como Scrum Master:</strong>`,
    tag: "servant-leadership",
    choices: [
      { text: "Implementar Sprint Goal claro e proteger o time", next: "scrum-master-protect" },
      { text: "Organizar workshop sobre fundamentos Scrum", next: "scrum-master-workshop" },
      { text: "Confrontar CEO sobre interrupções", next: "scrum-master-confront-fail" },
      { text: "Focar apenas em otimizar cerimônias", next: "scrum-master-ceremonies-only" }
    ]
  },

  "scrum-master-protect": {
    id: "scrum-master-protect",
    text: `<strong>Implementando Sprint Goal</strong><br>
Você trabalha com o PO para definir um Sprint Goal claro: "Usuário pode criar conta, fazer login e visualizar produtos".<br><br>
<strong>Ações tomadas:</strong><br>
• Sprint Goal visível para todos<br>
• Acordo com CEO: mudanças só na próxima Sprint<br>
• Daily focada no progresso em direção ao Goal<br>
• Time protegido de interrupções externas<br><br>
<strong>Semana 2 - Resultados:</strong><br>
• Daily reduzida para 15 minutos<br>
• Developers mais focados<br>
• Velocity aumentou 40%<br><br>
<strong>Mas surge novo desafio...</strong><br>
Na Sprint Review, CEO fica insatisfeito: "Isso não é o que imaginei. Quero mudanças agora!"<br><br>
<strong>Sua resposta:</strong>`,
    tag: "stakeholder-management",
    choices: [
      { text: "Facilitar feedback construtivo e planejar próxima Sprint", next: "scrum-master-feedback" },
      { text: "Aceitar mudanças para não confrontar CEO", next: "scrum-master-compromise-fail" },
      { text: "Educar sobre valor do ciclo inspect-and-adapt", next: "scrum-master-educate" }
    ]
  },

  "scrum-master-educate": {
    id: "scrum-master-educate",
    text: `<strong>Educando sobre Empirismo</strong><br>
Você explica os pilares do Scrum para o CEO e stakeholders:<br><br>
<strong>Sua apresentação:</strong><br>
• <strong>Transparência:</strong> "Vocês veem exatamente o que foi feito"<br>
• <strong>Inspeção:</strong> "Avaliamos o produto e processo regularmente"<br>
• <strong>Adaptação:</strong> "Usamos aprendizados para melhorar o próximo Sprint"<br><br>
<strong>CEO:</strong> "Entendi... então o que vimos hoje nos ajuda a planejar melhor a próxima Sprint?"<br><br>
<strong>3 meses depois - Resultados finais:</strong><br>
• App lançado com features core funcionando<br>
• Time desenvolveu 85% das funcionalidades planejadas<br>
• Feedback de usuários: 4.2/5 estrelas<br>
• CEO: "Aprendi que feedback rápido é melhor que planos perfeitos"<br><br>
<strong>Métricas do sucesso:</strong><br>
• Velocity estabilizada: 34 story points/sprint<br>
• Sprint Goals atingidos: 90%<br>
• Satisfação do time: 8.5/10`,
    explanation: `Excelente aplicação da função de Scrum Master como definida pelo Scrum Guide:<br><br>
• <strong>Servant Leadership</strong> - serviu ao time removendo impedimentos e protegendo de interrupções<br>
• <strong>Facilitação</strong> - facilitou eventos Scrum eficazes (Daily, Sprint Review)<br>
• <strong>Coaching</strong> - educou stakeholders sobre empirismo e valores Scrum<br>
• <strong>Process Authority</strong> - manteve integridade do processo Scrum<br><br>
O Scrum Guide enfatiza que o Scrum Master deve ajudar todos a entenderem os pilares empíricos (transparência, inspeção, adaptação). Sua abordagem de educar ao invés de confrontar demonstra verdadeira servant leadership, criando ambiente de aprendizado organizacional.`,
    references: [
      "Scrum Guide 2020 - Pilares Empíricos: Transparência, Inspeção e Adaptação",
      "Scrum Guide 2020 - Scrum Master como Servant Leader",
      "Scrum Guide 2020 - Sprint Goal como foco e compromisso"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  // === JORNADA DO PRODUCT OWNER ===
  "scrum-po-start": {
    id: "scrum-po-start",
    text: `<strong>Desafio do Product Owner</strong><br>
Como PO, você tem 150 itens no Product Backlog sem priorização clara.<br><br>
<strong>Pressões que você enfrenta:</strong><br>
• CEO: "Quero tudo isso no primeiro release!"<br>
• Marketing: "Precisamos de sistema de cupons para campanha"<br>
• Developers: "Estes requisitos não estão claros"<br>
• Investidores: "Quando teremos o MVP?"<br><br>
<strong>Situação atual do Backlog:</strong><br>
• 40 features de interface<br>
• 30 integrações com pagamentos<br>
• 25 funcionalidades de admin<br>
• 35 features de marketing<br>
• 20 itens técnicos (APIs, performance)<br><br>
<strong>Sua primeira ação como PO:</strong>`,
    tag: "product-vision",
    choices: [
      { text: "Definir Product Goal e priorizar por valor", next: "scrum-po-goal" },
      { text: "Fazer levantamento detalhado com stakeholders", next: "scrum-po-survey" },
      { text: "Deixar time técnico decidir prioridades", next: "scrum-po-delegate-fail" },
      { text: "Implementar todas as features simultaneamente", next: "scrum-po-parallel-fail" }
    ]
  },

  "scrum-po-goal": {
    id: "scrum-po-goal",
    text: `<strong>Definindo Product Goal</strong><br>
Você define um Product Goal claro: "Criar experiência de compra mobile intuitiva que converta 15% dos visitantes em compradores".<br><br>
<strong>Priorização baseada em valor:</strong><br>
1. <strong>Sprint 1-2:</strong> Cadastro, login, catálogo de produtos<br>
2. <strong>Sprint 3-4:</strong> Carrinho de compras, checkout básico<br>
3. <strong>Sprint 5-6:</strong> Pagamentos, confirmação de pedido<br><br>
<strong>Você corta 60% das features iniciais para o MVP.</strong><br><br>
<strong>Reação dos stakeholders:</strong><br>
• CEO: "Mas e as outras funcionalidades?"<br>
• Marketing: "E o sistema de cupons?"<br><br>
<strong>Sua resposta baseada em dados:</strong>`,
    tag: "value-maximization",
    choices: [
      { text: "Mostrar métricas de apps similares e ROI", next: "scrum-po-metrics" },
      { text: "Prometer entregar tudo em sprints futuros", next: "scrum-po-promise-fail" },
      { text: "Explicar conceito de MVP e validação", next: "scrum-po-mvp-success" }
    ]
  },

  "scrum-po-mvp-success": {
    id: "scrum-po-mvp-success",
    text: `<strong>Educando sobre MVP</strong><br>
Você explica o conceito de Minimum Viable Product:<br><br>
<strong>Sua apresentação:</strong><br>
"Vamos lançar com funcionalidades core para validar se usuários realmente compram pelo app. Dados do mercado mostram que 70% das features são raramente usadas."<br><br>
<strong>Estratégia adotada:</strong><br>
• MVP em 2 meses ao invés de 6<br>
• Feedback real de usuários guiará próximas features<br>
• Budget preservado para iterações baseadas em dados<br><br>
<strong>Resultados após 4 meses:</strong><br>
• MVP lançado no prazo<br>
• 1.000 downloads na primeira semana<br>
• Taxa de conversão: 12% (próximo da meta de 15%)<br>
• Feedback users: sistema de cupons não é prioridade<br>
• Feature mais requisitada: avaliações de produtos<br><br>
<strong>CEO:</strong> "Incrível! Se tivéssemos construído tudo, teríamos perdido tempo em coisas que users nem querem!"`,
    explanation: `Execução exemplar das responsabilidades do Product Owner conforme Scrum Guide:<br><br>
• <strong>Product Goal</strong> - definiu objetivo claro e mensurável para o produto<br>
• <strong>Product Backlog Management</strong> - priorizou itens baseado em valor para usuário<br>
• <strong>Value Maximization</strong> - focou em entregar valor rapidamente com MVP<br>
• <strong>Stakeholder Engagement</strong> - educou stakeholders sobre princípios lean<br><br>
O Scrum Guide estabelece que o PO é responsável por maximizar valor do produto. Sua abordagem de MVP demonstra compreensão de que valor real vem de feedback de usuários, não de assumptions internas. A coragem de cortar 60% das features mostra verdadeiro product ownership.`,
    references: [
      "Scrum Guide 2020 - Product Owner accountabilities",
      "Scrum Guide 2020 - Product Goal como compromisso do Product Backlog",
      "Scrum Guide 2020 - Maximização de valor do produto resultante do trabalho do Scrum Team"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  },

  // === JORNADA DO DEVELOPER ===
  "scrum-dev-start": {
    id: "scrum-dev-start",
    text: `<strong>Perspectiva do Developer</strong><br>
Como desenvolvedor sênior, você observa problemas técnicos e de processo:<br><br>
<strong>Situação técnica atual:</strong><br>
• Código sem testes automatizados<br>
• Deploy manual que demora 3 horas<br>
• Bugs descobertos apenas em produção<br>
• Definition of Done inexistente<br>
• Code review não é praticado<br><br>
<strong>Durante Sprint Planning:</strong><br>
PO apresenta User Story: "Como usuário, quero fazer login social"<br>
• Não tem critérios de aceitação claros<br>
• Não foi estimada pelo time<br>
• Dependência de API externa não mapeada<br><br>
<strong>Sua ação como Developer experiente:</strong>`,
    tag: "technical-excellence",
    choices: [
      { text: "Propor Definition of Done e práticas técnicas", next: "scrum-dev-dod" },
      { text: "Implementar a feature mesmo sem clareza", next: "scrum-dev-implement-fail" },
      { text: "Questionar e refinar a User Story", next: "scrum-dev-refine" },
      { text: "Focar apenas no código, deixar processo para SM", next: "scrum-dev-code-only" }
    ]
  },

  "scrum-dev-dod": {
    id: "scrum-dev-dod",
    text: `<strong>Propondo Definition of Done</strong><br>
Você lidera a criação de DoD com o time:<br><br>
<strong>Definition of Done estabelecida:</strong><br>
• Código desenvolvido seguindo padrões<br>
• Testes unitários com 80%+ cobertura<br>
• Code review aprovado por outro developer<br>
• Teste de integração passando<br>
• Feature testada em ambiente de staging<br>
• Documentação atualizada<br><br>
<strong>Impacto imediato:</strong><br>
• Time questiona User Stories mal definidas<br>
• Qualidade do código melhora drasticamente<br>
• Bugs em produção reduzem 70%<br><br>
<strong>Sprint 3 - Novo desafio:</strong><br>
Time está entregando menos story points, mas com qualidade alta. PO questiona a "lentidão".<br><br>
<strong>Sua resposta:</strong>`,
    tag: "sustainable-pace",
    choices: [
      { text: "Mostrar métricas de qualidade e redução de bugs", next: "scrum-dev-metrics-success" },
      { text: "Relaxar Definition of Done para entregar mais", next: "scrum-dev-relax-fail" },
      { text: "Propor automação para aumentar eficiência", next: "scrum-dev-automation" }
    ]
  },

  "scrum-dev-automation": {
    id: "scrum-dev-automation",
    text: `<strong>Implementando Automação</strong><br>
Você lidera iniciativas de automação durante as Sprints:<br><br>
<strong>Melhorias implementadas:</strong><br>
• CI/CD pipeline automatizado<br>
• Testes automatizados executando a cada commit<br>
• Deploy para staging automático<br>
• Code quality gates integrados<br><br>
<strong>Resultados após 2 meses:</strong><br>
• Tempo de deploy: 3 horas → 15 minutos<br>
• Detection de bugs: produção → desenvolvimento<br>
• Story points entregues aumentaram 60%<br>
• Confidence do time para refatorar código<br><br>
<strong>Sprint Retrospective - Time comenta:</strong><br>
"Agora podemos focar em resolver problemas de negócio ao invés de problemas técnicos!"<br><br>
<strong>Final do projeto - 6 meses depois:</strong><br>
• App entregue com qualidade excepcional<br>
• Zero bugs críticos em produção<br>
• Time reconhecido como referência em práticas técnicas<br>
• Você é promovido a Tech Lead`,
    explanation: `Demonstração exemplar das responsabilidades do Developer no Scrum:<br><br>
• <strong>Self-Organizing</strong> - time auto-organizou práticas técnicas sem imposição externa<br>
• <strong>Cross-Functional</strong> - desenvolveu skills além de programação (DevOps, Quality)<br>
• <strong>Accountability</strong> - assumiu responsabilidade pela qualidade do produto<br>
• <strong>Continuous Improvement</strong> - usou Retrospectives para melhorar práticas<br><br>
O Scrum Guide estabelece que Developers são responsáveis por criar um plano para a Sprint, instill quality by adhering to DoD, e adaptar seu plano daily. Sua iniciativa de propor DoD e automação mostra compreensão de que qualidade é responsabilidade do time, não apenas do QA.`,
    references: [
      "Scrum Guide 2020 - Developers accountabilities",
      "Scrum Guide 2020 - Definition of Done como compromisso do Increment",
      "Scrum Guide 2020 - Self-organizing teams e cross-functionality"
    ],
    choices: [{ text: "Jogar novamente", next: "start" }]
  }
};
