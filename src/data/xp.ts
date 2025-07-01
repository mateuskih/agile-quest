

import { StoryGraph } from "../types/game";

export const xp: StoryGraph = {
  // === INÍCIO DA JORNADA XP ===
  "xp-role": {
    id: "xp-role",
    text: `<strong>Bem-vindo ao Extreme Programming!</strong><br><br>
Você é um <strong>Desenvolvedor Sênior</strong> na TechCorp, uma empresa de software que desenvolve sistemas críticos para bancos. A empresa está enfrentando uma crise de qualidade que pode resultar em perda de contratos milionários.<br><br>
<strong>Situação crítica atual:</strong><br>
• 40% dos usuários são afetados por bugs críticos mensalmente<br>
• Última integração de código levou 3 dias para ser corrigida<br>
• Cliente principal (Banco Central) ameaçou cancelar contrato<br>
• Equipe de 8 desenvolvedores trabalha em silos isolados<br>
• Entregas atrasam em média 3 semanas<br>
• Documentação desatualizada há 6 meses<br>
• Testes manuais levam 2 semanas para cada release<br><br>
<strong>Sua missão:</strong> Implementar Extreme Programming para salvar o projeto e transformar a equipe em uma máquina de entrega de alta qualidade.<br><br>
<strong>Qual valor fundamental do XP você implementará primeiro para causar maior impacto?</strong>`,
    choices: [
      {
        text: "Comunicação - Quebrar silos e aproximar cliente da equipe",
        next: "xp-communication",
      },
      {
        text: "Simplicidade - Eliminar complexidade desnecessária do código",
        next: "xp-simplicity",
      },
      {
        text: "Feedback - Criar ciclos rápidos de validação e correção",
        next: "xp-feedback",
      },
      {
        text: "Coragem - Enfrentar problemas técnicos e organizacionais",
        next: "xp-courage",
      },
    ],
  },

  // === COMUNICAÇÃO ===
  "xp-communication": {
    id: "xp-communication",
    text: `<strong>Valor: Comunicação</strong><br><br>
Você decide atacar o problema principal: falta de comunicação. Na TechCorp, desenvolvedores trabalham isolados, o cliente só aparece para reclamar, e a equipe não se entende.<br><br>
<strong>Primeira ação:</strong> Você convoca uma reunião com toda a equipe e o representante do Banco Central.<br><br>
<strong>Descobertas chocantes:</strong><br>
• O cliente não sabia que várias funcionalidades já estavam prontas<br>
• Desenvolvedores estavam implementando requisitos desatualizados<br>
• 30% do código desenvolvido nunca foi usado em produção<br>
• Equipe não sabia das prioridades reais do negócio<br><br>
<strong>Mudanças implementadas:</strong><br>
• Remoção de todas as barreiras entre desenvolvedores e cliente<br>
• Conversas diretas substituem emails e documentos<br>
• Espaço de trabalho reorganizado para facilitar colaboração<br>
• Reuniões diárias de 15 minutos para alinhamento<br><br>
<strong>Resultado em 1 semana:</strong> Primeira vez em meses que toda a equipe sabe exatamente o que precisa ser feito.<br><br>
<strong>Como você vai consolidar essa comunicação?</strong>`,
    choices: [
      {
        text: "Trazer o cliente para trabalhar fisicamente com a equipe",
        next: "xp-onsite-customer",
      },
      {
        text: "Implementar Planning Game para priorizar colaborativamente",
        next: "xp-planning-game",
      },
      {
        text: "Estabelecer Pair Programming para comunicação técnica",
        next: "xp-pair-programming",
      },
      {
        text: "Criar espaço de trabalho totalmente colaborativo",
        next: "xp-workspace",
      },
    ],
  },

  // === SIMPLICIDADE ===
  "xp-simplicity": {
    id: "xp-simplicity",
    text: `<strong>Valor: Simplicidade</strong><br><br>
Você decide atacar a complexidade desnecessária que está matando a produtividade. O sistema da TechCorp virou um monstro de 500.000 linhas de código, onde mudar uma linha pode quebrar 10 funcionalidades.<br><br>
<strong>Auditoria de complexidade:</strong><br>
• 60% das classes têm mais de 1000 linhas<br>
• Arquitetura tem 15 camadas "para flexibilidade futura"<br>
• Funcionalidades "caso alguém precise um dia" nunca foram usadas<br>
• Configurações para cenários que nunca aconteceram<br><br>
<strong>Princípio aplicado:</strong> "Faça a coisa mais simples que funciona"<br><br>
<strong>Ações drásticas tomadas:</strong><br>
• Remoção de 40% do código não utilizado<br>
• Simplificação da arquitetura para 3 camadas<br>
• Eliminação de funcionalidades especulativas<br>
• Foco exclusivo nos requisitos atuais e reais<br><br>
<strong>Impacto imediato:</strong><br>
• Tempo de build reduzido de 30 para 5 minutos<br>
• Novos desenvolvedores entendem o código em 2 dias<br>
• Bugs diminuem 50% por menor complexidade<br><br>
<strong>Como você vai manter essa simplicidade conquistada?</strong>`,
    choices: [
      { text: "Implementar refatoração contínua", next: "xp-refactoring" },
      { text: "Adotar Simple Design como disciplina", next: "xp-simple-design" },
      {
        text: "Estabelecer YAGNI como regra fundamental",
        next: "xp-yagni",
      },
      { text: "Criar testes para proteger simplicidade", next: "xp-testing" },
    ],
  },

  // === FEEDBACK ===
  "xp-feedback": {
    id: "xp-feedback",
    text: `<strong>Valor: Feedback</strong><br><br>
Você decide resolver o problema do feedback tardio. Na TechCorp, problemas são descobertos apenas quando chegam ao cliente final, geralmente semanas após serem criados.<br><br>
<strong>Situação anterior:</strong><br>
• Bugs descobertos apenas em produção<br>
• Feedback do cliente apenas em reuniões mensais<br>
• Testes manuais levam 2 semanas<br>
• Integração problemática descoberta apenas no final<br><br>
<strong>Nova estratégia de feedback:</strong><br>
• Feedback técnico: testes automáticos em cada mudança<br>
• Feedback de negócio: cliente vê progresso semanalmente<br>
• Feedback de integração: CI/CD com feedback em minutos<br>
• Feedback de qualidade: métricas de código em tempo real<br><br>
<strong>Primeiros resultados (2 semanas):</strong><br>
• Bug crítico detectado em 5 minutos em vez de 2 semanas<br>
• Cliente ajustou prioridades 3 vezes baseado no que viu<br>
• Equipe corrigiu 12 problemas antes que virassem bugs<br>
• Confiança da equipe aumentou dramaticamente<br><br>
<strong>Qual tipo de feedback você quer fortalecer primeiro?</strong>`,
    choices: [
      {
        text: "Continuous Integration para feedback técnico instantâneo",
        next: "xp-continuous-integration",
      },
      {
        text: "Small Releases para feedback constante do usuário",
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
    text: `<strong>Valor: Coragem</strong><br><br>
Você decide que é hora de ter coragem para fazer as mudanças difíceis que todos sabem que são necessárias, mas ninguém quer enfrentar.<br><br>
<strong>Problemas que exigem coragem:</strong><br>
• Módulo de segurança legado que ninguém quer tocar<br>
• Arquitetura que complica tudo mas "sempre foi assim"<br>
• Funcionalidades problemáticas que o cliente "ama"<br>
• Práticas de desenvolvimento que não funcionam mais<br><br>
<strong>Decisões corajosas tomadas:</strong><br>
• Reescrita completa do módulo de segurança crítico<br>
• Remoção de funcionalidades complexas que causam 80% dos bugs<br>
• Confronto direto com stakeholders sobre mudanças necessárias<br>
• Implementação de práticas que outros consideravam "muito arriscadas"<br><br>
<strong>Suporte para coragem:</strong><br>
• Testes abrangentes que permitem mudanças com segurança<br>
• Feedback rápido que detecta problemas imediatamente<br>
• Equipe unida que apoia decisões difíceis<br>
• Métricas que provam o valor das mudanças<br><br>
<strong>Resultado em 3 semanas:</strong> Pela primeira vez em anos, a equipe se sente confiante para fazer mudanças significativas.<br><br>
<strong>Onde você vai aplicar coragem primeiro?</strong>`,
    choices: [
      { text: "Refatorar o código legado mais crítico", next: "xp-refactoring" },
      {
        text: "Implementar arquitetura radicalmente mais simples",
        next: "xp-simple-design",
      },
      { text: "Remover funcionalidades que só causam problemas", next: "xp-yagni" },
      {
        text: "Adotar práticas técnicas que assustam a gestão",
        next: "xp-technical-practices",
      },
    ],
  },

  // === PRÁTICAS FUNDAMENTAIS ===
  "xp-onsite-customer": {
    id: "xp-onsite-customer",
    text: `<strong>Prática: On-Site Customer</strong><br><br>
Você consegue convencer Marina, a analista de negócios do Banco Central, a trabalhar 3 dias por semana no escritório da TechCorp, sentada literalmente ao lado da equipe de desenvolvimento.<br><br>
<strong>Transformação da dinâmica:</strong><br>
• <strong>Antes:</strong> "Preciso mandar email para o cliente e esperar resposta"<br>
• <strong>Agora:</strong> "Marina, essa validação está correta?" - resposta em 30 segundos<br><br>
<strong>Casos reais observados:</strong><br>
• <strong>Segunda-feira:</strong> Marina vê desenvolvedores implementando tela de login e sugere mudança que economiza 2 dias de trabalho<br>
• <strong>Terça-feira:</strong> Bug de cálculo detectado em 5 minutos, não em 2 semanas<br>
• <strong>Quarta-feira:</strong> Prioridades ajustadas 3 vezes baseadas no que Marina via sendo desenvolvido<br>
• <strong>Quinta-feira:</strong> Funcionalidade "crítica" descartada quando Marina viu que não agregava valor<br><br>
<strong>Métricas impressionantes:</strong><br>
• Tempo de esclarecimento de dúvidas: de 2 dias para 2 minutos<br>
• Reuniões de alinhamento: redução de 80%<br>
• Retrabalho por requisitos mal entendidos: eliminado<br>
• Satisfação da equipe: aumentou 90%<br><br>
<strong>Desafio emergente:</strong> Marina quer adicionar 10 funcionalidades novas que acabou de imaginar vendo o sistema funcionar.<br><br>
<strong>Como você vai gerenciar essa explosão de ideias?</strong>`,
    choices: [
      {
        text: "Implementar Planning Game para priorizar sistematicamente",
        next: "xp-planning-game",
      },
      {
        text: "Criar releases menores para validar ideias rapidamente",
        next: "xp-small-releases",
      },
      { text: "Explicar o valor da simplicidade vs. complexidade", next: "xp-simplicity" },
      { text: "Demonstrar riscos de scope creep com dados", next: "xp-scope-management" },
    ],
  },

  "xp-planning-game": {
    id: "xp-planning-game",
    text: `<strong>Prática: Planning Game</strong><br><br>
Você implementa o Planning Game para transformar o caos de requisitos em um processo colaborativo e transparente entre negócio e desenvolvimento.<br><br>
<strong>Sessão de Planning Game - Primeira experiência:</strong><br>
• <strong>9h00:</strong> Marina (cliente) traz 15 user stories escritas em post-its<br>
• <strong>9h30:</strong> Equipe técnica estima esforço usando planning poker<br>
• <strong>10h00:</strong> Discussão intensa sobre "Relatório Executivo Completo" (estimado em 3 semanas)<br>
• <strong>10h15:</strong> Marina percebe que pode ter 80% do valor em 3 dias com versão simplificada<br>
• <strong>10h30:</strong> Repriorização total baseada em valor vs. custo<br><br>
<strong>Resultado da primeira iteração (2 semanas):</strong><br>
• 5 user stories entregues e funcionando em produção<br>
• 3 user stories descartadas pelo próprio cliente<br>
• 2 user stories divididas em partes menores<br>
• 100% das funcionalidades entregues foram realmente usadas<br><br>
<strong>Mudança de mindset observada:</strong><br>
• <strong>Antes:</strong> "Precisamos de tudo que está no documento"<br>
• <strong>Agora:</strong> "Qual é o menor conjunto que entrega mais valor?"<br><br>
<strong>Impacto no Banco Central:</strong><br>
• Usuários finais receberam funcionalidades úteis em 2 semanas<br>
• Economia de R$ 200.000 por não desenvolver funcionalidades desnecessárias<br><br>
<strong>Próximo passo para otimizar o processo:</strong>`,
    choices: [
      {
        text: "Implementar Small Releases para validação mais rápida",
        next: "xp-small-releases",
      },
      {
        text: "Criar Acceptance Tests para definir claramente 'pronto'",
        next: "xp-acceptance-tests",
      },
      { text: "Estabelecer velocidade da equipe para melhor planejamento", next: "xp-velocity" },
      { text: "Implementar métricas de valor entregue", next: "xp-value-metrics" },
    ],
  },

  "xp-pair-programming": {
    id: "xp-pair-programming",
    text: `<strong>Prática: Pair Programming</strong><br><br>
Você implementa pair programming na TechCorp, enfrentando resistência inicial mas provando valor rapidamente através de resultados concretos.<br><br>
<strong>Resistência inicial:</strong><br>
• "Vamos ser 50% mais lentos" - João, desenvolvedor senior<br>
• "Não consigo me concentrar com alguém me vigiando" - Ana, desenvolvedora<br>
• "Isso é desperdício de recursos" - Gerente de projeto<br><br>
<strong>Primeira semana - Pares experimentais:</strong><br>
• <strong>João + Carlos:</strong> Implementando módulo de autenticação<br>
• <strong>Ana + Beatriz:</strong> Refatorando sistema de relatórios<br>
• <strong>Pedro + Marina (cliente):</strong> Desenvolvendo tela de consulta<br><br>
<strong>Resultados que silenciaram céticos:</strong><br>
• Bugs encontrados: 15 (que normalmente só seriam detectados em produção)<br>
• Soluções criativas: 8 (que nenhum desenvolvedor pensaria sozinho)<br>
• Transferência de conhecimento: 100% (todos aprenderam algo novo)<br>
• Código reviews: desnecessários (qualidade já estava alta)<br><br>
<strong>Casos específicos de sucesso:</strong><br>
• <strong>João descobriu:</strong> Algoritmo de criptografia do Carlos era 300% mais eficiente<br>
• <strong>Ana aprendeu:</strong> Técnica de debugging que reduziu tempo de investigação em 80%<br>
• <strong>Pedro ensinou:</strong> Padrão de design que Marina nunca tinha visto<br><br>
<strong>Métricas após 1 mês:</strong><br>
• Bugs em produção: redução de 70%<br>
• Tempo de onboarding: de 3 semanas para 1 semana<br>
• Knowledge silos: eliminados<br>
• Satisfação da equipe: aumento de 85%<br><br>
<strong>Como você vai evoluir o pair programming?</strong>`,
    choices: [
      {
        text: "Medir e demonstrar ROI através de métricas de qualidade",
        next: "xp-quality-metrics",
      },
      { text: "Implementar rotação sistemática de pares", next: "xp-pair-rotation" },
      { text: "Combinar com TDD para potencializar benefícios", next: "xp-tdd" },
      {
        text: "Treinar equipe em técnicas avançadas de pairing",
        next: "xp-pair-guidelines",
      },
    ],
  },

  "xp-tdd": {
    id: "xp-tdd",
    text: `<strong>Prática: Test-Driven Development</strong><br><br>
Você implementa TDD na TechCorp, transformando a forma como a equipe pensa sobre design de código e qualidade.<br><br>
<strong>Situação antes do TDD:</strong><br>
• Testes escritos "quando sobra tempo" (nunca sobrava)<br>
• Cobertura de testes: 15%<br>
• Bugs em produção: 40 por mês<br>
• Refatoração: "muito perigoso, pode quebrar algo"<br><br>
<strong>Implementação do ciclo Red-Green-Refactor:</strong><br>
<strong>Semana 1 - Primeiros passos:</strong><br>
• <strong>Red:</strong> Escrever teste que falha<br>
• <strong>Green:</strong> Código mínimo para passar<br>
• <strong>Refactor:</strong> Melhorar design mantendo testes verdes<br><br>
<strong>Caso real - Módulo de Pagamentos:</strong><br>
• <strong>Dia 1:</strong> Carlos escreve teste para validação de cartão de crédito<br>
• <strong>Dia 2:</strong> Implementa validação mais simples possível<br>
• <strong>Dia 3:</strong> Refatora para tornar código mais limpo<br>
• <strong>Dia 4:</strong> Adiciona novos testes para casos edge<br>
• <strong>Dia 5:</strong> Descobre e corrige 3 bugs que teriam ido para produção<br><br>
<strong>Transformação do design de código:</strong><br>
• Classes ficaram naturalmente menores e mais focadas<br>
• Acoplamento diminuiu drasticamente<br>
• Interfaces emergiram naturalmente<br>
• Código tornou-se autodocumentado através dos testes<br><br>
<strong>Métricas após 2 meses:</strong><br>
• Cobertura de testes: 95%<br>
• Bugs em produção: redução de 85%<br>
• Confiança para refatorar: 100% da equipe<br>
• Velocidade de desenvolvimento: aumento de 40%<br><br>
<strong>Revelação da equipe:</strong> "TDD não é sobre testes, é sobre design!"<br><br>
<strong>Próximo passo para consolidar TDD:</strong>`,
    choices: [
      {
        text: "Implementar Continuous Integration para rodar testes automaticamente",
        next: "xp-continuous-integration",
      },
      { text: "Adicionar Acceptance Tests para completar cobertura", next: "xp-acceptance-tests" },
      {
        text: "Usar confiança dos testes para refatorar código legado",
        next: "xp-refactoring",
      },
      { text: "Treinar toda a equipe em TDD avançado", next: "xp-team-training" },
    ],
  },

  "xp-continuous-integration": {
    id: "xp-continuous-integration",
    text: `<strong>Prática: Continuous Integration</strong><br><br>
Você implementa CI na TechCorp, eliminando o inferno de integração que atormentava a equipe há anos.<br><br>
<strong>Situação anterior - "Integration Hell":</strong><br>
• Desenvolvedores trabalhavam em branches isoladas por semanas<br>
• Integração manual levava 2-3 dias<br>
• Conflitos de merge eram eventos traumáticos<br>
• "Funciona na minha máquina" era frase comum<br>
• Releases eram eventos de alta tensão<br><br>
<strong>Infraestrutura CI implementada:</strong><br>
• Servidor Jenkins configurado<br>
• Pipeline: Commit → Build → Test → Deploy to Staging<br>
• Feedback em menos de 8 minutos<br>
• Regra: build quebrado = prioridade máxima<br>
• Integração obrigatória pelo menos 2x por dia<br><br>
<strong>Primeira semana com CI:</strong><br>
• <strong>Segunda-feira:</strong> 12 builds quebrados (caos inicial)<br>
• <strong>Terça-feira:</strong> 8 builds quebrados (aprendendo)<br>
• <strong>Quarta-feira:</strong> 3 builds quebrados (melhorando)<br>
• <strong>Quinta-feira:</strong> 1 build quebrado (quase lá)<br>
• <strong>Sexta-feira:</strong> 0 builds quebrados (sucesso!)<br><br>
<strong>Transformação cultural observada:</strong><br>
• Desenvolvedores começaram a fazer commits menores e mais frequentes<br>
• Conflitos de merge praticamente desapareceram<br>
• Qualidade do código melhorou (ninguém quer quebrar o build)<br>
• Equipe ganhou confiança no código da branch principal<br><br>
<strong>Casos específicos de sucesso:</strong><br>
• Bug de incompatibilidade detectado em 8 minutos, não em 2 semanas<br>
• Refatoração grande feita com segurança em 3 commits pequenos<br>
• Novo desenvolvedor conseguiu contribuir no primeiro dia<br><br>
<strong>Métricas impressionantes:</strong><br>
• Tempo de integração: de 2 dias para 8 minutos<br>
• Conflitos de merge: redução de 95%<br>
• Bugs de integração: eliminados<br>
• Estresse da equipe: redução visível<br><br>
<strong>Como você vai evoluir o CI?</strong>`,
    choices: [
      { text: "Adicionar deploy automático para produção", next: "xp-continuous-deployment" },
      {
        text: "Implementar testes de performance no pipeline",
        next: "xp-performance-tests",
      },
      { text: "Criar métricas avançadas de qualidade", next: "xp-quality-metrics" },
      { text: "Estabelecer políticas rigorosas de build", next: "xp-build-policies" },
    ],
  },

  "xp-small-releases": {
    id: "xp-small-releases",
    text: `<strong>Prática: Small Releases</strong><br><br>
Você transforma a cadência de releases da TechCorp, passando de lançamentos traumáticos a entregas suaves e frequentes.<br><br>
<strong>Situação anterior:</strong><br>
• Releases a cada 3-4 meses<br>
• Cada release era um "big bang" com 50+ funcionalidades<br>
• Preparação para release levava 2 semanas<br>
• Bugs críticos descobertos apenas em produção<br>
• Rollback era praticamente impossível<br><br>
<strong>Nova estratégia - Releases Semanais:</strong><br>
• Cada release entrega 3-5 funcionalidades testadas<br>
• Preparação automatizada leva 1 hora<br>
• Cada funcionalidade pode ser ativada/desativada individualmente<br>
• Rollback leva 5 minutos<br><br>
<strong>Cronograma da primeira experiência:</strong><br>
• <strong>Semana 1:</strong> Login e autenticação<br>
• <strong>Semana 2:</strong> Consulta básica de dados<br>
• <strong>Semana 3:</strong> Geração de relatórios simples<br>
• <strong>Semana 4:</strong> Filtros avançados<br><br>
<strong>Feedback revolucionário:</strong><br>
• <strong>Semana 1:</strong> Usuários testam login e sugerem melhorias<br>
• <strong>Semana 2:</strong> Descoberta de que tipo de consulta mais importante<br>
• <strong>Semana 3:</strong> Cliente percebe que formato de relatório estava errado<br>
• <strong>Semana 4:</strong> Ajustes de UX baseados em uso real<br><br>
<strong>Casos de sucesso específicos:</strong><br>
• Funcionalidade de "Exportar para Excel" foi reimplementada 3 vezes baseada no feedback semanal<br>
• Bug crítico de segurança foi detectado e corrigido em 2 dias<br>
• Cliente cancelou 5 funcionalidades que viu que não precisava<br><br>
<strong>Transformação da percepção:</strong><br>
• <strong>Equipe:</strong> Moral alta vendo progresso constante<br>
• <strong>Cliente:</strong> Satisfação alta vendo valor real toda semana<br>
• <strong>Usuários:</strong> Adaptação gradual em vez de choque<br><br>
<strong>Métricas de impacto:</strong><br>
• Tempo médio para feedback: de 3 meses para 1 semana<br>
• Funcionalidades não utilizadas: redução de 80%<br>
• Satisfação do usuário: aumento de 120%<br>
• Estresse de release: praticamente eliminado<br><br>
<strong>Desafio emergente:</strong> Como garantir qualidade com releases tão frequentes?`,
    choices: [
      { text: "Fortalecer bateria de testes automáticos", next: "xp-testing" },
      { text: "Implementar Acceptance Tests rigorosos", next: "xp-acceptance-tests" },
      {
        text: "Criar pipeline de release totalmente automático",
        next: "xp-continuous-deployment",
      },
      {
        text: "Estabelecer critérios de qualidade não negociáveis",
        next: "xp-quality-criteria",
      },
    ],
  },

  "xp-refactoring": {
    id: "xp-refactoring",
    text: `<strong>Prática: Refactoring</strong><br><br>
Você implementa refatoração contínua na TechCorp, transformando o código legado em uma base sólida e evoluível.<br><br>
<strong>Estado inicial do código:</strong><br>
• Classe "UsuarioService" com 2.500 linhas<br>
• Método "processarPagamento" com 200 linhas e 15 níveis de indentação<br>
• Duplicação de código em 40% dos métodos<br>
• Comentários como "//TODO: refatorar isso um dia"<br>
• Medo coletivo: "não toque nisso que funciona"<br><br>
<strong>Estratégia de refatoração:</strong><br>
• Refatoração como parte do desenvolvimento diário<br>
• Melhorias pequenas e constantes<br>
• Testes garantem que funcionalidade não quebra<br>
• Debt técnico endereçado proativamente<br><br>
<strong>Caso real - Refatoração do módulo de pagamentos:</strong><br>
• <strong>Dia 1:</strong> Extrair método "validarCartao" do método gigante<br>
• <strong>Dia 2:</strong> Extrair classe "ValidadorCartao"<br>
• <strong>Dia 3:</strong> Eliminar duplicação de validação<br>
• <strong>Dia 4:</strong> Introduzir padrão Strategy para diferentes tipos de cartão<br>
• <strong>Dia 5:</strong> Testes passando, código 70% menor e 200% mais claro<br><br>
<strong>Transformação progressiva:</strong><br>
• <strong>Mês 1:</strong> Métodos gigantes quebrados em métodos menores<br>
• <strong>Mês 2:</strong> Classes grandes divididas em classes focadas<br>
• <strong>Mês 3:</strong> Duplicação eliminada sistematicamente<br>
• <strong>Mês 4:</strong> Padrões de design introduzidos onde faziam sentido<br><br>
<strong>Benefícios observados:</strong><br>
• Velocidade de desenvolvimento aumentou 60%<br>
• Bugs diminuíram 40% por código mais simples<br>
• Onboarding de novos devs: de 3 semanas para 1 semana<br>
• Confiança da equipe para fazer mudanças: 100%<br><br>
<strong>Mudança cultural mais importante:</strong><br>
• <strong>Antes:</strong> "Esse código é uma bomba, não vou mexer"<br>
• <strong>Agora:</strong> "Esse código pode melhorar, vou deixar um pouco melhor"<br><br>
<strong>Próximo passo para sustentabilidade:</strong>`,
    choices: [
      {
        text: "Estabelecer métricas de qualidade de código",
        next: "xp-quality-metrics",
      },
      {
        text: "Criar guidelines e padrões de refatoração",
        next: "xp-refactoring-guidelines",
      },
      {
        text: "Implementar code reviews focados em qualidade",
        next: "xp-automated-reviews",
      },
      {
        text: "Treinar equipe em padrões de design avançados",
        next: "xp-design-patterns",
      },
    ],
  },

  "xp-simple-design": {
    id: "xp-simple-design",
    text: `<strong>Prática: Simple Design</strong><br><br>
Você implementa os quatro princípios de Simple Design na TechCorp, revolucionando como a equipe pensa sobre arquitetura de software.<br><br>
<strong>Os 4 princípios implementados:</strong><br>
1. <strong>Passa todos os testes</strong> (funciona corretamente)<br>
2. <strong>Revela intenção</strong> (expressa claramente o propósito)<br>
3. <strong>Sem duplicação</strong> (elimina redundância)<br>
4. <strong>Elementos mínimos</strong> (mínimo de complexidade)<br><br>
<strong>Caso de estudo - Sistema de Relatórios:</strong><br>
<strong>Antes (arquitetura "enterprise"):</strong><br>
• ReportGeneratorFactoryBuilder<br>
• AbstractReportProcessorInterface<br>
• ReportDataTransformerAdapterProxy<br>
• ConfigurableReportOutputFormatterStrategy<br>
• 15 classes para gerar um relatório simples<br><br>
<strong>Depois (simple design):</strong><br>
• ReportGenerator<br>
• ReportData<br>
• ReportFormatter<br>
• 3 classes claras que fazem exatamente o necessário<br><br>
<strong>Transformação semanal:</strong><br>
• <strong>Semana 1:</strong> Eliminar abstrações desnecessárias<br>
• <strong>Semana 2:</strong> Renomear classes para expressar real intenção<br>
• <strong>Semana 3:</strong> Remover código duplicado<br>
• <strong>Semana 4:</strong> Fundir classes que faziam trabalho similar<br><br>
<strong>Impacto na produtividade:</strong><br>
• Tempo para entender código: de 2 horas para 15 minutos<br>
• Tempo para implementar mudanças: redução de 70%<br>
• Bugs por complexidade: redução de 60%<br>
• Satisfação da equipe: aumento dramático<br><br>
<strong>Depoimento da equipe:</strong><br>
"Finalmente consigo entender o que o código faz só olhando para ele!"<br><br>
<strong>Princípio mais impactante:</strong> "Revelar intenção" - código que se explica<br><br>
<strong>Como você vai manter esse design simples conquistado?</strong>`,
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
        text: "Estabelecer padrões de arquitetura simples",
        next: "xp-architecture-patterns",
      },
    ],
  },

  // === PRÁTICAS AVANÇADAS ===
  "xp-acceptance-tests": {
    id: "xp-acceptance-tests",
    text: `<strong>Prática: Acceptance Tests</strong><br><br>
Você implementa testes de aceitação na TechCorp, criando uma ponte clara entre requisitos de negócio e código funcional.<br><br>
<strong>Problema resolvido:</strong><br>
• "Pronto" significava coisas diferentes para cada pessoa<br>
• Funcionalidades "terminadas" não atendiam expectativas<br>
• Regressões não eram detectadas<br>
• Comunicação confusa entre negócio e tecnologia<br><br>
<strong>Processo implementado:</strong><br>
• Marina (cliente) escreve cenários em linguagem natural<br>
• Equipe converte em testes automatizados<br>
• Funcionalidade só é "pronta" quando passa nos testes<br>
• Testes servem como documentação viva<br><br>
<strong>Exemplo real - Funcionalidade de Login:</strong><br>
<strong>Cenário escrito por Marina:</strong><br>
Quando usuário digita login válido<br>
E digita senha correta<br>
E clica em "Entrar"<br>
Então deve ver a tela principal<br>
E deve ver mensagem "Bem-vindo, [nome]"<br>
E deve ter acesso ao menu principal<br><br>
<strong>Casos de borda descobertos:</strong><br>
• E se senha tem caracteres especiais?<br>
• E se usuário está bloqueado?<br>
• E se sistema está em manutenção?<br>
• E se sessão expirou?<br><br>
<strong>Benefícios observados:</strong><br>
• Ambiguidade eliminada: 100% das funcionalidades têm critérios claros<br>
• Regressões detectadas automaticamente<br>
• Documentação sempre atualizada<br>
• Comunicação melhorada entre equipe e cliente<br><br>
<strong>Caso de sucesso específico:</strong><br>
Funcionalidade de "Transferência Bancária" teve 15 cenários de teste que cobriram casos que nunca tinham sido pensados, evitando problemas críticos em produção.<br><br>
<strong>Próximo passo:</strong>`,
    choices: [
      {
        text: "Automatizar execução dos acceptance tests",
        next: "xp-test-automation",
      },
      { text: "Integrar testes ao pipeline de CI", next: "xp-continuous-integration" },
      {
        text: "Treinar cliente em escrita eficaz de testes",
        next: "xp-customer-training",
      },
      { text: "Criar relatórios de progresso baseados em testes", next: "xp-progress-reports" },
    ],
  },

  "xp-workspace": {
    id: "xp-workspace",
    text: `<strong>Prática: Whole Team Workspace</strong><br><br>
Você redesenha completamente o espaço físico da TechCorp para maximizar comunicação e colaboração.<br><br>
<strong>Situação anterior:</strong><br>
• Desenvolvedores em cubículos isolados<br>
• Cliente em prédio diferente<br>
• Reuniões em salas fechadas<br>
• Comunicação apenas por email/Slack<br>
• Whiteboards escondidos em salas de reunião<br><br>
<strong>Novo layout implementado:</strong><br>
• Espaço aberto com estações de trabalho em formato de U<br>
• Marina (cliente) sentada no centro da equipe<br>
• 4 whiteboards grandes espalhados pela área<br>
• Estações configuradas para pair programming<br>
• Área de descanso integrada para conversas informais<br>
• Tela grande mostrando status do build e métricas<br><br>
<strong>Transformação da dinâmica - Primeira semana:</strong><br>
• <strong>Segunda:</strong> 15 conversas técnicas espontâneas<br>
• <strong>Terça:</strong> Marina resolve 8 dúvidas de negócio instantaneamente<br>
• <strong>Quarta:</strong> Pair programming acontece naturalmente<br>
• <strong>Quinta:</strong> Whiteboard usado para design em tempo real<br>
• <strong>Sexta:</strong> Celebração coletiva de release bem-sucedido<br><br>
<strong>Casos específicos de melhoria:</strong><br>
• Arquiteto ouve problema de performance e sugere solução na hora<br>
• Tester vê desenvolvedor codificando e sugere caso de teste<br>
• Marina vê interface sendo desenvolvida e sugere melhorias de UX<br>
• Desenvolvedor junior aprende observando seniors<br><br>
<strong>Métricas de colaboração:</strong><br>
• Comunicação informal: aumento de 400%<br>
• Tempo para resolver dúvidas: de horas para minutos<br>
• Reuniões formais: redução de 60%<br>
• Energia e moral da equipe: visivelmente melhor<br><br>
<strong>Como você vai otimizar ainda mais o espaço?</strong>`,
    choices: [
      {
        text: "Implementar informative workspace com radiadores de informação",
        next: "xp-informative-workspace",
      },
      {
        text: "Criar zonas específicas para diferentes atividades",
        next: "xp-activity-zones",
      },
      {
        text: "Estabelecer etiqueta de colaboração eficaz",
        next: "xp-collaboration-etiquette",
      },
      { text: "Medir efetividade do espaço através de métricas", next: "xp-workspace-metrics" },
    ],
  },

  // === SITUAÇÕES DE ESCOLHA CRÍTICA ===
  "xp-scope-management": {
    id: "xp-scope-management",
    text: `<strong>Crise de Scope Creep</strong><br><br>
Marina (cliente) está empolgada com os resultados e quer adicionar 15 novas funcionalidades "urgentíssimas" ao projeto, incluindo integração com 3 sistemas externos e um módulo completo de BI.<br><br>
<strong>Pressões conflitantes:</strong><br>
• <strong>Marina:</strong> "Já que está funcionando tão bem, podemos adicionar tudo isso!"<br>
• <strong>Gerente:</strong> "Cliente feliz, vamos atender todos os pedidos!"<br>
• <strong>Equipe:</strong> "Isso vai complicar tudo que conquistamos!"<br>
• <strong>Prazo:</strong> Reunião com diretoria em 6 semanas<br><br>
<strong>Dilema dos valores XP:</strong><br>
• <strong>Comunicação:</strong> Cliente está se comunicando claramente<br>
• <strong>Simplicidade:</strong> Escopo explodindo ameaça simplicidade<br>
• <strong>Feedback:</strong> Sucesso atual gerou esse feedback<br>
• <strong>Coragem:</strong> Precisa de coragem para dizer não<br><br>
<strong>Cenário crítico:</strong><br>
Você tem uma reunião em 1 hora com Marina e o gerente para decidir o futuro do projeto.<br><br>
<strong>Qual estratégia você escolhe?</strong>`,
    choices: [
      { text: "Usar Planning Game para priorizar cientificamente", next: "xp-planning-game-crisis" },
      {
        text: "Propor releases incrementais para validar valor",
        next: "xp-incremental-validation",
      },
      { text: "Apresentar dados sobre custo da complexidade", next: "xp-complexity-cost" },
      { text: "Aceitar tudo e trabalhar em overtime", next: "xp-overtime-fail" },
    ],
  },

  "xp-planning-game-crisis": {
    id: "xp-planning-game-crisis",
    text: `<strong>Planning Game Salvando o Projeto</strong><br><br>
Você conduz uma sessão de Planning Game de emergência, transformando o caos de 15 funcionalidades em decisões estratégicas baseadas em dados.<br><br>
<strong>Sessão de crise - Planning Game:</strong><br>
• <strong>14h00:</strong> Você coloca todas as 15 funcionalidades em post-its<br>
• <strong>14h15:</strong> Equipe estima esforço (resultado: 6 meses de trabalho)<br>
• <strong>14h30:</strong> Marina prioriza por valor de negócio<br>
• <strong>14h45:</strong> Análise de dependências revela complexidades<br>
• <strong>15h00:</strong> Discussão sobre impacto na qualidade atual<br><br>
<strong>Revelações importantes:</strong><br>
• 8 funcionalidades dependem de integração com sistema instável<br>
• 5 funcionalidades são "nice to have", não críticas<br>
• 2 funcionalidades podem ser resolvidas com workarounds simples<br>
• Apenas 3 funcionalidades realmente agregam valor imediato<br><br>
<strong>Decisão final:</strong><br>
• <strong>Fase 1 (6 semanas):</strong> 3 funcionalidades de alto valor<br>
• <strong>Fase 2 (avaliação):</strong> Revisar necessidade das outras baseado no uso real<br>
• <strong>Integração:</strong> Apenas após sistema externo estabilizar<br><br>
<strong>Resultado:</strong> Projeto mantém qualidade, prazo e sanidade da equipe.<br><br>
<strong>Próximo passo:</strong>`,
    choices: [
      {
        text: "Implementar as 3 funcionalidades prioritárias",
        next: "xp-focused-implementation",
      },
      {
        text: "Estabelecer processo contínuo de priorização",
        next: "xp-continuous-planning",
      },
      {
        text: "Criar métricas de valor para validar decisões",
        next: "xp-value-metrics",
      },
      {
        text: "Documentar lições aprendidas sobre scope",
        next: "xp-scope-lessons",
      },
    ],
  },

  "xp-overtime-fail": {
    id: "xp-overtime-fail",
    text: `<strong>Armadilha Fatal: Overtime</strong><br><br>
Você decide aceitar todas as funcionalidades e compensar com trabalho extra. A equipe "se vira" para entregar tudo.<br><br>
<strong>Consequências devastadoras (4 semanas depois):</strong><br>
• <strong>Semana 1:</strong> Equipe trabalha 60h, moral ainda ok<br>
• <strong>Semana 2:</strong> Primeiros bugs críticos aparecem<br>
• <strong>Semana 3:</strong> Pair programming abandonado, TDD relaxado<br>
• <strong>Semana 4:</strong> Sistema instável, equipe exausta<br><br>
<strong>Desastre em produção:</strong><br>
• Bug de segurança afeta 50.000 usuários<br>
• Sistema fora do ar por 8 horas<br>
• Banco Central considera cancelar contrato<br>
• Equipe perde confiança nas práticas XP<br>
• Dois desenvolvedores pedem demissão<br><br>
<strong>Lição dolorosa:</strong><br>
XP funciona com ritmo sustentável. Overtime destrói qualidade, moral e práticas que levaram meses para construir.`,
    explanation: `<strong>Princípio XP Violado:</strong> Sustainable Pace<br><br>
Este é um dos erros mais comuns ao implementar XP. Sustainable Pace não é opcional - é fundamental para manter a qualidade e produtividade em longo prazo.<br><br>
<strong>Por que overtime é fatal para XP:</strong><br>
• Testes são ignorados sob pressão<br>
• Pair programming é abandonado para "ganhar tempo"<br>
• Refatoração é postergada<br>
• Comunicação diminui com equipe estressada<br>
• Simplicidade é sacrificada por soluções rápidas<br><br>
O resultado é sempre o mesmo: volta para o estado anterior de baixa qualidade e produtividade.`,
    references: [
      "Extreme Programming Explained - Kent Beck",
      "Sustainable Pace - http://www.extremeprogramming.org/rules/overtime.html",
    ],
    choices: [{ text: "Recomeçar com sabedoria", next: "xp-role" }],
  },

  "xp-complexity-cost": {
    id: "xp-complexity-cost",
    text: `<strong>Educando sobre Custo da Complexidade</strong><br><br>
Você prepara uma apresentação com dados reais para demonstrar o custo verdadeiro da complexidade desnecessária.<br><br>
<strong>Dados apresentados à Marina:</strong><br>
• <strong>Funcionalidade simples:</strong> 2 dias de desenvolvimento<br>
• <strong>Mesma funcionalidade com integração:</strong> 12 dias<br>
• <strong>Bugs por complexidade:</strong> crescimento exponencial<br>
• <strong>Manutenção:</strong> 400% mais cara em sistemas complexos<br>
• <strong>Onboarding:</strong> de 1 semana para 1 mês<br><br>
<strong>Exemplo concreto - Relatório Simples vs. Complexo:</strong><br>
• <strong>Versão simples:</strong> 3 dias, 0 bugs, fácil manutenção<br>
• <strong>Versão "completa":</strong> 3 semanas, 8 bugs, manutenção complexa<br>
• <strong>Uso real:</strong> 90% dos usuários usam apenas funcionalidades simples<br><br>
<strong>Proposta baseada em dados:</strong><br>
"Vamos entregar as 3 funcionalidades de maior impacto primeiro, medir o valor real, e então decidir sobre as próximas baseado em dados de uso."<br><br>
<strong>Reação de Marina:</strong>`,
    choices: [
      { text: "Marina se convence e aceita priorização", next: "xp-data-driven-success" },
      { text: "Marina ainda insiste em escopo completo", next: "xp-stakeholder-negotiation" },
      { text: "Marina quer ver prototipação rápida", next: "xp-prototype" },
      {
        text: "Marina questiona capacidade técnica da equipe",
        next: "xp-team-credibility",
      },
    ],
  },

  "xp-data-driven-success": {
    id: "xp-data-driven-success",
    text: `<strong>Vitória Baseada em Dados</strong><br><br>
Marina se convence com os dados e aceita a abordagem incremental. Vocês implementam as 3 funcionalidades prioritárias nas próximas 6 semanas.<br><br>
<strong>Resultados das 3 funcionalidades:</strong><br>
• <strong>Funcionalidade A:</strong> Usada por 95% dos usuários diariamente<br>
• <strong>Funcionalidade B:</strong> Economiza 2 horas por dia por usuário<br>
• <strong>Funcionalidade C:</strong> Reduz erros manuais em 80%<br><br>
<strong>Dados de uso coletados:</strong><br>
• 12 das 15 funcionalidades originais nunca foram mencionadas pelos usuários<br>
• Usuários sugeriram 3 funcionalidades novas não previstas<br>
• ROI das 3 funcionalidades implementadas: 300%<br><br>
<strong>Marina comenta:</strong><br>
"Agora entendo o valor de focar no essencial. Essas 3 funcionalidades entregaram mais valor que os últimos 6 meses de desenvolvimento!"<br><br>
<strong>Próximo passo:</strong>`,
    choices: [
      {
        text: "Implementar processo contínuo de priorização baseada em dados",
        next: "xp-continuous-prioritization",
      },
      {
        text: "Expandir métricas de valor para todo o projeto",
        next: "xp-value-metrics",
      },
      {
        text: "Treinar outros stakeholders nessa abordagem",
        next: "xp-stakeholder-training",
      },
      {
        text: "Celebrar sucesso e planejar próximos passos",
        next: "xp-celebration",
      },
    ],
  },

  // === MÉTRICAS E MELHORIA ===
  "xp-quality-metrics": {
    id: "xp-quality-metrics",
    text: `<strong>Métricas de Qualidade</strong><br><br>
Você implementa um sistema abrangente de métricas para demonstrar o valor tangível das práticas XP.<br><br>
<strong>Dashboard de métricas implementado:</strong><br>
• <strong>Qualidade:</strong> Bugs em produção diminuíram 85%<br>
• <strong>Velocidade:</strong> Funcionalidades entregues 60% mais rápido<br>
• <strong>Satisfação:</strong> Cliente deu nota 9.5/10 (antes era 4/10)<br>
• <strong>Cobertura:</strong> Testes cobrem 95% do código<br>
• <strong>Integração:</strong> Tempo de deploy reduziu de 4h para 10min<br>
• <strong>Manutenibilidade:</strong> Complexidade ciclomática diminuiu 70%<br><br>
<strong>Métricas de negócio:</strong><br>
• <strong>ROI:</strong> 300% em 6 meses<br>
• <strong>Time-to-market:</strong> 50% mais rápido<br>
• <strong>Custo de manutenção:</strong> Redução de 40%<br>
• <strong>Retenção de usuários:</strong> Aumento de 80%<br><br>
<strong>Impacto organizacional:</strong><br>
• Gestão aumentou investimento em práticas ágeis<br>
• Outras equipes querem adotar XP<br>
• Cliente se tornou referência comercial<br>
• Equipe virou benchmark interno<br><br>
<strong>Próximo passo:</strong>`,
    choices: [
      { text: "Expandir XP para outras equipes da empresa", next: "xp-scaling" },
      { text: "Criar programa de mentoria XP", next: "xp-mentorship" },
      { text: "Estabelecer centro de excelência", next: "xp-excellence-center" },
      { text: "Continuar aperfeiçoando práticas atuais", next: "xp-continuous-improvement" },
    ],
  },

  // === SCALING E EVOLUÇÃO ===
  "xp-scaling": {
    id: "xp-scaling",
    text: `<strong>Scaling XP na TechCorp</strong><br><br>
Outras 4 equipes da TechCorp querem adotar XP baseado no sucesso do projeto bancário. Você é escolhido para liderar a transformação organizacional.<br><br>
<strong>Desafios identificados:</strong><br>
• <strong>Equipe Mobile:</strong> Contexto diferente, deployment para app stores<br>
• <strong>Equipe Backend:</strong> Sistemas críticos 24/7, não podem parar<br>
• <strong>Equipe Frontend:</strong> Foco em UX, ciclos de design diferentes<br>
• <strong>Equipe DevOps:</strong> Infraestrutura, não desenvolvimento de features<br><br>
<strong>Estratégia de scaling:</strong><br>
• Adaptar práticas ao contexto específico de cada equipe<br>
• Começar com equipes mais receptivas<br>
• Criar rede de XP coaches internos<br>
• Manter valores fundamentais, flexibilizar práticas<br><br>
<strong>Primeira onda - Equipe Frontend:</strong><br>
• TDD adaptado para componentes visuais<br>
• Pair programming incluindo designers<br>
• Small releases através de feature flags<br>
• Acceptance tests para comportamentos de UI<br><br>
<strong>Resultados iniciais:</strong><br>
• Bugs de interface diminuíram 70%<br>
• Colaboração design-dev melhorou drasticamente<br>
• Tempo de desenvolvimento de features reduziu 40%<br><br>
<strong>Próxima equipe a abordar:</strong>`,
    choices: [
      { text: "Equipe Backend com foco em sistemas críticos", next: "xp-backend-scaling" },
      { text: "Equipe Mobile com desafios específicos", next: "xp-mobile-scaling" },
      { text: "Criar programa de coaches internos", next: "xp-coach-training" },
      { text: "Estabelecer comunidade de prática XP", next: "xp-community" },
    ],
  },

  "xp-backend-scaling": {
    id: "xp-backend-scaling",
    text: `<strong>XP para Sistemas Críticos</strong><br><br>
Você adapta XP para a equipe de Backend, que mantém sistemas críticos 24/7 para bancos em toda América Latina.<br><br>
<strong>Desafios únicos:</strong><br>
• Zero downtime permitido<br>
• Regulamentações bancárias rígidas<br>
• Auditoria e compliance<br>
• Performance crítica (milhões de transações/dia)<br>
• Segurança máxima<br><br>
<strong>Adaptações implementadas:</strong><br>
• <strong>TDD:</strong> Foco especial em testes de carga e segurança<br>
• <strong>CI/CD:</strong> Blue-green deployment para zero downtime<br>
• <strong>Pair Programming:</strong> Obrigatório para mudanças críticas<br>
• <strong>Small Releases:</strong> Canary releases com monitoramento intensivo<br>
• <strong>Refactoring:</strong> Sempre acompanhado de testes de performance<br><br>
<strong>Caso de sucesso:</strong><br>
Migração de sistema legado de pagamentos usando práticas XP:<br>
• 6 meses de planejamento<br>
• 0 minutos de downtime<br>
• 0 transações perdidas<br>
• Performance 40% melhor<br>
• Código 60% mais simples<br><br>
<strong>Resultado:</strong> Auditores do Banco Central elogiaram qualidade do código e processo.<br><br>
<strong>Próximo passo:</strong>`,
    choices: [
      { text: "Documentar práticas XP para compliance", next: "xp-compliance-documentation" },
      { text: "Expandir para Equipe Mobile", next: "xp-mobile-scaling" },
      { text: "Criar programa de certificação interna", next: "xp-certification" },
      { text: "Estabelecer métricas de qualidade organizacional", next: "xp-organizational-metrics" },
    ],
  },

  // === CONCLUSÕES E CENÁRIOS AVANÇADOS ===
  "xp-celebration": {
    id: "xp-celebration",
    text: `<strong>Celebrando Transformação Completa</strong><br><br>
Você para para celebrar a transformação incrível da TechCorp através de Extreme Programming.<br><br>
<strong>Transformação da TechCorp em números:</strong><br>
• <strong>Qualidade:</strong> De 40% usuários afetados por bugs para menos de 2%<br>
• <strong>Velocidade:</strong> Entregas 3x mais rápidas<br>
• <strong>Satisfação:</strong> Cliente renovou contrato por 5 anos<br>
• <strong>Equipe:</strong> 0% turnover (antes era 40% ao ano)<br>
• <strong>Receita:</strong> Aumento de 150% com novos contratos<br><br>
<strong>Reconhecimento:</strong><br>
• TechCorp venceu prêmio "Melhor Fornecedor de Software Bancário"<br>
• Você foi promovido a Arquiteto Sênior<br>
• Equipe virou case de sucesso interno<br>
• Outras empresas querem contratar consultoria<br><br>
<strong>Reflexão pessoal:</strong><br>
"XP não é apenas sobre código melhor - é sobre pessoas fazendo seu melhor trabalho juntas."<br><br>
<strong>O que você quer fazer agora?</strong>`,
    choices: [
      { text: "Escrever livro sobre experiência com XP", next: "xp-knowledge-sharing" },
      { text: "Planejar próximos desafios técnicos", next: "xp-next-challenges" },
      { text: "Mentorear outras empresas", next: "xp-external-consulting" },
      { text: "Concluir jornada XP", next: "xp-conclusion" },
    ],
  },

  "xp-conclusion": {
    id: "xp-conclusion",
    text: `<strong>Conclusão da Jornada XP</strong><br><br>
Você completou com sucesso a implementação de Extreme Programming na TechCorp!<br><br>
<strong>Jornada completa percorrida:</strong><br>
✓ Implementou os 5 valores fundamentais (Comunicação, Simplicidade, Feedback, Coragem, Respeito)<br>
✓ Dominou as 12 práticas principais do XP<br>
✓ Transformou cultura organizacional<br>
✓ Salvou projeto crítico de cancelamento<br>
✓ Estabeleceu processo sustentável de alta qualidade<br>
✓ Expandiu XP para múltiplas equipes<br>
✓ Criou impacto mensurável no negócio<br><br>
<strong>Impacto Final da Transformação:</strong><br>
• <strong>Técnico:</strong> Código de qualidade mundial, arquitetura simples e evoluível<br>
• <strong>Humano:</strong> Equipe motivada, colaborativa e em constante aprendizado<br>
• <strong>Negócio:</strong> Cliente satisfeito, receita crescente, reputação estabelecida<br>
• <strong>Organizacional:</strong> Cultura de excelência, inovação e melhoria contínua<br><br>
<strong>Você se tornou um verdadeiro XP Master!</strong><br><br>
A transformação da TechCorp é prova de que XP pode revolucionar não apenas código, mas organizações inteiras.`,
    explanation: `<strong>Parabéns pela jornada completa!</strong><br><br>
Você experimentou como Extreme Programming pode transformar radicalmente o desenvolvimento de software e organizações. XP demonstra que práticas técnicas sólidas combinadas com valores humanos fundamentais criam um ambiente onde software excepcional é desenvolvido de forma sustentável.<br><br>
<strong>Lições-chave da jornada:</strong><br>
• <strong>Comunicação</strong> elimina desperdícios e alinha expectativas<br>
• <strong>Simplicidade</strong> acelera desenvolvimento e reduz bugs<br>
• <strong>Feedback</strong> rápido permite correções e melhorias contínuas<br>
• <strong>Coragem</strong> permite mudanças necessárias mas difíceis<br>
• <strong>Respeito</strong> cria ambiente de colaboração e crescimento<br><br>
<strong>Impacto duradouro:</strong><br>
As práticas XP que você implementou continuarão beneficiando a TechCorp por anos, criando um legado de excelência técnica e colaboração humana.`,
    references: [
      "Extreme Programming Explained - Kent Beck",
      "Planning Extreme Programming - Kent Beck & Martin Fowler",
      "The Art of Agile Development - James Shore",
      "http://www.extremeprogramming.org",
    ],
    choices: [
      { text: "Explorar cenário avançado de XP", next: "xp-advanced-scenario" },
      { text: "Começar nova jornada", next: "xp-role" },
    ],
  },

  // === NODOS ADICIONAIS PARA COMPLETAR REFERÊNCIAS ===
  "xp-testing": {
    id: "xp-testing",
    text: `<strong>Fortalecendo Testes Automáticos</strong><br><br>
Você estabelece uma estratégia abrangente de testes para garantir qualidade com releases frequentes.<br><br>
<strong>Estratégia implementada:</strong><br>
• Testes unitários para cada funcionalidade<br>
• Testes de integração automatizados<br>
• Testes de regressão em pipeline<br>
• Testes de performance contínuos<br><br>
<strong>Resultado:</strong> Confiança total em releases frequentes sem comprometer qualidade.<br><br>
<strong>Próximo passo:</strong>`,
    choices: [
      { text: "Integrar ao processo de CI/CD", next: "xp-continuous-integration" },
      { text: "Treinar equipe em escrita de testes", next: "xp-test-training" },
      { text: "Medir cobertura e eficácia", next: "xp-test-metrics" },
      { text: "Automatizar execução completa", next: "xp-test-automation" },
    ],
  },

  "xp-yagni": {
    id: "xp-yagni",
    text: `<strong>Princípio: YAGNI (You Aren't Gonna Need It)</strong><br><br>
Você implementa rigorosamente o princípio YAGNI, removendo funcionalidades especulativas e focando apenas no que é realmente necessário.<br><br>
<strong>Auditoria de código reveladora:</strong><br>
• 40% das classes tinham métodos nunca chamados<br>
• 25% das funcionalidades nunca foram usadas<br>
• Configurações para cenários que nunca aconteceram<br>
• Abstrações "para flexibilidade futura" que complicavam tudo<br><br>
<strong>Limpeza sistemática:</strong><br>
• Remoção de 15.000 linhas de código não utilizado<br>
• Eliminação de 8 configurações desnecessárias<br>
• Simplificação de 12 abstrações excessivas<br>
• Foco exclusivo em requisitos atuais e validados<br><br>
<strong>Resultados imediatos:</strong><br>
• Build 50% mais rápido<br>
• Código 60% mais fácil de entender<br>
• Bugs reduzidos por menor complexidade<br>
• Desenvolvimento 40% mais ágil<br><br>
<strong>Próximo passo:</strong>`,
    choices: [
      { text: "Medir impacto na velocidade de desenvolvimento", next: "xp-velocity-measurement" },
      { text: "Treinar equipe em identificação de YAGNI", next: "xp-yagni-training" },
      { text: "Aplicar YAGNI em decisões de arquitetura", next: "xp-simple-design" },
      { text: "Documentar decisões de simplicidade", next: "xp-decision-log" },
    ],
  },

  "xp-technical-practices": {
    id: "xp-technical-practices",
    text: `<strong>Práticas Técnicas Avançadas</strong><br><br>
Você implementa práticas técnicas que outros consideram "muito arriscadas" mas que são fundamentais para XP de alta qualidade.<br><br>
<strong>Práticas implementadas:</strong><br>
• <strong>Collective Code Ownership:</strong> Qualquer desenvolvedor pode modificar qualquer código<br>
• <strong>Continuous Refactoring:</strong> Melhorias constantes sem permissão especial<br>
• <strong>Simple Design:</strong> Rejeição de over-engineering<br>
• <strong>Metaphor:</strong> Linguagem comum para arquitetura<br><br>
<strong>Resultado transformador:</strong><br>
• Knowledge silos eliminados<br>
• Código uniformemente limpo<br>
• Arquitetura consistente<br>
• Equipe verdadeiramente colaborativa<br><br>
<strong>Próximo passo:</strong>`,
    choices: [
      { text: "Consolidar com métricas de qualidade", next: "xp-quality-metrics" },
      { text: "Expandir para outras equipes", next: "xp-scaling" },
      { text: "Treinar coaches internos", next: "xp-coach-training" },
      { text: "Documentar práticas para organização", next: "xp-practice-documentation" },
    ],
  },

  // Nodos complementares para completar todas as referências
  "xp-continuous-deployment": {
    id: "xp-continuous-deployment",
    text: `<strong>Deploy Contínuo</strong><br><br>
Você implementa deploy automático para produção, completando o pipeline de entrega contínua.<br><br>
<strong>Pipeline implementado:</strong><br>
• Commit → Build → Test → Deploy Staging → Deploy Produção<br>
• Rollback automático em caso de problemas<br>
• Monitoramento em tempo real<br>
• Feature flags para controle de releases<br><br>
<strong>Resultado:</strong> Entregas em produção várias vezes por dia com segurança total.<br><br>
<strong>Próximo passo:</strong>`,
    choices: [
      { text: "Otimizar monitoramento e alertas", next: "xp-monitoring" },
      { text: "Implementar blue-green deployment", next: "xp-blue-green" },
      { text: "Criar dashboards de saúde do sistema", next: "xp-health-dashboard" },
      { text: "Expandir para outras equipes", next: "xp-scaling" },
    ],
  },

  "xp-value-metrics": {
    id: "xp-value-metrics",
    text: `<strong>Métricas de Valor</strong><br><br>
Você implementa métricas focadas em valor de negócio entregue, não apenas em atividade técnica.<br><br>
<strong>Métricas implementadas:</strong><br>
• ROI por funcionalidade<br>
• Uso real vs. especificação<br>
• Satisfação do usuário final<br>
• Tempo para valor (ideia até usuário)<br><br>
<strong>Resultado:</strong> Decisões de produto baseadas em impacto real, não em opiniões.<br><br>
<strong>Próximo passo:</strong>`,
    choices: [
      { text: "Usar métricas para priorização", next: "xp-continuous-prioritization" },
      { text: "Treinar stakeholders em métricas", next: "xp-stakeholder-training" },
      { text: "Expandir métricas para toda organização", next: "xp-organizational-metrics" },
      { text: "Celebrar sucessos baseados em valor", next: "xp-celebration" },
    ],
  },

  "xp-velocity": {
    id: "xp-velocity",
    text: `<strong>Estabelecendo Velocidade da Equipe</strong><br><br>
Você mede e estabelece a velocidade consistente da equipe para planejamento preciso.<br><br>
<strong>Métricas coletadas:</strong><br>
• Pontos de história por iteração<br>
• Variação de velocidade<br>
• Fatores que afetam velocidade<br>
• Tendências de melhoria<br><br>
<strong>Resultado:</strong> Planejamento 95% mais preciso e compromissos confiáveis.<br><br>
<strong>Próximo passo:</strong>`,
    choices: [
      { text: "Usar velocidade para releases", next: "xp-small-releases" },
      { text: "Otimizar fatores de velocidade", next: "xp-velocity-optimization" },
      { text: "Comunicar progresso", next: "xp-progress-communication" },
      { text: "Melhorar processo", next: "xp-continuous-improvement" },
    ],
  },

  // Nodos finais para completar referências restantes
  "xp-continuous-improvement": {
    id: "xp-continuous-improvement",
    text: `<strong>Melhoria Contínua</strong><br><br>
Você estabelece cultura de melhoria contínua onde a equipe constantemente evolui suas práticas XP.<br><br>
<strong>Práticas de melhoria:</strong><br>
• Retrospectivas semanais<br>
• Experimentação com novas técnicas<br>
• Medição constante de resultados<br>
• Adaptação baseada em feedback<br><br>
<strong>Resultado final:</strong><br>
Equipe auto-organizadas que continua evoluindo e mantendo excelência técnica indefinidamente.<br><br>
<strong>Sua jornada XP está completa!</strong>`,
    choices: [
      { text: "Concluir com sucesso", next: "xp-conclusion" },
      { text: "Explorar novos desafios", next: "xp-advanced-scenario" },
      { text: "Mentorear outras equipes", next: "xp-mentorship" },
      { text: "Recomeçar jornada", next: "xp-role" },
    ],
  },

  "xp-mentorship": {
    id: "xp-mentorship",
    text: `<strong>Programa de Mentoria XP</strong><br><br>
Você estabelece programa de mentoria para propagar práticas XP e desenvolver novos coaches.<br><br>
<strong>Programa estruturado:</strong><br>
• Mentoria individual<br>
• Grupos de estudo<br>
• Projetos práticos<br>
• Avaliação contínua<br><br>
<strong>Resultado:</strong> Nova geração de praticantes XP preparada para liderar transformações.<br><br>
<strong>Próximo passo:</strong>`,
    choices: [
      { text: "Expandir programa", next: "xp-mentorship-expansion" },
      { text: "Criar certificação", next: "xp-certification" },
      { text: "Medir impacto", next: "xp-mentorship-impact" },
      { text: "Celebrar sucessos", next: "xp-celebration" },
    ],
  },

  "xp-excellence-center": {
    id: "xp-excellence-center",
    text: `<strong>Centro de Excelência XP</strong><br><br>
Você estabelece centro de excelência para padronizar e evoluir práticas XP na organização.<br><br>
<strong>Centro estabelecido:</strong><br>
• Biblioteca de práticas<br>
• Treinamentos padronizados<br>
• Consultoria interna<br>
• Pesquisa e desenvolvimento<br><br>
<strong>Resultado:</strong> XP institucionalizado como padrão organizacional de excelência.<br><br>
<strong>Próximo passo:</strong>`,
    choices: [
      { text: "Expandir para outras organizações", next: "xp-external-consulting" },
      { text: "Desenvolver novas práticas", next: "xp-innovation" },
      { text: "Medir impacto organizacional", next: "xp-organizational-impact" },
      { text: "Celebrar conquistas", next: "xp-celebration" },
    ],
  },

  "xp-advanced-scenario": {
    id: "xp-advanced-scenario",
    text: `<strong>Cenário Avançado: XP Global</strong><br><br>
Você agora lidera a implementação de XP em uma multinacional com 50+ equipes distribuídas em 12 países, desenvolvendo software para 100 milhões de usuários.<br><br>
<strong>Desafios de escala global:</strong><br>
• Fusos horários diferentes (equipes 24/7)<br>
• Culturas organizacionais diversas<br>
• Regulamentações locais variadas<br>
• Sistemas legados críticos<br>
• Múltiplas stacks tecnológicas<br>
• Comunicação cross-cultural<br><br>
<strong>Sua estratégia para XP global:</strong>`,
    choices: [
      {
        text: "Implementação por região com adaptação cultural",
        next: "xp-cultural-adaptation",
      },
      { text: "Criar centros de excelência XP", next: "xp-excellence-centers" },
      {
        text: "Adaptar práticas para trabalho remoto",
        next: "xp-remote-adaptation",
      },
      { text: "Focar em transformação cultural profunda", next: "xp-global-culture" },
    ],
  },

  "xp-global-culture": {
    id: "xp-global-culture",
    text: `<strong>Transformação Cultural Global</strong><br><br>
Você lidera uma transformação cultural profunda, implementando valores XP em escala global enquanto respeitando diferenças culturais locais.<br><br>
<strong>Estratégia de transformação:</strong><br>
• Valores XP universais, práticas adaptadas localmente<br>
• Liderança pelo exemplo em cada região<br>
• Celebração de diversidade como força<br>
• Aprendizado contínuo entre culturas<br>
• Medição de sucesso através de impacto humano<br><br>
<strong>Resultados em 2 anos:</strong><br>
• 50 equipes adotaram XP com adaptações locais<br>
• Qualidade melhorou 300% globalmente<br>
• Satisfação dos funcionários aumentou 200%<br>
• Empresa se tornou referência mundial em agilidade<br>
• Você se tornou palestrante internacional<br><br>
<strong>Legado final:</strong><br>
Você provou que XP pode transformar organizações de qualquer tamanho, criando um movimento global de excelência em desenvolvimento de software.<br><br>
<strong>Sua jornada XP está verdadeiramente completa!</strong>`,
    explanation: `<strong>Transformação Completa Alcançada!</strong><br><br>
Você demonstrou como Extreme Programming pode escalar desde uma pequena equipe até organizações globais. Sua jornada prova que a combinação de práticas técnicas sólidas com valores humanos fundamentais pode criar transformações duradouras em qualquer escala.<br><br>
<strong>Impacto global criado:</strong><br>
• Milhões de usuários beneficiados por software de melhor qualidade<br>
• Milhares de desenvolvedores trabalhando com práticas XP<br>
• Centenas de empresas inspiradas pela transformação<br>
• Cultura global de excelência técnica e colaboração<br><br>
Você se tornou um verdadeiro agente de transformação mundial!`,
    references: [
      "Extreme Programming Explained - Kent Beck",
      "Scaling Agile @ Spotify - Henrik Kniberg",
      "The Art of Agile Development - James Shore",
      "http://www.extremeprogramming.org",
    ],
    choices: [{ text: "Começar nova jornada", next: "xp-role" }],
  },

  "xp-external-consulting": {
    id: "xp-external-consulting",
    text: `<strong>Consultoria Externa</strong><br><br>
Você se torna consultor externo, ajudando outras empresas a implementar XP baseado em sua experiência de sucesso.<br><br>
<strong>Impacto multiplicado:</strong><br>
• 20 empresas transformadas<br>
• 500+ desenvolvedores treinados<br>
• Metodologia reconhecida<br>
• Comunidade global criada<br><br>
<strong>Resultado:</strong> Você se torna referência mundial em implementação prática de XP.<br><br>
<strong>Sua jornada XP alcançou impacto global!</strong>`,
    choices: [
      { text: "Escrever livro sobre experiências", next: "xp-knowledge-sharing" },
      { text: "Concluir jornada com sucesso", next: "xp-conclusion" },
      { text: "Explorar novos desafios", next: "xp-advanced-scenario" },
      { text: "Recomeçar nova jornada", next: "xp-role" },
    ],
  },

  "xp-knowledge-sharing": {
    id: "xp-knowledge-sharing",
    text: `<strong>Compartilhamento de Conhecimento</strong><br><br>
Você documenta e compartilha todo o conhecimento adquirido, criando legado duradouro para comunidade XP.<br><br>
<strong>Conhecimento compartilhado:</strong><br>
• Livro "XP na Prática Real"<br>
• Palestras internacionais<br>
• Artigos técnicos<br>
• Curso online<br><br>
<strong>Legado criado:</strong> Milhares de profissionais beneficiados pelo conhecimento prático de XP.<br><br>
<strong>Sua contribuição para XP está completa!</strong>`,
    choices: [
      { text: "Concluir jornada", next: "xp-conclusion" },
      { text: "Continuar evolução", next: "xp-continuous-improvement" },
      { text: "Explorar novos horizontes", next: "xp-advanced-scenario" },
      { text: "Recomeçar", next: "xp-role" },
    ],
  },

  "xp-next-challenges": {
    id: "xp-next-challenges",
    text: `<strong>Próximos Desafios</strong><br><br>
Com XP consolidado, você identifica novos desafios para continuar evoluindo.<br><br>
<strong>Desafios identificados:</strong><br>
• XP para sistemas distribuídos<br>
• XP com inteligência artificial<br>
• XP para desenvolvimento mobile<br>
• XP em escala global<br><br>
<strong>Oportunidades:</strong> Pionear próxima evolução das práticas XP.<br><br>
<strong>Qual desafio você abraça?</strong>`,
    choices: [
      { text: "XP para sistemas distribuídos", next: "xp-distributed-systems" },
      { text: "XP com inteligência artificial", next: "xp-ai-integration" },
      { text: "XP global", next: "xp-global-scale" },
      { text: "Concluir jornada atual", next: "xp-conclusion" },
    ],
  },

  // Nodos finais para cenários avançados
  "xp-distributed-systems": {
    id: "xp-distributed-systems",
    text: `<strong>XP para Sistemas Distribuídos</strong><br><br>
Você pioneira adaptação de XP para desenvolvimento de sistemas distribuídos complexos.<br><br>
<strong>Adaptações criadas:</strong><br>
• TDD para microservices<br>
• Integração contínua distribuída<br>
• Pair programming remoto<br>
• Testes de sistema distribuído<br><br>
<strong>Resultado:</strong> Nova metodologia para sistemas modernos complexos.<br><br>
<strong>Impacto:</strong> Referência mundial para desenvolvimento distribuído ágil.`,
    choices: [
      { text: "Documentar metodologia", next: "xp-methodology-documentation" },
      { text: "Treinar outras equipes", next: "xp-distributed-training" },
      { text: "Concluir jornada", next: "xp-conclusion" },
      { text: "Explorar AI", next: "xp-ai-integration" },
    ],
  },

  "xp-ai-integration": {
    id: "xp-ai-integration",
    text: `<strong>XP com Inteligência Artificial</strong><br><br>
Você integra IA ao desenvolvimento XP, criando nova era de produtividade.<br><br>
<strong>Inovações implementadas:</strong><br>
• IA para geração de testes<br>
• Refatoração automática<br>
• Análise de qualidade em tempo real<br>
• Pair programming com IA<br><br>
<strong>Resultado:</strong> Desenvolvimento 10x mais eficiente mantendo qualidade XP.<br><br>
<strong>Revolução:</strong> Você criou o futuro do desenvolvimento de software.`,
    choices: [
      { text: "Publicar descobertas", next: "xp-ai-publication" },
      { text: "Treinar indústria", next: "xp-industry-training" },
      { text: "Concluir jornada", next: "xp-conclusion" },
      { text: "Explorar escala global", next: "xp-global-scale" },
    ],
  },

  "xp-global-scale": {
    id: "xp-global-scale",
    text: `<strong>XP em Escala Global</strong><br><br>
Você lidera implementação de XP em escala planetária, transformando indústria global de software.<br><br>
<strong>Impacto global:</strong><br>
• 1000+ empresas transformadas<br>
• 100.000+ desenvolvedores treinados<br>
• Padrão industrial estabelecido<br>
• Qualidade software global melhorada<br><br>
<strong>Legado:</strong> Você transformou como mundo desenvolve software.<br><br>
<strong>Sua jornada XP alcançou impacto planetário!</strong>`,
    explanation: `<strong>Transformação Global Completa!</strong><br><br>
Você alcançou o máximo impacto possível com Extreme Programming. Sua jornada demonstra como práticas técnicas sólidas combinadas com valores humanos podem transformar não apenas projetos, mas a indústria inteira.<br><br>
<strong>Legado planetário:</strong><br>
• Milhões de usuários beneficiados<br>
• Centenas de milhares de desenvolvedores impactados<br>
• Padrão global de qualidade estabelecido<br>
• Cultura mundial de excelência técnica<br><br>
Você é verdadeiramente um transformador global!`,
    references: [
      "Extreme Programming Explained - Kent Beck",
      "Global Software Development - Conchuir O Suilleabhain",
      "The Art of Agile Development - James Shore",
    ],
    choices: [{ text: "Concluir jornada épica", next: "xp-conclusion" }],
  },

  // Nodos complementares mínimos para evitar referências quebradas
  "xp-incremental-validation": {
    id: "xp-incremental-validation",
    text: `<strong>Validação Incremental</strong><br><br>
Você propõe implementar funcionalidades em incrementos pequenos para validar valor real antes de investir mais.<br><br>
<strong>Abordagem proposta:</strong><br>
• Implementar 1 funcionalidade por vez<br>
• Medir uso e impacto real<br>
• Decidir próximos passos baseado em dados<br>
• Cancelar o que não agrega valor<br><br>
<strong>Resultado:</strong> Foco em valor real, não em especulações.`,
    choices: [
      { text: "Implementar primeira funcionalidade", next: "xp-focused-implementation" },
      { text: "Estabelecer métricas de valor", next: "xp-value-metrics" },
      { text: "Continuar com Planning Game", next: "xp-planning-game" },
      { text: "Celebrar abordagem inteligente", next: "xp-celebration" },
    ],
  },

  "xp-stakeholder-negotiation": {
    id: "xp-stakeholder-negotiation",
    text: `<strong>Negociação com Stakeholders</strong><br><br>
Marina insiste em escopo completo. Você usa técnicas de negociação baseadas em dados e valor.<br><br>
<strong>Estratégia de negociação:</strong><br>
• Apresentar riscos concretos<br>
• Mostrar alternativas viáveis<br>
• Demonstrar valor incremental<br>
• Propor compromissos inteligentes<br><br>
<strong>Resultado:</strong> Acordo que satisfaz necessidades reais mantendo qualidade.`,
    choices: [
      { text: "Implementar acordo negociado", next: "xp-negotiated-implementation" },
      { text: "Monitorar satisfação", next: "xp-stakeholder-satisfaction" },
      { text: "Usar Planning Game para detalhar", next: "xp-planning-game" },
      { text: "Focar em valor comprovado", next: "xp-value-metrics" },
    ],
  },

  "xp-prototype": {
    id: "xp-prototype",
    text: `<strong>Prototipação Rápida</strong><br><br>
Marina quer ver como funcionalidades complexas se comportariam. Você cria protótipos rápidos para validação.<br><br>
<strong>Protótipos criados:</strong><br>
• Interface mockup em 2 dias<br>
• Simulação de fluxo de dados<br>
• Testes de usabilidade<br>
• Avaliação de complexidade<br><br>
<strong>Descobertas:</strong> 60% das funcionalidades têm alternativas mais simples com mesmo valor.`,
    choices: [
      { text: "Implementar versões simplificadas", next: "xp-simplified-implementation" },
      { text: "Validar com usuários reais", next: "xp-user-validation" },
      { text: "Usar Planning Game para priorizar", next: "xp-planning-game" },
      { text: "Focar em valor essencial", next: "xp-value-metrics" },
    ],
  },

  "xp-team-credibility": {
    id: "xp-team-credibility",
    text: `<strong>Estabelecendo Credibilidade Técnica</strong><br><br>
Marina questiona se a equipe tem capacidade técnica. Você demonstra competência através de resultados concretos.<br><br>
<strong>Demonstrações realizadas:</strong><br>
• Implementação rápida de feature complexa<br>
• Resolução de bug crítico em produção<br>
• Melhoria de performance significativa<br>
• Entrega antecipada de funcionalidade<br><br>
<strong>Resultado:</strong> Credibilidade técnica estabelecida, confiança restaurada.`,
    choices: [
      { text: "Usar credibilidade para influenciar decisões", next: "xp-technical-leadership" },
      { text: "Continuar demonstrando valor", next: "xp-value-metrics" },
      { text: "Focar em entregas consistentes", next: "xp-small-releases" },
      { text: "Estabelecer confiança duradoura", next: "xp-trust-building" },
    ],
  },

  // Nodos finais para completar referências mínimas
  "xp-focused-implementation": {
    id: "xp-focused-implementation",
    text: `<strong>Implementação Focada</strong><br><br>
Você implementa as 3 funcionalidades prioritárias com excelência técnica.<br><br>
<strong>Resultado:</strong> Funcionalidades entregues com qualidade excepcional e impacto comprovado.`,
    choices: [
      { text: "Medir impacto e sucesso", next: "xp-value-metrics" },
      { text: "Planejar próximas funcionalidades", next: "xp-continuous-planning" },
      { text: "Celebrar conquista", next: "xp-celebration" },
      { text: "Expandir práticas", next: "xp-scaling" },
    ],
  },

  "xp-continuous-planning": {
    id: "xp-continuous-planning",
    text: `<strong>Planejamento Contínuo</strong><br><br>
Você estabelece processo de planejamento contínuo baseado em feedback e valor real.<br><br>
<strong>Resultado:</strong> Planejamento ágil que se adapta à realidade do negócio.`,
    choices: [
      { text: "Implementar métricas de valor", next: "xp-value-metrics" },
      { text: "Treinar stakeholders", next: "xp-stakeholder-training" },
      { text: "Celebrar processo eficaz", next: "xp-celebration" },
      { text: "Expandir para outras equipes", next: "xp-scaling" },
    ],
  },

  "xp-continuous-prioritization": {
    id: "xp-continuous-prioritization",
    text: `<strong>Priorização Contínua</strong><br><br>
Você estabelece processo de priorização contínua baseada em feedback real e métricas de valor.<br><br>
<strong>Resultado:</strong> 100% das funcionalidades entregues são usadas e geram valor real.`,
    choices: [
      { text: "Automatizar coleta de métricas", next: "xp-automated-metrics" },
      { text: "Treinar outras equipes", next: "xp-scaling" },
      { text: "Celebrar resultados", next: "xp-celebration" },
      { text: "Continuar evolução", next: "xp-continuous-improvement" },
    ],
  },

  "xp-stakeholder-training": {
    id: "xp-stakeholder-training",
    text: `<strong>Treinamento de Stakeholders</strong><br><br>
Você treina stakeholders para trabalhar efetivamente com práticas XP.<br><br>
<strong>Resultado:</strong> Stakeholders se tornam parceiros efetivos no processo de desenvolvimento.`,
    choices: [
      { text: "Implementar governança ágil", next: "xp-agile-governance" },
      { text: "Medir satisfação", next: "xp-stakeholder-satisfaction" },
      { text: "Celebrar colaboração", next: "xp-celebration" },
      { text: "Expandir treinamento", next: "xp-scaling" },
    ],
  },

  // Nodos básicos para evitar referências quebradas
  "xp-pair-rotation": {
    id: "xp-pair-rotation",
    text: `<strong>Rotação de Pares</strong><br><br>
Implementação de rotação sistemática para maximizar transferência de conhecimento.<br><br>
<strong>Resultado:</strong> Conhecimento distribuído uniformemente na equipe.`,
    choices: [
      { text: "Medir distribuição conhecimento", next: "xp-knowledge-metrics" },
      { text: "Otimizar combinações", next: "xp-pair-optimization" },
      { text: "Expandir práticas", next: "xp-scaling" },
      { text: "Continuar evolução", next: "xp-continuous-improvement" },
    ],
  },

  "xp-pair-guidelines": {
    id: "xp-pair-guidelines",
    text: `<strong>Guidelines de Pair Programming</strong><br><br>
Criação de diretrizes para pair programming eficaz.<br><br>
<strong>Resultado:</strong> Pair programming consistente e produtivo em toda equipe.`,
    choices: [
      { text: "Treinar toda equipe", next: "xp-team-training" },
      { text: "Medir eficácia", next: "xp-quality-metrics" },
      { text: "Expandir para outras equipes", next: "xp-scaling" },
      { text: "Continuar aperfeiçoamento", next: "xp-continuous-improvement" },
    ],
  },

  "xp-team-training": {
    id: "xp-team-training",
    text: `<strong>Treinamento da Equipe</strong><br><br>
Programa intensivo de treinamento em práticas XP.<br><br>
<strong>Resultado:</strong> Equipe trabalha com coesão total e práticas consistentes.`,
    choices: [
      { text: "Criar programa mentoria", next: "xp-mentorship" },
      { text: "Avaliar progresso", next: "xp-team-assessment" },
      { text: "Expandir treinamento", next: "xp-scaling" },
      { text: "Celebrar competências", next: "xp-celebration" },
    ],
  },

  // Nodos mínimos finais
  "xp-quality-criteria": {
    id: "xp-quality-criteria",
    text: `<strong>Critérios de Qualidade</strong><br><br>
Estabelecimento de critérios não negociáveis de qualidade.<br><br>
<strong>Resultado:</strong> Qualidade consistente em todas as entregas.`,
    choices: [
      { text: "Implementar automação", next: "xp-test-automation" },
      { text: "Medir conformidade", next: "xp-quality-metrics" },
      { text: "Treinar equipe", next: "xp-team-training" },
      { text: "Expandir padrões", next: "xp-scaling" },
    ],
  },

  "xp-test-automation": {
    id: "xp-test-automation",
    text: `<strong>Automação de Testes</strong><br><br>
Automação completa da execução de testes.<br><br>
<strong>Resultado:</strong> Feedback instantâneo sobre qualidade.`,
    choices: [
      { text: "Integrar ao CI", next: "xp-continuous-integration" },
      { text: "Medir cobertura", next: "xp-quality-metrics" },
      { text: "Treinar equipe", next: "xp-team-training" },
      { text: "Celebrar automação", next: "xp-celebration" },
    ],
  },

  // Nodos básicos para referências restantes
  "xp-performance-tests": {
    id: "xp-performance-tests",
    text: `<strong>Testes de Performance</strong><br><br>
Integração de testes de performance no pipeline.<br><br>
<strong>Resultado:</strong> Performance garantida em cada release.`,
    choices: [
      { text: "Otimizar pipeline", next: "xp-continuous-integration" },
      { text: "Medir métricas", next: "xp-quality-metrics" },
      { text: "Expandir testes", next: "xp-scaling" },
      { text: "Continuar melhoria", next: "xp-continuous-improvement" },
    ],
  },

  "xp-build-policies": {
    id: "xp-build-policies",
    text: `<strong>Políticas de Build</strong><br><br>
Estabelecimento de políticas rigorosas para builds.<br><br>
<strong>Resultado:</strong> Qualidade consistente do código.`,
    choices: [
      { text: "Automatizar enforcement", next: "xp-continuous-integration" },
      { text: "Treinar equipe", next: "xp-team-training" },
      { text: "Medir conformidade", next: "xp-quality-metrics" },
      { text: "Expandir políticas", next: "xp-scaling" },
    ],
  },

  // Nodos para cenários específicos
  "xp-refactoring-guidelines": {
    id: "xp-refactoring-guidelines",
    text: `<strong>Guidelines de Refatoração</strong><br><br>
Criação de diretrizes para refatoração segura e eficaz.<br><br>
<strong>Resultado:</strong> Refatoração consistente e confiável.`,
    choices: [
      { text: "Treinar equipe", next: "xp-team-training" },
      { text: "Medir impacto", next: "xp-quality-metrics" },
      { text: "Automatizar análise", next: "xp-automated-reviews" },
      { text: "Expandir práticas", next: "xp-scaling" },
    ],
  },

  "xp-automated-reviews": {
    id: "xp-automated-reviews",
    text: `<strong>Code Reviews Automatizados</strong><br><br>
Implementação de code reviews focados em qualidade.<br><br>
<strong>Resultado:</strong> Qualidade de código consistente e objetiva.`,
    choices: [
      { text: "Integrar métricas", next: "xp-quality-metrics" },
      { text: "Treinar em padrões", next: "xp-design-patterns" },
      { text: "Expandir automação", next: "xp-scaling" },
      { text: "Celebrar qualidade", next: "xp-celebration" },
    ],
  },

  "xp-design-patterns": {
    id: "xp-design-patterns",
    text: `<strong>Padrões de Design</strong><br><br>
Treinamento da equipe em padrões de design avançados.<br><br>
<strong>Resultado:</strong> Arquitetura mais sólida e manutenível.`,
    choices: [
      { text: "Aplicar em refatoração", next: "xp-refactoring" },
      { text: "Medir impacto", next: "xp-quality-metrics" },
      { text: "Documentar padrões", next: "xp-architecture-patterns" },
      { text: "Expandir conhecimento", next: "xp-scaling" },
    ],
  },

  // Nodos finais mínimos necessários
  "xp-simple-reviews": {
    id: "xp-simple-reviews",
    text: `<strong>Code Reviews Focados em Simplicidade</strong><br><br>
Reviews que priorizam simplicidade sobre complexidade.<br><br>
<strong>Resultado:</strong> Código consistentemente simples.`,
    choices: [
      { text: "Medir complexidade", next: "xp-complexity-metrics" },
      { text: "Treinar princípios", next: "xp-solid-principles" },
      { text: "Estabelecer padrões", next: "xp-architecture-patterns" },
      { text: "Celebrar simplicidade", next: "xp-celebration" },
    ],
  },

  "xp-complexity-metrics": {
    id: "xp-complexity-metrics",
    text: `<strong>Métricas de Complexidade</strong><br><br>
Medição objetiva da complexidade do código.<br><br>
<strong>Resultado:</strong> Controle rigoroso da complexidade.`,
    choices: [
      { text: "Aplicar princípios SOLID", next: "xp-solid-principles" },
      { text: "Estabelecer limites", next: "xp-architecture-patterns" },
      { text: "Integrar ao CI", next: "xp-continuous-integration" },
      { text: "Celebrar simplicidade", next: "xp-celebration" },
    ],
  },

  "xp-solid-principles": {
    id: "xp-solid-principles",
    text: `<strong>Princípios SOLID</strong><br><br>
Aplicação rigorosa dos princípios SOLID no desenvolvimento.<br><br>
<strong>Resultado:</strong> Arquitetura sólida e extensível.`,
    choices: [
      { text: "Estabelecer padrões", next: "xp-architecture-patterns" },
      { text: "Medir qualidade", next: "xp-quality-metrics" },
      { text: "Treinar equipe", next: "xp-team-training" },
      { text: "Expandir práticas", next: "xp-scaling" },
    ],
  },

  "xp-architecture-patterns": {
    id: "xp-architecture-patterns",
    text: `<strong>Padrões de Arquitetura</strong><br><br>
Estabelecimento de padrões arquiteturais simples e eficazes.<br><br>
<strong>Resultado:</strong> Arquitetura consistente e compreensível.`,
    choices: [
      { text: "Documentar decisões", next: "xp-decision-log" },
      { text: "Medir conformidade", next: "xp-quality-metrics" },
      { text: "Treinar aplicação", next: "xp-team-training" },
      { text: "Celebrar consistência", next: "xp-celebration" },
    ],
  },

  // Últimos nodos para completar todas as referências
  "xp-customer-training": {
    id: "xp-customer-training",
    text: `<strong>Treinamento do Cliente</strong><br><br>
Treinamento para cliente escrever testes de aceitação eficazes.<br><br>
<strong>Resultado:</strong> Comunicação clara de requisitos.`,
    choices: [
      { text: "Automatizar testes", next: "xp-test-automation" },
      { text: "Integrar ao CI", next: "xp-continuous-integration" },
      { text: "Criar relatórios", next: "xp-progress-reports" },
      { text: "Celebrar colaboração", next: "xp-celebration" },
    ],
  },

  "xp-progress-reports": {
    id: "xp-progress-reports",
    text: `<strong>Relatórios de Progresso</strong><br><br>
Relatórios baseados em testes de aceitação aprovados.<br><br>
<strong>Resultado:</strong> Visibilidade clara do progresso real.`,
    choices: [
      { text: "Automatizar geração", next: "xp-test-automation" },
      { text: "Integrar métricas", next: "xp-value-metrics" },
      { text: "Treinar stakeholders", next: "xp-stakeholder-training" },
      { text: "Celebrar transparência", next: "xp-celebration" },
    ],
  },

  "xp-informative-workspace": {
    id: "xp-informative-workspace",
    text: `<strong>Workspace Informativo</strong><br><br>
Implementação de radiadores de informação no espaço de trabalho.<br><br>
<strong>Resultado:</strong> Informação relevante sempre visível para toda equipe.`,
    choices: [
      { text: "Criar zonas atividade", next: "xp-activity-zones" },
      { text: "Estabelecer etiqueta", next: "xp-collaboration-etiquette" },
      { text: "Medir efetividade", next: "xp-workspace-metrics" },
      { text: "Celebrar colaboração", next: "xp-celebration" },
    ],
  },

  "xp-activity-zones": {
    id: "xp-activity-zones",
    text: `<strong>Zonas de Atividade</strong><br><br>
Criação de zonas específicas para diferentes tipos de trabalho.<br><br>
<strong>Resultado:</strong> Espaço otimizado para máxima produtividade.`,
    choices: [
      { text: "Estabelecer etiqueta", next: "xp-collaboration-etiquette" },
      { text: "Medir efetividade", next: "xp-workspace-metrics" },
      { text: "Otimizar layout", next: "xp-workspace-optimization" },
      { text: "Celebrar ambiente", next: "xp-celebration" },
    ],
  },

  "xp-collaboration-etiquette": {
    id: "xp-collaboration-etiquette",
    text: `<strong>Etiqueta de Colaboração</strong><br><br>
Estabelecimento de regras para colaboração eficaz.<br><br>
<strong>Resultado:</strong> Ambiente harmonioso e produtivo.`,
    choices: [
      { text: "Medir satisfação", next: "xp-workspace-metrics" },
      { text: "Otimizar regras", next: "xp-workspace-optimization" },
      { text: "Treinar equipe", next: "xp-team-training" },
      { text: "Celebrar harmonia", next: "xp-celebration" },
    ],
  },

  "xp-workspace-metrics": {
    id: "xp-workspace-metrics",
    text: `<strong>Métricas do Workspace</strong><br><br>
Medição da eficácia do espaço colaborativo.<br><br>
<strong>Resultado:</strong> Dados objetivos sobre impacto do ambiente.`,
    choices: [
      { text: "Otimizar layout", next: "xp-workspace-optimization" },
      { text: "Expandir conceitos", next: "xp-scaling" },
      { text: "Documentar aprendizados", next: "xp-workspace-documentation" },
      { text: "Celebrar ambiente", next: "xp-celebration" },
    ],
  },

  // Nodos mínimos finais para evitar quebras
  "xp-workspace-optimization": {
    id: "xp-workspace-optimization",
    text: `<strong>Otimização do Workspace</strong><br><br>
Melhorias contínuas no ambiente de trabalho.<br><br>
<strong>Resultado:</strong> Espaço sempre evoluindo para máxima eficácia.`,
    choices: [
      { text: "Medir impacto", next: "xp-workspace-metrics" },
      { text: "Expandir conceitos", next: "xp-scaling" },
      { text: "Treinar outras equipes", next: "xp-team-training" },
      { text: "Celebrar evolução", next: "xp-celebration" },
    ],
  },

  "xp-scope-lessons": {
    id: "xp-scope-lessons",
    text: `<strong>Lições sobre Scope</strong><br><br>
Documentação das lições aprendidas sobre gestão de escopo.<br><br>
<strong>Resultado:</strong> Conhecimento preservado para futuras situações.`,
    choices: [
      { text: "Aplicar em novos projetos", next: "xp-scaling" },
      { text: "Treinar stakeholders", next: "xp-stakeholder-training" },
      { text: "Criar processo", next: "xp-continuous-planning" },
      { text: "Celebrar sabedoria", next: "xp-celebration" },
    ],
  },

  "xp-velocity-measurement": {
    id: "xp-velocity-measurement",
    text: `<strong>Medição de Velocidade</strong><br><br>
Estabelecimento de métricas precisas de velocidade.<br><br>
<strong>Resultado:</strong> Planejamento baseado em capacidade real.`,
    choices: [
      { text: "Usar para planejamento", next: "xp-planning-game" },
      { text: "Otimizar gargalos", next: "xp-bottleneck-optimization" },
      { text: "Comunicar progresso", next: "xp-progress-communication" },
      { text: "Melhorar processo", next: "xp-continuous-improvement" },
    ],
  },

  "xp-yagni-training": {
    id: "xp-yagni-training",
    text: `<strong>Treinamento YAGNI</strong><br><br>
Capacitação da equipe para identificação de complexidade desnecessária.<br><br>
<strong>Resultado:</strong> Equipe consistentemente simples.`,
    choices: [
      { text: "Aplicar em arquitetura", next: "xp-simple-design" },
      { text: "Documentar decisões", next: "xp-decision-log" },
      { text: "Medir impacto", next: "xp-velocity-measurement" },
      { text: "Celebrar simplicidade", next: "xp-celebration" },
    ],
  },

  "xp-decision-log": {
    id: "xp-decision-log",
    text: `<strong>Log de Decisões</strong><br><br>
Documentação sistemática de decisões de simplicidade.<br><br>
<strong>Resultado:</strong> Histórico claro do raciocínio por trás das escolhas.`,
    choices: [
      { text: "Usar para treinamento", next: "xp-team-training" },
      { text: "Compartilhar conhecimento", next: "xp-knowledge-sharing" },
      { text: "Aplicar em scaling", next: "xp-scaling" },
      { text: "Celebrar transparência", next: "xp-celebration" },
    ],
  },

  // Últimos nodos necessários
  "xp-practice-documentation": {
    id: "xp-practice-documentation",
    text: `<strong>Documentação das Práticas</strong><br><br>
Documentação completa das práticas XP implementadas.<br><br>
<strong>Resultado:</strong> Conhecimento organizacional preservado.`,
    choices: [
      { text: "Criar centro excelência", next: "xp-excellence-center" },
      { text: "Treinar outras equipes", next: "xp-scaling" },
      { text: "Compartilhar externamente", next: "xp-external-consulting" },
      { text: "Celebrar conhecimento", next: "xp-celebration" },
    ],
  },

  "xp-bottleneck-optimization": {
    id: "xp-bottleneck-optimization",
    text: `<strong>Otimização de Gargalos</strong><br><br>
Identificação e eliminação sistemática de gargalos.<br><br>
<strong>Resultado:</strong> Fluxo otimizado de desenvolvimento.`,
    choices: [
      { text: "Medir melhoria", next: "xp-velocity-measurement" },
      { text: "Comunicar resultados", next: "xp-progress-communication" },
      { text: "Aplicar aprendizados", next: "xp-continuous-improvement" },
      { text: "Celebrar eficiência", next: "xp-celebration" },
    ],
  },

  "xp-progress-communication": {
    id: "xp-progress-communication",
    text: `<strong>Comunicação de Progresso</strong><br><br>
Comunicação clara e regular do progresso para stakeholders.<br><br>
<strong>Resultado:</strong> Stakeholders informados e engajados.`,
    choices: [
      { text: "Automatizar relatórios", next: "xp-progress-reports" },
      { text: "Treinar stakeholders", next: "xp-stakeholder-training" },
      { text: "Melhorar processo", next: "xp-continuous-improvement" },
      { text: "Celebrar transparência", next: "xp-celebration" },
    ],
  },

  // Nodos finais mínimos
  "xp-team-assessment": {
    id: "xp-team-assessment",
    text: `<strong>Avaliação da Equipe</strong><br><br>
Avaliação contínua das competências e progresso da equipe.<br><br>
<strong>Resultado:</strong> Desenvolvimento direcionado das habilidades.`,
    choices: [
      { text: "Criar plano desenvolvimento", next: "xp-team-training" },
      { text: "Implementar mentoria", next: "xp-mentorship" },
      { text: "Expandir avaliação", next: "xp-scaling" },
      { text: "Celebrar crescimento", next: "xp-celebration" },
    ],
  },

  "xp-training-expansion": {
    id: "xp-training-expansion",
    text: `<strong>Expansão do Treinamento</strong><br><br>
Expansão do programa de treinamento para toda organização.<br><br>
<strong>Resultado:</strong> Competências XP disseminadas amplamente.`,
    choices: [
      { text: "Criar certificação", next: "xp-certification" },
      { text: "Estabelecer comunidade", next: "xp-community" },
      { text: "Medir impacto", next: "xp-organizational-metrics" },
      { text: "Celebrar expansão", next: "xp-celebration" },
    ],
  },

  "xp-mentorship-expansion": {
    id: "xp-mentorship-expansion",
    text: `<strong>Expansão da Mentoria</strong><br><br>
Expansão do programa de mentoria para múltiplas equipes.<br><br>
<strong>Resultado:</strong> Rede robusta de mentores XP.`,
    choices: [
      { text: "Criar certificação", next: "xp-certification" },
      { text: "Medir impacto", next: "xp-mentorship-impact" },
      { text: "Estabelecer padrões", next: "xp-excellence-center" },
      { text: "Celebrar rede", next: "xp-celebration" },
    ],
  },

  "xp-certification": {
    id: "xp-certification",
    text: `<strong>Programa de Certificação</strong><br><br>
Criação de programa formal de certificação em práticas XP.<br><br>
<strong>Resultado:</strong> Padrão reconhecido de competência XP.`,
    choices: [
      { text: "Medir impacto", next: "xp-certification-impact" },
      { text: "Expandir programa", next: "xp-external-consulting" },
      { text: "Criar comunidade", next: "xp-community" },
      { text: "Celebrar padrão", next: "xp-celebration" },
    ],
  },

  "xp-mentorship-impact": {
    id: "xp-mentorship-impact",
    text: `<strong>Impacto da Mentoria</strong><br><br>
Medição do impacto do programa de mentoria.<br><br>
<strong>Resultado:</strong> Evidência clara do valor da mentoria.`,
    choices: [
      { text: "Expandir programa", next: "xp-mentorship-expansion" },
      { text: "Criar certificação", next: "xp-certification" },
      { text: "Documentar resultados", next: "xp-impact-documentation" },
      { text: "Celebrar sucesso", next: "xp-celebration" },
    ],
  },

  "xp-innovation": {
    id: "xp-innovation",
    text: `<strong>Inovação em Práticas</strong><br><br>
Desenvolvimento de novas práticas XP baseadas na experiência.<br><br>
<strong>Resultado:</strong> Evolução contínua das práticas XP.`,
    choices: [
      { text: "Testar com equipes", next: "xp-pilot-testing" },
      { text: "Documentar inovações", next: "xp-innovation-documentation" },
      { text: "Compartilhar conhecimento", next: "xp-knowledge-sharing" },
      { text: "Celebrar inovação", next: "xp-celebration" },
    ],
  },

  "xp-organizational-impact": {
    id: "xp-organizational-impact",
    text: `<strong>Impacto Organizacional</strong><br><br>
Medição do impacto organizacional completo das práticas XP.<br><br>
<strong>Resultado:</strong> Evidência do valor transformacional do XP.`,
    choices: [
      { text: "Expandir para outras organizações", next: "xp-external-consulting" },
      { text: "Documentar case study", next: "xp-case-study" },
      { text: "Criar benchmark", next: "xp-benchmark-creation" },
      { text: "Celebrar transformação", next: "xp-celebration" },
    ],
  },

  // Nodos adicionais mínimos para completar
  "xp-organizational-metrics": {
    id: "xp-organizational-metrics",
    text: `<strong>Métricas Organizacionais</strong><br><br>
Estabelecimento de métricas de qualidade em nível organizacional.<br><br>
<strong>Resultado:</strong> Visibilidade completa da maturidade XP.`,
    choices: [
      { text: "Usar para melhoria", next: "xp-continuous-improvement" },
      { text: "Compartilhar resultados", next: "xp-organizational-impact" },
      { text: "Expandir medição", next: "xp-scaling" },
      { text: "Celebrar progresso", next: "xp-celebration" },
    ],
  },

  "xp-compliance-documentation": {
    id: "xp-compliance-documentation",
    text: `<strong>Documentação para Compliance</strong><br><br>
Adaptação da documentação XP para atender requisitos de compliance.<br><br>
<strong>Resultado:</strong> XP compatível com ambientes regulados.`,
    choices: [
      { text: "Expandir para mobile", next: "xp-mobile-scaling" },
      { text: "Criar certificação", next: "xp-certification" },
      { text: "Documentar processo", next: "xp-process-documentation" },
      { text: "Celebrar conformidade", next: "xp-celebration" },
    ],
  },

  "xp-mobile-scaling": {
    id: "xp-mobile-scaling",
    text: `<strong>Scaling para Mobile</strong><br><br>
Adaptação das práticas XP para desenvolvimento mobile.<br><br>
<strong>Resultado:</strong> XP eficaz em contexto mobile.`,
    choices: [
      { text: "Criar coaches", next: "xp-coach-training" },
      { text: "Estabelecer comunidade", next: "xp-community" },
      { text: "Medir resultados", next: "xp-mobile-metrics" },
      { text: "Celebrar adaptação", next: "xp-celebration" },
    ],
  },

  "xp-coach-training": {
    id: "xp-coach-training",
    text: `<strong>Treinamento de Coaches</strong><br><br>
Desenvolvimento de coaches internos para práticas XP.<br><br>
<strong>Resultado:</strong> Rede sustentável de expertise XP.`,
    choices: [
      { text: "Estabelecer comunidade", next: "xp-community" },
      { text: "Criar certificação", next: "xp-certification" },
      { text: "Medir eficácia", next: "xp-coach-effectiveness" },
      { text: "Celebrar liderança", next: "xp-celebration" },
    ],
  },

  "xp-community": {
    id: "xp-community",
    text: `<strong>Comunidade de Prática</strong><br><br>
Estabelecimento de comunidade ativa de práticas XP.<br><br>
<strong>Resultado:</strong> Aprendizado e melhoria colaborativos.`,
    choices: [
      { text: "Expandir externamente", next: "xp-external-consulting" },
      { text: "Criar eventos", next: "xp-community-events" },
      { text: "Medir engajamento", next: "xp-community-metrics" },
      { text: "Celebrar comunidade", next: "xp-celebration" },
    ],
  },

  // Nodos finais básicos
  "xp-agile-governance": {
    id: "xp-agile-governance",
    text: `<strong>Governança Ágil</strong><br><br>
Implementação de governança compatível com práticas ágeis.<br><br>
<strong>Resultado:</strong> Controle sem burocracia excessiva.`,
    choices: [
      { text: "Medir eficácia", next: "xp-governance-metrics" },
      { text: "Treinar gestores", next: "xp-management-training" },
      { text: "Expandir modelo", next: "xp-scaling" },
      { text: "Celebrar equilíbrio", next: "xp-celebration" },
    ],
  },

  "xp-stakeholder-satisfaction": {
    id: "xp-stakeholder-satisfaction",
    text: `<strong>Satisfação dos Stakeholders</strong><br><br>
Medição e melhoria da satisfação dos stakeholders.<br><br>
<strong>Resultado:</strong> Stakeholders altamente satisfeitos com processo.`,
    choices: [
      { text: "Otimizar processo", next: "xp-process-optimization" },
      { text: "Expandir práticas", next: "xp-scaling" },
      { text: "Documentar sucessos", next: "xp-success-documentation" },
      { text: "Celebrar relacionamento", next: "xp-celebration" },
    ],
  },

  "xp-negotiated-implementation": {
    id: "xp-negotiated-implementation",
    text: `<strong>Implementação Negociada</strong><br><br>
Implementação do acordo negociado com stakeholders.<br><br>
<strong>Resultado:</strong> Entrega que satisfaz necessidades reais.`,
    choices: [
      { text: "Monitorar satisfação", next: "xp-stakeholder-satisfaction" },
      { text: "Medir valor", next: "xp-value-metrics" },
      { text: "Documentar processo", next: "xp-negotiation-process" },
      { text: "Celebrar acordo", next: "xp-celebration" },
    ],
  },

  "xp-simplified-implementation": {
    id: "xp-simplified-implementation",
    text: `<strong>Implementação Simplificada</strong><br><br>
Implementação das versões simplificadas das funcionalidades.<br><br>
<strong>Resultado:</strong> Maior valor com menor complexidade.`,
    choices: [
      { text: "Validar com usuários", next: "xp-user-validation" },
      { text: "Medir impacto", next: "xp-value-metrics" },
      { text: "Refinar requisitos", next: "xp-requirements-refinement" },
      { text: "Celebrar simplicidade", next: "xp-celebration" },
    ],
  },

  "xp-user-validation": {
    id: "xp-user-validation",
    text: `<strong>Validação com Usuários</strong><br><br>
Validação direta das funcionalidades com usuários finais.<br><br>
<strong>Resultado:</strong> Confirmação do valor real entregue.`,
    choices: [
      { text: "Refinar requisitos", next: "xp-requirements-refinement" },
      { text: "Planejar próximas features", next: "xp-planning-game" },
      { text: "Medir satisfação", next: "xp-user-satisfaction" },
      { text: "Celebrar validação", next: "xp-celebration" },
    ],
  },

  "xp-requirements-refinement": {
    id: "xp-requirements-refinement",
    text: `<strong>Refinamento de Requisitos</strong><br><br>
Refinamento contínuo dos requisitos baseado em feedback.<br><br>
<strong>Resultado:</strong> Requisitos sempre alinhados com necessidades reais.`,
    choices: [
      { text: "Planejar implementação", next: "xp-planning-game" },
      { text: "Validar mudanças", next: "xp-user-validation" },
      { text: "Documentar aprendizados", next: "xp-requirements-documentation" },
      { text: "Celebrar agilidade", next: "xp-celebration" },
    ],
  },

  "xp-technical-leadership": {
    id: "xp-technical-leadership",
    text: `<strong>Liderança Técnica</strong><br><br>
Exercício de liderança técnica baseada em credibilidade comprovada.<br><br>
<strong>Resultado:</strong> Influência positiva nas decisões técnicas.`,
    choices: [
      { text: "Estabelecer processo demo", next: "xp-demo-process" },
      { text: "Documentar competências", next: "xp-competency-documentation" },
      { text: "Construir confiança", next: "xp-trust-building" },
      { text: "Celebrar liderança", next: "xp-celebration" },
    ],
  },

  // Nodos finais mínimos para evitar quebras
  "xp-automated-metrics": {
    id: "xp-automated-metrics",
    text: `<strong>Métricas Automatizadas</strong><br><br>
Automação da coleta e análise de métricas.<br><br>
<strong>Resultado:</strong> Insights contínuos sem esforço manual.`,
    choices: [
      { text: "Otimizar dashboards", next: "xp-dashboard-optimization" },
      { text: "Treinar interpretação", next: "xp-metrics-training" },
      { text: "Expandir coleta", next: "xp-scaling" },
      { text: "Celebrar automação", next: "xp-celebration" },
    ],
  },

  "xp-knowledge-metrics": {
    id: "xp-knowledge-metrics",
    text: `<strong>Métricas de Conhecimento</strong><br><br>
Medição da distribuição de conhecimento na equipe.<br><br>
<strong>Resultado:</strong> Visibilidade sobre knowledge sharing.`,
    choices: [
      { text: "Otimizar rotação", next: "xp-pair-optimization" },
      { text: "Expandir práticas", next: "xp-collective-practices" },
      { text: "Documentar lições", next: "xp-pairing-lessons" },
      { text: "Celebrar conhecimento", next: "xp-celebration" },
    ],
  },

  "xp-pair-optimization": {
    id: "xp-pair-optimization",
    text: `<strong>Otimização de Pares</strong><br><br>
Otimização das combinações de pares para máximo aprendizado.<br><br>
<strong>Resultado:</strong> Pair programming maximamente eficaz.`,
    choices: [
      { text: "Expandir práticas", next: "xp-collective-practices" },
      { text: "Documentar lições", next: "xp-pairing-lessons" },
      { text: "Medir conhecimento", next: "xp-knowledge-metrics" },
      { text: "Celebrar colaboração", next: "xp-celebration" },
    ],
  },

  "xp-collective-practices": {
    id: "xp-collective-practices",
    text: `<strong>Práticas Coletivas</strong><br><br>
Expansão das práticas coletivas além do pair programming.<br><br>
<strong>Resultado:</strong> Colaboração em todas as atividades.`,
    choices: [
      { text: "Documentar benefícios", next: "xp-pairing-lessons" },
      { text: "Medir impacto", next: "xp-knowledge-metrics" },
      { text: "Expandir equipes", next: "xp-scaling" },
      { text: "Celebrar coletividade", next: "xp-celebration" },
    ],
  },

  "xp-pairing-lessons": {
    id: "xp-pairing-lessons",
    text: `<strong>Lições de Pairing</strong><br><br>
Documentação das lições aprendidas com pair programming.<br><br>
<strong>Resultado:</strong> Conhecimento preservado para melhoria contínua.`,
    choices: [
      { text: "Aplicar em treinamento", next: "xp-team-training" },
      { text: "Compartilhar conhecimento", next: "xp-knowledge-sharing" },
      { text: "Expandir práticas", next: "xp-scaling" },
      { text: "Celebrar aprendizado", next: "xp-celebration" },
    ],
  },

  // Últimos nodos necessários para completar todas as referências
  "xp-negotiation-process": {
    id: "xp-negotiation-process",
    text: `<strong>Processo de Negociação</strong><br><br>
Documentação do processo eficaz de negociação com stakeholders.<br><br>
<strong>Resultado:</strong> Processo replicável para futuras negociações.`,
    choices: [
      { text: "Treinar outros em negociação", next: "xp-negotiation-training" },
      { text: "Aplicar em novos projetos", next: "xp-scaling" },
      { text: "Medir eficácia", next: "xp-negotiation-effectiveness" },
      { text: "Celebrar processo", next: "xp-celebration" },
    ],
  },

  "xp-negotiation-training": {
    id: "xp-negotiation-training",
    text: `<strong>Treinamento em Negociação</strong><br><br>
Treinamento de outros profissionais em técnicas de negociação eficaz.<br><br>
<strong>Resultado:</strong> Capacidade de negociação distribuída na organização.`,
    choices: [
      { text: "Medir eficácia", next: "xp-negotiation-effectiveness" },
      { text: "Expandir programa", next: "xp-scaling" },
      { text: "Documentar melhores práticas", next: "xp-negotiation-best-practices" },
      { text: "Celebrar capacitação", next: "xp-celebration" },
    ],
  },

  "xp-demo-process": {
    id: "xp-demo-process",
    text: `<strong>Processo de Demonstração</strong><br><br>
Estabelecimento de processo regular de demonstrações técnicas.<br><br>
<strong>Resultado:</strong> Credibilidade técnica mantida através de evidências.`,
    choices: [
      { text: "Documentar competências", next: "xp-competency-documentation" },
      { text: "Construir confiança", next: "xp-trust-building" },
      { text: "Expandir práticas", next: "xp-scaling" },
      { text: "Celebrar transparência", next: "xp-celebration" },
    ],
  },

  "xp-competency-documentation": {
    id: "xp-competency-documentation",
    text: `<strong>Documentação de Competências</strong><br><br>
Documentação sistemática das competências técnicas da equipe.<br><br>
<strong>Resultado:</strong> Visibilidade clara das capacidades técnicas.`,
    choices: [
      { text: "Usar para desenvolvimento", next: "xp-team-training" },
      { text: "Construir confiança", next: "xp-trust-building" },
      { text: "Expandir modelo", next: "xp-scaling" },
      { text: "Celebrar competência", next: "xp-celebration" },
    ],
  },

  "xp-trust-building": {
    id: "xp-trust-building",
    text: `<strong>Construção de Confiança</strong><br><br>
Estratégias sistemáticas para construção de confiança com stakeholders.<br><br>
<strong>Resultado:</strong> Relacionamentos baseados em confiança mútua.`,
    choices: [
      { text: "Medir satisfação", next: "xp-stakeholder-satisfaction" },
      { text: "Expandir relacionamentos", next: "xp-relationship-expansion" },
      { text: "Documentar estratégias", next: "xp-trust-strategies" },
      { text: "Celebrar confiança", next: "xp-celebration" },
    ],
  },

  // Nodos finais para completar qualquer referência restante
  "xp-test-training": {
    id: "xp-test-training",
    text: `<strong>Treinamento em Testes</strong><br><br>
Capacitação da equipe em técnicas avançadas de teste.<br><br>
<strong>Resultado:</strong> Equipe especializada em qualidade.`,
    choices: [
      { text: "Medir cobertura", next: "xp-test-metrics" },
      { text: "Automatizar execução", next: "xp-test-automation" },
      { text: "Expandir conhecimento", next: "xp-scaling" },
      { text: "Celebrar qualidade", next: "xp-celebration" },
    ],
  },

  "xp-test-metrics": {
    id: "xp-test-metrics",
    text: `<strong>Métricas de Testes</strong><br><br>
Implementação de métricas abrangentes sobre qualidade dos testes.<br><br>
<strong>Resultado:</strong> Visibilidade completa sobre eficácia dos testes.`,
    choices: [
      { text: "Otimizar cobertura", next: "xp-coverage-optimization" },
      { text: "Automatizar análise", next: "xp-test-automation" },
      { text: "Treinar interpretação", next: "xp-metrics-interpretation" },
      { text: "Celebrar métricas", next: "xp-celebration" },
    ],
  },

  // Nodos mínimos finais
  "xp-velocity-optimization": {
    id: "xp-velocity-optimization",
    text: `<strong>Otimização de Velocidade</strong><br><br>
Otimização sistemática dos fatores que afetam velocidade da equipe.<br><br>
<strong>Resultado:</strong> Velocidade consistente e previsível.`,
    choices: [
      { text: "Comunicar progresso", next: "xp-progress-communication" },
      { text: "Medir impacto", next: "xp-velocity-measurement" },
      { text: "Aplicar aprendizados", next: "xp-continuous-improvement" },
      { text: "Celebrar eficiência", next: "xp-celebration" },
    ],
  },

  // Nodos básicos para evitar qualquer referência quebrada
  "xp-workspace-documentation": {
    id: "xp-workspace-documentation",
    text: `<strong>Documentação do Workspace</strong><br><br>
Documentação dos aprendizados sobre ambiente colaborativo.<br><br>
<strong>Resultado:</strong> Conhecimento replicável sobre workspace eficaz.`,
    choices: [
      { text: "Aplicar em outras equipes", next: "xp-scaling" },
      { text: "Continuar otimização", next: "xp-workspace-optimization" },
      { text: "Compartilhar conhecimento", next: "xp-knowledge-sharing" },
      { text: "Celebrar ambiente", next: "xp-celebration" },
    ],
  },

  "xp-process-documentation": {
    id: "xp-process-documentation",
    text: `<strong>Documentação de Processos</strong><br><br>
Documentação completa dos processos XP implementados.<br><br>
<strong>Resultado:</strong> Processos replicáveis e melhoráveis.`,
    choices: [
      { text: "Usar para scaling", next: "xp-scaling" },
      { text: "Treinar outras equipes", next: "xp-team-training" },
      { text: "Criar centro excelência", next: "xp-excellence-center" },
      { text: "Celebrar sistematização", next: "xp-celebration" },
    ],
  },

  "xp-methodology-documentation": {
    id: "xp-methodology-documentation",
    text: `<strong>Documentação de Metodologia</strong><br><br>
Documentação da metodologia adaptada para sistemas distribuídos.<br><br>
<strong>Resultado:</strong> Nova metodologia documentada e replicável.`,
    choices: [
      { text: "Treinar outras equipes", next: "xp-distributed-training" },
      { text: "Publicar descobertas", next: "xp-publication" },
      { text: "Concluir jornada", next: "xp-conclusion" },
      { text: "Explorar AI", next: "xp-ai-integration" },
    ],
  },

  "xp-distributed-training": {
    id: "xp-distributed-training",
    text: `<strong>Treinamento Distribuído</strong><br><br>
Treinamento de equipes em XP para sistemas distribuídos.<br><br>
<strong>Resultado:</strong> Expertise distribuída disseminada.`,
    choices: [
      { text: "Medir impacto", next: "xp-distributed-impact" },
      { text: "Expandir programa", next: "xp-scaling" },
      { text: "Concluir jornada", next: "xp-conclusion" },
      { text: "Celebrar inovação", next: "xp-celebration" },
    ],
  },

  "xp-ai-publication": {
    id: "xp-ai-publication",
    text: `<strong>Publicação sobre XP+AI</strong><br><br>
Publicação das descobertas sobre integração de XP com IA.<br><br>
<strong>Resultado:</strong> Conhecimento compartilhado com comunidade global.`,
    choices: [
      { text: "Treinar indústria", next: "xp-industry-training" },
      { text: "Concluir jornada", next: "xp-conclusion" },
      { text: "Explorar escala global", next: "xp-global-scale" },
      { text: "Celebrar contribuição", next: "xp-celebration" },
    ],
  },

  "xp-industry-training": {
    id: "xp-industry-training",
    text: `<strong>Treinamento da Indústria</strong><br><br>
Treinamento da indústria inteira em XP com IA.<br><br>
<strong>Resultado:</strong> Transformação industrial em larga escala.`,
    choices: [
      { text: "Concluir jornada", next: "xp-conclusion" },
      { text: "Explorar escala global", next: "xp-global-scale" },
      { text: "Medir impacto global", next: "xp-global-impact" },
      { text: "Celebrar revolução", next: "xp-celebration" },
    ],
  },

  // Outros nodos finais básicos para completar
  "xp-excellence-centers": {
    id: "xp-excellence-centers",
    text: `<strong>Centros de Excelência Globais</strong><br><br>
Criação de múltiplos centros de excelência XP ao redor do mundo.<br><br>
<strong>Resultado:</strong> Rede global de expertise XP.`,
    choices: [
      { text: "Adaptar para trabalho remoto", next: "xp-remote-adaptation" },
      { text: "Focar em cultura", next: "xp-global-culture" },
      { text: "Medir impacto", next: "xp-global-impact" },
      { text: "Celebrar rede", next: "xp-celebration" },
    ],
  },

  "xp-cultural-adaptation": {
    id: "xp-cultural-adaptation",
    text: `<strong>Adaptação Cultural</strong><br><br>
Adaptação das práticas XP para diferentes culturas organizacionais.<br><br>
<strong>Resultado:</strong> XP eficaz em contextos culturais diversos.`,
    choices: [
      { text: "Criar centros excelência", next: "xp-excellence-centers" },
      { text: "Adaptar para remoto", next: "xp-remote-adaptation" },
      { text: "Focar em cultura profunda", next: "xp-global-culture" },
      { text: "Celebrar diversidade", next: "xp-celebration" },
    ],
  },

  "xp-remote-adaptation": {
    id: "xp-remote-adaptation",
    text: `<strong>Adaptação para Trabalho Remoto</strong><br><br>
Adaptação das práticas XP para equipes distribuídas remotamente.<br><br>
<strong>Resultado:</strong> XP eficaz em ambiente 100% remoto.`,
    choices: [
      { text: "Focar em cultura", next: "xp-global-culture" },
      { text: "Criar centros virtuais", next: "xp-virtual-centers" },
      { text: "Medir eficácia", next: "xp-remote-effectiveness" },
      { text: "Celebrar adaptação", next: "xp-celebration" },
    ],
  },

  // Nodos finais para completar qualquer referência que possa estar faltando
  "xp-global-impact": {
    id: "xp-global-impact",
    text: `<strong>Impacto Global Medido</strong><br><br>
Medição completa do impacto global das iniciativas XP.<br><br>
<strong>Resultado:</strong> Evidência quantitativa da transformação mundial.`,
    choices: [
      { text: "Concluir jornada épica", next: "xp-conclusion" },
      { text: "Documentar legado", next: "xp-legacy-documentation" },
      { text: "Continuar evolução", next: "xp-continuous-improvement" },
      { text: "Celebrar conquista global", next: "xp-celebration" },
    ],
  },

  "xp-virtual-centers": {
    id: "xp-virtual-centers",
    text: `<strong>Centros Virtuais</strong><br><br>
Criação de centros de excelência virtuais para trabalho remoto.<br><br>
<strong>Resultado:</strong> Expertise XP acessível globalmente online.`,
    choices: [
      { text: "Medir eficácia", next: "xp-virtual-effectiveness" },
      { text: "Expandir alcance", next: "xp-global-reach" },
      { text: "Focar em cultura", next: "xp-global-culture" },
      { text: "Celebrar inovação", next: "xp-celebration" },
    ],
  },

  "xp-legacy-documentation": {
    id: "xp-legacy-documentation",
    text: `<strong>Documentação do Legado</strong><br><br>
Documentação completa do legado criado pela transformação XP.<br><br>
<strong>Resultado:</strong> História preservada para futuras gerações.`,
    choices: [
      { text: "Compartilhar amplamente", next: "xp-knowledge-sharing" },
      { text: "Concluir jornada", next: "xp-conclusion" },
      { text: "Continuar evolução", next: "xp-continuous-improvement" },
      { text: "Celebrar legado", next: "xp-celebration" },
    ],
  },

  // Nodos básicos para evitar qualquer referência quebrada remanescente
  "xp-pilot-testing": {
    id: "xp-pilot-testing",
    text: `<strong>Testes Piloto</strong><br><br>
Teste das inovações XP com equipes piloto.<br><br>
<strong>Resultado:</strong> Validação das novas práticas.`,
    choices: [
      { text: "Documentar resultados", next: "xp-innovation-documentation" },
      { text: "Expandir implementação", next: "xp-scaling" },
      { text: "Compartilhar aprendizados", next: "xp-knowledge-sharing" },
      { text: "Celebrar inovação", next: "xp-celebration" },
    ],
  },

  "xp-innovation-documentation": {
    id: "xp-innovation-documentation",
    text: `<strong>Documentação de Inovações</strong><br><br>
Documentação sistemática das inovações em práticas XP.<br><br>
<strong>Resultado:</strong> Novas práticas documentadas e replicáveis.`,
    choices: [
      { text: "Compartilhar conhecimento", next: "xp-knowledge-sharing" },
      { text: "Testar com mais equipes", next: "xp-pilot-testing" },
      { text: "Criar centro inovação", next: "xp-innovation-center" },
      { text: "Celebrar criatividade", next: "xp-celebration" },
    ],
  },

  "xp-case-study": {
    id: "xp-case-study",
    text: `<strong>Case Study Organizacional</strong><br><br>
Criação de case study detalhado da transformação organizacional.<br><br>
<strong>Resultado:</strong> Exemplo replicável para outras organizações.`,
    choices: [
      { text: "Compartilhar externamente", next: "xp-external-consulting" },
      { text: "Criar benchmark", next: "xp-benchmark-creation" },
      { text: "Publicar amplamente", next: "xp-publication" },
      { text: "Celebrar exemplo", next: "xp-celebration" },
    ],
  },

  "xp-benchmark-creation": {
    id: "xp-benchmark-creation",
    text: `<strong>Criação de Benchmark</strong><br><br>
Estabelecimento de benchmark industrial para práticas XP.<br><br>
<strong>Resultado:</strong> Padrão de referência para a indústria.`,
    choices: [
      { text: "Compartilhar com indústria", next: "xp-industry-sharing" },
      { text: "Expandir globalmente", next: "xp-global-benchmark" },
      { text: "Documentar metodologia", next: "xp-benchmark-methodology" },
      { text: "Celebrar padrão", next: "xp-celebration" },
    ],
  },

  // Nodos absolutamente finais para completar qualquer possível referência
  "xp-mobile-metrics": {
    id: "xp-mobile-metrics",
    text: `<strong>Métricas Mobile</strong><br><br>
Métricas específicas para desenvolvimento mobile com XP.<br><br>
<strong>Resultado:</strong> Visibilidade sobre eficácia do XP mobile.`,
    choices: [
      { text: "Otimizar práticas", next: "xp-mobile-optimization" },
      { text: "Expandir implementação", next: "xp-scaling" },
      { text: "Documentar resultados", next: "xp-mobile-documentation" },
      { text: "Celebrar adaptação", next: "xp-celebration" },
    ],
  },

  "xp-coach-effectiveness": {
    id: "xp-coach-effectiveness",
    text: `<strong>Eficácia dos Coaches</strong><br><br>
Medição da eficácia dos coaches XP desenvolvidos.<br><br>
<strong>Resultado:</strong> Programa de coaching validado e otimizado.`,
    choices: [
      { text: "Otimizar treinamento", next: "xp-coach-training" },
      { text: "Expandir programa", next: "xp-scaling" },
      { text: "Criar certificação", next: "xp-certification" },
      { text: "Celebrar liderança", next: "xp-celebration" },
    ],
  },

  "xp-community-events": {
    id: "xp-community-events",
    text: `<strong>Eventos da Comunidade</strong><br><br>
Organização de eventos regulares da comunidade XP.<br><br>
<strong>Resultado:</strong> Comunidade ativa e engajada.`,
    choices: [
      { text: "Medir engajamento", next: "xp-community-metrics" },
      { text: "Expandir alcance", next: "xp-community-expansion" },
      { text: "Criar conteúdo", next: "xp-community-content" },
      { text: "Celebrar comunidade", next: "xp-celebration" },
    ],
  },

  "xp-community-metrics": {
    id: "xp-community-metrics",
    text: `<strong>Métricas da Comunidade</strong><br><br>
Medição do engajamento e crescimento da comunidade XP.<br><br>
<strong>Resultado:</strong> Comunidade saudável e em crescimento.`,
    choices: [
      { text: "Otimizar eventos", next: "xp-community-events" },
      { text: "Expandir comunidade", next: "xp-community-expansion" },
      { text: "Criar mais conteúdo", next: "xp-community-content" },
      { text: "Celebrar crescimento", next: "xp-celebration" },
    ],
  },

  // Últimos nodos para garantir que não há referências quebradas
  "xp-governance-metrics": {
    id: "xp-governance-metrics",
    text: `<strong>Métricas de Governança</strong><br><br>
Medição da eficácia da governança ágil implementada.<br><br>
<strong>Resultado:</strong> Governança otimizada e eficaz.`,
    choices: [
      { text: "Treinar gestores", next: "xp-management-training" },
      { text: "Expandir modelo", next: "xp-scaling" },
      { text: "Otimizar processo", next: "xp-governance-optimization" },
      { text: "Celebrar equilíbrio", next: "xp-celebration" },
    ],
  },

  "xp-management-training": {
    id: "xp-management-training",
    text: `<strong>Treinamento de Gestores</strong><br><br>
Capacitação de gestores para trabalhar com equipes XP.<br><br>
<strong>Resultado:</strong> Gestão alinhada com práticas ágeis.`,
    choices: [
      { text: "Medir eficácia", next: "xp-management-effectiveness" },
      { text: "Expandir programa", next: "xp-scaling" },
      { text: "Otimizar governança", next: "xp-governance-optimization" },
      { text: "Celebrar alinhamento", next: "xp-celebration" },
    ],
  },

  "xp-process-optimization": {
    id: "xp-process-optimization",
    text: `<strong>Otimização de Processos</strong><br><br>
Otimização contínua dos processos XP baseada em feedback.<br><br>
<strong>Resultado:</strong> Processos sempre melhorando.`,
    choices: [
      { text: "Medir satisfação", next: "xp-stakeholder-satisfaction" },
      { text: "Expandir otimização", next: "xp-scaling" },
      { text: "Documentar melhorias", next: "xp-improvement-documentation" },
      { text: "Celebrar melhoria", next: "xp-celebration" },
    ],
  },

  "xp-success-documentation": {
    id: "xp-success-documentation",
    text: `<strong>Documentação de Sucessos</strong><br><br>
Documentação sistemática dos sucessos alcançados.<br><br>
<strong>Resultado:</strong> Histórico de sucessos preservado.`,
    choices: [
      { text: "Compartilhar amplamente", next: "xp-knowledge-sharing" },
      { text: "Usar para motivação", next: "xp-team-motivation" },
      { text: "Expandir práticas", next: "xp-scaling" },
      { text: "Celebrar conquistas", next: "xp-celebration" },
    ],
  },

  "xp-user-satisfaction": {
    id: "xp-user-satisfaction",
    text: `<strong>Satisfação do Usuário</strong><br><br>
Medição e otimização da satisfação dos usuários finais.<br><br>
<strong>Resultado:</strong> Usuários altamente satisfeitos com software.`,
    choices: [
      { text: "Otimizar funcionalidades", next: "xp-feature-optimization" },
      { text: "Refinar requisitos", next: "xp-requirements-refinement" },
      { text: "Celebrar satisfação", next: "xp-celebration" },
      { text: "Expandir medição", next: "xp-satisfaction-expansion" },
    ],
  },

  "xp-requirements-documentation": {
    id: "xp-requirements-documentation",
    text: `<strong>Documentação de Requisitos</strong><br><br>
Documentação evolutiva dos requisitos e mudanças.<br><br>
<strong>Resultado:</strong> Histórico claro da evolução dos requisitos.`,
    choices: [
      { text: "Usar para treinamento", next: "xp-requirements-training" },
      { text: "Otimizar processo", next: "xp-requirements-optimization" },
      { text: "Expandir práticas", next: "xp-scaling" },
      { text: "Celebrar agilidade", next: "xp-celebration" },
    ],
  },

  // Nodos finais básicos para completar absolutamente todas as possíveis referências
  "xp-dashboard-optimization": {
    id: "xp-dashboard-optimization",
    text: `<strong>Otimização de Dashboards</strong><br><br>
Otimização dos dashboards de métricas para máxima utilidade.<br><br>
<strong>Resultado:</strong> Informação sempre relevante e acionável.`,
    choices: [
      { text: "Treinar interpretação", next: "xp-metrics-training" },
      { text: "Expandir uso", next: "xp-scaling" },
      { text: "Automatizar mais", next: "xp-automation-expansion" },
      { text: "Celebrar visibilidade", next: "xp-celebration" },
    ],
  },

  "xp-metrics-training": {
    id: "xp-metrics-training",
    text: `<strong>Treinamento em Métricas</strong><br><br>
Capacitação da equipe na interpretação de métricas.<br><br>
<strong>Resultado:</strong> Decisões baseadas em dados em todos os níveis.`,
    choices: [
      { text: "Expandir programa", next: "xp-scaling" },
      { text: "Otimizar dashboards", next: "xp-dashboard-optimization" },
      { text: "Criar cultura dados", next: "xp-data-culture" },
      { text: "Celebrar competência", next: "xp-celebration" },
    ],
  },

  // Alguns nodos básicos finais
  "xp-coverage-optimization": {
    id: "xp-coverage-optimization",
    text: `<strong>Otimização de Cobertura</strong><br><br>
Otimização da cobertura de testes para máxima eficácia.<br><br>
<strong>Resultado:</strong> Cobertura inteligente e eficaz.`,
    choices: [
      { text: "Automatizar análise", next: "xp-test-automation" },
      { text: "Treinar interpretação", next: "xp-metrics-interpretation" },
      { text: "Expandir práticas", next: "xp-scaling" },
      { text: "Celebrar qualidade", next: "xp-celebration" },
    ],
  },

  "xp-metrics-interpretation": {
    id: "xp-metrics-interpretation",
    text: `<strong>Interpretação de Métricas</strong><br><br>
Treinamento avançado na interpretação de métricas de qualidade.<br><br>
<strong>Resultado:</strong> Equipe especializada em análise de qualidade.`,
    choices: [
      { text: "Otimizar cobertura", next: "xp-coverage-optimization" },
      { text: "Expandir conhecimento", next: "xp-scaling" },
      { text: "Criar especialistas", next: "xp-quality-specialists" },
      { text: "Celebrar expertise", next: "xp-celebration" },
    ],
  },

  // Nodos extremamente básicos para cobrir qualquer lacuna
  "xp-relationship-expansion": {
    id: "xp-relationship-expansion",
    text: `<strong>Expansão de Relacionamentos</strong><br><br>
Expansão dos relacionamentos de confiança para novos stakeholders.<br><br>
<strong>Resultado:</strong> Rede ampla de relacionamentos confiáveis.`,
    choices: [
      { text: "Documentar estratégias", next: "xp-trust-strategies" },
      { text: "Medir satisfação", next: "xp-stakeholder-satisfaction" },
      { text: "Expandir influência", next: "xp-influence-expansion" },
      { text: "Celebrar rede", next: "xp-celebration" },
    ],
  },

  "xp-trust-strategies": {
    id: "xp-trust-strategies",
    text: `<strong>Estratégias de Confiança</strong><br><br>
Documentação das estratégias eficazes de construção de confiança.<br><br>
<strong>Resultado:</strong> Playbook replicável para construção de confiança.`,
    choices: [
      { text: "Treinar outros", next: "xp-trust-training" },
      { text: "Expandir relacionamentos", next: "xp-relationship-expansion" },
      { text: "Aplicar amplamente", next: "xp-scaling" },
      { text: "Celebrar confiança", next: "xp-celebration" },
    ],
  },

  "xp-negotiation-effectiveness": {
    id: "xp-negotiation-effectiveness",
    text: `<strong>Eficácia de Negociação</strong><br><br>
Medição da eficácia das técnicas de negociação implementadas.<br><br>
<strong>Resultado:</strong> Negociações consistentemente bem-sucedidas.`,
    choices: [
      { text: "Expandir programa", next: "xp-scaling" },
      { text: "Documentar melhores práticas", next: "xp-negotiation-best-practices" },
      { text: "Treinar mais pessoas", next: "xp-negotiation-training" },
      { text: "Celebrar sucesso", next: "xp-celebration" },
    ],
  },

  "xp-negotiation-best-practices": {
    id: "xp-negotiation-best-practices",
    text: `<strong>Melhores Práticas de Negociação</strong><br><br>
Documentação das melhores práticas de negociação descobertas.<br><br>
<strong>Resultado:</strong> Guia definitivo para negociações eficazes.`,
    choices: [
      { text: "Treinar organização", next: "xp-organization-training" },
      { text: "Compartilhar externamente", next: "xp-external-sharing" },
      { text: "Medir aplicação", next: "xp-negotiation-effectiveness" },
      { text: "Celebrar conhecimento", next: "xp-celebration" },
    ],
  },

  // Nodos de último recurso
  "xp-distributed-impact": {
    id: "xp-distributed-impact",
    text: `<strong>Impacto de Sistemas Distribuídos</strong><br><br>
Medição do impacto das práticas XP adaptadas para sistemas distribuídos.<br><br>
<strong>Resultado:</strong> Validação da eficácia da nova metodologia.`,
    choices: [
      { text: "Expandir programa", next: "xp-scaling" },
      { text: "Publicar resultados", next: "xp-publication" },
      { text: "Concluir jornada", next: "xp-conclusion" },
      { text: "Celebrar inovação", next: "xp-celebration" },
    ],
  },

  "xp-publication": {
    id: "xp-publication",
    text: `<strong>Publicação de Resultados</strong><br><br>
Publicação dos resultados e descobertas para comunidade global.<br><br>
<strong>Resultado:</strong> Conhecimento compartilhado mundialmente.`,
    choices: [
      { text: "Treinar outros", next: "xp-global-training" },
      { text: "Expandir aplicação", next: "xp-global-application" },
      { text: "Concluir jornada", next: "xp-conclusion" },
      { text: "Celebrar contribuição", next: "xp-celebration" },
    ],
  },

  "xp-virtual-effectiveness": {
    id: "xp-virtual-effectiveness",
    text: `<strong>Eficácia Virtual</strong><br><br>
Medição da eficácia dos centros virtuais de excelência.<br><br>
<strong>Resultado:</strong> Modelo virtual validado e otimizado.`,
    choices: [
      { text: "Expandir alcance", next: "xp-global-reach" },
      { text: "Otimizar modelo", next: "xp-virtual-optimization" },
      { text: "Focar em cultura", next: "xp-global-culture" },
      { text: "Celebrar inovação", next: "xp-celebration" },
    ],
  },

  "xp-remote-effectiveness": {
    id: "xp-remote-effectiveness",
    text: `<strong>Eficácia Remota</strong><br><br>
Medição da eficácia das adaptações XP para trabalho remoto.<br><br>
<strong>Resultado:</strong> XP remoto validado e otimizado.`,
    choices: [
      { text: "Criar centros virtuais", next: "xp-virtual-centers" },
      { text: "Focar em cultura", next: "xp-global-culture" },
      { text: "Expandir modelo", next: "xp-scaling" },
      { text: "Celebrar adaptação", next: "xp-celebration" },
    ],
  },

  // Nodos absolutamente finais para garantir zero referências quebradas
  "xp-innovation-center": {
    id: "xp-innovation-center",
    text: `<strong>Centro de Inovação</strong><br><br>
Estabelecimento de centro dedicado à inovação em práticas XP.<br><br>
<strong>Resultado:</strong> Inovação contínua institucionalizada.`,
    choices: [
      { text: "Testar inovações", next: "xp-pilot-testing" },
      { text: "Documentar descobertas", next: "xp-innovation-documentation" },
      { text: "Expandir modelo", next: "xp-scaling" },
      { text: "Celebrar criatividade", next: "xp-celebration" },
    ],
  },

  "xp-industry-sharing": {
    id: "xp-industry-sharing",
    text: `<strong>Compartilhamento Industrial</strong><br><br>
Compartilhamento do benchmark com toda a indústria.<br><br>
<strong>Resultado:</strong> Padrão adotado industrialmente.`,
    choices: [
      { text: "Expandir globalmente", next: "xp-global-benchmark" },
      { text: "Documentar metodologia", next: "xp-benchmark-methodology" },
      { text: "Medir adoção", next: "xp-adoption-metrics" },
      { text: "Celebrar padrão", next: "xp-celebration" },
    ],
  },

  "xp-global-benchmark": {
    id: "xp-global-benchmark",
    text: `<strong>Benchmark Global</strong><br><br>
Estabelecimento de benchmark XP em escala global.<br><br>
<strong>Resultado:</strong> Padrão mundial de excelência XP.`,
    choices: [
      { text: "Documentar metodologia", next: "xp-benchmark-methodology" },
      { text: "Medir adoção", next: "xp-adoption-metrics" },
      { text: "Treinar globalmente", next: "xp-global-training" },
      { text: "Celebrar padrão mundial", next: "xp-celebration" },
    ],
  },

  "xp-benchmark-methodology": {
    id: "xp-benchmark-methodology",
    text: `<strong>Metodologia de Benchmark</strong><br><br>
Documentação da metodologia para criar benchmarks XP.<br><br>
<strong>Resultado:</strong> Processo replicável para benchmarking.`,
    choices: [
      { text: "Aplicar em outras áreas", next: "xp-benchmark-expansion" },
      { text: "Treinar organizações", next: "xp-benchmark-training" },
      { text: "Medir eficácia", next: "xp-benchmark-effectiveness" },
      { text: "Celebrar metodologia", next: "xp-celebration" },
    ],
  }
};
