"use client"

import { Button } from "@/components/ui/button"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Como funciona a integração com WhatsApp?",
    answer:
      "Nossa plataforma se conecta diretamente com a API oficial do WhatsApp Business. O processo é totalmente automatizado - você só precisa autorizar a conexão e seu chatbot estará funcionando em minutos.",
  },
  {
    question: "Preciso de conhecimento técnico para criar um chatbot?",
    answer:
      "Não! Nossa interface é 100% visual e intuitiva. Você cria fluxos de conversa arrastando e soltando elementos, como se fosse um jogo. Temos também templates prontos para diversos tipos de negócio.",
  },
  {
    question: "O chatbot pode transferir para atendimento humano?",
    answer:
      "Sim! Você pode configurar regras para transferir automaticamente conversas complexas para sua equipe. O histórico da conversa é mantido, garantindo continuidade no atendimento.",
  },
  {
    question: "Quantas conversas posso ter por mês?",
    answer:
      "Depende do seu plano: Básico (1.000), Profissional (5.000) e Empresarial (20.000). Se precisar de mais, podemos criar um plano personalizado para seu volume.",
  },
  {
    question: "Como funciona o período de teste gratuito?",
    answer:
      "Você tem 14 dias para testar todas as funcionalidades sem pagar nada. Não pedimos cartão de crédito e você pode cancelar a qualquer momento. Após o teste, escolha o plano que melhor se adapta ao seu negócio.",
  },
  {
    question: "Posso integrar com meu CRM ou sistema atual?",
    answer:
      "Sim! Oferecemos integrações nativas com os principais CRMs do mercado (HubSpot, Salesforce, RD Station, etc.) e também temos API completa para integrações customizadas.",
  },
  {
    question: "Os dados dos meus clientes ficam seguros?",
    answer:
      "Absolutamente! Utilizamos criptografia de ponta a ponta, servidores seguros no Brasil e somos 100% compliance com a LGPD. Seus dados e de seus clientes estão totalmente protegidos.",
  },
  {
    question: "Posso personalizar as respostas do chatbot?",
    answer:
      "Claro! Você pode personalizar completamente o tom de voz, respostas, fluxos de conversa e até treinar a IA com informações específicas do seu negócio para respostas mais precisas.",
  },
]

export function ChatbotFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Perguntas <span className="text-accent">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Tire suas dúvidas sobre nossos chatbots para WhatsApp
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="glass-effect border-border">
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-card/50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-effect rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">Ainda tem dúvidas?</h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe de especialistas está pronta para ajudar você a escolher a melhor solução para seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90">Falar com Especialista</Button>
              <Button
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                Agendar Demonstração
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
