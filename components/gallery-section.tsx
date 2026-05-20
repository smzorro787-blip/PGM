"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2017.21.15%20%284%29-jE5sJu5WCryr2QeL1g1fhns0u4r0DW.jpeg", alt: "Voluntarios con niños", span: "col-span-2 row-span-2" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2017.21.16-hJA4jktKuKYfgLZlBrjApnYUVWPh9J.jpeg", alt: "Actividad educativa", span: "col-span-1 row-span-1" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2017.21.14-U8XOlXcN3cljkaJ4wcNAJkWP8uX2z6.jpeg", alt: "Donaciones", span: "col-span-1 row-span-1" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2017.21.16%20%281%29-RzkRLp9yb4z9ajRCvfrxZCDYWON2CW.jpeg", alt: "Convivencia", span: "col-span-1 row-span-2" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2017.21.15%20%282%29-dyWECZaK0ki1u7xkScBFehRvODrnjE.jpeg", alt: "Aprendizaje", span: "col-span-1 row-span-1" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2017.21.15%20%283%29-FTyZkXqjHTmAZjofBpO01FutJsD2xm.jpeg", alt: "Juegos", span: "col-span-1 row-span-1" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2017.21.16%20%282%29-hbXJ6pL7KYRYUd9ucipG1L1UpLBtJ9.jpeg", alt: "Equipo PGM", span: "col-span-2 row-span-1" },
]

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="galeria" className="py-24 md:py-32 bg-beige relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-sage-green/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-sage-green-light/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sage-green font-medium tracking-wider uppercase text-sm mb-4 bg-sage-green/10 px-4 py-2 rounded-full">
            📸 Momentos Especiales
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-soft-brown mb-6">
            Galería 💚
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada imagen captura un momento de conexión, aprendizaje y alegría compartida. ✨
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[180px]"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`${image.span} relative rounded-2xl overflow-hidden cursor-pointer group ring-2 ring-sage-green/10 hover:ring-sage-green/40 transition-all`}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-sage-green/0 group-hover:bg-sage-green/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-medium text-sm bg-sage-green/80 backdrop-blur-sm px-4 py-2 rounded-full">
                  Ver imagen 🔍
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-sage-green/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-warm-white hover:text-warm-white/80 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-5xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Imagen ampliada"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
