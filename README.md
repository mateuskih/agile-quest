# </*Agile Quest*> 📜
> Uma aventura em texto (_text adventure_) sobre os **Métodos Ágeis**: Scrum, Kanban e XP (_Xtreme Programming_) ...

Uma Aplicação Web gamificada e interativa para a aprendizagem ativa de alguns dos principais Métodos Ágeis!

> https://agile-quest.vercel.app/

## [🎮] O que é um Text Adventure?
Um Text Adventure, ou "aventura de texto", é um tipo de jogo interativo onde não existem gráficos, só texto. 

Tecnicamente, é um subtipo de jogo da categoria [text-based game](https://en.wikipedia.org/wiki/Text-based_game).

Esse foi um estilo de jogo super popular nos anos 70 e 80, quando gráficos eram luxo e a imaginação fazia todo o trabalho pesado. 😝

Basicamente, o jogo descreve uma situação inusitada em que você escolhe uma ação para fazer, alterando o desenvolvimento (e possivelmente o desfecho...) da trama.

**Exemplo clássico**:
~~~
"Você está em uma floresta escura. Há um caminho para o norte.
O que você faz?"
~~~

Aí o jogador escolhe entre as opções possíveis:

~~~bash
--> ir para o norte
--> pegar a tocha
--> olhar em volta
~~~

E o jogo continua a história baseado no que você escolheu...

### [🕹️] Exemplos famosos!

Dois jogos super famosos da época de 70 / 80:

- **Zork** (1977): Um dos mais conhecidos. Explorar cavernas, resolver puzzles, fugir de monstros, tudo só no texto.

- **Adventure** (ou **Colossal Cave Adventure**, de 1976): Considerado o primeiro do gênero.

---

### [🤔] Por que as pessoas jogavam isso?
> Porque era o que tinha de mais imersivo na época! 😂

A galera usava a imaginação como se fosse um livro interativo. Além disso, os jogos desafiavam a lógica: era tipo um quebra-cabeça com palavras.

---

### [❇️] Hoje em dia?
> Ainda existe! Tem jogos modernos que são uma mistura de "text adventure" com narrativa interativa ou "visual novels" sem gráficos", mas claro, agora com muito mais recursos.

E muita gente joga os antigos até hoje, por nostalgia ou curiosidade geek.

---

### [↗️] Indicação!

Uma comunidade ainda ativa nos dias atuais é a [textadventures.co.uk](textadventures.co.uk)

No site, é possível criar, jogar e publicar *text adventure games*. 

Tudo direto do navegador web.

---

### [🌱] Mas afinal, por que misturar Text Adventure com Métodos Ágeis?
>Vivemos em um mundo cada vez mais dinâmico, com Inteligência Artificial avançando a passos largos, mas... nem sempre paramos pra refletir criticamente sobre os processos que usamos no dia a dia de trabalho.

Este projeto busca unir o retrô e o moderno:
- ✅ Usar um formato simples (texto puro) para ensinar conceitos ágeis
- ✅ Estimular o pensamento crítico sobre colaboração, entrega contínua, e adaptação a mudanças
- ✅ Propor uma experiência interativa que foge do lugar comum (e que não depende de gráficos bonitões pra ser divertida ou educativa)

Enquanto todo mundo está focado em dashboards com gráficos coloridos e IA generativa, aqui a ideia é dar um passo atrás e perguntar: Você realmente entende os princípios por trás do Agile?

---

# Considerações sobre o Projeto

### Lovable
O projeto, por experimentação (e com muita metalinguagem) utilizará LLMs, sobretudo de uma plataforma / ferramenta com IA chamada [Lovable](https://lovable.dev/), a qual permite a integração direta com um repositório do GitHub através de uma API e *botting*.

É como se tivessemos um agente de IA voltado para o projeto em que estamos trabalhando. Podemos cooperar com o *Lovable*, que não é somente uma IA generativa, mas um agente de IA integrado a um projeto real, sendo possível tirar proveito do *pair-programming* e *vibe coding* na prática, tanto falados atualmente...
  
Logo, faz sentido que as mudanças feitas no código sejam commitadas automaticamente para o repositório construído com o *Lovable*, porém, as alterações convencionais e revisões humanas são totalmente possíveis e indicadas, refletindo na versão atualizada utilizada pela IA (e por nós).

---

**URL do Projeto (no Lovable)**: https://lovable.dev/projects/d13a4696-01b2-446f-a8a0-ae19cc927768

---

### [🌐] Aplicação Web

A aplicação web pode ser acessada no link:
**https://agile-quest.vercel.app/**

**Caso queira rodar o projeto localmente:**

### [⚙️] Dependências

O único requisito é ter o **Node.js** & **npm** instalados - [instale com o nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### [🚀] Execução Local

Siga os passos:

```sh
# Passo 1: Clone o repositório GIT usando a URL do projeto.
git clone https://github.com/mateuskih/quest-agile-paths.git

# Passo 2: Navegue para o diretório do projeto.
cd quest-agile-paths

# Passo 3: Instale as dependências.
npm i

# Passo 4: Inicie o servidor de desenvolvimento com uma auto-atualização e um preview instantâneo.
npm run dev
```

### [🔧] Tecnologias Utilizadas

Esse projeto foi construído com:
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

### [🚧] Status
~~~md
Projeto em aprimoramento / aprendizado / nostalgia 😄
~~~

### [📌] Referências

1. [Wikipedia - Text-based game](https://en.wikipedia.org/wiki/Text-based_game)
2. [Documentação | Lovable](https://docs.lovable.dev/introduction)
3. [Comunidade Lovable (Discord)](https://discord.com/invite/ha3wjN44dS)
4. [Markdown | Guia](https://www.markdownguide.org/)
