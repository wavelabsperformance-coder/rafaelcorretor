import { Metadata } from "next"
import Link from "next/link"
import { blogPosts, siteConfig } from "@/lib/data"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos, dicas e novidades sobre o mercado imobiliário de alto padrão. Fique por dentro das tendências e oportunidades.",
}

// Banner editável - altere a URL da imagem aqui
const heroBannerImage = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80"

export default function BlogPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
  }

  return (
    <>
      {/* Hero Banner - Editável */}
      <section className="relative py-32 lg:py-40">
        <div className="absolute inset-0">
          {/* Imagem do banner - edite a variável heroBannerImage acima */}
          <img
            src={heroBannerImage}
            alt="Blog Acauã Imóveis"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/50 font-medium">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mt-4">
              Insights e Tendências
            </h1>
            <p className="text-lg text-white/70 mt-6 leading-relaxed max-w-xl">
              Artigos, dicas e novidades sobre o mercado imobiliário de alto padrão. Mantenha-se informado sobre as melhores oportunidades.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href={`/blog/${blogPosts[0].slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div>
              <span className="inline-block px-3 py-1.5 text-[10px] uppercase tracking-wider bg-accent/10 text-accent rounded-md font-medium mb-4">
                {blogPosts[0].category}
              </span>
              <h2 className="text-2xl md:text-3xl font-light text-foreground group-hover:text-accent transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-6 mt-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(blogPosts[0].date)}
                </span>
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {blogPosts[0].author}
                </span>
              </div>
              <div className="mt-6">
                <span className="inline-flex items-center text-sm font-medium text-accent group-hover:text-accent/80 transition-colors">
                  Ler artigo completo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
              Artigos
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-foreground mt-2">
              Todos os Artigos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300">
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-wider bg-accent/10 text-accent rounded-md font-medium mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        {post.author}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-foreground">
            Quer Receber Novidades?
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Entre em contato conosco para receber atualizações sobre novos empreendimentos, oportunidades exclusivas e conteúdos do mercado imobiliário.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="rounded-lg">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar em Contato
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
