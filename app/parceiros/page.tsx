import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const parceiros = [
  {
    nome: "Universidade Federal de Santa Maria",
    pais: "Brasil",
    tipo: "Universidade",
    descricao: "Principal instituição brasileira da rede, sede do programa de pós-graduação em direitos humanos.",
  },
  {
    nome: "Università degli Studi di Perugia",
    pais: "Itália",
    tipo: "Universidade",
    descricao: "Parceiro estratégico europeu, centro de excelência em direito internacional.",
  },
  {
    nome: "Universidad de Barcelona",
    pais: "Espanha",
    tipo: "Universidade",
    descricao: "Instituição de referência em direitos sociais e constitucionalismo.",
  },
  {
    nome: "Universidade de Coimbra",
    pais: "Portugal",
    tipo: "Universidade",
    descricao: "Uma das mais antigas universidades da Europa, forte tradição em direito.",
  },
  {
    nome: "Universidad de Buenos Aires",
    pais: "Argentina",
    tipo: "Universidade",
    descricao: "Principal universidade argentina, centro de estudos em direitos humanos na América Latina.",
  },
  {
    nome: "Corte Interamericana de Direitos Humanos",
    pais: "Costa Rica",
    tipo: "Organização Internacional",
    descricao: "Órgão judicial autônomo do sistema interamericano de proteção dos direitos humanos.",
  },
  {
    nome: "Conselho da Europa",
    pais: "França",
    tipo: "Organização Internacional",
    descricao: "Organização internacional de defesa dos direitos humanos, democracia e Estado de direito.",
  },
  {
    nome: "ONU Direitos Humanos",
    pais: "Suíça",
    tipo: "Organização Internacional",
    descricao: "Alto Comissariado das Nações Unidas para os Direitos Humanos.",
  },
]

export default function ParceirosPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Início</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Parceiros</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="mx-auto max-w-6xl">
          <h1 className="mb-8 text-4xl font-bold text-center">Nossos Parceiros</h1>

          <p className="mb-12 text-lg leading-7 text-muted-foreground text-center max-w-3xl mx-auto">
            A REDHT mantém parcerias estratégicas com instituições de ensino superior e organizações internacionais
            comprometidas com a promoção dos direitos humanos em escala global.
          </p>

          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold">Universidades Parceiras</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {parceiros
                .filter((p) => p.tipo === "Universidade")
                .map((parceiro, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 h-20 w-20 rounded-lg bg-muted flex items-center justify-center">
                        <span className="text-xs text-muted-foreground text-center px-2">[Logo: {parceiro.nome}]</span>
                      </div>
                      <CardTitle className="text-lg">{parceiro.nome}</CardTitle>
                      <CardDescription className="flex items-center justify-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {parceiro.pais}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground mb-4">{parceiro.descricao}</p>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Visitar Site
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold">Organizações Internacionais</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {parceiros
                .filter((p) => p.tipo === "Organização Internacional")
                .map((parceiro, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 h-20 w-20 rounded-lg bg-muted flex items-center justify-center">
                        <span className="text-xs text-muted-foreground text-center px-2">[Logo: {parceiro.nome}]</span>
                      </div>
                      <CardTitle className="text-lg">{parceiro.nome}</CardTitle>
                      <CardDescription className="flex items-center justify-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {parceiro.pais}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground mb-4">{parceiro.descricao}</p>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        Visitar Site
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Torne-se um Parceiro</CardTitle>
                <CardDescription>
                  Interessado em estabelecer uma parceria com a REDHT? Entre em contato conosco.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button>Propor Parceria</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
