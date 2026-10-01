"use client"

import { motion } from "framer-motion"
import { ArrowRight, User, Building2, BarChart3, Handshake } from "lucide-react"
import { differentials, siteConfig } from "@/lib/data"

const iconMap = {
  user: User,
  building: Building2,
  chart: BarChart3,
  shield: Handshake,
}

// Cor de cada bloco: alterna laranja e verde.
// No celular alterna um a um; no desktop forma um xadrez.
const blockColors = [
  "bg-[#b85d19]",
  "bg-[#1b5a46]",
  "bg-[#b85d19] sm:bg-[#1b5a46]",
  "bg-[#1b5a46] sm:bg-[#b85d19]",
]

export function DifferentialsSection() {
  return (
    <section className="bg-[#faf7f2] px-4 py-14 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0d3b2e] px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Título + botão */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#e9a66f]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#e9a66f]">
                Meu jeito de trabalhar
              </span>
            </div>

            <h2 className="font-serif text-3xl font-normal leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
              Do primeiro contato até a chave na mão
            </h2>

            <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
              Aluguel ou venda, você fala direto comigo e sabe em que pé está
              cada etapa do negócio.
            </p>

            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#b85d19] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#0d3b2e] sm:w-auto"
            >
              Falar com o Rafael
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Diferenciais em blocos coloridos */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {differentials.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] || Handshake
              const color = blockColors[index % blockColors.length]

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className={`flex gap-4 rounded-2xl border border-white/10 p-5 shadow-lg transition-shadow duration-300 hover:shadow-2xl sm:block sm:p-7 ${color}`}
                >
                  <Icon
                    className="mt-0.5 h-6 w-6 shrink-0 text-white sm:mt-0 sm:h-7 sm:w-7"
                    strokeWidth={1.5}
                  />

                  <div>
                    <h3 className="font-serif text-lg font-semibold text-white sm:mt-5 sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-relaxed text-white/85 sm:mt-2 sm:text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}