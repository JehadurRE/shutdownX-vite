"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useContact } from "../contexts/ContactContext"

const Navigation: React.FC = () => {
  const { openContact } = useContact()
  const [isScrolled, setIsScrolled] = useState(false)
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
  }

  return (
    <header className="sticky top-4 z-40">
      <div className="mx-auto max-w-7xl px-5">
        <nav
          className={`glass  mb-2 rounded-2xl px-5 py-3 flex items-center justify-between shadow-glow transition-all duration-300 ${
            isScrolled ? "backdrop-blur-xl bg-white/10" : ""
          }`}
        >
          <button onClick={() => scrollToSection("top")} className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-white/10 bg-black/30 shadow-glow">
              <img src="/brand-logo.png" alt="ShutdownX logo" className="h-full w-full object-contain" />
            </div>
            <span className="font-display text-lg tracking-wide grad-text">ShutdownX</span>
          </button>

          <div className="hidden md:flex items-center gap-2">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection("services")}
                  className="px-4 py-2 rounded-lg hover:bg-white/5 transition lux-link"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("why")}
                  className="px-4 py-2 rounded-lg hover:bg-white/5 transition lux-link"
                >
                  Why Us
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="px-4 py-2 rounded-lg hover:bg-white/5 transition lux-link"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("careers")}
                  className="px-4 py-2 rounded-lg hover:bg-white/5 transition lux-link"
                >
                  Careers
                </button>
                <button
                  onClick={() => scrollToSection("legal")}
                  className="px-4 py-2 rounded-lg hover:bg-white/5 transition lux-link"
                >
                  Trust
                </button>
              </>
            ) : (
              <>
                <a href="/" className="px-4 py-2 rounded-lg hover:bg-white/5 transition lux-link">
                  Home
                </a>
                <a href="/pricing" className="px-4 py-2 rounded-lg hover:bg-white/5 transition lux-link">
                  Pricing
                </a>
                <a href="/terms-and-conditions" className="px-4 py-2 rounded-lg hover:bg-white/5 transition lux-link">
                  Terms
                </a>
                <a href="/privacy" className="px-4 py-2 rounded-lg hover:bg-white/5 transition lux-link">
                  Privacy
                </a>
                <a href="/refund" className="px-4 py-2 rounded-lg hover:bg-white/5 transition lux-link">
                  Refund
                </a>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => openContact("hire")}
              className="lux-btn ripple rounded-xl bg-gradient-to-r from-aurora-purple to-aurora-blue px-4 py-2 text-sm font-semibold shadow-glow hover:shadow-glowTeal transition"
            >
              Hire Us
            </button>
            <button
              onClick={() => scrollToSection("careers")}
              className="lux-btn ripple rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition"
            >
              Join Us
            </button>
          </div>
        </nav>

        <div className="md:hidden mb-2 no-scrollbar overflow-x-auto">
          <div className="inline-flex gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 min-w-full">
            <button onClick={() => scrollToSection("services")} className="lux-btn rounded-lg px-3 py-2 text-xs bg-white/5">
              Services
            </button>
            <button onClick={() => scrollToSection("why")} className="lux-btn rounded-lg px-3 py-2 text-xs bg-white/5">
              Why
            </button>
            <button onClick={() => scrollToSection("about")} className="lux-btn rounded-lg px-3 py-2 text-xs bg-white/5">
              About
            </button>
            <button onClick={() => scrollToSection("careers")} className="lux-btn rounded-lg px-3 py-2 text-xs bg-white/5">
              Careers
            </button>
            <button onClick={() => scrollToSection("legal")} className="lux-btn rounded-lg px-3 py-2 text-xs bg-white/5">
              Trust
            </button>
            <a href="/pricing" className="lux-btn rounded-lg px-3 py-2 text-xs bg-white/5">
              Pricing
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation
