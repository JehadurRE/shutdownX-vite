"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { useContact } from "../contexts/ContactContext"

const Hero: React.FC = () => {
  const { openContact } = useContact()
  const [isVisible, setIsVisible] = useState(false)
  const [activeMobileCard, setActiveMobileCard] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const networkCanvasRef = useRef<HTMLCanvasElement>(null)
  const mobileCardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const canvas = networkCanvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0)
    }

    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const isMobile = rect.width < 640
      const cols = isMobile ? 6 : 10
      const rows = isMobile ? 5 : 7
      const gapX = rect.width / (cols + 1)
      const gapY = rect.height / (rows + 1)

      for (let r = 1; r <= rows; r++) {
        for (let c = 1; c <= cols; c++) {
          const x = c * gapX
          const y = r * gapY
          const t = performance.now() / 1000
          const offsetX = Math.sin(t + r * c) * 6
          const offsetY = Math.cos(t + r * c) * 4

          // Draw node
          ctx.fillStyle = "rgba(255,255,255,0.25)"
          ctx.beginPath()
          ctx.arc(x + offsetX, y + offsetY, 1.4, 0, 2 * Math.PI)
          ctx.fill()

          // Connect horizontally
          if (c < cols) {
            ctx.strokeStyle = "rgba(34,211,238,0.15)"
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(x + offsetX, y + offsetY)
            ctx.lineTo((c + 1) * gapX, y)
            ctx.stroke()
          }

          // Connect vertically
          if (r < rows) {
            ctx.strokeStyle = "rgba(124,58,237,0.15)"
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(x + offsetX, y + offsetY)
            ctx.lineTo(x, (r + 1) * gapY)
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleMobileCardsScroll = () => {
    const container = mobileCardsRef.current
    if (!container) return

    const cards = Array.from(container.children) as HTMLElement[]
    if (cards.length === 0) return

    const center = container.getBoundingClientRect().left + container.clientWidth / 2
    let closestIndex = 0
    let closestDistance = Number.POSITIVE_INFINITY

    cards.forEach((card, index) => {
      const cardCenter = card.getBoundingClientRect().left + card.clientWidth / 2
      const distance = Math.abs(cardCenter - center)
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    setActiveMobileCard(closestIndex)
  }

  const scrollToMobileCard = (index: number) => {
    const container = mobileCardsRef.current
    if (!container) return
    const cards = Array.from(container.children) as HTMLElement[]
    const target = cards[index]
    if (!target) return
    target.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
    setActiveMobileCard(index)
  }

  const floatingCards = [
    {
      id: "model",
      label: "AI Stack",
      title: "LLM Orchestration",
      details: "Routing, guardrails, and evaluation loops",
      metric: "97.2%",
      metricLabel: "Response quality",
      position: "left-3 top-4 w-40 sm:left-8 sm:top-10 sm:w-44",
      accent: "from-aurora-purple to-aurora-blue",
      mobileClass: "",
    },
    {
      id: "automation",
      label: "Automation",
      title: "n8n + FastAPI",
      details: "Resilient workflows with observability",
      metric: "3.4x",
      metricLabel: "Ops efficiency",
      position: "right-3 bottom-4 w-44 sm:right-8 sm:bottom-8 sm:w-52",
      accent: "from-aurora-teal to-aurora-blue",
      mobileClass: "",
    },
    {
      id: "design",
      label: "Product Design",
      title: "UI/UX Excellence",
      details: "Systemized components and premium interactions",
      metric: "A+",
      metricLabel: "Experience score",
      position: "left-1/2 -translate-x-1/2 top-[40%] w-44 sm:top-1/3 sm:w-60",
      accent: "from-aurora-blue to-aurora-purple",
      mobileClass: "",
    },
  ]

  return (
    <section id="top" className="relative" ref={heroRef}>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 md:pb-28 lg:pt-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur reveal transition-all duration-1000 ${
                isVisible ? "in-view" : ""
              }`}
            >
              <span className="inline-block h-2 w-2 rounded-full bg-aurora-teal animate-pulseSoft"></span>
              AI-powered • Automation-first • Design-led
            </div>

            <h1
              className={`type-rhythm font-display text-4xl md:text-6xl lg:text-7xl leading-tight font-extrabold grad-text reveal transition-all duration-1000 delay-200 ${
                isVisible ? "in-view" : ""
              }`}
            >
              Building the Future of SaaS with AI & Automation
            </h1>

            <p
              className={`text-slate-300 text-base md:text-lg max-w-xl reveal transition-all duration-1000 delay-400 ${
                isVisible ? "in-view" : ""
              }`}
            >
              ShutdownX designs and engineers premium AI products, automation systems, and digital experiences built to
              convert, scale, and endure.
            </p>

            <div
              className={`flex flex-wrap gap-3 reveal transition-all duration-1000 delay-600 ${
                isVisible ? "in-view" : ""
              }`}
            >
              <button
                onClick={() => openContact("hire")}
                className="lux-btn ripple w-full sm:w-auto rounded-2xl bg-gradient-to-r from-aurora-purple via-aurora-blue to-aurora-teal px-5 py-3 font-semibold shadow-glow hover:shadow-glowTeal transition"
              >
                Work with us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="lux-btn ripple w-full sm:w-auto rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold hover:bg-white/10 transition"
              >
                Explore services
              </button>
              <button
                onClick={() => openContact("refer")}
                className="lux-btn ripple w-full sm:w-auto rounded-2xl border border-aurora-teal/30 bg-aurora-teal/10 px-5 py-3 font-semibold text-teal-300 hover:bg-aurora-teal/20 transition"
              >
                Refer a specialist
              </button>
            </div>

            <div
              className={`flex flex-wrap items-center gap-2 reveal transition-all duration-1000 delay-700 ${
                isVisible ? "in-view" : ""
              }`}
            >
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                Trusted delivery
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                Verification-ready policies
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                Senior product team
              </span>
            </div>

            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 reveal transition-all duration-1000 delay-800 ${
                isVisible ? "in-view" : ""
              }`}
            >
              <div className="glass lux-card rounded-xl p-4">
                <div className="text-sm text-slate-400">Projects launched</div>
                <div className="mt-1 font-semibold">50+</div>
              </div>
              <div className="glass lux-card rounded-xl p-4">
                <div className="text-sm text-slate-400">Typical kickoff</div>
                <div className="mt-1 font-semibold">7 business days</div>
              </div>
              <div className="glass lux-card rounded-xl p-4">
                <div className="text-sm text-slate-400">Client satisfaction</div>
                <div className="mt-1 font-semibold">98%</div>
              </div>
            </div>
          </div>

          {/* Hero visualization */}
          <div
            className={`relative h-[360px] sm:h-[420px] md:h-[520px] lg:h-[560px] reveal transition-all duration-1000 delay-1000 ${
              isVisible ? "in-view" : ""
            }`}
          >
            {/* Main container */}
            <div className="relative h-full sm:absolute sm:inset-0 rounded-[28px] border border-white/10 bg-gradient-to-b from-white/10 to-white/0 backdrop-blur parallax overflow-hidden">
              {/* Network canvas */}
              <canvas
                ref={networkCanvasRef}
                className="absolute inset-0 rounded-[28px]"
                style={{ width: "100%", height: "100%" }}
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent sm:from-transparent"></div>

              {/* Premium mobile cards (integrated with animated bg) */}
              <div className="absolute inset-x-3 bottom-3 z-10 sm:hidden">
                <div className="mb-2 flex items-center justify-between px-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-300/90">Live capabilities</span>
                  <span className="text-[10px] text-slate-300/80">Swipe</span>
                </div>
                <div
                  ref={mobileCardsRef}
                  onScroll={handleMobileCardsScroll}
                  className="no-scrollbar flex gap-2 overflow-x-auto snap-x snap-mandatory pb-1"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {floatingCards.map((card) => (
                    <div
                      key={`${card.id}-mobile`}
                      className="snap-center min-w-[230px] flex-1 glass lux-card rounded-2xl p-3 border border-white/15 backdrop-blur-xl"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-[10px] uppercase tracking-[0.18em] text-slate-300">{card.label}</div>
                        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300 animate-pulseSoft"></span>
                      </div>
                      <div className="mt-1.5 text-sm font-semibold">{card.title}</div>
                      <div className="mt-1 text-[11px] text-slate-300">{card.details}</div>

                      <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div className={`h-full w-4/5 rounded-full bg-gradient-to-r ${card.accent} animate-pulseSoft`}></div>
                      </div>

                      <div className="mt-3 flex items-end justify-between">
                        <div>
                          <div className="text-base font-bold">{card.metric}</div>
                          <div className="text-[11px] text-slate-400">{card.metricLabel}</div>
                        </div>
                        <div className="text-[11px] text-emerald-300">live</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-center gap-2">
                  {floatingCards.map((card, index) => (
                    <button
                      key={`${card.id}-dot`}
                      onClick={() => scrollToMobileCard(index)}
                      aria-label={`Show ${card.title}`}
                      className={`h-1.5 rounded-full transition-all ${
                        activeMobileCard === index ? "w-5 bg-white/90" : "w-1.5 bg-white/35"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating info cards (tablet/desktop) */}
              <div className="absolute inset-0 hidden sm:block">
                {floatingCards.map((card) => (
                  <div
                    key={card.id}
                    className={`absolute ${card.position} ${card.mobileClass} glass lux-card rounded-2xl p-3 sm:p-4 parallax tilt transition-all duration-300 hover:scale-105 hover:shadow-glow`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-slate-400">{card.label}</div>
                      <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300 animate-pulseSoft"></span>
                    </div>
                    <div className="mt-1.5 text-sm sm:text-base font-semibold">{card.title}</div>
                    <div className="mt-1 text-[11px] sm:text-xs text-slate-300">{card.details}</div>

                    <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className={`h-full w-4/5 rounded-full bg-gradient-to-r ${card.accent} animate-pulseSoft`}></div>
                    </div>

                    <div className="mt-3 flex items-end justify-between">
                      <div>
                        <div className="text-base sm:text-lg font-bold">{card.metric}</div>
                        <div className="text-[11px] text-slate-400">{card.metricLabel}</div>
                      </div>
                      <div className="text-[11px] text-emerald-300">live</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className={`mt-16 flex items-center gap-3 text-slate-400 reveal transition-all duration-1000 delay-1200 ${
            isVisible ? "in-view" : ""
          }`}
        >
          <div className="h-9 w-6 rounded-full border border-white/15 relative overflow-hidden">
            <span className="absolute left-1/2 -translate-x-1/2 top-1 h-2 w-1 rounded-full bg-white/70 animate-[float_2s_ease-in-out_infinite]"></span>
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
