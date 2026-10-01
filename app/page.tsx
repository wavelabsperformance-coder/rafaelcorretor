import { HeroSection } from "@/components/home/hero-section"
import { FeaturedCarousel } from "@/components/featured-carousel"
import { DifferentialsSection } from "@/components/home/differentials-section"
import { AboutPreviewSection } from "@/components/home/about-preview-section"
import { ServicesSection } from "@/components/home/services-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"
import { MapSection } from "@/components/home/map-section"
import { rentalProperties } from "@/lib/data"

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <FeaturedCarousel
        properties={rentalProperties}
        title="Imóveis para Alugar"
        subtitle="Destaques"
        type="aluguel"
        viewAllHref="/empreendimentos/imoveis-para-alugar"
      />

      <DifferentialsSection />
      <AboutPreviewSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <MapSection />
    </>
  )
}