import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Maxi Nuñez - Desarrollador Full Stack',
  description: 'Portfolio de Maxi Nuñez, Desarrollador Full Stack especializado en Next.js, React y Supabase',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
