import { HeroSection } from "@/components/home/hero-section"
import { FeaturedPropertiesSection } from "@/components/home/featured-properties-section"
import { DifferentialsSection } from "@/components/home/differentials-section"
import { AboutPreviewSection } from "@/components/home/about-preview-section"
import { ServicesSection } from "@/components/home/services-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"
import { MapSection } from "@/components/home/map-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <FeaturedPropertiesSection />

      <DifferentialsSection />
      <AboutPreviewSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <MapSection />
    </>
  )
}