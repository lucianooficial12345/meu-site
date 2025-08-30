import Link from "next/link"
import { MessageCircle, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="contato" className="py-16 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <MessageCircle className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Nexa Dev</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Criamos sites profissionais e chatbots inteligentes para WhatsApp. Transforme sua presença digital e
              automatize sua comunicação empresarial.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>WhatsApp: (98) 98150-2071</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sites" className="text-muted-foreground hover:text-primary transition-colors">
                  Sites Profissionais
                </Link>
              </li>
              <li>
                <Link href="/chatbots" className="text-muted-foreground hover:text-primary transition-colors">
                  Chatbots para WhatsApp
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Automação de Vendas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Suporte Automatizado
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">© 2024 Nexa Dev. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
