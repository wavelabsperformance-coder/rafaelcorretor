"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Bed,
  Bath,
  Car,
  Maximize,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Play,
  Home,
  Building,
  Filter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { rentalProperties } from "@/lib/data"
import { FeaturedCarousel } from "@/components/featured-carousel"

export interface ImovelAluguel {
  id: string
  tipo: "casa" | "apartamento"
  title: string
  price: string
  location: string
  coverImage: string
  bedrooms: number
  bathrooms: number
  parking: number
  area: string
  description: string
  videos: string[]
  images: string[]
  amenities: string[]
}

function parsePrecoAluguel(priceStr: string): number {
  if (!priceStr || priceStr.toLowerCase().includes("consulte")) return 0
  const cleanStr = priceStr.split("/")[0].replace(/[^\d]/g, "")
  return cleanStr ? parseInt(cleanStr, 10) : 0
}

function getBairro(location: string): string {
  return location.split(",")[0].trim()
}

const imoveisAluguel: ImovelAluguel[] = [
  // 1. CASA COM JACUZZI | GREEN GARDEN CONDOMÍNIO CLUB
  {
    id: "casa-green-garden-condominio-club",
    tipo: "casa",
    title: "Casa com Área Gourmet e Jacuzzi no Green Garden Condomínio Club",
    price: "R$ 6.500 / mês",
    location: "Green Garden Residence, Caruaru - PE",
    coverImage:
      "/imoveis/casas-para-alugar/casa-green-garden-condominio-club/16.jpeg",
    bedrooms: 4,
    bathrooms: 4,
    parking: 4,
    area: "200m²",
    description: `CASA PARA LOCAÇÃO | GREEN GARDEN CONDOMÍNO CLUB – CARUARU/PE

More em um condomínio fechado às margens da PE-95, com acesso às principais avenidas que levam ao centro da cidade de Caruaru PE.

A casa tem 200 m² e oferece:
- 04 quartos, sendo 03 suítes
- 04 vagas de garagem
- Área gourmet com churrasqueira e jacuzzi

VALOR DE LOCAÇÃO: R$ 6.500,00 por mês (com condomínio e IPTU inclusos).
Garantia: caução.`,
    videos: [],
    images: [
      "/imoveis/casas-para-alugar/casa-green-garden-condominio-club/16.jpeg",
      ...Array.from(
        { length: 17 },
        (_, i) =>
          `/imoveis/casas-para-alugar/casa-green-garden-condominio-club/${i + 1}.jpeg`
      ).filter(
        (img) =>
          img !==
          "/imoveis/casas-para-alugar/casa-green-garden-condominio-club/16.jpeg"
      ),
    ],
    amenities: [
      "3 Suítes",
      "Jacuzzi Privativa",
      "Área Gourmet com Churrasqueira",
      "Garagem para 4 Carros",
      "Às margens da PE-95",
      "Condomínio e IPTU Inclusos",
      "Condomínio Fechado com Lazer",
    ],
  },

  // 2. MAGNÍFICA CASA TERREA | QUINTAS DA COLINA II
  {
    id: "casa-terrea-quintas-da-colina-2",
    tipo: "casa",
    title: "Magnífica Casa de Alto Padrão no Quintas da Colina II",
    price: "R$ 13.000 / mês",
    location: "Quintas da Colina II, Caruaru - PE",
    coverImage:
      "/imoveis/casas-para-alugar/casa-terrea-quintas-da-colina-2/4.jpeg",
    bedrooms: 4,
    bathrooms: 5,
    parking: 6,
    area: "400m²",
    description: `MAGNÍFICA CASA DE ALTO PADRÃO PARA VENDA OU LOCAÇÃO | QUINTAS DA COLINA II – CARUARU/PE

Projeto atemporal e sólido no condomínio fechado Quintas da Colina II. Casa nova, nunca habitada, com fachada imponente em pele de vidro.

ÁREAS DO IMÓVEL:
- Terreno: 600 m²
- Área construída: 400 m²

CARACTERÍSTICAS:
- Casa térrea
- 04 suítes, sendo a máster com varanda e closet
- Sala ampla para 02 ambientes com pé-direito duplo
- Cozinha integrada com área gourmet e churrasqueira
- Piscina com prainha
- Garagem para até 06 veículos
- Quarto de serviço com banheiro
- Área de serviço completa

LOCAÇÃO: R$ 13.000,00/mês (incluso Condomínio e IPTU)
Disponível também para VENDA (Consulte o valor).`,
    videos: [],
    images: [
      "/imoveis/casas-para-alugar/casa-terrea-quintas-da-colina-2/4.jpeg",
      ...Array.from(
        { length: 4 },
        (_, i) =>
          `/imoveis/casas-para-alugar/casa-terrea-quintas-da-colina-2/${i + 1}.jpeg`
      ).filter(
        (img) =>
          img !==
          "/imoveis/casas-para-alugar/casa-terrea-quintas-da-colina-2/4.jpeg"
      ),
    ],
    amenities: [
      "Casa Nova (Nunca Habitada)",
      "Piscina com Prainha",
      "Pé-Direito Duplo",
      "Pele de Vidro na Fachada",
      "Área Gourmet com Churrasqueira",
      "4 Suítes com Máster e Closet",
      "Garagem para 6 Carros",
      "Condomínio e IPTU Inclusos",
    ],
  },

  // 3. CASA SEMI MOBILIADA | QUINTAS DA COLINA II
  {
    id: "casa-quintas-da-colina-2",
    tipo: "casa",
    title: "Casa Semi Mobiliada no Condomínio Quintas da Colina II",
    price: "R$ 10.000 / mês",
    location: "Quintas da Colina II, Caruaru - PE",
    coverImage:
      "/imoveis/casas-para-alugar/casa-quintas-da-colina-2/4.jpeg",
    bedrooms: 4,
    bathrooms: 5,
    parking: 4,
    area: "270m²",
    description: `CASA PARA LOCAÇÃO | QUINTAS DA COLINA II – CARUARU/PE

Casa disponível para locação no condomínio Quintas da Colina II. Posição nascente e teto em lambri.

SEMI MOBILIADO

ÁREAS DO IMÓVEL:
- Área do Terreno: 555 m²
- Área Construída: 270 m²

CARACTERÍSTICAS:
- 04 vagas de garagem, sendo 02 cobertas
- 04 suítes, sendo 02 suítes canadenses, 01 reversível e 01 máster com closet
- 01 quarto de serviço
- 01 banheiro de serviço
- Quintal com área verde
- Área gourmet com churrasqueira

VALOR DE LOCAÇÃO: R$ 10.000,00/mês (incluso Condomínio e IPTU)`,
    videos: [],
    images: [
      "/imoveis/casas-para-alugar/casa-quintas-da-colina-2/4.jpeg",
      ...Array.from(
        { length: 5 },
        (_, i) =>
          `/imoveis/casas-para-alugar/casa-quintas-da-colina-2/${i + 1}.jpeg`
      ).filter(
        (img) =>
          img !==
          "/imoveis/casas-para-alugar/casa-quintas-da-colina-2/4.jpeg"
      ),
    ],
    amenities: [
      "Semi Mobiliado",
      "Posição Nascente",
      "Teto em Lambri",
      "Suíte Máster com Closet",
      "Área Gourmet com Churrasqueira",
      "Quintal com Área Verde",
      "Condomínio e IPTU Inclusos",
    ],
  },

  // 4. CASA DUPLEX | TERRAS ALPHA
  {
    id: "casa-duplex-terras-alpha",
    tipo: "casa",
    title: "Casa Duplex no Condomínio Terras Alpha",
    price: "R$ 10.000 / mês",
    location: "Terras Alpha, Caruaru - PE",
    coverImage:
      "/imoveis/casas-para-alugar/casa-duplex-terras-alpha/16.jpeg",
    bedrooms: 4,
    bathrooms: 5,
    parking: 4,
    area: "250m²",
    description: `CASA DUPLEX PARA LOCAÇÃO | TERRAS ALPHA – CARUARU/PE

Conforto, sofisticação e acessibilidade em uma residência com ambientes amplos e excelente distribuição.

ÁREAS DO IMÓVEL:
- Terreno: 300 m²
- Área construída: 250 m²

CARACTERÍSTICAS:
- 04 quartos, sendo 03 suítes
- Sala ampla para 02 ambientes
- Cozinha
- Banheiro social
- Lavabo
- Área de serviço
- Garagem para 04 veículos

DIFERENCIAIS:
- Amplo espaço gourmet
- Elevador de acessibilidade
- Ambientes espaçosos e funcionais
- Condomínio fechado com segurança e lazer

LOCAÇÃO: R$ 10.000,00/mês
Condomínio Terras Alpha | Caruaru – PE`,
    videos: [],
    images: [
      "/imoveis/casas-para-alugar/casa-duplex-terras-alpha/16.jpeg",
      ...Array.from(
        { length: 16 },
        (_, i) =>
          `/imoveis/casas-para-alugar/casa-duplex-terras-alpha/${i + 1}.jpeg`
      ).filter(
        (img) =>
          img !==
          "/imoveis/casas-para-alugar/casa-duplex-terras-alpha/16.jpeg"
      ),
    ],
    amenities: [
      "Elevador de Acessibilidade",
      "Espaço Gourmet",
      "Condomínio Fechado",
      "3 Suítes",
      "Garagem 4 Vagas",
    ],
  },

  // 5. CONDOMÍNIO MR. ROTTERDAM
  {
    id: "ap-condominio-mr-rotterdam",
    tipo: "apartamento",
    title: "Apartamento Mobiliado no Condomínio Mr. Rotterdam",
    price: "R$ 2.400 / mês",
    location: "Universitário, Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/2.jpeg",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: "38m²",
    description: `Excelente oportunidade de locação no Condomínio Mr. Rotterdam.`,
    videos: [],
    images: Array.from(
      { length: 15 },
      (_, i) =>
        `/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/${i + 1}.jpeg`
    ),
    amenities: ["100% Mobiliado", "Piscina com Deck", "Academia Equipada"],
  },

  // 6. APARTAMENTO MOBILIADO NO MAURÍCIO DE NASSAU
  {
    id: "ap-mobiliado-mauricio-de-nassau",
    tipo: "apartamento",
    title: "Apartamento Mobiliado no Maurício de Nassau",
    price: "R$ 1.700 / mês",
    location: "Maurício de Nassau, Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/1.jpeg",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: "35m²",
    description: "Apartamento mobiliado e prático para locação no bairro Maurício de Nassau.",
    videos: [],
    images: Array.from(
      { length: 9 },
      (_, i) =>
        `/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/${i + 1}.jpeg`
    ),
    amenities: ["Mobiliado", "Ar-condicionado", "Todas as Taxas Inclusas"],
  },

  // 7. JARDIM DOS ALECRINS
  {
    id: "ap-edificio-jardim-dos-alecrins",
    tipo: "apartamento",
    title: "Apartamento Mobiliado no Edifício Jardim dos Alecrins",
    price: "R$ 2.800 / mês",
    location: "Universitário, Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/1.jpeg",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    area: "54m²",
    description: `Excelente apartamento totalmente mobiliado e nascente no Edifício Jardim dos Alecrins.`,
    videos: [],
    images: Array.from(
      { length: 33 },
      (_, i) =>
        `/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/${i + 1}.jpeg`
    ),
    amenities: ["Totalmente Mobiliado", "Posição Nascente", "Piscina e Lazer"],
  },

  // 8. STUDIO ALTO PADRÃO
  {
    id: "ap-studio-alto-padrao-shopping",
    tipo: "apartamento",
    title: "Apartamento de Alto Padrão - Pronto para Morar",
    price: "R$ 4.000 / mês",
    location: "Maurício de Nassau, Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/1.jpeg",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: "38m²",
    description: "Imóvel diferenciado com padrão de acabamento e decoração premium.",
    videos: [
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/19.mp4",
    ],
    images: Array.from(
      { length: 29 },
      (_, i) =>
        `/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/${i + 1}.jpeg`
    ),
    amenities: ["Alto Padrão Decorado", "Academia Equipada", "Coworking"],
  },

  // 9. EDIFÍCIO JOÃO SOARES
  {
    id: "ap-edificio-joao-soares",
    tipo: "apartamento",
    title: "Apartamento de Alto Padrão no Edifício João Soares",
    price: "R$ 4.200 / mês",
    location: "Maurício de Nassau, Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/1.jpeg",
    bedrooms: 2,
    bathrooms: 3,
    parking: 2,
    area: "80m²",
    description: "Apartamento impecável no Edifício João Soares.",
    videos: [],
    images: Array.from(
      { length: 13 },
      (_, i) =>
        `/imoveis/apartamentos-para-alugar/edificio-joao-soares/${i + 1}.jpeg`
    ),
    amenities: ["2 Suítes Privativas", "Andar Alto", "2 Vagas Cobertas"],
  },

  // 10. CAMINHO DAS AROEIRAS
  {
    id: "ap-caminho-das-aroeiras",
    tipo: "apartamento",
    title: "Apartamento Condomínio Caminho das Aroeiras",
    price: "Consulte o valor",
    location: "Indianópolis, Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/7.jpeg",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    area: "52m²",
    description: "Excelente oportunidade de locação ao lado do Caruaru Shopping.",
    videos: [],
    images: Array.from(
      { length: 10 },
      (_, i) =>
        `/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/${i + 1}.jpeg`
    ),
    amenities: ["Ao Lado do Caruaru Shopping", "Piscina", "Salão de Festas"],
  },

  // 11. JARDIM DAS ORQUÍDEAS
  {
    id: "ap-jardim-das-orquideas-indianopolis",
    tipo: "apartamento",
    title: "Apartamento no Res. Jardim das Orquídeas",
    price: "R$ 1.500 / mês",
    location: "Indianópolis, Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-alugar/jardim-das-orquideas/1.jpeg",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    area: "42m²",
    description: `APARTAMENTO PARA LOCAÇÃO | JARDIM DAS ORQUÍDEAS — CARUARU`,
    videos: [],
    images: Array.from(
      { length: 13 },
      (_, i) =>
        `/imoveis/apartamentos-para-alugar/jardim-das-orquideas/${i + 1}.jpeg`
    ),
    amenities: ["Posição Norte", "2º Andar", "Condomínio, IPTU e Gás Inclusos"],
  },
]

const bairrosDisponiveis = Array.from(
  new Set(imoveisAluguel.map((imovel) => getBairro(imovel.location)))
).sort((a, b) => a.localeCompare(b, "pt-BR"))

function PropertyCard({ property }: { property: ImovelAluguel }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const images =
    property.images && property.images.length > 0
      ? property.images
      : [property.coverImage]

  const totalImages = images.length
  const hasVideos = property.videos && property.videos.length > 0

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImgIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1))
  }

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImgIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1))
  }

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-border/80 hover:border-[#b85d19]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative">
      <div>
        <Link
          href={`/imoveis/${property.id}`}
          className="block aspect-[4/3] overflow-hidden relative bg-muted cursor-pointer"
        >
          <img
            src={images[currentImgIndex] || "/placeholder.jpg"}
            alt={`${property.title} - foto ${currentImgIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute top-3 left-3 bg-[#b85d19] text-white px-3 py-1 text-xs rounded-full font-medium shadow-sm">
            Locação
          </div>

          {hasVideos && (
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 text-[11px] rounded-full font-medium flex items-center gap-1">
              <Play className="h-3 w-3 fill-white" />
              {property.videos.length > 1
                ? `${property.videos.length} Vídeos`
                : "Vídeo"}
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
        </Link>

        <div className="p-5">
          <span className="text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-1 font-medium">
            <MapPin className="h-3.5 w-3.5 text-[#b85d19]" />
            {property.location}
          </span>

          <Link href={`/imoveis/${property.id}`} className="block">
            <h3 className="text-base font-semibold text-foreground group-hover:text-[#b85d19] transition-colors mt-2 line-clamp-1 font-serif">
              {property.title}
            </h3>
          </Link>

          <div className="flex items-center gap-3 mt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Bed className="h-3.5 w-3.5 text-[#0d3b2e]" />
              {property.bedrooms}{" "}
              {property.bedrooms === 1 ? "Quarto" : "Quartos"}
            </span>

            <span className="flex items-center gap-1">
              <Bath className="h-3.5 w-3.5 text-[#0d3b2e]" />
              {property.bathrooms}{" "}
              {property.bathrooms === 1 ? "Banheiro" : "Banheiros"}
            </span>

            <span className="flex items-center gap-1">
              <Car className="h-3.5 w-3.5 text-[#0d3b2e]" />
              {property.parking}{" "}
              {property.parking === 1 ? "Vaga" : "Vagas"}
            </span>

            {property.area && (
              <span className="flex items-center gap-1">
                <Maximize className="h-3.5 w-3.5 text-[#0d3b2e]" />
                {property.area}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="p-5 pt-0">
        <div className="pt-4 border-t border-border flex items-center justify-between">
          <span className="text-sm font-semibold text-[#0d3b2e] line-clamp-1 mr-2">
            {property.price || "Sob Consulta"}
          </span>

          <Button
            asChild
            size="sm"
            className="bg-[#0d3b2e] hover:bg-[#092920] text-white transition-colors shrink-0"
          >
            <Link href={`/imoveis/${property.id}`}>
              Ver Detalhes
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

function ImoveisParaAlugarContent() {
  const [tipoFiltro, setTipoFiltro] = useState<
    "todos" | "apartamento" | "casa"
  >("todos")

  const [bairroFiltro, setBairroFiltro] = useState<string>("todos")
  const [faixaPrecoFiltro, setFaixaPrecoFiltro] = useState<string>("todas")

  const imoveisFiltrados = imoveisAluguel.filter((imovel) => {
    if (tipoFiltro !== "todos" && imovel.tipo !== tipoFiltro) return false

    if (bairroFiltro !== "todos" && getBairro(imovel.location) !== bairroFiltro) {
      return false
    }

    if (faixaPrecoFiltro !== "todas") {
      const valor = parsePrecoAluguel(imovel.price)
      if (valor > 0) {
        if (faixaPrecoFiltro === "ate_2000" && valor > 2000) return false
        if (faixaPrecoFiltro === "2000_3500" && (valor < 2000 || valor > 3500)) return false
        if (faixaPrecoFiltro === "acima_3500" && valor < 3500) return false
      }
    }

    return true
  })

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

          <span className="text-xs uppercase tracking-[0.3em] text-[#b85d19] font-semibold block">
            Categoria
          </span>

          <h1 className="font-serif text-4xl md:text-5xl font-light mt-2 text-white">
            Imóveis para Alugar
          </h1>

          <p className="text-white/75 mt-3 max-w-2xl text-sm md:text-base">
            Casas e apartamentos selecionados para locação em Caruaru.
          </p>
        </div>
      </section>

      <FeaturedCarousel
        properties={rentalProperties}
        title="Imóveis em Destaque para Alugar"
        subtitle="Destaques de Locação"
        type="aluguel"
      />

      <section className="py-12 bg-[#faf7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl shadow-black/5 border border-border/60 mb-12">
            <div className="flex items-center justify-between px-2 mb-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-[#b85d19]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#0d3b2e]">
                  Filtrar Catálogo de Locação
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-muted-foreground">
                  <strong className="text-[#0d3b2e] font-bold">{imoveisFiltrados.length}</strong> {imoveisFiltrados.length === 1 ? "imóvel encontrado" : "imóveis encontrados"}
                </span>

                {(tipoFiltro !== "todos" || bairroFiltro !== "todos" || faixaPrecoFiltro !== "todas") && (
                  <button
                    type="button"
                    onClick={() => {
                      setTipoFiltro("todos")
                      setBairroFiltro("todos")
                      setFaixaPrecoFiltro("todas")
                    }}
                    className="text-xs font-semibold text-[#b85d19] hover:text-[#0d3b2e] transition-colors"
                  >
                    Resetar
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 bg-[#faf8f5] rounded-xl border border-border/80 divide-y md:divide-y-0 md:divide-x divide-border/80 overflow-hidden">
              
              <div className="relative p-3.5 px-4 hover:bg-white transition-colors duration-200 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#0d3b2e]/5 text-[#0d3b2e] shrink-0">
                  <Home className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#b85d19]">
                    Tipo de Imóvel
                  </label>
                  <div className="relative mt-0.5">
                    <select
                      value={tipoFiltro}
                      onChange={(e) => setTipoFiltro(e.target.value as any)}
                      className="w-full bg-transparent text-sm font-semibold text-foreground focus:outline-none appearance-none cursor-pointer pr-6 truncate"
                    >
                      <option value="todos">Todos os Tipos (Casas e Apts)</option>
                      <option value="casa">Casas</option>
                      <option value="apartamento">Apartamentos</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="relative p-3.5 px-4 hover:bg-white transition-colors duration-200 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#0d3b2e]/5 text-[#0d3b2e] shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#b85d19]">
                    Bairro em Caruaru
                  </label>
                  <div className="relative mt-0.5">
                    <select
                      value={bairroFiltro}
                      onChange={(e) => setBairroFiltro(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-foreground focus:outline-none appearance-none cursor-pointer pr-6 truncate"
                    >
                      <option value="todos">Todos os Bairros</option>
                      {bairrosDisponiveis.map((bairro) => (
                        <option key={bairro} value={bairro}>
                          {bairro}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="relative p-3.5 px-4 hover:bg-white transition-colors duration-200 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#0d3b2e]/5 text-[#0d3b2e] shrink-0">
                  <Building className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#b85d19]">
                    Valor Mensal
                  </label>
                  <div className="relative mt-0.5">
                    <select
                      value={faixaPrecoFiltro}
                      onChange={(e) => setFaixaPrecoFiltro(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-foreground focus:outline-none appearance-none cursor-pointer pr-6 truncate"
                    >
                      <option value="todas">Todas as Faixas de Aluguel</option>
                      <option value="ate_2000">Até R$ 2.000 / mês</option>
                      <option value="2000_3500">R$ 2.000 – R$ 3.500 / mês</option>
                      <option value="acima_3500">Acima de R$ 3.500 / mês</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {imoveisFiltrados.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {imoveisFiltrados.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-border">
              <p className="text-muted-foreground text-sm">
                Nenhum imóvel encontrado com os filtros selecionados.
              </p>
              <button
                type="button"
                onClick={() => {
                  setTipoFiltro("todos")
                  setBairroFiltro("todos")
                  setFaixaPrecoFiltro("todas")
                }}
                className="mt-3 text-[#0d3b2e] font-semibold hover:underline text-sm"
              >
                Resetar filtros
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default function ImoveisParaAlugarPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Carregando imóveis para alugar...</div>}>
      <ImoveisParaAlugarContent />
    </Suspense>
  )
}