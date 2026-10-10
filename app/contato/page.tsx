import { Metadata } from "next"
import Image from "next/image"
import { siteConfig } from "@/lib/data"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  ArrowUpRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com o Rafael Cavalcante, corretor de imóveis em Caruaru.",
}

const CONTACT_IMAGE = "/images/sobre/Perfil.png"

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

const contactChannels = [
  {
    href: siteConfig.whatsappLink,
    external: true,
    label: "WhatsApp",
    value: "Conversar agora",
    icon: WhatsAppIcon,
  },
  {
    href: `tel:+${siteConfig.whatsapp}`,
    external: false,
    label: "Telefone",
    value: siteConfig.phone,
    icon: Phone,
  },
  {
    href: `mailto:${siteConfig.email}`,
    external: false,
    label: "E-mail",
    value: siteConfig.email,
    icon: Mail,
  },
  {
    href: siteConfig.googleMapsLink,
    external: true,
    label: "Área de atendimento",
    value: "Caruaru - PE e região",
    icon: MapPin,
  },
]

export default function ContatoPage() {
  return (
    <main className="bg-background">
      {/* 1. Hero — sóbrio, verde da marca com prédio sutil */}
      <section className="relative flex min-h-[400px] items-end overflow-hidden bg-[#0d3b2e] pb-16 pt-36">
        <Image
          src="/predio.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d3b2e] via-[#0d3b2e]/80 to-[#0d3b2e]/50" />
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#e9a66f]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#e9a66f]">
              Contato
            </span>
          </div>
          <h1 className="max-w-2xl font-serif text-4xl font-normal leading-tight text-white md:text-6xl text-balance">
            Vamos conversar sobre o seu <em className="italic text-[#e9a66f]">próximo imóvel</em>
          </h1>
        </div>
      </section>

      {/* 2. Canais + retrato — branco, hairlines, muito respiro */}
      <section className="relative -mt-8 rounded-t-[2.5rem] bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Canais de contato */}
            <div className="lg:col-span-7">
              <h2 className="max-w-md font-serif text-3xl font-normal leading-snug text-[#0d3b2e] md:text-4xl text-balance">
                Atendimento direto, do seu jeito
              </h2>
              <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
                Escolha o canal que preferir. A resposta é sempre pessoal, com a
                clareza e a agilidade que o seu momento exige.
              </p>

              <div className="mt-12 border-t border-border">
                {contactChannels.map((channel) => {
                  const Icon = channel.icon
                  return (
                    <a
                      key={channel.label}
                      href={channel.href}
                      {...(channel.external
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                      className="group flex items-center gap-5 border-b border-border py-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b85d19]/40 focus-visible:ring-offset-4"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#f6efe3] text-[#b85d19] transition-colors group-hover:bg-[#b85d19] group-hover:text-white">
                        <Icon className="h-[18px] w-[18px]" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                          {channel.label}
                        </span>
                        <span className="mt-1 block break-all text-[15px] font-medium text-foreground transition-colors group-hover:text-[#b85d19]">
                          {channel.value}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-border transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#b85d19]" />
                    </a>
                  )
                })}
              </div>

              {/* Disponibilidade + redes, discreto */}
              <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-[#b85d19]" />
                  <span>Atendimento pelo WhatsApp, com agilidade e transparência</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram do Rafael Cavalcante"
                    className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-[#b85d19] hover:text-[#b85d19] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b85d19]/40"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp do Rafael Cavalcante"
                    className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-[#25D366] hover:text-[#25D366] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/40"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Retrato + convite */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted">
                  <Image
                    src={CONTACT_IMAGE}
                    alt="Rafael Cavalcante, corretor de imóveis em Caruaru"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                </div>

                <div className="mt-6 px-1">
                  <p className="font-serif text-xl text-[#0d3b2e]">
                    Rafael Cavalcante
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Corretor de imóveis · CRECI/PE 17307
                  </p>

                  <Button
                    asChild
                    size="lg"
                    className="mt-6 h-12 w-full rounded-full bg-[#b85d19] text-base font-medium text-white transition-colors duration-300 hover:bg-[#0d3b2e]"
                  >
                    <a
                      href={siteConfig.whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Chamar o Rafael no WhatsApp"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      Chamar no WhatsApp
                    </a>
                  </Button>

                  <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
                    Respondo pessoalmente, normalmente em minutos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mapa — contido, com rodapé de informação */}
      <section className="bg-[#faf7f2] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#b85d19]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#b85d19]">
                  Onde atendo
                </span>
              </div>
              <h2 className="font-serif text-3xl font-normal text-[#0d3b2e] md:text-4xl">
                Caruaru - PE e região
              </h2>
            </div>
            <a
              href={siteConfig.googleMapsLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0d3b2e] underline decoration-[#b85d19] decoration-2 underline-offset-8 transition-colors hover:text-[#b85d19]"
            >
              Ver no Google Maps
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-border/80">
            <iframe
              src={siteConfig.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", height: "440px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Mapa de Caruaru - PE"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
