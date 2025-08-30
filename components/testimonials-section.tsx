"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Maria Silva",
    company: "E-commerce Fashion",
    content: "Nosso atendimento melhorou 400% após implementar o ChatBot Pro. As vendas aumentaram significativamente!",
    rating: 5,
    avatar: "/professional-woman-diverse.png",
  },
  {
    name: "João Santos",
    company: "Restaurante Gourmet",
    content: "Automatizamos pedidos e reservas. Agora conseguimos atender 10x mais clientes sem aumentar a equipe.",
    rating: 5,
    avatar: "/professional-man-chef.png",
  },
  {
    name: "Ana Costa",
    company: "Clínica Médica",
    content:
      "O agendamento automático revolucionou nossa operação. Reduzimos faltas em 80% e melhoramos a experiência do paciente.",
    rating: 5,
    avatar: "/professional-woman-doctor.png",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            O que nossos <span className="text-accent">Clientes</span> dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Histórias reais de transformação e sucesso com nossos chatbots
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="glass-effect border-border">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-accent fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-center mb-8 text-pretty">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full"
                />
                <div className="text-center">
                  <h4 className="font-semibold text-foreground">{testimonials[currentIndex].name}</h4>
                  <p className="text-muted-foreground">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-effect bg-transparent"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-effect bg-transparent"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
