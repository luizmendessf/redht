import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PublicacoesPage() {
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
                <BreadcrumbPage>Publicações</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <main className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-900">Publicações</h1>
          <p className="text-center text-lg text-gray-600 mb-12">
            Confira as publicações dos membros da REDHT. Em breve, você encontrará aqui conteúdos separados por Brasil e Itália.
          </p>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Publicações - Brasil</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Em breve adicionaremos as publicações dos membros no Brasil.</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md">
              <CardHeader>
                <CardTitle>Publicações - Itália</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Em breve adicionaremos as publicações dos membros na Itália.</p>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-16" />
        </main>
      </div>
    </div>
  )
}