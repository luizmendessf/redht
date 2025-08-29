import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"

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
