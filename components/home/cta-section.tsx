"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/data"
import { Phone } from "lucide-react"

// Logo do WhatsApp (SVG dentro do próprio arquivo)
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.616-.919-2.213-.242-.58-.488-.501-.67-.51-.172-.01-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/predio.png"
          alt="Prédios de médio e alto padrão em Caruaru"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/35 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-white/50 font-medium">
            Pronto para começar?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mt-4 leading-tight text-balance">
            Encontre o Imóvel dos Seus Sonhos
          </h2>
          <p className="text-base text-white/65 mt-6 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe de especialistas está pronta para ajudá-lo a encontrar a propriedade perfeita que atenda a todas as suas expectativas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 h-14 rounded-lg shadow-lg"
            >
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                Falar pelo WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-white/25 bg-[#0d3b2e] text-white hover:bg-[#092920] hover:text-white px-8 h-14 rounded-lg shadow-lg"
            >
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                {siteConfig.phone}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}