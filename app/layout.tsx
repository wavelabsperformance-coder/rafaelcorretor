import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CookieBanner } from "@/components/cookie-banner"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata: Metadata = {
  // Atualize aqui quando tiver o seu novo domínio (ex: https://www.rafaelcavalcante.com.br)
  metadataBase: new URL("https://www.rafaelcavalcante.com.br"),
  title: {
    default: "Rafael Cavalcante - Corretor | Recife, Caruaru e Litoral",
    template: "%s | Rafael Cavalcante - Corretor",
  },
  description:
    "Seu corretor de imóveis de confiança em Caruaru, Recife e Litoral. Encontre casas, apartamentos, pontos comerciais e empreendimentos com atendimento exclusivo.",
  keywords: [
    "corretor caruaru",
    "corretor recife",
    "imóveis no litoral pernambucano",
    "apartamentos boa viagem",
    "casas em caruaru",
    "imóveis pernambuco",
    "rafael cavalcante corretor",
  ],
  authors: [{ name: "Rafael Cavalcante" }],
  creator: "Rafael Cavalcante",
  publisher: "Rafael Cavalcante",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.rafaelcavalcante.com.br",
    siteName: "Rafael Cavalcante - Corretor",
    title: "Rafael Cavalcante - Corretor | Recife, Caruaru e Litoral",
    description:
      "Seu corretor de imóveis de confiança em Caruaru, Recife e Litoral. Encontre o imóvel ideal com atendimento exclusivo.",
    images: [
      {
        url: "https://www.rafaelcavalcante.com.br/capa-rafael.png",
        width: 1200,
        height: 630,
        alt: "Rafael Cavalcante - Corretor - Recife | Caruaru | Litoral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Cavalcante - Corretor | Recife, Caruaru e Litoral",
    description: "Seu corretor de imóveis de confiança em Caruaru, Recife e Litoral.",
    images: ["https://www.rafaelcavalcante.com.br/capa-rafael.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  themeColor: "#0d3b2e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
        <ScrollToTop />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}