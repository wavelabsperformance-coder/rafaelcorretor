import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeaturedCarousel } from "@/components/featured-carousel"
import { ServicesSection } from "@/components/home/services-section"
import { aboutContent, siteConfig, rentalProperties } from "@/lib/data"

export const metadata: Metadata = {
  title: "Sobre o Rafael",
  description:
    "Rafael Cavalcante, corretor de imóveis em Caruaru, número 1 em aluguéis e com mais de 4 mil locações realizadas.",
}

// Imagens de fundo para desktop
const HERO_DESKTOP = "/images/sobre/perfil.png"

// Logo do WhatsApp
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
      className={`shrink-0 ${className ?? ""}`}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export default function SobrePage() {
  const paragraphs = aboutContent.fullHistory.split("\n\n")
  const yearsInMarket = new Date().getFullYear() - siteConfig.foundedYear

  const stats = [
    { value: "+4 mil", label: "locações realizadas" },
    { value: "Nº 1", label: "em locação em Caruaru" },
    { value: `${yearsInMarket} anos`, label: "no mercado imobiliário" },
    { value: "9 anos", label: "de experiência em bancos" },
  ]

  const journey = [
    { tag: "9 anos", title: "No setor bancário, no BNB e no Bradesco" },
    { tag: `${yearsInMarket} anos`, title: "No mercado imobiliário de Caruaru" },
    { tag: "Hoje", title: "Nº 1 em locação em Caruaru, com mais de 4 mil locações" },
  ]

  return (
    <>
      {/* 1. Abertura */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-gradient-to-b from-[#0d3b2e] to-[#082a21] pb-24 pt-24 text-white md:items-center md:pb-36 md:pt-36">
        {/* Imagem do desktop */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-cover bg-center md:block"
          style={{ backgroundImage: `url(${HERO_DESKTOP})` }}
        />

        {/* Overlay do desktop */}
        <div className="absolute inset-0 hidden md:block md:bg-gradient-to-r md:from-[#082a21]/90 md:via-[#082a21]/55 md:to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Tag CRECI com visual premium */}
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#e9a66f]/30 bg-[#082a21]/80 px-3.5 py-1.5 backdrop-blur-md md:mb-7">
              <span className="h-2 w-2 rounded-full bg-[#e9a66f]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e9a66f]">
                Rafael Cavalcante · CRECI/PE 17307
              </span>
            </div>

            {/* Bloco de Título Sofisticado */}
            <div className="relative rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-sm md:border-none md:bg-transparent md:p-0">
              <h1 className="font-serif text-4xl font-normal leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                Nº 1 em aluguéis
                <br />
                <em className="italic text-[#e9a66f]">de Caruaru</em>
              </h1>
            </div>

            {/* Imagem sem fundo no Mobile (de canto a canto da tela e colada ao título) */}
            <div className="relative mt-1 -mx-6 w-[calc(100%+3rem)] max-w-none aspect-[4/5] md:hidden">
              <Image
                src="images/sobre/perfil.png"
                alt="Rafael Cavalcante"
                fill
                priority
                sizes="100vw"
                className="object-contain object-center"
              />
            </div>

            {/* Texto Descritivo */}
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:mt-7 md:text-lg">
              Com mais de 4 mil locações realizadas, sou o corretor que mais
              aluga em Caruaru. São 5 anos de atuação no mercado imobiliário e
              9 anos de experiência no setor bancário, e atendo de forma
              personalizada, com transparência e agilidade, da primeira
              conversa até a conclusão do negócio.
            </p>

            {/* Botões de Ação */}
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8 md:mt-10">
              <Button
                asChild
                size="lg"
                className="h-12 w-full rounded-full bg-[#b85d19] px-8 text-base text-white transition-colors duration-300 hover:bg-white hover:text-[#0d3b2e] sm:w-auto"
              >
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </Button>

              <Link
                href="/empreendimentos/imoveis-para-alugar"
                className="inline-flex items-center gap-2 text-base font-semibold text-white underline decoration-[#e9a66f] decoration-2 underline-offset-8 transition-colors duration-300 hover:text-[#e9a66f]"
              >
                Ver imóveis para alugar
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Números (laranja) */}
      <section className="relative -mt-8 rounded-t-[2.5rem] bg-[#b85d19] pb-24 pt-6 text-white lg:pb-28">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`py-8 pr-4 lg:px-8 ${
                index === 0 ? "lg:pl-0" : "lg:border-l lg:border-white/25"
              }`}
            >
              <p className="font-serif text-4xl text-white sm:text-5xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-white/85">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Trajetória */}
      <section className="relative -mt-8 rounded-t-[2.5rem] bg-[#f1e7d6] pb-28 pt-20 lg:pb-32 lg:pt-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#b85d19]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#b85d19]">
                Minha trajetória
              </span>
            </div>

            <h2 className="font-serif text-4xl font-normal leading-tight text-[#0d3b2e] lg:text-5xl text-balance">
              Como cheguei até aqui
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-[#0d3b2e]/80 md:text-lg">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[2rem] bg-[#0d3b2e] px-8 py-4 text-white shadow-xl lg:sticky lg:top-28">
              {journey.map((step, index) => (
                <div
                  key={step.tag}
                  className={`py-8 ${
                    index > 0 ? "border-t border-white/15" : ""
                  }`}
                >
                  <p className="font-serif text-4xl text-[#e9a66f]">
                    {step.tag}
                  </p>
                  <p className="mt-2 text-[15px] leading-snug text-white/80">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Missão, visão e valores */}
      <section className="relative -mt-8 rounded-t-[2.5rem] bg-[#082a21] pb-28 pt-20 text-white lg:pb-32 lg:pt-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 flex items-center gap-3">
            <span className="h-px w-8 bg-[#e9a66f]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#e9a66f]">
              No que eu acredito
            </span>
          </div>

          <div className="grid gap-12 md:grid-cols-3 md:gap-0">
            <div className="md:pr-10">
              <h3 className="font-serif text-3xl text-white">Missão</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/70">
                {aboutContent.mission}
              </p>
            </div>

            <div className="md:border-l md:border-white/15 md:px-10">
              <h3 className="font-serif text-3xl text-white">Visão</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/70">
                {aboutContent.vision}
              </p>
            </div>

            <div className="md:border-l md:border-white/15 md:pl-10">
              <h3 className="font-serif text-3xl text-white">Valores</h3>
              <ul className="mt-4 space-y-2.5">
                {aboutContent.values.slice(0, 5).map((value) => (
                  <li
                    key={value}
                    className="flex items-start gap-3 text-[15px] text-white/70"
                  >
                    <span className="mt-2.5 h-px w-4 shrink-0 bg-[#e9a66f]" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Serviços */}
      <div className="relative -mt-8 overflow-hidden rounded-t-[2.5rem] bg-[#faf7f2]">
        <ServicesSection />
      </div>

      {/* 6. Convite para o WhatsApp */}
      <section className="relative min-h-[500px] overflow-hidden bg-[#0d3b2e] py-32 text-center lg:py-40 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/predio.png"
            alt="Empreendimento em Caruaru"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-[#b85d19]/20 to-black/75" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-normal leading-tight text-white md:text-5xl text-balance">
            Vamos conversar sobre o seu próximo imóvel?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-light leading-relaxed text-white/90">
            Me chame no WhatsApp e conte o que você procura.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 h-12 rounded-full bg-[#b85d19] px-8 text-base font-medium text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-[#0d3b2e]"
          >
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar com o Rafael
            </a>
          </Button>
        </div>
      </section>

      {/* 7. Carrossel de aluguel */}
      <FeaturedCarousel
        properties={rentalProperties}
        title="Imóveis para Alugar"
        subtitle="Destaques"
        type="aluguel"
        viewAllHref="/empreendimentos/imoveis-para-alugar"
      />
    </>
  )
}