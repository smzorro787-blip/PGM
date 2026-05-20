"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "¿Cómo puedo ayudar? 🤔",
    answer: "Hay muchas formas de apoyar a PGM: puedes ser voluntario participando en nuestras actividades educativas 📚, hacer donaciones de dinero, comida, juguetes o ropa 🎁, o convertirte en patrocinador institucional si representas a una empresa u organización 🏢.",
  },
  {
    question: "¿Cómo donar? 💚",
    answer: "Puedes contactarnos directamente por WhatsApp al 811 189 7046 📱 o por correo a pequesgrandesmentes@gmail.com para coordinar tu donación. Aceptamos donaciones monetarias, así como comida, juguetes, ropa y materiales educativos.",
  },
  {
    question: "¿Cómo ser voluntario? 🙋",
    answer: "¡Es muy fácil! Solo tienes que llenar el formulario de contacto en nuestra página, seleccionar la opción de voluntario, y nos pondremos en contacto contigo para explicarte cómo puedes participar en nuestras próximas actividades. ✨",
  },
  {
    question: "¿Qué apoyos reciben los niños? 👦",
    answer: "Los niños reciben clases educativas gratuitas sobre temas como astronomía 🔭, física, economía y ciencias, además de dinámicas artísticas y recreativas 🎨. También reciben donaciones de comida, juguetes y ropa, y lo más importante: conexión humana y mentoría. 💚",
  },
  {
    question: "¿Cómo puedo contactar al proyecto? 📞",
    answer: "Puedes contactarnos por WhatsApp al 811 189 7046, por correo electrónico a pequesgrandesmentes@gmail.com 📧, o a través de nuestra cuenta de Instagram @pequesgrandesmentes.nl. ¡Estaremos encantados de atenderte! 🌟",
  },
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 md:py-32 bg-beige relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-sage-green/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-sage-green-light/30 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sage-green font-medium tracking-wider uppercase text-sm mb-4 bg-sage-green/10 px-4 py-2 rounded-full">
            ❓ Resolvemos tus Dudas
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-soft-brown mb-6">
            Preguntas Frecuentes 💬
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aquí encontrarás respuestas a las preguntas más comunes sobre cómo puedes ser parte de PGM. 🌱
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden border border-sage-green/10 hover:border-sage-green/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-sage-green/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className="w-5 h-5 text-sage-green flex-shrink-0" />
                  <span className="font-semibold text-soft-brown text-lg">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-sage-green transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-0 pl-[60px]">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
