import Link from "next/link"
import { BadgeCheck, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { siteConfig, propertyCategories } from "@/lib/data"

// Logo do footer (se tiver uma versão clara, salve em public/images/ e troque o caminho)
const FOOTER_LOGO = "/images/logo.png"

// CRECI do Rafael (confirme o número com ele)
const CRECI = "CRECI/PE 17370"

// Link do perfil do Rafael na OLX (troque pelo link real do anunciante)
const OLX_LINK = "https://www.olx.com.br/"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Empreendimentos", href: "/empreendimentos" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
]

const legalLinks = [
  { name: "Privacidade", href: "/politica-de-privacidade" },
  { name: "Cookies", href: "/politica-de-cookies" },
  { name: "Termos", href: "/termos-de-uso" },
  { name: "LGPD", href: "/lgpd" },
]

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M20.5 3.5A11.8 11.8 0 0 0 12.08 0C5.55 0 .24 5.31.24 11.84c0 2.09.55 4.13 1.6 5.92L.14 24l6.38-1.67a11.82 11.82 0 0 0 5.56 1.41h.01c6.53 0 11.84-5.31 11.84-11.84 0-3.17-1.23-6.15-3.43-8.4ZM12.09 21.7h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.79.99 1.01-3.7-.23-.38a9.84 9.84 0 1 1 8.39 4.67Zm5.4-7.37c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.52s1.08 2.92 1.23 3.12c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.49 1.72.63.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.44.25-.7.25-1.31.18-1.44-.08-.13-.28-.2-.58-.35Z" />
    </svg>
  )
}

// Ícone da OLX (texto em negrito, no mesmo tamanho dos outros ícones)
function OlxIcon() {
  return (
    <span
      aria-hidden="true"
      className="text-[11px] font-extrabold leading-none tracking-tight"
    >
      OLX
    </span>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  const whatsappMessage = encodeURIComponent(
    "Olá! Vi o site do corretor Rafael Cavalcante feito pela WaveLabs Performance e gostaria de criar um site para o meu negócio também. Podem me ajudar?"
  )

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link href="/" className="inline-block">
              <img
                src={FOOTER_LOGO}
                alt="Rafael Cavalcante, corretor de imóveis"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Corretor de imóveis em Caruaru, número 1 em aluguéis, com mais de 4 mil locações realizadas.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram do Rafael"
                className="grid h-10 w-10 place-items-center border border-primary-foreground/20 hover:border-accent hover:text-accent transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp do Rafael"
                className="grid h-10 w-10 place-items-center border border-primary-foreground/20 hover:border-accent hover:text-accent transition-colors"
              >
                <WhatsAppIcon />
              </a>
              <a
                href={OLX_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label="Anúncios do Rafael na OLX"
                className="grid h-10 w-10 place-items-center border border-primary-foreground/20 hover:border-accent hover:text-accent transition-colors"
              >
                <OlxIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xs uppercase tracking-widest">Navegação</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-primary-foreground/65 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs uppercase tracking-widest">Categorias</h3>
            <ul className="space-y-3">
              {propertyCategories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link href={`/empreendimentos/${category.slug}`} className="text-sm text-primary-foreground/65 hover:text-accent transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs uppercase tracking-widest">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:+${siteConfig.whatsapp}`} className="flex items-center gap-3 text-sm text-primary-foreground/75 hover:text-accent transition-colors">
                  <Phone className="h-4 w-4 text-accent" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-primary-foreground/75 hover:text-accent transition-colors">
                  <Mail className="h-4 w-4 text-accent" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.googleMapsLink} target="_blank" rel="noreferrer" className="flex items-start gap-3 text-sm leading-relaxed text-primary-foreground/75 hover:text-accent transition-colors">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {siteConfig.address}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/75">
                <BadgeCheck className="h-4 w-4 text-accent" />
                {CRECI}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/50 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
            <p>© {currentYear} Rafael Cavalcante · Corretor de imóveis · {CRECI}</p>
            <span className="hidden sm:inline">•</span>
            <p>
              Desenvolvido por:{" "}
              <a
                href={`https://wa.me/5581996148462?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary-foreground/80 hover:text-accent transition-colors underline underline-offset-2"
              >
                WaveLabs Performance
              </a>
            </p>
          </div>
          <div className="flex gap-5">
            {legalLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-accent transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}