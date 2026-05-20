"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Users, Heart, Handshake, Gift, Star } from "lucide-react"
import Image from "next/image"

const stats = [
  { number: 28, label: "Niños y adolescentes impactados", icon: Users, suffix: "" },
  { number: 33, label: "Miembros en la comunidad PGM", icon: Heart, suffix: "" },
  { number: 2, label: "Colaboraciones realizadas", icon: Handshake, suffix: "" },
]

function AnimatedNumber({ value, isInView }: { value: number; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    
    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)
    
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value, isInView])

  return <span>{count}</span>
}

export function ImpactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="impacto" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2017.21.10-vgYWq1R0SQ2pdSKIqwZl7IJEOq3mUO.jpeg"
          alt="Comunidad y voluntarios"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sage-green/90 via-sage-green/85 to-sage-green/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-white font-semibold tracking-wider uppercase text-sm mb-4 bg-white/25 px-4 py-2 rounded-full backdrop-blur-sm">
            Nuestros Logros
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-lg">
            Impacto Social
          </h2>
          <p className="text-lg text-white font-medium max-w-2xl mx-auto drop-shadow-md">
            Cada número representa una historia de esperanza, aprendizaje y conexión humana.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="bg-white rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-sage-green/15 rounded-2xl flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-sage-green" />
              </div>
              <div className="text-5xl md:text-6xl font-serif font-bold text-soft-brown mb-3">
                <AnimatedNumber value={stat.number} isInView={isInView} />
                {stat.suffix}
              </div>
              <p className="text-muted-foreground font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Impact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Donations Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-sage-green/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <Gift className="w-6 h-6 text-sage-green" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-soft-brown mb-3">
                  Donaciones Realizadas
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hemos entregado donaciones de <strong className="text-soft-brown">comida, juguetes y ropa</strong> a través 
                  de nuestras actividades educativas, apoyando el bienestar integral de los niños.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-sage-green/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 text-sage-green" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-soft-brown mb-3">
                  Casa Hogar Alpha y Omega
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nuestro trabajo con Casa Hogar Alpha y Omega generó un impacto emocional profundo. 
                  Los niños respondieron positivamente, y después de las actividades educativas, 
                  <strong className="text-soft-brown"> incluso jugamos voleibol juntos.</strong>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
