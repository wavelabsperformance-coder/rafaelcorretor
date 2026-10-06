"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/lib/data"
import { MapPin, Phone, Mail, BadgeCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

// CRECI do Rafael (use o mesmo número do footer e confirme com ele)
const CRECI = "CRECI/PE 17370"

export function MapSection() {
  return (
    <section className="relative">
      {/* Map */}
      <div className="w-full h-[450px] lg:h-[550px]">
        <iframe
          src={siteConfig.googleMapsEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de Caruaru - PE"
          className="transition-all duration-500"
        />
      </div>

      {/* Info Card */}
      <div className="absolute right-6 top-6 z-10 hidden md:block lg:right-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-[min(330px,calc(100vw-3rem))] rounded-xl border border-border bg-card p-7 shadow-2xl lg:p-8"
        >
          <h3 className="text-2xl font-light text-foreground mb-6">
            Onde eu atendo
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm">
              <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="min-w-0 break-words text-muted-foreground">{siteConfig.address}</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="min-w-0 break-words text-muted-foreground">{siteConfig.phone}</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="min-w-0 break-words text-[13px] text-muted-foreground">{siteConfig.email}</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <BadgeCheck className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="min-w-0 break-words text-muted-foreground">{CRECI}</span>
            </li>
          </ul>
          <div className="mt-6">
            <Button asChild className="w-full rounded-lg">
              <a
                href={siteConfig.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver no mapa
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Info */}
      <div className="md:hidden bg-card p-6 border-t border-border">
        <h3 className="text-xl font-light text-foreground mb-5">
          Onde eu atendo
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3 text-sm">
            <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="min-w-0 break-words text-muted-foreground">{siteConfig.address}</span>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="min-w-0 break-words text-muted-foreground">{siteConfig.phone}</span>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="min-w-0 break-words text-muted-foreground">{siteConfig.email}</span>
          </li>
          <li className="flex items-start gap-3 text-sm">
            <BadgeCheck className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="min-w-0 break-words text-muted-foreground">{CRECI}</span>
          </li>
        </ul>
        <div className="mt-6">
          <Button asChild className="w-full rounded-lg">
            <a
              href={siteConfig.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no mapa
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}