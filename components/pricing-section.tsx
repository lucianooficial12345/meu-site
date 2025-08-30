"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star, Globe, MessageCircle, Zap } from "lucide-react"

const sitePlans = [
  {
    name: "Site Básico",
    price: "R$ 497",
    period: "/único",
    description: "Perfeito para começar na internet",
    features: [
      "Até 5 páginas",
      "Design responsivo",
      "Domínio grátis por 1 ano",
      "SSL certificado",
      "Suporte por 30 dias",
    ],
    popular: false,
    icon: Globe,
  },
  {
    name: "Site Profissional",
    price: "R$ 997",
    period: "/único",
    description: "Ideal para empresas estabelecidas",
    features: [
      "Até 15 páginas",
      "Design personalizado",
      "SEO otimizado",
      "Formulários de contato",
      "Integração redes sociais",
      "Suporte por 90 dias",
    ],
    popular: true,
    icon: Globe,
  },
  {
    name: "E-commerce",
    price: "R$ 1.997",
    period: "/único",
    description: "Loja virtual completa",
    features: [
      "Páginas ilimitadas",
      "Sistema de pagamento",
      "Gestão de produtos",
      "Relatórios de vendas",
      "Suporte por 6 meses",
      "Treinamento incluído",
    ],
    popular: false,
    icon: Globe,
  },
]

const chatbotPlans = [
  {
    name: "Bot Starter",
    price: "R$ 297",
    period: "/único + R$ 97/mês hospedagem",
    description: "Automação básica para pequenos negócios",
    features: [
      "Desenvolvimento único: R$ 297",
      "Hospedagem: R$ 97/mês",
      "Até 1.000 conversas/mês",
      "Chatbot básico com IA",
      "Integração WhatsApp",
      "Suporte por email",
      "Relatórios básicos",
    ],
    popular: false,
    icon: MessageCircle,
  },
  {
    name: "Bot Professional",
    price: "R$ 597",
    period: "/único + R$ 197/mês hospedagem",
    description: "IA avançada para empresas em crescimento",
    features: [
      "Desenvolvimento único: R$ 597",
      "Hospedagem: R$ 197/mês",
      "Até 10.000 conversas/mês",
      "IA avançada + NLP",
      "Múltiplas integrações",
      "Suporte prioritário",
      "Analytics completo",
      "Fluxos personalizados",
    ],
    popular: true,
    icon: MessageCircle,
  },
  {
    name: "Bot Enterprise",
    price: "R$ 1.297",
    period: "/único + R$ 297/mês hospedagem",
    description: "Solução completa para grandes volumes",
    features: [
      "Desenvolvimento único: R$ 1.297",
      "Hospedagem: R$ 297/mês",
      "Conversas ilimitadas",
      "IA personalizada",
      "Integrações customizadas",
      "Suporte dedicado 24/7",
      "Relatórios avançados",
      "White-label disponível",
    ],
    popular: false,
    icon: MessageCircle,
  },
]

const comboPlan = [
  {
    name: "Combo Starter",
    price: "R$ 1.297",
    period: "/único + R$ 97/mês hospedagem bot",
    description: "Site + Chatbot para começar forte",
    features: [
      "Site Profissional completo",
      "Bot Starter incluído",
      "Integração site + bot",
      "Desconto de 30%",
      "Suporte prioritário",
      "Setup completo",
    ],
    popular: false,
    icon: Zap,
    highlight: "MAIS VENDIDO",
  },
  {
    name: "Combo Premium",
    price: "R$ 2.297",
    period: "/único + R$ 197/mês hospedagem bot",
    description: "Solução completa para dominar o mercado",
    features: [
      "E-commerce completo",
      "Bot Professional incluído",
      "Integração avançada",
      "Desconto de 40%",
      "Suporte VIP 24/7",
      "Consultoria estratégica",
    ],
    popular: true,
    icon: Zap,
    highlight: "RECOMENDADO",
  },
]

export function PricingSection() {
  const whatsappNumber = "5598981502071"

  const handleWhatsAppClick = (planName: string) => {
    const message = `Olá! Tenho interesse no plano ${planName}. Gostaria de mais informações.`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section id="precos" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Planos que se <span className="text-primary">Adaptam</span> ao seu Negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Escolha entre sites, chatbots ou combos completos para transformar sua presença digital
          </p>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-primary">🔥 Combos Especiais</h3>
            <p className="text-lg text-muted-foreground">Economia máxima com soluções completas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {comboPlan.map((plan, index) => (
              <Card
                key={index}
                className={`glass-effect border-border relative ${
                  plan.popular ? "border-primary/50 scale-105" : ""
                } hover:border-primary/50 transition-all duration-300`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>{plan.highlight}</span>
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4">
                    <plan.icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleWhatsAppClick(plan.name)}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                    size="lg"
                  >
                    Contratar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">🌐 Criação de Sites</h3>
            <p className="text-lg text-muted-foreground">Sites profissionais que convertem visitantes em clientes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sitePlans.map((plan, index) => (
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
                      <span>Mais Popular</span>
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4">
                    <plan.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleWhatsAppClick(plan.name)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    size="lg"
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">🤖 Chatbots Inteligentes</h3>
            <p className="text-lg text-muted-foreground">Automatize seu atendimento com IA avançada</p>
            <p className="text-sm text-muted-foreground mt-2 bg-muted/20 rounded-lg p-3 max-w-2xl mx-auto">
              💡 <strong>Como funciona:</strong> Desenvolvimento é pagamento único + hospedagem mensal para manter o bot
              funcionando 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {chatbotPlans.map((plan, index) => (
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
                      <span>Mais Popular</span>
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <div className="flex justify-center mb-4">
                    <plan.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleWhatsAppClick(plan.name)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    size="lg"
                  >
                    Começar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
