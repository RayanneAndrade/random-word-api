const wordDictionary = [
    {
      id: 1,
      slug: 'introducao-vue',
      title: 'Introdução ao Vue.js',
      description: 'Aprenda os conceitos básicos do framework Vue.js.',
      content: 'Conteúdo completo do post sobre Vue.js...',
      thumbnail: 'https://vuejs.org/images/logo.png'
    },
    {
      id: 2,
      slug: 'react-hooks-avancado',
      title: 'React Hooks Avançado',
      description: 'Aprofunde seus conhecimentos em React com Hooks personalizados.',
      content: 'Exploração profunda dos React Hooks...',
      thumbnail: 'https://reactjs.org/logo-og.png'
    },
    {
      id: 3,
      slug: 'node-express-api',
      title: 'Criando APIs com Node e Express',
      description: 'Aprenda a construir APIs REST usando Express.',
      content: 'Como estruturar uma API usando Node.js e Express...',
      thumbnail: 'https://nodejs.org/static/images/logo.svg'
    },
    {
      id: 4,
      slug: 'typescript-basico',
      title: 'Guia Básico de TypeScript',
      description: 'Tudo que você precisa saber para começar com TypeScript.',
      content: 'Tipos, interfaces e boas práticas no TypeScript...',
      thumbnail: 'https://www.typescriptlang.org/images/branding/logo-grouping.svg'
    },
    {
      id: 5,
      slug: 'python-pandas',
      title: 'Análise de Dados com Pandas',
      description: 'Use Python e Pandas para análise de dados eficiente.',
      content: 'Manipulando dados com Pandas...',
      thumbnail: 'https://pandas.pydata.org/static/img/pandas_mark.svg'
    },
    {
      id: 6,
      slug: 'introducao-docker',
      title: 'Docker para Iniciantes',
      description: 'Containerize suas aplicações com Docker.',
      content: 'O que são containers e como usá-los com Docker...',
      thumbnail: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png'
    },
    {
      id: 7,
      slug: 'firebase-auth',
      title: 'Autenticação com Firebase',
      description: 'Implemente autenticação de usuários com Firebase.',
      content: 'Login, logout e autenticação usando Firebase...',
      thumbnail: 'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png'
    },
    {
      id: 8,
      slug: 'git-github-fluxo',
      title: 'Fluxo de Trabalho com Git e GitHub',
      description: 'Entenda como colaborar em projetos usando Git.',
      content: 'Branching, pull requests e merge...',
      thumbnail: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'
    },
    {
      id: 9,
      slug: 'api-rest-principios',
      title: 'Princípios de uma API REST',
      description: 'Como criar APIs RESTful com boas práticas.',
      content: 'REST, verbos HTTP e status codes...',
      thumbnail: 'https://miro.medium.com/v2/resize:fit:1200/1*_U21KxyP_T2yLLlT1dGjVQ.png'
    },
    {
      id: 10,
      slug: 'mongodb-basico',
      title: 'Introdução ao MongoDB',
      description: 'Armazenando dados em documentos com MongoDB.',
      content: 'Modelagem de dados no MongoDB...',
      thumbnail: 'https://www.mongodb.com/assets/images/global/leaf.png'
    },
    {
      id: 11,
      slug: 'postgresql-sql',
      title: 'Consultas SQL com PostgreSQL',
      description: 'Domine comandos SQL no PostgreSQL.',
      content: 'SELECT, JOIN, WHERE e muito mais...',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg'
    },
    {
      id: 12,
      slug: 'graphql-api',
      title: 'Construindo APIs com GraphQL',
      description: 'Explore a construção de APIs modernas com GraphQL.',
      content: 'Schemas, queries e resolvers com GraphQL...',
      thumbnail: 'https://graphql.org/img/logo.svg'
    },
    {
      id: 13,
      slug: 'nextjs-server-side',
      title: 'Server-side Rendering com Next.js',
      description: 'Otimize o SEO e desempenho com SSR no Next.js.',
      content: 'getServerSideProps e outras funções mágicas...',
      thumbnail: 'https://nextjs.org/static/favicon/favicon.ico'
    },
    {
      id: 14,
      slug: 'svelte-fundamentos',
      title: 'Fundamentos do Svelte',
      description: 'Entenda o funcionamento do framework Svelte.',
      content: 'Componentes reativos e performance no Svelte...',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg'
    },
    {
      id: 15,
      slug: 'tailwindcss-estilizando',
      title: 'Estilizando com Tailwind CSS',
      description: 'Crie interfaces bonitas com Tailwind.',
      content: 'Classes utilitárias e responsividade com Tailwind...',
      thumbnail: 'https://tailwindcss.com/favicons/apple-touch-icon.png'
    },
    {
      id: 16,
      slug: 'ci-cd-github-actions',
      title: 'CI/CD com GitHub Actions',
      description: 'Automatize seus testes e deploys com CI/CD.',
      content: 'Workflow básico com GitHub Actions...',
      thumbnail: 'https://avatars.githubusercontent.com/u/44036562?s=280&v=4'
    },
    {
      id: 17,
      slug: 'aws-s3-basico',
      title: 'Armazenamento com AWS S3',
      description: 'Guarde arquivos na nuvem com o Amazon S3.',
      content: 'Buckets, permissões e uploads...',
      thumbnail: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png'
    },
    {
      id: 18,
      slug: 'python-automacao',
      title: 'Automação com Python',
      description: 'Automatize tarefas repetitivas com Python.',
      content: 'Selenium, schedule e automações do dia a dia...',
      thumbnail: 'https://www.python.org/static/community_logos/python-logo.png'
    },
    {
      id: 19,
      slug: 'estruturas-dados-js',
      title: 'Estruturas de Dados em JavaScript',
      description: 'Listas, filas, pilhas e árvores em JavaScript.',
      content: 'Conceitos fundamentais e implementações...',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
    },
    {
      id: 20,
      slug: 'algoritmos-ordenacao',
      title: 'Algoritmos de Ordenação',
      description: 'Como funcionam os principais algoritmos de ordenação.',
      content: 'Bubble sort, quicksort, merge sort...',
      thumbnail: 'https://miro.medium.com/v2/resize:fit:1200/1*XfH6YxvHZRMG2XBiQf0mNw.png'
    },
    {
      id: 21,
      slug: 'machine-learning-basico',
      title: 'Começando com Machine Learning',
      description: 'Primeiros passos em machine learning com scikit-learn.',
      content: 'Modelos supervisionados e não supervisionados...',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg'
    },
    {
      id: 22,
      slug: 'kubernetes-intro',
      title: 'Introdução ao Kubernetes',
      description: 'Orquestre containers com Kubernetes.',
      content: 'Pods, clusters e deploys automáticos...',
      thumbnail: 'https://d33wubrfki0l68.cloudfront.net/4e9983df868c21a3f5f5a1b8bc51c3b76b8c1c7f/ed9f9/images/favicon.png'
    },
    {
      id: 23,
      slug: 'eslint-prettier',
      title: 'Linting com ESLint e Prettier',
      description: 'Padronize seu código com ferramentas de lint.',
      content: 'Configuração e boas práticas de ESLint...',
      thumbnail: 'https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-icon.png'
    },
    {
      id: 24,
      slug: 'redux-basico',
      title: 'Gerenciamento de Estado com Redux',
      description: 'Centralize o estado da sua aplicação com Redux.',
      content: 'Actions, reducers e store...',
      thumbnail: 'https://redux.js.org/img/redux-logo-landscape.png'
    },
    {
      id: 25,
      slug: 'unit-tests-jest',
      title: 'Testes Unitários com Jest',
      description: 'Garanta a qualidade do seu código com testes.',
      content: 'Escrevendo testes simples com Jest...',
      thumbnail: 'https://jestjs.io/img/opengraph.png'
    },
    {
      id: 26,
      slug: 'mobile-react-native',
      title: 'Desenvolvimento Mobile com React Native',
      description: 'Crie apps nativos com JavaScript.',
      content: 'Componentes, navegação e performance...',
      thumbnail: 'https://reactnative.dev/img/header_logo.svg'
    },
    {
      id: 27,
      slug: 'nestjs-api',
      title: 'APIs com NestJS',
      description: 'Framework escalável para APIs em Node.',
      content: 'Módulos, controllers e services com NestJS...',
      thumbnail: 'https://docs.nestjs.com/assets/logo-small.svg'
    },
    {
      id: 28,
      slug: 'seo-web',
      title: 'Otimização para Motores de Busca (SEO)',
      description: 'Melhore o rankeamento dos seus sites.',
      content: 'Meta tags, conteúdo relevante e velocidade...',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/7/75/SEO_icon.png'
    },
    {
      id: 29,
      slug: 'web3-ethereum',
      title: 'Desenvolvimento Web3 com Ethereum',
      description: 'Interaja com contratos inteligentes em Web3.',
      content: 'Solidity, Metamask e Infura...',
      thumbnail: 'https://ethereum.org/static/6c1fbe114ed8c5443b3a7b1bcd3a3f08/31987/eth-diamond-purple.png'
    },
    {
      id: 30,
      slug: 'ux-ui-design',
      title: 'Princípios de UX/UI Design',
      description: 'Ofereça experiências incríveis com bom design.',
      content: 'Heurísticas de Nielsen, design centrado no usuário...',
      thumbnail: 'https://uxdesign.cc/favicon.ico'
    }  
];

export const gerarPalavras = (quantidade = 5) => {
  const embaralhadas = [...wordDictionary].sort(() => Math.random() - 0.5);
  return embaralhadas.slice(0, quantidade);
};
