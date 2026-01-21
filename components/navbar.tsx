"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon, Heart } from "lucide-react"

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsOpen(false)
    }
  }

  if (!mounted) return null

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Heart size={18} className="text-white" />
            </div>
            <span className="bg-gradient-primary bg-clip-text text-transparent">TeleHealth</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Core Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("ai-features")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              AI Features
            </button>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Login
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200"
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
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition block py-2 text-left"
            >
              Core Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition block py-2 text-left"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("ai-features")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition block py-2 text-left"
            >
              AI Features
            </button>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition block py-2"
            >
              About
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition block py-2"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}