"use client"

export function Hero() {
  return (
    <section className="flex items-center justify-center bg-white" style={{ fontFamily: '__nextjs-Geist' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center pt-3 pb-3">
          <h1 className="text-5xl sm:text-6xl font-bold text-black mb-4">
            Maxi Nuñez
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-700 mb-12">
            Fullstack Developer | SaaS Builder
          </p>
          
          <div className="flex justify-center gap-6 text-zinc-600">
            <a 
              href="mailto:csmaxinro@gmail.com" 
              className="hover:text-black transition-colors font-medium"
            >
              Email
            </a>
            <a 
              href="https://wa.me/542966241623?text=Hola%20Maxi!%20Vi%20tu%20portafolio%20y%20me%20gustaría%20hablar%20contigo%20sobre%20un%20proyecto." 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors font-medium"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
