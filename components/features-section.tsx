import { CheckCircle } from "lucide-react"

const features = [
  "Integração nativa com WhatsApp Business API",
  "IA conversacional avançada com processamento de linguagem natural",
  "Fluxos de conversa personalizáveis e intuitivos",
  "Integração com CRM e sistemas de gestão",
  "Relatórios em tempo real e analytics detalhados",
  "Suporte técnico especializado 24/7",
  "Escalabilidade automática conforme demanda",
  "Compliance com LGPD e regulamentações internacionais",
]

export function FeaturesSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Tecnologia de <span className="text-secondary">Ponta</span> para Resultados Excepcionais
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Nossa plataforma combina inteligência artificial avançada com interface intuitiva para criar a melhor
              experiência de chatbot do mercado.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-effect rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
              <div className="relative z-10">
                <div className="bg-card rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Cliente</span>
                  </div>
                  <p className="text-foreground">Olá! Gostaria de saber sobre seus produtos.</p>
                </div>

                <div className="bg-primary/20 rounded-lg p-4 mb-4 ml-8">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">ChatBot</span>
                  </div>
                  <p className="text-foreground">
                    Olá! Ficamos felizes em ajudar. Temos várias opções disponíveis. Qual categoria te interessa mais?
                  </p>
                </div>

                <div className="bg-card rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Cliente</span>
                  </div>
                  <p className="text-foreground">Estou procurando soluções para e-commerce.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
