"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/data"
import { cn } from "@/lib/utils"

const LOGO = "/images/logo.png"

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

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-background py-3 shadow-sm">
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 xl:px-8">
        <nav className="flex items-center justify-between gap-6">
          <Link href="/" className="shrink-0">
            <img
              src={LOGO}
              alt="Rafael Cavalcante, corretor de imóveis"
              className="h-12 w-auto max-w-none object-contain"
            />
          </Link>

          <div className="hidden items-center gap-5 xl:flex 2xl:gap-7">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative whitespace-nowrap text-sm font-medium tracking-wide text-foreground transition-colors after:absolute after:bottom-[-7px] after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:text-accent hover:after:w-full"
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
            className="p-2 text-foreground xl:hidden"
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