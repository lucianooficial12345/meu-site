import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="glass-effect rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
          <div className="relative z-10">
            <MessageCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Pronto para <span className="text-primary">Revolucionar</span> seu Atendimento?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Junte-se a centenas de empresas que já transformaram seus resultados com nossos chatbots inteligentes.
              Comece gratuitamente hoje mesmo!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                Teste Grátis por 14 Dias
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-4 bg-transparent"
              >
                Agendar Demonstração
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              ✓ Sem cartão de crédito ✓ Configuração em 5 minutos ✓ Suporte especializado
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
