"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { siteConfig, heroContent } from "@/lib/data"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-10">
      {/* Background Images */}
      <div className="absolute inset-0 bg-[#082a21]">
        {/* Imagem para Celulares (Mobile) */}
        <img
          src="/og-image-mobile.png"
          alt="Rafael, corretor de imóveis em Caruaru"
          className="block md:hidden w-full h-full object-cover object-[center_40%]"
        />

        {/* Imagem para Desktop: ocupa o hero inteiro, por baixo do menu */}
        <img
          src="/images/hero/capa-rafael.png"
          alt="Rafael, corretor de imóveis em Caruaru"
          className="hidden md:block w-full h-full object-cover object-[70%_top]"
        />

        {/* Escurecido suave no topo, só para o menu ficar legível */}
        <div className="hidden md:block absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 to-transparent" />

        {/* Overlay leve para garantir contraste */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content — botões na base: centralizados no celular, à esquerda no desktop */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8 mb-4 md:mb-36">
        <div className="flex justify-center md:justify-start md:pl-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full sm:w-auto"
          >
            {/* BOTÃO IMÓVEIS PARA ALUGAR */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 md:h-14 rounded-full border-emerald-950 bg-emerald-950 px-6 md:px-8 text-sm md:text-base text-white shadow-lg hover:bg-emerald-900 hover:text-white w-full max-w-[260px] sm:w-auto sm:max-w-none"
            >
              <Link href="/empreendimentos/imoveis-para-alugar">
                {heroContent.ctaSecondary}
              </Link>
            </Button>

            {/* BOTÃO WHATSAPP */}
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 md:px-8 h-11 md:h-14 text-sm md:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-[260px] sm:w-auto sm:max-w-none"
            >
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {heroContent.ctaText}
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3 text-white/60">
          <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}