"use client"

import { MapPin, Mail, MessageCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="flex items-center justify-center bg-gradient-to-b from-blue-50/20 via-white to-white" style={{ fontFamily: '__nextjs-Geist' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center pt-3 pb-3">
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-black via-zinc-800 to-black bg-clip-text text-transparent mb-4">
            Maxi Nuñez
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-700 mb-4">
            Fullstack Developer | <span className="text-blue-600/80">SaaS Builder</span>
          </p>
          <div className="flex items-center justify-center gap-2 text-zinc-600 mb-12">
            <MapPin className="h-5 w-5 text-green-500/60" />
            <span className="text-lg">Argentina</span>
          </div>
          
          <div className="flex justify-center gap-6 text-zinc-600">
            <a 
              href="mailto:csmaxinro@gmail.com" 
              className="flex items-center gap-2 hover:text-blue-600 transition-colors font-medium group"
            >
              <Mail className="h-5 w-5 group-hover:text-blue-500 transition-colors" />
              Email
            </a>
            <a 
              href="https://wa.me/542966241623?text=Hola%20Maxi!%20Vi%20tu%20portafolio%20y%20me%20gustaría%20hablar%20contigo%20sobre%20un%20proyecto." 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-600 transition-colors font-medium group"
            >
              <MessageCircle className="h-5 w-5 group-hover:text-green-500 transition-colors" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
