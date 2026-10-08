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
// APARTAMENTOS PARA ALUGAR (EDITE SEUS IMÓVEIS AQUI)
// =========================================================================
const apartamentosAluguel = [
  // 1. EDIFÍCIO TEREZA RODRIGUES (35 FOTOS - SEM VÍDEO)
  {
    id: "ap-edificio-tereza-rodrigues",
    title: "Apartamento no Edifício Tereza Rodrigues",
    price: "R$ 4.000 / mês (Incluso Aluguel e Condomínio)",
    location: "Boa Viagem, Recife - PE",
    coverImage: "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/1.jpeg",
    bedrooms: 2,
    bathrooms: 3,
    parking: 1,
    area: "64m²",
    description: `Excelente oportunidade de locação no Edifício Tereza Rodrigues, localizado na Rua Ana Camelo da Silva, em Boa Viagem, Recife - PE. 

Apartamento nº 1202, situado em andar alto, oferecendo ótima ventilação, iluminação natural e vista agradável.

Configuração do imóvel:
• Área privativa: 64 m²
• 2 quartos (sendo 1 suíte)
• Sala para 2 ambientes com varanda
• Banheiro social
• Cozinha funcional com área de serviço
• Dependência completa de serviço (quarto e WC)
• 1 vaga de garagem coberta

Condições de locação:
• Valor mensal: R$ 4.000,00 (incluso aluguel e condomínio).`,
    video: null,
    images: [
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/1.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/2.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/3.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/4.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/5.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/6.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/7.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/8.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/9.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/10.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/11.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/12.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/13.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/14.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/15.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/16.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/17.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/18.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/19.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/20.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/21.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/22.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/23.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/24.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/25.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/26.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/27.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/28.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/29.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/30.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/31.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/32.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/33.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/34.jpeg",
      
    ],
    amenities: [
      "Andar Alto",
      "Varanda",
      "1 Suíte",
      "Dependência Completa de Serviço",
      "1 Vaga de Garagem Coberta",
      "Excelente Localização em Boa Viagem",
      "Condomínio Incluso no Valor",
      "Próximo a Serviços e Comércio",
    ],
  },

  // 2. EDIFÍCIO JARDIM DOS ALECRINS (33 FOTOS - SEM VÍDEO)
  {
    id: "ap-edificio-jardim-dos-alecrins",
    title: "Apartamento Mobiliado no Edifício Jardim dos Alecrins",
    price: "R$ 2.800 / mês (Incluso Água, Gás, Condomínio e IPTU)",
    location: "Universitário, Caruaru - PE",
    coverImage: "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/1.jpeg",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    area: "54m²",
    description: `Aluga-se excelente apartamento totalmente mobiliado no Edifício Jardim dos Alecrins, situado no Bairro Universitário em Caruaru, próximo à Faculdade ASCES.

Imóvel totalmente nascente e de ponta, localizado no 1º andar, proporcionando excelente ventilação e conforto térmico.

Configuração do imóvel:
• 2 quartos mobiliados (sendo 1 equipado com ar-condicionado)
• 1 banheiro social completo
• Sala para dois ambientes
• Cozinha funcional e equipada
• Área de serviço
• 1 vaga de garagem privativa

Estrutura de lazer do condomínio:
• Piscina adulto e infantil
• Playground e Brinquedoteca
• Salão de festas
• Espaço verde com áreas de convivência e caminhadas

Segurança e sustentabilidade:
• Portaria com controle de acesso 24 horas
• Ronda motorizada
• Monitoramento por câmeras de segurança e cerca elétrica
• Sistema de energia solar nas áreas comuns

Condições de locação:
• Valor mensal: R$ 2.800,00 com taxas inclusas (água, gás encanado, taxa condominial e IPTU).`,
    video: null,
    images: [
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/1.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/2.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/3.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/4.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/5.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/6.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/7.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/8.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/9.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/10.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/11.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/12.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/13.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/14.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/15.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/16.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/17.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/18.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/19.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/20.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/21.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/22.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/23.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/24.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/25.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/26.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/27.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/28.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/29.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/30.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/31.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/32.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/33.jpeg",
    ],
    amenities: [
      "Totalmente Mobiliado",
      "Posição Nascente / De Ponta",
      "Ar-condicionado",
      "Próximo à Faculdade ASCES",
      "Piscina Adulto e Infantil",
      "Salão de Festas",
      "Playground e Brinquedoteca",
      "Portaria 24h e Ronda Motorizada",
      "Circuito de Câmeras e Cerca Elétrica",
      "Energia Solar nas Áreas Comuns",
      "1 Vaga de Garagem",
      "Taxas Inclusas (Água, Gás, Condomínio e IPTU)",
    ],
  },

  // 3. APARTAMENTO DE ALTO PADRÃO - PRONTO PARA MORAR (29 FOTOS + 1 VÍDEO)
  {
    id: "ap-studio-alto-padrao-shopping",
    title: "Apartamento de Alto Padrão - Pronto para Morar",
    price: "R$ 4.000 / mês",
    location: "Maurício de Nassau, Caruaru - PE",
    coverImage: "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/1.jpeg",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: "38m²",
    description: `Viva o conceito pronto para morar em Caruaru. Apartamento de alto padrão disponível para locação exclusiva.

Ideal para quem busca praticidade, conforto e sofisticação em um único endereço planejado nos mínimos detalhes.

• Área privativa: Aproximadamente 38 m²
• Configuração: 1 quarto totalmente mobiliado e decorado
• Estado: Pronto para morar

Diferenciais do imóvel:
• Móveis planejados de alto padrão em todos os ambientes
• Projeto luminotécnico moderno e contemporâneo
• Mobiliário completo e eletrodomésticos de excelente qualidade
• Bancadas nobres em mármore Nanoglass
• Banheiro amplo, sofisticado e funcional
• Acabamentos de padrão construtivo superior
• Vista privilegiada para a cidade
• 1 vaga de garagem coberta (opcional, com possibilidade de contratação para mensalista)

Infraestrutura do empreendimento:
• Complexo integrado com aproximadamente 80 operações comerciais no padrão shopping center
• 2 restaurantes e Espaço Gourmet
• Academia com equipamentos modernos
• Espaço de coworking e salas de reunião corporativas
• Salas exclusivas para eventos e confraternizações`,
    video: "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/19.mp4",
    images: [
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/1.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/2.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/3.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/4.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/5.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/6.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/7.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/8.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/9.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/10.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/11.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/12.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/13.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/14.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/15.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/16.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/17.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/18.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/20.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/21.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/22.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/23.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/24.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/25.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/26.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/27.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/28.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/29.jpeg",
      "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/30.jpeg",
    ],
    amenities: [
      "Totalmente Mobiliado",
      "Pronto para Morar",
      "Bancadas em Nanoglass",
      "Móveis Planejados",
      "Eletrodomésticos Inclusos",
      "Vista Panorâmica",
      "Complexo com 80 Lojas",
      "Academia Completa",
      "Coworking e Salas de Reunião",
      "2 Restaurantes e Espaço Gourmet",
      "Portaria e Segurança 24h",
      "Garagem Coberta (Opcional)",
    ],
  },

  // 4. EDIFÍCIO JOÃO SOARES
  {
    id: "ap-edificio-joao-soares",
    title: "Apartamento de Alto Padrão no Edifício João Soares",
    price: "R$ 4.200 / mês (Incluso Condomínio e IPTU)",
    location: "Maurício de Nassau, Caruaru - PE",
    coverImage: "/imoveis/apartamentos-para-alugar/edificio-joao-soares/1.jpeg",
    bedrooms: 2,
    bathrooms: 3,
    parking: 2,
    area: "80m²",
    description: `Excelente oportunidade de locação no Edifício João Soares, localizado no nobre bairro Maurício de Nassau em Caruaru - PE. Andar alto, todo revestido em porcelanato Elizabeth e equipado com móveis planejados Finger (na garantia e de altíssimo padrão).

• Configuração: 2 quartos (sendo 2 suítes com móveis Finger — planta original com 1 quarto ampliado, reversível para 3 quartos).
• Garagem: 2 vagas cobertas no pavimento térreo.
• Sala ampla e integrada (Estar e Jantar) com forro em gesso, iluminação planejada, parede decorativa 3D e painel ripado Finger.
• Cozinha completa planejada com armários espelhados, bancada em mármore branco estrelado, coifa, cooktop, forno embutido, depurador e jogo com 5 cadeiras.
• Suíte Master do Casal: Guarda-roupa planejado do chão ao teto com espelho, gaveteiro com divisórias para joias/relógios, penteadeira, ar-condicionado Electrolux 12.000 BTUs, lustre e acabamento em gesso.
• Suíte Solteiro: Ar-condicionado, guarda-roupa, escrivaninha de estudos e nichos planejados.
• Banheiros: 3 banheiros completos (2 suítes + 1 social) com bancadas em mármore, metais Deca e chuveiros Lorenzetti.
• Condomínio: Portaria 24h, elevador social e de serviço, sistema de gás encanado.`,
    video: null,
    images: [
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/1.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/2.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/3.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/4.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/5.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/6.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/7.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/8.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/9.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/10.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/11.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/12.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-joao-soares/13.jpeg",
    ],
    amenities: [
      "Móveis Planejados Finger",
      "Andar Alto",
      "2 Suítes + WC Social",
      "Ar-condicionado nos quartos",
      "Cooktop, Coifa e Forno",
      "Porcelanato Elizabeth",
      "2 Vagas Cobertas",
      "Portaria 24 horas",
      "Elevador Social e Serviço",
      "Gás Encanado",
      "Próximo a Faculdades e Clínicas",
      "Condomínio e IPTU Inclusos",
    ],
  },

  // 5. CONDOMÍNIO CAMINHO DAS AROEIRAS
  {
    id: "ap-caminho-das-aroeiras",
    title: "Apartamento Condomínio Caminho das Aroeiras",
    price: "Consulte o valor",
    location: "Indianópolis, Caruaru - PE",
    coverImage: "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/7.jpeg",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    area: "52m²",
    description: `Procurando praticidade, segurança e lazer completo no bairro Indianópolis? Conheça este apartamento no Condomínio Caminho das Aroeiras.

O imóvel conta com 2 quartos bem ventilados, sala para 2 ambientes (estar/jantar), cozinha prática com área de serviço, 1 WC social e 1 vaga de garagem privativa.

Localização privilegiada: a poucos passos do Caruaru Shopping, faculdades e principais vias da cidade.`,
    video: null,
    images: [
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/7.jpeg",
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/1.jpeg",
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/2.jpeg",
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/3.jpeg",
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/4.jpeg",
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/5.jpeg",
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/6.jpeg",
      
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/8.jpeg",
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/9.jpeg",
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/10.jpeg",
      "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/11.jpeg",
    ],
    amenities: [
      "Próximo ao Caruaru Shopping",
      "Piscina Adulto e Infantil",
      "Salão de Festas",
      "Espaço Gourmet com Churrasqueira",
      "Playground",
      "Portaria e Segurança 24h",
      "Sala para 2 Ambientes",
      "Área de Serviço",
      "Garagem Privativa",
    ],
  },

  // 6. EKO HOME CLUB - TORRE IPÊ
  {
    id: "ap-eko-home-club-torre-ipe-aluguel",
    title: "Apartamento para Locação no Eko Home Club – Torre Ipê",
    price: "R$ 2.700 / mês (Condomínio e IPTU Inclusos)",
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
    video: null,
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
  // 7. APARTAMENTO MOBILIADO NO EDIFÍCIO PLAZA (ALUGADA)
  {
  id: "ap-edf-plaza-caruaru-aluguel",
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
  video: null,
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
  // 8. FLAT MOBILIADO NO LIFE CENTER
  {
  id: "ap-life-center-flat-mobiliado",
  title: "Flat Mobiliado no Life Center",
  price: "R$ 2.500 / mês",
  location: "Life Center, Caruaru - PE",
  coverImage: "/imoveis/apartamentos-para-alugar/ap-life-center-flat-mobiliado/3.jpeg",
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
  video: null,
  images: Array.from({ length: 13 }, (_, i) => `/imoveis/apartamentos-para-alugar/ap-life-center-flat-mobiliado/${i + 1}.jpeg`),
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
  // 9. FLAT MOBILIADO NO EDIFÍCIO MULTIPORTO
  {
  id: "ap-flat-multiporto-indianopolis",
  title: "Flat Mobiliado no Edifício Multiporto",
  price: "R$ 2.200 / mês",
  location: "Indianópolis, Caruaru - PE",
  coverImage: "/imoveis/apartamentos-para-alugar/ap-flat-multiporto-indianopolis/1.jpeg",
  bedrooms: 1,
  bathrooms: 1,
  parking: 0,
  area: "35m²",
  alugado: true,
  description: `FLAT MOBILIADO PARA LOCAÇÃO | EDF. MULTIPORTO – INDIANÓPOLIS/CARUARU-PE

CARACTERÍSTICAS DO IMÓVEL:
- 35 m²
- 01 sala integrada à cozinha
- 01 quarto
- 01 banheiro

VALOR DA LOCAÇÃO: R$ 2.200,00/mês — incluso condomínio e IPTU.

CONDIÇÕES: garantia mediante caução.

ATENÇÃO: imóvel atualmente ALUGADO.`,
  video: null,
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
    "Imóvel Alugado",
  ],
  },
  // 10. APARTAMENTO PARA LOCAÇÃO NO BAIRRO UNIVERSITÁRIO (ALUGADA)
  {
  id: "ap-universitario-aracati-aluguel",
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
  video: null,
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
  // 11. FLAT DE 01 QUARTO NO BELLE VILLE
  {
  id: "ap-belle-ville-flat",
  title: "Flat de 01 Quarto no Belle Ville",
  price: "R$ 2.500 / mês",
  location: "Belle Ville, Caruaru - PE",
  coverImage: "/imoveis/apartamentos-para-alugar/ap-belle-ville-flat/1.jpeg",
  bedrooms: 1,
  bathrooms: 1,
  parking: 0,
  area: "",
  alugado: true,
  description: `FLAT PARA LOCAÇÃO | BELLE VILLE – CARUARU/PE

Flat com 01 quarto disponível para locação.

VALOR DA LOCAÇÃO: R$ 2.500,00/mês — incluso condomínio e IPTU.

CONDIÇÕES: garantia mediante caução em 3x.

ATENÇÃO: imóvel atualmente ALUGADO.`,
  video: null,
  images: Array.from(
    { length: 8 },
    (_, i) => `/imoveis/apartamentos-para-alugar/ap-belle-ville-flat/${i + 1}.jpeg`
  ),
  amenities: [
    "01 Quarto",
    "Flat Mobiliado",
    "Condomínio e IPTU Inclusos",
    "Garantia: Caução em 3x",
    "Imóvel Alugado",
  ],
  },
  // 12. APARTAMENTO COM VARANDA NO MAURÍCIO DE NASSAU (ALUGADA)
  {
  id: "ap-mauricio-de-nassau-80m-aluguel",
  title: "Apartamento com Varanda no Maurício de Nassau",
  price: "R$ 2.600 / mês",
  location: "Maurício de Nassau, Caruaru - PE",
  coverImage: "/imoveis/apartamentos-para-venda/ap-mauricio-de-nassau-80m/10.jpeg",
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
  video: null,
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
]

function PropertyCard({
  property,
  onSelect,
}: {
  property: (typeof apartamentosAluguel)[0]
  onSelect: () => void
}) {
  const [currentImgIndex, setCurrentImgIndex] = useState(
    Math.max(0, property.images.indexOf(property.coverImage))
  )
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

          <div className="absolute top-3 left-3 bg-[#b85d19] text-white px-3 py-1 text-xs rounded-full font-medium shadow-sm">
            Locação
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

function ApartamentosParaAlugarContent() {
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

  const activeProperty = apartamentosAluguel.find((p) => p.id === selectedId)

  const mediaItems = activeProperty
    ? [
        ...(activeProperty.video ? [{ type: "video" as const, src: activeProperty.video }] : []),
        ...(activeProperty.images.length > 0 ? activeProperty.images : [activeProperty.coverImage]).map((src) => ({
          type: "image" as const,
          src,
          alt: activeProperty.title,
        })),
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
          <h1 className="font-serif text-4xl md:text-5xl font-light mt-2 text-white">Apartamentos para Alugar</h1>
          <p className="text-white/75 mt-3 max-w-2xl text-sm md:text-base">
            Explore nossas opções de apartamentos e flats para locação exclusiva.
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

                {/* Player de Vídeo Incorporado */}
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
                    Valor da Locação
                  </span>
                  <p className="font-serif text-2xl md:text-3xl text-[#0d3b2e] font-bold my-2">
                    {activeProperty.price || "Sob Consulta"}
                  </p>

                  {activeProperty.alugado && (
                    <p className="text-sm font-medium text-red-600">
                      Imóvel alugado no momento
                    </p>
                  )}

                  <div className="space-y-3 mt-6">
                    <Button asChild className="w-full bg-[#0d3b2e] hover:bg-[#092920] text-white" size="lg">
                      <a
                        href={`${siteConfig.whatsappLink}?text=Olá! Tenho interesse no imóvel: ${activeProperty.title}`}
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

      {/* Grid de Cards dos Imóveis em 4 colunas */}
      <section className="py-16 bg-[#faf7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8 border-l-4 border-[#b85d19] pl-3">
            <p className="text-sm font-medium text-foreground">
              Mostrando <span className="font-bold text-[#0d3b2e]">{apartamentosAluguel.length}</span> imóveis
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {apartamentosAluguel.map((property) => (
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

export default function ApartamentosParaAlugarPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ApartamentosParaAlugarContent />
    </Suspense>
  )
}