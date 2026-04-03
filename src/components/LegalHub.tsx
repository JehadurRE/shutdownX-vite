"use client"

import type React from "react"
import { useScrollReveal } from "../hooks/useScrollReveal"

const legalLinks = [
  {
    title: "Pricing",
    href: "/pricing",
    description: "Clear plans with startup, growth, and enterprise options.",
    badge: "Commercial",
  },
  {
    title: "Terms of Service",
    href: "/terms-and-conditions",
    description: "Service terms, ownership, confidentiality, and legal framework.",
    badge: "Legal",
  },
  {
    title: "Privacy Policy",
    href: "/privacy",
    description: "Data handling, retention, and user privacy rights in one place.",
    badge: "Trust",
  },
  {
    title: "Refund Policy",
    href: "/refund",
    description: "Clear refund timelines, eligibility, and cancellation details.",
    badge: "Billing",
  },
]

const trustPillars = ["Transparent pricing", "Policy-first operations", "Verification-ready links", "Client-safe delivery"]

const LegalHub: React.FC = () => {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="legal" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-8 md:p-10 shadow-glow lux-card reveal transition-all duration-1000 ${
            isVisible ? "in-view" : ""
          }`}
        >
          <div className="flex flex-wrap items-center gap-2">
            {trustPillars.map((pillar) => (
              <span
                key={pillar}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 lux-link"
              >
                {pillar}
              </span>
            ))}
          </div>

          <h3 className="type-rhythm mt-5 font-display text-3xl md:text-4xl font-bold">Trust Center</h3>
          <p className="mt-3 max-w-3xl text-slate-300">
            Everything partners, reviewers, and payment providers need — centralized and easy to verify.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {legalLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-aurora-blue/40 hover:bg-white/10 lux-card"
              >
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-semibold text-lg group-hover:text-aurora-blue transition-colors">{item.title}</h4>
                  <span className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[11px] text-slate-300">
                    {item.badge}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-300">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LegalHub
