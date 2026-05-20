import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ODSSection } from "@/components/ods-section"
import { ImpactSection } from "@/components/impact-section"
import { ExperienceSection } from "@/components/experience-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ODSSection />
      <ImpactSection />
      <ExperienceSection />
      <GallerySection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
