import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { Button } from "@/components/ui/button"
  import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
  import { Separator } from "@/components/ui/separator"
  import { ExternalLink, Users, Briefcase, Building } from "lucide-react"
  import Image from "next/image"
  import Link from "next/link"
  
  // Dados da Presidência com país e bandeira
  const presidents = [
    {
      name: "Luciana de Aboim Machado",
      title: "Presidente - REDHT Brasil",
      country: "Brasil",
      flagUrl: "/images/brasil.png",
      lattesUrl: "http://lattes.cnpq.br/2113227493246846",
      imageUrl: "/images/luciana-aboim.png",
    },
    {
      name: "Angelo Viglianisi Ferraro",
      title: "Presidente - REDHT Itália",
      country: "Itália",
      flagUrl: "/images/italia.png",
      lattesUrl: "http://lattes.cnpq.br/2692281945887775",
      imageUrl: "/images/angelo.png",
    },
    {
      name: "Viviane Coelho de Séllos-Knoerr",
      title: "Vice-Presidente - REDHT Brasil",
      country: "Brasil",
      flagUrl: "/images/brasil.png",
      lattesUrl: "http://lattes.cnpq.br/4609374374280294",
      imageUrl: "/images/viviane-coelho.png",
    },
  ];
  
  // Dados da Direção com país e bandeira
  const directors = [
      {
          name: "Manoel Jorge e Silva Neto",
          title: "Diretor-Geral - REDHT Brasil",
          country: "Brasil",
          flagUrl: "/images/brasil.png",
          lattesUrl: "http://lattes.cnpq.br/8448823919067092",
          imageUrl: "/images/manoel-jorge.png",
      },
      {
          name: "Zélia Luiza Pierdoná",
          title: "Vice-Diretora - REDHT Brasil",
          country: "Brasil",
          flagUrl: "/images/brasil.png",
          lattesUrl: "http://lattes.cnpq.br/8677991232786928",
          imageUrl: "/images/zelia-pierdona.png",
      },
      {
          name: "Francisco Pérez Amorós",
          title: "Diretor - REDHT Espanha",
          country: "Espanha",
          flagUrl: "/images/espanha.png",
          lattesUrl: null,
          imageUrl: "/images/francisco-perez.png",
      },
      {
          name: "Irene Portela",
          title: "Diretora - REDHT Portugal",
          country: "Portugal",
          flagUrl: "/images/portugal.png",
          lattesUrl: "http://lattes.cnpq.br/2692281945887775",
          imageUrl: "/images/irene-portela.png",
      },
  ];
  
  // Dados da Coordenação com país e bandeira
  const coordinators = [
      {
          name: "Pablo Rafael Banchio",
          title: "Coordenador - REDHT Argentina",
          country: "Argentina",
          flagUrl: "/images/argentina.png",
          lattesUrl: "http://lattes.cnpq.br/0216634412234464",
          imageUrl: "/images/pablo-banchio.png",
      },
  ];
  
  
  export default function EstruturaPage() {
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
                  <BreadcrumbPage>Estrutura</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
  
          <main className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Estrutura Organizacional</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Conheça o corpo de liderança da REDHT, uma equipe de acadêmicos dedicados que orientam nossa missão através da Presidência, Direção e Coordenação em diversos países.
              </p>
            </div>
  
            {/* Seção Presidência */}
            <section id="presidencia" className="mb-16">
              <div className="flex items-center mb-8">
                <Users className="text-blue-600 h-8 w-8" />
                <h2 className="text-3xl font-bold text-blue-900 ml-4">Presidência</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {presidents.map((person) => (
                  <Card key={person.name} className="flex flex-col text-center bg-white hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="flex-grow">
                      <div className="relative w-36 h-36 mx-auto mb-4">
                        <Image src={person.imageUrl} alt={`Foto de ${person.name}`} fill className="rounded-full object-cover border-4 border-white shadow-md" />
                      </div>
                      <CardTitle className="text-xl text-blue-900">{person.name}</CardTitle>
                      <CardDescription className="text-blue-700 font-medium">
                          <div className="flex items-center justify-center gap-2 mt-1">
                              <Image src={person.flagUrl} alt={`Bandeira de ${person.country}`} width={24} height={16} className="rounded-sm shadow-sm" />
                              <span>{person.title}</span>
                          </div>
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="justify-center pt-4">
                       {person.lattesUrl && (
                          <Button asChild variant="outline">
                              <a href={person.lattesUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="mr-2 h-4 w-4" /> Currículo Lattes
                              </a>
                          </Button>
                       )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
  
            <Separator className="my-16" />
  
            {/* Seção Direção */}
            <section id="direcao" className="mb-16">
               <div className="flex items-center mb-8">
                <Briefcase className="text-blue-600 h-8 w-8" />
                <h2 className="text-3xl font-bold text-blue-900 ml-4">Direção</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {directors.map((person) => (
                  <Card key={person.name} className="flex flex-col text-center bg-white hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="flex-grow">
                      <div className="relative w-32 h-32 mx-auto mb-4">
                        <Image src={person.imageUrl} alt={`Foto de ${person.name}`} fill className="rounded-full object-cover border-4 border-white shadow-md" />
                      </div>
                      <CardTitle className="text-xl text-blue-900">{person.name}</CardTitle>
                       <CardDescription className="text-blue-700 font-medium">
                          <div className="flex items-center justify-center gap-2 mt-1">
                              <Image src={person.flagUrl} alt={`Bandeira de ${person.country}`} width={24} height={16} className="rounded-sm shadow-sm" />
                              <span>{person.title}</span>
                          </div>
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="justify-center pt-4">
                      {person.lattesUrl && (
                          <Button asChild variant="outline">
                              <a href={person.lattesUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="mr-2 h-4 w-4" /> Currículo Lattes
                              </a>
                          </Button>
                       )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
  
            <Separator className="my-16" />
  
            {/* Seção Coordenação */}
            <section id="coordenacao" className="mb-16">
               <div className="flex items-center mb-8">
                <Building className="text-blue-600 h-8 w-8" />
                <h2 className="text-3xl font-bold text-blue-900 ml-4">Coordenação</h2>
              </div>
              <div className="flex justify-center">
                {coordinators.map((person) => (
                  <Card key={person.name} className="flex flex-col text-center bg-white hover:shadow-xl transition-shadow duration-300 w-full max-w-sm">
                    <CardHeader className="flex-grow">
                      <div className="relative w-32 h-32 mx-auto mb-4">
                        <Image src={person.imageUrl} alt={`Foto de ${person.name}`} fill className="rounded-full object-cover border-4 border-white shadow-md" />
                      </div>
                      <CardTitle className="text-xl text-blue-900">{person.name}</CardTitle>
                       <CardDescription className="text-blue-700 font-medium">
                          <div className="flex items-center justify-center gap-2 mt-1">
                              <Image src={person.flagUrl} alt={`Bandeira de ${person.country}`} width={24} height={16} className="rounded-sm shadow-sm" />
                              <span>{person.title}</span>
                          </div>
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="justify-center pt-4">
                       {person.lattesUrl && (
                          <Button asChild variant="outline">
                              <a href={person.lattesUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="mr-2 h-4 w-4" /> Currículo Lattes
                              </a>
                          </Button>
                       )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
  
          </main>
        </div>
      </div>
    )
  }