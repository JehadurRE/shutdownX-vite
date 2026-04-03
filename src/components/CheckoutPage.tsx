import type React from "react"
import { useMemo, useState } from "react"
import { usePageMeta } from "../hooks/usePageMeta"

type PlanId = "launch" | "scale" | "enterprise"

const planCatalog: Record<PlanId, { name: string; price: string; cadence: string }> = {
  launch: { name: "Launch", price: "$49", cadence: "per month" },
  scale: { name: "Scale", price: "$199", cadence: "per month" },
  enterprise: { name: "Enterprise", price: "$1,999", cadence: "per year" },
}

const CheckoutPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")

  const planId = useMemo<PlanId>(() => {
    if (typeof window === "undefined") return "launch"
    const raw = new URLSearchParams(window.location.search).get("plan")
    if (raw === "scale" || raw === "enterprise" || raw === "launch") return raw
    return "launch"
  }, [])

  const plan = planCatalog[planId]

  usePageMeta({
    title: `Checkout | ${plan.name} | ShutdownX`,
    description: `Complete your ${plan.name} plan checkout for ShutdownX automation software.`,
    keywords: ["ShutdownX checkout", "software subscription", plan.name],
    noindex: true,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="glass lux-card rounded-3xl border border-white/10 p-8 md:p-10">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            Secure checkout setup
          </div>
          <h1 className="type-rhythm mt-4 font-display text-3xl md:text-5xl font-extrabold grad-text">
            {plan.name} plan checkout
          </h1>

          <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="text-sm text-slate-300">Selected plan</div>
            <div className="mt-1 text-xl font-bold">{plan.name}</div>
            <div className="text-sm text-slate-400">
              {plan.price} {plan.cadence}
            </div>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-sm text-slate-300">Full name</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-aurora-blue/50"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Business email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-aurora-blue/50"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Company (optional)</label>
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-aurora-blue/50"
                />
              </div>

              <button
                type="submit"
                className="lux-btn ripple mt-2 w-full rounded-xl bg-gradient-to-r from-aurora-purple via-aurora-blue to-aurora-teal px-4 py-3 text-sm font-semibold shadow-glow hover:shadow-glowTeal transition"
              >
                Continue
              </button>
            </form>
          ) : (
            <div className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-200">
              Checkout intake submitted. Connect Paddle or Lemon Squeezy URLs in environment variables to enable live
              card checkout directly from pricing buttons.
            </div>
          )}

          <p className="mt-5 text-xs text-slate-400">
            This page is a safe fallback so checkout flow remains functional even before payment URLs are configured.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CheckoutPage
