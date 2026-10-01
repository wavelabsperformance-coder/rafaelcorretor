"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Bed, Bath, Car, Maximize, MapPin, Play, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Property } from "@/lib/data"

interface FeaturedCarouselProps {
  properties: Property[]
  title: string
  subtitle?: string
  type: "venda" | "aluguel"
  /** Opcional: quando informado, mostra o botão "Ver todos" no cabeçalho */
  viewAllHref?: string
  viewAllLabel?: string
}

// Quantas cópias da lista ficam lado a lado (a do meio é a "principal")
const COPIES = 3

function PropertyCardSlide({
  property,
  uniqueKey,
  type,
}: {
  property: Property
  uniqueKey: string
  type: "venda" | "aluguel"
}) {
  const targetUrl = `/imoveis/${property.id}`
  const isLocacao = type === "aluguel"

  // Separa o valor ("R$ 3.800") do sufixo ("mês") para destacar o número
  const priceParts = (property.price || "Sob Consulta").split("/")
  const priceMain = priceParts[0].trim()
  const priceSuffix = priceParts[1]?.trim()
  const hasValue = /\d/.test(priceMain)

  return (
    <div
      key={uniqueKey}
      className="flex-shrink-0 w-[300px] sm:w-[320px] md:w-[340px] px-3"
    >
      <article className="group bg-white rounded-3xl p-2 border border-[#0d3b2e]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#b85d19]/40 transition-all duration-300 flex flex-col justify-between h-full">
        <div>
          {/* FOTO DE CAPA + BADGES */}
          <Link
            href={targetUrl}
            className="block aspect-[4/3] overflow-hidden relative cursor-pointer bg-muted rounded-2xl"
          >
            <img
              src={property.images?.[0] || "/placeholder.jpg"}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* BADGE VENDA / LOCAÇÃO */}
            <div
              className={`absolute top-3 left-3 text-white px-3.5 py-1 text-xs rounded-full font-semibold shadow-md ${
                isLocacao ? "bg-[#b85d19]" : "bg-[#0d3b2e]"
              }`}
            >
              {isLocacao ? "Locação" : "Venda"}
            </div>

            {/* BADGE DE VÍDEO */}
            {property.video && (
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 text-[11px] rounded-full font-medium flex items-center gap-1">
                <Play className="h-3 w-3 fill-white" />
                Vídeo
              </div>
            )}
          </Link>

          {/* CONTEÚDO */}
          <div className="px-4 pt-4 pb-2">
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-1 font-medium">
              <MapPin className="h-3.5 w-3.5 text-[#b85d19]" />
              {property.location}
            </span>

            <Link href={targetUrl}>
              <h3 className="text-base font-semibold text-foreground group-hover:text-[#b85d19] transition-colors mt-2 line-clamp-1 cursor-pointer font-serif">
                {property.title}
              </h3>
            </Link>

            {/* CARACTERÍSTICAS EM "CHIPS" */}
            <div className="flex flex-wrap items-center gap-2 mt-4 text-xs text-[#0d3b2e]">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#0d3b2e]/5 px-2.5 py-1">
                <Bed className="h-3.5 w-3.5" />
                {property.bedrooms}{" "}
                {property.bedrooms === 1 ? "Quarto" : "Quartos"}
              </span>

              <span className="inline-flex items-center gap-1 rounded-full bg-[#0d3b2e]/5 px-2.5 py-1">
                <Bath className="h-3.5 w-3.5" />
                {property.bathrooms}{" "}
                {property.bathrooms === 1 ? "Banheiro" : "Banheiros"}
              </span>

              <span className="inline-flex items-center gap-1 rounded-full bg-[#0d3b2e]/5 px-2.5 py-1">
                <Car className="h-3.5 w-3.5" />
                {property.parking}{" "}
                {property.parking === 1 ? "Vaga" : "Vagas"}
              </span>

              {property.area && (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#0d3b2e]/5 px-2.5 py-1">
                  <Maximize className="h-3.5 w-3.5" />
                  {property.area}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* PREÇO + BOTÃO (lado a lado) */}
        <div className="px-2 pb-2 pt-2">
          <div className="rounded-2xl bg-[#0d3b2e] px-4 py-3 flex flex-nowrap items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <span className="block text-[10px] uppercase tracking-[0.2em] text-white/60 font-semibold">
                {isLocacao ? "Aluguel" : "Valor"}
              </span>

              <div className="flex items-baseline gap-1 min-w-0">
                <span
                  className={`font-serif font-bold text-white leading-tight truncate ${
                    hasValue ? "text-xl" : "text-base"
                  }`}
                >
                  {priceMain}
                </span>

                {priceSuffix && (
                  <span className="text-xs text-white/70 font-medium whitespace-nowrap">
                    / {priceSuffix}
                  </span>
                )}
              </div>
            </div>

            <Button
              asChild
              size="sm"
              className="rounded-full bg-[#b85d19] hover:bg-white hover:text-[#0d3b2e] text-white text-xs transition-colors shrink-0 px-3.5"
            >
              <Link href={targetUrl}>Ver Detalhes</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}

export function FeaturedCarousel({
  properties,
  title,
  subtitle = "Destaques",
  type,
  viewAllHref,
  viewAllLabel = "Ver todos",
}: FeaturedCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const pos = useRef(0) // posição atual (com casas decimais)
  const pending = useRef(0) // distância ainda a percorrer pelas setas
  const paused = useRef(false) // pausa só quando o mouse/dedo está nos cards
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Garante que uma "cópia" da lista seja sempre maior que a tela (loop sem vazio)
  const repeat = properties.length > 0 ? Math.max(1, Math.ceil(8 / properties.length)) : 1
  const baseList = Array.from({ length: repeat }, () => properties).flat()

  useEffect(() => {
    const el = scrollRef.current
    const track = trackRef.current
    if (!el || !track) return

    const segment = () => track.scrollWidth / COPIES

    // Começa na cópia do meio
    pos.current = segment()
    el.scrollLeft = pos.current

    let raf = 0
    let last = performance.now()

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      const seg = segment()

      if (seg > 0) {
        // Se o usuário arrastou/rolou com o dedo ou mouse, sincroniza
        if (Math.abs(el.scrollLeft - pos.current) > 3) {
          pos.current = el.scrollLeft
        }

        // Rolagem automática (uma cópia inteira em ~45s, como antes)
        if (!paused.current) {
          pos.current += (seg / 45) * dt
        }

        // Movimento suave das setas
        if (Math.abs(pending.current) > 0.5) {
          const step = pending.current * Math.min(1, dt * 8)
          pos.current += step
          pending.current -= step
        } else {
          pending.current = 0
        }

        // Loop infinito: mantém a posição dentro da cópia do meio
        while (pos.current >= 2 * seg) pos.current -= seg
        while (pos.current < seg) pos.current += seg

        el.scrollLeft = pos.current
      }

      raf = requestAnimationFrame(frame)
    }

    raf = requestAnimationFrame(frame)
    return () => {
      cancelAnimationFrame(raf)
      if (resumeTimer.current) clearTimeout(resumeTimer.current)
    }
  }, [])

  if (!properties || properties.length === 0) {
    return null
  }

  // Setas: empurram a posição para frente ou para trás (sempre em loop)
  const handleScroll = (direction: "left" | "right") => {
    pending.current += direction === "left" ? -360 : 360
  }

  const pause = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    paused.current = true
  }

  const resume = (delay = 0) => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => {
      paused.current = false
    }, delay)
  }

  return (
    <section className="py-14 bg-[#faf7f2] overflow-hidden border-b border-border/60">
      {/* CABEÇALHO */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between gap-4">
          <div className="border-l-4 border-[#b85d19] pl-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#b85d19] font-bold block">
              {subtitle}
            </span>

            <h2 className="font-serif text-3xl md:text-4xl text-[#0d3b2e] font-semibold mt-1">
              {title}
            </h2>
          </div>

          {/* BOTÃO "VER TODOS" (opcional) */}
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#0d3b2e]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#0d3b2e] shadow-sm transition-all duration-300 hover:bg-[#0d3b2e] hover:text-white hover:shadow-md shrink-0"
            >
              {viewAllLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>

      {/* CARROSSEL */}
      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* SETA ESQUERDA */}
        <button
          onClick={() => handleScroll("left")}
          aria-label="Anterior"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0d3b2e]/90 hover:bg-[#0d3b2e] text-white border border-white/20 shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6 stroke-[1.75]" />
        </button>

        {/* SETA DIREITA */}
        <button
          onClick={() => handleScroll("right")}
          aria-label="Próximo"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0d3b2e]/90 hover:bg-[#0d3b2e] text-white border border-white/20 shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-6 h-6 stroke-[1.75]" />
        </button>

        {/* DEGRADÊ ESQUERDO */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#faf7f2] to-transparent z-10 pointer-events-none" />

        {/* DEGRADÊ DIREITO */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#faf7f2] to-transparent z-10 pointer-events-none" />

        {/* CONTAINER DE ROLAGEM (a pausa vale só aqui, nos cards) */}
        <div
          ref={scrollRef}
          onMouseEnter={pause}
          onMouseLeave={() => resume(0)}
          onTouchStart={pause}
          onTouchEnd={() => resume(2000)}
          className="overflow-x-auto py-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {/* TRILHA: a lista repetida 3 vezes para o loop infinito */}
          <div ref={trackRef} className="flex w-max">
            {Array.from({ length: COPIES }).map((_, copy) => (
              <div
                key={`copy-${copy}`}
                className="flex"
                aria-hidden={copy !== 1 ? "true" : undefined}
              >
                {baseList.map((property, idx) => (
                  <PropertyCardSlide
                    key={`c${copy}-${property.id}-${idx}`}
                    uniqueKey={`c${copy}-${property.id}-${idx}`}
                    property={property}
                    type={type}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* "VER TODOS" NO CELULAR (abaixo do carrossel) */}
      {viewAllHref && (
        <div className="mt-6 flex justify-center sm:hidden">
          <Link
            href={viewAllHref}
            className="inline-flex items-center gap-2 rounded-full border border-[#0d3b2e]/20 bg-white px-6 py-2.5 text-sm font-semibold text-[#0d3b2e] shadow-sm transition-all duration-300 hover:bg-[#0d3b2e] hover:text-white"
          >
            {viewAllLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </section>
  )
}