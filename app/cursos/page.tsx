import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CursosPage() {
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
                <BreadcrumbPage>Cursos e Formação Continuada</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <main className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-900">Cursos e Formação Continuada</h1>
          <p className="text-center text-lg text-gray-600 mb-12">
            Em breve, você encontrará aqui informações sobre cursos e formação continuada ofertados pela REDHT.
          </p>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Pós-Graduação UniCuritiba",
                href: "https://pos.unicuritiba.com.br/?gad_source=1&gad_campaignid=21375644844&gbraid=0AAAAABuHCNp-gCS5ZbLs9ivOHC1dQtwn2&gclid=Cj0KCQjw3aLHBhDTARIsAIRij5_fXiQ-HTeBDhBB0Za9iVq84mIB-ou1xONnF3Zsf_ibMavvkE_8m9MaAk8YEALw_wcB",
              },
              {
                title: "Pós-Doutoramento Internacional em Novas Tecnologias e Direito (MICHR)",
                href: "https://comunicamack.wordpress.com/2020/07/07/ate-30-07-2020-edital-de-chamamento-para-o-programa-em-pos-doutoramento-internacional-em-novas-tecnologias-e-direito-promovido-pelo-mediterranea-international-centre-for-h/",
              },
            ].map((item) => (
              <Card key={item.href} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base md:text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button asChild variant="default">
                      <Link href={item.href} target="_blank" rel="noopener noreferrer">Acessar</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>
        </main>
      </div>
    </div>
  )
}