"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import SunMoonToggle from "./SunMoonToggle"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <SunMoonToggle setTheme={setTheme} theme={theme} />
  )
}
