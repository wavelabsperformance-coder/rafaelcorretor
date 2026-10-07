"use client"

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import {
  ArrowLeft,
  Bed,
  Bath,
  Car,
  Maximize,
  MapPin,
  MessageCircle,
  Phone,
  ChevronLeft,
  ChevronRight,
  Play,
  Film,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Lightbox } from "@/components/lightbox"
import { siteConfig } from "@/lib/data"

// =========================================================================
// APARTAMENTOS PARA VENDA (EDITE SEUS IMÓVEIS AQUI)
// =========================================================================
const apartamentosVenda = [
  // 1. VOG VILLE NORTE (20 FOTOS + 2 VÍDEOS)
  {
    id: "ap-vog-ville-norte",
    title: "Apartamento Pronto para Morar no Condomínio Vog Ville Norte",
    price: "R$ 290.000",
    location: "Caruaru - PE",
    coverImage: "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/3.jpeg",
    bedrooms: 2,
    bathrooms: 2, // 1 suíte + 1 social
    parking: 1,
    area: "52m²",
    description: `Excelente oportunidade de compra no condomínio Vog Ville Norte. Apartamento completo, pronto para morar, com móveis planejados, conforto e praticidade.

Configuração do imóvel:
• 1º andar com varanda integrada
• 2 quartos (sendo 1 suíte)
• Ambos os quartos equipados com ar-condicionado
• Banheiro social completo
• Cozinha planejada com móveis sob medida, forno embutido, cooktop e coifa
• 1 vaga de garagem descoberta

Estrutura e lazer do condomínio:
• Piscina adulto e infantil
• Academia equipada
• Mercadinho interno de conveniência
• Lavanderia compartilhada OMO
• Bicicletário e pista de cooper
• Salão de festas
• Portaria com segurança 24 horas`,
    videos: [
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/1.mp4",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/2.mp4",
    ],
    images: [
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/3.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/4.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/5.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/6.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/7.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/8.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/9.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/10.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/11.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/12.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/13.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/14.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/15.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/16.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/17.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/18.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/19.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/20.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/21.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/22.jpeg",
    ],
    amenities: [
      "1 Suíte",
      "Ar-condicionado nos Quartos",
      "Cozinha Planejada com Fogão e Forno",
      "Piscina Adulto e Infantil",
      "Academia Equipada",
      "Lavanderia OMO",
      "Mercadinho Interno",
      "Pista de Cooper e Bicicletário",
      "Portaria 24h",
      "1 Vaga de Garagem",
    ],
  },

  // 2. EDIFÍCIO SANTA MARIA - BOA VIAGEM (29 FOTOS - SEM VÍDEO)
  {
    id: "ap-edificio-santa-maria-boa-viagem",
    title: "Apartamento de Alto Padrão no Edifício Santa Maria",
    price: "R$ 2.200.000",
    location: "Boa Viagem, Recife - PE",
    coverImage: "/imoveis/apartamentos-para-venda/edificio-santa-maria/1.jpeg",
    bedrooms: 4,
    bathrooms: 6, // 4 suítes + 1 lavabo + 1 dependência/serviço
    parking: 3,
    area: "180m²",
    description: `Exclusivo apartamento de alto padrão no Edifício Santa Maria, situado em localização privilegiada no bairro de Boa Viagem, entre o Colégio Santa Maria e o Colégio Boa Viagem, a apenas 500 metros da praia.

Imóvel amplo, sofisticado e com vista definitiva para o mar. Documentação 100% regular (quitado, escriturado, registrado e sem débitos, livre para venda imediata).

Configuração do imóvel:
• Área privativa: 180 m²
• 4 suítes amplas e confortáveis
• Sala integrada para 4 ambientes
• Vista aberta e definitiva para o mar
• Lavabo social
• Despensa funcional
• Dependência completa de serviço (quarto e WC)
• 3 excelentes vagas de garagem

Estrutura do condomínio:
• 3 elevadores modernos
• 2 estações de recarga para carros elétricos
• Piscina adulto e infantil
• Espaço gourmet com churrasqueira
• Sauna e salão de festas

Informações financeiras:
• Valor de venda: R$ 2.200.000,00
• Taxa condominial: R$ 1.680,00 (água e gás inclusos)
• IPTU mensal: R$ 691,00`,
    videos: [],
    images: [
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/1.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/2.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/3.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/4.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/5.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/6.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/7.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/8.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/9.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/10.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/11.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/12.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/13.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/14.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/15.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/16.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/17.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/18.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/19.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/20.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/21.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/22.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/23.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/24.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/25.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/26.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/27.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/28.jpeg",
      "/imoveis/apartamentos-para-venda/edificio-santa-maria/29.jpeg",
    ],
    amenities: [
      "4 Suítes Amplas",
      "Vista Definitiva para o Mar",
      "3 Vagas de Garagem",
      "2 Estações para Carros Elétricos",
      "Piscina e Sauna",
      "Espaço Gourmet e Salão de Festas",
      "3 Elevadores",
      "Apenas 500m da Praia de Boa Viagem",
      "Documentação 100% Regular",
    ],
  },

  // 3. CONDOMÍNIO TERRAÇO HOLANDA (9 FOTOS - SEM VÍDEO)
  {
    id: "ap-terraco-holanda-mauricio-de-nassau",
    title: "Apartamento no Condomínio Terraço Holanda",
    price: "R$ 580.000",
    location: "Maurício de Nassau, Caruaru - PE",
    coverImage: "/imoveis/apartamentos-para-venda/terraco-holanda/1.jpeg",
    bedrooms: 3,
    bathrooms: 3, // 1 suíte + 1 social + 1 serviço
    parking: 2,
    area: "89m²",
    description: `APARTAMENTO À VENDA | TERRAÇO HOLANDA – CARUARU/PE

Localizado na área nobre do bairro Maurício de Nassau, em Caruaru, este apartamento oferece espaço e conforto em uma excelente localização.

CARACTERÍSTICAS DO IMÓVEL:
- Posição nascente, 3º andar, com sensação de altura equivalente ao 5º andar
- Área: 89 m²
- 03 quartos, sendo 01 suíte
- Banheiro social
- Banheiro de serviço
- Cozinha ampla
- 02 vagas de garagem

ESTRUTURA DO CONDOMÍNIO:
- Portaria 24 horas
- Piscina

VALOR DE VENDA: R$ 580.000,00`,
    videos: [],
    images: [
      "/imoveis/apartamentos-para-venda/terraco-holanda/1.jpeg",
      "/imoveis/apartamentos-para-venda/terraco-holanda/2.jpeg",
      "/imoveis/apartamentos-para-venda/terraco-holanda/3.jpeg",
      "/imoveis/apartamentos-para-venda/terraco-holanda/4.jpeg",
      "/imoveis/apartamentos-para-venda/terraco-holanda/5.jpeg",
      "/imoveis/apartamentos-para-venda/terraco-holanda/6.jpeg",
      "/imoveis/apartamentos-para-venda/terraco-holanda/7.jpeg",
      "/imoveis/apartamentos-para-venda/terraco-holanda/8.jpeg",
      "/imoveis/apartamentos-para-venda/terraco-holanda/9.jpeg",
    ],
    amenities: [
      "Posição Nascente",
      "3º Andar com Altura de 5º Andar",
      "89m² de Área",
      "01 Suíte",
      "Cozinha Ampla",
      "Banheiro Social",
      "Banheiro de Serviço",
      "02 Vagas de Garagem",
      "Portaria 24 Horas",
      "Piscina",
    ],
  },
]

// =========================================================================
// COMPONENTES AUXILIARES
// =========================================================================

function PropertyCard({
  property,
  onSelect,
}: {
  property: (typeof apartamentosVenda)[0]
  onSelect: () => void
}) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)
  const totalImages = property.images.length
  const hasVideos = property.videos && property.videos.length > 0

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImgIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImgIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1))
  }

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-border/80 hover:border-[#b85d19]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="aspect-[4/3] overflow-hidden relative cursor-pointer bg-muted" onClick={onSelect}>
          <img
            src={property.images[currentImgIndex] || property.coverImage || "/placeholder.jpg"}
            alt={`${property.title} - foto ${currentImgIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute top-3 left-3 bg-[#0d3b2e] text-white px-3 py-1 text-xs rounded-full font-medium shadow-sm">
            Venda
          </div>

          {hasVideos && (
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 text-[11px] rounded-full font-medium flex items-center gap-1">
              <Play className="h-3 w-3 fill-white" /> {property.videos.length > 1 ? `${property.videos.length} Vídeos` : "Vídeo"}
            </div>
          )}

          {totalImages > 1 && (
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-0.5 rounded-md">
              {currentImgIndex + 1} / {totalImages}
            </div>
          )}

          {totalImages > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Imagem anterior"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md hover:scale-105"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Próxima imagem"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md hover:scale-105"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        <div className="p-5">
          <span className="text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-1 font-medium">
            <MapPin className="h-3.5 w-3.5 text-[#b85d19]" /> {property.location}
          </span>
          <h3
            className="text-base font-semibold text-foreground group-hover:text-[#b85d19] transition-colors mt-2 line-clamp-1 cursor-pointer font-serif"
            onClick={onSelect}
          >
            {property.title}
          </h3>

          <div className="flex items-center gap-3 mt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Bed className="h-3.5 w-3.5 text-[#0d3b2e]" /> {property.bedrooms} {property.bedrooms === 1 ? "Quarto" : "Quartos"}
            </span>
            <span className="flex items-center gap-1">
              <Bath className="h-3.5 w-3.5 text-[#0d3b2e]" /> {property.bathrooms} {property.bathrooms === 1 ? "Banheiro" : "Banheiros"}
            </span>
            <span className="flex items-center gap-1">
              <Car className="h-3.5 w-3.5 text-[#0d3b2e]" /> {property.parking} {property.parking === 1 ? "Vaga" : "Vagas"}
            </span>
            {property.area && (
              <span className="flex items-center gap-1">
                <Maximize className="h-3.5 w-3.5 text-[#0d3b2e]" /> {property.area}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="p-5 pt-0">
        <div className="pt-4 border-t border-border flex items-center justify-between">
          <span className="text-sm font-semibold text-[#0d3b2e] line-clamp-1 mr-2">{property.price || "Sob Consulta"}</span>
          <Button
            size="sm"
            onClick={onSelect}
            className="bg-[#0d3b2e] hover:bg-[#092920] text-white transition-colors shrink-0"
          >
            Ver Detalhes
          </Button>
        </div>
      </div>
    </article>
  )
}

function ApartamentosParaVendaContent() {
  const searchParams = useSearchParams()
  const initialId = searchParams.get("id")

  const [selectedId, setSelectedId] = useState<string | null>(initialId)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useEffect(() => {
    if (initialId) {
      setSelectedId(initialId)
      setTimeout(() => {
        const el = document.getElementById("detalhes")
        if (el) el.scrollIntoView({ behavior: "smooth" })
      }, 150)
    }
  }, [initialId])

  const activeProperty = apartamentosVenda.find((p) => p.id === selectedId)

  const mediaItems = activeProperty
    ? [
        ...activeProperty.images.map((src) => ({ type: "image" as const, src, alt: activeProperty.title })),
        ...(activeProperty.videos?.map((src) => ({ type: "video" as const, src })) || []),
      ]
    : []

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const handleSelectProperty = (id: string) => {
    setSelectedId(id)
    const el = document.getElementById("detalhes")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <section className="pt-28 pb-10 bg-[#0d3b2e] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/empreendimentos"
            className="inline-flex items-center text-sm text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Categorias
          </Link>
          <span className="text-xs uppercase tracking-[0.3em] text-[#b85d19] font-semibold block">Categoria</span>
          <h1 className="font-serif text-4xl md:text-5xl font-light mt-2 text-white">Apartamentos para Venda</h1>
          <p className="text-white/75 mt-3 max-w-2xl text-sm md:text-base">
            Apartamentos, flats e coberturas de luxo disponíveis para aquisição exclusiva.
          </p>
        </div>
      </section>

      {activeProperty && (
        <section className="py-12 bg-white border-b border-border scroll-mt-20" id="detalhes">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <button
              onClick={() => setSelectedId(null)}
              className="inline-flex items-center text-sm text-muted-foreground hover:text-[#b85d19] mb-6 font-medium cursor-pointer transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Fechar detalhes
            </button>

            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1 text-sm text-[#b85d19] font-medium mb-2">
                  <MapPin className="h-4 w-4" /> {activeProperty.location}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0d3b2e]">
                  {activeProperty.title}
                </h2>
              </div>

              {activeProperty.videos && activeProperty.videos.length > 0 && (
                <Button
                  onClick={() => openLightbox(activeProperty.images.length)}
                  variant="outline"
                  className="border-[#b85d19] text-[#b85d19] hover:bg-[#b85d19] hover:text-white transition-colors gap-2 w-fit"
                >
                  <Play className="h-4 w-4 fill-current" /> Assistir Vídeos em Tela Cheia
                </Button>
              )}
            </div>

            {/* Galeria de Fotos */}
            <div className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div
                className="aspect-[4/3] lg:aspect-auto lg:row-span-2 overflow-hidden cursor-pointer group rounded-2xl bg-muted relative"
                onClick={() => openLightbox(0)}
              >
                <img
                  src={activeProperty.coverImage || activeProperty.images[0] || "/placeholder.jpg"}
                  alt={activeProperty.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {activeProperty.videos && activeProperty.videos.length > 0 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      openLightbox(activeProperty.images.length)
                    }}
                    className="absolute bottom-4 left-4 bg-black/70 hover:bg-black/85 backdrop-blur-md text-white text-xs px-3.5 py-2 rounded-full flex items-center gap-2 transition-all shadow-lg hover:scale-105"
                  >
                    <Play className="h-3.5 w-3.5 fill-white text-white" /> Ver vídeos completos
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {activeProperty.images.slice(1, 5).map((image, index) => {
                  const isLastSlot = index === 3
                  const remainingPhotos = activeProperty.images.length - 5

                  return (
                    <div
                      key={index}
                      className="aspect-[4/3] overflow-hidden cursor-pointer group rounded-xl bg-muted relative"
                      onClick={() => openLightbox(index + 1)}
                    >
                      <img
                        src={image}
                        alt={`${activeProperty.title} - ${index + 2}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Botão com "+" na última miniatura */}
                      {isLastSlot && remainingPhotos > 0 && (
                        <div className="absolute inset-0 bg-black/60 hover:bg-black/50 transition-colors flex flex-col items-center justify-center text-white">
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                            <span className="text-2xl font-light leading-none">+</span>
                          </div>
                          <span className="text-xs font-medium tracking-wide">
                            {remainingPhotos} {remainingPhotos === 1 ? "foto" : "fotos"}
                          </span>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Bed className="h-5 w-5 text-[#0d3b2e]" />{" "}
                    <span className="font-medium text-foreground">{activeProperty.bedrooms}</span> {activeProperty.bedrooms === 1 ? "Quarto" : "Quartos"}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Bath className="h-5 w-5 text-[#0d3b2e]" />{" "}
                    <span className="font-medium text-foreground">{activeProperty.bathrooms}</span> {activeProperty.bathrooms === 1 ? "Banheiro" : "Banheiros"}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Car className="h-5 w-5 text-[#0d3b2e]" />{" "}
                    <span className="font-medium text-foreground">{activeProperty.parking}</span> {activeProperty.parking === 1 ? "Vaga" : "Vagas"}
                  </div>
                  {activeProperty.area && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Maximize className="h-5 w-5 text-[#0d3b2e]" />{" "}
                      <span className="font-medium text-foreground">{activeProperty.area}</span>
                    </div>
                  )}
                </div>

                {/* Player de Múltiplos Vídeos Integrados */}
                {activeProperty.videos && activeProperty.videos.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Film className="h-5 w-5 text-[#b85d19]" />
                      <h3 className="text-xl font-semibold text-[#0d3b2e] font-serif">
                        {activeProperty.videos.length > 1 ? "Vídeos do Imóvel" : "Vídeo do Imóvel"}
                      </h3>
                    </div>
                    <div className={`grid gap-4 ${activeProperty.videos.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
                      {activeProperty.videos.map((videoSrc, idx) => (
                        <div key={idx} className="rounded-2xl overflow-hidden bg-black aspect-video border border-border shadow-md">
                          <video
                            src={videoSrc}
                            controls
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-contain"
                          >
                            Seu navegador não suporta a reprodução deste vídeo.
                          </video>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#0d3b2e] font-serif">Sobre o Imóvel</h3>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {activeProperty.description}
                  </p>
                </div>

                {activeProperty.amenities && activeProperty.amenities.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#0d3b2e] font-serif">Estrutura e Comodidades</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {activeProperty.amenities.map((item, idx) => (
                        <span key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-[#b85d19]" /> {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-28 bg-[#faf7f2] p-6 rounded-2xl border border-border shadow-sm">
                  <span className="text-xs uppercase text-[#b85d19] font-semibold tracking-wider">
                    Valor de Venda
                  </span>
                  <p className="font-serif text-2xl md:text-3xl text-[#0d3b2e] font-bold my-2">
                    {activeProperty.price || "Sob Consulta"}
                  </p>

                  <div className="space-y-3 mt-6">
                    <Button asChild className="w-full bg-[#0d3b2e] hover:bg-[#092920] text-white" size="lg">
                      <a
                        href={`${siteConfig.whatsappLink}?text=Olá! Tenho interesse no imóvel à venda: ${activeProperty.title}`}
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
      )}

      {/* Grid de Cards em 4 Colunas no Desktop */}
      <section className="py-16 bg-[#faf7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8 border-l-4 border-[#b85d19] pl-3">
            <p className="text-sm font-medium text-foreground">
              Mostrando <span className="font-bold text-[#0d3b2e]">{apartamentosVenda.length}</span> imóveis
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {apartamentosVenda.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={() => handleSelectProperty(property.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        items={mediaItems}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}

export default function ApartamentosParaVendaPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ApartamentosParaVendaContent />
    </Suspense>
  )
}