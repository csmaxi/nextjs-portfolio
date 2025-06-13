"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    mensaje: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Número de WhatsApp en formato internacional (sin el +)
    const whatsappNumber = "5492966241623"
    const message = `Hola! Soy ${formData.nombre}.\n\n${formData.mensaje}\n\nMi teléfono: ${formData.telefono}`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    // Limpiar el formulario después de enviar
    setFormData({
      nombre: "",
      telefono: "",
      mensaje: ""
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "csmaxinro@gmail.com",
      href: "mailto:csmaxinro@gmail.com",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Ubicación",
      value: "Santa cruz, Argentina",
    },
  ]

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">Contacto</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">¡Hablemos!</h3>
              <p className="text-lg text-gray-600 mb-8">
                Estoy siempre interesado en nuevas oportunidades y proyectos emocionantes. No dudes en contactarme si
                quieres colaborar o simplemente charlar sobre tecnología.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{info.title}</p>
                      <a href={info.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Envíame un mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input 
                      placeholder="Nombre" 
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                    <Input 
                      placeholder="Teléfono" 
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Textarea 
                    placeholder="Tu mensaje..." 
                    className="min-h-[120px]"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                  />
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Enviar por WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
