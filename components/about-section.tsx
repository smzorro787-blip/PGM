"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, BookOpen, Sparkles } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="quienes-somos" className="py-24 md:py-32 bg-warm-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-green/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage-green-light/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-sage-green/20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2017.21.15-X4s1Tvw6DzpqnqCcYzX8z7ynPpmWwT.jpeg"
                alt="Voluntarios con niños en actividades educativas"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-green/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 md:right-8 glass-card rounded-2xl p-6 shadow-xl border border-sage-green/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sage-green/30 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-sage-green" />
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-soft-brown">33+ 💚</p>
                  <p className="text-sm text-muted-foreground">Miembros activos</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="inline-block text-sage-green font-medium tracking-wider uppercase text-sm mb-4 bg-sage-green/10 px-4 py-2 rounded-full"
              >
                🌱 Nuestra Historia
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-soft-brown leading-tight">
                Quiénes Somos ✨
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                <strong className="text-soft-brown">Pequeñas Grandes Mentes (PGM)</strong> es un proyecto social 
                liderado por jóvenes, enfocado en ayudar a niños y adolescentes con dificultades en su 
                <em> proyección de vida</em>, especialmente en comunidades vulnerables como orfanatos, 
                casas hogar y escuelas de bajos recursos. 🏠
              </p>
              
              <p>
                Buscamos influir positivamente en la <strong className="text-sage-green">orientación vocacional</strong>, 
                el <strong className="text-sage-green">crecimiento emocional</strong> y la 
                <strong className="text-sage-green"> motivación educativa</strong> a través de experiencias 
                educativas accesibles y divertidas. 🎓
              </p>

              <p>
                Sabemos que la falta de figuras familiares cercanas durante la infancia puede afectar el 
                desarrollo emocional y educativo. Por eso, PGM busca crear un impacto positivo a través 
                de mentoría, convivencia y apoyo educativo. 💚
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="glass-card rounded-2xl p-5 hover:shadow-lg transition-shadow border border-sage-green/20 hover:border-sage-green/40"
              >
                <BookOpen className="w-8 h-8 text-sage-green mb-3" />
                <h3 className="font-semibold text-soft-brown mb-1">📚 Educación Accesible</h3>
                <p className="text-sm text-muted-foreground">Clases dinámicas y divertidas para todos los niveles</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="glass-card rounded-2xl p-5 hover:shadow-lg transition-shadow border border-sage-green/20 hover:border-sage-green/40"
              >
                <Sparkles className="w-8 h-8 text-sage-green mb-3" />
                <h3 className="font-semibold text-soft-brown mb-1">🌟 Inspiración</h3>
                <p className="text-sm text-muted-foreground">Despertando sueños y aspiraciones vocacionales</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
