"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useContact } from "../contexts/ContactContext"

const Navigation: React.FC = () => {
  const { openContact } = useContact()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = (typeof window !== "undefined" ? window.location.pathname : "/").replace(/\/+$/, "") || "/"
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`
      return
    }

    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-4 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <nav
          className={`glass rounded-2xl px-4 sm:px-5 py-3 flex items-center justify-between shadow-glow transition-all duration-300 ${
            isScrolled ? "backdrop-blur-xl bg-white/10" : ""
          }`}
        >
          <button onClick={() => scrollToSection("top")} className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden border border-white/10 bg-black/30 shadow-glow">
              <img src="/brand-logo.png" alt="ShutdownX logo" className="h-full w-full object-contain" />
            </div>
            <span className="font-display text-base sm:text-lg tracking-wide grad-text">ShutdownX</span>
          </button>

          <div className="hidden lg:flex items-center gap-2">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection("services")}
                  className="px-3 py-2 rounded-lg hover:bg-white/5 transition lux-link text-sm"
                >
                  Capabilities
                </button>
                <button
                  onClick={() => scrollToSection("why")}
                  className="px-3 py-2 rounded-lg hover:bg-white/5 transition lux-link text-sm"
                >
                  Why Us
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="px-3 py-2 rounded-lg hover:bg-white/5 transition lux-link text-sm"
                >
                  About
                </button>
                <a href="/products" className="px-3 py-2 rounded-lg hover:bg-white/5 transition lux-link text-sm">
                  Products
                </a>
              </>
            ) : (
              <>
                <a href="/" className="px-3 py-2 rounded-lg hover:bg-white/5 transition lux-link text-sm">
                  Home
                </a>
                <a href="/products" className="px-3 py-2 rounded-lg hover:bg-white/5 transition lux-link text-sm">
                  Products
                </a>
                <a href="/pricing" className="px-3 py-2 rounded-lg hover:bg-white/5 transition lux-link text-sm">
                  Pricing
                </a>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/pricing"
              className="hidden sm:inline-flex lux-btn ripple rounded-xl bg-gradient-to-r from-aurora-purple to-aurora-blue px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold shadow-glow hover:shadow-glowTeal transition"
            >
              Pricing
            </a>
            <button
              onClick={() => openContact("hire")}
              className="lux-btn ripple rounded-xl border border-white/10 bg-white/5 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold hover:bg-white/10 transition"
            >
              Contact
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden lux-btn ripple rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" className="text-slate-200">
                {isMobileMenuOpen ? (
                  <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                ) : (
                  <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 glass rounded-2xl border border-white/10 bg-white/5 p-3 animate-in fade-in-0 slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {isHomePage ? (
                <>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="lux-btn rounded-lg px-3 py-2.5 text-sm text-left hover:bg-white/5 transition"
                  >
                    Capabilities
                  </button>
                  <button
                    onClick={() => scrollToSection("why")}
                    className="lux-btn rounded-lg px-3 py-2.5 text-sm text-left hover:bg-white/5 transition"
                  >
                    Why Us
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="lux-btn rounded-lg px-3 py-2.5 text-sm text-left hover:bg-white/5 transition"
                  >
                    About
                  </button>
                  <a href="/products" className="lux-btn rounded-lg px-3 py-2.5 text-sm hover:bg-white/5 transition">
                    Products
                  </a>
                  <a href="/pricing" className="lux-btn rounded-lg px-3 py-2.5 text-sm hover:bg-white/5 transition">
                    Pricing
                  </a>
                  <button
                    onClick={() => scrollToSection("careers")}
                    className="lux-btn rounded-lg px-3 py-2.5 text-sm text-left hover:bg-white/5 transition"
                  >
                    Careers
                  </button>
                </>
              ) : (
                <>
                  <a href="/" className="lux-btn rounded-lg px-3 py-2.5 text-sm hover:bg-white/5 transition">
                    Home
                  </a>
                  <a href="/products" className="lux-btn rounded-lg px-3 py-2.5 text-sm hover:bg-white/5 transition">
                    Products
                  </a>
                  <a href="/pricing" className="lux-btn rounded-lg px-3 py-2.5 text-sm hover:bg-white/5 transition">
                    Pricing
                  </a>
                  <a href="/terms-and-conditions" className="lux-btn rounded-lg px-3 py-2.5 text-sm hover:bg-white/5 transition">
                    Terms
                  </a>
                  <a href="/privacy" className="lux-btn rounded-lg px-3 py-2.5 text-sm hover:bg-white/5 transition">
                    Privacy
                  </a>
                  <a href="/refund" className="lux-btn rounded-lg px-3 py-2.5 text-sm hover:bg-white/5 transition">
                    Refund Policy
                  </a>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navigation
