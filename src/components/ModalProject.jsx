import { motion } from "framer-motion";

const ModalProject = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md" 
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-sm cursor-pointer"
          aria-label="Fechar modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 sm:p-8 overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed whitespace-pre-line text-[1.05rem]">
            {project.full_description || project.description}
          </p>

          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-wider font-bold text-gray-400 mb-3">Tecnologias Utilizadas</h3>
            <div className="flex flex-wrap gap-2">
              {project?.tags?.map((tag, tagIndex) => (
                <span 
                  key={tagIndex} 
                  className="px-4 py-1 bg-gray-100 border border-gray-200 text-gray-700 text-sm font-medium rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-100">
            {project?.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-3.5 bg-gray-900 text-white rounded-xl font-medium shadow-md hover:shadow-lg hover:bg-gray-800 hover:-translate-y-0.5 transition-all duration-300"
              >
                Acessar Projeto
              </a>
            )}

            {project?.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-3.5 border-2 border-gray-900 text-gray-900 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-300"
              >
                Ver Repositório
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ModalProject;