import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Maxi Núñez | Fullstack Developer & SaaS Builder",
  description: "Desarrollador Full Stack de Argentina especializado en crear aplicaciones web SaaS, modernas, escalables y de alto rendimiento usando Next.js, React, Tailwind CSS y Supabase.",
  keywords: ["Maxi Núñez", "Maximiliano Núñez", "Fullstack Developer", "SaaS Builder", "Next.js", "React", "Supabase", "TypeScript", "Argentina", "Programador", "Desarrollador"],
  authors: [{ name: "Maximiliano Núñez", url: "https://csmaxi-portafolio.vercel.app/" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}