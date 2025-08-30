import { Header } from "@/components/header"
import { ChatbotHero } from "@/components/chatbot-hero"
import { ChatbotFeatures } from "@/components/chatbot-features"
import { ChatbotPlans } from "@/components/chatbot-plans"
import { ChatbotDemo } from "@/components/chatbot-demo"
import { ChatbotFAQ } from "@/components/chatbot-faq"
import { Footer } from "@/components/footer"

export default function ChatbotsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ChatbotHero />
      <ChatbotDemo />
      <ChatbotFeatures />
      <ChatbotPlans />
      <ChatbotFAQ />
      <Footer />
    </main>
  )
}
