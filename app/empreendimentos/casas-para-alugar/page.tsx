"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Bed, Bath, Car, Maximize, MapPin, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Lightbox } from "@/components/lightbox"
import { siteConfig } from "@/lib/data"

// =========================================================================
// 🏡 CASAS PARA ALUGAR (EDITE SEUS IMÓVEIS AQUI)
// =========================================================================
const casasAluguel = [
  {
    id: "casa-aluguel-01",
    title: "Casa em Condomínio Fechado",
    price: "R$ 8.500 / mês",
    location: "Candeias, Jaboatão dos Guararapes - PE",
    bedrooms: 4,
    bathrooms: 4,
    parking: 3,
    area: "280m²",
    description: "Casa ampla com área gourmet, piscina privativa e quintal arborizado em condomínio com segurança armada 24h.",
    video: null,
    images: [
      "/imoveis/casas-para-alugar/casa-1/1.jpg",
      "/imoveis/casas-para-alugar/casa-1/2.jpg",
    ],
    amenities: ["Piscina privativa", "Churrasqueira", "Jardim", "Segurança 24h"],
  },

  {
    id: "casa-duplex-indianopolis-aluguel",
    title: "Casa Duplex para Locação no Bairro Indianópolis",
    price: "R$ 2.000 / mês",
    location: "Indianópolis, Caruaru - PE",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "65m²",
    description: `CASA DUPLEX PARA LOCAÇÃO | INDIANÓPOLIS – CARUARU/PE

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

VALOR DA LOCAÇÃO: R$ 2.000,00/mês
Condomínio e IPTU inclusos. Garantia mediante caução.

OBS.: a casa também está à venda por R$ 225.000,00.`,
    video: null,
    images: Array.from(
      { length: 16 },
      (_, i) => `/imoveis/casas-para-venda/casa-duplex-indianopolis/${i + 1}.jpeg`
    ),
    amenities: [
      "Posição Nascente",
      "01 Suíte",
      "Cozinha Planejada",
      "Cisterna para 10 Mil Litros",
      "Cerca Elétrica e Câmeras de Segurança",
      "Condomínio e IPTU Inclusos",
      "Garantia mediante Caução",
      "01 Vaga de Garagem",
    ],
  },

  {
    id: "casa-reformada-petropolis-aluguel",
    title: "Magnífica Casa Reformada para Locação no Petrópolis",
    price: "R$ 5.500 / mês (Incluso IPTU)",
    location: "Petrópolis, Caruaru - PE",
    bedrooms: 3,
    bathrooms: 3,
    parking: 4,
    area: "258m²",
    alugado: true,
    description: `CASA REFORMADA PARA LOCAÇÃO | PETRÓPOLIS – CARUARU/PE

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

VALOR DA LOCAÇÃO: R$ 5.500,00/mês, incluso IPTU.

ATENÇÃO: imóvel atualmente ALUGADO, porém disponível para venda por R$ 750.000,00.`,
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
      "IPTU Incluso",
      "Imóvel Alugado - Disponível para Venda",
    ],
  },
  // 4. CASA PARA LOCAÇÃO COMERCIAL NO MAURÍCIO DE NASSAU
  {
  id: "casa-mauricio-de-nassau-comercial",
  title: "Casa para Locação Comercial no Maurício de Nassau",
  price: "R$ 5.000 / mês",
  location: "Maurício de Nassau, Caruaru - PE",
  coverImage: "/imoveis/casas-para-alugar/casa-mauricio-de-nassau-comercial/1.jpeg",
  bedrooms: 4,
  bathrooms: 4,
  parking: 2,
  area: "506m²",
  description: `CASA PARA LOCAÇÃO COMERCIAL | ÁREA NOBRE DO BAIRRO MAURÍCIO DE NASSAU – CARUARU/PE

Posição sul, com estrutura completa e área externa generosa — ideal para uso comercial.

CARACTERÍSTICAS DO IMÓVEL:
- Terreno: 22 x 23 m — 506 m²
- Varanda
- 01 sala para 02 ambientes
- 01 sala de TV
- 04 suítes, sendo 02 máster
- Espaço gourmet com churrasqueira
- Piscina
- Garagem para 02 veículos
- Área externa

VALOR DA LOCAÇÃO: R$ 5.000,00/mês — IPTU por fora.`,
  images: Array.from(
    { length: 22 },
    (_, i) => `/imoveis/casas-para-alugar/casa-mauricio-de-nassau-comercial/${i + 1}.jpeg`
  ),
  amenities: [
    "Terreno de 506m² (22 x 23 m)",
    "04 Suítes, sendo 02 Máster",
    "Espaço Gourmet com Churrasqueira",
    "Piscina",
    "Área Externa",
    "Garagem para 02 Veículos",
    "Posição Sul",
    "IPTU por Fora",
  ],
  },
  // 5. CASA NO CONDOMÍNIO PORTAL DO SOL (ALUGADA)
  {
  id: "casa-portal-do-sol-aluguel",
  title: "Casa no Condomínio Portal do Sol",
  price: "R$ 3.500 / mês",
  location: "Condomínio Portal do Sol, Caruaru - PE",
  coverImage: "/imoveis/casas-para-venda/casa-portal-do-sol/1.jpeg",
  bedrooms: 3,
  bathrooms: 2,
  parking: 2,
  area: "150m²",
  alugado: true,
  description: `CASA PARA LOCAÇÃO | CONDOMÍNIO PORTAL DO SOL – CARUARU/PE

Excelente oportunidade para quem busca conforto, segurança e qualidade de vida em um condomínio completo.

CARACTERÍSTICAS DO IMÓVEL:
- Área de 150 m²
- 03 quartos, sendo 01 suíte
- 02 salas
- Cozinha
- Quintal
- 02 vagas de garagem

ESTRUTURA DO CONDOMÍNIO:
- Portaria 24 horas
- Piscina
- Quadra poliesportiva
- Salão de festas
- Parquinho infantil

VALOR DA LOCAÇÃO: R$ 3.500,00/mês — incluso condomínio e IPTU.

ATENÇÃO: imóvel atualmente ALUGADO, porém disponível para venda por R$ 620.000,00.`,
  images: Array.from(
    { length: 17 },
    (_, i) => `/imoveis/casas-para-venda/casa-portal-do-sol/${i + 1}.jpeg`
  ),
  amenities: [
    "150m² de Área",
    "01 Suíte",
    "02 Salas",
    "Quintal",
    "02 Vagas de Garagem",
    "Portaria 24 Horas",
    "Piscina e Quadra Poliesportiva",
    "Condomínio e IPTU Inclusos",
    "Imóvel Alugado - Disponível para Venda",
  ],
  },
  // 6. CASA MOBILIADA NO PINHEIROPOLIS (ALUGADA)
  {
  id: "casa-pinheiropolis-aluguel",
  title: "Casa Mobiliada no Pinheiropolis",
  price: "R$ 3.500 / mês",
  location: "Pinheiropolis, Caruaru - PE",
  coverImage: "/imoveis/casas-para-alugar/casa-pinheiropolis/1.jpeg",
  bedrooms: 2,
  bathrooms: 2,
  parking: 3,
  area: "180m²",
  alugado: true,
  description: `CASA PARA LOCAÇÃO | PINHEIROPOLIS – CARUARU/PE

CARACTERÍSTICAS DO IMÓVEL:
- Área total: 6 x 30 m = 180 m²
- 02 quartos, sendo 01 suíte com closet
- Sala para 02 ambientes
- 01 banheiro social
- Jardim lateral
- Vaga coberta para 03 veículos
- Cisterna com capacidade de 12 mil litros
- 01 dependência / quarto depósito

MOBÍLIA QUE FICA NO IMÓVEL:
- Sala: mesa com 4 cadeiras, sofá e home theater
- Cozinha: fogão, micro-ondas e geladeira inox, toda mobiliada e planejada
- Quarto social: guarda-roupa planejado
- Quarto suíte: cama e closet planejado
- Área de serviço: máquina de lavar

VALOR DA LOCAÇÃO: R$ 3.500,00/mês, incluso IPTU.

CONDIÇÕES: garantia mediante caução.

ATENÇÃO: imóvel atualmente ALUGADO.`,
  images: Array.from(
    { length: 17 },
    (_, i) => `/imoveis/casas-para-alugar/casa-pinheiropolis/${i + 1}.jpeg`
  ),
  amenities: [
    "180m² de Área Total",
    "Totalmente Mobiliado",
    "01 Suíte com Closet",
    "Sala para 02 Ambientes",
    "Vaga Coberta para 03 Veículos",
    "Cisterna de 12 Mil Litros",
    "Jardim Lateral",
    "IPTU Incluso",
    "Imóvel Alugado",
  ],
  },
]

export default function CasasParaAlugarPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const activeProperty = casasAluguel.find((p) => p.id === selectedId)
  const mediaItems = activeProperty ? activeProperty.images.map((src) => ({ type: "image" as const, src, alt: activeProperty.title })) : []

  return (
    <>
      <section className="pt-28 pb-8 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/empreendimentos" className="inline-flex items-center text-sm text-primary-foreground/70 hover:text-primary-foreground mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Categorias
          </Link>
          <span className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60 block">Categoria</span>
          <h1 className="font-serif text-4xl md:text-5xl font-light mt-2">Casas para Alugar</h1>
          <p className="text-primary-foreground/70 mt-3 max-w-2xl">Casas e sobrados confortáveis para locação residencial.</p>
        </div>
      </section>

      {activeProperty && (
        <section className="py-12 bg-background border-b border-border scroll-mt-20" id="detalhes">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <button onClick={() => setSelectedId(null)} className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 font-medium">
              <ArrowLeft className="mr-2 h-4 w-4" /> Fechar detalhes
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
              <div className="aspect-[4/3] overflow-hidden cursor-pointer rounded-lg" onClick={() => { setLightboxIndex(0); setLightboxOpen(true); }}>
                <img src={activeProperty.images[0] || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"} alt={activeProperty.title} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <span className="inline-flex items-center gap-1 text-sm text-muted-foreground mb-2"><MapPin className="h-4 w-4" /> {activeProperty.location}</span>
                <h2 className="font-serif text-3xl font-semibold">{activeProperty.title}</h2>
                <div className="flex flex-wrap items-center gap-6 my-6 py-4 border-y border-border">
                  <div className="flex items-center gap-2 text-muted-foreground"><Bed className="h-5 w-5" /> <span className="font-medium text-foreground">{activeProperty.bedrooms}</span> Quartos</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><Bath className="h-5 w-5" /> <span className="font-medium text-foreground">{activeProperty.bathrooms}</span> Banheiros</div>
                  {activeProperty.parking > 0 && (
                    <div className="flex items-center gap-2 text-muted-foreground"><Car className="h-5 w-5" /> <span className="font-medium text-foreground">{activeProperty.parking}</span> Vagas</div>
                  )}
                  <div className="flex items-center gap-2 text-muted-foreground"><Maximize className="h-5 w-5" /> <span className="font-medium text-foreground">{activeProperty.area}</span></div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Sobre o Imóvel</h3>
                <p className="text-muted-foreground leading-relaxed">{activeProperty.description}</p>
              </div>
              <div className="lg:col-span-1">
                <div className="sticky top-28 bg-secondary p-6 rounded-xl border border-border">
                  <span className="text-xs uppercase text-muted-foreground">Valor</span>
                  <p className="font-serif text-3xl font-semibold my-2">{activeProperty.price}</p>
                  {activeProperty.alugado && (
                    <p className="text-sm font-medium text-red-600">Imóvel alugado no momento</p>
                  )}
                  <Button asChild className="w-full mt-4" size="lg">
                    <a href={`${siteConfig.whatsappLink}?text=Tenho interesse na casa para alugar: ${activeProperty.title}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" /> Falar no WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-muted-foreground mb-8">Mostrando <span className="font-medium text-foreground">{casasAluguel.length}</span> imóveis</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {casasAluguel.map((property) => (
              <article key={property.id} className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="aspect-[4/3] overflow-hidden relative cursor-pointer" onClick={() => { setSelectedId(property.id); const el = document.getElementById("detalhes"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}>
                    <img src={property.images[0] || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"} alt={property.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground px-3 py-1 text-xs rounded font-medium">Locação</div>
                    {property.alugado && (
                      <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 text-xs rounded font-medium">Alugado</div>
                    )}
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {property.location}</span>
                    <h3 className="text-base font-medium text-foreground group-hover:text-accent transition-colors mt-1.5 line-clamp-1 cursor-pointer" onClick={() => { setSelectedId(property.id); const el = document.getElementById("detalhes"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}>{property.title}</h3>
                    <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Bed className="h-3.5 w-3.5" /> {property.bedrooms}</span>
                      <span className="flex items-center gap-1"><Bath className="h-3.5 w-3.5" /> {property.bathrooms}</span>
                      {property.parking > 0 && (
                        <span className="flex items-center gap-1"><Car className="h-3.5 w-3.5" /> {property.parking}</span>
                      )}
                      <span className="flex items-center gap-1"><Maximize className="h-3.5 w-3.5" /> {property.area}</span>
                    </div>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-lg font-light text-foreground">{property.price}</span>
                    <Button size="sm" onClick={() => { setSelectedId(property.id); const el = document.getElementById("detalhes"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}>Ver Detalhes</Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Lightbox items={mediaItems} initialIndex={lightboxIndex} isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} />
    </>
  )
}