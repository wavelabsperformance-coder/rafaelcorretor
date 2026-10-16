"use client"

import { useState } from "react"
import type { MouseEvent } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

interface CardGalleryProps {
  href: string
  images: string[]
  title: string
  badge: string
  badgeClassName?: string
  isVideo?: boolean
}

export function CardGallery({
  href,
  images,
  title,
  badge,
  badgeClassName = "bg-[#b85d19]",
  isVideo = false,
}: CardGalleryProps) {
  const photos = images && images.length > 0 ? images : ["/placeholder.jpg"]
  const total = photos.length
  const [index, setIndex] = useState(0)
  const hasMany = total > 1

  function trocarFoto(event: MouseEvent<HTMLButtonElement>, passo: number) {
    event.preventDefault()
    event.stopPropagation()
    setIndex((atual) => (atual + passo + total) % total)
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
      <Link href={href} className="absolute inset-0 block cursor-pointer">
        <img
          src={photos[index] || "/placeholder.jpg"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div
        className={`pointer-events-none absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-medium text-white shadow-sm ${badgeClassName}`}
      >
        {badge}
      </div>

      {isVideo && (
        <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
          <Play className="h-3 w-3 fill-white" />
          Vídeo
        </div>
      )}

      {hasMany && (
        <>
          <button
            type="button"
            aria-label="Foto anterior"
            onClick={(event) => trocarFoto(event, -1)}
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#0d3b2e] shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white active:scale-95"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label="Próxima foto"
            onClick={(event) => trocarFoto(event, 1)}
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#0d3b2e] shadow-md backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white active:scale-95"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-black/55 px-2 py-0.5 text-[11px] font-medium text-white">
            {index + 1} / {total}
          </div>
        </>
      )}
    </div>
  )
}

export default CardGallery
