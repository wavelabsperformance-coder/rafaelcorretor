"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Bed,
  Bath,
  Car,
  Maximize,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Play,
  Building2,
} from "lucide-react"

export interface PropertyCardData {
  id: string
  title: string
  price: string
  location: string
  coverImage: string
  bedrooms?: number
  bathrooms?: number
  parking?: number
  area?: string
  images?: string[]
  videos?: string[]
}

interface PropertyCardProps {
  property: PropertyCardData
  type: "venda" | "aluguel" | "comercial"
}

export function PropertyCard({
  property,
  type,
}: PropertyCardProps) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const images =
    property.images && property.images.length > 0
      ? property.images
      : [property.coverImage]

  const totalImages = images.length
  const hasVideos =
    property.videos && property.videos.length > 0

  const isLocacao = type === "aluguel"
  const isComercial = type === "comercial"

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setCurrentImgIndex((prev) =>
      prev === 0 ? totalImages - 1 : prev - 1
    )
  }

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setCurrentImgIndex((prev) =>
      prev === totalImages - 1 ? 0 : prev + 1
    )
  }

  const badgeLabel =
    type === "venda"
      ? "Venda"
      : type === "aluguel"
        ? "Locação"
        : "Comercial"

  return (
    <article
      className="
        group
        bg-white
        rounded-3xl
        p-2
        border
        border-[#0d3b2e]/10
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        hover:border-[#0d3b2e]/30
        transition-all
        duration-300
        flex
        flex-col
        justify-between
        h-full
      "
    >
      <div>
        {/* IMAGEM */}
        <Link
          href={`/imoveis/${property.id}`}
          className="
            block
            aspect-[4/3]
            overflow-hidden
            relative
            cursor-pointer
            bg-muted
            rounded-2xl
          "
        >
          <img
            src={images[currentImgIndex] || "/placeholder.jpg"}
            alt={`${property.title} - foto ${currentImgIndex + 1}`}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          {/* BADGE */}
          <div
            className={`
              absolute
              top-3
              left-3
              text-white
              px-3
              py-1
              text-xs
              rounded-full
              font-medium
              shadow-sm
              ${
                isLocacao
                  ? "bg-[#b85d19]"
                  : "bg-[#0d3b2e]"
              }
            `}
          >
            {badgeLabel}
          </div>

          {/* VÍDEO */}
          {hasVideos && (
            <div
              className="
                absolute
                top-3
                right-3
                bg-black/60
                backdrop-blur-sm
                text-white
                px-2.5
                py-1
                text-[11px]
                rounded-full
                font-medium
                flex
                items-center
                gap-1
              "
            >
              <Play className="h-3 w-3 fill-white" />

              {property.videos &&
              property.videos.length > 1
                ? `${property.videos.length} Vídeos`
                : "Vídeo"}
            </div>
          )}

          {/* CONTADOR */}
          {totalImages > 1 && (
            <div
              className="
                absolute
                bottom-3
                left-3
                bg-black/60
                backdrop-blur-sm
                text-white
                text-[11px]
                font-medium
                px-2
                py-0.5
                rounded-md
              "
            >
              {currentImgIndex + 1} / {totalImages}
            </div>
          )}

          {/* SETA ESQUERDA */}
          {totalImages > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Imagem anterior"
              className="
                absolute
                left-2
                top-1/2
                -translate-y-1/2
                w-8
                h-8
                rounded-full
                bg-white/80
                hover:bg-white
                text-foreground
                flex
                items-center
                justify-center
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-200
                shadow-md
                hover:scale-105
              "
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

          {/* SETA DIREITA */}
          {totalImages > 1 && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Próxima imagem"
              className="
                absolute
                right-2
                top-1/2
                -translate-y-1/2
                w-8
                h-8
                rounded-full
                bg-white/80
                hover:bg-white
                text-foreground
                flex
                items-center
                justify-center
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-200
                shadow-md
                hover:scale-105
              "
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
        </Link>

        {/* INFORMAÇÕES */}
        <div className="px-3 sm:px-4 pt-4 pb-2">
          {/* LOCALIZAÇÃO */}
          <span
            className="
              text-[11px]
              uppercase
              tracking-wider
              text-muted-foreground
              flex
              items-center
              gap-1
              font-medium
            "
          >
            <MapPin className="h-3.5 w-3.5 text-[#0d3b2e]" />
            {property.location}
          </span>

          {/* TÍTULO */}
          <Link
            href={`/imoveis/${property.id}`}
            className="block"
          >
            <h3
              className="
                text-base
                font-semibold
                text-foreground
                group-hover:text-[#0d3b2e]
                transition-colors
                mt-2
                line-clamp-1
                font-serif
              "
            >
              {property.title}
            </h3>
          </Link>

          {/* CARACTERÍSTICAS */}
          <div className="flex flex-wrap items-center gap-1.5 mt-4">
            {!isComercial && property.bedrooms !== undefined && (
              <span
                className="
                  flex
                  items-center
                  gap-1
                  rounded-full
                  bg-[#0d3b2e]/5
                  px-2.5
                  py-1
                  text-[11px]
                  text-muted-foreground
                "
              >
                <Bed className="h-3.5 w-3.5 text-[#0d3b2e]" />
                {property.bedrooms}
              </span>
            )}

            {!isComercial && property.bathrooms !== undefined && (
              <span
                className="
                  flex
                  items-center
                  gap-1
                  rounded-full
                  bg-[#0d3b2e]/5
                  px-2.5
                  py-1
                  text-[11px]
                  text-muted-foreground
                "
              >
                <Bath className="h-3.5 w-3.5 text-[#0d3b2e]" />
                {property.bathrooms}
              </span>
            )}

            {!isComercial && property.parking !== undefined && (
              <span
                className="
                  flex
                  items-center
                  gap-1
                  rounded-full
                  bg-[#0d3b2e]/5
                  px-2.5
                  py-1
                  text-[11px]
                  text-muted-foreground
                "
              >
                <Car className="h-3.5 w-3.5 text-[#0d3b2e]" />
                {property.parking}
              </span>
            )}

            {isComercial && (
              <span
                className="
                  flex
                  items-center
                  gap-1
                  rounded-full
                  bg-[#0d3b2e]/5
                  px-2.5
                  py-1
                  text-[11px]
                  text-muted-foreground
                "
              >
                <Building2 className="h-3.5 w-3.5 text-[#0d3b2e]" />
                Ponto Comercial
              </span>
            )}

            {property.area && (
              <span
                className="
                  flex
                  items-center
                  gap-1
                  rounded-full
                  bg-[#0d3b2e]/5
                  px-2.5
                  py-1
                  text-[11px]
                  text-muted-foreground
                "
              >
                <Maximize className="h-3.5 w-3.5 text-[#0d3b2e]" />
                {property.area}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* PREÇO + CTA */}
      <div className="px-1 sm:px-2 pb-2 pt-2">
        <div
          className="
            rounded-2xl
            bg-[#b85d19]
            px-3
            sm:px-4
            py-2.5
            sm:py-3
            flex
            flex-nowrap
            items-center
            justify-between
            gap-2
            sm:gap-3
          "
        >
          <span
            className="
              text-sm
              sm:text-base
              font-bold
              text-white
              font-serif
              line-clamp-1
              min-w-0
            "
          >
            {property.price || "Sob Consulta"}
          </span>

          <Link
            href={`/imoveis/${property.id}`}
            className="
              rounded-full
              bg-[#0d3b2e]
              hover:bg-white
              hover:text-[#0d3b2e]
              text-white
              px-3
              sm:px-4
              h-8
              sm:h-9
              inline-flex
              items-center
              justify-center
              text-xs
              sm:text-sm
              font-medium
              transition-colors
              shrink-0
            "
          >
            Ver Detalhes
          </Link>
        </div>
      </div>
    </article>
  )
}