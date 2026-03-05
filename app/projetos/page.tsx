import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Users } from "lucide-react"

export default function ProjetosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Projetos REDHT</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça os principais projetos e programas da Rede de Estudos de Direitos Humanos na Transnacionalidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Projeto Fortalecer - Extensão e Pesquisa */}
          <Card className="hover:shadow-lg transition-shadow duration-300 md:col-span-2">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg shrink-0">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-blue-900">Projeto de Extensão e Pesquisa FORTALECER</CardTitle>
                  <CardDescription className="mt-1 text-base">
                    Acesso à Justiça, Cidadania e Reintegração Social no Sistema Prisional de Sergipe
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Curso */}
                <div className="flex flex-col h-full">
                  <a 
                    href="https://forms.gle/GHV67vjZz85Dx4gN8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block mb-3"
                  >
                    <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden border shadow-sm group-hover:shadow-md transition-all">
                      <img 
                        src="/images/curso.jpg" 
                        alt="Curso: Mediação de Conflitos" 
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  </a>
                  <div className="text-center flex flex-col flex-grow">
                    <h4 className="font-semibold text-blue-900 mb-1">Curso</h4>
                    <p className="text-sm text-gray-600 mb-4">Mediação de Conflitos: da Teoria à Prática</p>
                    <div className="mt-auto">
                      <Button 
                        asChild 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <a 
                          href="https://forms.gle/GHV67vjZz85Dx4gN8" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Inscrição
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Seminário */}
                <div className="flex flex-col h-full">
                  <a 
                    href="https://forms.gle/sWVUPL6T8iRYXqhS7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block mb-3"
                  >
                    <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden border shadow-sm group-hover:shadow-md transition-all">
                      <img 
                        src="/images/seminario.jpg" 
                        alt="Seminário: Acesso à Justiça" 
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  </a>
                  <div className="text-center flex flex-col flex-grow">
                    <h4 className="font-semibold text-blue-900 mb-1">Seminário</h4>
                    <p className="text-sm text-gray-600 mb-4">Acesso à Justiça e Direitos das Pessoas Privadas de Liberdade</p>
                    <div className="mt-auto">
                      <Button 
                        asChild 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <a 
                          href="https://forms.gle/sWVUPL6T8iRYXqhS7" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Inscrição
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Palestra */}
                <div className="flex flex-col h-full">
                  <a 
                    href="https://forms.gle/mSLDHGgxdsUj9Yxo7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block mb-3"
                  >
                    <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden border shadow-sm group-hover:shadow-md transition-all">
                      <img 
                        src="/images/palestra.jpg" 
                        alt="Palestra: Teoria dos Jogos" 
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                  </a>
                  <div className="text-center flex flex-col flex-grow">
                    <h4 className="font-semibold text-blue-900 mb-1">Palestra</h4>
                    <p className="text-sm text-gray-600 mb-4">Teoria dos jogos: quando o direito calcula não é só uma questão matemática</p>
                    <div className="mt-auto">
                      <Button 
                        asChild 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <a 
                          href="https://forms.gle/mSLDHGgxdsUj9Yxo7" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Inscrição
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projeto Fortalecer */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-blue-900">Projeto Fortalecer</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Edital para o projeto de pesquisa e extensão fortalecer.
              </p>
              <div className="flex flex-col gap-3">
                <Button 
                  asChild 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <a 
                    href="https://drive.google.com/file/d/1i59ey8-De0PQqCwpCTf5cARPakJjtdlF/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Acessar Edital
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <a 
                    href="https://drive.google.com/file/d/1sEAO9SvDLBnK7t6kqYl_2xSYdcUONnvw/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Users className="h-4 w-4" />
                    Equipe
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Resultado Edital */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-blue-900">Resultado Edital 01 de 06 de Fevereiro de 2026</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Confira o resultado do edital de 06 de fevereiro de 2026.
              </p>
              <Button 
                asChild 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <a 
                  href="https://drive.google.com/file/d/1I5l3H0sCiUCzSh5hrsDyaxdZ9FPUf3Im/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Acessar Resultado
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Programa REDHT */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-blue-900">Programma REDHT</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Programação da III Conferência Internacional XIV Encontro da REDHT.
              </p>
              <Button 
                asChild 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                <a 
                  href="/images/Programma REDHT.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Baixar PDF
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Elenco Ammessi */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-xl text-blue-900">Elenco Ammessi 2025 - 2026</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Lista completa dos participantes aprovados para os programas de pós-doutorado do MICHR (2025-2026).
              </p>
              <Button 
                asChild 
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <a 
                  href="/images/elenco ammessi 2025 - 2026.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Baixar PDF
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Informações adicionais */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Sobre os Projetos</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Projeto de Extensão e Pesquisa FORTALECER</h3>
              <p>
                Acesso à Justiça, Cidadania e Reintegração Social no Sistema Prisional de Sergipe.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Projeto Fortalecer (Edital)</h3>
              <p>
                Edital para o projeto de pesquisa e extensão fortalecer.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Resultado Edital</h3>
              <p>
                Confira o resultado do edital de 06 de fevereiro de 2026.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Programma REDHT</h3>
              <p>
                O programa principal da REDHT estabelece as diretrizes fundamentais para a 
                promoção dos direitos humanos em escala transnacional, integrando pesquisadores 
                e instituições de diferentes países.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Elenco Ammessi</h3>
              <p>
                A lista de participantes aprovados representa a diversidade e excelência da rede, 
                reunindo especialistas comprometidos com a tutela ético-jurídica da dignidade humana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
