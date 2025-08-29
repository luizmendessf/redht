import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Mail, Calendar, ExternalLink, Globe, Users, BookOpen, Award } from "lucide-react"

// Dados para seções refatoradas
const stats = [
  { value: "50+", label: "Pesquisadores" },
  { value: "5+", label: "Países" },
  { value: "100+", label: "Publicações" },
  { value: "25+", label: "Projetos" },
]

const events = [
  {
    title: "Seminário Internacional",
    date: "15-17 de Março, 2024",
    description: "Direitos Humanos e Transnacionalidade: Desafios Contemporâneos",
  },
  {
    title: "Workshop",
    date: "22 de Abril, 2024",
    description: "Metodologias de Pesquisa em Direitos Humanos",
  },
  {
    title: "Congresso",
    date: "10-12 de Junho, 2024",
    description: "III Congresso Internacional REDHT",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Seção Hero */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/images/world-map.png" alt="Mapa Múndi" fill className="object-cover opacity-20" priority />
          {/* Gradiente mais escuro para dar destaque */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-950/90 to-black" />
        </div>
        <div className="relative z-10 text-center text-white px-6 animate-fade-in-up">
          <div className="mb-10 flex justify-center">
            <div className="relative">
              {/* Efeito de brilho suave atrás da logo */}
              <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl -z-10" />
              <Image
                src="/images/redht-logo.png"
                alt="REDHT Logo"
                width={180} // Logo maior para mais destaque
                height={180}
                className="relative rounded-full bg-white/10 p-3 backdrop-blur-sm border border-white/20"
              />
            </div>
          </div>
          <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent text-shadow-lg">
            REDHT
          </h1>
          <p className="mb-8 text-xl md:text-2xl leading-8 text-blue-100 max-w-4xl mx-auto text-balance">
            Rede de Estudos de Direitos Humanos na Transnacionalidade
          </p>
          <p className="mx-auto max-w-3xl text-lg leading-7 text-blue-200 mb-12 text-balance">
            Integração de docentes em escala global para a promoção da tutela ético-jurídica da dignidade da pessoa
            humana no sistema multinível.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Link href="/historia">
                <Globe className="mr-2 h-5 w-5" />
                Conheça Nossa Rede
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 bg-transparent">
              <Link href="/estrutura">
                <Users className="mr-2 h-5 w-5" />
                Nossos Membros
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-blue-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-12 text-4xl font-bold text-blue-900">Quem Somos</h2>
            <div className="grid gap-12 md:grid-cols-2 items-center text-left">
              <div className="space-y-6 animate-fade-in-up">
                <p className="text-lg leading-7 text-gray-700 text-balance">
                  A Rede de Estudos de Direitos Humanos na Transnacionalidade - REDHT tem por propósito a integração de
                  docentes em escala global para a promoção da tutela ético-jurídica da dignidade da pessoa humana no
                  sistema multinível.
                </p>
                <p className="text-lg leading-7 text-gray-700 text-balance">
                  Nossas atuações de ensino, pesquisa e extensão visam a expansão do saber para a consolidação da
                  cidadania cosmopolita em uma sociedade justa e fraterna.
                </p>
                <div className="flex gap-4">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/historia">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Nossa História
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                     <Link href="/publicacoes">
                      <Award className="mr-2 h-4 w-4" />
                      Publicações
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                 <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 p-8 flex items-center justify-center">
                  <div className="text-center text-blue-800">
                    <Globe className="h-24 w-24 mx-auto mb-4" />
                    <p className="text-sm font-medium">Conectando pesquisadores globalmente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Endereços */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-4xl font-bold text-center text-blue-900">Nossos Endereços</h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-blue-200 animate-fade-in-up">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5" />Brasil</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="border-b border-gray-200 pb-3">
                  <p className="text-gray-700 leading-relaxed">
                    Universidade Federal de Sergipe <br />Centro de Ciências Sociais e Humanas<br />Departamento de Direito<br />São Cristóvão - SE, Brasil
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    UniCuritiba<br />R. Chile, 1678 - Rebouças<br />Curitiba - PR, 80220-181, Brasil
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300 border-blue-200 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5" />Itália</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  Università degli Studi di Perugia<br />Dipartimento di Giurisprudenza<br />Perugia, Itália
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eventos em Destaque - COMENTADO TEMPORARIAMENTE */}
      {/* 
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-4xl font-bold text-center text-blue-900">Eventos em Destaque</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-blue-200 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900"><Calendar className="h-5 w-5 text-blue-600" />{event.title}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{event.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">Saiba Mais</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      */}
      
      {/* Formulário de Contato - COMENTADO TEMPORARIAMENTE */}
      {/* 
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="mb-4 text-4xl font-bold text-blue-900">Entre em Contato</h2>
              <p className="text-lg text-gray-600">Estamos sempre abertos ao diálogo e colaboração acadêmica.</p>
            </div>
            <Card className="shadow-xl border-blue-200 animate-fade-in-up">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2"><Label htmlFor="nome" className="text-blue-900">Nome</Label><Input id="nome" placeholder="Seu nome completo" className="border-blue-200 focus:border-blue-500" /></div>
                    <div className="space-y-2"><Label htmlFor="email" className="text-blue-900">Email</Label><Input id="email" type="email" placeholder="seu@email.com" className="border-blue-200 focus:border-blue-500" /></div>
                  </div>
                  <div className="space-y-2"><Label htmlFor="instituicao" className="text-blue-900">Instituição</Label><Input id="instituicao" placeholder="Sua instituição de ensino/pesquisa" className="border-blue-200 focus:border-blue-500" /></div>
                  <div className="space-y-2"><Label htmlFor="assunto" className="text-blue-900">Assunto</Label><Input id="assunto" placeholder="Assunto da mensagem" className="border-blue-200 focus:border-blue-500" /></div>
                  <div className="space-y-2"><Label htmlFor="mensagem" className="text-blue-900">Mensagem</Label><Textarea id="mensagem" placeholder="Escreva sua mensagem aqui..." rows={5} className="border-blue-200 focus:border-blue-500" /></div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3"><Mail className="mr-2 h-4 w-4" />Enviar Mensagem</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      */}
      
      {/* Seção de Chamada para o WhatsApp - COMENTADO TEMPORARIAMENTE */}
      {/* 
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
              <div className="flex items-center gap-6 mb-6 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-16 h-16 flex-shrink-0"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475l-6.162 1.688a.5.5 0 01-.661-.66zM7.331 16.236c-.446-.273-.827-.513-1.249-.687-1.1-.453-1.942-.234-2.148.461-.205.694-.848 1.635-.99 1.822-.142.186-.284.186-.426.186-.142 0-2.394-.473-4.566-2.545-1.725-1.636-2.887-3.665-3.03-3.94-.142-.273-.024-.435.118-.577.142-.142.284-.284.426-.426.142-.142.205-.228.347-.453.142-.226.08-.413-.042-.556-.121-.142-.687-1.635-.947-2.19-.26-.556-.52-.473-.726-.473-.205 0-.426 0-.647 0-.22 0-.58.096-.867.453-.287.357-1.1 1.053-1.1 2.566 0 1.513 1.121 2.981 1.263 3.168.142.186 2.394 3.664 5.797 5.076 3.403 1.412 3.403.946 4.028.883.626-.063 1.942-.796 2.222-1.556.28-.76.28-1.412.2-1.556-.081-.143-.223-.228-.468-.37z" />
                </svg>
                <div className="text-left">
                  <h2 className="text-2xl font-bold">Junte-se ao Debate</h2>
                  <p className="text-green-100 max-w-md">
                    Participe do nosso grupo de WhatsApp para receber notícias, atualizações sobre eventos e discutir temas relevantes sobre Direitos Humanos.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-auto mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/90 text-green-600 hover:bg-white w-full md:w-auto"
                >
                  <a href="https://www.ufs.br" target="_blank" rel="noopener noreferrer">
                    Entrar no Grupo
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
      */}
    </div>
  )
}