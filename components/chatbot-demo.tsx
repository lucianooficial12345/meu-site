"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

export function ChatbotDemo() {
  const [isPlaying, setIsPlaying] = useState(false)

  const messages = [
    { type: "bot", text: "Olá! 👋 Bem-vindo à nossa loja! Como posso ajudar você hoje?", delay: 0 },
    { type: "user", text: "Oi! Estou procurando um smartphone novo.", delay: 2000 },
    { type: "bot", text: "Perfeito! 📱 Qual é o seu orçamento aproximado?", delay: 3000 },
    { type: "user", text: "Entre R$ 1.000 e R$ 2.000", delay: 5000 },
    {
      type: "bot",
      text: "Ótima escolha! Tenho 3 opções incríveis para você:\n\n📱 iPhone 12 - R$ 1.899\n📱 Samsung Galaxy S21 - R$ 1.699\n📱 Xiaomi Mi 11 - R$ 1.499\n\nQual te interessa mais?",
      delay: 6000,
    },
    { type: "user", text: "O Samsung parece interessante!", delay: 8000 },
    {
      type: "bot",
      text: '🎉 Excelente escolha! O Galaxy S21 tem:\n\n✅ Câmera profissional 64MP\n✅ Tela 6.2" Dynamic AMOLED\n✅ 128GB de armazenamento\n✅ Garantia de 1 ano\n\nPosso finalizar seu pedido agora mesmo! Aceita?',
      delay: 9000,
    },
  ]

  const [displayedMessages, setDisplayedMessages] = useState<typeof messages>([])

  const startDemo = () => {
    setIsPlaying(true)
    setDisplayedMessages([])

    messages.forEach((message, index) => {
      setTimeout(() => {
        setDisplayedMessages((prev) => [...prev, message])
        if (index === messages.length - 1) {
          setIsPlaying(false)
        }
      }, message.delay)
    })
  }

  const stopDemo = () => {
    setIsPlaying(false)
    setDisplayedMessages([])
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Veja seu <span className="text-secondary">ChatBot</span> em Ação
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Demonstração real de como nosso chatbot converte visitantes em clientes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <Card className="glass-effect border-border">
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <span>💬 Conversa WhatsApp</span>
                  </CardTitle>
                  <Button
                    onClick={isPlaying ? stopDemo : startDemo}
                    className={`${isPlaying ? "bg-destructive hover:bg-destructive/90" : "bg-primary hover:bg-primary/90"}`}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="mr-2 h-4 w-4" />
                        Parar Demo
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Iniciar Demo
                      </>
                    )}
                  </Button>
                </CardHeader>
                <CardContent className="h-96 overflow-y-auto">
                  <div className="space-y-4">
                    {displayedMessages.map((message, index) => (
                      <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.type === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-card text-card-foreground border border-border"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-line">{message.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="glass-effect border-border">
                <CardHeader>
                  <CardTitle className="text-primary">🎯 O que aconteceu aqui?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Saudação Personalizada</h4>
                      <p className="text-sm text-muted-foreground">Bot inicia conversa de forma amigável</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-xs font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Qualificação de Lead</h4>
                      <p className="text-sm text-muted-foreground">Identifica necessidade e orçamento</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-xs font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Apresentação de Produtos</h4>
                      <p className="text-sm text-muted-foreground">Mostra opções relevantes com preços</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Fechamento da Venda</h4>
                      <p className="text-sm text-muted-foreground">Destaca benefícios e solicita confirmação</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-border">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-accent mb-2">Resultado:</h3>
                    <p className="text-lg text-muted-foreground">
                      <span className="text-primary font-semibold">Lead qualificado</span> em menos de 2 minutos, pronto
                      para <span className="text-secondary font-semibold">finalizar a compra</span>!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
