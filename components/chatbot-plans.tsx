import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Zap } from "lucide-react"

const plans = [
  {
    name: "Básico",
    price: "R$ 97",
    period: "/mês",
    description: "Ideal para pequenos negócios",
    features: [
      "1 chatbot ativo",
      "Até 1.000 conversas/mês",
      "Fluxos básicos de conversa",
      "Integração WhatsApp Business",
      "Suporte por email",
      "Relatórios básicos",
    ],
    popular: false,
    color: "secondary",
  },
  {
    name: "Profissional",
    price: "R$ 197",
    period: "/mês",
    description: "Para empresas em crescimento",
    features: [
      "3 chatbots ativos",
      "Até 5.000 conversas/mês",
      "IA avançada + NLP",
      "Fluxos personalizados ilimitados",
      "Integração com CRM",
      "Suporte prioritário",
      "Analytics completo",
      "Transferência para humanos",
    ],
    popular: true,
    color: "primary",
  },
  {
    name: "Empresarial",
    price: "R$ 397",
    period: "/mês",
    description: "Máximo desempenho e recursos",
    features: [
      "Chatbots ilimitados",
      "Até 20.000 conversas/mês",
      "IA personalizada para seu negócio",
      "Integrações customizadas",
      "White-label disponível",
      "Suporte dedicado 24/7",
      "Relatórios avançados",
      "API completa",
      "Treinamento personalizado",
    ],
    popular: false,
    color: "accent",
  },
]

export function ChatbotPlans() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Escolha o Plano <span className="text-primary">Perfeito</span> para seu Negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Todos os planos incluem teste grátis de 14 dias. Sem compromisso, sem cartão de crédito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`glass-effect border-border relative ${
                plan.popular ? "border-primary/50 scale-105" : ""
              } hover:border-primary/50 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Mais Vendido</span>
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold flex items-center justify-center space-x-2">
                  <span>{plan.name}</span>
                  {plan.name === "Profissional" && <Zap className="h-5 w-5 text-primary" />}
                </CardTitle>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <div className="text-sm text-muted-foreground">+ 14 dias grátis para testar</div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className={`h-5 w-5 text-${plan.color} mt-0.5 flex-shrink-0`} />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90"
                      : plan.color === "secondary"
                        ? "bg-secondary hover:bg-secondary/90"
                        : "bg-accent hover:bg-accent/90 text-accent-foreground"
                  }`}
                  size="lg"
                >
                  Começar Teste Grátis
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-2">Cancele a qualquer momento</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-effect rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-2 text-primary">💡 Não sabe qual escolher?</h3>
            <p className="text-muted-foreground mb-4">
              Fale com nossos especialistas e descubra qual plano se adapta melhor ao seu negócio.
            </p>
            <Button
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
