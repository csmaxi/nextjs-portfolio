import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function About() {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Desarrollo Frontend",
      description: "Experiencia con Next.js, React y TypeScript.",
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "Desarrollo Backend",
      description: "Uso de Node.js, PostgreSQL y Supabase.",
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-600" />,
      title: "Diseño UI/UX",
      description: "Shadcn UI, Framer Motion y Tailwind CSS.",
    },
  ]

  return (
    <section id="sobre-mi" className="py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Sobre mí
          </h2>

          <Card className="mb-16 shadow-sm border border-gray-100">
            <CardContent className="p-8 md:p-10">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                Soy un desarrollador Full Stack con más de 4 años de experiencia creando aplicaciones web modernas y escalables. Me enfoco en escribir código limpio, construir interfaces intuitivas y aplicar buenas prácticas de arquitectura. Busco siempre aprender y mantenerme al día con las últimas herramientas para entregar soluciones sólidas y de calidad.
                </p>
                {/* <p>
                  Trabajo con un fuerte enfoque en la calidad del código, la arquitectura escalable y una experiencia de usuario cuidada. Utilizo herramientas como Cursor IDE y V0 de Vercel para acelerar el desarrollo sin comprometer la calidad.
                </p>
                <p>
                  Me motiva el aprendizaje constante y la adopción de nuevas tecnologías para crear soluciones útiles, mantenibles y pensadas para el futuro.
                </p> */}
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
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
