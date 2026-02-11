export function Projects() {
  const projects = [
    {
      title: "turnar.app",
      description: "Sistema de Gestión de Turnos",
      stack: ["Next.js", "PostgreSQL", "Supabase"],
      url: "https://turnar.app",
      color: "blue",
    },
    {
      title: "Mi Comida",
      description: "Plataforma de Pedidos de Comida Online",
      stack: ["Next.js", "React", "Supabase"],
      url: "https://mi-comida.vercel.app/",
      color: "green",
    },
    {
      title: "rifa-facil.app",
      description: "Herramienta de gestión de rifas",
      stack: ["Next.js", "PostgreSQL", "Tailwind CSS"],
      url: "https://rifa-facil.app/",
      color: "purple",
    },
    {
      title: "Eventos",
      description: "Sistema de Gestión de Eventos",
      stack: ["Next.js", "Node.js", "PostgreSQL"],
      url: "https://eloquent-brown.vercel.app/",
      color: "orange",
    },
    {
      title: "Glacial Medio",
      description: "Medio Digital y Plataforma de Noticias",
      stack: ["Next.js", "React", "TypeScript"],
      url: "https://medio-delta.vercel.app/",
      color: "cyan",
    },
    {
      title: "Temporizador",
      description: "Aplicación de Temporizador y Cronómetro",
      stack: ["React", "Next.js", "TypeScript"],
      url: "https://temporizador-tawny.vercel.app/config",
      color: "rose",
    },
    {
      title: "CV Fácil",
      description: "Plataforma para crear curriculums profesionales",
      stack: ["Next.js", "React", "TypeScript"],
      url: "https://cvfacil.com.ar",
      color: "amber",
    },
    {
      title: "Viva Propiedades",
      description: "Plataforma inmobiliaria para gestión de propiedades",
      stack: ["Next.js", "React", "Tailwind CSS"],
      url: "https://csmaxi-propiedades.vercel.app",
      color: "indigo",
    },
  ]

  const colorClasses = {
    blue: "border-l-blue-200 bg-gradient-to-r from-blue-50/30 to-white hover:from-blue-50/50 hover:border-l-blue-300",
    green: "border-l-green-200 bg-gradient-to-r from-green-50/30 to-white hover:from-green-50/50 hover:border-l-green-300",
    purple: "border-l-purple-200 bg-gradient-to-r from-purple-50/30 to-white hover:from-purple-50/50 hover:border-l-purple-300",
    orange: "border-l-orange-200 bg-gradient-to-r from-orange-50/30 to-white hover:from-orange-50/50 hover:border-l-orange-300",
    cyan: "border-l-cyan-200 bg-gradient-to-r from-cyan-50/30 to-white hover:from-cyan-50/50 hover:border-l-cyan-300",
    rose: "border-l-rose-200 bg-gradient-to-r from-rose-50/30 to-white hover:from-rose-50/50 hover:border-l-rose-300",
    amber: "border-l-amber-200 bg-gradient-to-r from-amber-50/30 to-white hover:from-amber-50/50 hover:border-l-amber-300",
    indigo: "border-l-indigo-200 bg-gradient-to-r from-indigo-50/30 to-white hover:from-indigo-50/50 hover:border-l-indigo-300",
  }

  return (
    <section className="py-20 bg-white border-t border-zinc-200" style={{ fontFamily: '__nextjs-Geist' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-12" style={{ fontFamily: '__nextjs-Geist' }}>Proyectos destacados</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block border-l-4 ${colorClasses[project.color as keyof typeof colorClasses]} rounded-lg p-6 transition-all cursor-pointer group shadow-sm hover:shadow-md`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-zinc-800 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-600 mb-3 group-hover:text-zinc-700 transition-colors">
                      {project.description}
                    </p>
                  </div>
                  <span className="text-zinc-400 group-hover:text-black transition-colors flex-shrink-0 text-xl">
                    ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
