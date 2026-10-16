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
  instagram: "https://www.instagram.com/rafael.cavalcantecorretorpe/",
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
    id: "4",
    slug: "melhores-bairros-para-morar-em-caruaru",
    title: "Melhores bairros para morar em Caruaru",
    excerpt:
      "Universitário, Indianópolis, Maurício de Nassau e Luiz Gonzaga: compare estrutura, segurança e valorização para escolher onde morar em Caruaru.",
    content: `Escolher o bairro certo em Caruaru faz toda a diferença na qualidade de vida. A cidade tem regiões para todos os perfis, do estudante ao investidor que busca alto padrão.

Universitário é o endereço preferido de quem estuda ou trabalha na área da saúde, pela proximidade com faculdades, hospitais e serviços. O bairro concentra apartamentos funcionais e com boa demanda de locação.

Indianópolis se destaca pela tranquilidade e pelos condomínios novos, muitos deles de frente para o Parque Ambiental. É a escolha de famílias que valorizam lazer, segurança e ar livre.

Maurício de Nassau e Luiz Gonzaga ficam na rota da Avenida Agamenon, o principal corredor comercial de Caruaru. São ideais para quem quer conveniência, comércio forte e deslocamento rápido para qualquer ponto da cidade.

Na hora de decidir, avalie a rotina, o perfil do condomínio, as metragens disponíveis e o potencial de valorização. O corretor Rafael Cavalcante reúne apartamentos e casas nos principais bairros de Caruaru e auxilia na comparação entre regiões com atendimento personalizado.`,
    image: "/blog/caruaru-bairros.webp",
    date: "2024-02-18",
    author: "Rafael Cavalcante",
    category: "Bairros",
  },
  {
    id: "6",
    slug: "financiamento-caixa-caruaru-mcmv-2026",
    title: "Como financiar um apartamento pela Caixa em Caruaru em 2026",
    excerpt:
      "Minha Casa Minha Vida, FGTS na entrada e parcelas limitadas à renda: entenda o caminho para financiar seu imóvel novo em Caruaru.",
    content: `Financiar a casa própria é a forma mais usada para comprar o primeiro imóvel em Caruaru, e a Caixa Econômica Federal concentra a grande maioria desses contratos no Agreste pernambucano.

Em 2026, o programa Minha Casa Minha Vida segue como o principal caminho para famílias com renda compatível. O subsídio, que pode chegar a dezenas de milhares de reais, é reduzido do valor do imóvel e o restante é financiado em até 420 meses, com parcelas limitadas a cerca de 30% da renda familiar.

O FGTS pode ser usado na entrada ou para amortizar parcelas. Antes de buscar o imóvel, verifique seu saldo e o valor máximo de financiamento liberado na Caixa — isso ajuda a filtrar os apartamentos que cabem no seu bolso.

O passo a passo típico em Caruaru é: 1) simulação de crédito; 2) escolha da unidade; 3) reserva do imóvel; 4) análise da documentação e do banco; 5) assinatura do contrato de financiamento. Imóveis em construção costumam permitir parcelas diretas com a construtora até a entrega das chaves.

Os condomínios-clube de Caruaru, como os da região do Universitário, Indianópolis e Luiz Gonzaga, oferecem plantas de 2 quartos com preços competitivos para financiamento e boa infraestrutura de lazer — um ótimo custo-benefício para quem começa agora.

O corretor Rafael Cavalcante acompanha compradores desde a simulação até as chaves, indicando as melhores condições e construtoras parceiras em Caruaru.`,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    date: "2026-09-20",
    author: "Rafael Cavalcante",
    category: "Financiamento",
  },
  {
    id: "7",
    slug: "dicas-para-reduzir-custo-aluguel",
    title: "9 dicas para reduzir o custo do aluguel sem abrir mão de conforto",
    excerpt:
      "Negociar o valor, escolher bem a garantia e avaliar taxas inclusas podem economizar centenas de reais por mês na locação.",
    content: `Alugar não precisa ser sinônimo de custo fixo alto. Pequenas decisões na assinatura do contrato podem reduzir bastante o gasto mensal com moradia.

1. Compare valores na mesma região. Dois bairros vizinhos podem ter diferenças grandes de aluguel. Em Caruaru, por exemplo, o valor varia bastante entre regiões próximas, mesmo quando a estrutura é parecida.

2. Negocie o valor anunciado. No mercado de locação, principalmente de imóveis parados há mais tempo, há espaço para descontos — vale oferecer um valor próximo e fechar rápido.

3. Prefira imóveis com taxas inclusas. Quando condomínio, IPTU ou gás já vêm no valor, o custo total fica previsível e você evita surpresas.

4. Escolha a garantia certa. Fiador, seguro-fiança ou depósito caução: cada uma tem custo inicial diferente. O seguro-fiança costuma diluir o desembolso de entrada em parcelas.

5. Evite imóveis recém-reformados em bairros de alta demanda — a disputa eleva o valor. Bairros com bom estoque permitem negociação melhor.

6. Calcule o gasto com transporte. Um apartamento mais barato mas distante pode custar mais caro no fim do mês.

7. Dê preferência a fechar o contrato direto com o corretor, para ter documentos e condições claras.

8. Confira o percentual de reajuste anual e a data-base do contrato antes de assinar.

9. Use o prazo de carência para reformas pequenas que valorizem o imóvel — e o deixem mais confortável para você.

O corretor Rafael Cavalcante ajuda a encontrar apartamentos e casas para alugar em Caruaru e região, sempre deixando claras as condições e taxas antes da assinatura.`,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
    date: "2026-09-02",
    author: "Rafael Cavalcante",
    category: "Aluguel",
  },
  {
    id: "8",
    slug: "guia-pontos-comerciais-caruaru",
    title: "Como escolher um ponto comercial em Caruaru para abrir seu negócio",
    excerpt:
      "Fluxo de pessoas, faixa de valor, exposição e documentação: o que analisar na hora de alugar uma sala ou loja no Agreste.",
    content: `Abrir um negócio em Caruaru é uma decisão que começa antes do balcão: ela começa na escolha do endereço. Um bom ponto comercial faz toda a diferença no movimento do primeiro dia.

Fluxo é o critério número 1. Avenidas como a Agamenon Magalhães concentram alto tráfego de veículos e pedestres, ideais para serviços, lojas e escritórios. Galerias e centros empresariais oferecem custo menor com boa exposição.

Analise a faixa de valor antes de visitar. Salas comerciais em Caruaru costumam variar conforme localização, metragem e se o condomínio/IPTU estão inclusos. Prefira pontos onde as taxas já estejam somadas ao aluguel para simular com precisão.

Verifique a área útil, banheiros, vagas de garagem e a possibilidade de adequação (ar-condicionado, fachada, horário de acesso). Em centros comerciais, confira o horário de funcionamento do prédio e a segurança.

A documentação também importa: formalize a locação por contrato, com garantias claras, para proteger o seu negócio e permitir eventuais investimentos no ponto.

A Agamenon Magalhães concentra os pontos mais disputados da cidade, ideais para consultórios, estética, escritórios e lojas. O corretor Rafael Cavalcante tem salas e espaços comerciais em Caruaru e orienta sobre fluxo, valores e contrato antes da assinatura.`,
    image: "/blog/ponto-comercial-caruaru.webp",
    date: "2026-08-15",
    author: "Rafael Cavalcante",
    category: "Comercial",
  },
]
