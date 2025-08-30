"use client"

import { useEffect } from "react"

export default function SecurityProtection() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Desabilitar apenas F12 e Ctrl+U
      if (e.key === "F12" || (e.ctrlKey && e.key === "u")) {
        e.preventDefault()
        return false
      }
    }

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("contextmenu", handleContextMenu)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("contextmenu", handleContextMenu)
    }
  }, [])

  return null
}
