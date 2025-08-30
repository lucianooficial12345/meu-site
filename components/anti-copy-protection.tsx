"use client"

import { useEffect } from "react"

export default function AntiCopyProtection() {
  useEffect(() => {
    const handleCopy = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement
      if (!target.matches('input, textarea, [contenteditable="true"]')) {
        e.preventDefault()
        return false
      }
    }

    document.addEventListener("copy", handleCopy)

    return () => {
      document.removeEventListener("copy", handleCopy)
    }
  }, [])

  return null
}
