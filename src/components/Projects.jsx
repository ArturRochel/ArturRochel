import { Bikecraft, Assis, SimpleFinance, Sefaz, Uniflow, Obraclick, Market } from "../assets/images";
function Projects() {
  const projects = [
    {
      title: "Obraclick",
      description: "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos integrado e gerenciamento de estoque.",
      image: Obraclick,
      tags: ["React", "TanStack Query", "Chart.js"],
      link: "https://obraclick.com.br/"
    },
    {
      title: "ChatBot e Sistema RAG",
      description: "Aplicativo de acompanhamento fitness com gráficos de progresso, planos de treino personalizados e integração com wearables.",
      image: Sefaz,
      tags: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
      link: "https://www.sefaz.rn.gov.br/"
    },
        {
      title: "Uniflow",
      description: "Sistema de gerenciamento de conteúdo para portfolios criativos com editor visual e otimização automática de imagens.",
      image: Uniflow,
      tags: ["React", "TailwindCSS", "FastAPI", "PostgreSQL", "Docker", "Redis"],
      link: "#"
    },
    {
      title: "Market Crud",
      description: "Sistema de gerenciamento financeiro para pessoal e empresarial. Solução focada no aprendizado sobre finanças e investimentos.",
      image: Market,
      tags: ["Javascript", "HTML", "CSS"],
      link: "https://arturrochel.github.io/simplefinance/"
    },
    {
      title: "Bikcraft",
      description: "Dashboard analytics para redes sociais com métricas em tempo real, agendamento de posts e relatórios automatizados.",
      image: Bikecraft,
      tags: ["Javascript", "HTML", "CSS"],
      link: "https://arturrochel.github.io/bikcraft/"
    },
    {
      title: "Assis Variedades",
      description: "Plataforma imobiliária com busca avançada, tours virtuais em 360°, sistema de agendamento e CRM integrado.",
      image: Assis,
      tags: ["React", "Node.js", "Maps API", "AWS"],
      link: "https://arturrochel.github.io/assisvariedades/"
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
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    target="blank"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-3 bg-white text-black rounded-lg font-medium"
                  >
                    Ver Detalhes
                  </a>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
