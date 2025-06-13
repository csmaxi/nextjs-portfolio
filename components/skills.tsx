import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Shadcn/UI", level: 95 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Supabase", level: 85 },
        { name: "Rest API", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Serverless", level: 70 },
      ],
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Vercel/V0", level: 70 },
        { name: "Cursor IDE", level: 65 },
        { name: "Webpack", level: 60 },
      ],
    },
    {
      title: "Integraciones",
      skills: [
        { name: "Mercado Pago", level: 90 },
        { name: "APIs de mensajería", level: 85 },
        { name: "Autenticacion ", level: 80 },
        { name: "Estado global", level: 60 },
      ],
    },
  ]

  return (
    <section id="habilidades" className="py-20 bg-white">
      <div className=" mx-auto  sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">Habilidades</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
