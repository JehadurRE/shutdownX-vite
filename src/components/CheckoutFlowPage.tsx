import type React from "react"
import { useMemo, useState } from "react"
import { usePageMeta } from "../hooks/usePageMeta"
import { getCheckoutProviderLabel } from "../lib/checkout"

type PlanId = "launch" | "scale" | "enterprise"

const planCatalog: Record<PlanId, { name: string; price: string; cadence: string; features: string[] }> = {
  launch: {
    name: "Launch",
    price: "$49",
    cadence: "per month",
    features: ["Core automation modules", "Up to 5 API integrations", "Standard support", "Digital delivery"],
  },
  scale: {
    name: "Scale",
    price: "$199",
    cadence: "per month",
    features: ["All Launch features", "Unlimited integrations", "AI workflow modules", "Priority support"],
  },
  enterprise: {
    name: "Enterprise",
    price: "$1,999",
    cadence: "per year",
    features: ["Full platform access", "Dedicated environment", "SLA guarantees", "Implementation guidance"],
  },
}

const CheckoutFlowPage: React.FC = () => {
  const [step, setStep] = useState<"plan" | "details" | "confirm">("plan")
  const [selectedPlan, setSelectedPlan] = useState<PlanId>("launch")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const planId = useMemo<PlanId>(() => {
    if (typeof window === "undefined") return "launch"
    const raw = new URLSearchParams(window.location.search).get("plan")
    if (raw === "scale" || raw === "enterprise" || raw === "launch") {
      setSelectedPlan(raw)
      setStep("details")
      return raw
    }
    return "launch"
  }, [])

  const plan = planCatalog[selectedPlan]
  const providerLabel = getCheckoutProviderLabel()

  usePageMeta({
    title: `Checkout | ShutdownX`,
    description: `Complete your ShutdownX software subscription checkout.`,
    keywords: ["ShutdownX checkout", "software subscription"],
    noindex: true,
  })

  const handlePlanSelect = (plan: PlanId) => {
    setSelectedPlan(plan)
    setStep("details")
  }

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("confirm")
  }

  const handleFinalSubmit = () => {
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="relative py-16 md:py-24 min-h-screen flex items-center">
        <div className="mx-auto max-w-2xl px-6 w-full">
          <div className="glass lux-card rounded-3xl border border-emerald-400/30 bg-emerald-400/5 p-8 md:p-10 text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/20 border border-emerald-400/30 mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" className="text-emerald-300">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            <h1 className="font-display text-3xl font-bold text-emerald-200">Checkout request received</h1>
            <p className="mt-4 text-slate-300">
              Your {plan.name} plan request has been submitted. We'll send activation details to{" "}
              <span className="text-emerald-300 font-semibold">{email}</span> within 1 business day.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-left">
              <div className="text-sm text-slate-400">Order summary</div>
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <div className="font-semibold">{plan.name} Plan</div>
                  <div className="text-sm text-slate-400">{name}</div>
                  {company && <div className="text-sm text-slate-400">{company}</div>}
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold">{plan.price}</div>
                  <div className="text-xs text-slate-400">{plan.cadence}</div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-xs text-slate-400">
              Secure checkout powered by our Merchant of Record partner. All transactions are encrypted and PCI DSS compliant.
            </p>
            <div className="mt-6 flex gap-3 justify-center">
              <a
                href="/"
                className="lux-btn ripple rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition"
              >
                Back to home
              </a>
              <a
                href="/pricing"
                className="lux-btn ripple rounded-xl bg-gradient-to-r from-aurora-purple to-aurora-blue px-5 py-3 text-sm font-semibold shadow-glow hover:shadow-glowTeal transition"
              >
                View all plans
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Progress indicator */}
        <div className="mb-8 flex items-center justify-center gap-2">
          <div className={`h-2 w-2 rounded-full ${step === "plan" ? "bg-aurora-blue" : "bg-white/20"}`} />
          <div className={`h-1 w-12 rounded-full ${step !== "plan" ? "bg-aurora-blue" : "bg-white/20"}`} />
          <div className={`h-2 w-2 rounded-full ${step === "details" ? "bg-aurora-blue" : "bg-white/20"}`} />
          <div className={`h-1 w-12 rounded-full ${step === "confirm" ? "bg-aurora-blue" : "bg-white/20"}`} />
          <div className={`h-2 w-2 rounded-full ${step === "confirm" ? "bg-aurora-blue" : "bg-white/20"}`} />
        </div>

        {step === "plan" && (
          <div className="glass lux-card rounded-3xl border border-white/10 p-8 md:p-10">
            <h1 className="type-rhythm font-display text-3xl md:text-4xl font-extrabold grad-text">Select your plan</h1>
            <p className="mt-2 text-slate-300">Choose the software license that fits your needs</p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {(Object.keys(planCatalog) as PlanId[]).map((id) => {
                const p = planCatalog[id]
                return (
                  <button
                    key={id}
                    onClick={() => handlePlanSelect(id)}
                    className={`glass lux-card rounded-2xl p-6 border text-left transition-all hover:border-aurora-blue/50 hover:shadow-glow ${
                      selectedPlan === id ? "border-aurora-blue/50 shadow-glow" : "border-white/10"
                    }`}
                  >
                    <div className="text-xl font-bold">{p.name}</div>
                    <div className="mt-2 text-2xl font-extrabold">{p.price}</div>
                    <div className="text-sm text-slate-400">{p.cadence}</div>
                    <ul className="mt-4 space-y-2 text-sm text-slate-300">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-aurora-teal flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {step === "details" && (
          <div className="glass lux-card rounded-3xl border border-white/10 p-8 md:p-10">
            <button
              onClick={() => setStep("plan")}
              className="text-sm text-slate-400 hover:text-slate-200 transition-colors mb-4"
            >
              ← Change plan
            </button>
            <h1 className="type-rhythm font-display text-3xl md:text-4xl font-extrabold grad-text">Your details</h1>
            <p className="mt-2 text-slate-300">We'll use this to set up your account</p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-sm text-slate-400">Selected plan</div>
              <div className="mt-1 flex items-center justify-between">
                <div>
                  <div className="font-bold">{plan.name}</div>
                  <div className="text-sm text-slate-400">{plan.cadence}</div>
                </div>
                <div className="text-xl font-bold">{plan.price}</div>
              </div>
            </div>

            <form onSubmit={handleDetailsSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-sm text-slate-300">Full name *</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-aurora-blue/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Business email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@company.com"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-aurora-blue/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-slate-300">Company name (optional)</label>
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Acme Inc"
                  className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-aurora-blue/50 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="lux-btn ripple mt-4 w-full rounded-xl bg-gradient-to-r from-aurora-purple via-aurora-blue to-aurora-teal px-4 py-3 font-semibold shadow-glow hover:shadow-glowTeal transition"
              >
                Continue to review
              </button>
            </form>
          </div>
        )}

        {step === "confirm" && (
          <div className="glass lux-card rounded-3xl border border-white/10 p-8 md:p-10">
            <button
              onClick={() => setStep("details")}
              className="text-sm text-slate-400 hover:text-slate-200 transition-colors mb-4"
            >
              ← Edit details
            </button>
            <h1 className="type-rhythm font-display text-3xl md:text-4xl font-extrabold grad-text">Review and confirm</h1>
            <p className="mt-2 text-slate-300">Please review your order before submitting</p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="text-sm text-slate-400 mb-3">Plan details</div>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xl font-bold">{plan.name} Plan</div>
                    <ul className="mt-2 space-y-1 text-sm text-slate-300">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-aurora-teal flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{plan.price}</div>
                    <div className="text-sm text-slate-400">{plan.cadence}</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="text-sm text-slate-400 mb-3">Account details</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Name:</span>
                    <span className="font-semibold">{name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Email:</span>
                    <span className="font-semibold">{email}</span>
                  </div>
                  {company && (
                    <div className="flex justify-between">
                      <span className="text-slate-400">Company:</span>
                      <span className="font-semibold">{company}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-aurora-blue/30 bg-aurora-blue/5 p-5">
                <div className="text-sm font-semibold text-aurora-blue mb-2">Secure payment processing</div>
                <p className="text-sm text-slate-300">
                  Checkout and billing are handled by our Merchant of Record partner. They process payments securely, handle global taxes, and manage invoicing with enterprise-grade compliance.
                </p>
              </div>
            </div>

            <button
              onClick={handleFinalSubmit}
              className="lux-btn ripple mt-6 w-full rounded-xl bg-gradient-to-r from-aurora-purple via-aurora-blue to-aurora-teal px-4 py-3 font-semibold shadow-glow hover:shadow-glowTeal transition"
            >
              Submit checkout request
            </button>

            <p className="mt-4 text-xs text-slate-400 text-center">
              By submitting, you agree to our <a href="/terms-and-conditions" className="text-aurora-blue hover:text-teal-300 transition-colors">Terms of Service</a> and <a href="/privacy" className="text-aurora-blue hover:text-teal-300 transition-colors">Privacy Policy</a>
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default CheckoutFlowPage
