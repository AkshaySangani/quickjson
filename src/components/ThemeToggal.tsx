"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import SunMoonToggle from "./SunMoonToggle"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
   useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };
  if (!mounted) return null

  return (
    <SunMoonToggle setTheme={toggleTheme} theme={theme} />
  )
}
