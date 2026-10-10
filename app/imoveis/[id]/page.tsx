"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Bed,
  Bath,
  Car,
  Maximize,
  MapPin,
  MessageCircle,
  Phone,
  Play,
  Film,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Lightbox } from "@/components/lightbox"
import { siteConfig } from "@/lib/data"
import { todosImoveis } from "@/lib/imoveis-data"

export default function ImovelDetalhesPage() {
  const params = useParams()
  const rawId = params?.id
  const id = Array.isArray(rawId) ? rawId[0] : (rawId as string)

  const imovel = todosImoveis.find((item) => item.id === id)

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Tratamento caso o imóvel não exista ou o ID esteja incorreto
  if (!imovel) {
    return (
      <main className="min-h-screen bg-[#faf7f2] flex items-center justify-center pt-24 px-6">
        <div className="text-center max-w-md p-8 bg-white rounded-3xl border border-border shadow-lg">
          <h2 className="text-2xl font-serif text-[#0d3b2e] font-semibold mb-3">
            Imóvel não encontrado
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            O imóvel que você procura não está disponível ou o link está incorreto.
          </p>
          <Button asChild className="bg-[#0d3b2e] hover:bg-[#092920] text-white">
            <Link href="/empreendimentos">Ver todos os empreendimentos</Link>
          </Button>
        </div>
      </main>
    )
  }

  const mediaItems = [
    ...(imovel.images.length > 0 ? imovel.images : [imovel.coverImage]).map((src) => ({
      type: "image" as const,
      src,
      alt: imovel.title,
    })),
    ...(imovel.videos?.map((src) => ({ type: "video" as const, src })) || []),
  ]

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const remainingPhotos = imovel.images.length - 5

  return (
    <main className="min-h-screen bg-white">
      {/* Top Bar com Navegação */}
      <section className="relative overflow-hidden pt-28 pb-8 bg-[#0d3b2e] text-white">
        <img
          src="/predio.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b2e]/95 via-[#0d3b2e]/85 to-[#0d3b2e]/70" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href={imovel.backUrl || "/empreendimentos"}
            className="inline-flex items-center text-sm text-white/70 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {imovel.backLabel || "Voltar para Empreendimentos"}
          </Link>
          <div className="flex items-center gap-2">
            <span className="bg-[#b85d19] text-white text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wider">
              {imovel.type === "venda" ? "Venda" : imovel.type === "aluguel" ? "Locação" : "Comercial"}
            </span>
            {imovel.alugado && (
              <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wider">
                Alugado
              </span>
            )}
            <span className="text-sm text-white/70 flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-[#b85d19]" /> {imovel.location}
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-light text-white mt-3">
            {imovel.title}
          </h1>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Galeria de Fotos */}
          <div className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div
              className="aspect-[4/3] lg:aspect-auto lg:row-span-2 overflow-hidden cursor-pointer group rounded-2xl bg-muted relative"
              onClick={() => openLightbox(0)}
            >
              <img
                src={imovel.coverImage || imovel.images[0]}
                alt={imovel.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {imovel.videos && imovel.videos.length > 0 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    openLightbox(imovel.images.length)
                  }}
                  className="absolute bottom-4 left-4 bg-black/70 hover:bg-black/85 backdrop-blur-md text-white text-xs px-3.5 py-2 rounded-full flex items-center gap-2 transition-all shadow-lg hover:scale-105"
                >
                  <Play className="h-3.5 w-3.5 fill-white" /> Ver vídeo completo
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {imovel.images.slice(1, 5).map((image, index) => {
                const isLast = index === 3
                return (
                  <div
                    key={index}
                    className="aspect-[4/3] overflow-hidden cursor-pointer group rounded-xl bg-muted relative"
                    onClick={() => openLightbox(index + 1)}
                  >
                    <img
                      src={image}
                      alt={`${imovel.title} - ${index + 2}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {isLast && remainingPhotos > 0 && (
                      <div className="absolute inset-0 bg-black/60 hover:bg-black/50 transition-colors flex flex-col items-center justify-center text-white">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                          <span className="text-2xl font-light leading-none">+</span>
                        </div>
                        <span className="text-xs font-medium tracking-wide">
                          {remainingPhotos} fotos
                        </span>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Detalhes Técnicos */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border">
                {imovel.bedrooms !== undefined && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Bed className="h-5 w-5 text-[#0d3b2e]" />
                    <span className="font-medium text-foreground">{imovel.bedrooms}</span> {imovel.bedrooms === 1 ? "Quarto" : "Quartos"}
                  </div>
                )}
                {imovel.bathrooms > 0 && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Bath className="h-5 w-5 text-[#0d3b2e]" />
                    <span className="font-medium text-foreground">{imovel.bathrooms}</span> {imovel.bathrooms === 1 ? "Banheiro" : "Banheiros"}
                  </div>
                )}
                {imovel.parking > 0 && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Car className="h-5 w-5 text-[#0d3b2e]" />
                    <span className="font-medium text-foreground">{imovel.parking}</span> {imovel.parking === 1 ? "Vaga" : "Vagas"}
                  </div>
                )}
                {imovel.area && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Maximize className="h-5 w-5 text-[#0d3b2e]" />
                    <span className="font-medium text-foreground">{imovel.area}</span>
                  </div>
                )}
              </div>

              {/* Player de Vídeo */}
              {imovel.videos && imovel.videos.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Film className="h-5 w-5 text-[#b85d19]" />
                    <h3 className="text-xl font-semibold text-[#0d3b2e] font-serif">Vídeo do Imóvel</h3>
                  </div>
                  <div className="rounded-2xl overflow-hidden bg-black aspect-video border border-border shadow-md">
                    <video
                      src={imovel.videos[0]}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-contain"
                    >
                      Seu navegador não suporta a reprodução deste vídeo.
                    </video>
                  </div>
                </div>
              )}

              {/* Descrição */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#0d3b2e] font-serif">Sobre o Imóvel</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                  {imovel.description}
                </p>
              </div>

              {/* Comodidades */}
              {imovel.amenities && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[#0d3b2e] font-serif">Diferenciais e Comodidades</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {imovel.amenities.map((item, idx) => (
                      <span key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-[#b85d19]" /> {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Fixa de Contato */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-[#faf7f2] p-6 rounded-2xl border border-border shadow-sm">
                <span className="text-xs uppercase text-[#b85d19] font-semibold tracking-wider">
                  Valor
                </span>
                <p className="font-serif text-2xl md:text-3xl text-[#0d3b2e] font-bold my-2">
                  {imovel.price}
                </p>
                {imovel.alugado && (
                  <p className="text-sm font-medium text-red-600">
                    {imovel.type === "venda"
                      ? "Imóvel alugado · disponível para venda"
                      : "Imóvel alugado no momento"}
                  </p>
                )}

                <div className="space-y-3 mt-6">
                  <Button asChild className="w-full bg-[#0d3b2e] hover:bg-[#092920] text-white" size="lg">
                    <a
                      href={`${siteConfig.whatsappLink}?text=Olá! Tenho interesse no imóvel: ${imovel.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5 text-[#b85d19]" /> Falar pelo WhatsApp
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#0d3b2e] text-[#0d3b2e] hover:bg-[#0d3b2e] hover:text-white"
                    size="lg"
                  >
                    <a href={`tel:${siteConfig.phone}`}>
                      <Phone className="mr-2 h-5 w-5 text-[#b85d19]" /> Ligar Agora
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        items={mediaItems}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </main>
  )
}