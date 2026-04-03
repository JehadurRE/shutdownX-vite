import type React from "react"
import { usePageMeta } from "../hooks/usePageMeta"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Terms", href: "/terms-and-conditions" },
  { label: "Privacy", href: "/privacy" },
  { label: "Refund", href: "/refund" },
]

const NotFoundPage: React.FC = () => {
  usePageMeta({
    title: "Page Not Found | ShutdownX",
    description: "The page you requested could not be found. Browse ShutdownX pricing, legal policies, and product links.",
    noindex: true,
  })

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="glass lux-card rounded-3xl border border-white/10 p-10 text-center shadow-glow">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            404 • Not Found
          </div>
          <h1 className="type-rhythm mt-4 font-display text-4xl md:text-6xl font-extrabold grad-text">Looks like this page drifted off.</h1>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            No worries — use one of the verified links below to get back on track.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {quickLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="lux-btn ripple rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage
