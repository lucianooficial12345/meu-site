"use client"

import { useEffect } from "react"

export default function SecurityProtection() {
  useEffect(() => {
    const disableDevTools = () => {
      // Desabilitar F12 e atalhos de desenvolvedor
      document.addEventListener("keydown", (e) => {
        if (
          e.key === "F12" ||
          (e.ctrlKey && e.shiftKey && e.key === "I") ||
          (e.ctrlKey && e.shiftKey && e.key === "C") ||
          (e.ctrlKey && e.shiftKey && e.key === "J") ||
          (e.ctrlKey && e.key === "U")
        ) {
          e.preventDefault()
          e.stopPropagation()
          return false
        }
      })

      // Desabilitar clique direito
      document.addEventListener("contextmenu", (e) => {
        e.preventDefault()
        return false
      })
    }

    const protectContent = () => {
      // Desabilitar seleção de texto em elementos sensíveis
      document.addEventListener("selectstart", (e) => {
        const target = e.target as HTMLElement
        if (target.closest(".protected-content")) {
          e.preventDefault()
          return false
        }
      })

      // Desabilitar arrastar imagens
      document.addEventListener("dragstart", (e) => {
        if ((e.target as HTMLElement).tagName === "IMG") {
          e.preventDefault()
          return false
        }
      })
    }

    const protectPrintScreen = () => {
      document.addEventListener("keyup", (e) => {
        if (e.key === "PrintScreen") {
          try {
            navigator.clipboard.writeText("© Nexa Dev - Conteúdo protegido")
          } catch (err) {
            // Ignorar erro se clipboard não estiver disponível
          }
        }
      })
    }

    const addWatermark = () => {
      const watermark = document.createElement("div")
      watermark.innerHTML = "© Nexa Dev - Todos os direitos reservados"
      watermark.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.01;
        font-size: 12px;
        color: transparent;
        user-select: none;
      `
      document.body.appendChild(watermark)
    }

    const detectCopyAttempts = () => {
      let copyAttempts = 0

      document.addEventListener("copy", (e) => {
        copyAttempts++
        if (copyAttempts > 5) {
          try {
            e.clipboardData?.setData("text/plain", "© Nexa Dev - Conteúdo protegido")
          } catch (err) {
            // Ignorar erro
          }
        }
      })
    }

    // Inicializar proteções mais suaves
    try {
      disableDevTools()
      protectContent()
      protectPrintScreen()
      addWatermark()
      detectCopyAttempts()
    } catch (error) {
      console.error("Erro ao inicializar proteções:", error)
    }

    return () => {
      // Cleanup listeners se necessário
    }
  }, [])

  return null
}
