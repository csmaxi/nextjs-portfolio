"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "turnar.app",
    subtitle: "Sistema de Gestión de Turnos",
    problem: "Comercios pierden ingresos por ausentismo. Confirmación automática y recordatorios.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    demo: "https://turnar.app",
    github: "#",
  },
  {
    title: "Mi Comida",
    subtitle: "Plataforma de Pedidos de Comida Online",
    problem: "Restaurantes pierden pedidos de WhatsApp. Carrito, menú digital y tracking.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
    demo: "https://mi-comida.vercel.app/",
    github: "#",
  },
  {
    title: "Rifa Fácil",
    subtitle: "Herramienta de Gestión de Rifas",
    problem: "Organizadores gestionan números a mano y pierden trazabilidad de ventas.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://rifa-facil.app",
    github: "#",
  },
  {
    title: "Eventos",
    subtitle: "Sistema de Gestión de Eventos",
    problem: "Organizadores sin control de inscripciones, cupos y confirmaciones.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    demo: "https://eloquent-brown.vercel.app/",
    github: "#",
  },
  {
    title: "Glacial Medio",
    subtitle: "Medio Digital y Plataforma de Noticias",
    problem: "Medios locales sin presencia digital moderna. CMS completo.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    demo: "https://medio-delta.vercel.app/",
    github: "#",
  },
  {
    title: "CV Fácil",
    subtitle: "Plataforma para Crear Curriculums Profesionales",
    problem: "Personas sin diseño que necesitan un CV profesional en minutos.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://www.cvfacil.com.ar/",
    github: "#",
  },
  {
    title: "Viva Propiedades",
    subtitle: "Plataforma Inmobiliaria",
    problem: "Inmobiliarias que usan Excel y no tienen presencia online profesional.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    demo: "https://csmaxi-propiedades.vercel.app/",
    github: "#",
  },
  {
    title: "Temporizador",
    subtitle: "Aplicación de Temporizador y Cronómetro",
    problem: "Herramienta de productividad simple y sin fricción.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://temporizador-tawny.vercel.app/config",
    github: "#",
  },
];

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-[#0A0A0A] mb-4">
            Maxi Núñez
          </h1>
          <p className="text-xl md:text-2xl text-[#525252] mb-2">
            Fullstack Developer | SaaS Builder
          </p>
          <p className="text-lg text-[#525252] mb-6 max-w-xl mx-auto">
            Convierto ideas en aplicaciones web completas. Del modelado de
            datos al deploy.
          </p>
          <p className="text-base text-[#737373] mb-10">
          Argentina • csmaxinro@gmail.com
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("projects")}
              className="bg-[#0A0A0A] text-white font-medium px-8 py-3 rounded-lg hover:bg-[#262626] transition-colors shadow-lg shadow-black/5"
            >
              Ver Proyectos
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="border border-[#E5E5E5] text-[#0A0A0A] bg-white px-8 py-3 rounded-lg hover:bg-[#F5F5F5] transition-colors shadow-lg shadow-black/5"
            >
              Contactarme
            </button>
          </div>
        </motion.div>
      </section>

      {/* Proyectos */}
      <section id="projects" className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0A0A0A] text-center mb-12">
            Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_-6px_rgba(0,0,0,0.1),0_20px_40px_-4px_rgba(0,0,0,0.06)] transition-shadow flex flex-col justify-between border border-[#F0F0F0]"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-[#0A0A0A]">
                    {project.title}
                  </h3>
                  <p className="text-base text-[#525252] mt-1">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-[#737373] mt-3 leading-relaxed">
                    {project.problem}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-[#F5F5F5] text-[#525252] px-3 py-1 rounded-full border border-[#E5E5E5]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-[#E5E5E5] text-[#0A0A0A] px-4 py-2 rounded-lg hover:bg-[#F5F5F5] transition-colors text-sm shadow-sm"
                  >
                    <ExternalLink size={16} />
                    Ver Demo
                  </a>
                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-[#E5E5E5] text-[#0A0A0A] px-4 py-2 rounded-lg hover:bg-[#F5F5F5] transition-colors text-sm shadow-sm"
                  >
                    <Github size={16} />
                    Código
                  </a> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="py-24 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0A0A0A] mb-4">
            Contacto
          </h2>
          <p className="text-lg text-[#525252] mb-8">
            ¿Tenés un proyecto, necesitás un desarrollador o querés charlar?
          </p>
         
          <a
            href="https://wa.me/542966241623"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white font-medium px-8 py-3 rounded-lg hover:bg-[#262626] transition-colors shadow-lg shadow-black/10"
          >
            Escribime por WhatsApp
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-[#A3A3A3] border-t border-[#F0F0F0]">
        © {new Date().getFullYear()} Maxi Núñez • Argentina
      </footer>
    </main>
  );
}