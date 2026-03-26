function Services() {
const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Desenvolvimento Front-end",
    description: "Criação de interfaces modernas, responsivas e performáticas, com foco em experiência do usuário e organização de código.",
    features: ["React", "Componentização", "Responsive Design", "Consumo de APIs"]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "Desenvolvimento Back-end",
    description: "Construção de APIs robustas e escaláveis com foco em boas práticas, organização e integração de sistemas.",
    features: ["FastAPI", "Django", "APIs REST", "Integração de Sistemas"]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h11M9 21V3m4 7h8m-4 11V9" />
      </svg>
    ),
    title: "Infraestrutura & Performance",
    description: "Configuração e otimização de aplicações com foco em desempenho, escalabilidade e eficiência.",
    features: ["Docker", "Redis", "Caching", "Performance"]
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6M9 8h6m2 12H7a2 2 0 01-2-2V6a2 2 0 012-2h5l5 5v9a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Arquitetura & Boas Práticas",
    description: "Aplicação de princípios de arquitetura de software, organização de código e melhoria contínua de sistemas.",
    features: ["Clean Code", "Arquitetura de Software", "Code Review", "Manutenabilidade"]
  }
];

  return (
    <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
            SERVIÇOS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Como Posso Ajudar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecendo soluções completas em desenvolvimento e design, desde a concepção
            até a entrega final do projeto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 border border-gray-200 rounded-xl hover:border-gray-900 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gray-900 text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
