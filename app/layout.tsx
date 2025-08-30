import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import SecurityProtection from "@/components/security-protection"
import AntiCopyProtection from "@/components/anti-copy-protection"

export const metadata: Metadata = {
  title: "Nexa Dev - Sites Profissionais e ChatBots Inteligentes",
  description:
    "Criamos sites profissionais e chatbots inteligentes para WhatsApp. Soluções completas para sua presença digital.",
  generator: "Nexa Dev",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} gradient-bg min-h-screen`}>
        <Suspense fallback={null}>{children}</Suspense>
        <SecurityProtection />
        <AntiCopyProtection />
        <Analytics />
      </body>
    </html>
  )
}
