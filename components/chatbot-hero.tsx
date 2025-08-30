import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Sparkles } from "lucide-react"

export function ChatbotHero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Bot className="h-16 w-16 text-primary mr-4" />
            <Sparkles className="h-8 w-8 text-accent" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            ChatBots para
            <span className="text-primary"> WhatsApp </span>
            que Vendem Sozinhos
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
            Crie chatbots inteligentes que qualificam leads, respondem dúvidas e fecham vendas automaticamente no
            WhatsApp. Sem programação, sem complicação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              Criar Meu ChatBot Grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-4 bg-transparent"
            >
              Ver Como Funciona
            </Button>
          </div>

          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-primary">🚀 Resultados Comprovados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-1">300%</div>
                <div className="text-sm text-muted-foreground">Aumento em Conversões</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Atendimento Automático</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">85%</div>
                <div className="text-sm text-muted-foreground">Redução de Custos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
