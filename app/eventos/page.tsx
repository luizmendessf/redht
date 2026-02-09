"use client"

import Link from "next/link"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import * as React from "react"

type Evento = {
  title: string
  href?: string
  image?: string
  date?: string
}

const eventos: Evento[] = [
  {
    title: "Seminário Internacional Justiça Federal - Parte 04",
    href: "https://www.youtube.com/watch?v=gY9nsDfgEto",
  },
  {
    title: "Seminário Internacional Justiça Federal - Parte 03",
    href: "https://www.youtube.com/watch?v=AJY-_54pJ9g",
  },
  {
    title: "Seminário Internacional Justiça Federal - Parte 05",
    href: "https://www.youtube.com/watch?v=dnOwClwMCaY",
  },
  {
    title: "Seminário Internacional Justiça Federal - Parte 01",
    href: "https://www.youtube.com/watch?v=qZq7cLtlhug",
  },
  {
    title: "Seminário Internacional Justiça Federal - Parte 02",
    href: "https://www.youtube.com/watch?v=epVmu7ix5Q8",
  },
  // Eventos com imagens fornecidas (substituir caminhos após upload em public/images/eventos)
  {
    title: "Congresso Internacional de Estudos Jurídicos",
    image: "/images/CongressoInternacionalEstudosJuridicos.png",
  },
  {
    title: "CONBRADEC",
    image: "/images/CONBRADEC.png",
  },
  {
    title: "AI Law and Ethics",
    image: "/images/AILawAndEthics.png",
  },
  {
    title: "AI Obligations and Consumer Protection",
    image: "/images/AIObligationsConsumerProtection.png",
  },
  {
    title: "Congresso Direito e Futuro",
    image: "/images/CongressoDireitoeFuturo.png",
  },
  {
    title: "Mediação EUA",
    image: "/images/MediacaoEUA.png",
  },
  {
    title: "Seminário Justiça Federal",
    image: "/images/SeminarioJusticaFed.png",
  },
  {
    title: "AI New Millenial",
    image: "/images/AINewMillenial.png",
  },
  {
    title: "VIII Congresso de Estudos Jurídicos",
    image: "/images/VIIICongressoEstudosJuridicos.png",
  },
]

export default function EventosPage() {
  const [playingId, setPlayingId] = React.useState<string | null>(null)

  const getYouTubeId = (url?: string): string | null => {
    if (!url) return null
    try {
      const u = new URL(url)
      if (u.hostname.includes("youtube.com")) {
        const v = u.searchParams.get("v")
        return v
      }
      if (u.hostname.includes("youtu.be")) {
        return u.pathname.replace("/", "")
      }
      return null
    } catch {
      return null
    }
  }

  return (
    <div className="bg-slate-50/50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Início</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Eventos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <main className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-900">Eventos</h1>
          <p className="text-center text-lg text-gray-600 mb-12">
            Acompanhe os eventos da REDHT. Veja abaixo registros e links para vídeos.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {React.useMemo(() => {
              const toMillis = (d?: string) => {
                if (!d) return 0
                const t = new Date(d).getTime()
                return Number.isNaN(t) ? 0 : t
              }
              const sorted = eventos
                .map((ev, idx) => ({ ev, idx }))
                .sort((a, b) => {
                  const da = toMillis(a.ev.date)
                  const db = toMillis(b.ev.date)
                  if (db !== da) return db - da
                  return a.idx - b.idx
                })
                .map(({ ev }) => ev)
              return sorted
            }, []).map((ev) => {
              const videoId = getYouTubeId(ev.href)
              return (
              <Card key={ev.title} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base md:text-lg">{ev.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {(() => {
                    const isVideo = Boolean(videoId)
                    const containerClasses = isVideo
                      ? `relative mb-4 rounded-md overflow-hidden bg-black aspect-video ${isVideo ? "cursor-pointer" : ""}`
                      : "relative mb-4 rounded-md overflow-hidden bg-white aspect-[3/4]"
                    return (
                      <div
                        className={containerClasses}
                        onClick={isVideo ? () => setPlayingId(videoId!) : undefined}
                        role={isVideo ? "button" : undefined}
                        aria-label={isVideo ? `Reproduzir ${ev.title}` : undefined}
                      >
                    {videoId && playingId === videoId ? (
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title={ev.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        {ev.image ? (
                          <img
                            src={ev.image}
                            alt={ev.title}
                            className={isVideo ? "w-full h-full object-cover" : "w-full h-full object-contain"}
                            loading="lazy"
                          />
                        ) : videoId ? (
                          <img
                            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                            alt={ev.title}
                            className="w-full h-full object-cover opacity-90"
                            loading="lazy"
                          />
                        ) : (
                          <img
                            src="/placeholder.jpg"
                            alt={ev.title}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        )}
                        {/* Capa clicável: reprodução inline ao clicar quando houver vídeo */}
                      </>
                    )}
                      </div>
                    )
                  })()}
                  {videoId && (
                    <div className="flex gap-2">
                      <Button asChild variant="default">
                        <Link href={ev.href!} target="_blank" rel="noopener noreferrer">Assistir no YouTube</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
              )
            })}
          </section>
        </main>
      </div>
    </div>
  )
}