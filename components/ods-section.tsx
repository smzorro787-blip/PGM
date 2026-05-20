"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Rocket, Plane, FlaskConical, Calculator } from "lucide-react"

const odsData = [
  {
    number: "4",
    title: "Educación de Calidad",
    description: "PGM ofrece clases sencillas y divertidas para niños y adolescentes de todas las edades enfocadas en:",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-M5XmCSjC6ukmdE8dy6poXr9vcGlakO.png",
    color: "bg-[#C5192D]",
    subjects: [
      { name: "Astronomía", icon: Rocket },
      { name: "Física", icon: FlaskConical },
      { name: "Economía", icon: Calculator },
      { name: "Aeronáutica", icon: Plane },
    ],
    responsibilities: [
      { name: "Responsabilidad Social", description: "Fomentamos el compromiso con la comunidad" },
      { name: "Responsabilidad Ambiental", description: "Cuidamos nuestro planeta" },
      { name: "Responsabilidad Económica", description: "Educamos sobre finanzas responsables" },
    ],
    extra: "Combinamos la educación con dinámicas artísticas y recreativas que ayudan a los niños a aprender sin limitaciones."
  },
  {
    number: "10",
    title: "Reducción de las Desigualdades",
    description: "El proyecto se enfoca especialmente en comunidades vulnerables y niños con condiciones de vida difíciles, ayudándoles a descubrir nuevas oportunidades y aspiraciones vocacionales.",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6aBJnrhaYU9TW02lZzRyXTXhLaqUeT.png",
    color: "bg-[#DD1367]",
  },
  {
    number: "17",
    title: "Alianzas para Lograr Objetivos",
    description: "PGM logró la colaboración entre estudiantes de preparatoria y universidad para apoyar a casas hogar a través de actividades educativas y donaciones.",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AEQF8gkYrdCgeVXAaOjOWyzyISJbxy.png",
    color: "bg-[#19486A]",
  },
]

export function ODSSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="ods" className="py-24 md:py-32 bg-beige relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sage-green/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sage-green-light/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sage-green font-medium tracking-wider uppercase text-sm mb-4 bg-sage-green/10 px-4 py-2 rounded-full">
            Nuestro Propósito
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-soft-brown mb-6">
            ODS y Propósito Social
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestro trabajo está alineado con los Objetivos de Desarrollo Sostenible de las Naciones Unidas, 
            contribuyendo a un mundo más equitativo y educado.
          </p>
        </motion.div>

        {/* ODS Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {odsData.map((ods, index) => (
            <motion.div
              key={ods.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-card rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-sage-green/10 hover:border-sage-green/30">
                {/* Official SDG Icon */}
                <div className="w-20 h-20 mb-6 group-hover:scale-110 transition-transform duration-300 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={ods.icon} 
                    alt={`ODS ${ods.number} - ${ods.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-soft-brown mb-4">
                  ODS {ods.number} – {ods.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {ods.description}
                </p>

                {/* Subjects (for ODS 4) */}
                {ods.subjects && (
                  <div className="space-y-3 mb-4">
                    <p className="text-sm font-medium text-soft-brown">Materias que impartimos:</p>
                    <div className="flex flex-wrap gap-2">
                      {ods.subjects.map((subject) => (
                        <span
                          key={subject.name}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sage-green/15 text-soft-brown text-sm rounded-full border border-sage-green/20 hover:bg-sage-green/25 transition-colors"
                        >
                          {subject.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Responsibilities (for ODS 4) */}
                {ods.responsibilities && (
                  <div className="space-y-3 mb-4">
                    <p className="text-sm font-medium text-soft-brown">También enseñamos sobre:</p>
                    <div className="space-y-2">
                      {ods.responsibilities.map((resp) => (
                        <div
                          key={resp.name}
                          className="px-3 py-2 bg-soft-brown/10 text-soft-brown text-sm rounded-lg border border-soft-brown/20"
                        >
                          <span className="font-medium">{resp.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Extra info */}
                {ods.extra && (
                  <p className="text-sm text-muted-foreground italic mb-4">{ods.extra}</p>
                )}

                {/* Green accent line */}
                <div className="h-1 w-full bg-gradient-to-r from-sage-green/50 via-sage-green to-sage-green/50 rounded-full mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
