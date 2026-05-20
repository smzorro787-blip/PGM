"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#quienes-somos", label: "Quiénes Somos" },
  { href: "#ods", label: "ODS" },
  { href: "#impacto", label: "Impacto" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-warm-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="#inicio" className="flex items-center gap-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Peques-VrSZ2QSfmmzGAZJxYZELI1xO9TZZ2z.jpg"
                alt="Logo PGM"
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full object-cover transition-all duration-500 ${
                  isScrolled ? "" : "ring-2 ring-white/50"
                }`}
              />
              <span className={`hidden sm:block font-serif font-semibold text-sm md:text-base transition-colors duration-500 ${
                isScrolled ? "text-soft-brown" : "text-white drop-shadow-lg"
              }`}>
                Pequeñas Grandes Mentes
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-500 text-sm font-medium tracking-wide ${
                    isScrolled 
                      ? "text-soft-brown/80 hover:text-soft-brown" 
                      : "text-white/90 hover:text-white drop-shadow-md"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contacto"
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500 hover:shadow-lg ${
                  isScrolled
                    ? "bg-sage-green text-white hover:bg-sage-green/90"
                    : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
                }`}
              >
                💚 Donar Ahora
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors duration-500 ${
                isScrolled ? "text-soft-brown" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden pt-20"
          >
            <div className="absolute inset-0 bg-warm-white/98 backdrop-blur-lg">
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-soft-brown text-2xl font-serif hover:text-sage-green transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    href="#contacto"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="bg-sage-green text-white px-8 py-3 rounded-full text-lg font-medium"
                  >
                    💚 Donar Ahora
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
