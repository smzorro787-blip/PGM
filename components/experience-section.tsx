"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, Heart, Users, Sparkles } from "lucide-react"
import Image from "next/image"

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 bg-warm-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sage-green/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sage-green-light/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sage-green font-medium tracking-wider uppercase text-sm mb-4 bg-sage-green/10 px-4 py-2 rounded-full">
            🌟 Primera Intervención
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-soft-brown mb-6">
            Nuestra Experiencia ✨
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Nuestra primera intervención marcó el inicio de algo especial. 🌱 Llegamos a 
                <strong className="text-sage-green"> Casa Hogar Alpha y Omega</strong> con nervios, 
                pero también con mucha ilusión de conocer a los niños y compartir nuestros conocimientos.
              </p>
              
              <p>
                Las clases de astronomía 🔭, física y economía fueron recibidas con curiosidad y entusiasmo. 
                Los niños participaron activamente, haciendo preguntas y mostrando genuino interés por 
                aprender cosas nuevas sobre el universo y el mundo que les rodea.
              </p>

              <p>
                Pero lo más memorable fue el momento después de las actividades educativas: 
                <strong className="text-sage-green"> ¡jugamos voleibol todos juntos!</strong> 🏐 En ese momento, 
                las barreras desaparecieron y simplemente éramos una comunidad compartiendo risas y alegría.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Lightbulb, text: "💡 Curiosidad despertada" },
                { icon: Heart, text: "💚 Conexiones reales" },
                { icon: Users, text: "🤝 Comunidad formada" },
                { icon: Sparkles, text: "✨ Sueños inspirados" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-sage-green/10 border border-sage-green/20 hover:border-sage-green/40 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-sage-green" />
                  <span className="text-sm font-medium text-soft-brown">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg ring-2 ring-sage-green/20">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2017.21.15%20%281%29-xbNVZ7W7oEfKSHMuL2JCWKkqWggO8R.jpeg"
                    alt="Actividad educativa con niños"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg ring-2 ring-sage-green/20">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2017.21.16%20%283%29-dw4RWmdQVcZ1YfFISdHBIIlJCbEEau.jpeg"
                    alt="Voluntarios enseñando"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg ring-2 ring-sage-green/20">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2017.21.15%20%285%29-wAzv73tfHSRlyHKWdjzwt2dk9RsyM5.jpeg"
                    alt="Juegos y convivencia"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg ring-2 ring-sage-green/20">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2017.21.14%20%281%29-RqwHa8Ygh2R6ZNNGRTdZ8yTKMElCiX.jpeg"
                    alt="Momentos de alegría"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
