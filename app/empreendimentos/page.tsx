"use client"

import Link from "next/link"
import { ArrowRight, Building2, Home, Key, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig, rentalProperties } from "@/lib/data"
import { FeaturedCarousel } from "@/components/featured-carousel"

const categories = [
  {
    id: "imoveis-para-alugar",
    title: "Imóveis para Alugar",
    subtitle: "Locação Residencial & Flats",
    description:
      "Apartamentos, flats e casas selecionadas com curadoria nos melhores bairros de Caruaru.",
    slug: "imoveis-para-alugar",
    image:
      "/imoveis/apartamentos-para-venda/edificio-cely-miranda/1.jpeg",
    icon: Key,
    tag: "Locação",
  },
  {
    id: "imoveis-para-venda",
    title: "Imóveis para Venda",
    subtitle: "Alto Padrão & Condomínios",
    description:
      "Casas em condomínio fechado e apartamentos de alto padrão nos bairros nobres de Caruaru.",
    slug: "imoveis-para-venda",
    image:
      "/imoveis/casas-para-venda/casa-the-house-club/1.jpeg",
    icon: Home,
    tag: "Venda",
  },
  {
    id: "pontos-comerciais",
    title: "Pontos Comerciais",
    subtitle: "Salas & Espaços Corporativos",
    description:
      "Estruturas comerciais estratégicas nos principais corredores de negócios de Caruaru.",
    slug: "pontos-comerciais",
    image:
      "/imoveis/pontos-comerciais/ponto-comercial-agamenon-magalhaes/1.jpeg",
    icon: Building2,
    tag: "Comercial",
  },
]

export default function EmpreendimentosPage() {
  return (
    <>
      {/* 1. HERO HEADER COM GRADIENTE SUAVE */}
      <section className="relative flex min-h-[420px] items-end overflow-hidden pt-36 pb-16 bg-[#082a21]">
        {/* IMAGEM DE FUNDO DA HERO */}
        <img
          src="/imoveis/apartamentos-para-venda/edificio-cely-miranda/1.jpeg"
          alt="Imóveis em Caruaru"
          className="absolute inset-0 h-full w-full object-cover object-center filter brightness-[0.4]"
        />

        {/* OVERLAY SUAVE */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#082a21] via-[#082a21]/80 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#b85d19]/15 via-transparent to-transparent pointer-events-none" />

        {/* CONTEÚDO DA HERO */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl rounded-3xl bg-[#082a21]/80 backdrop-blur-md p-8 md:p-10 border border-[#e9a66f]/20 shadow-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e9a66f]/30 bg-black/30 px-3.5 py-1 mb-4">
              <Sparkles className="h-3.5 w-3.5 text-[#e9a66f]" />

              <span className="text-[10px] uppercase tracking-[0.25em] text-[#e9a66f] font-bold">
                Exclusividade em Caruaru
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white leading-tight">
              Portfólio de Imóveis
            </h1>

            <p className="text-white/85 mt-3 max-w-xl text-sm sm:text-base font-light leading-relaxed">
              Confira nossa seleção exclusiva de opções residenciais e comerciais
              nos melhores bairros de Caruaru.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CARROSSEL DE DESTAQUES */}
      <div className="bg-[#faf7f2] pt-8">
        <FeaturedCarousel
          properties={rentalProperties}
          title="Destaques em Caruaru"
          subtitle="Oportunidades em Evidência"
          type="aluguel"
          viewAllHref="/empreendimentos/imoveis-para-alugar"
          viewAllLabel="Ver imóveis"
        />
      </div>

      {/* 3. GRID DAS CATEGORIAS */}
      <section className="py-16 lg:py-24 bg-[#faf7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 max-w-2xl border-l-2 border-[#b85d19] pl-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#b85d19] font-bold block">
              Explorar por Categoria
            </span>

            <h2 className="mt-1 font-serif text-3xl md:text-4xl text-[#0d3b2e] font-normal">
              O que você procura em Caruaru?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => {
              const Icon = cat.icon

              return (
                <Link
                  key={cat.id}
                  href={`/empreendimentos/${cat.slug}`}
                  className="group relative h-[380px] sm:h-[420px] rounded-3xl overflow-hidden border border-[#0d3b2e]/10 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between p-7 sm:p-8"
                >
                  {/* IMAGEM DE FUNDO DA CATEGORIA */}
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-[#b85d19]/25 to-black/40 transition-opacity duration-500 group-hover:opacity-90" />

                  {/* TOPO DO CARD */}
                  <div className="relative z-10 flex items-center justify-between">
                    {/* BADGE DE CATEGORIA */}
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-md ${
                        cat.tag === "Venda"
                          ? "bg-[#b85d19]"
                          : "bg-[#0d3b2e]"
                      }`}
                    >
                      {cat.tag}
                    </span>

                    {/* ÍCONE */}
                    <div className="w-10 h-10 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#0d3b2e] group-hover:border-[#0d3b2e] transition-all duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* BASE DO CARD */}
                  <div className="relative z-10">
                    <span className="text-xs uppercase tracking-widest text-[#e9a66f] font-medium block mb-1">
                      {cat.subtitle}
                    </span>

                    <h3 className="font-serif text-2xl font-normal text-white group-hover:text-[#e9a66f] transition-colors mb-2">
                      {cat.title}
                    </h3>

                    <p className="text-white/80 text-sm font-light line-clamp-2 mb-6">
                      {cat.description}
                    </p>

                    <div className="pt-4 border-t border-white/20 flex items-center justify-end">
                      <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white group-hover:text-[#0d3b2e] transition-colors">
                        Acessar catálogo

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

      {/* 4. CTA FINAL */}
      <section className="relative py-24 bg-[#082a21] overflow-hidden">
        {/* IMAGEM DE FUNDO */}
        <img
          src="/predio.png"
          alt="Prédios em Caruaru"
          className="absolute inset-0 h-full w-full object-cover object-center filter brightness-[0.35]"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#082a21] via-[#082a21]/70 to-black/60 pointer-events-none" />

        {/* CONTEÚDO */}
        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-normal text-white">
            Procura algo específico em Caruaru?
          </h2>

          <p className="text-white/80 mt-4 leading-relaxed text-sm sm:text-base font-light">
            Fale diretamente com o Rafael Cavalcante para encontrar imóveis sob
            medida para sua necessidade.
          </p>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-[#b85d19] hover:bg-[#964a13] text-white rounded-full px-8 py-6 shadow-xl transition-all duration-300 hover:scale-105"
            >
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com o Rafael

                <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}