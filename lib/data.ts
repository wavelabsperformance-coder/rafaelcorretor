// ============================================
// DADOS EDITÁVEIS DO SITE - RAFAEL CAVALCANTE
// ============================================

import { todosImoveis, type ImovelCompleto } from "./imoveis-data"

// ============================================
// CONFIGURAÇÕES GERAIS DO SITE
// ============================================

export const siteConfig = {
  name: "Rafael Cavalcante",
  description:
    "Corretor de imóveis em Caruaru, especialista em locação e venda, com atendimento personalizado, transparência e agilidade.",
  cnpj: "",
  phone: "(81) 99686-3213",
  whatsapp: "5581996863213",
  whatsappLink: "https://wa.me/5581996863213",
  email: "Rafael.cavalcantecorretorpe@gmail.com",
  address: "Caruaru - PE",
  instagram: "https://instagram.com/",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Caruaru+PE",
  googleMapsEmbed: "https://www.google.com/maps?q=Caruaru,+PE&output=embed",
  googleReviewsLink: "",
  foundedYear: 2021,
  developerName: "Wave Labs Performance",
  developerWhatsapp: "https://wa.me/5581999999999",
}

// ============================================
// HERO
// ============================================

export const heroContent = {
  ctaText: "Falar com o Rafael",
  ctaSecondary: "Ver Imóveis para Alugar",
}

// ============================================
// SOBRE O CORRETOR
// ============================================

export const aboutContent = {
  shortDescription:
    "Com 5 anos de atuação no mercado imobiliário e 9 anos de experiência no setor bancário, atendo em Caruaru com atendimento personalizado, transparência e agilidade, da primeira conversa até a conclusão do negócio.",

  fullHistory: `Sou Rafael Cavalcante, corretor de imóveis em Caruaru.

Antes de me dedicar ao mercado imobiliário, trabalhei por 9 anos em bancos, no BNB e no Bradesco. Essa bagagem me trouxe organização, responsabilidade e atenção aos detalhes, qualidades que levo para cada negociação.

Há 5 anos atuo como corretor, com foco em locação e venda de imóveis na cidade de Caruaru. Meu trabalho cresce pelas indicações de clientes e pelo atendimento nas plataformas digitais, sempre de forma próxima e personalizada.

Acredito que um bom negócio imobiliário começa na transparência. Por isso, explico cada etapa do processo com clareza, busco agilidade na documentação e na negociação e acompanho você do primeiro contato até a conclusão.

Seja para alugar, comprar ou vender, meu compromisso é conduzir você nessa jornada com segurança e tranquilidade.`,

  mission:
    "Conectar pessoas ao imóvel certo, com atendimento personalizado, transparência e agilidade em cada etapa do negócio.",

  vision:
    "Ser referência em atendimento imobiliário em Caruaru, reconhecido pela confiança e pelo cuidado com cada cliente.",

  values: [
    "Transparência em todas as etapas",
    "Atendimento personalizado",
    "Agilidade nos processos",
    "Ética e responsabilidade",
    "Compromisso com o cliente",
    "Respeito e confiança",
  ],
}

// ============================================
// DIFERENCIAIS
// ============================================

export const differentials = [
  {
    title: "Atendimento Personalizado",
    description:
      "Cada cliente é único. Entendo o que você procura para indicar as opções certas, sem perder seu tempo.",
    icon: "user",
  },
  {
    title: "Transparência Total",
    description:
      "Informações claras em todas as etapas, do primeiro contato à conclusão do negócio.",
    icon: "shield",
  },
  {
    title: "Agilidade nos Processos",
    description:
      "Acompanho visitas, documentação e negociação de perto para que tudo aconteça com rapidez.",
    icon: "chart",
  },
  {
    title: "Experiência Bancária",
    description:
      "9 anos de bancos (BNB e Bradesco) somados a 5 anos no mercado imobiliário de Caruaru.",
    icon: "building",
  },
]

// ============================================
// SERVIÇOS
// ============================================

export const services = [
  {
    title: "Locação de Imóveis",
    description:
      "Encontre o imóvel ideal para alugar, com atendimento próximo, transparência e agilidade no processo.",
    icon: "key",
  },
  {
    title: "Venda de Imóveis",
    description:
      "Venda seu imóvel com divulgação estratégica e acompanhamento de todas as etapas da negociação.",
    icon: "tag",
  },
  {
    title: "Compra de Imóveis",
    description:
      "Assessoria para você comprar com segurança, desde a busca até a conclusão do negócio.",
    icon: "home",
  },
  {
    title: "Consultoria Imobiliária",
    description:
      "Orientação para quem quer alugar, vender ou investir, com análise das melhores oportunidades em Caruaru.",
    icon: "briefcase",
  },
]

// ============================================
// DEPOIMENTOS
// ============================================

export const testimonials = [
  {
    name: "Juliana Ferreira",
    role: "Professora",
    text: "Fui atendida com muita atenção desde o primeiro contato. O Rafael entendeu o que eu precisava e me apresentou opções certeiras. Aluguei meu apartamento em poucos dias.",
    rating: 5,
  },
  {
    name: "Thiago Martins",
    role: "Engenheiro",
    text: "Processo claro do começo ao fim, sem surpresas. Gostei da transparência e da agilidade na documentação. Recomendo com tranquilidade.",
    rating: 5,
  },
  {
    name: "Camila Rocha",
    role: "Enfermeira",
    text: "Atendimento rápido e muito educado. Ele me acompanhou nas visitas e resolveu tudo com paciência. Me senti segura em cada etapa.",
    rating: 5,
  },
  {
    name: "Bruno Lacerda",
    role: "Comerciante",
    text: "Precisava de um imóvel com urgência e ele foi direto ao ponto. Comunicação sempre pelo WhatsApp, rápida e objetiva. Profissional de confiança.",
    rating: 5,
  },
  {
    name: "Renata Silva",
    role: "Proprietária",
    text: "Coloquei meu imóvel para alugar com ele e fiquei tranquila com o acompanhamento. Transparência total sobre cada visita e cada proposta.",
    rating: 5,
  },
  {
    name: "Paulo Henrique",
    role: "Analista",
    text: "Fui indicado por um amigo e entendi o porquê. Atendimento personalizado e muito conhecimento da cidade. Fechei negócio sem dor de cabeça.",
    rating: 5,
  },
]

// ============================================
// CATEGORIAS DE IMÓVEIS
// ============================================

export const propertyCategories = [
  {
    id: "imoveis-para-alugar",
    name: "Imóveis para Alugar",
    slug: "imoveis-para-alugar",
    description: "Apartamentos e casas selecionadas para locação residencial em Caruaru",
  },
  {
    id: "imoveis-para-venda",
    name: "Imóveis para Venda",
    slug: "imoveis-para-venda",
    description: "Casas em condomínio e apartamentos à venda em Caruaru",
  },
  {
    id: "pontos-comerciais",
    name: "Pontos Comerciais",
    slug: "pontos-comerciais",
    description: "Salas, lojas e estruturas corporativas para o seu negócio",
  },
]

// ============================================
// TIPO DE DADOS DOS IMÓVEIS
// ============================================

export type Property = {
  id: string
  title: string
  location: string
  price: string
  area: string
  bedrooms: number
  bathrooms: number
  parking: number
  description: string
  category: "imoveis-para-venda" | "imoveis-para-alugar" | "pontos-comerciais" | string
  featured: boolean
  images: string[]
  video: string | null
}

// ============================================
// IMÓVEIS PARA OS CARROSSEIS (ALUGUEL E VENDA)
// ============================================
// Gerados das fichas em lib/imoveis-data.ts: `alugado: true` sai do carrossel.

const categoriaPorTipo: Record<ImovelCompleto["type"], string> = {
  venda: "imoveis-para-venda",
  aluguel: "imoveis-para-alugar",
  comercial: "pontos-comerciais",
}

function paraCarrossel(imovel: ImovelCompleto): Property {
  return {
    id: imovel.id,
    title: imovel.title,
    location: imovel.location,
    price: imovel.price,
    area: imovel.area,
    bedrooms: imovel.bedrooms ?? 0,
    bathrooms: imovel.bathrooms,
    parking: imovel.parking,
    description: imovel.description,
    category: categoriaPorTipo[imovel.type],
    featured: imovel.featured ?? false,
    images: [imovel.coverImage || imovel.images[0] || "/placeholder.jpg"],
    video: imovel.videos?.[0] ?? null,
  }
}

function destaquesDisponiveis(tipo: ImovelCompleto["type"]): Property[] {
  return todosImoveis
    .filter((imovel) => imovel.type === tipo && !imovel.alugado)
    .map(paraCarrossel)
}

export const rentalProperties: Property[] = destaquesDisponiveis("aluguel")

export const saleProperties: Property[] = destaquesDisponiveis("venda")

// ============================================
// COMBINAÇÃO DE TODOS OS DESTAQUES
// ============================================

export const featuredProperties: Property[] = [
  ...rentalProperties,
  ...saleProperties,
]

// ============================================
// TIPO DE DADOS DOS CORRETORES
// (mantido só para não quebrar imports; pode ser
// removido junto com o componente BrokersCarousel)
// ============================================

export type Broker = {
  id: string
  name: string
  creci: string
  role: string
  bio: string
  image: string
  whatsapp: string
  instagram: string
}

export const teamContent = {
  image: "",
  eyebrow: "",
  title: "",
  description: "",
}

export const brokers: Broker[] = []

// ============================================
// BLOG
// ============================================

export const blogPosts = [
  {
    id: "1",
    slug: "tendencias-arquitetura-2024",
    title: "Tendências de Arquitetura para Imóveis de Alto Padrão em 2024",
    excerpt:
      "Descubra as principais tendências que estão moldando os projetos de imóveis de luxo neste ano.",
    content: `A arquitetura de alto padrão está em constante evolução, refletindo as mudanças nos estilos de vida e as inovações tecnológicas. Em 2024, algumas tendências se destacam nos projetos mais exclusivos.

A integração com a natureza continua sendo uma prioridade. Jardins internos, paredes verdes e grandes aberturas que conectam os ambientes internos ao exterior são elementos essenciais nos projetos contemporâneos.

A sustentabilidade também ganha cada vez mais espaço. Sistemas de energia solar, reuso de água, materiais ecológicos e certificações verdes são diferenciais valorizados por compradores conscientes.

O conceito de casa inteligente evoluiu significativamente. Automação residencial integrada, sistemas de segurança avançados e controle por voz se tornaram padrão em imóveis de luxo.

Espaços multiuso e home offices bem projetados refletem a nova realidade do trabalho híbrido. Ambientes versáteis que se adaptam às diferentes necessidades do dia a dia são altamente valorizados.`,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    date: "2024-01-15",
    author: "Rafael Cavalcante",
    category: "Arquitetura",
  },
  {
    id: "2",
    slug: "investir-imoveis-caruaru",
    title: "Por Que Morar e Investir em Imóveis em Caruaru",
    excerpt:
      "Conheça os bairros, a infraestrutura e os fatores que fazem de Caruaru uma boa escolha para morar, alugar ou investir.",
    content: `Caruaru é uma das cidades mais dinâmicas do interior de Pernambuco e reúne comércio forte, serviços de saúde e educação, o que mantém a procura por imóveis aquecida tanto para moradia quanto para investimento.

Cada bairro tem um perfil. O Universitário concentra polos de saúde e de educação, como hospitais, clínicas e faculdades, e é muito procurado por estudantes e profissionais da área médica e jurídica. O Maurício de Nassau reúne comércio, serviços e acesso rápido às principais avenidas da cidade. Já Indianópolis atrai quem busca praticidade e proximidade com o Caruaru Shopping.

Para quem quer alugar, a oferta de apartamentos mobiliados e condomínios com lazer facilita a mudança, principalmente para quem chega à cidade a trabalho ou para estudar. Para quem quer comprar, há desde apartamentos compactos até casas em condomínio fechado e residências de alto padrão.

Antes de fechar negócio, vale conferir a documentação do imóvel, os custos de condomínio e IPTU e a localização em relação ao seu dia a dia. Visitar mais de uma opção e contar com um corretor que conheça a cidade ajuda a decidir com mais segurança.

Se você está pensando em alugar, comprar ou vender em Caruaru, fale comigo e receba uma orientação personalizada para o seu perfil.`,
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    date: "2024-01-10",
    author: "Rafael Cavalcante",
    category: "Mercado",
  },
  {
    id: "3",
    slug: "guia-compra-primeiro-imovel-luxo",
    title: "Guia Completo: Como Comprar Seu Primeiro Imóvel de Luxo",
    excerpt:
      "Tudo o que você precisa saber antes de investir em um imóvel de alto padrão pela primeira vez.",
    content: `Adquirir um imóvel de alto padrão é uma decisão importante que requer planejamento e conhecimento. Este guia oferece orientações essenciais para uma compra segura e satisfatória.

Defina claramente suas prioridades: localização, tamanho, características específicas e orçamento disponível. Ter clareza sobre suas necessidades facilita a busca e a tomada de decisão.

Conte com profissionais especializados. Uma imobiliária focada em alto padrão possui conhecimento específico do mercado, acesso a imóveis exclusivos e pode oferecer assessoria completa durante todo o processo.

Verifique toda a documentação do imóvel e do vendedor. Due diligence completa evita problemas futuros e garante segurança jurídica na transação.

Avalie a infraestrutura do condomínio e os custos de manutenção. Em imóveis de alto padrão, esses valores podem ser significativos e devem ser considerados no planejamento financeiro.

Não tenha pressa. Visitar diferentes opções e comparar características permite uma escolha mais consciente e alinhada com suas expectativas.`,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    date: "2024-01-05",
    author: "Rafael Cavalcante",
    category: "Dicas",
  },
]