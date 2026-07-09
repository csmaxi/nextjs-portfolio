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
  Wrench,
  ArrowRight,
  Sparkles,
  Send,
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
    category: "SaaS",
    color: "from-blue-600 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.25)"
  },
  {
    title: "Mi Comida",
    subtitle: "Pedidos de Comida Digital",
    problem: "Restaurantes pierden tiempo y pedidos atendiendo manualmente chats de WhatsApp.",
    solution: "Menú digital autogestionable con carrito integrado que consolida el pedido y lo envía formateado.",
    features: ["Carrito de compras interactivo", "Administración de stock", "Envío directo a WhatsApp"],
    stack: ["Next.js", "TypeScript", "Supabase", "Zustand", "Tailwind CSS"],
    demo: "https://mi-comida.vercel.app/",
    github: "#",
    category: "SaaS",
    color: "from-emerald-600 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.25)"
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
    category: "Utilidad",
    color: "from-purple-600 to-indigo-500",
    glowColor: "rgba(139, 92, 246, 0.25)"
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
    category: "SaaS",
    color: "from-amber-600 to-orange-500",
    glowColor: "rgba(245, 158, 11, 0.25)"
  },
  {
    title: "Viva Propiedades",
    subtitle: "Portal Inmobiliario Moderno",
    problem: "Inmobiliarias pequeñas no tienen catálogo web público y usan planillas Excel obsoletas.",
    solution: "Buscador inmobiliario dinámico con filtros complejos y panel administrativo para subir propiedades.",
    features: ["Filtros avanzados (tipo, precio, zona)", "Galería de imágenes responsive", "Panel de administración"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    demo: "https://csmaxi-propiedades.vercel.app/",
    github: "#",
    category: "Empresarial",
    color: "from-pink-600 to-rose-500",
    glowColor: "rgba(236, 72, 153, 0.25)"
  },
  {
    title: "Eventos",
    subtitle: "Gestor de Asistencias y Aforo",
    problem: "Organizadores de eventos sin control de inscripciones ni confirmación ágil.",
    solution: "Sistema de registro, validación y control de capacidad para eventos de pequeña y mediana escala.",
    features: ["Registro ágil de asistentes", "Control de aforo máximo", "Dashboard de analíticas"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    demo: "https://eloquent-brown.vercel.app/",
    github: "#",
    category: "Empresarial",
    color: "from-cyan-600 to-blue-500",
    glowColor: "rgba(6, 182, 212, 0.25)"
  },
  {
    title: "Glacial Medio",
    subtitle: "Medio de Comunicación Local",
    problem: "Medios regionales carecen de portales de noticias adaptados a móviles y SEO.",
    solution: "Portal periodístico optimizado con Core Web Vitals excelentes y CMS integrado.",
    features: ["CMS optimizado para redactores", "Lectura responsiva y rápida", "SEO dinámico integrado"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    demo: "https://medio-delta.vercel.app/",
    github: "#",
    category: "Empresarial",
    color: "from-sky-600 to-indigo-500",
    glowColor: "rgba(14, 165, 233, 0.25)"
  },
  {
    title: "Temporizador Productivo",
    subtitle: "Herramienta de Productividad",
    problem: "Distracciones constantes y falta de técnicas de gestión de tiempo estructuradas.",
    solution: "Aplicación de Pomodoro y cronometraje limpio, libre de anuncios y con configuración flexible.",
    features: ["Método Pomodoro clásico", "Alarmas integradas y limpias", "Interfaz libre de fricción"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://temporizador-tawny.vercel.app/config",
    github: "#",
    category: "Utilidad",
    color: "from-violet-500 to-purple-700",
    glowColor: "rgba(139, 92, 246, 0.25)"
  }
];

// Stack de habilidades con íconos descriptivos
const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-5 h-5 text-blue-500" />,
    skills: ["React 18/19", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion", "Zustand", "React Hook Form"]
  },
  {
    title: "Backend & Databases",
    icon: <Database className="w-5 h-5 text-emerald-500" />,
    skills: ["Supabase (Auth, Database, Storage)", "PostgreSQL", "REST APIs", "Node.js (API Routes)", "Zod validation"]
  },
  {
    title: "Integraciones & Deployment",
    icon: <Server className="w-5 h-5 text-purple-500" />,
    skills: ["Pasarela MercadoPago", "WhatsApp Business API", "Vercel CI/CD", "Git & GitHub", "Cursor AI Development"]
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
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // WhatsApp form state
  const [contactForm, setContactForm] = useState({
    name: "",
    company: "",
    reason: "Contratación Full-Time",
    message: ""
  });

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

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "542966241623";
    const text = `Hola Maxi! Soy ${contactForm.name}${contactForm.company ? ` de ${contactForm.company}` : ""}.\n\nMe interesa charlar por: *${contactForm.reason}*.\n\nMensaje:\n"${contactForm.message}"`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
  };

  const categories = ["Todos", "SaaS", "Empresarial", "Utilidad"];
  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#09090b] text-white">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen relative grid-bg selection:bg-blue-500 selection:text-white dark:bg-[#09090b] bg-slate-50 transition-colors duration-300">
      
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 transition-colors duration-300 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-extrabold shadow-md">
              M
            </div>
            <span className="font-bold text-lg hidden sm:block tracking-tight text-slate-800 dark:text-zinc-100">
              Maxi Núñez
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-zinc-400">
            <button onClick={() => scrollTo("proyectos")} className="hover:text-blue-500 dark:hover:text-blue-400 px-2 py-1 transition-colors">
              Proyectos
            </button>
            <button onClick={() => scrollTo("stack")} className="hover:text-blue-500 dark:hover:text-blue-400 px-2 py-1 transition-colors">
              Habilidades
            </button>
            <button onClick={() => scrollTo("experiencia")} className="hover:text-blue-500 dark:hover:text-blue-400 px-2 py-1 transition-colors">
              Experiencia
            </button>
            <button onClick={() => scrollTo("contacto")} className="hover:text-blue-500 dark:hover:text-blue-400 px-2 py-1 transition-colors">
              Contacto
            </button>
          </nav>

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-lg border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all shadow-sm"
              title="Cambiar tema"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Quick WhatsApp Recruiters CTA */}
            <a
              href="https://wa.me/542966241623?text=Hola%20Maxi,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hacerte%20una%20propuesta."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-md transition-colors"
            >
              <MessageCircle size={14} />
              Contratar
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-lg border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all shadow-sm"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
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
              transition={{ duration: 0.25 }}
              className="md:hidden border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#09090b] overflow-hidden shadow-lg"
            >
              <div className="px-6 py-5 flex flex-col gap-4 text-sm font-semibold text-slate-700 dark:text-zinc-300">
                <button
                  onClick={() => { scrollTo("proyectos"); setMobileMenuOpen(false); }}
                  className="text-left py-2.5 border-b border-slate-100 dark:border-zinc-900/60 hover:text-blue-500 transition-colors"
                >
                  Proyectos
                </button>
                <button
                  onClick={() => { scrollTo("stack"); setMobileMenuOpen(false); }}
                  className="text-left py-2.5 border-b border-slate-100 dark:border-zinc-900/60 hover:text-blue-500 transition-colors"
                >
                  Habilidades
                </button>
                <button
                  onClick={() => { scrollTo("experiencia"); setMobileMenuOpen(false); }}
                  className="text-left py-2.5 border-b border-slate-100 dark:border-zinc-900/60 hover:text-blue-500 transition-colors"
                >
                  Experiencia
                </button>
                <button
                  onClick={() => { scrollTo("contacto"); setMobileMenuOpen(false); }}
                  className="text-left py-2.5 hover:text-blue-500 transition-colors"
                >
                  Contacto
                </button>

                <a
                  href="https://wa.me/542966241623?text=Hola%20Maxi,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hacerte%20una%20propuesta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-2 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-3.5 rounded-xl shadow-md transition-colors"
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 rounded-full blur-[80px] sm:blur-[100px] -z-10 dark:block hidden"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Status Open to Work */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-[11px] sm:text-xs font-semibold mb-6 sm:mb-8 shadow-sm max-w-[90%] sm:max-w-none text-left"
          >
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Disponible para trabajar e Incorporar Valor Inmediato
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 dark:from-white dark:via-zinc-200 dark:to-zinc-500 bg-clip-text text-transparent">
              Maxi Núñez
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent text-xl sm:text-5xl lg:text-6xl font-bold block mt-1">
              Fullstack Developer & SaaS Builder
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal px-2 sm:px-0"
          >
            Especializado en Next.js, React y Supabase. Creo aplicaciones robustas de extremo a extremo, resuelvo problemas de negocio y optimizo flujos mediante herramientas de inteligencia artificial.
          </motion.p>

          {/* Core Info Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2.5 text-slate-500 dark:text-zinc-500 text-xs sm:text-sm mb-10 sm:mb-12 px-2"
          >
            <div className="flex items-center gap-1.5">
              <MapPin size={15} className="text-blue-500" />
              <span>Santa Cruz, Argentina (GMT-3)</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-slate-300 dark:bg-zinc-700 hidden sm:block"></div>
            <div className="flex items-center gap-1.5">
              <Sparkles size={15} className="text-amber-500" />
              <span>+8 Proyectos SaaS y Web</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-slate-300 dark:bg-zinc-700 hidden sm:block"></div>
            <div className="flex items-center gap-1.5">
              <Briefcase size={15} className="text-purple-500" />
              <span>Búsqueda Activa</span>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 px-4 sm:px-0"
          >
            <button
              onClick={() => scrollTo("proyectos")}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Ver Proyectos Desarrollados
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => scrollTo("contacto")}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-slate-50 dark:hover:bg-zinc-900 text-slate-800 dark:text-zinc-200 font-semibold transition-all shadow-sm flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Contacto Inmediato
            </button>

            <a
              href="/CV-RESUMIDO.md"
              download
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-dashed border-slate-300 dark:border-zinc-700 bg-transparent hover:bg-slate-100/50 dark:hover:bg-zinc-800/30 text-slate-600 dark:text-zinc-400 text-xs sm:text-sm font-medium transition-all flex items-center justify-center gap-2"
            >
              <FileText size={15} />
              Ver CV Markdown
            </a>
          </motion.div>
        </div>
      </section>

      {/* CORE STATS FOR RECRUITERS */}
      <section className="py-8 sm:py-12 border-y border-slate-200 dark:border-zinc-900 bg-white/40 dark:bg-zinc-950/20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 text-center">
          <div className="space-y-0.5">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-500">+4 años</h4>
            <p className="text-[10px] sm:text-xs text-slate-500 dark:text-zinc-400 font-bold uppercase tracking-wider">Escribiendo Código</p>
          </div>
          <div className="space-y-0.5 border-l border-slate-200 dark:border-zinc-800/80">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-500">8 Proyectos</h4>
            <p className="text-[10px] sm:text-xs text-slate-500 dark:text-zinc-400 font-bold uppercase tracking-wider">De producción Online</p>
          </div>
          <div className="space-y-0.5 md:border-l border-slate-200 dark:border-zinc-800/80">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-500">Next.js</h4>
            <p className="text-[10px] sm:text-xs text-slate-500 dark:text-zinc-400 font-bold uppercase tracking-wider">Framework Principal</p>
          </div>
          <div className="space-y-0.5 border-l border-slate-200 dark:border-zinc-800/80">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-purple-600 dark:text-purple-500">3x Vel.</h4>
            <p className="text-[10px] sm:text-xs text-slate-500 dark:text-zinc-400 font-bold uppercase tracking-wider">Acelerado con IA</p>
          </div>
        </div>
      </section>

      {/* WHAT I BRING TO THE TEAM (VALUE PROPOSITION) */}
      <section id="experiencia" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-2">Valor Profesional</h2>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100 leading-tight">
            ¿Por qué sumarme a tu equipo de desarrollo?
          </h3>
          <p className="text-slate-500 dark:text-zinc-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Combino bases técnicas sólidas de ingeniería con la última metodología de aceleración por IA para iterar productos y entregar soluciones en tiempo récord.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {valuePropositions.map((value, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 hover:scale-[1.01] sm:hover:scale-[1.02] transition-transform duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5">
                  {idx === 0 ? <Zap className="w-5 h-5" /> : idx === 1 ? <Sparkles className="w-5 h-5" /> : <Code className="w-5 h-5" />}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-zinc-100 mb-3">{value.title}</h4>
                <p className="text-slate-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">{value.description}</p>
              </div>
              <div className="mt-6 sm:mt-8 flex items-center gap-2 text-[10px] sm:text-xs font-bold text-blue-600 dark:text-blue-400">
                <span>Alto Impacto</span>
                <CheckCircle2 size={13} className="text-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FILTERABLE FEATURED PROJECTS */}
      <section id="proyectos" className="py-16 sm:py-24 border-t border-slate-200 dark:border-zinc-900 bg-white/30 dark:bg-zinc-950/10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-2">Trabajo Realizado</h2>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100">Proyectos Destacados</h3>
              <p className="text-slate-500 dark:text-zinc-400 mt-2 max-w-xl text-xs sm:text-sm">
                Haz clic en "Ver Demo" para probar las aplicaciones en vivo. Todas resuelven problemas prácticos reales de negocio.
              </p>
            </div>

            {/* Project Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-slate-200/60 dark:bg-zinc-800/40 rounded-xl max-w-max mx-auto md:mx-0 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-[11px] font-semibold tracking-wide transition-all ${
                    activeCategory === cat
                      ? "bg-white dark:bg-zinc-900 text-blue-600 dark:text-white shadow-sm"
                      : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={project.title}
                  className="group relative rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  style={{
                    boxShadow: theme === "dark" ? `0 10px 30px -15px ${project.glowColor}` : "none"
                  }}
                >
                  {/* Glowing hover indicator */}
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="p-5 sm:p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[10px] sm:text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 hover:text-blue-500 dark:hover:text-blue-400 transition-all border border-slate-100 dark:border-zinc-800 bg-white dark:bg-zinc-900"
                          title="Probar Aplicación"
                        >
                          <ExternalLink size={15} />
                        </a>
                      </div>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-slate-500 dark:text-zinc-400 text-xs sm:text-sm font-semibold mt-0.5 mb-4">
                      {project.subtitle}
                    </p>

                    {/* Problem / Solution Recruiters Grid */}
                    <div className="space-y-3 mb-5 p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-zinc-950/40 text-[11px] sm:text-xs border border-slate-100 dark:border-zinc-800/40">
                      <div>
                        <span className="font-extrabold text-slate-800 dark:text-zinc-200 block mb-0.5">⚠️ Problema:</span>
                        <p className="text-slate-600 dark:text-zinc-400">{project.problem}</p>
                      </div>
                      <div>
                        <span className="font-extrabold text-emerald-600 dark:text-emerald-400 block mb-0.5">✅ Solución:</span>
                        <p className="text-slate-600 dark:text-zinc-400">{project.solution}</p>
                      </div>
                    </div>

                    {/* Highlight features */}
                    <div className="mb-5">
                      <span className="text-[10px] sm:text-xs font-bold text-slate-400 dark:text-zinc-500 block mb-2 uppercase tracking-wide">Características Clave</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {project.features.map(f => (
                          <li key={f} className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-zinc-300">
                            <CheckCircle2 size={12} className="text-emerald-500 flex-shrink-0" />
                            <span className="line-clamp-1">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map(tech => (
                        <span
                          key={tech}
                          className="text-[9px] sm:text-[10px] font-bold bg-slate-100 dark:bg-zinc-800/60 text-slate-700 dark:text-zinc-300 px-2.5 py-1 rounded border border-slate-200/50 dark:border-zinc-800/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-5 sm:px-8 py-4 border-t border-slate-100 dark:border-zinc-900 bg-slate-50/50 dark:bg-zinc-950/10 flex justify-between items-center">
                    <span className="text-[10px] sm:text-xs text-slate-500 dark:text-zinc-500">
                      Vibe-Coded Deploy
                    </span>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
                    >
                      Probar Demo Online
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* TECH STACK VISUAL SHOWCASE */}
      <section id="stack" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-2">Ecosistema Técnico</h2>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100">Mi Stack Tecnológico</h3>
          <p className="text-slate-500 dark:text-zinc-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Herramientas que domino y utilizo diariamente para crear software robusto, rápido y mantenible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map(cat => (
            <div
              key={cat.title}
              className="p-5 sm:p-8 rounded-2xl border border-slate-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 relative shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="p-2 bg-slate-100 dark:bg-zinc-800 rounded-lg">
                  {cat.icon}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-100">{cat.title}</h4>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {cat.skills.map(skill => (
                  <div
                    key={skill}
                    className="p-2.5 sm:p-3 rounded-xl bg-slate-50 dark:bg-zinc-950/40 text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-zinc-300 border border-slate-100 dark:border-zinc-800/40 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE CONTACT PORTAL (WHATSAPP FORM & MAIL) */}
      <section id="contacto" className="py-16 sm:py-24 border-t border-slate-200 dark:border-zinc-900 bg-white/20 dark:bg-zinc-950/20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-2">Hablemos Hoy</h2>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-100">Portal de Contacto</h3>
            <p className="text-slate-500 dark:text-zinc-400 mt-3 max-w-xl mx-auto text-xs sm:text-sm">
              ¿Quieres hacerme una propuesta de trabajo, hablar de un proyecto o concertar una entrevista? Completa el formulario para enviarme un WhatsApp instantáneo o escríbeme por email.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-10 md:gap-12 items-start">
            
            {/* Quick Details */}
            <div className="md:col-span-2 space-y-6 sm:space-y-8">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-100 mb-3">Información de Contacto</h4>
                <p className="text-slate-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                  Respondo usualmente en menos de 2 horas. Prefiero el contacto por WhatsApp o correo electrónico.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-slate-400 dark:text-zinc-500 block uppercase font-bold tracking-wider">Correo</span>
                    <button 
                      onClick={handleCopyEmail}
                      className="text-xs sm:text-sm font-semibold hover:text-blue-600 dark:hover:text-blue-400 text-slate-800 dark:text-zinc-200 break-all text-left"
                    >
                      {copiedEmail ? "¡Copiado al portapapeles!" : "csmaxinro@gmail.com"}
                    </button>
                  </div>
                </div>

                {/* WhatsApp Item */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 dark:text-zinc-500 block uppercase font-bold tracking-wider">WhatsApp</span>
                    <a
                      href="https://wa.me/542966241623"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 text-slate-800 dark:text-zinc-200"
                    >
                      +54 2966 241623
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 flex-shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 dark:text-zinc-500 block uppercase font-bold tracking-wider">Ubicación</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200">
                      Santa Cruz, Argentina
                    </span>
                  </div>
                </div>
              </div>

              {/* Recruiter Cheat-Sheet */}
              <div className="p-4 sm:p-5 rounded-2xl bg-blue-500/5 border border-blue-500/15">
                <span className="text-[10px] sm:text-xs font-bold text-blue-600 dark:text-blue-400 block mb-2 uppercase tracking-wide">Recruiter Cheat-Sheet</span>
                <ul className="text-[11px] sm:text-xs space-y-2 text-slate-600 dark:text-zinc-400 leading-relaxed">
                  <li>• <strong>Disponibilidad:</strong> Full-Time / Freelance</li>
                  <li>• <strong>Modalidad:</strong> Remoto (Global) / Híbrido</li>
                  <li>• <strong>Contratación:</strong> Directa / Contractors</li>
                  <li>• <strong>Inglés:</strong> Técnico Intermedio (Escritura fluida)</li>
                </ul>
              </div>
            </div>

            {/* Recruiter WhatsApp Form */}
            <div className="md:col-span-3 w-full">
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 shadow-sm relative">
                <div className="absolute top-4 right-4 text-emerald-500 dark:text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full text-[9px] sm:text-[10px] font-bold">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  Directo a WhatsApp
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-100 mb-5 sm:mb-6">Generador de Mensaje</h4>
                
                <form onSubmit={handleSendWhatsApp} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-500 dark:text-zinc-400 mb-1.5 uppercase">Tu Nombre</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={e => setContactForm({...contactForm, name: e.target.value})}
                        placeholder="Ej. Sofía Rodríguez"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950/60 text-slate-800 dark:text-zinc-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold text-slate-500 dark:text-zinc-400 mb-1.5 uppercase">Empresa (Opcional)</label>
                      <input
                        type="text"
                        value={contactForm.company}
                        onChange={e => setContactForm({...contactForm, company: e.target.value})}
                        placeholder="Ej. Tech Corp"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950/60 text-slate-800 dark:text-zinc-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-slate-500 dark:text-zinc-400 mb-1.5 uppercase">Motivo del Mensaje</label>
                    <select
                      value={contactForm.reason}
                      onChange={e => setContactForm({...contactForm, reason: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950/60 text-slate-800 dark:text-zinc-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    >
                      <option>Contratación Full-Time</option>
                      <option>Proyecto Freelance / Consultoría</option>
                      <option>Coordinar Entrevista Técnica</option>
                      <option>Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold text-slate-500 dark:text-zinc-400 mb-1.5 uppercase">Tu Mensaje</label>
                    <textarea
                      required
                      rows={4}
                      value={contactForm.message}
                      onChange={e => setContactForm({...contactForm, message: e.target.value})}
                      placeholder="Hola Maxi! Nos gustó mucho tu portafolio y tu experiencia en Next.js. Quisiéramos agendar una reunión contigo..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950/60 text-slate-800 dark:text-zinc-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md text-xs sm:text-sm"
                  >
                    <Send size={15} />
                    Enviar Mensaje por WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 dark:border-zinc-900 bg-white/40 dark:bg-zinc-950/20 py-6 sm:py-8 px-4 sm:px-6 text-center text-[11px] sm:text-xs text-slate-500 dark:text-zinc-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3.5">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <span className="font-extrabold text-slate-700 dark:text-zinc-300">Maxi Núñez</span>
            <span>• Fullstack Developer & SaaS Specialist</span>
          </div>

          <div>
            © {new Date().getFullYear()} • Hecho con Next.js y Vibe Coding en Argentina.
          </div>
        </div>
      </footer>
    </main>
  );
}