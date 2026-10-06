"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { siteConfig, heroContent } from "@/lib/data"
import Link from "next/link"

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

export function HeroSection() {
  return (
    <section className="relative w-full md:aspect-[16/9] md:max-h-[100vh] overflow-hidden bg-[#0a0705] md:bg-[#082a21]">

      {/* MOBILE: imagem (sem o excesso escuro da base) + botões logo abaixo */}
      <div className="md:hidden">
        {/* Imagem cortada embaixo: aumente o 26vw para cortar mais, diminua para cortar menos */}
        <div className="relative overflow-hidden">
          <img
            src="/og-image-mobile.png"
            alt="Rafael, corretor de imóveis em Caruaru"
            className="block w-full h-auto"
            style={{ marginBottom: "-28vw" }}
          />
          {/* Suaviza o corte da base com a área dos botões */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0705] to-transparent pointer-events-none" />
        </div>

        <div className="px-6 pb-10 pt-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-3 w-full"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 rounded-full border-emerald-950 bg-[#06241b] px-6 text-xs font-semibold text-white shadow-lg w-full max-w-[260px]"
            >
              <Link href="/empreendimentos/imoveis-para-alugar">
                {heroContent.ctaSecondary}
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 h-11 text-xs font-semibold rounded-full shadow-lg w-full max-w-[260px]"
            >
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="mr-2 h-4 w-4" />
                {heroContent.ctaText}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* DESKTOP: imagem de fundo */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <img
          src="/images/hero/capa-rafael.png"
          alt="Rafael, corretor de imóveis em Caruaru"
          className="w-full h-full object-cover object-center"
        />

        {/* Escurecido suave no topo para o menu */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

        {/* Overlay leve */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      {/* DESKTOP: botões ancorados nas coordenadas do texto da imagem */}
      <div
        className="
          hidden md:flex
          absolute
          left-[53.5%]
          top-[75%]
          -translate-y-1/2
          z-10
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-row items-center justify-start gap-4"
        >
          {/* BOTÃO IMÓVEIS PARA ALUGAR */}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="
              h-10 lg:h-12
              rounded-full
              border-emerald-950
              bg-[#06241b]
              px-5 lg:px-7
              text-xs lg:text-sm font-semibold
              text-white
              shadow-lg
              hover:bg-emerald-900
              hover:text-white
              whitespace-nowrap
            "
          >
            <Link href="/empreendimentos/imoveis-para-alugar">
              {heroContent.ctaSecondary}
            </Link>
          </Button>

          {/* BOTÃO WHATSAPP */}
          <Button
            asChild
            size="lg"
            className="
              bg-accent
              text-accent-foreground
              hover:bg-accent/90
              px-5 lg:px-7
              h-10 lg:h-12
              text-xs lg:text-sm font-semibold
              rounded-full
              shadow-lg
              hover:shadow-xl
              transition-all
              duration-300
              whitespace-nowrap
            "
          >
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="mr-2 h-4 w-4" />
              {heroContent.ctaText}
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Indicador de rolagem (só no desktop) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden md:block absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <div className="flex flex-col items-center gap-3 text-white/60">
          <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}