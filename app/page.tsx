"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  ExternalLink,
  Github,
  Mail,
  MapPin,
  MessageCircle,
  FileText,
  CheckCircle2,
  Server,
  Layout,
  Database,
  ArrowRight,
  Sparkles,
  Briefcase,
  Phone,
  Sun,
  Moon,
  Zap,
  Code,
  Menu,
  X
} from "lucide-react";

// Proyectos con problemas reales resueltos y métricas
const projects = [
  {
    title: "turnar.app",
    subtitle: "Sistema SaaS de Gestión de Turnos",
    problem: "Comercios sufren pérdidas por inasistencia y errores en la reserva manual.",
    solution: "SaaS completo con confirmación y recordatorios automatizados que reducen el ausentismo en un 30%.",
    features: ["Recordatorios automáticos", "Calendario interactivo", "Gestión multi-sucursal"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS"],
    demo: "https://turnar.app",
    github: "#",
    category: "SaaS"
  },
  {
    title: "CV Fácil",
    subtitle: "Plataforma de Creación de CVs",
    problem: "Personas sin conocimientos de diseño tardan horas redactando un currículum estructurado.",
    solution: "Editor intuitivo en tiempo real que formatea la información y genera un PDF profesional en segundos.",
    features: ["Editor interactivo", "Múltiples plantillas", "Exportación PDF impecable"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "CSS Variables"],
    demo: "https://www.cvfacil.com.ar/",
    github: "#",
    category: "Utilidad"
  },
  {
    title: "Rifa Fácil",
    subtitle: "Gestión de Rifas en Línea",
    problem: "Organizadores de rifas gestionan números en cuadernos físicos, perdiendo control de cobros.",
    solution: "Tablero digital interactivo con pasarela simulada para reservar, pagar y ver números tomados.",
    features: ["Cuadrícula de números dinámica", "Control de pagos integrado", "Link público para compradores"],
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    demo: "https://rifa-facil.app",
    github: "#",
    category: "SaaS"
  }
];

// Stack de habilidades
const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-5 h-5 text-blue-500" />,
    skills: ["React 18/19", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion", "Zustand", "React Hook Form"]
  },
  {
    title: "Backend & Databases",
    icon: <Database className="w-5 h-5 text-emerald-500" />,
    skills: ["Supabase", "PostgreSQL", "REST APIs", "Node.js (API Routes)", "Zod validation"]
  },
  {
    title: "Integraciones & Deployment",
    icon: <Server className="w-5 h-5 text-purple-500" />,
    skills: ["MercadoPago", "WhatsApp API", "Vercel CI/CD", "Git & GitHub", "Cursor AI"]
  }
];

// Experiencia laboral / Puntos clave de valor para reclutadores
const valuePropositions = [
  {
    title: "Desarrollo Acelerado con IA (Vibe Coding)",
    description: "Dominio avanzado de herramientas de IA de vanguardia (Cursor AI, v0). Entrego código de alta calidad hasta un 3x más rápido, reduciendo tiempos de despliegue y validando MVPs con agilidad."
  },
  {
    title: "Enfoque 100% de Negocio e Impacto",
    description: "No solo escribo código. Entiendo qué necesita una empresa para vender más: pasarelas de pago fluidas, automatizaciones de mensajería (WhatsApp) y diseño centrado en la conversión del usuario."
  },
  {
    title: "Autonomía de Extremo a Extremo",
    description: "Capaz de modelar la base de datos relacional, estructurar las APIs del backend, diseñar layouts adaptables modernos en el frontend y automatizar el despliegue en Vercel."
  }
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("csmaxinro@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };



  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#09090b] text-white">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-zinc-400"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen relative grid-bg selection:bg-slate-200 dark:selection:bg-zinc-800 selection:text-slate-900 dark:selection:text-zinc-100 dark:bg-[#09090b] bg-white transition-colors duration-300">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 transition-colors duration-300 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-850">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="h-8 w-8 rounded-lg border border-slate-300 dark:border-zinc-700 flex items-center justify-center text-slate-800 dark:text-zinc-200 font-bold shadow-sm text-sm">
              MN
            </div>
            <span className="font-semibold text-sm hidden sm:block tracking-tight text-slate-800 dark:text-zinc-200">
              Maxi Núñez
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
            <button onClick={() => scrollTo("proyectos")} className="hover:text-slate-900 dark:hover:text-zinc-100 transition-colors">
              Proyectos
            </button>
            <button onClick={() => scrollTo("stack")} className="hover:text-slate-900 dark:hover:text-zinc-100 transition-colors">
              Habilidades
            </button>
            <button onClick={() => scrollTo("experiencia")} className="hover:text-slate-900 dark:hover:text-zinc-100 transition-colors">
              Experiencia
            </button>
            <button onClick={() => scrollTo("contacto")} className="hover:text-slate-900 dark:hover:text-zinc-100 transition-colors">
              Contacto
            </button>
          </nav>

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-lg border border-slate-200 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800/60 transition-all shadow-sm"
              title="Cambiar tema"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Quick WhatsApp Recruiters CTA */}
            <a
              href="https://wa.me/542966241623?text=Hola%20Maxi,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hacerte%20una%20propuesta."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-colors"
            >
              <MessageCircle size={14} />
              Contratar
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-lg border border-slate-200 dark:border-zinc-800 text-slate-500 dark:text-zinc-400 hover:bg-slate-50 dark:hover:bg-zinc-800/60 transition-all shadow-sm"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#09090b] overflow-hidden shadow-sm"
            >
              <div className="px-6 py-5 flex flex-col gap-4 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-zinc-400">
                <button
                  onClick={() => { scrollTo("proyectos"); setMobileMenuOpen(false); }}
                  className="text-left py-2 border-b border-slate-100 dark:border-zinc-900/40 hover:text-slate-900 dark:hover:text-zinc-100 transition-colors"
                >
                  Proyectos
                </button>
                <button
                  onClick={() => { scrollTo("stack"); setMobileMenuOpen(false); }}
                  className="text-left py-2 border-b border-slate-100 dark:border-zinc-900/40 hover:text-slate-900 dark:hover:text-zinc-100 transition-colors"
                >
                  Habilidades
                </button>
                <button
                  onClick={() => { scrollTo("experiencia"); setMobileMenuOpen(false); }}
                  className="text-left py-2 border-b border-slate-100 dark:border-zinc-900/40 hover:text-slate-900 dark:hover:text-zinc-100 transition-colors"
                >
                  Experiencia
                </button>
                <button
                  onClick={() => { scrollTo("contacto"); setMobileMenuOpen(false); }}
                  className="text-left py-2 hover:text-slate-900 dark:hover:text-zinc-100 transition-colors"
                >
                  Contacto
                </button>

                <a
                  href="https://wa.me/542966241623?text=Hola%20Maxi,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hacerte%20una%20propuesta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-2 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-3 rounded-xl shadow-sm transition-colors"
                >
                  <MessageCircle size={15} />
                  Contratar por WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Status Open to Work */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 text-[10px] sm:text-xs font-semibold mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Disponible para trabajar
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3 text-slate-900 dark:text-zinc-50 leading-tight"
          >
            Maxi Núñez
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base sm:text-lg text-slate-500 dark:text-zinc-400 font-medium mb-6 max-w-xl mx-auto"
          >
            Fullstack Developer & SaaS Builder
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 max-w-lg mx-auto mb-10 leading-relaxed px-2"
          >
            Especializado en Next.js, React y Supabase. Construyo aplicaciones web estables de extremo a extremo, resolviendo problemas prácticos de negocio con código limpio y arquitectura escalable.
          </motion.p>

          {/* Core Info Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-slate-500 dark:text-zinc-500 text-xs mb-10 px-2 font-medium"
          >
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-slate-400 dark:text-zinc-500" />
              <span>Santa Cruz, Argentina</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-slate-300 dark:bg-zinc-700 hidden sm:block"></div>
            <div className="flex items-center gap-1.5">
              <Sparkles size={14} className="text-slate-400 dark:text-zinc-500" />
              <span>+8 Proyectos SaaS y Web</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-slate-300 dark:bg-zinc-700 hidden sm:block"></div>
            <div className="flex items-center gap-1.5">
              <Briefcase size={14} className="text-slate-400 dark:text-zinc-500" />
              <span>Búsqueda Activa</span>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 sm:px-0"
          >
            <button
              onClick={() => scrollTo("proyectos")}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-900 dark:bg-zinc-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-zinc-200 font-semibold transition-all shadow-sm flex items-center justify-center gap-2 text-xs sm:text-sm"
            >
              Ver Proyectos Desarrollados
              <ArrowRight size={14} />
            </button>

            <button
              onClick={() => scrollTo("contacto")}
              className="w-full sm:w-auto px-6 py-3 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-slate-50 dark:hover:bg-zinc-900 text-slate-700 dark:text-zinc-300 font-semibold transition-all shadow-sm flex items-center justify-center gap-2 text-xs sm:text-sm"
            >
              Contacto Inmediato
            </button>

            <a
              href="/CV-RESUMIDO.md"
              download
              className="w-full sm:w-auto px-6 py-3 rounded-lg border border-dashed border-slate-200 dark:border-zinc-800 bg-transparent hover:bg-slate-50 dark:hover:bg-zinc-900/20 text-slate-500 dark:text-zinc-400 text-xs font-semibold transition-all flex items-center justify-center gap-2"
            >
              <FileText size={14} />
              Ver CV Markdown
            </a>
          </motion.div>
        </div>
      </section>

      {/* CORE STATS FOR RECRUITERS */}
      <section className="py-8 border-y border-slate-100 dark:border-zinc-900 bg-slate-50/30 dark:bg-zinc-950/10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 text-center">
          <div className="space-y-0.5">
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100">+4 años</h4>
            <p className="text-[10px] sm:text-xs text-slate-500 dark:text-zinc-500 font-semibold uppercase tracking-wider">Escribiendo Código</p>
          </div>
          <div className="space-y-0.5 border-l border-slate-200 dark:border-zinc-800/80">
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100">8 Proyectos</h4>
            <p className="text-[10px] sm:text-xs text-slate-500 dark:text-zinc-500 font-semibold uppercase tracking-wider">En producción Online</p>
          </div>
          <div className="space-y-0.5 md:border-l border-slate-200 dark:border-zinc-800/80">
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100">Next.js</h4>
            <p className="text-[10px] sm:text-xs text-slate-500 dark:text-zinc-500 font-semibold uppercase tracking-wider">Framework Principal</p>
          </div>
          <div className="space-y-0.5 border-l border-slate-200 dark:border-zinc-800/80">
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100">AI Stack</h4>
            <p className="text-[10px] sm:text-xs text-slate-500 dark:text-zinc-500 font-semibold uppercase tracking-wider">Desarrollo Eficiente</p>
          </div>
        </div>
      </section>

      {/* WHAT I BRING TO THE TEAM */}
      <section id="experiencia" className="py-16 sm:py-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100 leading-tight">
            Valor Técnico
          </h3>
          <p className="text-slate-500 dark:text-zinc-400 mt-2 max-w-xl mx-auto text-xs sm:text-sm">
            Especializado en integrar soluciones funcionales que resuelven necesidades operativas y comerciales de manera ágil.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {valuePropositions.map((value, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 dark:border-zinc-850 p-6 bg-transparent flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-lg border border-slate-200 dark:border-zinc-800 flex items-center justify-center mb-5">
                  {idx === 0 ? <Zap className="w-5 h-5 text-amber-500" /> : idx === 1 ? <Sparkles className="w-5 h-5 text-blue-500" /> : <Code className="w-5 h-5 text-purple-500" />}
                </div>
                <h4 className="text-base font-bold text-slate-950 dark:text-zinc-100 mb-2">{value.title}</h4>
                <p className="text-slate-500 dark:text-zinc-450 text-xs sm:text-sm leading-relaxed">{value.description}</p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-[10px] font-semibold text-slate-500 dark:text-zinc-500">
                <CheckCircle2 size={12} className="text-emerald-500" />
                <span>Eficiente</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FILTERABLE FEATURED PROJECTS */}
      <section id="proyectos" className="py-16 sm:py-20 border-t border-slate-100 dark:border-zinc-900 bg-slate-50/10 dark:bg-zinc-950/5 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-10 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100">Proyectos Desarrollados</h3>
            <p className="text-slate-500 dark:text-zinc-400 mt-2 max-w-md text-xs sm:text-sm">
              Proyectos reales estructurados bajo la lógica de resolver problemas concretos.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {projects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  key={project.title}
                  className="group relative rounded-xl border border-slate-200 dark:border-zinc-850 bg-white dark:bg-zinc-900/30 hover:border-slate-300 dark:hover:border-zinc-700 hover:shadow-sm transition-all duration-200 flex flex-col justify-between overflow-hidden"
                >
                  <div className="p-5 sm:p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="text-[10px] font-bold text-slate-500 dark:text-zinc-400 bg-slate-100 dark:bg-zinc-800/80 px-2.5 py-1 rounded">
                          {project.category}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all"
                          title="Probar Aplicación"
                        >
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 dark:text-zinc-100 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-slate-500 dark:text-zinc-400 text-xs font-semibold mt-0.5 mb-3">
                      {project.subtitle}
                    </p>

                    {/* Problem / Solution Recruiters Grid */}
                    <div className="space-y-2.5 mb-4 p-3 rounded-lg bg-slate-50 dark:bg-zinc-950/20 text-xs border border-slate-100 dark:border-zinc-900/10">
                      <div>
                        <span className="font-bold text-slate-800 dark:text-zinc-300 block mb-0.5">Problema:</span>
                        <p className="text-slate-500 dark:text-zinc-400 leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <span className="font-bold text-slate-850 dark:text-zinc-200 block mb-0.5">Solución:</span>
                        <p className="text-slate-500 dark:text-zinc-400 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.stack.map(tech => (
                        <span
                          key={tech}
                          className="text-[9px] font-bold bg-slate-50 dark:bg-zinc-800/40 text-slate-600 dark:text-zinc-400 px-2 py-0.5 rounded border border-slate-200/40 dark:border-zinc-800/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 py-3 border-t border-slate-100 dark:border-zinc-900 bg-slate-50/20 dark:bg-zinc-950/5 flex justify-between items-center">
                    <span className="text-[10px] text-slate-400 dark:text-zinc-500 font-medium">
                      Código y Deploy Listos
                    </span>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 flex items-center gap-1"
                    >
                      Probar Demo Online
                      <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* TECH STACK VISUAL SHOWCASE */}
      <section id="stack" className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100">Tecnologías y Frameworks</h3>
          <p className="text-slate-500 dark:text-zinc-400 mt-2 max-w-md mx-auto text-xs sm:text-sm">
            Herramientas principales utilizadas en el desarrollo de mis proyectos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map(cat => (
            <div
              key={cat.title}
              className="p-6 rounded-xl border border-slate-200 dark:border-zinc-850 bg-white dark:bg-zinc-900/10 relative shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 border border-slate-200 dark:border-zinc-800 rounded-lg">
                  {cat.icon}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-zinc-100">{cat.title}</h4>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {cat.skills.map(skill => (
                  <div
                    key={skill}
                    className="p-2 rounded-lg bg-slate-50 dark:bg-zinc-950/20 text-[10px] sm:text-xs font-semibold text-slate-600 dark:text-zinc-400 border border-slate-200/40 dark:border-zinc-800/40 hover:bg-slate-100 dark:hover:bg-zinc-800/20 transition-all text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MINIMALIST CONTACT INFO */}
      <section id="contacto" className="py-16 sm:py-20 border-t border-slate-100 dark:border-zinc-900 bg-slate-50/20 dark:bg-zinc-950/5 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100 mb-4">Contacto</h3>
          <p className="text-slate-500 dark:text-zinc-400 max-w-md mx-auto text-xs sm:text-sm mb-8">
            Disponible para incorporarme a equipos de desarrollo o coordinar entrevistas técnicas de manera inmediata.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            {/* Email button */}
            <button 
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-5 py-3 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:bg-slate-50 dark:hover:bg-zinc-900 flex items-center justify-center gap-2.5 transition-all text-xs font-semibold shadow-sm text-slate-700 dark:text-zinc-300"
            >
              <Mail size={16} className="text-blue-500" />
              <span>{copiedEmail ? "¡Email Copiado!" : "csmaxinro@gmail.com"}</span>
            </button>

            {/* WhatsApp Link */}
            <a
              href="https://wa.me/542966241623?text=Hola%20Maxi!%20Vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20charlar."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-lg border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:bg-slate-50 dark:hover:bg-zinc-900 flex items-center justify-center gap-2.5 transition-all text-xs font-semibold shadow-sm text-slate-700 dark:text-zinc-300"
            >
              <MessageCircle size={16} className="text-emerald-500" />
              <span>+54 2966 241623</span>
            </a>
          </div>

          {/* Minimalist Cheat Sheet */}
          <div className="max-w-md mx-auto p-4 rounded-xl border border-slate-250 dark:border-zinc-850 text-xs text-slate-500 dark:text-zinc-400 bg-transparent">
            <span className="font-semibold text-slate-400 dark:text-zinc-500 block mb-3 uppercase tracking-wider text-[10px]">Información de Contratación</span>
            <div className="grid grid-cols-2 gap-3 text-left px-2 sm:px-4">
              <div>
                <span className="text-[9px] text-slate-400 dark:text-zinc-500 block uppercase">Disponibilidad</span>
                <span className="font-semibold text-slate-800 dark:text-zinc-200 text-xs">Full-Time / Freelance</span>
              </div>
              <div>
                <span className="text-[9px] text-slate-400 dark:text-zinc-500 block uppercase">Modalidad</span>
                <span className="font-semibold text-slate-800 dark:text-zinc-200 text-xs">100% Remoto</span>
              </div>
              <div>
                <span className="text-[9px] text-slate-400 dark:text-zinc-500 block uppercase">Ubicación</span>
                <span className="font-semibold text-slate-800 dark:text-zinc-200 text-xs">Argentina (GMT-3)</span>
              </div>
              <div>
                <span className="text-[9px] text-slate-400 dark:text-zinc-500 block uppercase">Inglés</span>
                <span className="font-semibold text-slate-800 dark:text-zinc-200 text-xs">Técnico Intermedio</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 dark:border-zinc-900 bg-slate-50/20 dark:bg-zinc-950/5 py-6 px-4 sm:px-6 text-center text-[10px] text-slate-500 dark:text-zinc-500">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center justify-center gap-1.5">
            <span className="font-semibold text-slate-700 dark:text-zinc-300">Maxi Núñez</span>
            <span>• Fullstack Developer</span>
          </div>

          <div>
            © {new Date().getFullYear()} • Next.js & Tailwind CSS
          </div>
        </div>
      </footer>
    </main>
  );
}