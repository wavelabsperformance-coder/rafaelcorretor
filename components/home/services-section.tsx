"use client"

import { motion, Variants } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { siteConfig } from "@/lib/data"

const services = [
  {
    title: "Locação Estratégica & Gestão Patrimonial",
    subtitle: "Rigor Cadastral & Agilidade",
    description:
      "Atendimento transparente para proprietários e inquilinos em Caruaru. Análise cadastral criteriosa, preservação de patrimônio e suporte contratual completo.",
  },
  {
    title: "Intermediação & Curadoria Imobiliária",
    subtitle: "Médio e Alto Padrão",
    description:
      "Seleção criteriosa de apartamentos, casas e imóveis comerciais. Posicionamento estratégico e atendimento presencial consultivo.",
  },
  {
    title: "Estruturação Financeira & Crédito Imobiliário",
    subtitle: "9 Anos de Vivência em Banco (BNB e Bradesco)",
    description:
      "Orientação técnica e assertiva em financiamentos e análise de crédito. A experiência bancária aplicada diretamente para viabilizar sua aquisição.",
  },
  {
    title: "Avaliação de Ativos & Captação Exclusiva",
    subtitle: "Precisão & Valor Real de Mercado",
    description:
      "Análise mercadológica precisa para proprietários que buscam comercializar ou alugar seus imóveis com máxima eficiência e rentabilidade.",
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
}

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Elemento Gráfico de Fundo Sutil (Linhas Arquitetônicas) */}
      <div className="pointer-events-none absolute inset-0 flex justify-center opacity-5">
        <div className="w-full max-w-7xl border-x border-[#0D3B2E]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Cabeçalho de Alto Padrão Visual */}
        <div className="grid grid-cols-1 gap-8 border-b border-[#0D3B2E]/10 pb-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#B85D19]" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B85D19]">
                Atuação & Especialidades
              </span>
            </div>

            <h2 className="mt-4 font-serif text-3xl font-normal leading-[1.15] tracking-tight text-[#0D3B2E] sm:text-4xl lg:text-5xl">
              Serviços imobiliários com visão estratégica e{" "}
              <span className="italic text-[#B85D19]">precisão bancária</span>.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pl-8">
            <p className="border-l-2 border-[#B85D19]/30 pl-4 text-base font-light leading-relaxed text-[#0D3B2E]/80">
              Combino 9 anos de bagagem no mercado financeiro a uma atuação consultiva para garantir agilidade na locação, máxima rentabilidade na venda e segurança total no seu negócio em Caruaru e região.
            </p>
          </div>
        </div>

        {/* Grid de Cards Refinados em Verde Escuro (#0D3B2E) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative flex flex-col justify-between overflow-hidden border border-[#0D3B2E] bg-[#0D3B2E] p-8 text-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-[#B85D19] hover:shadow-2xl"
            >
              {/* Brilho Sutil de Gradiente no Hover */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#B85D19]/10 blur-2xl transition-all duration-500 group-hover:bg-[#B85D19]/25" />

              <div>
                {/* Indicador Superior Visual */}
                <div className="flex items-center justify-between">
                  <div className="h-1 w-8 bg-[#B85D19] transition-all duration-500 group-hover:w-16" />
                  <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">Exclusivo</span>
                </div>

                <p className="mt-8 text-[11px] font-semibold uppercase tracking-widest text-[#B85D19]">
                  {service.subtitle}
                </p>

                <h3 className="mt-2 font-serif text-2xl font-normal leading-snug text-white transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm font-light leading-relaxed text-white/75">
                  {service.description}
                </p>
              </div>

              {/* Botão Inferior com Animação Refinada */}
              <div className="mt-10 flex items-center gap-2 border-t border-white/10 pt-6 text-xs font-semibold uppercase tracking-wider text-[#B85D19] transition-colors duration-300 group-hover:text-white">
                <span>Saber mais</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Rodapé do Diferencial Competitivo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-14 overflow-hidden border border-[#0D3B2E] bg-[#0D3B2E] p-8 text-white shadow-xl sm:p-10"
        >
          {/* Borda Decorativa Interna */}
          <div className="pointer-events-none absolute inset-1 border border-white/5" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#B85D19]" />
                <p className="text-xs font-semibold uppercase tracking-widest text-[#B85D19]">
                  Diferencial Competitivo
                </p>
              </div>
              <p className="font-serif text-xl font-light text-white/95 sm:text-2xl">
                9 anos de experiência em grandes bancos (BNB e Bradesco) e 5 anos no mercado imobiliário.
              </p>
            </div>

            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-3 bg-[#B85D19] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-300 hover:bg-[#a04e14] hover:shadow-xl hover:shadow-[#B85D19]/20"
            >
              <span>Falar com o Corretor</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default ServicesSection
