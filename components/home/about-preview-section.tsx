"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { siteConfig, aboutContent } from "@/lib/data"

// Caminho atualizado conforme sua estrutura de pastas public/images/sobre/Perfil.png
const ABOUT_PHOTO = "/images/sobre/Perfil.png"

function WhatsappIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 2a10 10 0 0 0-8.58 15.15L2 22l4.98-1.3A9.96 9.96 0 0 0 12 22a10 10 0 0 0 10-10A10 10 0 0 0 12 2zM12 20c-1.57 0-3.08-.42-4.41-1.21l-.32-.19-2.96.78.79-2.89-.21-.33A7.96 7.96 0 0 1 4 12a8 8 0 1 1 16 0 8 8 0 0 1-8 8z" />
    </svg>
  )
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: custom * 0.1 },
  }),
}

export function AboutPreviewSection() {
  const yearsInMarket = new Date().getFullYear() - siteConfig.foundedYear

  const stats = [
    { value: `${yearsInMarket}`, label: "Anos no mercado imobiliário" },
    { value: "09", label: "Anos de experiência bancária" },
    { value: "PE", label: "Atuação em Caruaru e região" },
  ]

  return (
    <section className="relative overflow-hidden bg-[#F3ECE0] py-24 sm:py-32">
      {/* Marca D'água Editorial Sutil no Fundo */}
      <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none font-serif text-[18vw] font-normal leading-none text-[#0D3B2E]/[0.03]">
        RAFAEL
      </span>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          
          {/* Coluna da Imagem */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="lg:col-span-5"
          >
            <div className="group relative mx-auto max-w-md lg:max-w-none">
              {/* Moldura de Contorno Discreto */}
              <div className="absolute -inset-3 border border-[#B85D19]/30" />

              {/* Container da Foto com Cores Naturais */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0D3B2E] shadow-2xl">
                <Image
                  src={ABOUT_PHOTO}
                  alt="Rafael Cavalcante, Corretor de Imóveis"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
              </div>

              {/* Tag Integrada com Borda Lateral Verde/Dourada */}
              <div className="mt-4 flex flex-col items-start gap-0.5 border-l-2 border-[#B85D19] pl-3">
                <p className="font-serif text-sm font-medium tracking-wide text-[#0D3B2E]">
                  RAFAEL CAVALCANTE
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[#B85D19]">
                  CRECI 17307-PE · Atendimento Exclusivo
                </p>
              </div>
            </div>
          </motion.div>

          {/* Coluna de Conteúdo Editorial */}
          <div className="lg:col-span-7">
            {/* Subtítulo */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#B85D19]" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B85D19]">
                Sobre o Corretor
              </span>
            </motion.div>

            {/* Título Principal */}
            <motion.h2
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className="mt-4 font-serif text-4xl font-normal leading-[1.08] tracking-tight text-[#0D3B2E] sm:text-5xl lg:text-6xl"
            >
              Olá, sou o{" "}
              <span className="relative inline-block italic font-normal text-[#B85D19]">
                Rafael Cavalcante
              </span>
            </motion.h2>

            {/* Texto Descritivo */}
            <motion.p
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className="mt-8 text-lg leading-relaxed text-[#0D3B2E]/80 sm:text-xl font-light"
            >
              {aboutContent.shortDescription}
            </motion.p>

            {/* Divisor */}
            <div className="mt-10 h-px w-full bg-gradient-to-r from-[#0D3B2E]/20 via-[#0D3B2E]/10 to-transparent" />

            {/* Grade de Métricas */}
            <motion.div
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className="mt-8 grid grid-cols-3 gap-8"
            >
              {stats.map((item) => (
                <div key={item.label} className="group">
                  <p className="font-serif text-4xl font-extralight text-[#0D3B2E] transition-colors duration-300 group-hover:text-[#B85D19] sm:text-5xl lg:text-6xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-widest leading-relaxed text-[#0D3B2E]/60">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Botões de Ação */}
            <motion.div
              custom={5}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
            >
              <Link
                href="/sobre"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden bg-[#0D3B2E] px-8 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#B85D19]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Conheça minha história
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>

              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 items-center justify-center gap-3 border border-[#25D366]/40 bg-[#25D366]/10 px-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#0D3B2E] transition-all duration-500 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white hover:shadow-lg hover:shadow-[#25D366]/20"
              >
                <WhatsappIcon className="h-5 w-5 text-[#25D366] transition-colors duration-500 group-hover:text-white" />
                <span>Falar no WhatsApp</span>
              </a>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  )
}