"use client"

import { useEffect, useState } from "react"

export default function AntiCopyProtection() {
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    let warningTimeout: NodeJS.Timeout

    const showCopyWarning = () => {
      setShowWarning(true)
      warningTimeout = setTimeout(() => {
        setShowWarning(false)
      }, 3000)
    }

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault()
      e.clipboardData?.setData("text/plain", "© Nexa Dev - Conteúdo protegido")
      showCopyWarning()
      return false
    }

    const handleCut = (e: ClipboardEvent) => {
      e.preventDefault()
      showCopyWarning()
      return false
    }

    const handlePaste = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement
      if (!target.matches('input, textarea, [contenteditable="true"]')) {
        e.preventDefault()
        return false
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+A (Selecionar tudo)
      if (e.ctrlKey && e.key === "a") {
        e.preventDefault()
        return false
      }

      // Ctrl+S (Salvar página)
      if (e.ctrlKey && e.key === "s") {
        e.preventDefault()
        showCopyWarning()
        return false
      }

      // Ctrl+P (Imprimir)
      if (e.ctrlKey && e.key === "p") {
        e.preventDefault()
        showCopyWarning()
        return false
      }
    }

    let devToolsOpen = false
    const detectResize = () => {
      const threshold = 160
      if (window.outerHeight - window.innerHeight > threshold || window.outerWidth - window.innerWidth > threshold) {
        if (!devToolsOpen) {
          devToolsOpen = true
          setShowWarning(true)
        }
      } else {
        if (devToolsOpen) {
          devToolsOpen = false
          setShowWarning(false)
        }
      }
    }

    const detectDebugging = () => {
      const start = performance.now()
      debugger
      const end = performance.now()

      if (end - start > 100) {
        setShowWarning(true)
      }
    }

    document.addEventListener("copy", handleCopy)
    document.addEventListener("cut", handleCut)
    document.addEventListener("paste", handlePaste)
    document.addEventListener("keydown", handleKeyDown)
    window.addEventListener("resize", detectResize)

    const debugInterval = setInterval(detectDebugging, 1000)

    return () => {
      document.removeEventListener("copy", handleCopy)
      document.removeEventListener("cut", handleCut)
      document.removeEventListener("paste", handlePaste)
      document.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("resize", detectResize)
      clearInterval(debugInterval)
      if (warningTimeout) clearTimeout(warningTimeout)
    }
  }, [])

  if (showWarning) {
    return (
      <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[99999] flex items-center justify-center">
        <div className="bg-red-600 text-white p-8 rounded-lg text-center max-w-md mx-4">
          <div className="text-4xl mb-4">🔒</div>
          <h2 className="text-2xl font-bold mb-2">Conteúdo Protegido</h2>
          <p className="mb-4">Este conteúdo é protegido por direitos autorais da Nexa Dev.</p>
          <p className="text-sm opacity-80">Tentativas de cópia são monitoradas e registradas.</p>
        </div>
      </div>
    )
  }

  return null
}
