export function Projects() {
  const projects = [
    {
      title: "turnar.app",
      description: "Sistema de Gestión de Turnos",
      stack: ["Next.js", "PostgreSQL", "Supabase"],
      url: "https://turnar.app",
    },
    {
      title: "Mi Comida",
      description: "Plataforma de Pedidos de Comida Online",
      stack: ["Next.js", "React", "Supabase"],
      url: "https://mi-comida.vercel.app/",
    },
    {
      title: "rifa-facil.app",
      description: "Herramienta de gestión de rifas",
      stack: ["Next.js", "PostgreSQL", "Tailwind CSS"],
      url: "https://rifa-facil.app/",
    },
    {
      title: "Eventos",
      description: "Sistema de Gestión de Eventos",
      stack: ["Next.js", "Node.js", "PostgreSQL"],
      url: "https://eloquent-brown.vercel.app/",
    },
    {
      title: "Glacial Medio",
      description: "Medio Digital y Plataforma de Noticias",
      stack: ["Next.js", "React", "TypeScript"],
      url: "https://medio-delta.vercel.app/",
    },
    {
      title: "Temporizador",
      description: "Aplicación de Temporizador y Cronómetro",
      stack: ["React", "Next.js", "TypeScript"],
      url: "https://temporizador-tawny.vercel.app/config",
    },
  ]

  return (
    <section className="py-20 bg-white border-t border-zinc-200" style={{ fontFamily: '__nextjs-Geist' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-12" style={{ fontFamily: '__nextjs-Geist' }}>Proyectos destacados</h2>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-b border-zinc-200 pb-8 last:border-b-0 last:pb-0 hover:bg-zinc-50 -mx-4 px-4 py-4 rounded-lg transition-all cursor-pointer group shadow-sm hover:shadow-md"
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
