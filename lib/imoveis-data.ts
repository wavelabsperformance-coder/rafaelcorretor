// lib/imoveis-data.ts

export type ImovelCompleto = {
  id: string
  title: string
  price: string
  location: string
  type: "venda" | "aluguel" | "comercial"
  category: "apartamento" | "casa" | "ponto" | "comercial"
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
    description: `Apartamento mobiliado no bairro Maurício de Nassau, próximo ao polo médico e jurídico. Taxas inclusas.`,
    images: Array.from({ length: 9 }, (_, i) => `/imoveis/apartamentos-para-alugar/apartamento-mobiliado-mauricio-de-nassau/${i + 1}.jpeg`),
    amenities: ["Mobiliado", "Ar-condicionado", "Próximo ao Polo Médico", "Taxas Inclusas"],
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

Agende sua visita e venha conhecer!`,
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
    coverImage: "/imoveis/apartamentos-para-alugar/edificio-monalisa/1.jpeg",
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
} // <-- REMOVA a vírgula do último objeto do array!
]; 