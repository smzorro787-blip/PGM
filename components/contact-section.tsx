"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Heart, Users, Mail, Phone, Send, Instagram, MessageCircle, Building2, Sparkles } from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "voluntario",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
      setFormData({ name: "", email: "", phone: "", type: "voluntario", message: "" })
    } catch (err) {
      console.log("[v0] Error sending form:", err)
      setStatus("error")
    }
  }

  return (
    <section id="contacto" className="py-24 md:py-32 bg-warm-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sage-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sage-green-light/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sage-green font-medium tracking-wider uppercase text-sm mb-4 bg-sage-green/10 px-4 py-2 rounded-full">
            🤝 Únete a Nosotros
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-soft-brown mb-6">
            Sé Parte del Cambio ✨
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tu apoyo puede transformar vidas. Ya sea como voluntario, donador o patrocinador, 
            juntos podemos crear un impacto duradero en las comunidades que más lo necesitan. 💚
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Donation Card */}
            <div className="glass-card rounded-3xl p-8 hover:shadow-xl transition-shadow border border-sage-green/20 hover:border-sage-green/40">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-sage-green/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-7 h-7 text-sage-green" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-soft-brown mb-2">💚 Donar</h3>
                  <p className="text-muted-foreground mb-4">
                    Tu donación ayuda a financiar materiales educativos, comida, juguetes y ropa 
                    para niños en comunidades vulnerables.
                  </p>
                  <a
                    href="https://wa.me/528111897046?text=Hola,%20me%20gustaría%20hacer%20una%20donación%20a%20PGM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sage-green font-medium hover:underline"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Contactar para donar
                  </a>
                </div>
              </div>
            </div>

            {/* Volunteer Card */}
            <div className="glass-card rounded-3xl p-8 hover:shadow-xl transition-shadow border border-sage-green/20 hover:border-sage-green/40">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-sage-green/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-sage-green" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-soft-brown mb-2">🙋 Ser Voluntario</h3>
                  <p className="text-muted-foreground mb-4">
                    Únete a nuestro equipo de voluntarios y comparte tu tiempo, conocimientos y 
                    energía con niños que sueñan en grande.
                  </p>
                  <span className="text-sage-green font-medium">
                    Llena el formulario para registrarte →
                  </span>
                </div>
              </div>
            </div>

            {/* Sponsor Card */}
            <div className="glass-card rounded-3xl p-8 hover:shadow-xl transition-shadow border border-sage-green/20 hover:border-sage-green/40">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-sage-green/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-7 h-7 text-sage-green" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-soft-brown mb-2">🏢 Patrocinador Institucional</h3>
                  <p className="text-muted-foreground mb-4">
                    Buscamos empresas e instituciones dispuestas a apoyar el impacto social. 
                    Tu organización puede ser parte de este movimiento.
                  </p>
                  <a
                    href="mailto:pequesgrandesmentes@gmail.com"
                    className="inline-flex items-center gap-2 text-sage-green font-medium hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    Contactar como patrocinador
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="glass-card rounded-3xl p-8 border border-sage-green/20">
              <h3 className="text-xl font-serif font-bold text-soft-brown mb-6">📞 Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5" />
                  <span>811 189 7046</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5" />
                  <span>pequesgrandesmentes@gmail.com</span>
                </div>
                <a
                  href="https://instagram.com/pequesgrandesmentes.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-sage-green transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@pequesgrandesmentes.nl</span>
                </a>
              </div>

              {/* Social Buttons */}
              <div className="flex gap-3 mt-6">
                <a
                  href="https://wa.me/528111897046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-xl font-medium hover:bg-[#25D366]/90 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href="https://instagram.com/pequesgrandesmentes.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white py-3 px-4 rounded-xl font-medium hover:opacity-90 transition-opacity"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-8 md:p-10 shadow-xl border border-sage-green/20"
            >
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-6 h-6 text-sage-green" />
                <h3 className="text-2xl font-serif font-bold text-soft-brown">
                  Únete a PGM ✨
                </h3>
              </div>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-soft-brown mb-2">
                    👤 Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-sage-green/20 bg-warm-white/50 focus:outline-none focus:ring-2 focus:ring-sage-green/50 focus:border-sage-green/50 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-soft-brown mb-2">
                    📧 Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-sage-green/20 bg-warm-white/50 focus:outline-none focus:ring-2 focus:ring-sage-green/50 focus:border-sage-green/50 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-soft-brown mb-2">
                    📱 Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-sage-green/20 bg-warm-white/50 focus:outline-none focus:ring-2 focus:ring-sage-green/50 focus:border-sage-green/50 transition-all"
                    placeholder="Tu teléfono"
                  />
                </div>

                {/* Type */}
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-soft-brown mb-2">
                    🌟 ¿Cómo te gustaría ayudar? *
                  </label>
                  <select
                    id="type"
                    required
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-sage-green/20 bg-warm-white/50 focus:outline-none focus:ring-2 focus:ring-sage-green/50 focus:border-sage-green/50 transition-all"
                  >
                    <option value="voluntario">🙋 Quiero ser voluntario</option>
                    <option value="donador">💚 Quiero hacer una donación</option>
                    <option value="patrocinador">🏢 Soy una empresa/institución</option>
                    <option value="otro">✨ Otro</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-soft-brown mb-2">
                    💬 Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-sage-green/20 bg-warm-white/50 focus:outline-none focus:ring-2 focus:ring-sage-green/50 focus:border-sage-green/50 transition-all resize-none"
                    placeholder="Cuéntanos más sobre ti o tu interés en PGM..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 bg-sage-green text-white py-4 px-6 rounded-xl font-medium text-lg hover:bg-sage-green/90 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send className="w-5 h-5" />
                  {status === "loading" ? "Enviando..." : "Enviar mensaje 🚀"}
                </button>

                {status === "success" && (
                  <p className="text-center text-sage-green font-medium">
                    ¡Gracias por tu interés! Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto. 💚
                  </p>
                )}
                {status === "error" && (
                  <p className="text-center text-red-600 font-medium">
                    Hubo un problema al enviar tu mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
