"use client"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export function Hero() {
  useEffect(() => {
    // Add smooth scrolling behavior to the entire page
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    window.open('/cvmaxi2025.pdf', '_blank')
  }

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            <span className="block text-blue-600">Maxi Nuñez</span>
            Desarrollador Full Stack
          </h1>

          <p className="text-lg sm:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Especializado en Next.js y React. Apasionado por crear soluciones web eficientes, escalables y con un diseño limpio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="#proyectos">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Ver proyectos
              </Button>
            </Link>
            <Button size="lg" variant="outline" onClick={handleDownloadCV}>
              Descargar CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full border border-gray-300" 
              aria-label="GitHub"
              onClick={() => window.open('https://github.com/csmaxi', '_blank')}
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full border border-gray-300" 
              aria-label="LinkedIn"
              onClick={() => window.open('https://www.linkedin.com/in/csmaxi/', '_blank')}
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full border border-gray-300" 
              aria-label="Email"
              onClick={() => window.open('mailto:csmaxinro@gmail.com', '_blank')}
            >
              <Mail className="h-6 w-6" />
            </Button>
          </div>

          <Link href="#sobre-mi" className="block">
            <ArrowDown className="h-8 w-8 mx-auto text-gray-400 animate-bounce hover:text-gray-600 transition-colors cursor-pointer" />
          </Link>
        </div>
      </div>
    </section>
  )
}
