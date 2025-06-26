'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ChevronDown, Users, Calendar, Utensils, Code, ShoppingCart, BookOpen, Hotel, CarFront, House, Dumbbell, Hospital, ShoppingCartIcon } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useState } from "react"

export function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const mainProjects = [
    // {
    //   "title": "MiTurno - Plataforma de Perfiles Profesionales",
    //   "description": "Plataforma social para descubrir y conectar con profesionales y servicios. Implementa un sistema de búsqueda en tiempo real con paginación, perfiles personalizables con imágenes de perfil y banner, y una interfaz moderna y responsiva. Incluye un sistema de autenticación seguro y gestión de sesiones de usuario.",
    //   "icon": Users,
    //   "iconColor": "text-blue-500",
    //   "technologies": [
    //     "Next.js",
    //     "TypeScript",
    //     "Supabase",
    //     "Tailwind CSS",
    //     "SWR",
    //     "React"
    //   ],
    //   liveUrl: "https://miturno.vercel.app",
    //   githubUrl: "#",
    // },
    // {
    //   "title": "EventosApp - Plataforma de Gestión de Eventos",
    //   "description": "Plataforma integral para la gestión y organización de eventos. Implementa un sistema completo de gestión de eventos con funcionalidades de autenticación, pagos a través de MercadoPago, y una interfaz moderna y responsiva. Incluye características como gestión de usuarios, sistema de pagos y notificaciones por email.",
    //   "icon": Calendar,
    //   "iconColor": "text-purple-500",
    //   "technologies": [
    //     "Next.js 14",
    //     "TypeScript",
    //     "Prisma",
    //     "Supabase",
    //     "Tailwind CSS",
    //     "MercadoPago SDK",
    //     "React",
    //     "Framer Motion",
    //     "Radix UI",
    //     "Recharts",
    //     "NextAuth.js",
    //     "Resend (Email)",
    //     "Vercel Analytics"
    //   ],
    //   liveUrl: "https://eloquent-imxnztx6u-csmaxis-projects.vercel.app/",
    //   githubUrl: "#",
    // },
    
    // {
    //   "title": "Menu Digital - Plataforma de Restaurante",
    //   "description": "Aplicación web moderna para mostrar el menú de un restaurante con un diseño responsivo y funcionalidades avanzadas. Implementa un sistema completo de categorías de alimentos y bebidas, incluyendo carnes, parrillas, pastas, pescados, pizzas, postres, promociones y vinos. La interfaz está diseñada para una experiencia de usuario óptima al navegar por las diferentes secciones del menú.",
    //   "icon": Utensils,
    //   "iconColor": "text-orange-500",
    //   "technologies": [
    //     "Next.js 14",
    //     "TypeScript",
    //     "React 18",
    //     "Tailwind CSS",
    //     "Radix UI",
    //     "Framer Motion",
    //   ],
    //   liveUrl: "https://menu-psi-liart.vercel.app/",
    //   githubUrl: "#",
    // },
    {
      "title": "Hotel Aurora",
      "subtitle": "Plataforma de Hoteles",
      "description": "Aplicación web moderna para mostrar el menú de un restaurante con un diseño responsivo y funcionalidades avanzadas. Implementa un sistema completo de categorías de alimentos y bebidas, incluyendo carnes, parrillas, pastas, pescados, pizzas, postres, promociones y vinos. La interfaz está diseñada para una experiencia de usuario óptima al navegar por las diferentes secciones del menú.",
      "icon": Hotel,
      "iconColor": "text-orange-500",
      "technologies": [
        "Next.js 14",
        "TypeScript",
        "React 18",
        "Tailwind CSS",
        "Radix UI",
        "Framer Motion",
      ],
      liveUrl: "https://csmaxi-hotel.vercel.app/",
      githubUrl: "https://github.com/csmaxi/hotel-aurora",
    },
    {
      "title": "Auto Mundo",
      "subtitle": "Concesionario de Autos",
      "description": "Aplicación web moderna para mostrar el menú de un restaurante con un diseño responsivo y funcionalidades avanzadas. Implementa un sistema completo de categorías de alimentos y bebidas, incluyendo carnes, parrillas, pastas, pescados, pizzas, postres, promociones y vinos. La interfaz está diseñada para una experiencia de usuario óptima al navegar por las diferentes secciones del menú.",
      "icon": CarFront,
      "iconColor": "text-red-500",
      "technologies": [
        "Next.js 14",
        "TypeScript",
        "React 18",
        "Tailwind CSS",
        "Radix UI",
        "Framer Motion",
      ],
      liveUrl: "https://csmaxi-concesionaria.vercel.app/",
      githubUrl: "https://github.com/csmaxi/automundo-website",
    },
    {
      "title": "Viva Propiedades",
      "subtitle": "Inmobiliaria",
      "description": "Aplicación web moderna para mostrar el menú de un restaurante con un diseño responsivo y funcionalidades avanzadas. Implementa un sistema completo de categorías de alimentos y bebidas, incluyendo carnes, parrillas, pastas, pescados, pizzas, postres, promociones y vinos. La interfaz está diseñada para una experiencia de usuario óptima al navegar por las diferentes secciones del menú.",
      "icon": House,
      "iconColor": "text-blue-500",
      "technologies": [
        "Next.js 14",
        "TypeScript",
        "React 18",
        "Tailwind CSS",
        "Radix UI",
        "Framer Motion",
      ],
      liveUrl: "https://csmaxi-propiedades.vercel.app/",
      githubUrl: "https://github.com/csmaxi/viva-propiedades",
    },
    {
      "title": "Energym",
      "subtitle": "Gimnasio",
      "description": "Aplicación web moderna para mostrar el menú de un restaurante con un diseño responsivo y funcionalidades avanzadas. Implementa un sistema completo de categorías de alimentos y bebidas, incluyendo carnes, parrillas, pastas, pescados, pizzas, postres, promociones y vinos. La interfaz está diseñada para una experiencia de usuario óptima al navegar por las diferentes secciones del menú.",
      "icon": Dumbbell,
      "iconColor": "text-gray-500",
      "technologies": [
        "Next.js 14",
        "TypeScript",
        "React 18",
        "Tailwind CSS",
        "Radix UI",
        "Framer Motion",
      ],
      liveUrl: "https://csmaxi-gym.vercel.app/",
      githubUrl: "https://github.com/csmaxi/energym-website",
    },
    {
      "title": "Clinica Salud Vital",
      "subtitle": "Clínica Médica",
      "description": "Aplicación web moderna para mostrar el menú de un restaurante con un diseño responsivo y funcionalidades avanzadas. Implementa un sistema completo de categorías de alimentos y bebidas, incluyendo carnes, parrillas, pastas, pescados, pizzas, postres, promociones y vinos. La interfaz está diseñada para una experiencia de usuario óptima al navegar por las diferentes secciones del menú.",
      "icon": Hospital,
      "iconColor": "text-green-500",
      "technologies": [
        "Next.js 14",
        "TypeScript",
        "React 18",
        "Tailwind CSS",
        "Radix UI",
        "Framer Motion",
      ],
      liveUrl: "https://csmaxi-clinica.vercel.app/",
      githubUrl: "https://github.com/csmaxi/clinica-salud-vital",
    },
    {
      "title": "E-commerce",
      "subtitle": "Tienda virtual",
      "description": "Aplicación web moderna para mostrar el menú de un restaurante con un diseño responsivo y funcionalidades avanzadas. Implementa un sistema completo de categorías de alimentos y bebidas, incluyendo carnes, parrillas, pastas, pescados, pizzas, postres, promociones y vinos. La interfaz está diseñada para una experiencia de usuario óptima al navegar por las diferentes secciones del menú.",
      "icon": ShoppingCartIcon,
      "iconColor": "text-purple-500",
      "technologies": [
        "Next.js 14",
        "TypeScript",
        "React 18",
        "Tailwind CSS",
        "Radix UI",
        "Framer Motion",
      ],
      liveUrl: "https://csmaxi-ecommerce.vercel.app/",
      githubUrl: "https://github.com/csmaxi/ecommerce-portfolio",
    }

  ]



  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">Proyectos</h2>

          {/* Proyectos Principales */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {mainProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-50 flex items-center justify-center group">
                  <project.icon className={`w-24 h-24 cursor-pointer ${project.iconColor} group-hover:scale-110 transition-all duration-300`} />
                </div>

                <CardHeader className="text-center">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.subtitle}</CardDescription>
                </CardHeader>

                <CardContent>
                  {/* <Collapsible
                    open={openIndex === index}
                    onOpenChange={(isOpen) => setOpenIndex(isOpen ? index : null)}
                    className="space-y-2"
                  >
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-full justify-between">
                        Ver detalles
                        <ChevronDown className={`h-4 w-4 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-4">
                      <p className="text-gray-600">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible> */}

                  <div className="flex gap-2 mt-4">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      disabled={project.liveUrl === '#'}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      disabled={project.githubUrl === '#'}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
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
