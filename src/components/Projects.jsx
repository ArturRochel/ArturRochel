import { motion } from "framer-motion";
import { Bikecraft, Assis, SimpleFinance, Sefaz, Uniflow, Obraclick, Market } from "../assets/images";
function Projects() {
  const projects = [
    {
      title: "Obraclick",
      description: "O Obraclick é uma plataforma que conecta fornecedores e compradores da construção civil.",
      image: Obraclick,
      tags: ["React", "TanStack Query", "Chart.js"],
      link: "https://obraclick.com.br/",
      repository: null,
    },
    {
      title: "ChatBot e Sistema RAG",
      description: "Chatbot especializado em contabilidade e finanças públicas, utilizando arquitetura RAG e LLM.",
      image: Sefaz,
      tags: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
      link: "https://www.sefaz.rn.gov.br/",
      repository: null,
    },
    {
      title: "Uniflow",
      description: "Sistema web de organização acadêmica que ajuda estudantes de forma simples e centralizada.",
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

  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
            PORTFOLIO
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, demonstrando expertise em desenvolvimento
            full stack e design de interfaces modernas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="hidden lg:flex flex-col gap-5 absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 items-center justify-center">
                  {
                    project?.link
                      ? <a
                        href={project?.link}
                        target="_blank"
                        rel="noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-3 bg-white text-black rounded-lg font-medium"
                      >
                        Acessar
                      </a>
                      : null
                  }

                  {project?.repository ? <a
                    href={project?.repository}
                    target="_blank"
                    rel="noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-3 bg-white text-black rounded-lg font-medium"
                  >
                    Repositório
                  </a>
                    : null
                  }

                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 lg:hidden">
                  {project?.link ? (
                    <a
                      href={project?.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center py-2.5 bg-gray-900 text-white rounded-lg font-medium text-sm active:bg-gray-800 transition-colors"
                    >
                      Acessar
                    </a>
                  ) : null}
                  {project?.repository ? (
                    <a
                      href={project?.repository}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center py-2.5 border-2 border-gray-900 text-gray-900 rounded-lg font-medium text-sm active:bg-gray-50 transition-colors"
                    >
                      Repositório
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
