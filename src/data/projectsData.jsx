import { Bikecraft, Assis, Sefaz, Uniflow, Obraclick, Market } from "../assets/images";

export const projects = [
  {
    title: "Obraclick",
    description: "O Obraclick é uma plataforma que conecta fornecedores e compradores da construção civil.",
    full_description: "O ObraClick trata-se de um serviço que conecta fornecedores de insumos para a construção civil com empreiteiros, construtoras e pequenos clientes, promovendo agilidade e produtividade nos mais variados negócios. Através de um sistema fluído e conectado, compradores tem acesso a uma grande lista de fornecedores, aumentando a compeitividade de preço, qualidade e tempo de entrega. Em contrapartida, os fornecedores aumentam sua base de clientes e potenciais parceiros.",
    image: Obraclick,
    tags: ["React", "TanStack Query", "Chart.js"],
    link: "https://obraclick.com.br/",
    repository: null,
  },
  {
    title: "ChatBot e Sistema RAG",
    description: "Chatbot especializado em contabilidade e finanças públicas, utilizando arquitetura RAG e LLM.",
    full_description: "Esse Chatbot foi construído para atender as necessidades da CONTAG referente ao atendimento especializado em contabilidade pública, administração de contas e finanças do Estado. Esse sistema foi desenvolvido utilizando uma arquitetura RAG (Retrieval-Augmented Generation) com FastAPI, LangChain, embeddings locais e banco vetorial.",
    image: Sefaz,
    tags: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
    link: "https://www.sefaz.rn.gov.br/",
    repository: null,
  },
  {
    title: "Uniflow",
    description: "Sistema web de organização acadêmica que ajuda estudantes de forma simples e centralizada.",
    full_description: "O Uniflow é um sistema construído para atender as necessidades dos estudantes, através de um gerenciamento completo de disciplinas, trabalhos e provas. Centralizando o controle acadêmico e organizando os compromissos do aluno, aumentamos a eficiência dos alunos.",
    image: Uniflow,
    tags: ["React", "TailwindCSS", "FastAPI", "PostgreSQL", "Docker", "Redis"],
    link: null,
    repository: null
  },
  {
    title: "Market Crud",
    description: "Sistema de gerenciamento para pequenos comércios, permitindo controlar produtos, preços e estoque.",
    full_description: "O Market Crud é um sistema web para o gerenciamento de pequenos comércio, permitindo controle de estoque, fluxo de caixa e análise de dados. Esse produto permite ao pequeno e médio empresário controlar o seu empreendimento através de um sistema que simplifica a gerência dos produtos, preços e margens.",
    image: Market,
    tags: ["Node.js", "JWT", "Express", "React", "TailwindCSS"],
    link: null,
    repository: "https://github.com/ArturRochel/marketCrud"
  },
  {
    title: "Bikcraft",
    description: "E-commerce completo de bicicletas especializadas em performance. O Bikcraft é um projeto front-end completo voltado para estilo, responsividade e aplicação de conhecimentos na prática.",
    full_description: "Front-end completo de ecommerce de bicicletas especializadas em performance. Esse projeto faz parte do curso de HTML e CSS Completo da plataforma Origamid e serviu como uma base sólido para o meu desenvolvimento no front-end.",
    image: Bikecraft,
    tags: ["Javascript", "HTML", "CSS"],
    link: "https://arturrochel.github.io/bikcraft/",
    repository: "https://github.com/ArturRochel/bikcraft"
  },
  {
    title: "Assis Variedades",
    description: "Projeto front-end da Assis Variedades, desenvolvido para apresentar produtos, serviços e a história da empresa.",
    full_description: "Esse projeto foi especialmente desenvolvido para a empresa Assis Variedades como uma página modelo para empresa, servindo como home page, catálogo de produtos e página de apresentação da história.",
    image: Assis,
    tags: ["Javascript", "HTML", "CSS"],
    link: "https://arturrochel.github.io/assisvariedades/",
    repository: "https://arturrochel.github.io/assisvariedades/"
  }
];