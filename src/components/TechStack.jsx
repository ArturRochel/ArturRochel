import { motion } from "framer-motion";

const technologies = [
  "React",
  "FastAPI",
  "Node.js",
  "Docker",
  "PostgreSQL",
  "Redis",
  "Tailwind CSS",
  "JavaScript",
  "Python"
];

function TechStack() {
  return (
    <section className="py-12 bg-white border-y border-gray-100 dark:border-gray-800 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-bold">
          Principais Tecnologias
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Gradient Masks for smooth fade out on edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none transition-colors duration-300"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none transition-colors duration-300"></div>

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35, // Speed of the scroll
          }}
          className="flex w-max"
        >
          {/* First set of items */}
          <div className="flex gap-8 pr-8">
            {technologies.map((tech, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center space-x-3 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
              >
                <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center transition-colors duration-300">
                  <span className="text-sm font-black text-gray-800 dark:text-gray-200">{tech[0]}</span>
                </div>
                <span className="text-lg font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>

          {/* Second identical set for seamless looping */}
          <div className="flex gap-8 pr-8">
            {technologies.map((tech, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center space-x-3 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
              >
                <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center transition-colors duration-300">
                  <span className="text-sm font-black text-gray-800 dark:text-gray-200">{tech[0]}</span>
                </div>
                <span className="text-lg font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TechStack;
