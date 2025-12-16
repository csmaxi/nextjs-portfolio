export function Skills() {
  const frontend = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion"]
  const backend = ["Node.js", "PostgreSQL", "Supabase", "Next.js API Routes", "REST APIs"]
  const tools = ["Vercel", "Git", "GitHub", "Cursor", "v0"]

  return (
    <section className="py-20 bg-white border-t border-zinc-200" style={{ fontFamily: '__nextjs-Geist' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-12" style={{ fontFamily: '__nextjs-Geist' }}>Stack</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-x-2 text-zinc-600">
                {frontend.map((skill, i) => (
                  <span key={i}>
                    {skill}
                    {i < frontend.length - 1 && ","}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Backend</h3>
              <div className="flex flex-wrap gap-x-2 text-zinc-600">
                {backend.map((skill, i) => (
                  <span key={i}>
                    {skill}
                    {i < backend.length - 1 && ","}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Herramientas</h3>
              <div className="flex flex-wrap gap-x-2 text-zinc-600">
                {tools.map((tool, i) => (
                  <span key={i}>
                    {tool}
                    {i < tools.length - 1 && ","}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
