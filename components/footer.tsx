'use client'

import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Separator className="mb-8" />
        <div className="flex justify-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Maxi Nuñez
          </p>
        </div>
      </div>
    </footer>
  )
}
