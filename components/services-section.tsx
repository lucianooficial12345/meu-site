import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, ShoppingCart, BarChart3, Globe, Smartphone, Code } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Sites Profissionais",
    description: "Criamos sites modernos, responsivos e otimizados para conversão.",
    color: "text-primary",
  },
  {
    icon: MessageSquare,
    title: "ChatBots WhatsApp",
    description: "Automatize atendimento 24/7 com respostas inteligentes e personalizadas.",
    color: "text-secondary",
  },
  {
    icon: Smartphone,
    title: "Design Responsivo",
    description: "Sites que funcionam perfeitamente em todos os dispositivos.",
    color: "text-accent",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Completo",
    description: "Lojas virtuais com integração de pagamento e gestão de estoque.",
    color: "text-primary",
  },
  {
    icon: Code,
    title: "Desenvolvimento Custom",
    description: "Soluções personalizadas para necessidades específicas do seu negócio.",
    color: "text-secondary",
  },
  {
    icon: BarChart3,
    title: "SEO e Analytics",
    description: "Otimização para buscadores e relatórios detalhados de performance.",
    color: "text-accent",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Soluções <span className="text-primary">Completas</span> para seu Negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Oferecemos desde criação de sites profissionais até automação completa do seu atendimento no WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass-effect border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardHeader>
                <service.icon
                  className={`h-12 w-12 ${service.color} mb-4 group-hover:scale-110 transition-transform`}
                />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
