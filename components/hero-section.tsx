import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Zap, Users } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Sites Profissionais e<span className="text-primary"> ChatBots </span>
            que Vendem Mais
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Criamos sites profissionais modernos e automatizamos seu atendimento no WhatsApp com IA avançada. Aumente
            suas vendas em até 300% com nossa solução completa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/chatbots">
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-4 bg-transparent"
              >
                Ver Portfólio
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="glass-effect rounded-xl p-6">
              <Bot className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">200+</h3>
              <p className="text-muted-foreground">Sites Criados</p>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <Zap className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-muted-foreground">Chatbots Ativos</p>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">98%</h3>
              <p className="text-muted-foreground">Clientes Satisfeitos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
