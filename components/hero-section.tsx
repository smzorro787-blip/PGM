"use client"

import { motion } from "framer-motion"
import { Heart, Users } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Group photo with rotation fix */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FOTO%20GRUPAL-CLcXI9G1e6WMuBO79bAcFCjmPwLiCe.jpeg"
          alt="Niños y voluntarios compartiendo momentos educativos"
          fill
          className="object-cover"
          style={{ objectPosition: "center center" }}
          priority
          sizes="100vw"
        />
        {/* Reduced overlays for more cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-soft-brown/20 via-transparent to-sage-green/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          {/* Logo - Editable */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl overflow-hidden ring-4 ring-sage-green/30">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Peques-VrSZ2QSfmmzGAZJxYZELI1xO9TZZ2z.jpg"
                alt="Logo PGM"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Title - Clean without animated glow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl leading-tight">
              <span className="block">Pequeñas</span>
              <span className="block text-sage-green-light drop-shadow-lg">Grandes</span>
              <span className="block">Mentes</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-lg"
          >
            ✨ Transformando vidas a través del amor, la educación y la comunidad 🌱
          </motion.p>

          {/* Emotional Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-base md:text-lg text-white/80 max-w-xl mx-auto leading-relaxed drop-shadow-md"
          >
            Cada niño merece soñar en grande. Juntos, creamos experiencias que inspiran, 
            educan y abren puertas hacia un futuro lleno de posibilidades. 🚀
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contacto"
              className="group flex items-center gap-2 bg-sage-green text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-sage-green/90 transition-all duration-300 border border-sage-green-light/30"
            >
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Donar ahora
            </a>
            <a
              href="#contacto"
              className="group flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-medium border border-white/30 hover:bg-white/25 transition-all duration-300"
            >
              <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Ser voluntario
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/80 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
