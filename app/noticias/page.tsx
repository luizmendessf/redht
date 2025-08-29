import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Newspaper } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Estrutura de dados para as notícias, facilitando futuras adições
const news = [
  {
    title: "Projeto da UFS oferece serviço gratuito a trabalhadores adoecidos",
    description:
      "A Universidade Federal de Sergipe (UFS), por meio do Departamento de Direito (DDI), integra o projeto Caminhos do Trabalho, uma ação nacional que une esforços em torno de uma questão urgente e muitas vezes invisibilizada: o adoecimento do trabalhador.",
    images: [
      "/images/noticia-projeto.jpg",
      "/images/noticia-projeto2.jpg",
      "/images/noticia-projeto3.jpg",
    ],
    newsUrl:
      "https://www.ufs.br/conteudo/77448-projeto-da-ufs-oferece-servico-gratuito-a-trabalhadores-adoecidos",
  },
  {
    title: "Procurador alerta sobre o adoecimento relacionado ao trabalho",
    description:
      "O cenário de acidentes e doenças do trabalho no Brasil foi tema de palestra do procurador do Trabalho Raymundo Ribeiro a estudantes da Universidade Federal de Sergipe (UFS). No mês em que se reforça a necessidade de prevenção dos acidentes e de ambientes de trabalho mais seguros.",
    images: [
      "/images/noticia-mpt.jpg",
      "/images/noticia.mpt1.jpg",
      "/images/redht-logo.png",
    ],
    newsUrl:
      "https://www.prt20.mpt.mp.br/procuradorias/prt-aracaju/1514-procurador-alerta-sobre-o-adoecimento-relacionado-ao-trabalho",
  },
  {
    title: "Termo de Cooperação entre TJSE e UFS",
    description:
      "Parceria para a realização de audiências de conciliação e desenvolvimento de projetos acadêmicos e de extensão, fortalecendo a cultura de paz e o acesso à justiça.",
    images: [
      "/images/acordo1.jpg",
      "/images/acordo2.jpg",
      "/images/acordo3.jpg",
    ],
    newsUrl:
      "https://agencia.tjse.jus.br/noticias/item/15929-tjse-e-ufs-assinam-termos-de-cooperacao-para-audiencias-de-conciliacao-e-outros-projetos",
  },
  // Futuras notícias podem ser adicionadas aqui
];

export default function NoticiasPage() {
  return (
    <div className="bg-slate-50/50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <header className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Início</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Notícias</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <main className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Notícias</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Acompanhe as últimas notícias, eventos e parcerias da REDHT no campo dos Direitos Humanos.
            </p>
          </div>

          <div className="space-y-12">
            {news.map((item, index) => (
              <Card key={index} className="bg-white shadow-lg overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-blue-800">
                    <Newspaper className="h-6 w-6" />
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {item.images.map((imgSrc, imgIndex) => (
                      <div key={imgIndex} className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md">
                        <Image
                          src={imgSrc}
                          alt={`Imagem ${imgIndex + 1} da notícia ${item.title}`}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <a href={item.newsUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Notícia Completa
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}