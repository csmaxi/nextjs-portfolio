'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Code, BookOpen, Users, Hotel, ShoppingCart } from "lucide-react"
import { useState } from "react"

export function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const mainProjects = [
    {
      "title": "Mi Turno",
      "subtitle": "Sistema de Gestión de Turnos",
      "icon": Calendar,
      "iconColor": "text-green-500",
      liveUrl: "https://miturno.vercel.app",
      githubUrl: "#",
    },
    {
      "title": "Glacial Medio",
      "subtitle": "Medio Digital y Plataforma de Noticias",
      "icon": Code,
      "iconColor": "text-blue-600",
      liveUrl: "https://medio-delta.vercel.app/",
      githubUrl: "#",
    },
    {
      "title": "Image Optimizer",
      "subtitle": "Herramienta de Optimización de Imágenes",
      "icon": BookOpen,
      "iconColor": "text-purple-500",
      liveUrl: "https://csoptimizer.vercel.app/",
      githubUrl: "#",
    },
    {
      "title": "Temporizador",
      "subtitle": "Aplicación de Temporizador y Cronómetro",
      "icon": Users,
      "iconColor": "text-orange-500",
      liveUrl: "https://temporizador-tawny.vercel.app/config",
      githubUrl: "#",
    },
    {
      "title": "Eventos",
      "subtitle": "Sistema de Gestión de Eventos",
      "icon": Hotel,
      "iconColor": "text-red-500",
      liveUrl: "https://eloquent-brown.vercel.app/",
      githubUrl: "#",
    },
    {
      "title": "Mi Comida",
      "subtitle": "Plataforma de Pedidos de Comida Online",
      "icon": ShoppingCart,
      "iconColor": "text-yellow-600",
      liveUrl: "https://miturno.vercel.app",
      githubUrl: "#",
    },
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
