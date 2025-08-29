import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { AnimatedNavbar } from "@/components/animated-navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "REDHT - Rede de Estudos de Direitos Humanos na Transnacionalidade",
  description:
    "Integração de docentes em escala global para a promoção da tutela ético-jurídica da dignidade da pessoa humana no sistema multinível.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">
        <AnimatedNavbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
