"use client"

import Link from "next/link"
import { ArrowRight, Building2, Home, Key } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig, saleProperties } from "@/lib/data"
import { FeaturedCarousel } from "@/components/featured-carousel"

const categories = [
  {
    id: "imoveis-para-alugar",
    title: "Imóveis para Alugar",
    subtitle: "Locação Residencial & Flats",
    description:
      "Apartamentos, flats e casas selecionadas com curadoria nos melhores bairros.",
    slug: "imoveis-para-alugar",
    count: "7 imóveis disponíveis",
    image:
      "/imoveis/apartamentos-para-alugar/edificio-tereza-rodrigues/1.jpeg",
    icon: Key,
    tag: "Locação",
  },
  {
    id: "imoveis-para-venda",
    title: "Imóveis para Venda",
    subtitle: "Alto Padrão, Condomínios & Mansões",
    description:
      "Casas em condomínio fechado, mansões e apartamentos de luxo prontos para morar.",
    slug: "imoveis-para-venda",
    count: "5 imóveis disponíveis",
    image: "/imoveis/casas-para-venda/casa-monte-castelo-gravata/5.jpeg",
    icon: Home,
    tag: "Venda",
  },
  {
    id: "pontos-comerciais",
    title: "Pontos Comerciais",
    subtitle: "Salas, Lojas & Espaços Corporativos",
    description:
      "Estruturas comerciais estratégicas para o crescimento do seu negócio.",
    slug: "pontos-comerciais",
    count: "1 imóvel disponível",
    image:
      "/imoveis/pontos-comerciais/ponto-comercial-agamenon-magalhaes/1.jpeg",
    icon: Building2,
    tag: "Comercial",
  },
]

export default function EmpreendimentosPage() {
  return (
    <>
      {/* 1. HERO HEADER COM A IMAGEM DE CAPA DA CONTATO */}
      <section className="relative flex min-h-[460px] items-end overflow-hidden pt-36 pb-16 bg-[#0d3b2e]">
        {/* IMAGEM DE FUNDO DA PÁGINA DE CONTATO */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85"
          alt="Capa Empreendimentos"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* OVERLAY DEGRADÊ PREMIUM */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061e17] via-[#0d3b2e]/85 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(#b85d19_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

        {/* CONTEÚDO DA HERO */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl rounded-3xl bg-black/30 backdrop-blur-md p-8 md:p-10 border border-white/10 shadow-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#b85d19] font-bold block">
              Portfólio Exclusivo
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light mt-2 text-white leading-tight">
              Nossos Empreendimentos
            </h1>

            <p className="text-white/80 mt-4 max-w-2xl text-base md:text-lg font-light leading-relaxed">
              Explore nossa curadoria de imóveis para locação, venda e
              oportunidades comerciais em Pernambuco.
            </p>
          </div>
        </div>
      </section>

      {/* 2. GRID DAS CATEGORIAS */}
      <section className="py-20 lg:py-28 bg-[#faf7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl border-l-4 border-[#b85d19] pl-4">
            <p className="text-xs uppercase tracking-[0.25em] text-[#b85d19] font-bold">
              Seleção por Tipo
            </p>

            <h2 className="mt-2 font-serif text-3xl md:text-4xl text-[#0d3b2e] font-semibold">
              Categorias Principais
            </h2>

            <p className="mt-3 leading-relaxed text-muted-foreground">
              Encontre a solução ideal para o seu estilo de vida ou investimento
              imobiliário.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => {
              const Icon = cat.icon

              return (
                <Link
                  key={cat.id}
                  href={`/empreendimentos/${cat.slug}`}
                  className="group relative h-[400px] sm:h-[440px] rounded-3xl overflow-hidden border border-border/60 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between p-7 sm:p-8"
                >
                  {/* IMAGEM DE FUNDO DA CATEGORIA */}
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* OVERLAY ESCURO */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061e17] via-[#0d3b2e]/60 to-black/30 transition-opacity duration-500 group-hover:opacity-90" />

                  {/* TOPO DO CARD */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#b85d19] text-white shadow-md">
                      {cat.tag}
                    </span>

                    <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#b85d19] group-hover:border-[#b85d19] transition-all duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* BASE DO CARD */}
                  <div className="relative z-10">
                    <span className="text-xs uppercase tracking-widest text-[#f0a36b] font-medium block mb-1">
                      {cat.subtitle}
                    </span>

                    <h3 className="font-serif text-2xl font-semibold text-white group-hover:text-[#f8c9a5] transition-colors mb-2">
                      {cat.title}
                    </h3>

                    <p className="text-white/80 text-sm font-light line-clamp-2 mb-5">
                      {cat.description}
                    </p>

                    <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                      <span className="text-xs text-white/80 font-medium bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                        {cat.count}
                      </span>

                      <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white group-hover:text-[#b85d19] bg-white/10 group-hover:bg-white px-4 py-2 rounded-xl backdrop-blur-sm transition-all duration-300">
                        Acessar

                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. CARROSSEL DE DESTAQUES */}
      <FeaturedCarousel
  properties={saleProperties}
  title="Imóveis em Destaque"
  subtitle="Seleção Especial"
  type="venda"
  viewAllHref="/empreendimentos/imoveis-para-venda"
  viewAllLabel="Ver todos"
/>

      {/* 4. CTA FINAL */}
      <section className="py-20 bg-white border-t border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0d3b2e]">
            Não encontrou o que procura?
          </h2>

          <p className="text-muted-foreground mt-4 leading-relaxed">
            Nossa equipe de especialistas está pronta para apresentar
            oportunidades exclusivas fora do catálogo público.
          </p>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-[#0d3b2e] hover:bg-[#092920] text-white rounded-xl px-8 py-6 shadow-lg"
            >
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com Especialista

                <ArrowRight className="ml-2 h-4 w-4 text-[#b85d19]" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}