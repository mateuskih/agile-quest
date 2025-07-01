import { StoryGraph } from "../types/game";

export const xp: StoryGraph = {
  // === INÍCIO DA JORNADA XP ===
  "xp-role": {
    id: "xp-role",
    text: `<strong>Bem-vindo ao Extreme Programming!</strong><br>
Você é um Desenvolvedor Sênior em uma empresa de software que está enfrentando sérios problemas de qualidade e entrega.<br><br>
<strong>Situação atual:</strong><br>
• Bugs críticos em produção afetam 40% dos usuários mensalmente<br>
• Integração de código causa conflitos e retrabalho constante<br>
• Clientes insatisfeitos com funcionalidades que não atendem suas necessidades<br>
• Equipe desmotivada, trabalhando em silos isolados<br>
• Entregas atrasadas e com qualidade questionável<br>
• Documentação desatualizada e requisitos mal definidos<br><br>
<strong>Sua missão:</strong> Implementar Extreme Programming para revolucionar a forma como sua equipe desenvolve software.<br><br>
<strong>Qual valor fundamental do XP você quer priorizar primeiro?</strong>`,
    choices: [
      {
        text: "Comunicação - Melhorar interação entre equipe e cliente",
        next: "xp-communication",
      },
      {
        text: "Simplicidade - Focar no essencial e evitar complexidade",
        next: "xp-simplicity",
      },
      {
        text: "Feedback - Criar ciclos rápidos de validação",
        next: "xp-feedback",
      },
      {
        text: "Coragem - Tomar decisões técnicas difíceis",
        next: "xp-courage",
      },
    ],
  },

  // === COMUNICAÇÃO ===
  "xp-communication": {
    id: "xp-communication",
    text: `<strong>Valor: Comunicação</strong><br>
Você decide focar na comunicação como base fundamental. Os cinco valores do XP são comunicação, simplicidade, feedback, coragem e respeito.<br><br>
<strong>Ações implementadas:</strong><br>
• Remover barreiras entre desenvolvedores e cliente<br>
• Estabelecer conversas face a face em vez de documentos extensos<br>
• Criar espaços de trabalho colaborativos<br>
• Implementar reuniões diárias de alinhamento<br><br>
<strong>Resultado imediato:</strong> O cliente começa a participar ativamente, esclarecendo dúvidas em tempo real e ajustando prioridades conforme necessário.<br><br>
<strong>Próximo passo:</strong>`,
    choices: [
      {
        text: "Trazer o cliente para trabalhar no local (On-Site Customer)",
        next: "xp-onsite-customer",
      },
      {
        text: "Implementar Planning Game para priorizar features",
        next: "xp-planning-game",
      },
      {
        text: "Estabelecer Pair Programming para melhorar comunicação técnica",
        next: "xp-pair-programming",
      },
      {
        text: "Criar um espaço de trabalho aberto e colaborativo",
        next: "xp-workspace",
      },
    ],
  },

  // === SIMPLICIDADE ===
  "xp-simplicity": {
    id: "xp-simplicity",
    text: `<strong>Valor: Simplicidade</strong><br>
Você abraça o princípio "faça a coisa mais simples que funciona". Simplicidade significa fazer apenas o absolutamente necessário, mantendo o design do sistema o mais simples possível.<br><br>
<strong>Mudanças implementadas:</strong><br>
• Eliminar código complexo desnecessário<br>
• Remover funcionalidades não utilizadas<br>
• Simplificar arquitetura para facilitar manutenção<br>
• Focar apenas nos requisitos atuais, não em necessidades futuras especulativas<br><br>
<strong>Impacto:</strong> O código fica mais limpo, a manutenção mais fácil e a equipe mais produtiva.<br><br>
<strong>Como você vai manter essa simplicidade?</strong>`,
    choices: [
      { text: "Implementar refatoração contínua", next: "xp-refactoring" },
      { text: "Adotar Simple Design principles", next: "xp-simple-design" },
      {
        text: "Remover código desnecessário sistematicamente",
        next: "xp-yagni",
      },
      { text: "Criar testes para garantir simplicidade", next: "xp-testing" },
    ],
  },

  // === FEEDBACK ===
  "xp-feedback": {
    id: "xp-feedback",
    text: `<strong>Valor: Feedback</strong><br>
Você estabelece ciclos curtos de feedback para validar continuamente o trabalho. Através de feedback constante sobre esforços anteriores, as equipes podem identificar áreas para melhoria.<br><br>
<strong>Implementações:</strong><br>
• Releases frequentes para validação com usuários reais<br>
• Testes automáticos que rodam a cada mudança<br>
• Integração contínua com feedback imediato<br>
• Revisões constantes de código e design<br><br>
<strong>Resultado:</strong> Problemas são detectados em minutos, não em semanas. O cliente vê progresso real constantemente.<br><br>
<strong>Qual prática de feedback você quer implementar primeiro?</strong>`,
    choices: [
      {
        text: "Continuous Integration para feedback técnico",
        next: "xp-continuous-integration",
      },
      {
        text: "Small Releases para feedback do usuário",
        next: "xp-small-releases",
      },
      {
        text: "Test-Driven Development para feedback de design",
        next: "xp-tdd",
      },
      {
        text: "Acceptance Tests para feedback de negócio",
        next: "xp-acceptance-tests",
      },
    ],
  },

  // === CORAGEM ===
  "xp-courage": {
    id: "xp-courage",
    text: `<strong>Valor: Coragem</strong><br>
Você decide ter coragem para fazer mudanças difíceis mas necessárias no código e nos processos.<br><br>
<strong>Decisões corajosas tomadas:</strong><br>
• Reescrever código legado problemático<br>
• Remover funcionalidades complexas que não agregam valor<br>
• Confrontar problemas de arquitetura de frente<br>
• Implementar mudanças que outros consideravam "muito arriscadas"<br><br>
<strong>Apoio para coragem:</strong> Com testes abrangentes e feedback rápido, você pode fazer mudanças com confiança.<br><br>
<strong>Onde você vai aplicar essa coragem primeiro?</strong>`,
    choices: [
      { text: "Refatorar código legado crítico", next: "xp-refactoring" },
      {
        text: "Implementar arquitetura mais simples",
        next: "xp-simple-design",
      },
      { text: "Remover funcionalidades desnecessárias", next: "xp-yagni" },
      {
        text: "Adotar práticas técnicas avançadas",
        next: "xp-technical-practices",
      },
    ],
  },

  // === PRÁTICAS FUNDAMENTAIS ===
  "xp-onsite-customer": {
    id: "xp-onsite-customer",
    text: `<strong>Prática: On-Site Customer</strong><br>
Você convence o cliente a trabalhar diretamente com a equipe no mesmo local.<br><br>
<strong>Transformações observadas:</strong><br>
• Dúvidas sobre requisitos resolvidas em segundos<br>
• Prioridades ajustadas dinamicamente baseadas em feedback real<br>
• Relacionamento de confiança construído entre equipe e cliente<br>
• Redução de 70% no tempo gasto em reuniões de alinhamento<br>
• Funcionalidades desenvolvidas com foco real no valor de negócio<br><br>
<strong>Desafio:</strong> O cliente quer adicionar muitas funcionalidades ao mesmo tempo.<br><br>
<strong>Como você vai gerenciar isso?</strong>`,
    choices: [
      {
        text: "Implementar Planning Game para priorizar",
        next: "xp-planning-game",
      },
      {
        text: "Criar releases pequenos e frequentes",
        next: "xp-small-releases",
      },
      { text: "Explicar o valor da simplicidade", next: "xp-simplicity" },
      { text: "Mostrar o risco de scope creep", next: "xp-scope-management" },
    ],
  },

  "xp-planning-game": {
    id: "xp-planning-game",
    text: `<strong>Prática: Planning Game</strong><br>
Você implementa um processo colaborativo onde negócio e desenvolvimento trabalham juntos para maximizar o valor entregue.<br><br>
<strong>Como funciona na prática:</strong><br>
• Cliente escreve user stories descrevendo necessidades<br>
• Desenvolvedores estimam o esforço técnico necessário<br>
• Priorização baseada em valor vs. custo<br>
• Iterações curtas com entrega de valor real<br>
• Replanejamento constante baseado em aprendizado<br><br>
<strong>Resultado:</strong> Em 2 semanas, vocês entregam a primeira funcionalidade de alto valor.<br><br>
<strong>Próximo passo para melhorar o processo:</strong>`,
    choices: [
      {
        text: "Implementar Small Releases para validação rápida",
        next: "xp-small-releases",
      },
      {
        text: "Criar Acceptance Tests para cada story",
        next: "xp-acceptance-tests",
      },
      { text: "Adotar estimativas em story points", next: "xp-estimation" },
      { text: "Estabelecer velocidade da equipe", next: "xp-velocity" },
    ],
  },

  "xp-pair-programming": {
    id: "xp-pair-programming",
    text: `<strong>Prática: Pair Programming</strong><br>
Você implementa programação em pares, onde dois desenvolvedores trabalham juntos no mesmo código.<br><br>
<strong>Benefícios imediatos observados:</strong><br>
• Qualidade do código aumenta drasticamente<br>
• Conhecimento é compartilhado entre toda a equipe<br>
• Bugs são detectados durante a escrita, não depois<br>
• Soluções mais criativas emergem da colaboração<br>
• Onboarding de novos membros acelerado<br><br>
<strong>Resistência inicial:</strong> Alguns desenvolvedores acham que vai ser mais lento.<br><br>
<strong>Como você vai demonstrar o valor?</strong>`,
    choices: [
      {
        text: "Medir qualidade do código (menos bugs)",
        next: "xp-quality-metrics",
      },
      { text: "Implementar rotação de pares", next: "xp-pair-rotation" },
      { text: "Combinar com TDD para mostrar benefícios", next: "xp-tdd" },
      {
        text: "Criar guidelines para pair programming efetivo",
        next: "xp-pair-guidelines",
      },
    ],
  },

  "xp-tdd": {
    id: "xp-tdd",
    text: `<strong>Prática: Test-Driven Development</strong><br>
Você implementa TDD: escrever testes antes do código de produção. XP popularizou práticas como TestDrivenDevelopment que foram amplamente adotadas no desenvolvimento de software.<br><br>
<strong>Ciclo TDD implementado:</strong><br>
1. Escrever um teste que falha (Red)<br>
2. Escrever código mínimo para passar (Green)<br>
3. Refatorar mantendo os testes passando (Refactor)<br><br>
<strong>Resultados surpreendentes:</strong><br>
• Bugs em produção caem 60%<br>
• Design emerge naturalmente mais limpo<br>
• Confiança para fazer mudanças aumenta drasticamente<br>
• Documentação viva através dos testes<br><br>
<strong>Próximo passo para consolidar TDD:</strong>`,
    choices: [
      {
        text: "Implementar Continuous Integration",
        next: "xp-continuous-integration",
      },
      { text: "Adicionar Acceptance Tests", next: "xp-acceptance-tests" },
      {
        text: "Refatorar código existente com segurança",
        next: "xp-refactoring",
      },
      { text: "Treinar toda a equipe em TDD", next: "xp-team-training" },
    ],
  },

  "xp-continuous-integration": {
    id: "xp-continuous-integration",
    text: `<strong>Prática: Continuous Integration</strong><br>
Você implementa integração contínua onde cada mudança é integrada e testada automaticamente.<br><br>
<strong>Infraestrutura criada:</strong><br>
• Commits acionam build e testes automaticamente<br>
• Feedback em menos de 10 minutos sobre problemas<br>
• Integração obrigatória múltiplas vezes por dia<br>
• Pipeline que impede deploys quebrados<br><br>
<strong>Transformação radical:</strong><br>
• Conflitos de merge praticamente eliminados<br>
• Confiança total no código na branch principal<br>
• Problemas detectados em minutos, não semanas<br>
• Equipe trabalhando sempre com código atualizado<br><br>
<strong>Como você vai evoluir o CI?</strong>`,
    choices: [
      { text: "Adicionar deploy automático", next: "xp-continuous-deployment" },
      {
        text: "Implementar testes de performance",
        next: "xp-performance-tests",
      },
      { text: "Criar métricas de qualidade", next: "xp-quality-metrics" },
      { text: "Estabelecer políticas de build", next: "xp-build-policies" },
    ],
  },

  "xp-small-releases": {
    id: "xp-small-releases",
    text: `<strong>Prática: Small Releases</strong><br>
Você implementa releases pequenos e frequentes para maximizar feedback do usuário.<br><br>
<strong>Nova cadência estabelecida:</strong><br>
• Releases semanais em vez de mensais<br>
• Cada release entrega valor real ao usuário<br>
• Feedback coletado e incorporado rapidamente<br>
• Riscos reduzidos por mudanças menores<br><br>
<strong>Impacto transformador:</strong><br>
• Usuários veem progresso constante<br>
• Problemas identificados e corrigidos rapidamente<br>
• Moral da equipe melhora com entregas frequentes<br>
• Aprendizado contínuo sobre necessidades reais<br><br>
<strong>Desafio:</strong> Como garantir qualidade com releases frequentes?`,
    choices: [
      { text: "Fortalecer suite de testes automáticos", next: "xp-testing" },
      { text: "Implementar Acceptance Tests", next: "xp-acceptance-tests" },
      {
        text: "Criar processo de release automático",
        next: "xp-continuous-deployment",
      },
      {
        text: "Estabelecer critérios de qualidade",
        next: "xp-quality-criteria",
      },
    ],
  },

  "xp-refactoring": {
    id: "xp-refactoring",
    text: `<strong>Prática: Refactoring</strong><br>
Você implementa refatoração contínua para manter o código limpo e evoluível.<br><br>
<strong>Processo estabelecido:</strong><br>
• Refatoração como parte do desenvolvimento diário<br>
• Melhorias pequenas e constantes<br>
• Testes garantem que funcionalidade não quebra<br>
• Debt técnico endereçado proativamente<br><br>
<strong>Transformação do código:</strong><br>
• Código legado gradualmente modernizado<br>
• Manutenibilidade aumenta dramaticamente<br>
• Velocidade de desenvolvimento cresce com tempo<br>
• Onboarding de novos desenvolvedores acelerado<br><br>
<strong>Próximo passo para sustentabilidade:</strong>`,
    choices: [
      {
        text: "Estabelecer métricas de qualidade de código",
        next: "xp-quality-metrics",
      },
      {
        text: "Criar guidelines de refatoração",
        next: "xp-refactoring-guidelines",
      },
      {
        text: "Implementar code reviews automáticos",
        next: "xp-automated-reviews",
      },
      {
        text: "Treinar equipe em padrões de design",
        next: "xp-design-patterns",
      },
    ],
  },

  "xp-simple-design": {
    id: "xp-simple-design",
    text: `<strong>Prática: Simple Design</strong><br>
Você implementa os princípios de design simples: o código deve funcionar, expressar sua intenção, não ter duplicação e ter o mínimo de elementos.<br><br>
<strong>Princípios aplicados:</strong><br>
• Passes all tests (funciona corretamente)<br>
• Reveals intention (expressa claramente o propósito)<br>
• No duplication (elimina redundância)<br>
• Fewest elements (mínimo de complexidade)<br><br>
<strong>Resultados obtidos:</strong><br>
• Arquitetura emerge naturalmente<br>
• Código mais fácil de entender e modificar<br>
• Menos bugs por simplicidade<br>
• Desenvolvimento mais rápido e sustentável<br><br>
<strong>Como você vai manter esse design simples?</strong>`,
    choices: [
      {
        text: "Implementar code reviews focados em simplicidade",
        next: "xp-simple-reviews",
      },
      { text: "Criar métricas de complexidade", next: "xp-complexity-metrics" },
      {
        text: "Treinar equipe em princípios SOLID",
        next: "xp-solid-principles",
      },
      {
        text: "Estabelecer padrões de arquitetura",
        next: "xp-architecture-patterns",
      },
    ],
  },

  // === PRÁTICAS AVANÇADAS ===
  "xp-acceptance-tests": {
    id: "xp-acceptance-tests",
    text: `<strong>Prática: Acceptance Tests</strong><br>
Você implementa testes de aceitação escritos pelo cliente para definir quando uma funcionalidade está pronta.<br><br>
<strong>Processo implementado:</strong><br>
• Cliente escreve cenários de teste em linguagem natural<br>
• Testes automatizados baseados nesses cenários<br>
• Funcionalidade só é considerada "pronta" quando passa nos testes<br>
• Testes servem como documentação viva dos requisitos<br><br>
<strong>Benefícios observados:</strong><br>
• Eliminação de ambiguidade nos requisitos<br>
• Definição clara de "pronto"<br>
• Regressão automática de funcionalidades<br>
• Comunicação melhorada entre negócio e desenvolvimento<br><br>
<strong>Próximo passo:</strong>`,
    choices: [
      {
        text: "Automatizar execução dos acceptance tests",
        next: "xp-test-automation",
      },
      { text: "Integrar com CI pipeline", next: "xp-continuous-integration" },
      {
        text: "Treinar cliente em escrita de testes",
        next: "xp-customer-training",
      },
      { text: "Criar relatórios de progresso", next: "xp-progress-reports" },
    ],
  },

  "xp-workspace": {
    id: "xp-workspace",
    text: `<strong>Prática: Whole Team Workspace</strong><br>
Você redesenha o espaço de trabalho para facilitar comunicação e colaboração.<br><br>
<strong>Mudanças implementadas:</strong><br>
• Espaço aberto com fácil comunicação<br>
• Whiteboards disponíveis para discussões<br>
• Estações de trabalho configuradas para pair programming<br>
• Área comum para reuniões rápidas<br>
• Cliente sentado junto com a equipe<br><br>
<strong>Impacto na dinâmica:</strong><br>
• Comunicação informal aumenta drasticamente<br>
• Problemas resolvidos em conversas rápidas<br>
• Energia da equipe fica mais alta<br>
• Colaboração acontece naturalmente<br><br>
<strong>Como você vai otimizar ainda mais?</strong>`,
    choices: [
      {
        text: "Implementar informative workspace",
        next: "xp-informative-workspace",
      },
      {
        text: "Criar áreas específicas para atividades",
        next: "xp-activity-zones",
      },
      {
        text: "Estabelecer etiqueta de colaboração",
        next: "xp-collaboration-etiquette",
      },
      { text: "Medir efetividade do espaço", next: "xp-workspace-metrics" },
    ],
  },

  // === SITUAÇÕES DE ESCOLHA CRÍTICA ===
  "xp-scope-management": {
    id: "xp-scope-management",
    text: `<strong>Gerenciamento de Escopo</strong><br>
O cliente quer adicionar 15 novas funcionalidades "urgentes" ao projeto.<br><br>
<strong>Situação crítica:</strong><br>
• Pressão para entregar tudo ao mesmo tempo<br>
• Risco de comprometer qualidade<br>
• Equipe pode ficar sobrecarregada<br>
• Prazo original pode ser comprometido<br><br>
<strong>Princípios XP em conflito:</strong><br>
• Valor ao cliente vs. Simplicidade<br>
• Comunicação vs. Sustentabilidade<br><br>
<strong>Como você vai resolver isso?</strong>`,
    choices: [
      { text: "Usar Planning Game para priorizar", next: "xp-planning-game" },
      {
        text: "Propor releases menores e mais frequentes",
        next: "xp-small-releases",
      },
      { text: "Explicar o custo da complexidade", next: "xp-complexity-cost" },
      { text: "Aceitar tudo e trabalhar overtime", next: "xp-overtime-fail" },
    ],
  },

  "xp-overtime-fail": {
    id: "xp-overtime-fail",
    text: `<strong>Overtime - Caminho Perigoso</strong><br>
Você decide aceitar todas as funcionalidades e trabalhar overtime para entregar.<br><br>
<strong>Consequências devastadoras:</strong><br>
• Qualidade despenca com equipe cansada<br>
• Bugs críticos em produção multiplicam<br>
• Moral da equipe despenca<br>
• Práticas XP são abandonadas sob pressão<br>
• Projeto entra em crise<br><br>
<strong>Lição aprendida:</strong> XP valoriza ritmo sustentável. Overtime constante é um sinal de problemas no processo, não solução.`,
    explanation: `<strong>Princípio XP Violado:</strong> Sustainable Pace<br><br>
XP defende que trabalho de qualidade requer equipe descansada e motivada. Overtime ocasional pode ser necessário, mas como prática constante destrói a produtividade e qualidade.`,
    references: [
      "Extreme Programming Explained - Kent Beck",
      "http://www.extremeprogramming.org",
    ],
    choices: [{ text: "Recomeçar com sabedoria", next: "xp-role" }],
  },

  "xp-complexity-cost": {
    id: "xp-complexity-cost",
    text: `<strong>Educando sobre Custo da Complexidade</strong><br>
Você apresenta ao cliente o custo real da complexidade usando dados concretos.<br><br>
<strong>Dados apresentados:</strong><br>
• Cada funcionalidade adicional aumenta em 15% o tempo de desenvolvimento das próximas<br>
• Bugs crescem exponencialmente com complexidade<br>
• Manutenção fica mais cara e lenta<br>
• Risco de atrasos aumenta drasticamente<br><br>
<strong>Proposta:</strong> Entregar as 3 funcionalidades de maior valor primeiro, avaliar o impacto, e então decidir sobre as próximas.<br><br>
<strong>Reação do cliente:</strong>`,
    choices: [
      { text: "Cliente aceita e prioriza", next: "xp-planning-game" },
      { text: "Cliente insiste em tudo", next: "xp-stakeholder-negotiation" },
      { text: "Cliente quer ver prova de conceito", next: "xp-prototype" },
      {
        text: "Cliente questiona capacidade da equipe",
        next: "xp-team-credibility",
      },
    ],
  },

  // === MÉTRICAS E MELHORIA ===
  "xp-quality-metrics": {
    id: "xp-quality-metrics",
    text: `<strong>Métricas de Qualidade</strong><br>
Você implementa métricas para demonstrar o valor das práticas XP.<br><br>
<strong>Métricas coletadas:</strong><br>
• Bugs em produção: redução de 70%<br>
• Tempo de desenvolvimento: 30% mais rápido<br>
• Satisfação do cliente: aumentou 85%<br>
• Cobertura de testes: 95%<br>
• Tempo de integração: de 2 horas para 10 minutos<br><br>
<strong>Impacto das métricas:</strong><br>
• Gestão apoia investimento em práticas XP<br>
• Equipe fica motivada vendo progresso<br>
• Cliente entende valor das práticas técnicas<br><br>
<strong>Próximo passo:</strong>`,
    choices: [
      { text: "Compartilhar métricas com outras equipes", next: "xp-scaling" },
      { text: "Criar dashboard de métricas", next: "xp-dashboard" },
      { text: "Estabelecer metas de melhoria", next: "xp-improvement-goals" },
      { text: "Celebrar conquistas da equipe", next: "xp-celebration" },
    ],
  },

  "xp-team-training": {
    id: "xp-team-training",
    text: `<strong>Treinamento da Equipe</strong><br>
Você organiza treinamentos para solidificar as práticas XP em toda a equipe.<br><br>
<strong>Programa de treinamento:</strong><br>
• Workshops práticos de TDD<br>
• Sessões de pair programming<br>
• Treinamento em refatoração<br>
• Princípios de design simples<br>
• Comunicação efetiva com cliente<br><br>
<strong>Resultados do treinamento:</strong><br>
• Equipe trabalha com mais coesão<br>
• Práticas aplicadas consistentemente<br>
• Novos membros onboarded rapidamente<br>
• Cultura de melhoria contínua estabelecida<br><br>
<strong>Próximo passo:</strong>`,
    choices: [
      { text: "Criar programa de mentoria interna", next: "xp-mentorship" },
      { text: "Estabelecer comunidade de prática", next: "xp-community" },
      { text: "Documentar lições aprendidas", next: "xp-knowledge-sharing" },
      { text: "Avaliar progresso da equipe", next: "xp-team-assessment" },
    ],
  },

  // === SCALING E EVOLUÇÃO ===
  "xp-scaling": {
    id: "xp-scaling",
    text: `<strong>Scaling XP</strong><br>
Outras equipes querem adotar suas práticas XP bem-sucedidas.<br><br>
<strong>Desafios do scaling:</strong><br>
• Cada equipe tem contexto diferente<br>
• Resistência cultural em algumas áreas<br>
• Necessidade de adaptar práticas<br>
• Manter qualidade durante expansão<br><br>
<strong>Estratégia de scaling:</strong><br>
• Começar com equipes mais abertas<br>
• Adaptar práticas ao contexto específico<br>
• Criar rede de coaches internos<br>
• Medir resultados para demonstrar valor<br><br>
<strong>Próxima ação:</strong>`,
    choices: [
      { text: "Treinar coaches internos", next: "xp-coach-training" },
      { text: "Criar toolkit de práticas XP", next: "xp-toolkit" },
      { text: "Estabelecer comunidade XP", next: "xp-community" },
      {
        text: "Focar em melhorar equipe atual",
        next: "xp-continuous-improvement",
      },
    ],
  },

  // === CONCLUSÕES ===
  "xp-celebration": {
    id: "xp-celebration",
    text: `<strong>Celebrando o Sucesso</strong><br>
Você para para celebrar as conquistas incríveis da equipe com XP.<br><br>
<strong>Transformação alcançada:</strong><br>
• Equipe altamente produtiva e motivada<br>
• Cliente extremamente satisfeito<br>
• Código de alta qualidade e sustentável<br>
• Cultura de melhoria contínua<br>
• Práticas técnicas sólidas<br><br>
    <strong>Reflexão:</strong> XP não é apenas sobre práticas técnicas, mas sobre criar um ambiente onde pessoas podem fazer seu melhor trabalho.<br><br>
<strong>O que você quer fazer agora?</strong>`,
    choices: [
      { text: "Compartilhar história de sucesso", next: "xp-success-story" },
      { text: "Planejar próximos desafios", next: "xp-next-challenges" },
      { text: "Mentorear outras equipes", next: "xp-mentorship" },
      { text: "Concluir jornada XP", next: "xp-conclusion" },
    ],
  },

  "xp-success-story": {
    id: "xp-success-story",
    text: `<strong>Compartilhando a História de Sucesso</strong><br>
Você documenta e compartilha a jornada de transformação com XP.<br><br>
<strong>História documentada:</strong><br>
• De 40% de usuários afetados por bugs para menos de 5%<br>
• De integrações problemáticas para CI perfeito<br>
• De equipe desmotivada para alta performance<br>
• De entregas atrasadas para releases semanais<br>
• De cliente insatisfeito para parceiro estratégico<br><br>
<strong>Impacto da história:</strong><br>
• Outras equipes se inspiram<br>
• Gestão investe mais em qualidade<br>
• Cultura organizacional melhora<br><br>
<strong>Próximo passo:</strong>`,
    choices: [
      { text: "Escrever artigo técnico", next: "xp-knowledge-sharing" },
      { text: "Apresentar em conferência", next: "xp-conference" },
      { text: "Mentorear outras equipes", next: "xp-mentorship" },
      { text: "Continuar evoluindo", next: "xp-continuous-improvement" },
    ],
  },

  "xp-next-challenges": {
    id: "xp-next-challenges",
    text: `<strong>Próximos Desafios</strong><br>
Com XP consolidado, você identifica novos desafios para evoluir ainda mais.<br><br>
<strong>Desafios identificados:</strong><br>
• Integração com equipes de UX/UI<br>
• Práticas XP para sistemas distribuídos<br>
• Sustentabilidade em longo prazo<br>
• Evolução da arquitetura com crescimento<br>
• Práticas XP para DevOps<br><br>
<strong>Oportunidades:</strong><br>
• Expandir XP para outras disciplinas<br>
• Inovar em práticas técnicas<br>
• Contribuir para comunidade XP<br><br>
<strong>Qual desafio você quer abordar?</strong>`,
    choices: [
      { text: "Integrar XP com UX Design", next: "xp-ux-integration" },
      { text: "Adaptar XP para microservices", next: "xp-microservices" },
      { text: "Focar em sustentabilidade", next: "xp-sustainability" },
      { text: "Contribuir para comunidade", next: "xp-community-contribution" },
    ],
  },

  "xp-mentorship": {
    id: "xp-mentorship",
    text: `<strong>Programa de Mentoria</strong><br>
Você estabelece um programa para mentorear outras equipes em XP.<br><br>
<strong>Estrutura do programa:</strong><br>
• Sessões semanais de coaching<br>
• Pair programming com outras equipes<br>
• Revisão de práticas e métricas<br>
• Suporte na resolução de impedimentos<br>
• Workshops práticos regulares<br><br>
<strong>Primeiros resultados:</strong><br>
• 3 equipes começaram TDD<br>
• 2 equipes implementaram CI<br>
• Cultura de qualidade se espalhando<br>
• Rede de coaches internos crescendo<br><br>
<strong>Como expandir o programa?</strong>`,
    choices: [
      { text: "Criar certificação interna XP", next: "xp-certification" },
      { text: "Estabelecer comunidade de prática", next: "xp-community" },
      { text: "Desenvolver ferramentas de suporte", next: "xp-toolkit" },
      {
        text: "Avaliar impacto organizacional",
        next: "xp-organizational-impact",
      },
    ],
  },

  "xp-conclusion": {
    id: "xp-conclusion",
    text: `<strong>Conclusão da Jornada XP</strong><br>
Você completou com sucesso a implementação de Extreme Programming!<br><br>
<strong>Conquistas alcançadas:</strong><br>
✓ Implementou os 5 valores fundamentais (Comunicação, Simplicidade, Feedback, Coragem, Respeito)<br>
✓ Dominou as 12 práticas principais do XP<br>
✓ Transformou a cultura da equipe<br>
✓ Entregou software de alta qualidade<br>
✓ Estabeleceu relacionamento de confiança com cliente<br>
✓ Criou processo sustentável e melhoramento contínuo<br><br>
<strong>Impacto Final:</strong><br>
• Produtividade aumentou 300%<br>
• Satisfação do cliente: 95%<br>
• Bugs em produção: redução de 85%<br>
• Moral da equipe: excelente<br>
• Sustentabilidade: garantida<br><br>
<strong>Você se tornou um verdadeiro praticante de XP!</strong>`,
    explanation: `<strong>Parabéns!</strong><br><br>
Você experimentou como Extreme Programming pode transformar radicalmente o desenvolvimento de software. XP não é apenas um conjunto de práticas técnicas, mas uma filosofia completa que coloca pessoas, comunicação e qualidade no centro do processo.<br><br>
<strong>Princípios-chave aprendidos:</strong><br>
• Feedback rápido é essencial para qualidade<br>
• Simplicidade reduz complexidade e acelera desenvolvimento<br>
• Comunicação efetiva previne problemas<br>
• Coragem permite mudanças necessárias<br>
• Práticas técnicas sustentam alta produtividade<br><br>
Continue praticando e evoluindo suas habilidades em XP!`,
    references: [
      "Extreme Programming Explained - Kent Beck",
      "Planning Extreme Programming - Kent Beck & Martin Fowler",
      "http://www.extremeprogramming.org",
    ],
    choices: [
      { text: "Explorar cenário avançado", next: "xp-advanced-scenario" },
      { text: "Recomeçar jornada", next: "xp-role" },
    ],
  },

  // === CENÁRIOS COMPLEMENTARES ===
  "xp-advanced-scenario": {
    id: "xp-advanced-scenario",
    text: `<strong>Cenário Avançado: XP em Escala</strong><br>
Você agora lidera uma iniciativa para implementar XP em uma organização de 200+ desenvolvedores.<br><br>
<strong>Novos desafios:</strong><br>
• Múltiplas equipes interdependentes<br>
• Sistemas legados críticos<br>
• Regulamentações de compliance<br>
• Diferentes culturas organizacionais<br>
• Pressão por padronização vs. autonomia<br><br>
<strong>Sua estratégia:</strong>`,
    choices: [
      {
        text: "Implementação gradual por ondas",
        next: "xp-wave-implementation",
      },
      { text: "Criar centros de excelência", next: "xp-excellence-centers" },
      {
        text: "Adaptar práticas para compliance",
        next: "xp-compliance-adaptation",
      },
      { text: "Focar em mudança cultural", next: "xp-cultural-change" },
    ],
  },

  "xp-wave-implementation": {
    id: "xp-wave-implementation",
    text: `<strong>Implementação em Ondas</strong><br>
Você planeja rollout gradual de XP em ondas sucessivas.<br><br>
<strong>Estratégia de ondas:</strong><br>
• Onda 1: Equipes mais receptivas (10 equipes)<br>
• Onda 2: Equipes com sistemas críticos (15 equipes)<br>
• Onda 3: Equipes com maior resistência (20 equipes)<br>
• Cada onda aprende com a anterior<br><br>
<strong>Resultados da Onda 1:</strong><br>
• 80% das equipes adotaram TDD<br>
• CI implementado em todas<br>
• 60% redução em bugs<br>
• Casos de sucesso documentados<br><br>
<strong>Preparação para Onda 2:</strong>`,
    choices: [
      {
        text: "Treinar coaches para sistemas críticos",
        next: "xp-critical-systems-coaching",
      },
      {
        text: "Adaptar práticas para compliance",
        next: "xp-compliance-adaptation",
      },
      { text: "Criar toolkit especializado", next: "xp-specialized-toolkit" },
      { text: "Estabelecer métricas de sucesso", next: "xp-success-metrics" },
    ],
  },

  "xp-cultural-change": {
    id: "xp-cultural-change",
    text: `<strong>Transformação Cultural</strong><br>
Você foca na mudança cultural profunda para sustentar XP em longo prazo.<br><br>
<strong>Iniciativas culturais:</strong><br>
• Liderança pelo exemplo<br>
• Celebração de falhas como aprendizado<br>
• Reconhecimento de colaboração<br>
• Investimento em pessoas<br>
• Transparência radical<br><br>
<strong>Mudanças observadas:</strong><br>
• Psicologia de segurança aumenta<br>
• Inovação e experimentação crescem<br>
• Colaboração entre equipes melhora<br>
• Retenção de talentos aumenta<br><br>
<strong>Resultado final:</strong> Organização se torna referência em agilidade e qualidade.<br><br>
<strong>Sua jornada XP está completa!</strong>`,
    explanation: `<strong>Transformação Completa!</strong><br><br>
Você demonstrou como XP pode transformar não apenas equipes, mas organizações inteiras. A combinação de práticas técnicas sólidas com valores humanos fundamentais cria um ambiente onde software excepcional é desenvolvido de forma sustentável.<br><br>
<strong>Legado criado:</strong><br>
• Cultura de excelência técnica<br>
• Processos sustentáveis<br>
• Pessoas empoderadas<br>
• Clientes satisfeitos<br>
• Negócio competitivo<br><br>
Você é agora um líder de transformação ágil!`,
    references: [
      "Extreme Programming Explained - Kent Beck",
      "The Art of Agile Development - James Shore",
      "http://www.extremeprogramming.org",
    ],
    choices: [{ text: "Começar nova jornada", next: "xp-role" }],
  },

  // === PRÁTICAS TÉCNICAS COMPLEMENTARES ===
  "xp-testing": {
    id: "xp-testing",
    text: `<strong>Estratégia de Testes Abrangente</strong><br>
Você implementa uma estratégia completa de testes automáticos para garantir qualidade.<br><br>
<strong>Pirâmide de testes implementada:</strong><br>
• Testes unitários (70%): TDD garantindo design<br>
• Testes de integração (20%): APIs e componentes<br>
• Testes end-to-end (10%): Fluxos críticos<br>
• Testes de aceitação: Critérios de negócio<br><br>
<strong>Ferramentas e práticas:</strong><br>
• Execução paralela para velocidade<br>
• Testes como documentação viva<br>
• Cobertura de código monitorada<br>
• Testes de regressão automáticos<br><br>
<strong>Próxima evolução:</strong>`,
    choices: [
      {
        text: "Implementar testes de performance",
        next: "xp-performance-tests",
      },
      { text: "Adicionar testes de segurança", next: "xp-security-tests" },
      {
        text: "Criar testes de acessibilidade",
        next: "xp-accessibility-tests",
      },
      { text: "Otimizar velocidade de execução", next: "xp-test-optimization" },
    ],
  },

  "xp-continuous-deployment": {
    id: "xp-continuous-deployment",
    text: `<strong>Continuous Deployment</strong><br>
Você evolui CI para CD, automatizando todo o pipeline até produção.<br><br>
<strong>Pipeline automatizado:</strong><br>
• Commit → Build → Test → Deploy → Monitor<br>
• Deploys múltiplos por dia<br>
• Rollback automático em caso de problemas<br>
• Feature flags para controle de release<br>
• Monitoramento contínuo de saúde<br><br>
<strong>Benefícios alcançados:</strong><br>
• Time-to-market reduzido drasticamente<br>
• Feedback de produção em minutos<br>
• Riscos de deploy eliminados<br>
• Confiança total no processo<br><br>
<strong>Próximo passo:</strong>`,
    choices: [
      { text: "Implementar canary releases", next: "xp-canary-releases" },
      { text: "Adicionar blue-green deployment", next: "xp-blue-green" },
      { text: "Criar observabilidade avançada", next: "xp-observability" },
      {
        text: "Otimizar performance do pipeline",
        next: "xp-pipeline-optimization",
      },
    ],
  },

  // === FALHAS EDUCATIVAS ===
  "xp-anti-pattern-fail": {
    id: "xp-anti-pattern-fail",
    text: `<strong>Armadilha: Mini-Waterfall</strong><br>
Você tenta aplicar XP mas mantém fases sequenciais de análise, desenvolvimento e testes.<br><br>
<strong>Problemas resultantes:</strong><br>
• Feedback atrasado<br>
• Integração problemática<br>
• Qualidade comprometida<br>
• Valor para cliente reduzido<br><br>
<strong>Erro fundamental:</strong> XP requer integração contínua de todas as atividades, não fases sequenciais.`,
    explanation: `<strong>Anti-padrão Identificado:</strong> Mini-Waterfall<br><br>
XP funciona através da integração contínua de análise, design, codificação e testes. Separar essas atividades em fases perde os benefícios fundamentais do feedback rápido e melhoria contínua.`,
    references: ["Extreme Programming Explained - Kent Beck"],
    choices: [{ text: "Tentar novamente com integração", next: "xp-feedback" }],
  },

  "xp-solo-hero-fail": {
    id: "xp-solo-hero-fail",
    text: `<strong>Armadilha: Herói Solo</strong><br>
Você tenta implementar XP trabalhando sozinho e sendo o "expert" que resolve tudo.<br><br>
<strong>Consequências:</strong><br>
• Conhecimento concentrado<br>
• Gargalo de desenvolvimento<br>
• Equipe desmotivada<br>
• Burnout pessoal<br>
• Falha na sustentabilidade<br><br>
<strong>Erro fundamental:</strong> XP é sobre empoderar a equipe inteira, não criar heróis individuais.`,
    explanation: `<strong>Anti-padrão Identificado:</strong> Hero Programming<br><br>
XP valoriza collective code ownership e shared responsibility. Concentrar conhecimento e responsabilidade em uma pessoa vai contra os valores fundamentais de comunicação e respeito.`,
    references: ["Extreme Programming Explained - Kent Beck"],
    choices: [
      { text: "Recomeçar focando na equipe", next: "xp-pair-programming" },
    ],
  },

  // === NODOS FINAIS ADICIONAIS ===
  "xp-yagni": {
    id: "xp-yagni",
    text: `<strong>Princípio: YAGNI (You Aren't Gonna Need It)</strong><br>
Você implementa rigorosamente o princípio de não adicionar funcionalidades até que sejam realmente necessárias.<br><br>
<strong>Práticas implementadas:</strong><br>
• Resistir à tentação de "future-proofing"<br>
• Remover código não utilizado regularmente<br>
• Questionar cada feature antes de implementar<br>
• Focar apenas nos requisitos atuais<br><br>
<strong>Benefícios:</strong><br>
• Código mais simples e maintível<br>
• Desenvolvimento mais rápido<br>
• Menos bugs por menor complexidade<br>
• Foco real nas necessidades do usuário`,
    choices: [
      { text: "Medir impacto na velocidade", next: "xp-velocity-measurement" },
      { text: "Treinar equipe em YAGNI", next: "xp-yagni-training" },
      { text: "Aplicar em arquitetura", next: "xp-simple-design" },
      { text: "Documentar decisões", next: "xp-decision-log" },
    ],
  },

  "xp-sustainable-pace": {
    id: "xp-sustainable-pace",
    text: `<strong>Prática: Sustainable Pace</strong><br>
Você estabelece um ritmo de trabalho sustentável para toda a equipe.<br><br>
<strong>Políticas implementadas:</strong><br>
• 40 horas por semana como padrão<br>
• Overtime ocasional, nunca sistemático<br>
• Descanso obrigatório após sprints intensos<br>
• Foco em produtividade, não horas trabalhadas<br><br>
<strong>Resultados surpreendentes:</strong><br>
• Produtividade aumenta com menos horas<br>
• Qualidade melhora significativamente<br>
• Criatividade e inovação florescem<br>
• Retenção de talentos aumenta<br>
• Equipe mais feliz e engajada`,
    choices: [
      {
        text: "Medir produtividade vs. horas",
        next: "xp-productivity-metrics",
      },
      {
        text: "Estabelecer políticas de bem-estar",
        next: "xp-wellbeing-policies",
      },
      {
        text: "Treinar gestão em sustainable pace",
        next: "xp-management-training",
      },
      {
        text: "Continuar evolução das práticas",
        next: "xp-continuous-improvement",
      },
    ],
  },
};
