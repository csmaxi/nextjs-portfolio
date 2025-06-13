import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function About() {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Desarrollo Frontend",
      description: "Especializado en Next.js, React, TypeScript y Tailwind CSS.",
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "Desarrollo Backend",
      description: "Experiencia con Supabase, APIs REST, PostgreSQL y arquitecturas serverless.",
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-600" />,
      title: "UI/UX Design",
      description: "Creación de interfaces responsivas y accesibles con Shadcn UI y Framer Motion.",
    },
  ]

  return (
    <section id="sobre-mi" className="py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Sobre mí</h2>
      

          <Card className="mb-16 shadow-sm border border-gray-100">
            <CardContent className="p-8 md:p-10">
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Soy un desarrollador Full Stack autodidacta con 4 años de experiencia, especializado en tecnologías modernas como Next.js, React y Supabase. Me apasiona construir soluciones web escalables, intuitivas y de alto rendimiento.
                </p>
                <p>
                  En cada proyecto aplico principios de clean code, buenas prácticas de arquitectura y foco en la experiencia del usuario. Trabajo con herramientas como Cursor IDE y V0 de Vercel para optimizar mis flujos de trabajo y mantener un alto estándar de calidad.
                </p>
                <p>
                  Creo en el aprendizaje continuo y la evolución constante como profesional. Busco siempre incorporar lo último en tecnología para ofrecer soluciones relevantes y sostenibles.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border border-gray-200 hover:shadow-md hover:border-blue-100 transition-all duration-200"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
