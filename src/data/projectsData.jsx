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
      full_description: "Chatbot especializado em contabilidade, administração de contas públicas e finanças, usando arquitetura de RAG (Retrieval-Augmented Generation) com FastAPI, LangChain, embeddings locais e banco vetorial.",
      image: Sefaz,
      tags: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
      link: "https://www.sefaz.rn.gov.br/",
      repository: null,
    },
    {
      title: "Uniflow",
      description: "Sistema web de organização acadêmica que ajuda estudantes de forma simples e centralizada.",
      full_description: "",
      image: Uniflow,
      tags: ["React", "TailwindCSS", "FastAPI", "PostgreSQL", "Docker", "Redis"],
      link: null,
      repository: null
    },
    {
      title: "Market Crud",
      description: "Sistema de gerenciamento para pequenos comércios, permitindo controlar produtos, preços e estoque.",
      image: Market,
      tags: ["Node.js", "JWT", "Express", "React", "TailwindCSS"],
      link: null,
      repository: "https://github.com/ArturRochel/marketCrud"
    },
    {
      title: "Bikcraft",
      description: "Dashboard analytics para redes sociais com métricas em tempo real, agendamento de posts e relatórios automatizados.",
      image: Bikecraft,
      tags: ["Javascript", "HTML", "CSS"],
      link: "https://arturrochel.github.io/bikcraft/",
      repository: "https://github.com/ArturRochel/bikcraft"
    },
    {
      title: "Assis Variedades",
      description: "Projeto front-end da Assis Variedades, desenvolvido para apresentar produtos, serviços e a história da empresa.",
      image: Assis,
      tags: ["Javascript", "HTML", "CSS"],
      link: "https://arturrochel.github.io/assisvariedades/",
      repository: "https://arturrochel.github.io/assisvariedades/"
    }
  ];