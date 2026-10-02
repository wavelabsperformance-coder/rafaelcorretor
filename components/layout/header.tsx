"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/data"
import { cn } from "@/lib/utils"

// Se tiver uma versão clara da logo, coloque em public/images/ e troque o caminho de LOGO_TOP
const LOGO_TOP = "/images/logo.png"
const LOGO_SCROLLED = "/images/logo.png"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Empreendimentos", href: "/empreendimentos" },
  { name: "Financie", href: "/financie" },
  { name: "Negocie seu Imóvel", href: "/negocie" },

  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "/contato" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/98 py-3 shadow-sm backdrop-blur-md"
          : "bg-transparent py-5"
      )}
    >
      {/* Sombra atrás da logo: curta, só no canto esquerdo, some ao rolar */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-0 top-0 h-24 w-3/4 bg-gradient-to-r from-black/70 via-black/30 to-transparent transition-opacity duration-500 [-webkit-mask-image:linear-gradient(to_bottom,black_55%,transparent)] [mask-image:linear-gradient(to_bottom,black_55%,transparent)] md:w-1/2 xl:w-2/5",
          isScrolled ? "opacity-0" : "opacity-100"
        )}
      />

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 xl:px-8">
        <nav className="flex items-center justify-between gap-6">
          <Link href="/" className="shrink-0">
            <img
              src={isScrolled ? LOGO_SCROLLED : LOGO_TOP}
              alt="Rafael Cavalcante, corretor de imóveis"
              className="h-12 w-auto max-w-none object-contain"
            />
          </Link>

          <div className="hidden items-center gap-5 xl:flex 2xl:gap-7">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative whitespace-nowrap text-sm font-medium tracking-wide transition-colors after:absolute after:bottom-[-7px] after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:text-accent hover:after:w-full",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <Button
              asChild
              className="whitespace-nowrap bg-accent px-5 text-accent-foreground hover:bg-accent/90"
            >
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                Falar Conosco
              </a>
            </Button>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "p-2 xl:hidden",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        <div
          className={cn(
            "overflow-hidden transition-all duration-300 xl:hidden",
            isOpen ? "mt-4 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="space-y-1 border border-border bg-card p-5 shadow-xl">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-sm font-medium text-foreground"
              >
                {item.name}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-3 flex items-center gap-2 bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}