"use client"

import { motion } from "framer-motion"
import { Heart, Instagram, Mail, Phone, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#quienes-somos", label: "Quiénes Somos" },
  { href: "#ods", label: "ODS" },
  { href: "#impacto", label: "Impacto" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-sage-green text-warm-white relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-sage-green-light via-white to-sage-green-light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <Link href="#inicio" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Peques-VrSZ2QSfmmzGAZJxYZELI1xO9TZZ2z.jpg"
                  alt="Logo PGM"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif font-bold text-xl">Pequeñas Grandes Mentes</span>
            </Link>
            <p className="text-warm-white/80 leading-relaxed max-w-md">
              Transformamos vidas a través del amor, la educación y la comunidad. 
              Juntos, creamos un futuro lleno de posibilidades para los niños que más lo necesitan. 🌱
            </p>
            <div className="flex items-center gap-1 text-warm-white/80">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-white fill-white mx-1" />
              <span>por jóvenes para jóvenes 💚</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">🔗 Navegación</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm-white/70 hover:text-warm-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-6">📞 Contacto</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+528111897046"
                  className="flex items-center gap-3 text-warm-white/70 hover:text-warm-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>811 189 7046</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:pequesgrandesmentes@gmail.com"
                  className="flex items-center gap-3 text-warm-white/70 hover:text-warm-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>pequesgrandesmentes@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/pequesgrandesmentes.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-warm-white/70 hover:text-warm-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>@pequesgrandesmentes.nl</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/528111897046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-warm-white/70 hover:text-warm-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Emotional Closing */}
        <div className="mt-16 pt-8 border-t border-warm-white/20 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-xl md:text-2xl font-serif italic text-warm-white/90 mb-6"
          >
            &ldquo;Cada pequeña mente tiene el potencial de hacer grandes cosas&rdquo; ✨
          </motion.p>
          <p className="text-warm-white/60 text-sm">
            © {currentYear} Pequeñas Grandes Mentes. Todos los derechos reservados. 🌱
          </p>
        </div>
      </div>
    </footer>
  )
}
