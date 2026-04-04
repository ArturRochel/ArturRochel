import { motion } from "framer-motion";
import { projects } from "../data/projectsData";
import ModalProject from "./ModalProject";
import { useState } from "react";
function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

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



                  <button onClick={() => setSelectedProject(project)} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-3 bg-white text-black rounded-lg font-medium cursor-pointer">Descrição</button>

                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-row">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                </div>
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
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 text-center py-2.5 border-2 border-gray-900 text-gray-900 rounded-lg font-medium text-sm active:bg-gray-50 transition-colors cursor-pointer"
                  >
                    Descrição
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (<ModalProject project={selectedProject} onClose={() => setSelectedProject(null)}/>)}
    </section>
  );
}

export default Projects;
