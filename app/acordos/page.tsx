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
  import { ExternalLink, Handshake } from "lucide-react"
  import Image from "next/image"
  import Link from "next/link"
  
  // Estrutura de dados para os acordos, facilitando futuras adições
  const agreements = [
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
    // Futuros acordos podem ser adicionados aqui
  ];
  
  export default function AcordosPage() {
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
                  <BreadcrumbPage>Acordos Institucionais</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
  
          <main className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Acordos Institucionais</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A REDHT formaliza parcerias estratégicas com instituições públicas e privadas para fortalecer a pesquisa, o ensino e a extensão em Direitos Humanos.
              </p>
            </div>
  
            <div className="space-y-12">
              {agreements.map((agreement, index) => (
                <Card key={index} className="bg-white shadow-lg overflow-hidden">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-blue-800">
                      <Handshake className="h-6 w-6" />
                      {agreement.title}
                    </CardTitle>
                    <CardDescription>{agreement.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {agreement.images.map((imgSrc, imgIndex) => (
                        <div key={imgIndex} className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md">
                          <Image
                            src={imgSrc}
                            alt={`Imagem ${imgIndex + 1} do acordo ${agreement.title}`}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <a href={agreement.newsUrl} target="_blank" rel="noopener noreferrer">
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