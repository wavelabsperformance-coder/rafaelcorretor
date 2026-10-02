import { Metadata } from "next"
import { siteConfig } from "@/lib/data"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com o Rafael Cavalcante, corretor de imóveis em Caruaru.",
}

// Imagem da coluna da direita (troque por uma imagem do Rafael quando tiver)
const CONTACT_IMAGE = "images/sobre/perfil.png"

// Ícone vetorial oficial do WhatsApp
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.616-.919-2.213-.242-.58-.488-.501-.67-.51-.172-.01-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function ContatoPage() {
  return (
    <main className="bg-background">
   {/* Banner Superior */}
      <section className="relative flex min-h-[460px] items-end overflow-hidden py-20">
        <img
          src="/predio.png"
          alt="Prédios de médio e alto padrão em Caruaru"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
            Fale com o Rafael
          </p>
          <h1 className="mt-3 font-serif text-5xl text-white md:text-6xl font-light">
            Entre em <em className="italic text-[#e9a66f]">contato</em>
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/80 font-light">
            Uma conversa cuidadosa é o primeiro passo para encontrar o endereço
            certo.
          </p>
        </div>
      </section>

      {/* Seção Principal de Contato */}
      <section className="bg-[#f6efe3] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            
            {/* Coluna Esquerda: Informações de Contato */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#b85d19] font-bold block mb-2">
                  Atendimento Personalizado
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-[#0d3b2e] font-semibold">
                  Estou aqui para ajudar
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground max-w-xl">
                  Acompanho cada etapa com clareza, transparência e agilidade, da primeira conversa até a conclusão do negócio.
                </p>

                {/* Grid de Cards de Contato */}
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  
                  {/* Telefone */}
                  <a
                    href={`tel:+${siteConfig.whatsapp}`}
                    className="group relative flex items-start gap-4 rounded-3xl border border-border/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b85d19]/40 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Telefone
                      </span>
                      <strong className="mt-1 block font-medium text-foreground group-hover:text-accent transition-colors">
                        {siteConfig.phone}
                      </strong>
                    </div>
                  </a>

                  {/* WhatsApp Card */}
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex items-start gap-4 rounded-3xl border border-[#25D366]/30 bg-[#25D366] p-5 text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white transition-colors group-hover:bg-white group-hover:text-[#25D366]">
                      <WhatsAppIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                        WhatsApp
                      </span>
                      <strong className="mt-1 block font-medium text-white">
                        Conversar agora
                      </strong>
                    </div>
                  </a>

                  {/* E-mail */}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group relative flex items-start gap-4 rounded-3xl border border-border/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b85d19]/40 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        E-mail
                      </span>
                      <strong className="mt-1 block font-medium text-foreground truncate group-hover:text-accent transition-colors">
                        {siteConfig.email}
                      </strong>
                    </div>
                  </a>

                  {/* Atendimento */}
                  <a
                    href={siteConfig.googleMapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative flex items-start gap-4 rounded-3xl border border-border/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b85d19]/40 hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Atendimento
                      </span>
                      <strong className="mt-1 block text-sm font-medium text-foreground leading-snug group-hover:text-primary transition-colors">
                        Caruaru - PE e região
                      </strong>
                    </div>
                  </a>

                </div>
              </div>

              {/* Atendimento e Redes Sociais */}
              <div className="mt-10 grid gap-6 sm:grid-cols-2 border-t border-[#0d3b2e]/15 pt-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-accent">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Como Atendo
                    </p>
                    <p className="text-sm font-medium text-foreground mt-0.5">
                      Pelo WhatsApp, com agilidade e transparência
                    </p>
                  </div>
                </div>

                {/* BOTÕES DE REDE SOCIAL COLORIDOS */}
                <div className="flex items-center gap-3 sm:justify-end">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Siga o Rafael:
                  </span>
                  <div className="flex gap-2">
                    {/* Botão Instagram Colorido */}
                    <a
                      href={siteConfig.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>

                    {/* Botão WhatsApp Colorido com Ícone Oficial */}
                    <a
                      href={siteConfig.whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="WhatsApp"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-md"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Imagem + Card CTA */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lg border border-border/50">
                <img
                  src={CONTACT_IMAGE}
                  alt="Rafael Cavalcante, corretor de imóveis em Caruaru"
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="rounded-[2rem] bg-gradient-to-br from-[#b85d19] to-[#8f4510] p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 rounded-full bg-white/10 pointer-events-none" />
                <h3 className="font-serif text-2xl md:text-3xl font-semibold">
                  Fale com o Rafael
                </h3>
                <p className="mt-3 leading-relaxed text-white/90 font-light text-sm">
                  Conte o que você procura e eu te mostro as melhores opções para o seu momento.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-6 w-full bg-[#0d3b2e] hover:bg-[#092920] text-white rounded-full h-12 shadow-md transition-all duration-300"
                >
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon className="mr-2 h-5 w-5" /> Iniciar conversa
                  </a>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Seção do Mapa */}
      <section className="relative">
        <div className="h-[460px] lg:h-[560px]">
          <iframe
            src={siteConfig.googleMapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Mapa de Caruaru - PE"
          />
        </div>
        <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 md:block lg:left-16">
          <div className="max-w-sm rounded-[1.75rem] bg-white p-8 shadow-2xl border border-border/60">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#b85d19]">
              Onde eu atendo
            </p>
            <h3 className="mt-2 font-serif text-2xl font-semibold text-[#0d3b2e]">
              Caruaru - PE e região
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Atendimento personalizado para quem quer alugar, comprar ou vender.
            </p>
            <Button asChild className="mt-6 w-full bg-[#0d3b2e] hover:bg-[#092920] text-white rounded-full">
              <a
                href={siteConfig.googleMapsLink}
                target="_blank"
                rel="noreferrer"
              >
                Ver no mapa <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}