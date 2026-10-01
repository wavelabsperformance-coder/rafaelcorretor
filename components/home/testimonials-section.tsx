"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/data"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Depoimentos fictícios focados no Rafael Cavalcante (Caruaru e experiência bancária)
const testimonialsList = [
  {
    name: "Dr. Marcelo Cavalcanti",
    role: "Comprador de Imóvel – Maurício de Nassau",
    text: "A bagagem bancária do Rafael fez toda a diferença no meu financiamento. Ele desmistificou o processo de crédito junto ao banco e encontrou o apartamento ideal para minha família.",
    rating: 5,
  },
  {
    name: "Juliana & Fernando",
    role: "Locação Residencial – Universitário",
    text: "Alugamos nosso imóvel em Caruaru com total agilidade. O contrato foi super transparente, o processo cadastral foi rápido e fomos atendidos com um profissionalismo impecável.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo Menezes",
    role: "Investidor Imobiliário – Caruaru",
    text: "Atendimento técnico e extremamente preciso sobre a rentabilidade de mercado. O Rafael tem uma visão estratégica diferenciada para quem busca rentabilizar com imóveis.",
    rating: 5,
  },
  {
    name: "Patrícia Albuquerque",
    role: "Proprietária / Venda de Ativo",
    text: "Vendi meu apartamento em tempo recorde. A curadoria da divulgação e a negociação foram conduzidas com extrema ética e transparência. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Henrique Vasconcelos",
    role: "Aprovação de Crédito & Compra",
    text: "Passamos por duas tentativas frustradas antes de conhecer o trabalho do Rafael. Por conta da vivência dele em grandes bancos, conseguimos aprovar nosso crédito sem burocracia.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 380
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative overflow-hidden bg-[#0D3B2E] py-20 text-white lg:py-28">
      
      {/* Cabeçalho */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="inline-flex items-center gap-2">
            <span className="h-px w-6 bg-[#B85D19]" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B85D19]">
              Depoimentos & Experiências
            </span>
            <span className="h-px w-6 bg-[#B85D19]" />
          </div>

          <h2 className="mt-3 font-serif text-3xl font-normal tracking-tight text-white md:text-5xl">
            A opinião de quem <span className="italic text-[#B85D19]">confia no nosso trabalho</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-light leading-relaxed text-white/80 sm:text-lg">
            Acompanhe o relato de clientes que contaram com suporte técnico e consultivo na realização dos seus negócios imobiliários em Caruaru e região.
          </p>
        </motion.div>
      </div>

      {/* Container Principal do Carrossel */}
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-10">
        
        {/* Setas de Navegação Manual */}
        <button
          onClick={() => handleScroll("left")}
          aria-label="Depoimento anterior"
          className="absolute left-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#B85D19]/40 bg-[#B85D19] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#a04e14] active:scale-95 sm:left-4 sm:h-12 sm:w-12"
        >
          <ChevronLeft className="h-6 w-6 stroke-[1.75]" />
        </button>

        <button
          onClick={() => handleScroll("right")}
          aria-label="Próximo depoimento"
          className="absolute right-2 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#B85D19]/40 bg-[#B85D19] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#a04e14] active:scale-95 sm:right-4 sm:h-12 sm:w-12"
        >
          <ChevronRight className="h-6 w-6 stroke-[1.75]" />
        </button>

        {/* Gradientes nas Bordas mantendo o Verde do Fundo */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-16 bg-gradient-to-r from-[#0D3B2E] via-[#0D3B2E]/80 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-16 bg-gradient-to-l from-[#0D3B2E] via-[#0D3B2E]/80 to-transparent sm:w-28" />

        {/* Container de Rolagem */}
        <div
          ref={scrollRef}
          className="overflow-x-auto py-4 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {/* Loop Infinito Contínuo via Framer Motion */}
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {/* Bloco 1 de Depoimentos (Cards em Laranja #B85D19) */}
            <div className="flex shrink-0">
              {testimonialsList.map((item, index) => (
                <div
                  key={`t1-${index}`}
                  className="w-[300px] shrink-0 px-3 sm:w-[360px] lg:w-[380px]"
                >
                  <div className="group relative flex h-full flex-col justify-between border border-[#B85D19] bg-[#B85D19] p-7 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/50">
                    <div>
                      <Quote className="mb-4 h-7 w-7 text-white/70" />
                      <p className="mb-6 text-[15px] font-light leading-relaxed text-white/95">
                        {`"${item.text}"`}
                      </p>
                    </div>

                    <div>
                      <div className="mb-4 flex items-center gap-1">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-white text-white"
                          />
                        ))}
                      </div>
                      <div className="border-t border-white/20 pt-4">
                        <span className="block font-serif text-lg font-normal text-white">
                          {item.name}
                        </span>
                        <span className="text-xs font-light tracking-wide text-white/80">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bloco 2 de Depoimentos (Réplica para o Loop Continuo) */}
            <div className="flex shrink-0">
              {testimonialsList.map((item, index) => (
                <div
                  key={`t2-${index}`}
                  className="w-[300px] shrink-0 px-3 sm:w-[360px] lg:w-[380px]"
                >
                  <div className="group relative flex h-full flex-col justify-between border border-[#B85D19] bg-[#B85D19] p-7 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/50">
                    <div>
                      <Quote className="mb-4 h-7 w-7 text-white/70" />
                      <p className="mb-6 text-[15px] font-light leading-relaxed text-white/95">
                        {`"${item.text}"`}
                      </p>
                    </div>

                    <div>
                      <div className="mb-4 flex items-center gap-1">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-white text-white"
                          />
                        ))}
                      </div>
                      <div className="border-t border-white/20 pt-4">
                        <span className="block font-serif text-lg font-normal text-white">
                          {item.name}
                        </span>
                        <span className="text-xs font-light tracking-wide text-white/80">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>

      {/* Botões de Ação Inferiores */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            asChild
            variant="outline"
            className="border-white/30 bg-transparent text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#0D3B2E]"
          >
            <a
              href={siteConfig.googleReviewsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver mais no Google
            </a>
          </Button>

          <Button
            asChild
            className="bg-[#B85D19] text-white transition-colors duration-300 hover:bg-[#a04e14]"
          >
            <a
              href={siteConfig.googleReviewsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Deixar Avaliação
            </a>
          </Button>
        </motion.div>
      </div>

    </section>
  )
}

export default TestimonialsSection