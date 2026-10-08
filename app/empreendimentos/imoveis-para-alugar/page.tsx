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
  /** true = já alugado (card cinza com selo). Para liberar de novo, apague a linha ou use false. */
  alugado?: boolean
}

function parsePrecoAluguel(priceStr: string): number {
  if (!priceStr || priceStr.toLowerCase().includes("consulte")) return 0
  const cleanStr = priceStr.split("/")[0].replace(/[^\d]/g, "")
  return cleanStr ? parseInt(cleanStr, 10) : 0
}

function getBairro(location: string): string {
  return location.split(",")[0].trim()
}

// ============================================================
// COMO MARCAR UM IMÓVEL COMO ALUGADO:
// dentro do imóvel, adicione a linha:   alugado: true,
// Para deixar disponível de novo, apague a linha (ou use false).
// ============================================================

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
    images: [
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/2.jpeg",
      ...Array.from(
        { length: 15 },
        (_, i) =>
          `/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/${i + 1}.jpeg`
      ).filter(
        (img) =>
          img !==
          "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/2.jpeg"
      ),
    ],
    amenities: ["100% Mobiliado", "Piscina com Deck", "Academia Equipada"],
    alugado: true,
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
    images: [
      "/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/1.jpeg",
      ...Array.from(
        { length: 9 },
        (_, i) =>
          `/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/${i + 1}.jpeg`
      ).filter(
        (img) =>
          img !==
          "/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/1.jpeg"
      ),
    ],
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
    images: [
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/1.jpeg",
      ...Array.from(
        { length: 33 },
        (_, i) =>
          `/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/${i + 1}.jpeg`
      ).filter(
        (img) =>
          img !==
          "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/1.jpeg"
      ),
    ],
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
    images: [
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/1.jpeg",
      ...Array.from(
        { length: 29 },
        (_, i) =>
          `/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/${i + 1}.jpeg`
      ).filter(
        (img) =>
          img !==
          "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/1.jpeg"
      ),
    ],
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
    images: [
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/1.jpeg",
      ...Array.from(
        { length: 13 },
        (_, i) =>
          `/imoveis/apartamentos-para-alugar/edificio-joao-soares/${i + 1}.jpeg`
      ).filter(
        (img) =>
          img !==
          "/imoveis/apartamentos-para-alugar/edificio-joao-soares/1.jpeg"
      ),
    ],
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
    images: [
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/7.jpeg",
      ...Array.from(
        { length: 10 },
        (_, i) =>
          `/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/${i + 1}.jpeg`
      ).filter(
        (img) =>
          img !==
          "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/7.jpeg"
      ),
    ],
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
    images: [
      "/imoveis/apartamentos-para-alugar/jardim-das-orquideas/1.jpeg",
      ...Array.from(
        { length: 13 },
        (_, i) =>
          `/imoveis/apartamentos-para-alugar/jardim-das-orquideas/${i + 1}.jpeg`
      ).filter(
        (img) =>
          img !==
          "/imoveis/apartamentos-para-alugar/jardim-das-orquideas/1.jpeg"
      ),
    ],
    amenities: ["Posição Norte", "2º Andar", "Condomínio, IPTU e Gás Inclusos"],
  },

  // 12. EDF. MONALISA
  {
    id: "ap-edificio-monalisa-mauricio-de-nassau",
    tipo: "apartamento",
    title: "Apartamento no Edf. Monalisa - Maurício de Nassau",
    price: "R$ 4.000 / mês",
    location: "Maurício de Nassau, Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-alugar/edificio-monalisa/1.jpeg",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    area: "95m²",
    description: `APARTAMENTO PARA LOCAÇÃO | EDF. MONALISA – MAURÍCIO DE NASSAU

Excelente apartamento na área nobre do bairro Maurício de Nassau.
Localizado em frente ao Colégio Diocesano, ao lado do Shopping Difusora e próximo ao centro da cidade.

ÁREA E ESTRUTURA:
- Área: 95 m²
- 03 quartos, sendo 01 suíte
- Varanda
- 01 WC social
- 01 WC serviço
- 02 vagas de garagem cobertas

ESTRUTURA DO CONDOMÍNIO:
- Piscina aquecida
- Mini campo
- Sala de jogos
- Salão de festas
- Área gourmet com churrasqueira
- Parquinho
- Área de convivência

VALOR DE LOCAÇÃO: R$ 4.000,00/mês (Condomínio e IPTU inclusos).`,
    videos: [],
    images: [
      "/imoveis/apartamentos-para-alugar/edificio-monalisa/1.jpeg",
      ...Array.from(
        { length: 17 },
        (_, i) =>
          `/imoveis/apartamentos-para-alugar/edificio-monalisa/${i + 1}.jpeg`
      ).filter(
        (img) =>
          img !==
          "/imoveis/apartamentos-para-alugar/edificio-monalisa/1.jpeg"
      ),
    ],
    amenities: [
      "Em Frente ao Colégio Diocesano",
      "Ao Lado do Shopping Difusora",
      "1 Suíte Privativa",
      "Varanda",
      "2 Vagas Cobertas",
      "Piscina Aquecida",
      "Condomínio e IPTU Inclusos",
    ],
  },
// 13. TERRAÇO PORTUGAL
{
  id: "ap-terraco-portugal-universitario",
  tipo: "apartamento",
  title: "Apartamento Mobiliado no Condomínio Terraço Portugal",
  price: "R$ 2.600 / mês",
  location: "Universitário, Caruaru - PE",
  coverImage:
    "/imoveis/apartamentos-para-alugar/terraco-portugal/9.jpeg",
  bedrooms: 2,
  bathrooms: 1,
  parking: 1,
  area: "50m²",
  description: `APARTAMENTO MOBILIADO PARA LOCAÇÃO | TERRAÇO PORTUGAL – CARUARU/PE

Apartamento mobiliado na Av. Portugal, no condomínio Terraço Portugal.

CARACTERÍSTICAS DO IMÓVEL:
- Mobiliado
- Área: 50 m²
- 02 quartos
- 01 banheiro
- 01 vaga de garagem

ESTRUTURA DO CONDOMÍNIO:
- Portaria 24 horas
- Piscina
- Academia
- Mini mercado
- Salão de festas

VALOR DE LOCAÇÃO: R$ 2.600,00/mês (Condomínio e IPTU inclusos).
Garantia: caução.`,
  videos: [],
  images: [
    "/imoveis/apartamentos-para-alugar/terraco-portugal/9.jpeg",
    ...Array.from(
      { length: 10 },
      (_, i) =>
        `/imoveis/apartamentos-para-alugar/terraco-portugal/${i + 1}.jpeg`
    ).filter(
      (img) =>
        img !==
        "/imoveis/apartamentos-para-alugar/terraco-portugal/9.jpeg"
    ),
  ],
  amenities: [
    "Mobiliado",
    "Av. Portugal",
    "Portaria 24h",
    "Piscina",
    "Academia",
    "Mini Mercado",
    "Salão de Festas",
    "1 Vaga de Garagem",
    "Condomínio e IPTU Inclusos",
  ],
},

// 14. CASA NO BAIRRO PETRÓPOLIS
{
  id: "casa-petropolis-caruaru",
  tipo: "casa",
  title: "Casa Espaçosa com Quintal no Bairro Petrópolis",
  price: "R$ 3.500 / mês (Incluso IPTU)",
  location: "Petrópolis, Caruaru - PE",
  coverImage:
    "/imoveis/casas-para-alugar/casa-petropolis/1.jpeg",
  bedrooms: 4,
  bathrooms: 2,
  parking: 2,
  area: "200m²",
  description: `CASA PARA ALUGAR NO BAIRRO PETRÓPOLIS – CARUARU/PE

Excelente localização, próxima ao Centro, à Faculdade FAFICA, ao Supermercado Atacadão e a farmácias.

ÁREAS DO IMÓVEL:
- Área: 200 m²

CARACTERÍSTICAS DO IMÓVEL:
- 04 quartos
- 02 banheiros
- Garagem para 02 carros
- 03 salas
- Cozinha projetada
- Varanda
- Quintal enorme

Uma ótima oportunidade para quem busca espaço, conforto e praticidade em uma das melhores localizações de Caruaru.

VALOR DE LOCAÇÃO: R$ 3.500,00/mês (IPTU incluso).`,
  videos: [],
  images: [
    "/imoveis/casas-para-alugar/casa-petropolis/6.jpeg",
    ...Array.from(
      { length: 12 },
      (_, i) =>
        `/imoveis/casas-para-alugar/casa-petropolis/${i + 1}.jpeg`
    ).filter(
      (img) =>
        img !==
        "/imoveis/casas-para-alugar/casa-petropolis/1.jpeg"
    ),
  ],
  amenities: [
    "4 Quartos",
    "3 Salas",
    "Cozinha Projetada",
    "Quintal Enorme",
    "Varanda",
    "Próximo à FAFICA",
    "Próximo ao Atacadão e Centro",
    "IPTU Incluso",
  ],
},

  // 13. EKO HOME CLUB - TORRE IPÊ
  {
    id: "ap-eko-home-club-torre-ipe-aluguel",
    tipo: "apartamento",
    title: "Apartamento para Locação no Eko Home Club – Torre Ipê",
    price: "R$ 2.700 / mês",
    location: "Universitário, Caruaru - PE",
    coverImage: "/imoveis/apartamentos-para-venda/eko-home-club-torre-ipe/13.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    parking: 0,
    area: "60m²",
    alugado: true,
    description: `APARTAMENTO PARA LOCAÇÃO | EKO HOME CLUB – TORRE IPÊ – CARUARU/PE

Localizado em uma das áreas mais valorizadas do bairro Universitário, próximo aos principais polos médico, jurídico e estudantil da cidade.

CARACTERÍSTICAS DO IMÓVEL:
- 60 m² de área privativa
- Andar alto e posição sul
- 02 quartos, sendo 01 suíte
- Quartos com ar-condicionado e guarda-roupas
- Sala para 02 ambientes, com iluminação projetada
- Cozinha ampla com móveis planejados, cooktop e forno embutido

VALOR DA LOCAÇÃO: R$ 2.700,00/mês
Condomínio e IPTU inclusos.
Locação mediante caução equivalente a 03 meses de aluguel.

OBS.: o mesmo apartamento também está à venda por R$ 410.000,00.

ATENÇÃO: imóvel atualmente ALUGADO.`,
    videos: [],
    images: Array.from(
      { length: 13 },
      (_, i) => `/imoveis/apartamentos-para-venda/eko-home-club-torre-ipe/${i + 1}.jpeg`
    ),
    amenities: [
      "60m² de Área Privativa",
      "Andar Alto - Posição Sul",
      "01 Suíte",
      "Ar-condicionado nos Quartos",
      "Cozinha com Móveis Planejados, Cooktop e Forno",
      "Condomínio e IPTU Inclusos",
      "Caucão de 03 Meses",
      "Bairro Universitário",
      "Imóvel Alugado",
    ],
  },

  // 14. CASA DUPLEX | INDIANÓPOLIS
  {
    id: "casa-duplex-indianopolis-aluguel",
    tipo: "casa",
    title: "Casa Duplex para Locação no Bairro Indianópolis",
    price: "R$ 2.000 / mês",
    location: "Indianópolis, Caruaru - PE",
    coverImage: "/imoveis/casas-para-venda/casa-duplex-indianopolis/16.jpeg",
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
    videos: [],
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
      "Condomínio e IPTU Inclusos",
      "Garantia mediante Caução",
      "01 Vaga de Garagem",
    ],
  },

  // 15. MAGNÍFICA CASA REFORMADA | PETRÓPOLIS (ALUGADA)
  {
    id: "casa-reformada-petropolis-aluguel",
    tipo: "casa",
    title: "Magnífica Casa Reformada para Locação no Petrópolis",
    price: "R$ 5.500 / mês",
    location: "Petrópolis, Caruaru - PE",
    coverImage: "/imoveis/casas-para-venda/casa-reformada-petropolis/23.jpeg",
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
    videos: [],
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
  // 16. APARTAMENTO MOBILIADO NO EDIFÍCIO PLAZA (ALUGADA)
  {
  id: "ap-edf-plaza-caruaru-aluguel",
  tipo: "apartamento",
  title: "Apartamento Mobiliado no Edifício Plaza",
  price: "R$ 3.500 / mês",
  location: "Edifício Plaza, Caruaru - PE",
  coverImage: "/imoveis/apartamentos-para-alugar/ap-edf-plaza-caruaru/1.jpeg",
  bedrooms: 3,
  bathrooms: 3,
  parking: 1,
  area: "78m²",
  alugado: true,
  description: `APARTAMENTO PARA LOCAÇÃO | EDF. PLAZA – CARUARU/PE

Localizado na área mais nobre e valorizada da cidade, a 30 m da Avenida Agamenon Magalhães. Próximo a padarias, mercados, escolas e shopping: perto de tudo para tornar sua vida mais prática.

CARACTERÍSTICAS DO IMÓVEL:
- 78 m²
- Sala para dois ambientes integrados
- 03 quartos, sendo 01 suíte
- Cozinha
- WC social
- Área de serviço
- WC de serviço
- 01 vaga de garagem

DIFERENCIAIS:
- Mobília fixa de alta qualidade
- Ar-condicionado nos 03 quartos
- Automação com comando por voz no Alexa

CONDOMÍNIO:
- 02 elevadores
- Piscina adulto e infantil
- Salão de festas
- Quadra poliesportiva

VALOR DA LOCAÇÃO: R$ 3.500,00/mês — incluso condomínio e IPTU.

ATENÇÃO: imóvel atualmente ALUGADO.`,
  videos: [],
  images: Array.from(
    { length: 14 },
    (_, i) => `/imoveis/apartamentos-para-alugar/ap-edf-plaza-caruaru/${i + 1}.jpeg`
  ),
  amenities: [
    "78m² de Área",
    "Mobília Fixa de Alta Qualidade",
    "Ar-condicionado nos 03 Quartos",
    "Automação por Voz (Alexa)",
    "01 Suíte",
    "01 Vaga de Garagem",
    "Condomínio e IPTU Inclusos",
    "Piscina Adulto e Infantil",
    "Quadra Poliesportiva",
    "Imóvel Alugado",
  ],
  },
  // 17. FLAT MOBILIADO NO LIFE CENTER (SEM FOTOS)
  {
  id: "ap-life-center-flat-mobiliado",
  tipo: "apartamento",
  title: "Flat Mobiliado no Life Center",
  price: "R$ 2.500 / mês",
  location: "Life Center, Caruaru - PE",
  coverImage: "/placeholder.jpg",
  bedrooms: 1,
  bathrooms: 1,
  parking: 0,
  area: "40m²",
  description: `FLAT MOBILIADO PARA LOCAÇÃO | LIFE CENTER – CARUARU/PE

CARACTERÍSTICAS DO IMÓVEL:
- 40 m²
- Sala para 02 ambientes
- Cozinha equipada
- Ar-condicionado, TV e guarda-roupa

CONDOMÍNIO:
- Portaria 24 horas
- Academia
- Área gourmet equipada com churrasqueira
- Espaço home office
- Mini mercado

VALOR DA LOCAÇÃO: R$ 2.500,00/mês — incluso condomínio, IPTU e estacionamento.

CONDIÇÕES:
- Garantia: caução
- Água, gás e energia são consumos individuais
- Vaga de garagem opcional, contratada diretamente com o condomínio`,
  videos: [],
  images: [],
  amenities: [
    "40m² de Área",
    "Cozinha Equipada",
    "Portaria 24 Horas",
    "Academia",
    "Área Gourmet com Churrasqueira",
    "Espaço Home Office",
    "Mini Mercado",
    "Condomínio, IPTU e Estacionamento Inclusos",
    "Garantia mediante Caução",
  ],
  },
  // 18. FLAT MOBILIADO NO EDIFÍCIO MULTIPORTO
  {
  id: "ap-flat-multiporto-indianopolis",
  tipo: "apartamento",
  title: "Flat Mobiliado no Edifício Multiporto",
  price: "R$ 2.200 / mês",
  location: "Indianópolis, Caruaru - PE",
  coverImage: "/imoveis/apartamentos-para-alugar/ap-flat-multiporto-indianopolis/1.jpeg",
  bedrooms: 1,
  bathrooms: 1,
  parking: 0,
  area: "35m²",
  description: `FLAT MOBILIADO PARA LOCAÇÃO | EDF. MULTIPORTO – INDIANÓPOLIS/CARUARU-PE

CARACTERÍSTICAS DO IMÓVEL:
- 35 m²
- 01 sala integrada à cozinha
- 01 quarto
- 01 banheiro

VALOR DA LOCAÇÃO: R$ 2.200,00/mês — incluso condomínio e IPTU.

CONDIÇÕES: garantia mediante caução.`,
  videos: [],
  images: Array.from(
    { length: 10 },
    (_, i) => `/imoveis/apartamentos-para-alugar/ap-flat-multiporto-indianopolis/${i + 1}.jpeg`
  ),
  amenities: [
    "35m² de Área",
    "Mobiliado",
    "Sala Integrada à Cozinha",
    "Condomínio e IPTU Inclusos",
    "Garantia mediante Caução",
  ],
  },
  // 19. APARTAMENTO PARA LOCAÇÃO NO BAIRRO UNIVERSITÁRIO (ALUGADA)
  {
  id: "ap-universitario-aracati-aluguel",
  tipo: "apartamento",
  title: "Apartamento para Locação no Bairro Universitário",
  price: "R$ 1.200 / mês",
  location: "Bairro Universitário, Caruaru - PE",
  coverImage: "/imoveis/apartamentos-para-alugar/ap-universitario-aracati/1.jpeg",
  bedrooms: 2,
  bathrooms: 1,
  parking: 0,
  area: "50m²",
  alugado: true,
  description: `APARTAMENTO PARA LOCAÇÃO | BAIRRO UNIVERSITÁRIO – CARUARU/PE

Próximo ao Colégio Bela Flor, na Rua Aracati, Bairro Universitário.

CARACTERÍSTICAS DO IMÓVEL:
- 1º andar (escada)
- 50 m²
- Sala ampla
- 02 quartos
- Cozinha integrada com área de serviço
- 01 banheiro
- SEM vaga de garagem

VALOR DA LOCAÇÃO: R$ 1.200,00/mês, incluso IPTU.

Água e energia são consumos individuais.

ATENÇÃO: imóvel atualmente ALUGADO.`,
  videos: [],
  images: Array.from(
    { length: 9 },
    (_, i) => `/imoveis/apartamentos-para-alugar/ap-universitario-aracati/${i + 1}.jpeg`
  ),
  amenities: [
    "50m² de Área",
    "Sala Ampla",
    "02 Quartos",
    "Cozinha Integrada com Área de Serviço",
    "IPTU Incluso",
    "1º Andar (Escada)",
    "Sem Vaga de Garagem",
    "Imóvel Alugado",
  ],
  },
  // 20. FLAT DE 01 QUARTO NO BELLE VILLE
  {
  id: "ap-belle-ville-flat",
  tipo: "apartamento",
  title: "Flat de 01 Quarto no Belle Ville",
  price: "R$ 2.500 / mês",
  location: "Belle Ville, Caruaru - PE",
  coverImage: "/imoveis/apartamentos-para-alugar/ap-belle-ville-flat/1.jpeg",
  bedrooms: 1,
  bathrooms: 1,
  parking: 0,
  area: "",
  description: `FLAT PARA LOCAÇÃO | BELLE VILLE – CARUARU/PE

Flat com 01 quarto disponível para locação.

VALOR DA LOCAÇÃO: R$ 2.500,00/mês — incluso condomínio e IPTU.

CONDIÇÕES: garantia mediante caução em 3x.`,
  videos: [],
  images: Array.from(
    { length: 8 },
    (_, i) => `/imoveis/apartamentos-para-alugar/ap-belle-ville-flat/${i + 1}.jpeg`
  ),
  amenities: [
    "01 Quarto",
    "Flat Mobiliado",
    "Condomínio e IPTU Inclusos",
    "Garantia: Caução em 3x",
  ],
  },
  // 21. APARTAMENTO COM VARANDA NO MAURÍCIO DE NASSAU (ALUGADA)
  {
  id: "ap-mauricio-de-nassau-80m-aluguel",
  tipo: "apartamento",
  title: "Apartamento com Varanda no Maurício de Nassau",
  price: "R$ 2.600 / mês",
  location: "Maurício de Nassau, Caruaru - PE",
  coverImage: "/imoveis/apartamentos-para-venda/ap-mauricio-de-nassau-80m/1.jpeg",
  bedrooms: 3,
  bathrooms: 2,
  parking: 2,
  area: "80m²",
  alugado: true,
  description: `APARTAMENTO PARA LOCAÇÃO | ÁREA NOBRE DO BAIRRO MAURÍCIO DE NASSAU – CARUARU/PE

CARACTERÍSTICAS DO IMÓVEL:
- 80 m²
- Varanda
- 03 quartos, sendo 01 suíte
- 02 vagas de garagem

CONDOMÍNIO:
- Portaria eletrônica
- Piscina
- Salão de festas
- Mini academia
- Elevador
- Taxa de condomínio: R$ 600,00

VALOR DA LOCAÇÃO: R$ 2.600,00/mês

ATENÇÃO: imóvel atualmente ALUGADO.`,
  videos: [],
  images: Array.from(
    { length: 12 },
    (_, i) => `/imoveis/apartamentos-para-venda/ap-mauricio-de-nassau-80m/${i + 1}.jpeg`
  ),
  amenities: [
    "80m² de Área",
    "Varanda",
    "01 Suíte",
    "02 Vagas de Garagem",
    "Portaria Eletrônica",
    "Piscina",
    "Salão de Festas",
    "Elevador",
    "Imóvel Alugado",
  ],
  },
  // 22. CASA PARA LOCAÇÃO COMERCIAL NO MAURÍCIO DE NASSAU
  {
  id: "casa-mauricio-de-nassau-comercial",
  tipo: "casa",
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
  videos: [],
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
  // 23. CASA NO CONDOMÍNIO PORTAL DO SOL (ALUGADA)
  {
  id: "casa-portal-do-sol-aluguel",
  tipo: "casa",
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
  videos: [],
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
  // 24. CASA MOBILIADA NO PINHEIROPOLIS (ALUGADA)
  {
  id: "casa-pinheiropolis-aluguel",
  tipo: "casa",
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
  videos: [],
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
];

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
  const hasVideos = Boolean(property.videos?.length)
  const isAlugado = Boolean(property.alugado)

  // Preço: "R$ 13.000 / mês" vira "R$ 13.000" + "/mês" menor, para caber no bloco.
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
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              isAlugado ? "grayscale opacity-70" : ""
            }`}
          />

          {/* BADGE LOCAÇÃO / ALUGADO */}
          <div
            className={`absolute top-3 left-3 text-white px-3 py-1 text-xs rounded-full font-medium shadow-sm ${
              isAlugado ? "bg-red-600" : "bg-[#b85d19]"
            }`}
          >
            {isAlugado ? "Alugado" : "Locação"}
          </div>

          {/* FAIXA CENTRAL "ALUGADO" */}
          {isAlugado && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="bg-black/65 backdrop-blur-sm text-white text-sm font-bold tracking-[0.25em] uppercase px-6 py-2 rounded-full border border-white/30">
                Alugado
              </span>
            </div>
          )}

          {/* VÍDEO */}
          {hasVideos && !isAlugado && (
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 text-[11px] rounded-full font-medium flex items-center gap-1">
              <Play className="h-3 w-3 fill-white" />
              {property.videos.length > 1
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
          <span className="text-[11px] uppercase tracking-wider text-muted-foreground flex items-center gap-1 font-medium">
            <MapPin className="h-3.5 w-3.5 text-[#0d3b2e]" />
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

      {/* PREÇO + CTA */}
      <div className="px-1 sm:px-2 pb-2 pt-2">
        <div
          className={`rounded-2xl pl-4 pr-2 py-2 flex items-center justify-between gap-2 ${
            isAlugado ? "bg-neutral-500" : "bg-[#b85d19]"
          }`}
        >
          <span className="min-w-0 flex items-baseline gap-1 whitespace-nowrap">
            <span className="font-serif font-bold text-white text-sm leading-none">
              {isAlugado ? "Alugado" : priceMain}
            </span>

            {!isAlugado && priceSuffix && (
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
