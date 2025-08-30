import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Smartphone, Search, ShoppingCart, BarChart3, Palette, Code, CheckCircle } from "lucide-react"

const websiteTypes = [
  {
    icon: Globe,
    title: "Site Institucional",
    description: "Apresente sua empresa de forma profissional",
    price: "A partir de R$ 1.500",
    features: ["Design Responsivo", "SEO Básico", "Formulário de Contato", "Google Analytics"],
    color: "text-primary",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Loja virtual completa para vender online",
    price: "A partir de R$ 3.500",
    features: ["Catálogo de Produtos", "Carrinho de Compras", "Pagamento Online", "Gestão de Estoque"],
    color: "text-secondary",
  },
  {
    icon: Smartphone,
    title: "Landing Page",
    description: "Página focada em conversão de leads",
    price: "A partir de R$ 800",
    features: ["Alta Conversão", "Formulários Otimizados", "Integração CRM", "A/B Testing"],
    color: "text-accent",
  },
]

const technologies = [
  { name: "Next.js", color: "bg-primary/20 text-primary" },
  { name: "React", color: "bg-secondary/20 text-secondary" },
  { name: "WordPress", color: "bg-accent/20 text-accent" },
  { name: "Shopify", color: "bg-primary/20 text-primary" },
  { name: "WooCommerce", color: "bg-secondary/20 text-secondary" },
  { name: "Tailwind CSS", color: "bg-accent/20 text-accent" },
]

export default function SitesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Sites que <span className="text-primary">Convertem</span> Visitantes em Clientes
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Criamos sites profissionais, modernos e otimizados para resultados. Do design à implementação, cuidamos de
              tudo para seu negócio brilhar online.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              Solicitar Orçamento Gratuito
            </Button>
          </div>
        </div>
      </section>

      {/* Website Types */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Tipos de Sites</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Escolha a solução perfeita para seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {websiteTypes.map((type, index) => (
              <Card
                key={index}
                className="glass-effect border-border hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <type.icon className={`h-16 w-16 ${type.color} mx-auto mb-4`} />
                  <CardTitle className="text-2xl">{type.title}</CardTitle>
                  <CardDescription className="text-base">{type.description}</CardDescription>
                  <div className="text-2xl font-bold text-primary mt-4">{type.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-transparent" variant="outline">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Tecnologias Modernas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Utilizamos as melhores tecnologias do mercado para garantir performance e segurança
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className={`${tech.color} text-lg px-6 py-3`}>
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nosso Processo</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Do briefing ao lançamento, acompanhamos cada etapa do seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Palette, title: "Design", description: "Criamos layouts únicos e atraentes" },
              { icon: Code, title: "Desenvolvimento", description: "Codificamos com as melhores práticas" },
              { icon: Search, title: "SEO", description: "Otimizamos para os buscadores" },
              { icon: BarChart3, title: "Analytics", description: "Configuramos métricas e relatórios" },
            ].map((step, index) => (
              <Card key={index} className="glass-effect text-center">
                <CardHeader>
                  <step.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
