import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, MessageSquareText, BarChart3, Zap, Users, Shield, Clock, Smartphone, Target } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "IA Conversacional Avançada",
    description: "Processamento de linguagem natural que entende contexto e intenções do cliente.",
    color: "text-primary",
  },
  {
    icon: MessageSquareText,
    title: "Fluxos Personalizáveis",
    description: "Crie conversas sob medida para seu negócio com nosso editor visual intuitivo.",
    color: "text-secondary",
  },
  {
    icon: Target,
    title: "Qualificação Automática",
    description: "Identifica e qualifica leads automaticamente baseado em critérios personalizados.",
    color: "text-accent",
  },
  {
    icon: BarChart3,
    title: "Analytics em Tempo Real",
    description: "Monitore performance, conversões e ROI com dashboards detalhados.",
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "Integração Instantânea",
    description: "Conecte com WhatsApp Business API em poucos cliques, sem configuração técnica.",
    color: "text-secondary",
  },
  {
    icon: Users,
    title: "Atendimento Híbrido",
    description: "Transferência inteligente para humanos quando necessário, sem perder contexto.",
    color: "text-accent",
  },
  {
    icon: Clock,
    title: "Disponibilidade 24/7",
    description: "Seu negócio nunca para. Atenda clientes a qualquer hora, qualquer dia.",
    color: "text-primary",
  },
  {
    icon: Smartphone,
    title: "Multi-dispositivo",
    description: "Funciona perfeitamente em smartphones, tablets e desktops.",
    color: "text-secondary",
  },
  {
    icon: Shield,
    title: "Segurança Garantida",
    description: "Criptografia de ponta a ponta e compliance com LGPD e regulamentações internacionais.",
    color: "text-accent",
  },
]

export function ChatbotFeatures() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Recursos que fazem a <span className="text-primary">Diferença</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Tecnologia de ponta para criar chatbots que realmente convertem e engajam seus clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass-effect border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardHeader>
                <feature.icon
                  className={`h-12 w-12 ${feature.color} mb-4 group-hover:scale-110 transition-transform`}
                />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-secondary">🚀 Pronto para começar?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Crie seu primeiro chatbot em menos de 5 minutos, sem conhecimento técnico necessário.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-2">
                  1
                </div>
                <h4 className="font-semibold mb-1">Conecte WhatsApp</h4>
                <p className="text-sm text-muted-foreground">Integração automática em 1 clique</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-xl mb-2">
                  2
                </div>
                <h4 className="font-semibold mb-1">Configure Fluxos</h4>
                <p className="text-sm text-muted-foreground">Editor visual drag & drop</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl mb-2">
                  3
                </div>
                <h4 className="font-semibold mb-1">Publique e Venda</h4>
                <p className="text-sm text-muted-foreground">Seu bot já está vendendo!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
