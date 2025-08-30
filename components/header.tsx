"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Code } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const whatsappNumber = "5598981502071"
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços da Nexa Dev"

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
  }

  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Nexa Dev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Início
            </Link>
            <Link href="/sites" className="text-foreground hover:text-primary transition-colors">
              Sites
            </Link>
            <Link href="/chatbots" className="text-foreground hover:text-primary transition-colors">
              Chatbots
            </Link>
            <Link href="#servicos" className="text-foreground hover:text-primary transition-colors">
              Serviços
            </Link>
            <Link href="#precos" className="text-foreground hover:text-primary transition-colors">
              Preços
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button onClick={handleWhatsAppClick} className="bg-green-600 hover:bg-green-700 text-white">
              Falar no WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Início
              </Link>
              <Link href="/sites" className="text-foreground hover:text-primary transition-colors">
                Sites
              </Link>
              <Link href="/chatbots" className="text-foreground hover:text-primary transition-colors">
                Chatbots
              </Link>
              <Link href="#servicos" className="text-foreground hover:text-primary transition-colors">
                Serviços
              </Link>
              <Link href="#precos" className="text-foreground hover:text-primary transition-colors">
                Preços
              </Link>
              <div className="pt-4">
                <Button onClick={handleWhatsAppClick} className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
