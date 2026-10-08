// lib/imoveis-data.ts

export type ImovelCompleto = {
  id: string
  title: string
  price: string
  location: string
  type: "venda" | "aluguel" | "comercial"
  category: "apartamento" | "casa" | "ponto" | "comercial" | "terreno"
  featured?: boolean
  coverImage: string
  bedrooms?: number
  bathrooms: number
  parking: number
  area: string
  description: string
  videos?: string[]
  images: string[]
  amenities: string[]
  /** true = imóvel alugado (exibido com selo "Alugado"; continua disponível para venda) */
  alugado?: boolean
  backUrl: string
  backLabel: string
}

export const todosImoveis: ImovelCompleto[] = [
  // =========================================================================
  // --- VENDA ---
  // =========================================================================

  {
  id: "casa-luar-do-sumare-indianopolis",
  title: "Casa Térrea Residencial no Luar do Sumaré",
  price: "R$ 450.000",
  location: "Indianópolis, Caruaru - PE",
  type: "venda",
  category: "casa",
  featured: true,
  coverImage: "/imoveis/casas-para-venda/casa-luar-do-sumare/1.jpeg",
  bedrooms: 3,
  bathrooms: 2,
  parking: 1,
  area: "109m²",
  description: `CASA TÉRREA RESIDENCIAL À VENDA | LUAR DO SUMARÉ — INDIANÓPOLIS/PE

Excelente oportunidade para morar ou investir em uma das regiões mais valorizadas de Caruaru!

Casas térreas em localização privilegiada, no Indianópolis, a apenas 5 minutos do Centro e próximas ao Caruaru Shopping e ao Parque Ambiental Severino Montenegro.

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
  images: [
    ...Array.from(
      { length: 7 },
      (_, i) =>
        `/imoveis/casas-para-venda/casa-luar-do-sumare/${i + 1}.jpeg`
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
  backUrl: "/empreendimentos/imoveis-para-alugar",
  backLabel: "Voltar para Imóveis",
},

  {
  id: "casa-luar-do-sumare-indianopolis",
  title: "Casa Térrea Residencial no Luar do Sumaré",
  price: "R$ 450.000",
  location: "Indianópolis, Caruaru - PE",
  type: "venda",
  category: "casa",
  featured: true,
  coverImage: "/imoveis/casas-para-venda/casa-luar-do-sumare/1.jpeg",
  bedrooms: 3,
  bathrooms: 2,
  parking: 1,
  area: "109m²",
  description: `CASA TÉRREA RESIDENCIAL À VENDA | LUAR DO SUMARÉ — INDIANÓPOLIS/PE

Excelente oportunidade para morar ou investir em uma das regiões mais valorizadas de Caruaru!

Casas térreas em localização privilegiada, no Indianópolis, a apenas 5 minutos do Centro e próximas ao Caruaru Shopping e ao Parque Ambiental Severino Montenegro.

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
  images: [
    ...Array.from(
      { length: 7 },
      (_, i) =>
        `/imoveis/casas-para-venda/casa-luar-do-sumare/${i + 1}.jpeg`
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
  backUrl: "/empreendimentos/imoveis-para-alugar",
  backLabel: "Voltar para Imóveis",
},
  {
    id: "casa-terrea-quintas-da-colina-2",
    title: "Magnífica Casa de Alto Padrão no Quintas da Colina II",
    price: "Consulte o valor",
    location: "Quintas da Colina II, Caruaru - PE",
    type: "venda",
    category: "casa",
    featured: true,
    coverImage: "/imoveis/casas-para-venda/casa-terrea-quintas-da-colina-2/1.jpeg",
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

Disponível também para LOCAÇÃO por R$ 13.000,00/mês (incluso condomínio e IPTU).`,
    images: Array.from({ length: 4 }, (_, i) => `/imoveis/casas-para-venda/casa-terrea-quintas-da-colina-2/${i + 1}.jpeg`),
    amenities: [
      "Casa Nova (Nunca Habitada)",
      "Piscina com Prainha",
      "Pé-Direito Duplo",
      "Pele de Vidro na Fachada",
      "Área Gourmet com Churrasqueira",
      "4 Suítes com Máster e Closet",
      "Garagem para 6 Carros",
      "Terreno de 600m²",
    ],
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },
  {
    id: "casa-condominio-green-garden-residence",
    title: "Casa no Condomínio Green Garden Residence",
    price: "R$ 900.000",
    location: "Caruaru - PE",
    type: "venda",
    category: "casa",
    featured: true,
    coverImage: "/imoveis/casas-para-venda/casa-green-garden-residence/1.jpeg",
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
    images: Array.from({ length: 2 }, (_, i) => `/imoveis/casas-para-venda/casa-green-garden-residence/${i + 1}.jpeg`),
    amenities: [
      "2 Suítes",
      "Garagem para 4 Carros",
      "Cozinha Americana",
      "Escada Rústica em Madeira",
      "Varanda e Quintal",
      "Portaria e Segurança 24h",
      "Infraestrutura Completa de Condomínio",
    ],
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },
  {
    id: "casa-mauricio-de-nassau-acqua-home-clube",
    title: "Casa de Alto Padrão no Bairro Maurício de Nassau",
    price: "R$ 1.500.000",
    location: "Maurício de Nassau, Caruaru - PE",
    type: "venda",
    category: "casa",
    featured: true,
    coverImage: "/imoveis/casas-para-venda/casa-mauricio-de-nassau-acqua/1.jpeg",
    bedrooms: 8,
    bathrooms: 6,
    parking: 4,
    area: "520m²",
    description: `CASA À VENDA NO BAIRRO MAURÍCIO DE NASSAU

Ao lado do Edifício Acqua Home Clube!

Uma residência fantástica com excelente espaço interno e área construída de 520 m² em um terreno de 12x27m no coração do Bairro Maurício de Nassau.

DESCRIÇÃO DO IMÓVEL:

Área Construída: 520 m²
Área do Terreno: 12x27m

PAVIMENTO TÉRREO:
- Garagem para 4 vagas
- Terraço
- Sala ampla para 2 ambientes
- 2 quartos de hóspedes
- Banheiro social
- Cozinha ampla
- Área de serviço
- Quintal
- Cozinha de apoio + despensa
- Dependência completa de serviço + banheiro
- 2 quartos de hóspedes na área de serviço
- Jardim de inverno

1º ANDAR:
- Escada de acesso
- Varanda privativa
- Escritório
- Sala ampla de TV
- 3 suítes master com hidromassagem
- Salão para área gourmet
- 1 quarto adicional
- Banheiro social

VALOR DE VENDA: R$ 1.500.000,00

Localização nobre, ao lado do Edifício Acqua Home Clube, próxima a polos de saúde, educação e principais avenidas da cidade.`,
    images: Array.from({ length: 20 }, (_, i) => `/imoveis/casas-para-venda/casa-mauricio-de-nassau-acqua/${i + 1}.jpeg`),
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
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },
  {
    id: "ap-edificio-cely-miranda-universitario",
    title: "Apartamento no Edifício Cely Miranda",
    price: "R$ 1.750.000",
    location: "Universitário, Caruaru - PE",
    type: "venda",
    category: "apartamento",
    featured: true,
    coverImage: "/imoveis/apartamentos-para-venda/edificio-cely-miranda/1.jpeg",
    bedrooms: 4,
    bathrooms: 4,
    parking: 3,
    area: "172m²",
    description: `UM DOS APARTAMENTOS MAIS EXCLUSIVOS DE CARUARU

EDIFÍCIO CELY MIRANDA | UNIVERSITÁRIO

Uma residência diferenciada para quem procura amplitude, sofisticação, localização privilegiada e praticidade, em um dos endereços mais desejados de Caruaru.

Av. Amazonas, nº 1017 a 1203 – Universitário, Caruaru/PE
172 m²
4 suítes
3 vagas de garagem cobertas
100% reformado
Porteira fechada
Escriturado e regularizado
Aceita financiamento

UM APARTAMENTO PRONTO PARA MORAR

Você não precisa enfrentar obra, reforma ou período de espera.

O imóvel foi completamente reformado e será comercializado porteira fechada, proporcionando uma experiência de compra diferenciada: você adquire um apartamento pronto, completo e cuidadosamente preparado para morar.

ESTRUTURA DO EDIFÍCIO CELY MIRANDA

Um condomínio pensado para oferecer conforto, lazer e segurança:

- Piscinas adulto e infantil
- Piscina com raia
- Academia / fitness
- Salão de festas
- Espaço gourmet
- Brinquedoteca
- Área esportiva
- Área de lazer
- Elevadores sociais e de serviço
- Portaria 24 horas

LOCALIZAÇÃO PRIVILEGIADA

Morar no Universitário significa estar cercado por uma das estruturas mais completas da cidade.

No entorno estão importantes pontos de saúde, educação, serviços, gastronomia, comércio e conveniência, incluindo:

- Polo Médico / Centro Médico do Agreste
- Hospital da Unimed
- Hospital Santa Águeda
- Polo Jurídico de Caruaru
- Fórum Estadual
- Fórum Federal
- ASCES-UNITA
- Wyden / instituições de ensino
- Supermercados e conveniências
- Farmácias
- Academias
- Colégios e escolas
- Restaurantes e serviços

A região ainda oferece acesso estratégico às principais vias de Caruaru, conectando o Universitário a Maurício de Nassau, Indianópolis, Centro e às principais rodovias de acesso à cidade.

É uma localização que combina qualidade de vida para morar e praticidade para trabalhar, especialmente para profissionais das áreas médica, jurídica e empresarial.

VALOR DE VENDA

R$ 1.750.000,00

Imóvel escriturado e regularizado
Aceita financiamento bancário

Um imóvel diferenciado, em um endereço diferenciado, para quem não abre mão de exclusividade.

Visitas exclusivamente mediante agendamento.`,
    images: Array.from({ length: 40 }, (_, i) => `/imoveis/apartamentos-para-venda/edificio-cely-miranda/${i + 1}.jpeg`),
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
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },
  {
    id: "ap-viver-bem-indianopolis-908",
    title: "Apartamento no Viver Bem Indianópolis",
    price: "Consulte o valor",
    location: "Indianópolis, Caruaru - PE",
    type: "venda",
    category: "apartamento",
    featured: true,
    coverImage: "/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/1.jpeg",
    bedrooms: 3,
    bathrooms: 2,
    parking: 1,
    area: "63,25m²",
    description: `Excelente apartamento de 63,25 m², localizado na Torre 1 – apartamento 908, com uma planta moderna, funcional e bem distribuída.

O imóvel conta com 3 quartos, sendo 1 suíte, sala para 2 ambientes, varanda, banheiro social e cozinha integrada à área de serviço, proporcionando praticidade e conforto para o dia a dia.

Estrutura completa de lazer, bem-estar e conveniência:
- Piscina com raia semiolímpica e piscina infantil
- Espaço churrasco e Espaço Gourmet
- Salão de festas
- Academia equipada
- Sala multifuncional
- Coworking
- Espaço Box e bicicletário
- Ponto de carregamento para veículo elétrico`,
    videos: ["/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/1.mp4"],
    images: Array.from({ length: 38 }, (_, i) => `/imoveis/apartamentos-para-venda/edificio-viver-bem-indianopolis/${i + 1}.jpeg`),
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
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },
  {
    id: "casa-moderna-com-quintal",
    title: "Casa Moderna com Quintal e Excelente Padrão",
    price: "Consulte o valor",
    location: "Caruaru - PE",
    type: "venda",
    category: "casa",
    featured: false,
    coverImage: "/imoveis/casas-para-venda/casa-moderna-com-quintal/1.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "56m²",
    description: `Excelente oportunidade de casa à venda com ótimo padrão de acabamento e quintal amplo nos fundos de 5x7m com potencial de expansão.`,
    images: Array.from({ length: 10 }, (_, i) => `/imoveis/casas-para-venda/casa-moderna-com-quintal/${i + 1}.jpeg`),
    amenities: ["1 Suíte", "Cozinha Planejada", "Quintal Amplo (5x7m)", "Garagem Privativa", "Projeto Luminotécnico"],
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },
  {
    id: "casa-the-house-club-caruaru",
    title: "Casa em Condomínio Fechado no The House Club",
    price: "R$ 870.000",
    location: "Luiz Gonzaga, Caruaru - PE",
    type: "venda",
    category: "casa",
    featured: true,
    coverImage: "/imoveis/casas-para-venda/casa-the-house-club/1.jpeg",
    bedrooms: 3,
    bathrooms: 4,
    parking: 2,
    area: "123m²",
    description: `Excelente casa em condomínio fechado com 3 suítes, espaço gourmet, preparação para jacuzzi e área de lazer completa. Aceita financiamento.`,
    images: Array.from({ length: 18 }, (_, i) => `/imoveis/casas-para-venda/casa-the-house-club/${i + 1}.jpeg`),
    amenities: ["3 Suítes", "Espaço Gourmet", "Preparação para Jacuzzi", "Piscina e Academia", "Portaria 24h"],
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },
  {
    id: "ap-vog-ville-norte",
    title: "Apartamento Pronto para Morar no Vog Ville Norte",
    price: "R$ 290.000",
    location: "Caruaru - PE",
    type: "venda",
    category: "apartamento",
    featured: false,
    coverImage: "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/3.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "52m²",
    description: `Apartamento completo, pronto para morar, com móveis planejados, ar-condicionado e lazer com piscina e academia.`,
    videos: [
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/1.mp4",
      "/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/2.mp4",
    ],
    images: Array.from({ length: 20 }, (_, i) => `/imoveis/apartamentos-para-venda/edificio-vog-ville-norte/${i + 3}.jpeg`),
    amenities: ["1 Suíte", "Ar-condicionado", "Móveis Planejados", "Piscina Adulto e Infantil", "Academia Equipada"],
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },
  {
    id: "ap-vog-ville-norte-terreo",
    title: "Apartamento Térreo de Esquina no Condomínio Vog Ville Norte",
    price: "R$ 310.000",
    location: "Caruaru - PE",
    type: "venda",
    category: "apartamento",
    featured: true,
    coverImage: "/imoveis/apartamentos-para-venda/vog-ville-norte-terreo/1.jpeg",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "52m²",
    description: `Oportunidade exclusiva no Condomínio Vog Ville Norte!

Apartamento térreo de esquina, com posição privilegiada e vista aberta para todo o condomínio. Oferece a máxima privacidade: o único vizinho direto é o do andar superior. Localizado em uma rua tranquila, em um bloco com arquitetura rústica e charmosa estilo bangalô.`,
    images: Array.from({ length: 24 }, (_, i) => `/imoveis/apartamentos-para-venda/vog-ville-norte-terreo/${i + 1}.jpeg`),
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
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },
  {
    id: "ap-terraco-holanda-mauricio-de-nassau",
    title: "Apartamento no Condomínio Terraço Holanda",
    price: "R$ 580.000",
    location: "Maurício de Nassau, Caruaru - PE",
    type: "venda",
    category: "apartamento",
    featured: false,
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
    images: Array.from(
      { length: 9 },
      (_, i) => `/imoveis/apartamentos-para-venda/terraco-holanda/${i + 1}.jpeg`
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
    backUrl: "/empreendimentos/imoveis-para-venda",
    backLabel: "Voltar para Imóveis para Venda",
  },

  // --- EKO HOME CLUB - TORRE IPÊ (À VENDA) ---
  {
  id: "ap-eko-home-club-torre-ipe",
  title: "Apartamento à Venda no Eko Home Club – Torre Ipê",
  price: "R$ 410.000",
  location: "Universitário, Caruaru - PE",
  type: "venda",
  category: "apartamento",
  featured: false,
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

OBS.: o mesmo apartamento também está disponível para locação por R$ 2.700,00/mês (condomínio e IPTU inclusos, mediante caução equivalente a 03 meses de aluguel).

ATENÇÃO: imóvel atualmente ALUGADO, porém disponível para venda (locação por R$ 2.700,00/mês, incluso condomínio e IPTU).`,
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
  backUrl: "/empreendimentos/imoveis-para-venda",
  backLabel: "Voltar para Imóveis para Venda",
},

  // --- CASA DUPLEX | INDIANÓPOLIS (À VENDA) ---
  {
  id: "casa-duplex-indianopolis",
  title: "Casa Duplex no Bairro Indianópolis",
  price: "R$ 225.000",
  location: "Indianópolis, Caruaru - PE",
  type: "venda",
  category: "casa",
  featured: false,
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

OBS.: a casa também está disponível para locação por R$ 2.000,00/mês (condomínio e IPTU inclusos, garantia mediante caução).`,
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
    "Móveis Fixos Planejados",
    "Forno, Cooktop e Ar-condicionado",
    "01 Vaga de Garagem",
  ],
  backUrl: "/empreendimentos/imoveis-para-venda",
  backLabel: "Voltar para Imóveis para Venda",
},

  // --- CASA NO LOTEAMENTO 7 LUAS | ALTO DO MOURA (ALUGADA - À VENDA) ---
  {
  id: "casa-alto-do-moura-7-luas",
  title: "Casa no Loteamento 7 Luas – Alto do Moura",
  price: "R$ 215.000",
  location: "Alto do Moura, Caruaru - PE",
  type: "venda",
  category: "casa",
  featured: false,
  coverImage: "/imoveis/casas-para-venda/casa-alto-do-moura-7-luas/11.jpeg",
  bedrooms: 2,
  bathrooms: 2,
  parking: 0,
  area: "56m²",
  alugado: true,
  description: `CASA À VENDA | LOTEAMENTO 7 LUAS – ALTO DO MOURA – CARUARU/PE

Imóvel construído em terreno de 7 x 22 metros, com 56 m² de área construída, oferecendo conforto, funcionalidade e excelente aproveitamento dos espaços.

CARACTERÍSTICAS DO IMÓVEL:
- Sala de estar e jantar integradas, trazendo mais amplitude e aconchego
- Cozinha planejada, com móveis sob medida e bancada em mármore
- 02 quartos, sendo 01 suíte
- Banheiros completos, com bancada em mármore, móveis planejados e luminárias
- Quintal amplo de 5 x 7 metros, com possibilidade de construção de um terceiro quarto

Ideal para quem busca um imóvel moderno, bem distribuído e com potencial de ampliação.

VALOR DE VENDA: R$ 215.000,00 (preço de oportunidade)

ATENÇÃO: imóvel atualmente ALUGADO, porém disponível para venda.`,
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
  backUrl: "/empreendimentos/imoveis-para-venda",
  backLabel: "Voltar para Imóveis para Venda",
},

  // --- CASA REFORMADA | PETRÓPOLIS (ALUGADA - À VENDA) ---
  {
  id: "casa-reformada-petropolis",
  title: "Magnífica Casa Reformada no Bairro Petrópolis",
  price: "R$ 750.000",
  location: "Petrópolis, Caruaru - PE",
  type: "venda",
  category: "casa",
  featured: false,
  coverImage: "/imoveis/casas-para-venda/casa-reformada-petropolis/23.jpeg",
  bedrooms: 3,
  bathrooms: 3,
  parking: 4,
  area: "258m²",
  alugado: true,
  description: `CASA REFORMADA À VENDA | PETRÓPOLIS – CARUARU/PE

MAGNÍFICA CASA REFORMADA, MODERNA E PRONTA PARA MORAR NO PETRÓPOLIS
Uma casa que une arquitetura contemporânea, conforto e espaços pensados para receber bem.

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
    "Iluminação em LED",
    "Fachada em Porcelanato",
    "Imóvel Escriturado",
    "Imóvel Alugado - Disponível para Venda",
  ],
  backUrl: "/empreendimentos/imoveis-para-venda",
  backLabel: "Voltar para Imóveis para Venda",
},

  // --- APARTAMENTO MOBILIADO NO EDIFÍCIO PLAZA (ALUGADA - À VENDA) ---
  {
  id: "ap-edf-plaza-caruaru",
  title: "Apartamento Mobiliado no Edifício Plaza",
  price: "R$ 680.000",
  location: "Edifício Plaza, Caruaru - PE",
  type: "venda",
  category: "apartamento",
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
  backUrl: "/empreendimentos/imoveis-para-venda",
  backLabel: "Voltar para Imóveis para Venda",
  },

  // --- APARTAMENTO TOTALMENTE REFORMADO NO EKO HOME CLUB – TORRE IPÊ A (À VENDA) ---
  {
  id: "ap-eko-home-club-torre-ipe-a",
  title: "Apartamento Totalmente Reformado no Eko Home Club – Torre Ipê A",
  price: "R$ 420.000",
  location: "Bairro Universitário, Caruaru - PE",
  type: "venda",
  category: "apartamento",
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
  backUrl: "/empreendimentos/imoveis-para-venda",
  backLabel: "Voltar para Imóveis para Venda",
  },

  // --- APARTAMENTO DE ALTO PADRÃO NO EDIFÍCIO LUSIA MACIEL (ALUGADA - À VENDA) ---
  {
  id: "ap-lusia-maciel",
  title: "Apartamento de Alto Padrão no Edifício Lusia Maciel",
  price: "R$ 850.000",
  location: "Maurício de Nassau, Caruaru - PE",
  type: "venda",
  category: "apartamento",
  coverImage: "/imoveis/apartamentos-para-venda/ap-lusia-maciel/3.jpeg",
  bedrooms: 3,
  bathrooms: 3,
  parking: 2,
  area: "107m²",
  alugado: true,
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
  backUrl: "/empreendimentos/imoveis-para-venda",
  backLabel: "Voltar para Imóveis para Venda",
  },

  // --- APARTAMENTO DE ALTO PADRÃO NO EDIFÍCIO ANDREZZA (À VENDA) ---
  {
  id: "ap-andrezza-mauricio-de-nassau",
  title: "Apartamento de Alto Padrão no Edifício Andrezza",
  price: "R$ 800.000",
  location: "Maurício de Nassau, Caruaru - PE",
  type: "venda",
  category: "apartamento",
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
  backUrl: "/empreendimentos/imoveis-para-venda",
  backLabel: "Voltar para Imóveis para Venda",
  },

  // --- APARTAMENTO COM VARANDA NO MAURÍCIO DE NASSAU (ALUGADA - À VENDA) ---
  {
  id: "ap-mauricio-de-nassau-80m",
  title: "Apartamento com Varanda no Maurício de Nassau",
  price: "R$ 450.000",
  location: "Maurício de Nassau, Caruaru - PE",
  type: "venda",
  category: "apartamento",
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
  backUrl: "/empreendimentos/imoveis-para-venda",
  backLabel: "Voltar para Imóveis para Venda",
  },

  // --- CASA TÉRREA COM JARDIM NO MAURÍCIO DE NASSAU (À VENDA) ---
  {
  id: "casa-mauricio-de-nassau-jardim",
  title: "Casa Térrea com Jardim no Maurício de Nassau",
  price: "R$ 700.000",
  location: "Maurício de Nassau, Caruaru - PE",
  type: "venda",
  category: "casa",
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
  backUrl: "/empreendimentos/imoveis-para-venda",
  backLabel: "Voltar para Imóveis para Venda",
  },

  // --- CASA NO CONDOMÍNIO PORTAL DO SOL (ALUGADA - À VENDA) ---
  {
  id: "casa-portal-do-sol-venda",
  title: "Casa no Condomínio Portal do Sol",
  price: "R$ 620.000",
  location: "Condomínio Portal do Sol, Caruaru - PE",
  type: "venda",
  category: "casa",
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
  backUrl: "/empreendimentos/imoveis-para-venda",
  backLabel: "Voltar para Imóveis para Venda",
  },

  // --- CASA DE GRANDES PROPORÇÕES NO MAURÍCIO DE NASSAU (À VENDA) ---
  {
  id: "casa-mauricio-de-nassau-ampla",
  title: "Casa de Grandes Proporções no Maurício de Nassau",
  price: "R$ 2.500.000",
  location: "Maurício de Nassau, Caruaru - PE",
  type: "venda",
  category: "casa",
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
  backUrl: "/empreendimentos/imoveis-para-venda",
  backLabel: "Voltar para Imóveis para Venda",
  },

  // --- CASA DUPLEX DE ALTO PADRÃO NO QUINTAS DA COLINA II (À VENDA) ---
  {
  id: "casa-duplex-quintas-da-colina-ii",
  title: "Casa Duplex de Alto Padrão no Quintas da Colina II",
  price: "R$ 2.100.000",
  location: "Quintas da Colina II, Caruaru - PE",
  type: "venda",
  category: "casa",
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
  backUrl: "/empreendimentos/imoveis-para-venda",
  backLabel: "Voltar para Imóveis para Venda",
  },

  // --- CASA DUPLEX NO CONDOMÍNIO CLODOALDO SAMPAIO (À VENDA) ---
  {
  id: "casa-duplex-clodoaldo-sampaio",
  title: "Casa Duplex no Condomínio Clodoaldo Sampaio",
  price: "R$ 280.000",
  location: "Boa Vista, Caruaru - PE",
  type: "venda",
  category: "casa",
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
  backUrl: "/empreendimentos/imoveis-para-venda",
  backLabel: "Voltar para Imóveis para Venda",
  },

  // --- CASA DE ALTO PADRÃO NO BAIRRO LUIZ GONZAGA (À VENDA) ---
  {
  id: "casa-luiz-gonzaga",
  title: "Casa de Alto Padrão no Bairro Luiz Gonzaga",
  price: "R$ 499.000",
  location: "Luiz Gonzaga, Caruaru - PE",
  type: "venda",
  category: "casa",
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
  backUrl: "/empreendimentos/imoveis-para-venda",
  backLabel: "Voltar para Imóveis para Venda",
  },

  // --- LOTE NO CONDOMÍNIO SOLAR DA SERRA – VILLA DO VITORINO (À VENDA) ---
  {
  id: "lote-solar-da-serra-villa-do-vitorino",
  title: "Lote no Condomínio Solar da Serra – Villa do Vitorino",
  price: "R$ 85.000",
  location: "Villa do Vitorino, Caruaru - PE",
  type: "venda",
  category: "terreno",
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
  backUrl: "/empreendimentos/imoveis-para-venda",
  backLabel: "Voltar para Imóveis para Venda",
  },

  // --- LOTE COMERCIAL NO ALTO DO MOURA (À VENDA) ---
  {
  id: "terreno-alto-do-moura-centro-artes",
  title: "Lote Comercial no Alto do Moura",
  price: "R$ 300.000",
  location: "Alto do Moura, Caruaru - PE",
  type: "venda",
  category: "terreno",
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
  backUrl: "/empreendimentos/imoveis-para-venda",
  backLabel: "Voltar para Imóveis para Venda",
  },

  // --- MAGNÍFICA ÁREA RURAL NA ZONA URBANA DE BONITO - PE (À VENDA) ---
  {
  id: "area-rural-bonito",
  title: "Magnífica Área Rural na Zona Urbana de Bonito - PE",
  price: "R$ 47.000 / ha",
  location: "Bonito - PE",
  type: "venda",
  category: "terreno",
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
  backUrl: "/empreendimentos/imoveis-para-venda",
  backLabel: "Voltar para Imóveis para Venda",
  },

  // --- TERRENO DE 2.500M² ÀS MARGENS DA BR-232 (À VENDA) ---
  {
  id: "terreno-br-232-caruaru",
  title: "Terreno de 2.500m² às Margens da BR-232",
  price: "R$ 3.000.000",
  location: "BR-232, Caruaru - PE",
  type: "venda",
  category: "terreno",
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
  backUrl: "/empreendimentos/imoveis-para-venda",
  backLabel: "Voltar para Imóveis para Venda",
  },

  // --- BELÍSSIMA CHÁCARA EM CONDOMÍNIO NA ZONA RURAL DE CARUARU (À VENDA) ---
  {
  id: "chacara-zona-rural-caruaru",
  title: "Belíssima Chácara em Condomínio na Zona Rural de Caruaru",
  price: "R$ 850.000",
  location: "Zona Rural, Caruaru - PE",
  type: "venda",
  category: "terreno",
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
  backUrl: "/empreendimentos/imoveis-para-venda",
  backLabel: "Voltar para Imóveis para Venda",
  },

  // --- CHÁCARA NA LAGOA DO PAULISTA - MATA NEGRA (À VENDA) ---
  {
  id: "chacara-lagoa-do-paulista",
  title: "Chácara na Lagoa do Paulista - Mata Negra",
  price: "R$ 1.500.000",
  location: "Lagoa do Paulista, Caruaru - PE",
  type: "venda",
  category: "terreno",
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
  backUrl: "/empreendimentos/imoveis-para-venda",
  backLabel: "Voltar para Imóveis para Venda",
  },

  // =========================================================================
  // --- LOCAÇÃO ---
  // =========================================================================
  
{
  id: "casa-petropolis-caruaru",
  title: "Casa Espaçosa com Quintal no Bairro Petrópolis",
  price: "R$ 3.500 / mês (Incluso IPTU)",
  location: "Petrópolis, Caruaru - PE",
  type: "aluguel",
  category: "casa",
  featured: true,
  coverImage: "/imoveis/casas-para-alugar/casa-petropolis/1.jpeg",
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
  images: [
    ...Array.from(
      { length: 12 },
      (_, i) =>
        `/imoveis/casas-para-alugar/casa-petropolis/${i + 1}.jpeg`
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
  backUrl: "/empreendimentos/imoveis-para-alugar",
  backLabel: "Voltar para Imóveis para Alugar",
},

  
  {
  id: "ap-terraco-portugal-universitario",
  title: "Apartamento Mobiliado no Condomínio Terraço Portugal",
  price: "R$ 2.600 / mês",
  location: "Universitário, Caruaru - PE",
  type: "aluguel",
  category: "apartamento",
  featured: true,
  coverImage: "/imoveis/apartamentos-para-alugar/terraco-portugal/1.jpeg",
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
  images: [
    ...Array.from(
      { length: 10 },
      (_, i) =>
        `/imoveis/apartamentos-para-alugar/terraco-portugal/${i + 1}.jpeg`
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
  backUrl: "/empreendimentos/imoveis-para-alugar",
  backLabel: "Voltar para Imóveis para Alugar",
},
  
  { 
    id: "casa-green-garden-condominio-club",
    title: "Casa com Área Gourmet e Jacuzzi no Green Garden Condomínio Club",
    price: "R$ 6.500 / mês (Incluso Condomínio e IPTU)",
    location: "Green Garden Residence, Caruaru - PE",
    type: "aluguel",
    category: "casa",
    featured: true,
    coverImage: "/imoveis/casas-para-alugar/casa-green-garden-condominio-club/1.jpeg",
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
    images: Array.from({ length: 17 }, (_, i) => `/imoveis/casas-para-alugar/casa-green-garden-condominio-club/${i + 1}.jpeg`),
    amenities: [
      "3 Suítes",
      "Jacuzzi Privativa",
      "Área Gourmet com Churrasqueira",
      "Garagem para 4 Carros",
      "Às margens da PE-95",
      "Condomínio e IPTU Inclusos",
      "Condomínio Fechado com Lazer",
    ],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  {
    id: "casa-terrea-quintas-da-colina-2",
    title: "Magnífica Casa de Alto Padrão no Quintas da Colina II",
    price: "R$ 13.000 / mês (Incluso Condomínio e IPTU)",
    location: "Quintas da Colina II, Caruaru - PE",
    type: "aluguel",
    category: "casa",
    featured: true,
    coverImage: "/imoveis/casas-para-alugar/casa-terrea-quintas-da-colina-2/1.jpeg",
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
    images: Array.from({ length: 4 }, (_, i) => `/imoveis/casas-para-alugar/casa-terrea-quintas-da-colina-2/${i + 1}.jpeg`),
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
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  {
    id: "casa-quintas-da-colina-2",
    title: "Casa Semi Mobiliada no Condomínio Quintas da Colina II",
    price: "R$ 10.000 / mês (Incluso Condomínio e IPTU)",
    location: "Quintas da Colina II, Caruaru - PE",
    type: "aluguel",
    category: "casa",
    featured: true,
    coverImage: "/imoveis/casas-para-alugar/casa-quintas-da-colina-2/1.jpeg",
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
    images: Array.from({ length: 5 }, (_, i) => `/imoveis/casas-para-alugar/casa-quintas-da-colina-2/${i + 1}.jpeg`),
    amenities: [
      "Semi Mobiliado",
      "Posição Nascente",
      "Teto em Lambri",
      "Suíte Máster com Closet",
      "Área Gourmet com Churrasqueira",
      "Quintal com Área Verde",
      "Condomínio e IPTU Inclusos",
    ],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  {
    id: "casa-duplex-terras-alpha",
    title: "Casa Duplex no Condomínio Terras Alpha",
    price: "R$ 10.000 / mês",
    location: "Terras Alpha, Caruaru - PE",
    type: "aluguel",
    category: "casa",
    featured: true,
    coverImage: "/imoveis/casas-para-alugar/casa-duplex-terras-alpha/1.jpeg",
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
    images: Array.from({ length: 16 }, (_, i) => `/imoveis/casas-para-alugar/casa-duplex-terras-alpha/${i + 1}.jpeg`),
    amenities: [
      "3 Suítes",
      "Elevador de Acessibilidade",
      "Espaço Gourmet",
      "Condomínio Fechado com Lazer",
      "Garagem para 4 Veículos",
      "Lavabo",
      "Terreno de 300m²",
    ],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  {
    id: "ap-condominio-mr-rotterdam",
    title: "Apartamento Mobiliado no Condomínio Mr. Rotterdam",
    price: "R$ 2.400 / mês (Incluso Condomínio e IPTU)",
    location: "Universitário, Caruaru - PE",
    type: "aluguel",
    category: "apartamento",
    featured: true,
    coverImage: "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/2.jpeg",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: "38m²",
    description: `Apartamento mobiliado e completo no Condomínio Mr. Rotterdam na Av. Amazonas no Bairro Universitário. Vista Sul, 4º andar, piscina e academia.`,
    images: [
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/2.jpeg",
      "/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/1.jpeg",
      ...Array.from({ length: 13 }, (_, i) => `/imoveis/apartamentos-para-alugar/edificio-mr-rotterdam/${i + 3}.jpeg`),
    ],
    amenities: ["100% Mobiliado", "4º Andar (Vista Sul)", "Piscina Adulto e Infantil", "Academia", "Portaria 24h"],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  {
    id: "ap-mobiliado-mauricio-de-nassau",
    title: "Apartamento Mobiliado no Maurício de Nassau",
    price: "R$ 1.700 / mês (Incluso Taxas)",
    location: "Maurício de Nassau, Caruaru - PE",
    type: "aluguel",
    category: "apartamento",
    featured: false,
    coverImage: "/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/1.jpeg",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: "35m²",
    alugado: true,
    description: `Apartamento mobiliado no bairro Maurício de Nassau, próximo ao polo médico e jurídico. Taxas inclusas.

ATENÇÃO: imóvel atualmente ALUGADO.`,
    images: Array.from({ length: 9 }, (_, i) => `/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/${i + 1}.jpeg`),
    amenities: ["Mobiliado", "Ar-condicionado", "Próximo ao Polo Médico", "Taxas Inclusas", "Imóvel Alugado"],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  {
    id: "ap-edificio-jardim-dos-alecrins",
    title: "Apartamento Mobiliado no Edifício Jardim dos Alecrins",
    price: "R$ 2.800 / mês (Incluso Taxas)",
    location: "Universitário, Caruaru - PE",
    type: "aluguel",
    category: "apartamento",
    featured: false,
    coverImage: "/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/1.jpeg",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    area: "54m²",
    description: `Apartamento nascente e mobiliado no Edifício Jardim dos Alecrins, próximo à ASCES no Bairro Universitário.`,
    images: Array.from({ length: 33 }, (_, i) => `/imoveis/apartamentos-para-alugar/edificio-jardim-dos-alecrins/${i + 1}.jpeg`),
    amenities: ["Totalmente Mobiliado", "Nascente", "Piscina e Salão de Festas", "Portaria 24h", "Taxas Inclusas"],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  {
    id: "ap-studio-alto-padrao-shopping",
    title: "Apartamento de Alto Padrão - Pronto para Morar",
    price: "R$ 4.000 / mês",
    location: "Maurício de Nassau, Caruaru - PE",
    type: "aluguel",
    category: "apartamento",
    featured: true,
    coverImage: "/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/1.jpeg",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: "38m²",
    description: `Apartamento alto padrão decorado e mobiliado em complexo comercial no Maurício de Nassau.`,
    videos: ["/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/19.mp4"],
    images: Array.from({ length: 29 }, (_, i) => `/imoveis/apartamentos-para-alugar/apartamento-alto-padrao-pronto-morar/${i + 1}.jpeg`),
    amenities: ["Mobiliado e Decorado", "Complexo com Shopping", "Academia e Coworking", "Portaria 24h"],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  {
    id: "ap-edificio-joao-soares",
    title: "Apartamento de Alto Padrão no Edifício João Soares",
    price: "R$ 4.200 / mês (Incluso Taxas)",
    location: "Maurício de Nassau, Caruaru - PE",
    type: "aluguel",
    category: "apartamento",
    featured: false,
    coverImage: "/imoveis/apartamentos-para-alugar/edificio-joao-soares/1.jpeg",
    bedrooms: 2,
    bathrooms: 3,
    parking: 2,
    area: "80m²",
    description: `Apartamento com móveis Finger de alto padrão, andar alto, 2 suítes e 2 vagas de garagem cobertas no Maurício de Nassau.`,
    images: Array.from({ length: 13 }, (_, i) => `/imoveis/apartamentos-para-alugar/edificio-joao-soares/${i + 1}.jpeg`),
    amenities: ["Móveis Planejados Finger", "2 Suítes", "2 Vagas Cobertas", "Portaria 24h", "Taxas Inclusas"],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  {
    id: "ap-caminho-das-aroeiras",
    title: "Apartamento Condomínio Caminho das Aroeiras",
    price: "Consulte o valor",
    location: "Indianópolis, Caruaru - PE",
    type: "aluguel",
    category: "apartamento",
    featured: false,
    coverImage: "/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/7.jpeg",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    area: "52m²",
    description: `Apartamento ventilado ao lado do Caruaru Shopping com lazer completo e segurança 24 horas.`,
    images: Array.from({ length: 10 }, (_, i) => `/imoveis/apartamentos-para-alugar/caminho-das-aroeiras/${i + 1}.jpeg`),
    amenities: ["Próximo ao Caruaru Shopping", "Piscina e Salão de Festas", "Portaria 24h", "Vaga Privativa"],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  {
    id: "ap-jardim-das-orquideas-indianopolis",
    title: "Apartamento no Res. Jardim das Orquídeas",
    price: "R$ 1.500 / mês (Incluso Condomínio, IPTU e Gás)",
    location: "Indianópolis, Caruaru - PE",
    type: "aluguel",
    category: "apartamento",
    featured: true,
    coverImage: "/imoveis/apartamentos-para-alugar/jardim-das-orquideas/1.jpeg",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    area: "42m²",
    alugado: true,
    description: `APARTAMENTO PARA LOCAÇÃO | JARDIM DAS ORQUÍDEAS — CARUARU

Indianópolis | Próximo ao Caruaru Shopping

Se você procura praticidade, conforto e uma localização estratégica em Caruaru, essa pode ser a oportunidade ideal!

Posição Norte - 2º andar 
- Aproximadamente 42 m² de área privativa
- 02 quartos
- Sala de estar
- Cozinha
- Área de serviço
- Banheiro social
- 01 vaga de garagem descoberta
- Condomínio residencial com estrutura de lazer e segurança

Localização privilegiada, em Indianópolis, com fácil acesso ao Caruaru Shopping e a diversos serviços, comércio e conveniências da região.

ALUGUEL: R$ 1.500,00

E o melhor: já estão inclusos no valor:
- Condomínio
- IPTU
- Gás

Condições para locação:
- 1 aluguel + 1 caução
Obs.: Necessário estar com o nome limpo!

Agende sua visita e venha conhecer!

ATENÇÃO: imóvel atualmente ALUGADO.`,
    images: Array.from(
      { length: 13 },
      (_, i) => `/imoveis/apartamentos-para-alugar/jardim-das-orquideas/${i + 1}.jpeg`
    ),
    amenities: [
      "Posição Norte",
      "2º Andar",
      "Próximo ao Caruaru Shopping",
      "Condomínio, IPTU e Gás Inclusos",
      "Estrutura de Lazer e Segurança",
      "1 Vaga Descoberta",
      "Imóvel Alugado",
    ],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  {
    id: "ap-edificio-monalisa-mauricio-de-nassau",
    title: "Apartamento no Edf. Monalisa - Maurício de Nassau",
    price: "R$ 4.000 / mês (Incluso Condomínio e IPTU)",
    location: "Maurício de Nassau, Caruaru - PE",
    type: "aluguel",
    category: "apartamento",
    featured: true,
    coverImage: "/imoveis/apartamentos-para-alugar/edificio-monalisa/4.jpeg",
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
    images: Array.from({ length: 17 }, (_, i) => `/imoveis/apartamentos-para-alugar/edificio-monalisa/${i + 1}.jpeg`),
    amenities: [
      "Em Frente ao Colégio Diocesano",
      "Ao Lado do Shopping Difusora",
      "1 Suíte Privativa",
      "Varanda",
      "2 Vagas Cobertas",
      "Piscina Aquecida",
      "Condomínio e IPTU Inclusos",
    ],
    backUrl: "/empreendimentos/imoveis-para-alugar",
    backLabel: "Voltar para Imóveis para Alugar",
  },
  
  // --- EKO HOME CLUB - TORRE IPÊ (LOCAÇÃO) ---
  {
  id: "ap-eko-home-club-torre-ipe-aluguel",
  title: "Apartamento para Locação no Eko Home Club – Torre Ipê",
  price: "R$ 2.700 / mês (Condomínio e IPTU Inclusos)",
  location: "Universitário, Caruaru - PE",
  type: "aluguel",
  category: "apartamento",
  featured: false,
  coverImage: "/imoveis/apartamentos-para-venda/eko-home-club-torre-ipe/13.jpeg",
  bedrooms: 2,
  bathrooms: 2,
  parking: 0,
  area: "60m²",
  alugado: true,
  description: `APARTAMENTO PARA LOCAÇÃO | EKO HOME CLUB – TORRE IPÊ – CARUARU/PE

Localizado em uma das áreas mais valorizadas do bairro Universitário, próximo aos principais polos médico, jurídico e estudantil da cidade. Uma excelente opção para quem busca conforto, praticidade e ótima localização.

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

OBS.: o mesmo apartamento também está à venda por R$ 410.000,00 (escriturado e pronto para financiamento).

ATENÇÃO: imóvel atualmente ALUGADO.`,
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
    "Caucão de 03 Meses de Aluguel",
    "Bairro Universitário",
    "Imóvel Alugado",
  ],
  backUrl: "/empreendimentos/imoveis-para-alugar",
  backLabel: "Voltar para Imóveis para Alugar",
},

  // --- CASA DUPLEX | INDIANÓPOLIS (LOCAÇÃO) ---
  {
  id: "casa-duplex-indianopolis-aluguel",
  title: "Casa Duplex para Locação no Bairro Indianópolis",
  price: "R$ 2.000 / mês (Condomínio e IPTU Inclusos)",
  location: "Indianópolis, Caruaru - PE",
  type: "aluguel",
  category: "casa",
  featured: false,
  coverImage: "/imoveis/casas-para-venda/casa-duplex-indianopolis/1.jpeg",
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

OBS.: a casa também está à venda por R$ 225.000,00 (não aceita financiamento).`,
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
    "Condomínio e IPTU Inclusos",
    "Garantia mediante Caução",
    "01 Vaga de Garagem",
  ],
  backUrl: "/empreendimentos/imoveis-para-alugar",
  backLabel: "Voltar para Imóveis para Alugar",
},

  // --- CASA REFORMADA | PETRÓPOLIS (LOCAÇÃO - ALUGADA) ---
  {
  id: "casa-reformada-petropolis-aluguel",
  title: "Magnífica Casa Reformada para Locação no Petrópolis",
  price: "R$ 5.500 / mês (Incluso IPTU)",
  location: "Petrópolis, Caruaru - PE",
  type: "aluguel",
  category: "casa",
  featured: false,
  coverImage: "/imoveis/casas-para-venda/casa-reformada-petropolis/23.jpeg",
  bedrooms: 3,
  bathrooms: 3,
  parking: 4,
  area: "258m²",
  alugado: true,
  description: `CASA REFORMADA PARA LOCAÇÃO | PETRÓPOLIS – CARUARU/PE

MAGNÍFICA CASA REFORMADA, MODERNA E PRONTA PARA MORAR NO PETRÓPOLIS
Uma casa que une arquitetura contemporânea, conforto e espaços pensados para receber bem.

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
  backUrl: "/empreendimentos/imoveis-para-alugar",
  backLabel: "Voltar para Imóveis para Alugar",
},

  // --- APARTAMENTO MOBILIADO NO EDIFÍCIO PLAZA (ALUGADA - LOCAÇÃO) ---
  {
  id: "ap-edf-plaza-caruaru-aluguel",
  title: "Apartamento Mobiliado no Edifício Plaza",
  price: "R$ 3.500 / mês",
  location: "Edifício Plaza, Caruaru - PE",
  type: "aluguel",
  category: "apartamento",
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
  backUrl: "/empreendimentos/imoveis-para-alugar",
  backLabel: "Voltar para Imóveis para Alugar",
  },

  // --- FLAT MOBILIADO NO LIFE CENTER (LOCAÇÃO) ---
  {
  id: "ap-life-center-flat-mobiliado",
  title: "Flat Mobiliado no Life Center",
  price: "R$ 2.500 / mês",
  location: "Life Center, Caruaru - PE",
  type: "aluguel",
  category: "apartamento",
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
  videos: [],
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
  backUrl: "/empreendimentos/imoveis-para-alugar",
  backLabel: "Voltar para Imóveis para Alugar",
  },

  // --- FLAT MOBILIADO NO EDIFÍCIO MULTIPORTO (LOCAÇÃO) ---
  {
  id: "ap-flat-multiporto-indianopolis",
  title: "Flat Mobiliado no Edifício Multiporto",
  price: "R$ 2.200 / mês",
  location: "Indianópolis, Caruaru - PE",
  type: "aluguel",
  category: "apartamento",
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
    "Imóvel Alugado",
  ],
  backUrl: "/empreendimentos/imoveis-para-alugar",
  backLabel: "Voltar para Imóveis para Alugar",
  },

  // --- APARTAMENTO PARA LOCAÇÃO NO BAIRRO UNIVERSITÁRIO (ALUGADA - LOCAÇÃO) ---
  {
  id: "ap-universitario-aracati-aluguel",
  title: "Apartamento para Locação no Bairro Universitário",
  price: "R$ 1.200 / mês",
  location: "Bairro Universitário, Caruaru - PE",
  type: "aluguel",
  category: "apartamento",
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
  backUrl: "/empreendimentos/imoveis-para-alugar",
  backLabel: "Voltar para Imóveis para Alugar",
  },

  // --- FLAT DE 01 QUARTO NO BELLE VILLE (LOCAÇÃO) ---
  {
  id: "ap-belle-ville-flat",
  title: "Flat de 01 Quarto no Belle Ville",
  price: "R$ 2.500 / mês",
  location: "Belle Ville, Caruaru - PE",
  type: "aluguel",
  category: "apartamento",
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
    "Imóvel Alugado",
  ],
  backUrl: "/empreendimentos/imoveis-para-alugar",
  backLabel: "Voltar para Imóveis para Alugar",
  },

  // --- APARTAMENTO COM VARANDA NO MAURÍCIO DE NASSAU (ALUGADA - LOCAÇÃO) ---
  {
  id: "ap-mauricio-de-nassau-80m-aluguel",
  title: "Apartamento com Varanda no Maurício de Nassau",
  price: "R$ 2.600 / mês",
  location: "Maurício de Nassau, Caruaru - PE",
  type: "aluguel",
  category: "apartamento",
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
  backUrl: "/empreendimentos/imoveis-para-alugar",
  backLabel: "Voltar para Imóveis para Alugar",
  },

  // --- CASA PARA LOCAÇÃO COMERCIAL NO MAURÍCIO DE NASSAU (LOCAÇÃO) ---
  {
  id: "casa-mauricio-de-nassau-comercial",
  title: "Casa para Locação Comercial no Maurício de Nassau",
  price: "R$ 5.000 / mês",
  location: "Maurício de Nassau, Caruaru - PE",
  type: "aluguel",
  category: "casa",
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
  backUrl: "/empreendimentos/imoveis-para-alugar",
  backLabel: "Voltar para Imóveis para Alugar",
  },

  // --- CASA NO CONDOMÍNIO PORTAL DO SOL (ALUGADA - LOCAÇÃO) ---
  {
  id: "casa-portal-do-sol-aluguel",
  title: "Casa no Condomínio Portal do Sol",
  price: "R$ 3.500 / mês",
  location: "Condomínio Portal do Sol, Caruaru - PE",
  type: "aluguel",
  category: "casa",
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
  backUrl: "/empreendimentos/imoveis-para-alugar",
  backLabel: "Voltar para Imóveis para Alugar",
  },

  // --- CASA MOBILIADA NO PINHEIROPOLIS (ALUGADA - LOCAÇÃO) ---
  {
  id: "casa-pinheiropolis-aluguel",
  title: "Casa Mobiliada no Pinheiropolis",
  price: "R$ 3.500 / mês",
  location: "Pinheiropolis, Caruaru - PE",
  type: "aluguel",
  category: "casa",
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
  backUrl: "/empreendimentos/imoveis-para-alugar",
  backLabel: "Voltar para Imóveis para Alugar",
  },

 // ==========================================
// PONTOS COMERCIAIS
// ==========================================

// 1. SALA COMERCIAL GALERIA AVENIDA CENTER
{
  id: "sala-comercial-galeria-avenida-center",
  title: "Sala Comercial na Galeria Avenida Center",
  price: "R$ 1.800 / mês (Incluso Condomínio e IPTU)",
  location: "Av. Agamenon Magalhães, Maurício de Nassau, Caruaru - PE",
  type: "comercial",
  category: "ponto",
  featured: true,
  coverImage: "/imoveis/pontos-comerciais/sala-galeria-avenida-center/6.jpeg",
  bedrooms: 0,
  bathrooms: 6,
  parking: 0,
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
    (_, i) => `/imoveis/pontos-comerciais/sala-galeria-avenida-center/${i + 1}.jpeg`
  ),
  amenities: [
    "Galeria Avenida Center",
    "Av. Agamenon Magalhães",
    "Condomínio e IPTU Inclusos",
    "Bairro Maurício de Nassau",
    "Grande Fluxo de Pedestres e Veículos",
    "Ideal para Consultórios e Escritórios",
  ],
  backUrl: "/empreendimentos/pontos-comerciais",
  backLabel: "Voltar para Pontos Comerciais",
},

// 2. PONTO COMERCIAL AGAMENON MAGALHÃES
{
  id: "ponto-comercial-agamenon-magalhaes",
  title: "Ponto Comercial na Avenida Agamenon Magalhães",
  price: "R$ 4.500 / mês",
  location: "Av. Agamenon Magalhães, Caruaru - PE",
  type: "comercial",
  category: "ponto",
  featured: true,
  coverImage: "/imoveis/pontos-comerciais/ponto-comercial-agamenon-magalhaes/1.jpeg",
  bedrooms: 0,
  bathrooms: 1,
  parking: 0,
  area: "25m² (5m x 5m)",
  description: `Ponto comercial na principal avenida de Caruaru: Av. Agamenon Magalhães. Alto fluxo de pedestres e carros.`,
  videos: [],
  images: Array.from(
    { length: 4 },
    (_, i) => `/imoveis/pontos-comerciais/ponto-comercial-agamenon-magalhaes/${i + 1}.jpeg`
  ),
  amenities: [
    "Avenida Principal",
    "Excelente Visibilidade",
    "1 Banheiro",
    "Alto Fluxo",
  ],
  backUrl: "/empreendimentos/pontos-comerciais",
  backLabel: "Voltar para Pontos Comerciais",
},

// 3. GALERIA AGAMENON - ESPAÇOS DISPONÍVEIS
{
  id: "galeria-agamenon-espacos-disponiveis",
  title: "Salas e Lojas Comerciais na Galeria Agamenon",
  price: "A partir de R$ 700 / mês",
  location: "Av. Agamenon Magalhães, Maurício de Nassau, Caruaru - PE",
  type: "comercial",
  category: "ponto",
  featured: true,
  coverImage: "/imoveis/pontos-comerciais/galeria-agamenon/1.jpeg",
  bedrooms: 0,
  bathrooms: 2,
  parking: 0,
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
  images: Array.from(
    { length: 7 },
    (_, i) => `/imoveis/pontos-comerciais/galeria-agamenon/${i + 1}.jpeg`
  ),
  amenities: [
    "Av. Agamenon Magalhães",
    "Opções de Salas e Lojas",
    "Manutenção de Áreas Comuns Inclusa",
    "Segurança Noturna",
    "Banheiros na Galeria",
    "Ideal para Consultórios e Lojas",
  ],
  backUrl: "/empreendimentos/pontos-comerciais",
  backLabel: "Voltar para Pontos Comerciais",
},

  // 4. SALA COMERCIAL À VENDA NO EMPRESARIAL NORDESTE CORPORATE (SEM FOTOS)
  {
  id: "sala-nordeste-corporate-venda",
  title: "Sala Comercial à Venda no Empresarial Nordeste Corporate",
  price: "R$ 330.000",
  location: "Bairro Universitário, Caruaru - PE",
  type: "comercial",
  category: "ponto",
  coverImage: "/placeholder.jpg",
  bedrooms: 0,
  bathrooms: 1,
  parking: 1,
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
  backUrl: "/empreendimentos/pontos-comerciais",
  backLabel: "Voltar para Pontos Comerciais",
  },

  // 5. PRÉDIO COMERCIAL COM SALAS NO BAIRRO UNIVERSITÁRIO
  {
  id: "predio-comercial-universitario",
  title: "Prédio Comercial com Salas no Bairro Universitário",
  price: "R$ 15.000 / mês",
  location: "Bairro Universitário, Caruaru - PE",
  type: "comercial",
  category: "ponto",
  coverImage: "/imoveis/pontos-comerciais/predio-comercial-universitario/1.jpeg",
  bedrooms: 0,
  bathrooms: 8,
  parking: 0,
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
  backUrl: "/empreendimentos/pontos-comerciais",
  backLabel: "Voltar para Pontos Comerciais",
  },

  // 6. SALA COMERCIAL E PONTO DE LOJA NO BAIRRO UNIVERSITÁRIO
  {
  id: "sala-loja-universitario",
  title: "Sala Comercial e Ponto de Loja no Bairro Universitário",
  price: "A partir de R$ 1.200 / mês",
  location: "Rua Aracati, Bairro Universitário, Caruaru - PE",
  type: "comercial",
  category: "ponto",
  coverImage: "/imoveis/pontos-comerciais/sala-loja-universitario/1.jpeg",
  bedrooms: 0,
  bathrooms: 1,
  parking: 0,
  area: "",
  description: `SALA COMERCIAL E PONTO DE LOJA PARA LOCAÇÃO | BAIRRO UNIVERSITÁRIO – CARUARU/PE

Esquina com a Rua Aracati, próximo ao Colégio Bela Flor.

OPÇÕES DISPONÍVEIS:
- Sala comercial: R$ 1.200,00/mês
- Loja (ponto): R$ 1.400,00/mês`,
  videos: [],
  images: Array.from(
    { length: 14 },
    (_, i) => `/imoveis/pontos-comerciais/sala-loja-universitario/${i + 1}.jpeg`
  ),
  amenities: [
    "Esquina com a Rua Aracati",
    "Próximo ao Colégio Bela Flor",
    "Sala Comercial e Loja",
    "Bairro Universitário",
  ],
  backUrl: "/empreendimentos/pontos-comerciais",
  backLabel: "Voltar para Pontos Comerciais",
  },

  // 7. PONTO COMERCIAL / LOJA NA AV. AGAMENON MAGALHÃES (ALUGADA)
  {
  id: "loja-agamenon-magalhaes",
  title: "Ponto Comercial / Loja na Av. Agamenon Magalhães",
  price: "R$ 28.000 / mês",
  location: "Av. Agamenon Magalhães, Maurício de Nassau, Caruaru - PE",
  type: "comercial",
  category: "ponto",
  coverImage: "/imoveis/pontos-comerciais/loja-agamenon-magalhaes/1.jpeg",
  bedrooms: 0,
  bathrooms: 4,
  parking: 0,
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
  backUrl: "/empreendimentos/pontos-comerciais",
  backLabel: "Voltar para Pontos Comerciais",
  },

  // 8. PONTO COMERCIAL NO CENTRO DE CARUARU – PETRÓPOLIS (ALUGADA)
  {
  id: "ponto-comercial-petropolis",
  title: "Ponto Comercial no Centro de Caruaru – Petrópolis",
  price: "R$ 5.500 / mês",
  location: "Petrópolis, Caruaru - PE",
  type: "comercial",
  category: "ponto",
  coverImage: "/imoveis/pontos-comerciais/ponto-comercial-petropolis/1.jpeg",
  bedrooms: 0,
  bathrooms: 1,
  parking: 0,
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
  backUrl: "/empreendimentos/pontos-comerciais",
  backLabel: "Voltar para Pontos Comerciais",
  },

  // 9. DUAS SALAS COMERCIAIS INTEGRADAS NO TIMES BUSINESS CENTER (À VENDA)
  {
  id: "sala-comercial-times-business-center",
  title: "Duas Salas Comerciais Integradas no Times Business Center",
  price: "R$ 950.000",
  location: "Maurício de Nassau, Caruaru - PE",
  type: "comercial",
  category: "ponto",
  coverImage: "/imoveis/pontos-comerciais/times-business-center/3.jpeg",
  bedrooms: 0,
  bathrooms: 3,
  parking: 0,
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
  backUrl: "/empreendimentos/pontos-comerciais",
  backLabel: "Voltar para Pontos Comerciais",
  },
]; 