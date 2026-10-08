"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Play,
  Building2,
  Maximize,
  Filter,
  Briefcase,
  Building,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export interface ImovelComercial {
  id: string
  title: string
  price: string
  location: string
  coverImage: string
  bathrooms: number
  area: string
  description: string
  videos?: string[]
  images: string[]
  amenities: string[]
  alugado?: boolean
}

function parsePrecoComercial(priceStr: string): number {
  if (!priceStr || priceStr.toLowerCase().includes("consulte")) return 0
  const cleanStr = priceStr.split("/")[0].replace(/[^\d]/g, "")
  return cleanStr ? parseInt(cleanStr, 10) : 0
}

// Retorna o bairro quando a localização tem 3 partes
// Ex: "Av. Agamenon Magalhães, Maurício de Nassau, Caruaru - PE" -> "Maurício de Nassau"
// Se não tiver bairro (ex: "Av. Agamenon Magalhães, Caruaru - PE"), retorna ""
function getBairro(location: string): string {
  const parts = location.split(",").map((p) => p.trim())
  // "Bairro Universitário, Caruaru - PE" -> "Bairro Universitário"
  if (parts.length === 2) {
    return /^(av\.|avenida|rua|travessa|alameda|rodovia|estrada|beco)\b/i.test(parts[0]) ? "" : parts[0]
  }
  if (parts.length < 3) return ""
  return parts[parts.length - 2]
}

const pontosComerciais: ImovelComercial[] = [
  // 1. SALA COMERCIAL GALERIA AVENIDA CENTER
  {
    id: "sala-comercial-galeria-avenida-center",
    title: "Sala Comercial na Galeria Avenida Center",
    price: "R$ 1.800 / mês (Incluso Condomínio e IPTU)",
    location: "Av. Agamenon Magalhães, Maurício de Nassau, Caruaru - PE",
    coverImage:
      "/imoveis/pontos-comerciais/sala-galeria-avenida-center/6.jpeg",
    bathrooms: 6,
    area: "30m²",
    description: `OPORTUNIDADE DE ALUGUEL — SALA COMERCIAL NA AGAMENON MAGALHÃES!

Excelente oportunidade para instalar ou expandir o seu negócio no coração de Caruaru!

Localização Privilegiada: Galeria Avenida Center (no mesmo prédio onde funciona a Claro)
Endereço: Av. Agamenon Magalhães, 297 - Maurício de Nassau, Caruaru - PE

Valor: R$ 1.800,00/mês
TUDO INCLUSO: Condomínio e IPTU já estão inclusos no valor do aluguel! Sem surpresas no fim do mês.

Destaques:
- Ponto de altíssima visibilidade e grande fluxo na principal avenida da cidade
- Bairro nobre e estratégico (Maurício de Nassau)
- Perfeito para escritórios, consultórios, estética ou prestação de serviços`,
    videos: ["/imoveis/pontos-comerciais/sala-galeria-avenida-center/1.mp4"],
    images: Array.from(
      { length: 9 },
      (_, i) =>
        `/imoveis/pontos-comerciais/sala-galeria-avenida-center/${i + 1}.jpeg`
    ),
    amenities: [
      "Galeria Avenida Center",
      "Av. Agamenon Magalhães",
      "Condomínio e IPTU Inclusos",
      "Bairro Maurício de Nassau",
      "Grande Fluxo de Pedestres e Veículos",
      "Ideal para Consultórios e Escritórios",
    ],
  },

  // 2. PONTO COMERCIAL AGAMENON MAGALHÃES
  {
    id: "ponto-comercial-agamenon-magalhaes",
    title: "Ponto Comercial na Avenida Agamenon Magalhães",
    price: "R$ 4.500 / mês",
    location: "Av. Agamenon Magalhães, Caruaru - PE",
    coverImage:
      "/imoveis/pontos-comerciais/ponto-comercial-agamenon-magalhaes/1.jpeg",
    bathrooms: 1,
    area: "25m² (5m x 5m)",
    description: `Ponto comercial na principal avenida de Caruaru: Av. Agamenon Magalhães. Alto fluxo de pedestres e carros.`,
    videos: [],
    images: Array.from(
      { length: 4 },
      (_, i) =>
        `/imoveis/pontos-comerciais/ponto-comercial-agamenon-magalhaes/${i + 1}.jpeg`
    ),
    amenities: [
      "Avenida Principal",
      "Excelente Visibilidade",
      "1 Banheiro",
      "Alto Fluxo",
    ],
  },

  // 3. GALERIA AGAMENON - ESPAÇOS DISPONÍVEIS
{
  id: "galeria-agamenon-espacos-disponiveis",
  title: "Salas e Lojas Comerciais na Galeria Agamenon",
  price: "A partir de R$ 700 / mês",
  location: "Av. Agamenon Magalhães, Maurício de Nassau, Caruaru - PE",
  coverImage:
    "/imoveis/pontos-comerciais/galeria-agamenon/1.jpeg",
  bathrooms: 2,
  area: "De 12m² a 43m²",
  description: `GALERIA AGAMENON | ESPAÇOS DISPONÍVEIS PARA LOCAÇÃO

Excelente oportunidade para instalar seu negócio na principal avenida de Caruaru! Espaços ideais para consultórios, clínicas de estética, estúdios de Pilates, escritórios, lojas e serviços profissionais.

OPÇÕES DISPONÍVEIS:
- Loja 02 + Sala/Consultório: 43,50 m² — R$ 3.000,00/mês
- Sala Interna: 22,88 m² — R$ 1.500,00/mês
- Loja 03 (Externa): 18,98 m² — R$ 1.500,00/mês
- Sala de Entrada / Recepção: 12,56 m² — R$ 700,00/mês

ESTRUTURA DA GALERIA:
✓ Manutenção das áreas comuns inclusa
✓ Banheiros na galeria
✓ Segurança no período noturno`,
  videos: [],
  images: Array.from(
    { length: 7 },
    (_, i) =>
      `/imoveis/pontos-comerciais/galeria-agamenon/${i + 1}.jpeg`
  ),
  amenities: [
    "Av. Agamenon Magalhães",
    "Opções de Salas e Lojas",
    "Manutenção de Áreas Comuns Inclusa",
    "Segurança Noturna",
    "Banheiros na Galeria",
    "Ideal para Consultórios e Lojas",
  ],
},
  // 4. SALA COMERCIAL À VENDA NO EMPRESARIAL NORDESTE CORPORATE (SEM FOTOS)
  {
  id: "sala-nordeste-corporate-venda",
  title: "Sala Comercial à Venda no Empresarial Nordeste Corporate",
  price: "R$ 330.000",
  location: "Bairro Universitário, Caruaru - PE",
  coverImage: "/placeholder.jpg",
  bathrooms: 1,
  area: "40m²",
  description: `SALA COMERCIAL À VENDA | EMPRESARIAL NORDESTE CORPORATE – CARUARU/PE

Excelente oportunidade para instalar seu negócio em uma localização estratégica: área nobre do bairro Universitário, no polo médico, jurídico e estudantil da cidade.

CARACTERÍSTICAS DO ESPAÇO:
- 40 m² de área
- 01 vaga de garagem
- Portaria 24 horas

Praticidade e localização privilegiada para seu escritório ou consultório.

VALOR DE VENDA: R$ 330.000,00 — aceita financiamento.`,
  videos: [],
  images: [],
  amenities: [
    "40m² de Área",
    "01 Vaga de Garagem",
    "Portaria 24 Horas",
    "Polo Médico, Jurídico e Estudantil",
    "Ideal para Escritório ou Consultório",
    "Aceita Financiamento",
  ],
  },
  // 5. PRÉDIO COMERCIAL COM SALAS NO BAIRRO UNIVERSITÁRIO
  {
  id: "predio-comercial-universitario",
  title: "Prédio Comercial com Salas no Bairro Universitário",
  price: "R$ 15.000 / mês",
  location: "Bairro Universitário, Caruaru - PE",
  coverImage: "/imoveis/pontos-comerciais/predio-comercial-universitario/1.jpeg",
  bathrooms: 8,
  area: "Salas de 30 a 60 m²",
  description: `ALUGO PRÉDIO COMERCIAL – CARUARU/PE

Localização estratégica no bairro Universitário, ao lado do Empresarial Nordeste Corporate e da Unimed Caruaru.

Imóvel onde funcionava a antiga CGU — ideal para escola de cursos, escritórios e clínicas em geral.

TÉRREO:
- 04 vagas de garagem
- Recepção
- Depósito
- Lateral livre para acesso de serviço
- Área verde lateral
- Sala de máquinas
- 01 sala com WC (40 m²)
- 01 sala com WC (60 m²)
- 01 sala com WC + quintal (36 m²)
- Copa
- Cisterna de grande capacidade

1º ANDAR:
- Corredor amplo de circulação
- 05 salas com WC privativo: 55 m², 40 m², 30 m², 40 m² e 40 m²
- Banheiro com acessibilidade

VALOR DA LOCAÇÃO: R$ 15.000,00/mês`,
  videos: [],
  images: Array.from(
    { length: 23 },
    (_, i) => `/imoveis/pontos-comerciais/predio-comercial-universitario/${i + 1}.jpeg`
  ),
  amenities: [
    "Localização ao lado do Nordeste Corporate e da Unimed",
    "04 Vagas de Garagem no Térreo",
    "08 Salas com WC",
    "01 Sala com Quintal",
    "Copa e Depósito",
    "Cisterna de Grande Capacidade",
    "Banheiro com Acessibilidade",
    "Ideal para Cursos, Escritórios e Clínicas",
  ],
  },
  // 6. SALA COMERCIAL E PONTO DE LOJA NO BAIRRO UNIVERSITÁRIO
  {
  id: "sala-loja-universitario",
  title: "Sala Comercial e Ponto de Loja no Bairro Universitário",
  price: "A partir de R$ 1.200 / mês",
  location: "Rua Aracati, Bairro Universitário, Caruaru - PE",
  coverImage: "/imoveis/pontos-comerciais/sala-loja-universitario/1.jpeg",
  bathrooms: 1,
  area: "",
  description: `SALA COMERCIAL E PONTO DE LOJA PARA LOCAÇÃO | BAIRRO UNIVERSITÁRIO – CARUARU/PE

Esquina com a Rua Aracati, próximo ao Colégio Bela Flor.

OPÇÕES DISPONÍVEIS:
- Sala comercial: R$ 1.200,00/mês
- Loja (ponto): R$ 1.400,00/mês`,
  videos: [],
  images: Array.from(
    { length: 27 },
    (_, i) => `/imoveis/pontos-comerciais/sala-loja-universitario/${i + 1}.jpeg`
  ),
  amenities: [
    "Esquina com a Rua Aracati",
    "Próximo ao Colégio Bela Flor",
    "Sala Comercial e Loja",
    "Bairro Universitário",
  ],
  },
  // 7. PONTO COMERCIAL / LOJA NA AV. AGAMENON MAGALHÃES (ALUGADA)
  {
  id: "loja-agamenon-magalhaes",
  title: "Ponto Comercial / Loja na Av. Agamenon Magalhães",
  price: "R$ 28.000 / mês",
  location: "Av. Agamenon Magalhães, Maurício de Nassau, Caruaru - PE",
  coverImage: "/imoveis/pontos-comerciais/loja-agamenon-magalhaes/1.jpeg",
  bathrooms: 4,
  area: "464m² (construção de 297m²)",
  alugado: true,
  description: `LOJA / PONTO COMERCIAL PARA LOCAÇÃO | AV. AGAMENON MAGALHÃES – CARUARU/PE

CARACTERÍSTICAS DO IMÓVEL:
- Área total: 14,5 x 32 m = 464 m²
- Construção: 297 m²
- Imóvel com acessibilidade

TÉRREO:
- Salão principal
- Banheiros
- 01 sala ampla
- Cisterna de 2.000 litros
- 05 vagas de estacionamento

SUPERIOR:
- Copa
- Banheiros
- Depósito

VALOR DA LOCAÇÃO: R$ 28.000,00/mês — IPTU por fora.

ATENÇÃO: imóvel atualmente ALUGADO.`,
  videos: [],
  images: Array.from(
    { length: 12 },
    (_, i) => `/imoveis/pontos-comerciais/loja-agamenon-magalhaes/${i + 1}.jpeg`
  ),
  amenities: [
    "464m² de Área Total",
    "297m² de Construção",
    "05 Vagas de Estacionamento",
    "Salão Principal com Dois Pavimentos",
    "Cisterna de 2.000 Litros",
    "Imóvel com Acessibilidade",
    "Av. Agamenon Magalhães",
    "Imóvel Alugado",
  ],
  },
  // 8. PONTO COMERCIAL NO CENTRO DE CARUARU – PETRÓPOLIS (ALUGADA)
  {
  id: "ponto-comercial-petropolis",
  title: "Ponto Comercial no Centro de Caruaru – Petrópolis",
  price: "R$ 5.500 / mês",
  location: "Petrópolis, Caruaru - PE",
  coverImage: "/imoveis/pontos-comerciais/ponto-comercial-petropolis/1.jpeg",
  bathrooms: 1,
  area: "110m²",
  alugado: true,
  description: `PONTO COMERCIAL PARA LOCAÇÃO | CENTRO DE CARUARU – BAIRRO PETRÓPOLIS

Ponto de referência: ao lado da Loja Rota do Mar.

CARACTERÍSTICAS DO ESPAÇO:
- 5,20 x 22 m = 110 m²
- 01 banheiro

VALOR DA LOCAÇÃO: R$ 5.500,00/mês, incluso IPTU.

ATENÇÃO: imóvel atualmente ALUGADO.`,
  videos: [],
  images: Array.from(
    { length: 5 },
    (_, i) => `/imoveis/pontos-comerciais/ponto-comercial-petropolis/${i + 1}.jpeg`
  ),
  amenities: [
    "110m² (5,20 x 22 m)",
    "01 Banheiro",
    "IPTU Incluso",
    "Centro de Caruaru",
    "Ao Lado da Loja Rota do Mar",
    "Imóvel Alugado",
  ],
  },
  // 9. DUAS SALAS COMERCIAIS INTEGRADAS NO TIMES BUSINESS CENTER (À VENDA)
  {
  id: "sala-comercial-times-business-center",
  title: "Duas Salas Comerciais Integradas no Times Business Center",
  price: "R$ 950.000",
  location: "Maurício de Nassau, Caruaru - PE",
  coverImage: "/imoveis/pontos-comerciais/times-business-center/3.jpeg",
  bathrooms: 3,
  area: "67,27m²",
  description: `DUAS SALAS COMERCIAIS INTEGRADAS À VENDA | TIMES BUSINESS CENTER

Excelente oportunidade para instalar sua empresa ou investir em um dos endereços empresariais mais conhecidos de Caruaru.

Localizado no bairro Maurício de Nassau, próximo à Avenida Agamenon Magalhães e cercado por clínicas, escritórios, farmácias, restaurantes e diversos serviços, o Times Business Center oferece localização estratégica, fácil acesso e grande circulação de profissionais e clientes.

O empreendimento possui 264 salas empresariais e foi projetado para receber diferentes atividades, como consultórios, escritórios de advocacia e contabilidade, imobiliárias, agências, empresas administrativas e prestadores de serviços.

As duas salas disponíveis para venda são reformadas, integradas e possuem ambientes bem distribuídos, proporcionando conforto, organização e funcionalidade. Permanecem no imóvel todos os móveis fixos planejados, permitindo uma instalação mais rápida da nova empresa.

ÁREAS:
• Sala 1: 35,11 m²
• Sala 2: 32,16 m²
• Área total integrada: 67,27 m²

DISTRIBUIÇÃO DOS AMBIENTES:
• Recepção com WC
• Copa equipada
• Banheiro social
• Sala privativa com WC
• Sala de diretoria e reuniões
• Sala administrativa com almoxarifado
• Sala reservada para atendimento

Uma excelente estrutura para clínicas, consultórios, escritórios, empresas administrativas ou investidores que buscam um imóvel comercial pronto e bem localizado.

VALOR DE VENDA: R$ 950.000,00
Imóvel escriturado.`,
  videos: [],
  images: Array.from(
    { length: 10 },
    (_, i) => `/imoveis/pontos-comerciais/times-business-center/${i + 1}.jpeg`
  ),
  amenities: [
    "67,27m² Integrados (35,11 + 32,16 m²)",
    "Duas Salas Reformadas e Integradas",
    "Móveis Fixos Planejados Inclusos",
    "Recepção com WC e Copa Equipada",
    "Sala de Diretoria e Reuniões",
    "Bairro Maurício de Nassau",
    "Próximo à Av. Agamenon Magalhães",
    "Imóvel Escriturado",
  ],
  },
]

// Lista de bairros gerada automaticamente a partir dos imóveis
const bairrosDisponiveis = Array.from(
  new Set(
    pontosComerciais.map((imovel) => getBairro(imovel.location)).filter(Boolean)
  )
).sort((a, b) => a.localeCompare(b, "pt-BR"))

function PropertyCard({ property }: { property: ImovelComercial }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const images =
    property.images && property.images.length > 0
      ? property.images
      : [property.coverImage]

  const totalImages = images.length
  const hasVideos = Boolean(property.videos?.length)

  // Preço: "R$ 1.800 / mês (Incluso ...)" vira "R$ 1.800" + "/mês" menor, para caber no bloco.
  // "Consulte o valor" vira "Sob consulta".
  const isConsulta =
    !property.price || property.price.toLowerCase().includes("consulte")
  const [priceMainRaw, ...priceRest] = (property.price || "").split("/")
  const priceMain = isConsulta ? "Sob consulta" : priceMainRaw.trim()
  const priceSuffix = !isConsulta && priceRest.length > 0 ? "/mês" : ""

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
    <article className="group bg-white rounded-3xl p-2 border border-[#0d3b2e]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#0d3b2e]/30 transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        {/* IMAGEM */}
        <Link
          href={`/imoveis/${property.id}`}
          className="block aspect-[4/3] overflow-hidden relative cursor-pointer bg-muted rounded-2xl"
        >
          <img
            src={images[currentImgIndex] || "/placeholder.jpg"}
            alt={`${property.title} - foto ${currentImgIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* BADGE COMERCIAL */}
          <div className="absolute top-3 left-3 bg-[#0d3b2e] text-white px-3 py-1 text-xs rounded-full font-medium shadow-sm">
            Comercial
          </div>

          {property.alugado && (
            <div className="absolute bottom-3 right-3 bg-red-600 text-white px-3 py-1 text-xs rounded-full font-medium shadow-sm">
              Alugado
            </div>
          )}

          {/* VÍDEO */}
          {hasVideos && (
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 text-[11px] rounded-full font-medium flex items-center gap-1">
              <Play className="h-3 w-3 fill-white" />
              {property.videos && property.videos.length > 1
                ? `${property.videos.length} Vídeos`
                : "Vídeo"}
            </div>
          )}

          {/* CONTADOR DE IMAGENS */}
          {totalImages > 1 && (
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-0.5 rounded-md">
              {currentImgIndex + 1} / {totalImages}
            </div>
          )}

          {/* NAVEGAÇÃO DAS IMAGENS */}
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

        {/* INFORMAÇÕES */}
        <div className="px-3 sm:px-4 pt-4 pb-2">
          {/* LOCALIZAÇÃO */}
          <span className="text-[11px] uppercase tracking-wider text-muted-foreground flex items-start gap-1 font-medium leading-snug">
            <MapPin className="h-3.5 w-3.5 text-[#0d3b2e] shrink-0 mt-px" />
            {property.location}
          </span>

          {/* TÍTULO */}
          <Link href={`/imoveis/${property.id}`} className="block">
            <h3 className="text-base font-semibold text-foreground group-hover:text-[#0d3b2e] transition-colors mt-2 line-clamp-2 font-serif">
              {property.title}
            </h3>
          </Link>

          {/* CARACTERÍSTICAS */}
          <div className="flex flex-wrap items-center gap-1.5 mt-4">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#0d3b2e]/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
              <Building2 className="h-3.5 w-3.5 text-[#0d3b2e]" />
              Ponto Comercial
            </span>

            {property.area && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#0d3b2e]/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                <Maximize className="h-3.5 w-3.5 text-[#0d3b2e]" />
                {property.area}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* PREÇO + CTA */}
      <div className="px-1 sm:px-2 pb-2 pt-2">
        <div className="rounded-2xl bg-[#b85d19] pl-4 pr-2 py-2 flex items-center justify-between gap-2">
          <span className="min-w-0 flex items-baseline gap-1 whitespace-nowrap">
            <span className="font-serif font-bold text-white text-sm leading-none">
              {priceMain}
            </span>

            {priceSuffix && (
              <span className="text-[11px] font-medium text-white/80 leading-none">
                {priceSuffix}
              </span>
            )}
          </span>

          <Button
            asChild
            size="sm"
            className="rounded-full bg-[#0d3b2e] hover:bg-white hover:text-[#0d3b2e] text-white transition-all duration-200 h-9 px-3 shrink-0 text-[13px] font-semibold"
          >
            <Link href={`/imoveis/${property.id}`}>Ver Detalhes</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

function PontosComerciaisContent() {
  const [tipoFiltro, setTipoFiltro] = useState<string>("todos")
  const [bairroFiltro, setBairroFiltro] = useState<string>("todos")
  const [faixaPrecoFiltro, setFaixaPrecoFiltro] = useState<string>("todas")

  const imoveisFiltrados = pontosComerciais.filter((imovel) => {
    // 1. Tipo Comercial
    if (tipoFiltro !== "todos") {
      const title = imovel.title.toLowerCase()
      if (tipoFiltro === "sala" && !title.includes("sala")) return false
      if (tipoFiltro === "ponto" && !title.includes("ponto")) return false
    }

    // 2. Bairro (Caruaru)
    if (bairroFiltro !== "todos" && getBairro(imovel.location) !== bairroFiltro) {
      return false
    }

    // 3. Faixa de Valor
    if (faixaPrecoFiltro !== "todas") {
      const valor = parsePrecoComercial(imovel.price)
      if (valor > 0) {
        if (faixaPrecoFiltro === "ate_2000" && valor > 2000) return false
        if (faixaPrecoFiltro === "2000_5000" && (valor < 2000 || valor > 5000)) return false
        if (faixaPrecoFiltro === "acima_5000" && valor < 5000) return false
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
            Pontos Comerciais
          </h1>

          <p className="text-white/75 mt-3 max-w-2xl text-sm md:text-base">
            Salas, lojas e espaços comerciais estratégicos para o crescimento do seu negócio em Caruaru.
          </p>
        </div>
      </section>

      <section className="py-12 bg-[#faf7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* BARRA DE FILTROS HIGH-END / ESTILO PORTAL DE LUXO */}
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl shadow-black/5 border border-border/60 mb-12">
            <div className="flex items-center justify-between px-2 mb-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-[#b85d19]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#0d3b2e]">
                  Filtrar Espaços Comerciais
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-muted-foreground">
                  <strong className="text-[#0d3b2e] font-bold">{imoveisFiltrados.length}</strong> {imoveisFiltrados.length === 1 ? "espaço encontrado" : "espaços encontrados"}
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
              
              {/* CAMPO 1: TIPO DE ESPAÇO */}
              <div className="relative p-3.5 px-4 hover:bg-white transition-colors duration-200 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[#0d3b2e]/5 text-[#0d3b2e] shrink-0">
                  <Briefcase className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#b85d19]">
                    Tipo de Espaço
                  </label>
                  <div className="relative mt-0.5">
                    <select
                      value={tipoFiltro}
                      onChange={(e) => setTipoFiltro(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-foreground focus:outline-none appearance-none cursor-pointer pr-6 truncate"
                    >
                      <option value="todos">Todos os Espaços</option>
                      <option value="sala">Salas Comerciais</option>
                      <option value="ponto">Pontos / Lojas</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* CAMPO 2: BAIRRO (CARUARU) */}
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

              {/* CAMPO 3: FAIXA DE VALOR MENSAL */}
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
                      <option value="2000_5000">R$ 2.000 – R$ 5.000 / mês</option>
                      <option value="acima_5000">Acima de R$ 5.000 / mês</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* GRID DOS IMÓVEIS FILTRADOS (4 COLUNAS) */}
          {imoveisFiltrados.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {imoveisFiltrados.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-border">
              <p className="text-muted-foreground text-sm">
                Nenhum ponto comercial encontrado com os filtros selecionados.
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

export default function PontosComerciaisPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Carregando pontos comerciais...</div>}>
      <PontosComerciaisContent />
    </Suspense>
  )
}