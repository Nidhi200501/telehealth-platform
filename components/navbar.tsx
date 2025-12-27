"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")
    setTheme(initialTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  if (!mounted) return null

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
            MediHub
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-sm font-medium hover:text-primary transition">
              Home
            </Link>
            <Link href="/login" className="text-sm font-medium hover:text-primary transition">
              Login
            </Link>
            <Link href="/register" className="text-sm font-medium hover:text-primary transition">
              Register
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3 animate-in fade-in">
            <Link href="/" className="text-sm font-medium hover:text-primary transition block py-2">
              Home
            </Link>
            <Link href="/login" className="text-sm font-medium hover:text-primary transition block py-2">
              Login
            </Link>
            <Link href="/register" className="text-sm font-medium hover:text-primary transition block py-2">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
