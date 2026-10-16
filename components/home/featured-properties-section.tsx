"use client"

import Link from "next/link"
import { ArrowUpRight, Bath, Bed, Car, MapPin, Maximize, Play } from "lucide-react"
import { rentalProperties, saleProperties, type Property } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

function parsePrice(price: string) {
  const raw = (price || "").trim()
  const isConsulta = raw.length === 0 || /sob consulta/i.test(raw)

  const note = raw.match(/\(([^)]+)\)/)?.[1]?.trim() ?? null
  const semNota = raw.replace(/\s*\([^)]*\)\s*$/, "").trim()
  const [main, suffix] = semNota.split("/").map((part) => part.trim())

  return {
    isConsulta,
    main: isConsulta ? "Sob consulta" : main,
    suffix: !isConsulta && suffix ? suffix : "",
    note,
  }
}

function HomePropertyCard({ property, locacao }: { property: Property; locacao: boolean }) {
  const { main, suffix, note } = parsePrice(property.price)
  const href = `/imoveis/${property.id}`

  return (
    <article className="group flex h-full flex-col justify-between rounded-3xl border border-[#0d3b2e]/10 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0d3b2e]/30 hover:shadow-xl">
      <div>
        <Link href={href} className="relative block aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-muted">
          <img
            src={property.images?.[0] || "/placeholder.jpg"}
            alt={property.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute left-3 top-3 rounded-full bg-[#b85d19] px-3 py-1 text-xs font-medium text-white shadow-sm">
            {locacao ? "Locação" : "Venda"}
          </div>

          {property.video && (
            <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
              <Play className="h-3 w-3 fill-white" />
              Vídeo
            </div>
          )}
        </Link>

        <div className="px-3 pb-2 pt-4 sm:px-4">
          <span className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-[#0d3b2e]" />
            {property.location}
          </span>

          <Link href={href} className="block">
            <h3 className="mt-2 line-clamp-2 font-serif text-base font-semibold text-foreground transition-colors group-hover:text-[#0d3b2e]">
              {property.title}
            </h3>
          </Link>

          <div className="mt-4 flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#0d3b2e]/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
              <Bed className="h-3.5 w-3.5 text-[#0d3b2e]" />
              {property.bedrooms}
            </span>

            <span className="inline-flex items-center gap-1 rounded-full bg-[#0d3b2e]/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
              <Bath className="h-3.5 w-3.5 text-[#0d3b2e]" />
              {property.bathrooms}
            </span>

            {property.parking > 0 && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#0d3b2e]/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                <Car className="h-3.5 w-3.5 text-[#0d3b2e]" />
                {property.parking}
              </span>
            )}

            {property.area && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#0d3b2e]/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                <Maximize className="h-3.5 w-3.5 text-[#0d3b2e]" />
                {property.area}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="px-1 pb-2 pt-2 sm:px-2">
        <div className="flex items-center justify-between gap-2 rounded-2xl bg-[#b85d19] py-2 pl-4 pr-2">
          <span className="flex min-w-0 flex-col">
            <span className="flex items-baseline gap-1 whitespace-nowrap">
              <span className="font-serif text-sm font-bold leading-none text-white">{main}</span>
              {suffix && <span className="text-[11px] font-medium leading-none text-white/80">{suffix}</span>}
            </span>
            {note && <span className="mt-1 truncate text-[10px] leading-none text-white/70">{note}</span>}
          </span>

          <Button
            asChild
            size="sm"
            className="h-9 shrink-0 rounded-full bg-[#0d3b2e] px-3 text-[13px] font-semibold text-white transition-all duration-200 hover:bg-white hover:text-[#0d3b2e]"
          >
            <Link href={href}>Ver Detalhes</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

function SectionBlock({
  eyebrow,
  title,
  subtitle,
  viewAllHref,
  viewAllLabel,
  properties,
  locacao,
}: {
  eyebrow: string
  title: string
  subtitle: string
  viewAllHref: string
  viewAllLabel: string
  properties: Property[]
  locacao: boolean
}) {
  const destaques = properties.slice(0, 4)

  if (destaques.length === 0) return null

  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col justify-between gap-6 border-b border-[#0d3b2e]/10 pb-8 md:flex-row md:items-end"
        >
          <div className="border-l-2 border-[#b85d19] pl-5">
            <div className="mb-2 flex items-center gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#b85d19]">{eyebrow}</span>
              <span className="h-[1px] w-8 bg-[#b85d19]/40" />
            </div>

            <h2 className="font-serif text-3xl font-normal tracking-tight text-[#0d3b2e] md:text-4xl lg:text-5xl">
              {title}
            </h2>

            <p className="mt-3 max-w-xl text-base font-light leading-relaxed text-[#0d3b2e]/70">{subtitle}</p>
          </div>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="group rounded-xl border border-[#0d3b2e]/30 bg-white px-6 py-6 text-[#0d3b2e] shadow-sm transition-all duration-300 hover:bg-[#0d3b2e] hover:text-white hover:shadow-md"
          >
            <Link href={viewAllHref} className="flex items-center gap-2 font-medium">
              {viewAllLabel}
              <ArrowUpRight className="h-4 w-4 text-[#b85d19] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {destaques.map((property) => (
            <HomePropertyCard key={property.id} property={property} locacao={locacao} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function FeaturedPropertiesSection() {
  return (
    <div className="relative space-y-20 overflow-hidden bg-[#faf7f2] py-20 lg:py-28">
      <SectionBlock
        eyebrow="Aluguel & Locação"
        title="Imóveis para Alugar"
        subtitle="Endereços selecionados para quem busca viver com conforto, elegância e segurança."
        viewAllHref="/empreendimentos/imoveis-para-alugar"
        viewAllLabel="Ver todos de aluguel"
        properties={rentalProperties}
        locacao
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#0d3b2e]/15 to-transparent" />
      </div>

      <SectionBlock
        eyebrow="Vendas & Aquisições"
        title="Imóveis à Venda"
        subtitle="Oportunidades únicas de investimento patrimonial e projetos de alto padrão."
        viewAllHref="/empreendimentos/imoveis-para-venda"
        viewAllLabel="Ver todos de venda"
        properties={saleProperties}
        locacao={false}
      />
    </div>
  )
}

export default FeaturedPropertiesSection
