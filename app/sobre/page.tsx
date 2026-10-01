import { Metadata } from "next"
import { aboutContent, siteConfig, differentials } from "@/lib/data"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  User,
  Building2,
  BarChart3,
  Shield,
  CheckCircle2,
  Users,
  Award,
  TrendingUp,
  MapPin,
  Target,
  Eye,
  Heart,
  Clock
} from "lucide-react"


export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a história da Acauã Imóveis. Especialistas no mercado imobiliário de Recife, Caruaru e Litoral.",
}

const iconMap = {
  user: User,
  building: Building2,
  chart: BarChart3,
  shield: Shield,
}

export default function SobrePage() {
  const paragraphs = aboutContent.fullHistory.split("\n\n")

  // Alternância exclusiva entre Laranja e Verde nos cards de Diferenciais
  const differentialCardStyles = [
    {
      card: "bg-[#0d3b2e] text-white border-[#0d3b2e]",
      iconBg: "bg-[#b85d19] text-white",
      title: "text-white",
      desc: "text-white/80",
    },
    {
      card: "bg-[#b85d19] text-white border-[#b85d19]",
      iconBg: "bg-[#0d3b2e] text-white",
      title: "text-white",
      desc: "text-white/90",
    },
    {
      card: "bg-[#0d3b2e] text-white border-[#0d3b2e]",
      iconBg: "bg-[#b85d19] text-white",
      title: "text-white",
      desc: "text-white/80",
    },
    {
      card: "bg-[#b85d19] text-white border-[#b85d19]",
      iconBg: "bg-[#0d3b2e] text-white",
      title: "text-white",
      desc: "text-white/90",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 lg:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="Acauã Imóveis - Recife, Caruaru e Litoral"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b2e]/95 via-[#0d3b2e]/85 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <MapPin className="h-3.5 w-3.5 text-[#b85d19]" />
              <span className="text-xs tracking-wider text-white uppercase font-medium">
                Recife • Caruaru • Litoral
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white font-serif leading-tight">
              Sua jornada imobiliária conduzida por especialistas
            </h1>
            <p className="text-lg md:text-xl text-white/80 mt-6 leading-relaxed font-light">
              {aboutContent.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Trajetória & História */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#b85d19] font-bold">
                Nossa Trajetória
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-[#0d3b2e] mt-3 font-serif">
                Experiência de mercado aliada à inovação
              </h2>
              <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Imagem Institucional */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border/80 bg-muted">
                <img
                  src="/sobre/institucional.png"
                  alt="Acauã Imóveis - Sede e Atendimento"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#0d3b2e] text-white p-6 rounded-2xl shadow-xl hidden sm:flex items-center gap-4 border border-white/10">
                <div className="p-3 bg-[#b85d19] rounded-xl text-white">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <span className="block text-xl font-serif font-bold text-white">+10 Anos</span>
                  <span className="text-xs text-white/70">de Bagagem no Mercado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nosso Compromisso (Alternado em Verde Escuro e Laranja) */}
      <section className="py-20 lg:py-28 bg-[#0d3b2e] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#b85d19] font-bold">
              Nosso Compromisso
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white mt-3 font-serif">
              O que nos move todos os dias
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão - Card Laranja */}
            <div className="p-8 bg-[#b85d19] text-white rounded-3xl border border-[#b85d19] shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#0d3b2e] flex items-center justify-center mb-6 text-white shadow-md">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 font-serif">Missão</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                {aboutContent.mission}
              </p>
            </div>

            {/* Visão - Card Verde Escuro */}
            <div className="p-8 bg-[#0a2e24] text-white rounded-3xl border border-white/10 shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#b85d19] flex items-center justify-center mb-6 text-white shadow-md">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 font-serif">Visão</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {aboutContent.vision}
              </p>
            </div>

            {/* Valores - Card Laranja */}
            <div className="p-8 bg-[#b85d19] text-white rounded-3xl border border-[#b85d19] shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#0d3b2e] flex items-center justify-center mb-6 text-white shadow-md">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 font-serif">Valores</h3>
              <ul className="space-y-3">
                {aboutContent.values.slice(0, 4).map((value, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/90 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados / Números */}
      <section className="py-20 lg:py-28 bg-[#b85d19] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#0d3b2e] font-bold">
              Solidez & Confiança
            </span>
            <h2 className="text-3xl md:text-4xl font-light mt-3 font-serif text-white">
              Números que Refletem Nossa Dedicação
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-8 rounded-3xl bg-[#0d3b2e]/30 border border-white/20 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#0d3b2e] flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <span className="block text-3xl lg:text-4xl font-serif font-bold text-white">+10 Anos</span>
              <span className="text-xs text-white/80 mt-2 block">
                Experiência dos Gestores
              </span>
            </div>
            <div className="text-center p-8 rounded-3xl bg-[#0d3b2e]/30 border border-white/20 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#0d3b2e] flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <span className="block text-3xl lg:text-4xl font-serif font-bold text-white">100%</span>
              <span className="text-xs text-white/80 mt-2 block">
                Compromisso & Transparência
              </span>
            </div>
            <div className="text-center p-8 rounded-3xl bg-[#0d3b2e]/30 border border-white/20 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#0d3b2e] flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="block text-3xl lg:text-4xl font-serif font-bold text-white">98%</span>
              <span className="text-xs text-white/80 mt-2 block">
                Satisfação dos Clientes
              </span>
            </div>
            <div className="text-center p-8 rounded-3xl bg-[#0d3b2e]/30 border border-white/20 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#0d3b2e] flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <span className="block text-3xl lg:text-4xl font-serif font-bold text-white">3 Pólos</span>
              <span className="text-xs text-white/80 mt-2 block">
                Recife, Caruaru e Litoral
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#b85d19] font-bold">
                Nossa Equipe
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-[#0d3b2e] mt-3 font-serif">
                Profissionais Dedicados ao Seu Sonho
              </h2>
              <p className="text-muted-foreground leading-relaxed mt-6">
                Nossa equipe é formada por profissionais apaixonados pelo mercado imobiliário, com vasta experiência e comprometimento em oferecer o melhor atendimento.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Cada membro da nossa equipe é treinado para entender suas necessidades e encontrar a solução perfeita para você, seja na compra, venda ou locação de imóveis.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="rounded-xl bg-[#0d3b2e] hover:bg-[#092920] text-white">
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar com Nossa Equipe
                    <ArrowRight className="ml-2 h-4 w-4 text-[#b85d19]" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Equipe completa da Acauã Imóveis"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#b85d19] rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="h-7 w-7 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Por Que nos Escolher (Diferenciais alternando Verde e Laranja) */}
      <section className="py-20 lg:py-28 bg-[#0d3b2e] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#b85d19] font-bold">
              Por Que nos Escolher
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white mt-3 font-serif">
              Nossos Diferenciais
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              const style = differentialCardStyles[index % differentialCardStyles.length]

              return (
                <div
                  key={item.title}
                  className={`text-center group p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 ${style.card}`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 shadow-md transition-all duration-300 ${style.iconBg}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className={`text-lg font-semibold mb-3 font-serif ${style.title}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${style.desc}`}>
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pronto para Dar o Próximo Passo? (Único Botão Verde do WhatsApp) */}
      <section className="py-20 lg:py-28 bg-[#faf7f2] border-t border-border/50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[#b85d19] font-bold">
            Atendimento Exclusivo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light font-serif mt-3 text-[#0d3b2e]">
            Pronto para Dar o Próximo Passo?
          </h2>
          <p className="text-muted-foreground mt-6 leading-relaxed text-lg font-light">
            Seja em Recife, Caruaru ou Litoral, nossa equipe está pronta para entender o que você procura e conduzir todo o processo com máxima segurança.
          </p>
          <div className="flex items-center justify-center mt-10">
            <Button asChild size="lg" className="w-full sm:w-auto rounded-xl bg-[#0d3b2e] hover:bg-[#092920] text-white px-8 h-12 text-base font-medium shadow-lg transition-all active:scale-95">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar pelo WhatsApp
                <ArrowRight className="ml-2 h-5 w-5 text-[#b85d19]" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}