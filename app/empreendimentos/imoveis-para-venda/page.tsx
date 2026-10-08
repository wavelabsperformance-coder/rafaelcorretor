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
import { saleProperties } from "@/lib/data"
import { FeaturedCarousel } from "@/components/featured-carousel"

export interface ImovelVenda {
  id: string
  tipo: "casa" | "apartamento" | "terreno"
  title: string
  price: string
  location: string
  coverImage: string
  bedrooms: number
  bathrooms: number
  parking: number
  area: string
  description: string
  videos?: string[]
  images: string[]
  amenities: string[]
  /** true = imóvel alugado (só informativo; o selo "Alugado" não aparece nesta listagem de venda) */
  alugado?: boolean
}

// Função para converter strings de preço (ex: "R$ 900.000") em números
function parsePreco(priceStr: string): number {
  if (!priceStr || priceStr.toLowerCase().includes("consulte")) return 0

  const cleanStr = priceStr.replace(/[^\d]/g, "")

  return cleanStr ? parseInt(cleanStr, 10) : 0
}

// Retorna o bairro
function getBairro(location: string): string {
  if (!location.includes(",")) return ""

  return location.split(",")[0].trim()
}

const imoveisVenda: ImovelVenda[] = [
  // 1. CASA GREEN GARDEN RESIDENCE
  {
    id: "casa-condominio-green-garden-residence",
    tipo: "casa",
    title: "Casa no Condomínio Green Garden Residence",
    price: "R$ 900.000",
    location: "Caruaru - PE",
    coverImage:
      "/imoveis/casas-para-venda/casa-green-garden-residence/1.jpeg",
    bedrooms: 3,
    bathrooms: 3,
    parking: 4,
    area: "115m²",
    description: `CASA À VENDA NO CONDOMÍNIO GREEN GARDEN RESIDENCE

Excelente oportunidade para morar com conforto, segurança 24 horas e infraestrutura completa em condomínio fechado.

DESCRIÇÃO DO IMÓVEL:
- Área construída de 115 m²
- Garagem para 4 carros
- 3 dormitórios, sendo 2 suítes
- Banheiro social
- Sala ampla para ambientes de estar e jantar
- Cozinha tipo americana
- Escada de acesso ao 1º andar em madeira com estilo rústico
- Varanda
- Quintal

Condomínio com portaria e segurança 24h e estrutura completa de lazer.

VALOR DE VENDA: R$ 900.000,00`,
    videos: [],
    images: Array.from(
      { length: 16 },
      (_, i) =>
        `/imoveis/casas-para-venda/casa-green-garden-residence/${i + 1}.jpeg`
    ),
    amenities: [
      "2 Suítes",
      "Garagem para 4 Carros",
      "Cozinha Americana",
      "Escada Rústica em Madeira",
      "Varanda e Quintal",
      "Portaria e Segurança 24h",
      "Infraestrutura Completa de Condomínio",
    ],
  },

  // 2. CASA NO BAIRRO MAURÍCIO DE NASSAU
  {
    id: "casa-mauricio-de-nassau-acqua-home-clube",
    tipo: "casa",
    title: "Casa de Alto Padrão no Bairro Maurício de Nassau",
    price: "R$ 1.500.000",
    location: "Maurício de Nassau, Caruaru - PE",
    coverImage:
      "/imoveis/casas-para-venda/casa-mauricio-de-nassau-acqua/1.jpeg",
    bedrooms: 8,
    bathrooms: 6,
    parking: 4,
    area: "520m²",
    description: `CASA À VENDA NO BAIRRO MAURÍCIO DE NASSAU

Ao lado do Edifício Acqua Home Clube!

Uma residência fantástica com excelente espaço interno e área construída de 520 m² em um terreno de 12x27m no coração do Bairro Maurício de Nassau.`,
    videos: [],
    images: Array.from(
      { length: 20 },
      (_, i) =>
        `/imoveis/casas-para-venda/casa-mauricio-de-nassau-acqua/${i + 1}.jpeg`
    ),
    amenities: [
      "3 Suítes Master com Hidromassagem",
      "520m² de Área Construída",
      "Garagem para 4 Veículos",
      "Escritório",
      "Salão para Área Gourmet",
      "Cozinha de Apoio + Despensa",
      "Jardim de Inverno",
      "Quintal",
      "Varanda",
      "Ao Lado do Acqua Home Clube",
    ],
  },

  // 3. EDIFÍCIO CELY MIRANDA
  {
    id: "ap-edificio-cely-miranda-universitario",
    tipo: "apartamento",
    title: "Apartamento no Edifício Cely Miranda",
    price: "R$ 1.750.000",
    location: "Universitário, Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-venda/edificio-cely-miranda/1.jpeg",
    bedrooms: 4,
    bathrooms: 4,
    parking: 3,
    area: "172m²",
    description: `UM DOS APARTAMENTOS MAIS EXCLUSIVOS DE CARUARU

EDIFÍCIO CELY MIRANDA | UNIVERSITÁRIO`,
    videos: [],
    images: Array.from(
      { length: 40 },
      (_, i) =>
        `/imoveis/apartamentos-para-venda/edificio-cely-miranda/${i + 1}.jpeg`
    ),
    amenities: [
      "4 Suítes Privativas",
      "100% Reformado",
      "Porteira Fechada",
      "3 Vagas Cobertas",
      "Piscina com Raia",
      "Academia / Fitness",
      "Espaço Gourmet",
      "Salão de Festas",
      "Brinquedoteca",
      "Portaria 24h",
      "Escriturado e Financiável",
    ],
  },

  // 4. VIVER BEM INDIANÓPOLIS - AP 908
  {
    id: "ap-viver-bem-indianopolis-908",
    tipo: "apartamento",
    title: "Apartamento no Viver Bem Indianópolis",
    price: "Consulte o valor",
    location: "Indianópolis, Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/1.jpeg",
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    area: "63,25m²",
    description: `Excelente apartamento de 63,25 m², localizado na Torre 1 – apartamento 908, com uma planta moderna, funcional e bem distribuída.`,
    videos: [
      "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/1.mp4",
    ],
    images: Array.from(
      { length: 38 },
      (_, i) =>
        `/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/${i + 1}.jpeg`
    ),
    amenities: [
      "1 Suíte",
      "Varanda",
      "Piscina com Raia Semiolímpica",
      "Piscina Infantil",
      "Academia Equipada",
      "Espaço Gourmet e Churrasqueira",
      "Coworking",
      "Ponto para Veículo Elétrico",
      "Bicicletário",
      "Salão de Festas",
    ],
  },

  // 6. THE HOUSE CLUB
  {
    id: "casa-the-house-club-caruaru",
    tipo: "casa",
    title: "Casa em Condomínio Fechado no The House Club",
    price: "R$ 870.000",
    location: "Luiz Gonzaga, Caruaru - PE",
    coverImage:
      "/imoveis/casas-para-venda/casa-the-house-club/1.jpeg",
    bedrooms: 3,
    bathrooms: 4,
    parking: 2,
    area: "123m²",
    description: `Excelente casa em condomínio fechado com 3 suítes, espaço gourmet, preparação para jacuzzi e área de lazer completa.`,
    images: Array.from(
      { length: 18 },
      (_, i) =>
        `/imoveis/casas-para-venda/casa-the-house-club/${i + 1}.jpeg`
    ),
    amenities: [
      "3 Suítes",
      "Espaço Gourmet",
      "Preparação para Jacuzzi",
      "Piscina e Academia",
      "Portaria 24h",
    ],
  },

  // 7. VOG VILLE NORTE
  {
    id: "ap-vog-ville-norte",
    tipo: "apartamento",
    title: "Apartamento Pronto para Morar no Vog Ville Norte",
    price: "R$ 290.000",
    location: "Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/12.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "52m²",
    description: `Apartamento completo, pronto para morar, com móveis planejados, ar-condicionado e lazer com piscina e academia.`,
    videos: [
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/1.mp4",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/2.mp4",
    ],
    images: [
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/12.jpeg",
      ...Array.from(
        { length: 20 },
        (_, i) =>
          `/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/${i + 3}.jpeg`
      ).filter(
        (img) =>
          img !==
          "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/12.jpeg"
      ),
    ],
    amenities: [
      "1 Suíte",
      "Ar-condicionado",
      "Móveis Planejados",
      "Piscina Adulto e Infantil",
      "Academia Equipada",
    ],
  },

  // 8. VOG VILLE NORTE TÉRREO DE ESQUINA
  {
    id: "ap-vog-ville-norte-terreo",
    tipo: "apartamento",
    title: "Apartamento Térreo de Esquina no Condomínio Vog Ville Norte",
    price: "R$ 310.000",
    location: "Caruaru - PE",
    coverImage:
      "/imoveis/apartamentos-para-venda/vog-ville-norte-terreo/1.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "52m²",
    description: `Oportunidade exclusiva no Condomínio Vog Ville Norte! Unidade térrea de esquina com vista panorâmica.`,
    images: Array.from(
      { length: 24 },
      (_, i) =>
        `/imoveis/apartamentos-para-venda/vog-ville-norte-terreo/${i + 1}.jpeg`
    ),
    amenities: [
      "Térreo de Esquina",
      "Vista para todo o Condomínio",
      "Estilo Bangalô",
      "3 Piscinas Integradas",
      "3 Áreas Gourmet",
      "Academia e Salão de Jogos",
      "Quadra Poliesportiva e de Areia",
      "Área Pet Privativa",
      "Energia Solar na Área Comum",
      "Mini Mercado Interno",
      "1 Vaga de Garagem",
    ],
  },

  // 9. CASA COM JACUZZI | GREEN GARDEN CONDOMÍNIO CLUB (também para locação)
  {
    id: "casa-green-garden-condominio-club-venda",
    tipo: "casa",
    title: "Casa com Área Gourmet e Jacuzzi no Green Garden Condomínio Club",
    price: "R$ 850.000",
    location: "Green Garden Residence, Caruaru - PE",
    // Fotos reaproveitadas da pasta de locação (sem duplicar arquivos)
    coverImage:
      "/imoveis/casas-para-alugar/casa-green-garden-condominio-club/16.jpeg",
    bedrooms: 4,
    bathrooms: 4,
    parking: 4,
    area: "200m²",
    description: `CASA À VENDA | GREEN GARDEN CONDOMÍNIO CLUB – CARUARU/PE

More em um condomínio fechado às margens da PE-95, com acesso às principais avenidas que levam ao centro da cidade de Caruaru PE.

A casa tem 200 m² e oferece:
- 04 quartos, sendo 03 suítes
- 04 vagas de garagem
- Área gourmet com churrasqueira e jacuzzi

VALOR DE VENDA: R$ 850.000,00
Imóvel também disponível para locação.`,
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
      "Condomínio Fechado com Lazer",
    ],
  },

  // 10. MAGNÍFICA CASA TÉRREA | QUINTAS DA COLINA II (também para locação)
  {
    id: "casa-terrea-quintas-da-colina-2",
    tipo: "casa",
    title: "Magnífica Casa de Alto Padrão no Quintas da Colina II",
    price: "R$ 2.500.000",
    location: "Quintas da Colina II, Caruaru - PE",
    // Fotos reaproveitadas da pasta de locação (sem duplicar arquivos)
    coverImage:
      "/imoveis/casas-para-alugar/casa-terrea-quintas-da-colina-2/4.jpeg",
    bedrooms: 4,
    bathrooms: 5,
    parking: 6,
    area: "400m²",
    description: `MAGNÍFICA CASA DE ALTO PADRÃO À VENDA | QUINTAS DA COLINA II – CARUARU/PE

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

VALOR DE VENDA: R$ 2.500.000,00
Imóvel também disponível para locação.`,
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
    ],
  },
// 11. CASA LUAR DO SUMARÉ
{
  id: "casa-luar-do-sumare-indianopolis",
  tipo: "casa",
  title: "Casa Térrea Residencial no Luar do Sumaré",
  price: "R$ 450.000",
  location: "Indianópolis, Caruaru - PE",
  coverImage:
    "/imoveis/casas-para-venda/casa-luar-do-sumare/5.jpeg",
  bedrooms: 3,
  bathrooms: 2,
  parking: 1,
  area: "109m²",
  description: `CASA TÉRREA RESIDENCIAL À VENDA | LUAR DO SUMARÉ — INDIANÓPOLIS/PE

Excelente oportunidade para morar ou investir em uma das regiões mais valorizadas de Caruaru!

Casas térreas em localização privileged, no Indianópolis, a apenas 5 minutos do Centro e próximas ao Caruaru Shopping e ao Parque Ambiental Severino Montenegro.

ÁREAS DO IMÓVEL:
- Terreno: 150 m²
- Área construída: 109 m²

CARACTERÍSTICAS DO IMÓVEL:
- Sala para 02 ambientes
- 03 quartos, sendo 01 suíte máster
- Cozinha
- WC social
- Jardim de inverno
- Área de serviço
- Garagem

DIFERENCIAIS:
- Possibilidade de implantação de área gourmet
- Cisterna com capacidade de 12.000 litros
- Casas térreas com excelente aproveitamento dos espaços
- Possibilidade de financiamento bancário

INVESTIMENTO: A partir de R$ 450.000,00`,
  videos: [],
  images: [
    "/imoveis/casas-para-venda/casa-luar-do-sumare/5.jpeg",
    ...Array.from(
      { length: 7 },
      (_, i) =>
        `/imoveis/casas-para-venda/casa-luar-do-sumare/${i + 1}.jpeg`
    ).filter(
      (img) =>
        img !==
        "/imoveis/casas-para-venda/casa-luar-do-sumare/5.jpeg"
    ),
  ],
  amenities: [
    "1 Suíte Máster",
    "Jardim de Inverno",
    "Cisterna de 12.000 Litros",
    "Possibilidade de Área Gourmet",
    "A 5 Minutos do Centro",
    "Próximo ao Caruaru Shopping",
    "Aceita Financiamento",
  ],
},

  // 12. APARTAMENTO NO TERRAÇO HOLANDA
  {
    id: "ap-terraco-holanda-mauricio-de-nassau",
    tipo: "apartamento",
    title: "Apartamento no Condomínio Terraço Holanda",
    price: "R$ 580.000",
    location: "Maurício de Nassau, Caruaru - PE",
    coverImage: "/imoveis/apartamentos-para-venda/terraco-holanda/1.jpeg",
    bedrooms: 3,
    bathrooms: 3,
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
    images: Array.from(
      { length: 9 },
      (_, i) =>
        `/imoveis/apartamentos-para-venda/terraco-holanda/${i + 1}.jpeg`
    ),
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

  // 13. EKO HOME CLUB - TORRE IPÊ (À VENDA)
  {
    id: "ap-eko-home-club-torre-ipe",
    tipo: "apartamento",
    title: "Apartamento à Venda no Eko Home Club – Torre Ipê",
    price: "R$ 410.000",
    location: "Universitário, Caruaru - PE",
    coverImage: "/imoveis/apartamentos-para-venda/eko-home-club-torre-ipe/13.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    parking: 0,
    area: "60m²",
    alugado: true,
    description: `APARTAMENTO À VENDA | EKO HOME CLUB – TORRE IPÊ – CARUARU/PE

Localizado em uma das áreas mais valorizadas do bairro Universitário, próximo aos principais polos médico, jurídico e estudantil da cidade. Uma excelente opção para quem busca conforto, praticidade e ótima localização.

CARACTERÍSTICAS DO IMÓVEL:
- 60 m² de área privativa
- Andar alto e posição sul
- 02 quartos, sendo 01 suíte
- Quartos com ar-condicionado e guarda-roupas
- Sala para 02 ambientes, com iluminação projetada
- Cozinha ampla com móveis planejados, cooktop e forno embutido

VALOR DE VENDA: R$ 410.000,00
Imóvel escriturado e pronto para financiamento.

OBS.: também disponível para locação por R$ 2.700,00/mês.

ATENÇÃO: imóvel atualmente ALUGADO, porém disponível para venda (locação por R$ 2.700,00/mês, incluso condomínio e IPTU).`,
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
      "Sala para 02 Ambientes",
      "Bairro Universitário",
      "Escriturado - Pronto para Financiamento",
      "Imóvel Alugado - Disponível para Venda",
    ],
  },

  // 14. CASA DUPLEX | INDIANÓPOLIS (À VENDA)
  {
    id: "casa-duplex-indianopolis",
    tipo: "casa",
    title: "Casa Duplex no Bairro Indianópolis",
    price: "R$ 225.000",
    location: "Indianópolis, Caruaru - PE",
    coverImage: "/imoveis/casas-para-venda/casa-duplex-indianopolis/1.jpeg",
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
    videos: [],
    images: Array.from(
      { length: 16 },
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

  // 15. LOTEAMENTO 7 LUAS | ALTO DO MOURA (ALUGADA - À VENDA)
  {
    id: "casa-alto-do-moura-7-luas",
    tipo: "casa",
    title: "Casa no Loteamento 7 Luas – Alto do Moura",
    price: "R$ 215.000",
    location: "Alto do Moura, Caruaru - PE",
    coverImage: "/imoveis/casas-para-venda/casa-alto-do-moura-7-luas/11.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
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
    videos: [],
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

  // 16. CASA REFORMADA | PETRÓPOLIS (ALUGADA - À VENDA)
  {
    id: "casa-reformada-petropolis",
    tipo: "casa",
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
      "Fachada em Porcelanato",
      "Imóvel Escriturado",
      "Imóvel Alugado - Disponível para Venda",
    ],
  },
  // 17. APARTAMENTO MOBILIADO NO EDIFÍCIO PLAZA (ALUGADA)
  {
  id: "ap-edf-plaza-caruaru",
  tipo: "apartamento",
  title: "Apartamento Mobiliado no Edifício Plaza",
  price: "R$ 680.000",
  location: "Edifício Plaza, Caruaru - PE",
  coverImage: "/imoveis/apartamentos-para-alugar/ap-edf-plaza-caruaru/1.jpeg",
  bedrooms: 3,
  bathrooms: 3,
  parking: 1,
  area: "78m²",
  alugado: true,
  description: `APARTAMENTO À VENDA | EDF. PLAZA – CARUARU/PE

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

VALOR DE VENDA: R$ 680.000,00

OBS.: o imóvel está alugado por R$ 3.500,00/mês (incluso condomínio e IPTU) e continua disponível para aquisição.`,
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
    "Piscina Adulto e Infantil",
    "Quadra Poliesportiva",
    "Imóvel Alugado - Disponível para Venda",
  ],
  },
  // 18. APARTAMENTO TOTALMENTE REFORMADO NO EKO HOME CLUB – TORRE IPÊ A
  {
  id: "ap-eko-home-club-torre-ipe-a",
  tipo: "apartamento",
  title: "Apartamento Totalmente Reformado no Eko Home Club – Torre Ipê A",
  price: "R$ 420.000",
  location: "Bairro Universitário, Caruaru - PE",
  coverImage: "/imoveis/apartamentos-para-venda/ap-eko-home-club-torre-ipe-a/1.jpeg",
  bedrooms: 2,
  bathrooms: 2,
  parking: 2,
  area: "60m²",
  description: `APARTAMENTO À VENDA | EKO HOME CLUB – TORRE IPÊ A – CARUARU/PE

Exclusivo apartamento totalmente reformado na área nobre do bairro Universitário, no polo médico, jurídico e estudantil da cidade.

CARACTERÍSTICAS DO IMÓVEL:
- 60 m²
- Posição sul, voltado para a piscina
- Sala para dois ambientes
- 02 quartos, sendo 01 suíte
- Cozinha ampla planejada
- Área de serviço
- 02 vagas de garagem descobertas

ACABAMENTO E MOBILIÁRIO:
- Móveis planejados, guarda-roupas e iluminação projetada
- Forno embutido com cooktop
- Ficam no imóvel apenas os móveis fixos planejados

CONDOMÍNIO:
- Portaria 24 horas
- Academia, piscina e salão de festas
- Área gourmet, espaço de pilates e pista de cooper
- Quadra poliesportiva, quadra de tênis e lava jato

VALOR DE VENDA: R$ 420.000,00 — quitado, aceita financiamento.`,
  videos: [
    "/imoveis/apartamentos-para-venda/ap-eko-home-club-torre-ipe-a/1.mp4",
  ],
  images: Array.from(
    { length: 18 },
    (_, i) => `/imoveis/apartamentos-para-venda/ap-eko-home-club-torre-ipe-a/${i + 1}.jpeg`
  ),
  amenities: [
    "60m² de Área Privativa",
    "Posição Sul Voltada para a Piscina",
    "01 Suíte",
    "Móveis Planejados e Iluminação Projetada",
    "Forno Embutido com Cooktop",
    "02 Vagas de Garagem",
    "Portaria 24 Horas",
    "Academia, Piscina e Salão de Festas",
    "Quadra Poliesportiva e de Tênis",
    "Aceita Financiamento",
  ],
  },
  // 19. APARTAMENTO DE ALTO PADRÃO NO EDIFÍCIO LUSIA MACIEL (ALUGADA)
  {
  id: "ap-lusia-maciel",
  tipo: "apartamento",
  title: "Apartamento de Alto Padrão no Edifício Lusia Maciel",
  price: "R$ 850.000",
  location: "Maurício de Nassau, Caruaru - PE",
  coverImage: "/imoveis/apartamentos-para-venda/ap-lusia-maciel/3.jpeg",
  bedrooms: 3,
  bathrooms: 3,
  parking: 2,
  area: "107m²",
  description: `APARTAMENTO À VENDA | EDF. LUSIA MACIEL – BAIRRO MAURÍCIO DE NASSAU – CARUARU/PE

Imóvel totalmente reformado com fino acabamento de alto padrão, na área nobre do bairro Maurício de Nassau. Exclusivo: 02 apartamentos por andar.

CARACTERÍSTICAS DO IMÓVEL:
- 107 m²
- Sala para dois ambientes
- 03 quartos, sendo 01 suíte
- 01 dependência com WC
- Área de serviço
- 02 vagas de garagem cobertas

ACABAMENTO:
- Porcelanato Porto Belo AA
- Louças e metais Deca
- Móveis planejados Florêncio
- Iluminação projetada
- Todos os ambientes com pontos de ar-condicionado
- Varanda com pele de vidro

VALOR DE VENDA: R$ 850.000,00 — não aceita financiamento no momento.

ATENÇÃO: imóvel atualmente ALUGADO, porém disponível para venda.`,
  videos: [],
  images: Array.from({ length: 13 }, (_, i) => `/imoveis/apartamentos-para-venda/ap-lusia-maciel/${i + 1}.jpeg`),
  amenities: [
    "107m² de Área",
    "Exclusivo 02 por Andar",
    "Móveis Planejados Florêncio",
    "Porcelanato Porto Belo AA",
    "Louças e Metais Deca",
    "Iluminação Projetada",
    "Pontos de Ar-condicionado em Todos os Ambientes",
    "Varanda com Pele de Vidro",
    "02 Vagas Cobertas",
    "Imóvel Alugado - Disponível para Venda",
  ],
  },
  // 20. APARTAMENTO DE ALTO PADRÃO NO EDIFÍCIO ANDREZZA
  {
  id: "ap-andrezza-mauricio-de-nassau",
  tipo: "apartamento",
  title: "Apartamento de Alto Padrão no Edifício Andrezza",
  price: "R$ 800.000",
  location: "Maurício de Nassau, Caruaru - PE",
  coverImage: "/imoveis/apartamentos-para-venda/ap-andrezza-mauricio-de-nassau/4.jpeg",
  bedrooms: 4,
  bathrooms: 4,
  parking: 3,
  area: "240m²",
  description: `APARTAMENTO À VENDA | EDF. ANDREZZA – BAIRRO MAURÍCIO DE NASSAU – CARUARU/PE

Apartamento na área nobre do bairro Maurício de Nassau, imóvel exclusivo.

CARACTERÍSTICAS DO IMÓVEL:
- 02 por andar
- Posição sul
- Área de 240 m²
- 04 quartos, sendo 03 suítes
- 01 dependência
- Varanda
- Sala para 02 ambientes
- Cozinha ampla
- Área de serviço
- 03 vagas de garagem coberta

CONDOMÍNIO:
- Portaria 24 horas
- Piscina
- Salão de jogos
- Salão de festas
- Bicicletário
- Academia

VALOR DE VENDA: R$ 800.000,00`,
  videos: [],
  images: Array.from(
    { length: 8 },
    (_, i) => `/imoveis/apartamentos-para-venda/ap-andrezza-mauricio-de-nassau/${i + 1}.jpeg`
  ),
  amenities: [
    "240m² de Área",
    "Exclusivo 02 por Andar",
    "Posição Sul",
    "04 Quartos, sendo 03 Suítes",
    "01 Dependência",
    "Varanda",
    "Sala para 02 Ambientes",
    "Cozinha Ampla",
    "03 Vagas de Garagem Coberta",
    "Portaria 24 Horas",
    "Piscina e Salão de Festas",
    "Salão de Jogos e Bicicletário",
    "Academia",
  ],
  },
  // 21. APARTAMENTO COM VARANDA NO MAURÍCIO DE NASSAU (ALUGADA)
  {
  id: "ap-mauricio-de-nassau-80m",
  tipo: "apartamento",
  title: "Apartamento com Varanda no Maurício de Nassau",
  price: "R$ 450.000",
  location: "Maurício de Nassau, Caruaru - PE",
  coverImage: "/imoveis/apartamentos-para-venda/ap-mauricio-de-nassau-80m/10.jpeg",
  bedrooms: 3,
  bathrooms: 2,
  parking: 2,
  area: "80m²",
  alugado: true,
  description: `APARTAMENTO À VENDA | ÁREA NOBRE DO BAIRRO MAURÍCIO DE NASSAU – CARUARU/PE

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

VALOR DE VENDA: R$ 450.000,00

OBS.: o imóvel está alugado por R$ 2.600,00/mês e continua disponível para venda.`,
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
    "Mini Academia",
    "Elevador",
    "Imóvel Alugado - Disponível para Venda",
  ],
  },
  // 22. CASA TÉRREA COM JARDIM NO MAURÍCIO DE NASSAU
  {
  id: "casa-mauricio-de-nassau-jardim",
  tipo: "casa",
  title: "Casa Térrea com Jardim no Maurício de Nassau",
  price: "R$ 700.000",
  location: "Maurício de Nassau, Caruaru - PE",
  coverImage: "/imoveis/casas-para-venda/casa-mauricio-de-nassau-jardim/1.jpeg",
  bedrooms: 3,
  bathrooms: 2,
  parking: 1,
  area: "",
  description: `CASA À VENDA | BAIRRO MAURÍCIO DE NASSAU – CARUARU/PE

Se você busca conforto, modernidade e localização privilegiada, essa é a oportunidade perfeita.

CARACTERÍSTICAS DO IMÓVEL:
- 03 quartos, sendo 01 suíte
- Banheiro social
- Sala ampla para 02 ambientes
- Cozinha espaçosa e bem ventilada
- Jardim encantador
- Área de serviço ampla
- Quarto de apoio com varanda
- Garagem para 01 veículo
- Cisterna de 7.000 litros + caixa d'água

LOCALIZAÇÃO: no coração de Maurício de Nassau, um dos bairros mais valorizados e desejados da cidade.

VALOR DE VENDA: R$ 700.000,00 — pronta para morar. Pode ser financiada por qualquer banco da sua preferência.`,
  videos: [
    "/imoveis/casas-para-venda/casa-mauricio-de-nassau-jardim/1.mp4",
  ],
  images: Array.from(
    { length: 19 },
    (_, i) => `/imoveis/casas-para-venda/casa-mauricio-de-nassau-jardim/${i + 1}.jpeg`
  ),
  amenities: [
    "01 Suíte",
    "Sala Amplа para 02 Ambientes",
    "Jardim Encantador",
    "Quarto de Apoio com Varanda",
    "Cisterna de 7.000 Litros",
    "Cozinha Espaçosa e Ventilada",
    "Pronta para Morar",
    "Aceita Financiamento",
  ],
  },
  // 23. CASA NO CONDOMÍNIO PORTAL DO SOL (ALUGADA)
  {
  id: "casa-portal-do-sol-venda",
  tipo: "casa",
  title: "Casa no Condomínio Portal do Sol",
  price: "R$ 620.000",
  location: "Condomínio Portal do Sol, Caruaru - PE",
  coverImage: "/imoveis/casas-para-venda/casa-portal-do-sol/1.jpeg",
  bedrooms: 3,
  bathrooms: 2,
  parking: 2,
  area: "150m²",
  alugado: true,
  description: `CASA À VENDA | CONDOMÍNIO PORTAL DO SOL – CARUARU/PE

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

VALOR DE VENDA: R$ 620.000,00

ATENÇÃO: imóvel atualmente ALUGADO, porém disponível para venda (locação por R$ 3.500,00/mês, incluso condomínio e IPTU).`,
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
    "Salão de Festas e Parquinho Infantil",
    "Imóvel Alugado - Disponível para Venda",
  ],
  },
  // 24. CASA DE GRANDES PROPORÇÕES NO MAURÍCIO DE NASSAU
  {
  id: "casa-mauricio-de-nassau-ampla",
  tipo: "casa",
  title: "Casa de Grandes Proporções no Maurício de Nassau",
  price: "R$ 2.500.000",
  location: "Maurício de Nassau, Caruaru - PE",
  coverImage: "/imoveis/casas-para-venda/casa-mauricio-de-nassau-ampla/14.jpeg",
  bedrooms: 8,
  bathrooms: 6,
  parking: 0,
  area: "360m²",
  description: `CASA À VENDA | BAIRRO MAURÍCIO DE NASSAU – CARUARU/PE

Casa de grandes proporções em dois pavimentos, na área nobre do bairro Maurício de Nassau.

TERREO:
- 04 salas
- 04 quartos, sendo 03 suítes
- 01 cozinha
- 01 subsolo com cerca de 150 m²

1º ANDAR:
- 01 sala de som
- Varanda
- 04 quartos, sendo 01 suíte com closet
- 01 cozinha
- 02 salas
- Área de serviço com quarto de empregada e banheiro

DADOS DO IMÓVEL:
- Terreno: 12 x 30 m = 360 m²

VALOR DE VENDA: R$ 2.500.000,00 — imóvel escriturado. Negocia e aceita troca.`,
  videos: [],
  images: Array.from(
    { length: 44 },
    (_, i) => `/imoveis/casas-para-venda/casa-mauricio-de-nassau-ampla/${i + 1}.jpeg`
  ),
  amenities: [
    "Terreno 12 x 30 m (360 m²)",
    "Dois Pavimentos",
    "04 Suítes no Total",
    "01 Subsolo com 150 m²",
    "Varanda",
    "02 Cozinhas e 03 Salas",
    "Quarto de Empregada com Banheiro",
    "Escriturado",
    "Aceita Troca",
  ],
  },
  // 25. CASA DUPLEX DE ALTO PADRÃO NO QUINTAS DA COLINA II
  {
  id: "casa-duplex-quintas-da-colina-ii",
  tipo: "casa",
  title: "Casa Duplex de Alto Padrão no Quintas da Colina II",
  price: "R$ 2.100.000",
  location: "Quintas da Colina II, Caruaru - PE",
  coverImage: "/imoveis/casas-para-venda/casa-duplex-quintas-da-colina-ii/8.jpeg",
  bedrooms: 5,
  bathrooms: 5,
  parking: 4,
  area: "541m²",
  description: `CASA DUPLEX À VENDA | CONDOMÍNIO QUINTAS DA COLINA II – CARUARU/PE

Área total: 600 m² | Área construída: 541 m²

TERREO:
- Garagem para 04 carros
- 02 salas de estar (principal e multimídia)
- Sala de jantar
- Cozinha com despensa
- Quarto de visitas com closet e banheiro
- Área de lazer com piscina, churrasqueira a gás, WC e chuveirão
- Dependência de secretária com banheiro
- 02 depósitos
- Área de serviço

1º ANDAR:
- Mezanino
- 04 quartos com closet e banheiro, sendo uma suíte master
- Sala reversível
- Quarto reversível
- Escritório

DETALHES:
- Móveis fixos e lustres ficam no imóvel
- Piscina aquecida
- Casa com energia solar
- Ar-condicionados acompanham a compra

CONDOMÍNIO:
- Academia bem equipada, piscina e portaria 24h
- Quadras de vôlei, poliesportiva, tênis e beach tênis
- Vários parquinhos infantis e pista de bike
- Aulas coletivas adulto e infantil, natação e muito mais

VALOR DE VENDA: R$ 2.100.000,00 — aceita imóvel de menor valor como permuta.`,
  videos: [],
  images: Array.from(
    { length: 23 },
    (_, i) => `/imoveis/casas-para-venda/casa-duplex-quintas-da-colina-ii/${i + 1}.jpeg`
  ),
  amenities: [
    "541m² de Área Construída",
    "Terreno de 600m²",
    "Piscina Aquecida",
    "Energia Solar",
    "Móveis Fixos e Lustres Inclusos",
    "Garagem para 04 Carros",
    "Academia e Quadras do Condomínio",
    "Aceita Permuta",
  ],
  },
  // 26. CASA DUPLEX NO CONDOMÍNIO CLODOALDO SAMPAIO
  {
  id: "casa-duplex-clodoaldo-sampaio",
  tipo: "casa",
  title: "Casa Duplex no Condomínio Clodoaldo Sampaio",
  price: "R$ 280.000",
  location: "Boa Vista, Caruaru - PE",
  coverImage: "/imoveis/casas-para-venda/casa-duplex-clodoaldo-sampaio/1.jpeg",
  bedrooms: 3,
  bathrooms: 3,
  parking: 2,
  area: "",
  description: `CASA DUPLEX À VENDA | CONDOMÍNIO CLODOALDO SAMPAIO – BOA VISTA – CARUARU/PE
(Próximo ao SESI)

Encantadora casa duplex no bairro Boa Vista, dentro do condomínio Clodoaldo Sampaio, com segurança e excelente localização.

TERREO:
- Portão eletrônico
- Garagem para 02 carros
- Cisterna de 4.000 litros com bomba instalada
- Sala para dois ambientes
- Cozinha e área de serviço
- Lavabo

PAVIMENTO SUPERIOR:
- 03 quartos, sendo 01 suíte master com varanda
- Banheiro social
- Espaço para home office

VALOR DE VENDA: R$ 280.000,00 — aceita financiamento.
Condomínio: R$ 340,00.`,
  videos: [],
  images: Array.from(
    { length: 32 },
    (_, i) => `/imoveis/casas-para-venda/casa-duplex-clodoaldo-sampaio/${i + 1}.jpeg`
  ),
  amenities: [
    "Cisterna de 4.000 Litros com Bomba",
    "01 Suíte Master com Varanda",
    "Espaço para Home Office",
    "Portão Eletrônico",
    "Garagem para 02 Carros",
    "Lavabo",
    "Aceita Financiamento",
  ],
  },
  // 27. CASA DE ALTO PADRÃO NO BAIRRO LUIZ GONZAGA
  {
  id: "casa-luiz-gonzaga",
  tipo: "casa",
  title: "Casa de Alto Padrão no Bairro Luiz Gonzaga",
  price: "R$ 499.000",
  location: "Luiz Gonzaga, Caruaru - PE",
  coverImage: "/imoveis/casas-para-venda/casa-luiz-gonzaga/6.jpeg",
  bedrooms: 3,
  bathrooms: 4,
  parking: 3,
  area: "180m²",
  description: `OPORTUNIDADE NO BAIRRO LUIZ GONZAGA – CARUARU/PE

Conforto, sofisticação e uma excelente localização.

CARACTERÍSTICAS DO IMÓVEL:
- Terreno com 180 m²
- Garagem para até 03 carros
- Sala ampla para dois ambientes
- Cozinha funcional
- Área de serviço
- 03 quartos, sendo 02 suítes
- WC de serviço
- WC social

VALOR DE VENDA: R$ 499.000,00 — pode ser financiada.`,
  videos: [],
  images: Array.from(
    { length: 29 },
    (_, i) => `/imoveis/casas-para-venda/casa-luiz-gonzaga/${i + 1}.jpeg`
  ),
  amenities: [
    "Terreno de 180m²",
    "02 Suítes",
    "Sala Ampla para 02 Ambientes",
    "Garagem para 03 Carros",
    "Cozinha Funcional",
    "WC de Serviço",
    "Aceita Financiamento",
  ],
  },
  // 28. LOTE NO CONDOMÍNIO SOLAR DA SERRA – VILLA DO VITORINO
  {
  id: "lote-solar-da-serra-villa-do-vitorino",
  tipo: "terreno",
  title: "Lote no Condomínio Solar da Serra – Villa do Vitorino",
  price: "R$ 85.000",
  location: "Villa do Vitorino, Caruaru - PE",
  coverImage: "/imoveis/terrenos-e-lotes/lote-solar-da-serra-villa-do-vitorino/2.jpeg",
  bedrooms: 0,
  bathrooms: 0,
  parking: 0,
  area: "700m²",
  description: `LOTE À VENDA NO CONDOMÍNIO SOLAR DA SERRA – VILLA DO VITORINO

Excelente oportunidade para construir sua casa de campo em um condomínio fechado, cercado pela natureza, com segurança, tranquilidade e lazer para toda a família.

CARACTERÍSTICAS DO LOTE:
- Dimensões: 20 x 35 metros
- Área total: 700 m²

ESTRUTURA DE LAZER DO CONDOMÍNIO:
- Quadra poliesportiva
- Espaço gourmet com churrasqueira
- Lago
- Piscina aquecida
- Bosque com trilha
- Salão de jogos
- Salão de festas

VALOR: R$ 85.000,00`,
  videos: [],
  images: Array.from(
    { length: 16 },
    (_, i) => `/imoveis/terrenos-e-lotes/lote-solar-da-serra-villa-do-vitorino/${i + 1}.jpeg`
  ),
  amenities: [
    "700m² (20 x 35 m)",
    "Condomínio Fechado",
    "Piscina Aquecida",
    "Espaço Gourmet com Churrasqueira",
    "Quadra Poliesportiva",
    "Lago e Bosque com Trilha",
    "Salão de Jogos e de Festas",
  ],
  },
  // 29. LOTE COMERCIAL NO ALTO DO MOURA
  {
  id: "terreno-alto-do-moura-centro-artes",
  tipo: "terreno",
  title: "Lote Comercial no Alto do Moura",
  price: "R$ 300.000",
  location: "Alto do Moura, Caruaru - PE",
  coverImage: "/imoveis/terrenos-e-lotes/terreno-alto-do-moura-centro-artes/1.jpeg",
  bedrooms: 0,
  bathrooms: 0,
  parking: 0,
  area: "840m²",
  description: `LOTE TERRENO À VENDA | ÁREA COMERCIAL DO CENTRO DE ARTES FIGURATIVAS DAS AMÉRICAS – ALTO DO MOURA/CARUARU-PE

CARACTERÍSTICAS DO TERRENO:
- Localização: Alto do Moura, Caruaru - PE
- Área: 14 x 60 m = 840 m²
- Escriturado

VALOR DE VENDA: R$ 300.000,00`,
  videos: [],
  images: Array.from(
    { length: 3 },
    (_, i) => `/imoveis/terrenos-e-lotes/terreno-alto-do-moura-centro-artes/${i + 1}.jpeg`
  ),
  amenities: [
    "840m² (14 x 60 m)",
    "Área Comercial",
    "Centro de Artes Figurativas das Américas",
    "Escriturado",
    "Alto do Moura",
  ],
  },
  // 30. MAGNÍFICA ÁREA RURAL NA ZONA URBANA DE BONITO - PE
  {
  id: "area-rural-bonito",
  tipo: "terreno",
  title: "Magnífica Área Rural na Zona Urbana de Bonito - PE",
  price: "R$ 47.000 / ha",
  location: "Bonito - PE",
  coverImage: "/imoveis/terrenos-e-lotes/area-rural-bonito/1.jpeg",
  bedrooms: 0,
  bathrooms: 0,
  parking: 0,
  area: "11,5 hectares",
  description: `MAGNÍFICA ÁREA RURAL NA ZONA URBANA DA CIDADE DE BONITO – PE

- 11,5 hectares
- Localizada a 3 km da pista principal
- A 15 km da região das cachoeiras (Bonito tem a parte alta, a das cachoeiras, e a parte baixa, onde está o terreno)
- Relevo levemente inclinado, sem ladeiras
- Açudes naturais e nascente de água natural: abundância de água
- Pontos mais altos com vista para o vale
- Cercado com porteira
- Escriturado e registrado

OBSERVAÇÃO: não se cria animais na parte alta devido ao frio e à intensa umidade.

VALOR: R$ 47.000,00 por hectare (negociável) — 11,5 hectares.`,
  videos: [],
  images: Array.from(
    { length: 7 },
    (_, i) => `/imoveis/terrenos-e-lotes/area-rural-bonito/${i + 1}.jpeg`
  ),
  amenities: [
    "11,5 Hectares",
    "Zona Urbana de Bonito - PE",
    "A 3 km da Pista Principal",
    "Açudes Naturais e Nascente de Água",
    "Vista para o Vale",
    "Cercado com Porteira",
    "Escriturado e Registrado",
    "Valor Negociável",
  ],
  },
  // 31. TERRENO DE 2.500M² ÀS MARGENS DA BR-232
  {
  id: "terreno-br-232-caruaru",
  tipo: "terreno",
  title: "Terreno de 2.500m² às Margens da BR-232",
  price: "R$ 3.000.000",
  location: "BR-232, Caruaru - PE",
  coverImage: "/imoveis/terrenos-e-lotes/terreno-br-232-caruaru/2.jpeg",
  bedrooms: 0,
  bathrooms: 0,
  parking: 0,
  area: "2.500m²",
  description: `TERRENO À VENDA | BR-232, ÀS MARGENS DA VIA LOCAL – CARUARU/PE

Ponto de referência: a 500 metros, em linha reta, do Park Hotel, que fica do outro lado da pista.

CARACTERÍSTICAS DO TERRENO:
- 2.500 m² — escriturado
- Valor: R$ 1.200,00 o metro quadrado (negociável)

POTENCIAL DE USO:
- Posto de combustível
- Hotel e pousada
- Galpões e distribuidora
- Outros ramos de atividades

VALOR DE VENDA: R$ 3.000.000,00 — aceita troca, dependendo da negociação.`,
  videos: ["/imoveis/terrenos-e-lotes/terreno-br-232-caruaru/1.mp4"],
  images: Array.from({ length: 3 }, (_, i) => `/imoveis/terrenos-e-lotes/terreno-br-232-caruaru/${i + 1}.jpeg`),
  amenities: [
    "2.500m² Escriturado",
    "Às Margens da BR-232",
    "A 500m do Park Hotel",
    "Ideal para Posto, Hotel ou Galpão",
    "R$ 1.200,00/m²",
    "Aceita Troca",
  ],
  },
  // 32. BELÍSSIMA CHÁCARA EM CONDOMÍNIO NA ZONA RURAL DE CARUARU
  {
  id: "chacara-zona-rural-caruaru",
  tipo: "terreno",
  title: "Belíssima Chácara em Condomínio na Zona Rural de Caruaru",
  price: "R$ 850.000",
  location: "Zona Rural, Caruaru - PE",
  coverImage: "/imoveis/terrenos-e-lotes/chacara-zona-rural-caruaru/17.jpeg",
  bedrooms: 3,
  bathrooms: 4,
  parking: 6,
  area: "3.168m²",
  description: `BELÍSSIMA CHÁCARA À VENDA | ZONA RURAL DE CARUARU – PE

Loteamento tipo condomínio fechado na zona rural de Caruaru, cerca de 15 minutos do centro da cidade e a 1 km da pista. São 247 lotes, com praça central como área comum. Não paga condomínio; há projeto futuro para portaria 24 horas.

CARACTERÍSTICAS DO IMÓVEL:
- Área: 88 x 36 m = 3.168 m²
- Totalmente na posição nascente
- 01 suíte master (primeiro andar) com vista privativa da piscina
- 02 quartos sociais
- 01 WC social
- Sala para 02 ambientes
- Cozinha ampla com despensa
- Piscina adulto e infantil com cascata
- Espaço wine
- Área gourmet com churrasqueira a carvão e 02 banheiros
- Lago de carpas
- Cisterna de 100 mil litros
- Poço com 1.500 litros/hora
- Circuito de câmeras e alarme
- Portão automático
- Energia fotovoltaica
- Vaga para 06 veículos
- 02 terrenos com árvores frutíferas (12 x 24 m e 36 x 52 m)

VALOR DE VENDA: R$ 850.000,00

Ideal para quem busca um local de lazer com muita paz, segurança e qualidade de vida.`,
  videos: [],
  images: Array.from({ length: 17 }, (_, i) => `/imoveis/terrenos-e-lotes/chacara-zona-rural-caruaru/${i + 1}.jpeg`),
  amenities: [
    "3.168m² (88 x 36 m)",
    "Condomínio Fechado com 247 Lotes",
    "Piscina Adulto e Infantil com Cascata",
    "Espaço Wine",
    "Área Gourmet com Churrasqueira",
    "Lago de Carpas",
    "Cisterna de 100 Mil Litros",
    "Poço com 1.500 Litros/Hora",
    "Energia Fotovoltaica",
    "Câmeras, Alarme e Portão Automático",
    "Vaga para 06 Veículos",
    "Posição Nascente",
  ],
  },
  // 33. CHÁCARA NA LAGOA DO PAULISTA - MATA NEGRA
  {
  id: "chacara-lagoa-do-paulista",
  tipo: "terreno",
  title: "Chácara na Lagoa do Paulista - Mata Negra",
  price: "R$ 1.500.000",
  location: "Lagoa do Paulista, Caruaru - PE",
  coverImage: "/imoveis/terrenos-e-lotes/chacara-lagoa-do-paulista/12.jpeg",
  bedrooms: 4,
  bathrooms: 4,
  parking: 0,
  area: "3.300m²",
  description: `CHÁCARA À VENDA | LAGOA DO PAULISTA – MATA NEGRA, CARUARU/PE

- Área construída: 500 m²
- Terreno: 3.300 m²

ESTRUTURA:
- 04 suítes com varanda
- Piscina com borda infinita — 14 m de ponta a ponta e 7 m no meio
- Fire pit
- Área gourmet com churrasqueira e forno
- Energia solar de 2.500 kW

ÁGUA:
- Cisterna de 100 mil litros
- Cisterna de 80 mil litros
- Cisterna de 20 mil litros

ACESSO:
- São 4,3 km de estrada até a chácara

VALOR DE VENDA: R$ 1.500.000,00 — escritura para desmembrar.`,
  videos: [],
  images: Array.from(
    { length: 28 },
    (_, i) => `/imoveis/terrenos-e-lotes/chacara-lagoa-do-paulista/${i + 1}.jpeg`
  ),
  amenities: [
    "500m² de Área Construída",
    "Terreno de 3.300m²",
    "04 Suítes com Varanda",
    "Piscina com Borda Infinita (14 x 7 m)",
    "Fire Pit",
    "Área Gourmet com Churrasqueira e Forno",
    "Energia Solar de 2.500 kW",
    "Cisternas de 100, 80 e 20 Mil Litros",
    "Escritura para Desmembrar",
  ],
  },
]

// Lista de bairros gerada automaticamente a partir dos imóveis
const bairrosDisponiveis = Array.from(
  new Set(
    imoveisVenda
      .map((imovel) => getBairro(imovel.location))
      .filter(Boolean)
  )
).sort((a, b) => a.localeCompare(b, "pt-BR"))

function PropertyCard({ property }: { property: ImovelVenda }) {
  const images =
    property.images && property.images.length > 0
      ? property.images
      : [property.coverImage]

  const [currentImgIndex, setCurrentImgIndex] = useState(
    Math.max(0, images.indexOf(property.coverImage))
  )

  const totalImages = images.length
  const hasVideos = Boolean(property.videos?.length)

  // Preço longo ("Consulte o valor") vira "Sob consulta" para caber no bloco
  const isConsulta =
    !property.price || property.price.toLowerCase().includes("consulte")
  const priceLabel = isConsulta ? "Sob consulta" : property.price

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setCurrentImgIndex((prev) =>
      prev === 0 ? totalImages - 1 : prev - 1
    )
  }

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setCurrentImgIndex((prev) =>
      prev === totalImages - 1 ? 0 : prev + 1
    )
  }

  return (
    <article
      className="
        group
        bg-white
        rounded-3xl
        p-2
        border border-[#0d3b2e]/10
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        hover:border-[#0d3b2e]/30
        transition-all
        duration-300
        flex flex-col
        justify-between
        h-full
      "
    >
      <div>
        {/* IMAGEM */}
        <Link
          href={`/imoveis/${property.id}`}
          className="
            block
            aspect-[4/3]
            overflow-hidden
            relative
            cursor-pointer
            bg-muted
            rounded-2xl
          "
        >
          <img
            src={images[currentImgIndex] || "/placeholder.jpg"}
            alt={`${property.title} - foto ${currentImgIndex + 1}`}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          {/* BADGE VENDA */}
          <div
            className="
              absolute
              top-3
              left-3
              bg-[#b85d19]
              text-white
              px-3
              py-1
              text-xs
              rounded-full
              font-medium
              shadow-sm
            "
          >
            Venda
          </div>

          {/* VÍDEO */}
          {hasVideos && (
            <div
              className="
                absolute
                top-3
                right-3
                bg-black/60
                backdrop-blur-sm
                text-white
                px-2.5
                py-1
                text-[11px]
                rounded-full
                font-medium
                flex
                items-center
                gap-1
              "
            >
              <Play className="h-3 w-3 fill-white" />

              {property.videos && property.videos.length > 1
                ? `${property.videos.length} Vídeos`
                : "Vídeo"}
            </div>
          )}

          {/* CONTADOR DE IMAGENS */}
          {totalImages > 1 && (
            <div
              className="
                absolute
                bottom-3
                left-3
                bg-black/60
                backdrop-blur-sm
                text-white
                text-[11px]
                font-medium
                px-2
                py-0.5
                rounded-md
              "
            >
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
                className="
                  absolute
                  left-2
                  top-1/2
                  -translate-y-1/2
                  w-8
                  h-8
                  rounded-full
                  bg-white/80
                  hover:bg-white
                  text-foreground
                  flex
                  items-center
                  justify-center
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-200
                  shadow-md
                  hover:scale-105
                "
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Próxima imagem"
                className="
                  absolute
                  right-2
                  top-1/2
                  -translate-y-1/2
                  w-8
                  h-8
                  rounded-full
                  bg-white/80
                  hover:bg-white
                  text-foreground
                  flex
                  items-center
                  justify-center
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-200
                  shadow-md
                  hover:scale-105
                "
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </Link>

        {/* INFORMAÇÕES */}
        <div className="px-3 sm:px-4 pt-4 pb-2">
          {/* LOCALIZAÇÃO */}
          <span
            className="
              text-[11px]
              uppercase
              tracking-wider
              text-muted-foreground
              flex
              items-center
              gap-1
              font-medium
            "
          >
            <MapPin className="h-3.5 w-3.5 text-[#0d3b2e]" />
            {property.location}
          </span>

          {/* TÍTULO */}
          <Link
            href={`/imoveis/${property.id}`}
            className="block"
          >
            <h3
              className="
                text-base
                font-semibold
                text-foreground
                group-hover:text-[#0d3b2e]
                transition-colors
                mt-2
                line-clamp-2
                font-serif
              "
            >
              {property.title}
            </h3>
          </Link>

          {/* CARACTERÍSTICAS */}
          <div className="flex flex-wrap items-center gap-1.5 mt-4">
            <span
              className="
                inline-flex
                items-center
                gap-1
                rounded-full
                bg-[#0d3b2e]/5
                px-2.5
                py-1
                text-[11px]
                font-medium
                text-muted-foreground
              "
            >
              <Bed className="h-3.5 w-3.5 text-[#0d3b2e]" />
              {property.bedrooms}
            </span>

            <span
              className="
                inline-flex
                items-center
                gap-1
                rounded-full
                bg-[#0d3b2e]/5
                px-2.5
                py-1
                text-[11px]
                font-medium
                text-muted-foreground
              "
            >
              <Bath className="h-3.5 w-3.5 text-[#0d3b2e]" />
              {property.bathrooms}
            </span>

            {property.parking > 0 && (
              <span
                className="
                  inline-flex
                  items-center
                  gap-1
                  rounded-full
                  bg-[#0d3b2e]/5
                  px-2.5
                  py-1
                  text-[11px]
                  font-medium
                  text-muted-foreground
                "
              >
                <Car className="h-3.5 w-3.5 text-[#0d3b2e]" />
                {property.parking}
              </span>
            )}

            {property.area && (
              <span
                className="
                  inline-flex
                  items-center
                  gap-1
                  rounded-full
                  bg-[#0d3b2e]/5
                  px-2.5
                  py-1
                  text-[11px]
                  font-medium
                  text-muted-foreground
                "
              >
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
          <span className="min-w-0 truncate font-serif font-bold text-white text-sm leading-none whitespace-nowrap">
            {priceLabel}
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

function ImoveisParaVendaContent() {
  const [tipoFiltro, setTipoFiltro] = useState<
    "todos" | "apartamento" | "casa" | "terreno"
  >("todos")

  const [bairroFiltro, setBairroFiltro] = useState<string>("todos")
  const [faixaPrecoFiltro, setFaixaPrecoFiltro] =
    useState<string>("todas")

  // Lógica de filtragem combinada
  const imoveisFiltrados = imoveisVenda.filter((imovel) => {
    // 1. Tipo
    if (
      tipoFiltro !== "todos" &&
      imovel.tipo !== tipoFiltro
    ) {
      return false
    }

    // 2. Bairro
    if (
      bairroFiltro !== "todos" &&
      getBairro(imovel.location) !== bairroFiltro
    ) {
      return false
    }

    // 3. Faixa de Preço
    if (faixaPrecoFiltro !== "todas") {
      const valor = parsePreco(imovel.price)

      if (valor > 0) {
        if (
          faixaPrecoFiltro === "ate_300" &&
          valor > 300000
        ) {
          return false
        }

        if (
          faixaPrecoFiltro === "300_600" &&
          (valor < 300000 || valor > 600000)
        ) {
          return false
        }

        if (
          faixaPrecoFiltro === "600_1500" &&
          (valor < 600000 || valor > 1500000)
        ) {
          return false
        }

        if (
          faixaPrecoFiltro === "acima_1500" &&
          valor < 1500000
        ) {
          return false
        }
      }
    }

    return true
  })

  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-10 bg-[#0d3b2e] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/empreendimentos"
            className="
              inline-flex
              items-center
              text-sm
              text-white/70
              hover:text-white
              transition-colors
              mb-6
            "
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Categorias
          </Link>

          <span
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-[#b85d19]
              font-semibold
              block
            "
          >
            Categoria
          </span>

          <h1
            className="
              font-serif
              text-4xl
              md:text-5xl
              font-light
              mt-2
              text-white
            "
          >
            Imóveis para Venda
          </h1>

          <p className="text-white/75 mt-3 max-w-2xl text-sm md:text-base">
            Casas, apartamentos e residências selecionadas para compra em
            Caruaru.
          </p>
        </div>
      </section>

      {/* DESTAQUES */}
      <FeaturedCarousel
        properties={saleProperties}
        title="Imóveis em Destaque para Venda"
        subtitle="Destaques de Venda"
        type="venda"
      />

      {/* CATÁLOGO */}
      <section className="py-12 bg-[#faf7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* FILTROS */}
          <div
            className="
              bg-white
              rounded-2xl
              p-4
              md:p-6
              shadow-xl
              shadow-black/5
              border
              border-border/60
              mb-12
            "
          >
            {/* TOPO DOS FILTROS */}
            <div className="flex items-center justify-between px-2 mb-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-[#b85d19]" />

                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    text-[#0d3b2e]
                  "
                >
                  Filtrar Catálogo
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-muted-foreground">
                  <strong className="text-[#0d3b2e] font-bold">
                    {imoveisFiltrados.length}
                  </strong>{" "}
                  {imoveisFiltrados.length === 1
                    ? "imóvel encontrado"
                    : "imóveis encontrados"}
                </span>

                {(tipoFiltro !== "todos" ||
                  bairroFiltro !== "todos" ||
                  faixaPrecoFiltro !== "todas") && (
                  <button
                    type="button"
                    onClick={() => {
                      setTipoFiltro("todos")
                      setBairroFiltro("todos")
                      setFaixaPrecoFiltro("todas")
                    }}
                    className="
                      text-xs
                      font-semibold
                      text-[#b85d19]
                      hover:text-[#0d3b2e]
                      transition-colors
                    "
                  >
                    Resetar
                  </button>
                )}
              </div>
            </div>

            {/* CAMPOS */}
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-3
                bg-[#faf8f5]
                rounded-xl
                border
                border-border/80
                divide-y
                md:divide-y-0
                md:divide-x
                divide-border/80
                overflow-hidden
              "
            >
              {/* TIPO */}
              <div
                className="
                  relative
                  p-3.5
                  px-4
                  hover:bg-white
                  transition-colors
                  duration-200
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    p-2.5
                    rounded-lg
                    bg-[#0d3b2e]/5
                    text-[#0d3b2e]
                    shrink-0
                  "
                >
                  <Home className="h-4 w-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <label
                    className="
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-[#b85d19]
                    "
                  >
                    Tipo de Imóvel
                  </label>

                  <div className="relative mt-0.5">
                    <select
                      value={tipoFiltro}
                      onChange={(e) =>
                        setTipoFiltro(
                          e.target.value as
                            | "todos"
                            | "apartamento"
                            | "casa"
                            | "terreno"
                        )
                      }
                      className="
                        w-full
                        bg-transparent
                        text-sm
                        font-semibold
                        text-foreground
                        focus:outline-none
                        appearance-none
                        cursor-pointer
                        pr-6
                        truncate
                      "
                    >
                      <option value="todos">
                        Todos os Tipos
                      </option>

                      <option value="casa">
                        Casas
                      </option>

                      <option value="apartamento">
                        Apartamentos
                      </option>

                      <option value="terreno">
                        Terrenos e Lotes
                      </option>
                    </select>

                    <ChevronDown
                      className="
                        absolute
                        right-0
                        top-1/2
                        -translate-y-1/2
                        h-4
                        w-4
                        text-muted-foreground
                        pointer-events-none
                      "
                    />
                  </div>
                </div>
              </div>

              {/* BAIRRO */}
              <div
                className="
                  relative
                  p-3.5
                  px-4
                  hover:bg-white
                  transition-colors
                  duration-200
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    p-2.5
                    rounded-lg
                    bg-[#0d3b2e]/5
                    text-[#0d3b2e]
                    shrink-0
                  "
                >
                  <MapPin className="h-4 w-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <label
                    className="
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-[#b85d19]
                    "
                  >
                    Bairro em Caruaru
                  </label>

                  <div className="relative mt-0.5">
                    <select
                      value={bairroFiltro}
                      onChange={(e) =>
                        setBairroFiltro(e.target.value)
                      }
                      className="
                        w-full
                        bg-transparent
                        text-sm
                        font-semibold
                        text-foreground
                        focus:outline-none
                        appearance-none
                        cursor-pointer
                        pr-6
                        truncate
                      "
                    >
                      <option value="todos">
                        Todos os Bairros
                      </option>

                      {bairrosDisponiveis.map((bairro) => (
                        <option
                          key={bairro}
                          value={bairro}
                        >
                          {bairro}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      className="
                        absolute
                        right-0
                        top-1/2
                        -translate-y-1/2
                        h-4
                        w-4
                        text-muted-foreground
                        pointer-events-none
                      "
                    />
                  </div>
                </div>
              </div>

              {/* PREÇO */}
              <div
                className="
                  relative
                  p-3.5
                  px-4
                  hover:bg-white
                  transition-colors
                  duration-200
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    p-2.5
                    rounded-lg
                    bg-[#0d3b2e]/5
                    text-[#0d3b2e]
                    shrink-0
                  "
                >
                  <Building className="h-4 w-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <label
                    className="
                      block
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-[#b85d19]
                    "
                  >
                    Valor Investimento
                  </label>

                  <div className="relative mt-0.5">
                    <select
                      value={faixaPrecoFiltro}
                      onChange={(e) =>
                        setFaixaPrecoFiltro(e.target.value)
                      }
                      className="
                        w-full
                        bg-transparent
                        text-sm
                        font-semibold
                        text-foreground
                        focus:outline-none
                        appearance-none
                        cursor-pointer
                        pr-6
                        truncate
                      "
                    >
                      <option value="todas">
                        Todas as Faixas de Preço
                      </option>

                      <option value="ate_300">
                        Até R$ 300 mil
                      </option>

                      <option value="300_600">
                        R$ 300 mil – R$ 600 mil
                      </option>

                      <option value="600_1500">
                        R$ 600 mil – R$ 1,5 milhão
                      </option>

                      <option value="acima_1500">
                        Acima de R$ 1,5 milhão
                      </option>
                    </select>

                    <ChevronDown
                      className="
                        absolute
                        right-0
                        top-1/2
                        -translate-y-1/2
                        h-4
                        w-4
                        text-muted-foreground
                        pointer-events-none
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GRID */}
          {imoveisFiltrados.length > 0 ? (
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-4
                gap-8
              "
            >
              {imoveisFiltrados.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                />
              ))}
            </div>
          ) : (
            <div
              className="
                text-center
                py-16
                bg-white
                rounded-2xl
                border
                border-border
              "
            >
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
                className="
                  mt-3
                  text-[#0d3b2e]
                  font-semibold
                  hover:underline
                  text-sm
                "
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

export default function ImoveisParaVendaPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center">
          Carregando imóveis para venda...
        </div>
      }
    >
      <ImoveisParaVendaContent />
    </Suspense>
  )
}