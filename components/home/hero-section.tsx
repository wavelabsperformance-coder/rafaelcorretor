"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { siteConfig, heroContent } from "@/lib/data"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen md:min-h-0 md:aspect-[16/9] max-h-[100vh] overflow-hidden bg-[#082a21]">

      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">

        {/* Imagem para Celulares (Mobile) */}
        <img
          src="/og-image-mobile.png"
          alt="Rafael, corretor de imóveis em Caruaru"
          className="block md:hidden w-full h-full object-cover object-[center_top]"
        />

        {/* Imagem para Desktop */}
        <img
          src="/images/hero/capa-rafael.png"
          alt="Rafael, corretor de imóveis em Caruaru"
          className="hidden md:block w-full h-full object-cover object-center"
        />

        {/* Escurecido suave no topo para o menu */}
        <div className="hidden md:block absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

        {/* Overlay leve */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>

      {/* Container Desktop — Ancoragem exata nas coordenadas do texto da imagem */}
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
              {heroContent.ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>

        </motion.div>
      </div>

      {/* Container Mobile */}
      <div className="block md:hidden absolute bottom-8 inset-x-0 px-6 z-10">
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
            className="
              h-11 rounded-full border-emerald-950 bg-[#06241b] px-6 text-xs font-semibold text-white shadow-lg w-full max-w-[280px]
            "
          >
            <Link href="/empreendimentos/imoveis-para-alugar">
              {heroContent.ctaSecondary}
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            className="
              bg-accent text-accent-foreground hover:bg-accent/90 px-6 h-11 text-xs font-semibold rounded-full shadow-lg w-full max-w-[280px]
            "
          >
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {heroContent.ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <div className="flex flex-col items-center gap-3 text-white/60">
          <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </motion.div>

    </section>
  )
}