import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/images/redht-logo.png"
              alt="REDHT Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>
          <span className="text-xl font-semibold">REDHT</span>
        </div>
        
        <nav className="flex flex-wrap justify-center mx-auto gap-x-8 gap-y-3">
          <Link href="/" className="text-sm font-medium hover:underline">
            Início
          </Link>
          <Link href="/historia" className="text-sm font-medium hover:underline">
            História
          </Link>
          <Link href="/estrutura" className="text-sm font-medium hover:underline">
            Estrutura
          </Link>
          <Link href="/projetos" className="text-sm font-medium hover:underline">
            Projetos
          </Link>
          <Link href="/noticias" className="text-sm font-medium hover:underline">
            Notícias
          </Link>
        </nav>
        
        <div className="flex flex-col space-y-3">
          <Link href="https://www.instagram.com/redht.rededeestudos" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-primary transition-colors">
            <Instagram size={24} strokeWidth={1.5} />
            <span className="text-sm">redht.rededeestudos</span>
          </Link>
          <Link href="https://www.youtube.com/@redhtrede" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-primary transition-colors">
            <Youtube size={24} strokeWidth={1.5} />
            <span className="text-sm">REDHTRede</span>
          </Link>
          <Link href="/contato" className="flex items-center space-x-3 hover:text-primary transition-colors">
            <Mail size={24} strokeWidth={1.5} />
            <span className="text-sm">Contato</span>
          </Link>
        </div>
      </div>
      <div className="container py-4 border-t">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} REDHT - Rede de Estudos de Direitos Humanos na Transnacionalidade. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}