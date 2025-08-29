import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Users, Landmark, FileText, BookOpen, Globe, Library, ChevronsDown } from "lucide-react"
import Link from "next/link"

const foundingMembers = [
  "Zelia Luiza Pierdoná (Brasil)",
  "Ricardo Mauricio Soares (Brasil)",
  "Maddalena Castellani (Itália)",
  "Cesare Triberti (Itália)",
  "Andrea Gazieri (Cônsul da Itália no Brasil)",
]

export default function HistoriaUnificadaPage() {
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
                <BreadcrumbPage>Nossa História</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <main className="max-w-5xl mx-auto">
  <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-900">Nossa História</h1>
  <p className="text-center text-lg text-gray-600 mb-12">
    De projetos pioneiros à consolidação de uma rede internacional.
  </p>

  <Card className="mb-16 bg-white shadow-md">
    <CardHeader>
      <CardTitle className="flex items-center gap-2"><ChevronsDown /> Navegue pela página</CardTitle>
    </CardHeader>
    <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
      <Button asChild variant="outline">
        <a href="#fundacao">Fundação da REDHT</a>
      </Button>
      <Button asChild variant="outline">
        <a href="#capes">Parceria com a CAPES</a>
      </Button>
      <Button asChild variant="outline">
        <a href="#documentos">Documentos Oficiais</a>
      </Button>
    </CardContent>
  </Card>

  <section id="fundacao" className="scroll-mt-24 space-y-10">
    <h2 className="text-3xl font-bold text-blue-900 border-l-4 border-blue-500 pl-4">A Trajetória de Fundação</h2>
    <div className="prose prose-lg max-w-none prose-p:leading-relaxed prose-h3:text-blue-800 prose-h3:font-semibold">
      <h3><Landmark className="inline mr-2" size={22} /> Antecedentes e Colaborações Iniciais</h3>
      <p>
        Entre 2009 e 2011, projetos interdisciplinares coordenados pela UFS e parceiros como o TJ/SE fomentaram práticas de mediação de conflitos, culminando no lançamento do livro <i>Mediação de Conflitos</i>.
      </p>
      <p>
        De 2012 a 2017, eventos internacionais e publicações fortaleceram a cooperação com instituições como a Asociación Iberoamericana de Derecho del Trabajo. Destaque para obras coletivas lançadas em homenagem a juristas renomados.
      </p>
      <p>
        O UniCuritiba, sob liderança da profa. Viviane Séllos, consolidou congressos de referência em Direito Empresarial e Cidadania.
      </p>

      <h3><BookOpen className="inline mr-2" size={22} /> Publicações e Intercâmbios Decisivos</h3>
      <p>
        Em 2018, docentes brasileiros participaram da obra <i>La protección multinível de los derechos fundamentales</i>, publicada na Itália.
      </p>
      <p>
        Em 2019, houve intercâmbio entre UFS e a UNIRC (Itália), promovido pelo MIRCH, com aulas e cursos ministrados por docentes das duas instituições.
      </p>
    </div>

    <Card className="overflow-hidden shadow-xl border-blue-300">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <CardTitle className="text-2xl">Oficialização da REDHT</CardTitle>
        <CardDescription className="text-blue-100">05 de Novembro de 2019 - Universidade Federal de Sergipe</CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <p className="text-lg text-gray-700">
          A REDHT foi criada para promover a mobilidade docente e os direitos humanos na transnacionalidade, unindo acadêmicos de países das Américas e Europa. Foi oficializada em 2019 na UFS.
        </p>
        <div>
          <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2"><Users size={20}/>Membros Fundadores:</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {foundingMembers.map((member) => (
              <li key={member}>{member}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  </section>

  <Separator className="my-16" />

  <section id="capes" className="scroll-mt-24 space-y-10">
    <h2 className="text-3xl font-bold text-blue-900 border-l-4 border-blue-500 pl-4">Atuação e Parceria com a CAPES</h2>
    <div className="prose prose-lg max-w-none prose-p:leading-relaxed">
      <p>
        Desde 2019, a REDHT tem ampliado sua atuação internacional por meio de parcerias em ensino, pesquisa e extensão, promovendo a cidadania global.
      </p>
      <p>
        Em 2022, a CAPES reconheceu oficialmente essa contribuição, destacando a cooperação acadêmica entre as instituições.
      </p>
    </div>
    <div className="not-prose mt-4">
      <Button asChild variant="outline">
        <a href="https://www.gov.br/capes/pt-br/assuntos/noticias/capes-e-redht-tratam-de-cooperacao-conjunta" target="_blank" rel="noopener noreferrer">
          <ExternalLink className="mr-2 h-4 w-4" />
          Ver notícia na página da CAPES
        </a>
      </Button>
    </div>
  </section>

          <Separator className="my-16" />

          <section id="documentos" className="scroll-mt-24 space-y-10">
            <h2 className="text-3xl font-bold text-blue-900 border-l-4 border-blue-500 pl-4">Documentos Oficiais</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><FileText /> Ato de Instituição</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Acesse o documento que formalizou a criação da REDHT em 05 de novembro de 2019.</p>
                  <Button asChild>
                    <a href="https://www.redht.com.br/_files/ugd/54b618_40790e9fac3d4f7a8b8351cbddcd07f1.pdf" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Visualizar PDF
                    </a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Library /> Estatuto Social</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Consulte o estatuto social que rege as normas e a organização da nossa rede.</p>
                  <Button asChild>
                    <a href="https://www.redht.com.br/_files/ugd/54b618_00663fba13c04754838a94931d6af670.pdf" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Visualizar PDF
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
          
          <div className="mt-20 border-t pt-6">
             <p className="text-right italic text-sm text-gray-500">
              Texto redigido pela Presidente da REDHT Luciana Aboim
            </p>
          </div>

        </main>
      </div>
    </div>
  )
}