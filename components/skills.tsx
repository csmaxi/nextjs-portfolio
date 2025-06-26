import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React/Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
    },
    {
      title: "Backend",
      skills: ["Supabase", "Rest API", "PostgreSQL", "Node.js"],
    },
    {
      title: "Herramientas",
      skills: ["Git/GitHub", "Vercel/V0", "Cursor IDE", "Webpack"],
    },
    {
      title: "Integraciones",
      skills: ["Mercado Pago", "APIs de mensajería", "Autenticación", "Estado global"],
    },
  ]

  return (
    <section id="habilidades" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Habilidades
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-white border border-indigo-100 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <CardHeader>
                <CardTitle>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-800">
                  {category.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="pl-4 relative before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:bg-indigo-400 before:rounded-full"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
