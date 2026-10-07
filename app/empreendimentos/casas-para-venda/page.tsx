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
// CASAS PARA VENDA (EDITE SEUS IMÓVEIS AQUI)
// =========================================================================
const casasVenda = [
  // 1. MANSÃO NO CONDOMÍNIO MONTE CASTELO - GRAVATÁ (18 FOTOS + 1 VÍDEO)
  {
    id: "casa-monte-castelo-gravata",
    title: "Mansão de Alto Padrão no Condomínio Monte Castelo",
    price: "R$ 2.400.000",
    location: "Condomínio Monte Castelo, Gravatá - PE",
    coverImage: "/imoveis/casas-para-venda/casa-monte-castelo-gravata/5.jpeg",
    bedrooms: 5,
    bathrooms: 7, // 6 suítes + 1 lavabo/área gourmet
    parking: 6,
    area: "1.000m² terreno (com lote anexo)",
    description: `Exclusiva mansão de alto padrão no prestigiado Condomínio Monte Castelo em Gravatá - PE. Imóvel e lote totalmente escriturados.

Projeto de arquitetura moderna integrando madeira nobre, vidro e concreto aparente, com pé-direito duplo e teto integralmente revestido em madeira.

Configuração do imóvel:
• 6 quartos amplos, todos configurados como suítes privativas
• Sala de estar ampla e moderna mobiliada com sofá de couro de alta qualidade
• Varanda panorâmica com 2 balanços modernos e vista deslumbrante para as colinas
• Cozinha 100% equipada com eletrodomésticos e móveis planejados
• Sala de jantar com mesa maciça em madeira para 12 lugares
• Área gourmet privativa com churrasqueira e chuveirão
• Projeto paisagístico com ampla jardinagem integrada
• Garagem com capacidade para até 6 veículos

Lote Adicional Incluso:
• Terreno anexo medindo 20 x 50 metros (1.000 m²), possibilitando a construção de uma segunda casa, quadras ou uma ampla área de lazer com piscina privativa.

Contato direto com o corretor responsável:
Gleydson Tabosa - (81) 99547-7776`,
    video: "/imoveis/casas-para-venda/casa-monte-castelo-gravata/1.mp4",
    images: [
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/5.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/2.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/3.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/4.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/6.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/7.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/8.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/9.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/10.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/11.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/12.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/13.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/14.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/15.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/16.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/17.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/18.jpeg",
      "/imoveis/casas-para-venda/casa-monte-castelo-gravata/19.jpeg",
    ],
    amenities: [
      "6 Suítes Privativas",
      "Lote Adicional 20x50m Incluso",
      "Casa e Lote Escriturados",
      "Pé-direito Alto Revestido em Madeira",
      "Varanda Panorâmica",
      "Espaço Gourmet com Churrasqueira",
      "Cozinha Completa Equipada",
      "Garagem para 6 Veículos",
      "Condomínio Fechado de Alto Padrão",
      "Segurança e Portaria 24h",
    ],
  },

  // 2. CASA MODERNA COM QUINTAL (10 FOTOS - SEM VÍDEO)
  {
    id: "casa-moderna-com-quintal",
    title: "Casa Moderna com Quintal e Excelente Padrão",
    price: "Consulte o valor",
    location: "Caruaru - PE",
    coverImage: "/imoveis/casas-para-venda/casa-moderna-com-quintal/1.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "56m²",
    description: `Excelente oportunidade de casa à venda com ótimo padrão de acabamento e aproveitamento inteligente de espaços. 

Imóvel construído em terreno medindo 7 x 22 metros, totalizando 154 m² de terreno e 56 m² de área construída coberta, oferecendo conforto, funcionalidade e grande potencial de ampliação.

Configuração do imóvel:
• Área frontal de 5 x 7 metros com garagem para 1 carro
• Sala de estar e jantar integradas, proporcionando amplitude e aconchego
• Cozinha planejada com móveis sob medida e bancada em mármore
• 2 quartos bem ventilados (sendo 1 suíte)
• Banheiros completos com bancadas em mármore, móveis planejados e projeto de luminárias
• Quintal amplo nos fundos medindo 5 x 7 metros, com estrutura e espaço para construção de um terceiro quarto ou área de lazer privativa

Imóvel ideal para quem busca modernidade, excelente distribuição de cômodos e possibilidade futura de expansão.`,
    video: null,
    images: [
      "/imoveis/casas-para-venda/casa-moderna-com-quintal/1.jpeg",
      "/imoveis/casas-para-venda/casa-moderna-com-quintal/2.jpeg",
      "/imoveis/casas-para-venda/casa-moderna-com-quintal/3.jpeg",
      "/imoveis/casas-para-venda/casa-moderna-com-quintal/4.jpeg",
      "/imoveis/casas-para-venda/casa-moderna-com-quintal/5.jpeg",
      "/imoveis/casas-para-venda/casa-moderna-com-quintal/6.jpeg",
      "/imoveis/casas-para-venda/casa-moderna-com-quintal/7.jpeg",
      "/imoveis/casas-para-venda/casa-moderna-com-quintal/8.jpeg",
      "/imoveis/casas-para-venda/casa-moderna-com-quintal/9.jpeg",
      "/imoveis/casas-para-venda/casa-moderna-com-quintal/10.jpeg",
    ],
    amenities: [
      "1 Suíte",
      "Cozinha Planejada com Mármore",
      "Móveis Planejados nos Banheiros",
      "Salas de Estar e Jantar Integradas",
      "Quintal Amplo (5x7m)",
      "Espaço para 3º Quarto",
      "Área Frontal com Garagem",
      "Projeto Luminotécnico",
    ],
  },

  // 3. CASA EM CONDOMÍNIO - THE HOUSE CLUB (18 FOTOS - SEM VÍDEO)
  {
    id: "casa-the-house-club-caruaru",
    title: "Casa em Condomínio Fechado no The House Club",
    price: "R$ 870.000",
    location: "Luiz Gonzaga, Caruaru - PE",
    coverImage: "/imoveis/casas-para-venda/casa-the-house-club/1.jpeg",
    bedrooms: 3,
    bathrooms: 4,
    parking: 2,
    area: "123m²",
    description: `Excelente oportunidade de compra no condomínio fechado The House Club, localizado no bairro Luiz Gonzaga em Caruaru - PE. 

Um imóvel projetado para oferecer conforto, segurança e uma estrutura de lazer completa para toda a família. Aceita financiamento bancário.

Metragens:
• Área construída: 123 m²
• Área total do terreno: 190 m²

Configuração do imóvel:
• 3 suítes amplas (sendo 1 suíte master com closet)
• Sala para 2 ambientes (estar e jantar)
• Cozinha funcional integrada
• Banheiro social / lavabo
• Área de serviço privativa
• Espaço gourmet com churrasqueira
• Espaço preparado para instalação de jacuzzi
• 2 vagas de garagem cobertas

Lazer e infraestrutura do condomínio:
• Piscina adulto e infantil
• Academia completa equipada
• Salão de festas
• Quadra poliesportiva
• Playground infantil e áreas de convivência arborizadas
• Portaria com segurança e controle de acesso 24 horas`,
    video: null,
    images: [
      "/imoveis/casas-para-venda/casa-the-house-club/1.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/2.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/3.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/4.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/5.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/6.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/7.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/8.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/9.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/10.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/11.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/12.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/13.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/14.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/15.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/16.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/17.jpeg",
      "/imoveis/casas-para-venda/casa-the-house-club/18.jpeg",
    ],
    amenities: [
      "3 Suítes (1 Master com Closet)",
      "Espaço Gourmet com Churrasqueira",
      "Ponto para Instalação de Jacuzzi",
      "Aceita Financiamento Bancário",
      "Condomínio Fechado com Portaria 24h",
      "Piscina Adulto e Infantil",
      "Academia Equipada",
      "Quadra Poliesportiva",
      "Salão de Festas e Playground",
      "2 Vagas Cobertas",
    ],
  },

  // 4. CASA DUPLEX | INDIANÓPOLIS
  {
    id: "casa-duplex-indianopolis",
    title: "Casa Duplex no Bairro Indianópolis",
    price: "R$ 225.000",
    location: "Indianópolis, Caruaru - PE",
    coverImage: "/imoveis/casas-para-venda/casa-duplex-indianopolis/16.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "65m²",
    description: `CASA DUPLEX À VENDA | INDIANÓPOLIS – CARUARU/PE

Imóvel em posição nascente, com 65 m² de área construída.

PAVIMENTO TERREO:
- Garagem para um veículo de pequeno porte
- Sala de estar
- Cozinha planejada
- Banheiro social
- Lavanderia

PAVIMENTO SUPERIOR:
- 02 quartos, sendo 01 suíte

DIFERENCIAIS DO IMÓVEL:
- Cisterna com capacidade para 10 mil litros
- Cerca elétrica
- Sistema de câmeras de segurança
- Móveis fixos planejados
- Forno e cooktop inclusos
- Ar-condicionado

VALOR DE VENDA: R$ 225.000,00
Não aceita financiamento.

OBS.: também disponível para locação por R$ 2.000,00/mês.`,
    video: null,
    images: Array.from(
      { length: 31 },
      (_, i) => `/imoveis/casas-para-venda/casa-duplex-indianopolis/${i + 1}.jpeg`
    ),
    amenities: [
      "Posição Nascente",
      "65m² de Área Construída",
      "01 Suíte",
      "Cozinha Planejada",
      "Cisterna para 10 Mil Litros",
      "Cerca Elétrica e Câmeras de Segurança",
      "Forno, Cooktop e Ar-condicionado",
      "01 Vaga de Garagem",
    ],
  },

  // 5. LOTEAMENTO 7 LUAS | ALTO DO MOURA (ALUGADA)
  {
    id: "casa-alto-do-moura-7-luas",
    title: "Casa no Loteamento 7 Luas – Alto do Moura",
    price: "R$ 215.000",
    location: "Alto do Moura, Caruaru - PE",
    coverImage: "/imoveis/casas-para-venda/casa-alto-do-moura-7-luas/11.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    parking: 0,
    area: "56m²",
    alugado: true,
    description: `CASA À VENDA | LOTEAMENTO 7 LUAS – ALTO DO MOURA – CARUARU/PE

Imóvel construído em terreno de 7 x 22 metros, com 56 m² de área construída, oferecendo conforto, funcionalidade e excelente aproveitamento dos espaços.

CARACTERÍSTICAS DO IMÓVEL:
- Sala de estar e jantar integradas
- Cozinha planejada, com móveis sob medida e bancada em mármore
- 02 quartos, sendo 01 suíte
- Banheiros completos, com bancada em mármore, móveis planejados e luminárias
- Quintal amplo de 5 x 7 metros, com possibilidade de construção de um terceiro quarto

VALOR DE VENDA: R$ 215.000,00 (preço de oportunidade)

ATENÇÃO: imóvel atualmente ALUGADO, porém disponível para venda.`,
    video: null,
    images: Array.from(
      { length: 15 },
      (_, i) => `/imoveis/casas-para-venda/casa-alto-do-moura-7-luas/${i + 1}.jpeg`
    ),
    amenities: [
      "Terreno 7 x 22 m - 56m² Construídos",
      "01 Suíte",
      "Cozinha Planejada com Móveis Sob Medida",
      "Bancadas em Mármore",
      "Quintal de 5 x 7 m",
      "Potencial para um Terceiro Quarto",
      "Imóvel Alugado - Disponível para Venda",
    ],
  },

  // 6. MAGNÍFICA CASA REFORMADA | PETRÓPOLIS (ALUGADA)
  {
    id: "casa-reformada-petropolis",
    title: "Magnífica Casa Reformada no Bairro Petrópolis",
    price: "R$ 750.000",
    location: "Petrópolis, Caruaru - PE",
    coverImage: "/imoveis/casas-para-venda/casa-reformada-petropolis/23.jpeg",
    bedrooms: 3,
    bathrooms: 3,
    parking: 4,
    area: "258m²",
    alugado: true,
    description: `CASA REFORMADA À VENDA | PETRÓPOLIS – CARUARU/PE

MAGNÍFICA CASA REFORMADA, MODERNA E PRONTA PARA MORAR NO PETRÓPOLIS

LOCALIZAÇÃO: Bairro Petrópolis | Próximo à principal
- 258 m² de área construída
- Terreno 13 x 23 m
- 03 quartos, sendo 01 suíte
- Sala para 02 ambientes
- Cozinha
- Banheiro social
- Garagem para 04 carros
- Casa solta na lateral

ÁREA GOURMET E LAZER:
- Área gourmet principal com piscina aquecida, teto retrátil e churrasqueira a gás
- Segunda área gourmet com churrasqueira a carvão e banheiro
- Iluminação em LED, fachada revestida em porcelanato e acabamentos modernos

Imóvel escriturado.

VALOR DE VENDA: R$ 750.000,00
Aceita carro ou lote em condomínio como parte do pagamento, mediante avaliação.

ATENÇÃO: imóvel atualmente ALUGADO, porém disponível para venda.`,
    video: null,
    images: Array.from(
      { length: 23 },
      (_, i) => `/imoveis/casas-para-venda/casa-reformada-petropolis/${i + 1}.jpeg`
    ),
    amenities: [
      "258m² de Área Construída",
      "01 Suíte",
      "Sala para 02 Ambientes",
      "Garagem para 04 Carros",
      "Piscina Aquecida com Teto Retrátil",
      "Churrasqueira a Gás e a Carvão",
      "Fachada em Porcelanato",
      "Imóvel Escriturado",
      "Imóvel Alugado - Disponível para Venda",
    ],
  },
]

// Componente do Card com navegação individual de fotos
function PropertyCard({
  property,
  onSelect,
}: {
  property: (typeof casasVenda)[0]
  onSelect: () => void
}) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)
  const totalImages = property.images.length

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

          {property.alugado && (
            <div className="absolute bottom-3 right-3 bg-red-600 text-white px-3 py-1 text-xs rounded-full font-medium shadow-sm">
              Alugado
            </div>
          )}

          {property.video && (
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 text-[11px] rounded-full font-medium flex items-center gap-1">
              <Play className="h-3 w-3 fill-white" /> Vídeo
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
            {property.parking > 0 && (
              <span className="flex items-center gap-1">
                <Car className="h-3.5 w-3.5 text-[#0d3b2e]" /> {property.parking} {property.parking === 1 ? "Vaga" : "Vagas"}
              </span>
            )}
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

function CasasParaVendaContent() {
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

  const activeProperty = casasVenda.find((p) => p.id === selectedId)

  // O vídeo fica posicionado no índice 0 caso exista
  const mediaItems = activeProperty
    ? [
        ...(activeProperty.video ? [{ type: "video" as const, src: activeProperty.video }] : []),
        ...activeProperty.images.map((src) => ({ type: "image" as const, src, alt: activeProperty.title })),
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

  const hasVideo = Boolean(activeProperty?.video)
  const photoOffset = hasVideo ? 1 : 0

  return (
    <>
      {/* Hero Header */}
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
          <h1 className="font-serif text-4xl md:text-5xl font-light mt-2 text-white">Casas para Venda</h1>
          <p className="text-white/75 mt-3 max-w-2xl text-sm md:text-base">
            Casas exclusivas, mansões e condomínios fechados de alto padrão em localizações nobres.
          </p>
        </div>
      </section>

      {/* Painel de Detalhes do Imóvel Selecionado */}
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

              {activeProperty.video && (
                <Button
                  onClick={() => openLightbox(0)}
                  variant="outline"
                  className="border-[#b85d19] text-[#b85d19] hover:bg-[#b85d19] hover:text-white transition-colors gap-2 w-fit"
                >
                  <Play className="h-4 w-4 fill-current" /> Assistir Vídeo em Tela Cheia
                </Button>
              )}
            </div>

            {/* Galeria de Fotos */}
            <div className="mb-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div
                className="aspect-[4/3] lg:aspect-auto lg:row-span-2 overflow-hidden cursor-pointer group rounded-2xl bg-muted relative"
                onClick={() => openLightbox(photoOffset)}
              >
                <img
                  src={activeProperty.coverImage || activeProperty.images[0] || "/placeholder.jpg"}
                  alt={activeProperty.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {activeProperty.video && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      openLightbox(0)
                    }}
                    className="absolute bottom-4 left-4 bg-black/70 hover:bg-black/85 backdrop-blur-md text-white text-xs px-3.5 py-2 rounded-full flex items-center gap-2 transition-all shadow-lg hover:scale-105"
                  >
                    <Play className="h-3.5 w-3.5 fill-white text-white" /> Ver vídeo completo
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
                      onClick={() => openLightbox(index + 1 + photoOffset)}
                    >
                      <img
                        src={image}
                        alt={`${activeProperty.title} - ${index + 2}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Botão com "+" se houver mais fotos */}
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
                  {activeProperty.parking > 0 && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Car className="h-5 w-5 text-[#0d3b2e]" />{" "}
                      <span className="font-medium text-foreground">{activeProperty.parking}</span> {activeProperty.parking === 1 ? "Vaga" : "Vagas"}
                    </div>
                  )}
                  {activeProperty.area && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Maximize className="h-5 w-5 text-[#0d3b2e]" />{" "}
                      <span className="font-medium text-foreground">{activeProperty.area}</span>
                    </div>
                  )}
                </div>

                {/* Player de Vídeo Integrado */}
                {activeProperty.video && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Film className="h-5 w-5 text-[#b85d19]" />
                      <h3 className="text-xl font-semibold text-[#0d3b2e] font-serif">Vídeo do Imóvel</h3>
                    </div>
                    <div className="rounded-2xl overflow-hidden bg-black aspect-video border border-border shadow-md">
                      <video
                        src={activeProperty.video}
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
                  {activeProperty.alugado && (
                    <p className="text-sm font-medium text-red-600">
                      Imóvel alugado · disponível para venda
                    </p>
                  )}

                  <div className="space-y-3 mt-6">
                    <Button asChild className="w-full bg-[#0d3b2e] hover:bg-[#092920] text-white" size="lg">
                      <a
                        href={`https://wa.me/5581995477776?text=Olá Gleydson! Tenho interesse na casa à venda no Condomínio Monte Castelo: ${activeProperty.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-5 w-5 text-[#b85d19]" /> Falar com Gleydson
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#0d3b2e] text-[#0d3b2e] hover:bg-[#0d3b2e] hover:text-white"
                      size="lg"
                    >
                      <a href="tel:5581995477776">
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
              Mostrando <span className="font-bold text-[#0d3b2e]">{casasVenda.length}</span> imóveis
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {casasVenda.map((property) => (
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

export default function CasasParaVendaPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <CasasParaVendaContent />
    </Suspense>
  )
}