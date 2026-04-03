import type React from "react"
import { useMemo, useState } from "react"
import { usePageMeta } from "../hooks/usePageMeta"

type PlanId = "launch" | "scale" | "enterprise"

const planCatalog: Record<PlanId, { name: string; price: string; cadence: string; features: string[]; color: string }> = {
  launch: {
    name: "Launch",
    price: "$49",
    cadence: "per month",
    features: ["Core automation modules", "Up to 5 API integrations", "Standard support", "Digital delivery"],
    color: "from-purple-500 to-blue-500",
  },
  scale: {
    name: "Scale",
    price: "$199",
    cadence: "per month",
    features: ["All Launch features", "Unlimited integrations", "AI workflow modules", "Priority support"],
    color: "from-blue-500 to-cyan-500",
  },
  enterprise: {
    name: "Enterprise",
    price: "$1,999",
    cadence: "per year",
    features: ["Full platform access", "Dedicated environment", "SLA guarantees", "Implementation guidance"],
    color: "from-cyan-500 to-teal-500",
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

  usePageMeta({
    title: `Secure Checkout | ShutdownX`,
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
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-500/30 to-teal-500/20 blur-3xl animate-pulseSoft" />
          <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-500/30 to-blue-500/20 blur-3xl animate-pulseSoft" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="mx-auto max-w-3xl px-6 w-full">
          <div className="glass lux-card rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-400/10 to-teal-400/5 p-10 md:p-12 text-center backdrop-blur-xl">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400/30 to-teal-400/20 border-2 border-emerald-400/40 mb-6 animate-in zoom-in-50 duration-500">
              <svg width="40" height="40" viewBox="0 0 24 24" className="text-emerald-300">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-extrabold grad-text animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
              Order confirmed!
            </h1>
            
            <p className="mt-6 text-lg text-slate-200 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-100">
              Thank you for choosing <span className="font-semibold text-emerald-300">{plan.name}</span>. We'll send your activation details to{" "}
              <span className="font-semibold text-cyan-300">{email}</span> within 1 business day.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-6 text-left animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-200">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-semibold text-slate-300">Order Summary</div>
                <div className="text-xs px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300">
                  Confirmed
                </div>
              </div>
              
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="text-xl font-bold">{plan.name} Plan</div>
                  <div className="text-sm text-slate-400">{name}</div>
                  {company && <div className="text-sm text-slate-400">{company}</div>}
                  <div className="text-xs text-slate-500 mt-2">{email}</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-extrabold grad-text">{plan.price}</div>
                  <div className="text-xs text-slate-400 mt-1">{plan.cadence}</div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-300">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-emerald-300">✓</div>
                <div className="mt-2 text-xs text-slate-400">Secure payment</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-cyan-300">✓</div>
                <div className="mt-2 text-xs text-slate-400">Instant access</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-teal-300">✓</div>
                <div className="mt-2 text-xs text-slate-400">14-day refund</div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-400">
              <a
                href="/"
                className="lux-btn ripple rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition"
              >
                Back to home
              </a>
              <a
                href="/pricing"
                className="lux-btn ripple rounded-xl bg-gradient-to-r from-aurora-purple to-aurora-blue px-6 py-3 text-sm font-semibold shadow-glow hover:shadow-glowTeal transition"
              >
                View all plans
              </a>
            </div>

            <p className="mt-8 text-xs text-slate-500 animate-in fade-in-0 duration-700 delay-500">
              Secure checkout powered by our Merchant of Record partner • PCI DSS Level 1 compliant
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-16 md:py-24 min-h-screen">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-aurora-purple/30 to-aurora-blue/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-tr from-aurora-teal/30 to-aurora-blue/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Premium Progress Indicator */}
        <div className="mb-8 sm:mb-12 flex items-center justify-center overflow-x-auto">
          <div className="flex items-center gap-2 sm:gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 min-w-max">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className={`h-6 w-6 sm:h-8 sm:w-8 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm transition-all ${
                step === "plan" ? "bg-gradient-to-br from-aurora-purple to-aurora-blue text-white shadow-glow" : "bg-white/10 text-slate-400"
              }`}>
                1
              </div>
              <span className={`text-xs sm:text-sm font-medium ${step === "plan" ? "text-white" : "text-slate-400"}`}>Plan</span>
            </div>
            
            <div className={`h-0.5 w-8 sm:w-16 rounded-full ${step !== "plan" ? "bg-gradient-to-r from-aurora-purple to-aurora-blue" : "bg-white/10"}`} />
            
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className={`h-6 w-6 sm:h-8 sm:w-8 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm transition-all ${
                step === "details" ? "bg-gradient-to-br from-aurora-blue to-aurora-teal text-white shadow-glow" : step === "confirm" ? "bg-emerald-400/20 text-emerald-300" : "bg-white/10 text-slate-400"
              }`}>
                2
              </div>
              <span className={`text-xs sm:text-sm font-medium ${step === "details" || step === "confirm" ? "text-white" : "text-slate-400"}`}>Details</span>
            </div>
            
            <div className={`h-0.5 w-8 sm:w-16 rounded-full ${step === "confirm" ? "bg-gradient-to-r from-aurora-blue to-aurora-teal" : "bg-white/10"}`} />
            
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className={`h-6 w-6 sm:h-8 sm:w-8 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm transition-all ${
                step === "confirm" ? "bg-gradient-to-br from-aurora-teal to-emerald-400 text-white shadow-glow" : "bg-white/10 text-slate-400"
              }`}>
                3
              </div>
              <span className={`text-xs sm:text-sm font-medium ${step === "confirm" ? "text-white" : "text-slate-400"}`}>Confirm</span>
            </div>
          </div>
        </div>

        {step === "plan" && (
          <div className="glass lux-card rounded-3xl border border-white/10 p-6 sm:p-8 md:p-10 backdrop-blur-xl">
            <div className="text-center mb-8 sm:mb-10">
              <h1 className="type-rhythm font-display text-3xl sm:text-4xl md:text-5xl font-extrabold grad-text">Choose your plan</h1>
              <p className="mt-3 text-base sm:text-lg text-slate-300">Select the software license that fits your workflow</p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              {(Object.keys(planCatalog) as PlanId[]).map((id) => {
                const p = planCatalog[id]
                const isSelected = selectedPlan === id
                return (
                  <button
                    key={id}
                    onClick={() => handlePlanSelect(id)}
                    className={`group relative glass lux-card rounded-2xl p-5 sm:p-7 border text-left transition-all duration-300 ${
                      isSelected 
                        ? "border-aurora-blue/60 shadow-glow scale-105" 
                        : "border-white/10 hover:border-aurora-blue/40 hover:shadow-glow hover:scale-102"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center shadow-glow">
                        <svg width="14" height="14" viewBox="0 0 24 24" className="text-white">
                          <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                    )}
                    
                    <div className={`inline-flex px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold mb-3 sm:mb-4 bg-gradient-to-r ${p.color} bg-clip-text text-transparent border border-white/10`}>
                      {p.name}
                    </div>
                    
                    <div className="flex items-baseline gap-2">
                      <div className="text-3xl sm:text-4xl font-extrabold">{p.price}</div>
                      <div className="text-xs sm:text-sm text-slate-400">/ {p.cadence.replace("per ", "")}</div>
                    </div>
                    
                    <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-xs sm:text-sm text-slate-300">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 sm:gap-3">
                          <svg width="18" height="18" viewBox="0 0 24 24" className="text-aurora-teal flex-shrink-0 mt-0.5">
                            <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className={`mt-4 sm:mt-6 pt-4 sm:pt-6 border-t ${isSelected ? "border-aurora-blue/30" : "border-white/10"}`}>
                      <div className={`text-xs sm:text-sm font-semibold ${isSelected ? "text-aurora-blue" : "text-slate-400 group-hover:text-aurora-blue"} transition-colors`}>
                        {isSelected ? "Selected →" : "Select plan →"}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {step === "details" && (
          <div className="max-w-2xl mx-auto">
            <div className="glass lux-card rounded-3xl border border-white/10 p-6 sm:p-8 md:p-10 backdrop-blur-xl">
              <button
                onClick={() => setStep("plan")}
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-slate-200 transition-colors mb-4 sm:mb-6"
              >
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                </svg>
                Change plan
              </button>
              
              <h1 className="type-rhythm font-display text-3xl sm:text-4xl md:text-5xl font-extrabold grad-text">Account details</h1>
              <p className="mt-3 text-base sm:text-lg text-slate-300">We'll use this information to set up your subscription</p>

              <div className="mt-6 sm:mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-400">Selected plan</div>
                    <div className="mt-1 text-xl sm:text-2xl font-bold">{plan.name}</div>
                    <div className="text-xs sm:text-sm text-slate-400">{plan.cadence}</div>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-2xl sm:text-3xl font-extrabold grad-text">{plan.price}</div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleDetailsSubmit} className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full name *</label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg outline-none focus:border-aurora-blue/50 focus:ring-2 focus:ring-aurora-blue/20 transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Business email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@company.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg outline-none focus:border-aurora-blue/50 focus:ring-2 focus:ring-aurora-blue/20 transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Company name (optional)</label>
                  <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Inc"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg outline-none focus:border-aurora-blue/50 focus:ring-2 focus:ring-aurora-blue/20 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="lux-btn ripple w-full rounded-xl bg-gradient-to-r from-aurora-purple via-aurora-blue to-aurora-teal px-6 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-glow hover:shadow-glowTeal transition-all mt-6 sm:mt-8"
                >
                  Continue to review →
                </button>
              </form>
            </div>
          </div>
        )}

        {step === "confirm" && (
          <div className="max-w-3xl mx-auto">
            <div className="glass lux-card rounded-3xl border border-white/10 p-10 md:p-12 backdrop-blur-xl">
              <button
                onClick={() => setStep("details")}
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors mb-6"
              >
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                </svg>
                Edit details
              </button>
              
              <h1 className="type-rhythm font-display text-4xl md:text-5xl font-extrabold grad-text">Review your order</h1>
              <p className="mt-3 text-lg text-slate-300">Please confirm everything looks correct</p>

              <div className="mt-8 space-y-6">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
                  <div className="text-sm font-semibold text-slate-400 mb-4">Plan details</div>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-2xl font-bold">{plan.name} Plan</div>
                      <ul className="mt-4 space-y-2 text-sm text-slate-300">
                        {plan.features.map((f) => (
                          <li key={f} className="flex items-start gap-3">
                            <svg width="18" height="18" viewBox="0 0 24 24" className="text-aurora-teal flex-shrink-0 mt-0.5">
                              <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-3xl font-extrabold grad-text">{plan.price}</div>
                      <div className="text-sm text-slate-400 mt-1">{plan.cadence}</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
                  <div className="text-sm font-semibold text-slate-400 mb-4">Account information</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-slate-400">Name</span>
                      <span className="font-semibold">{name}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-slate-400">Email</span>
                      <span className="font-semibold">{email}</span>
                    </div>
                    {company && (
                      <div className="flex items-center justify-between py-2">
                        <span className="text-slate-400">Company</span>
                        <span className="font-semibold">{company}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 to-teal-400/5 p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-emerald-400/10 border border-emerald-400/20">
                      <svg width="20" height="20" viewBox="0 0 24 24" className="text-emerald-300">
                        <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-emerald-300 mb-1">Secure payment processing</div>
                      <p className="text-sm text-slate-300">
                        Your payment is processed securely by our Merchant of Record partner with enterprise-grade encryption, automatic tax handling, and PCI DSS Level 1 compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleFinalSubmit}
                className="lux-btn ripple w-full rounded-xl bg-gradient-to-r from-aurora-purple via-aurora-blue to-aurora-teal px-6 py-4 text-lg font-semibold shadow-glow hover:shadow-glowTeal transition-all mt-8"
              >
                Complete checkout →
              </button>

              <p className="mt-6 text-center text-xs text-slate-400">
                By completing checkout, you agree to our{" "}
                <a href="/terms-and-conditions" className="text-aurora-blue hover:text-teal-300 transition-colors underline underline-offset-2">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-aurora-blue hover:text-teal-300 transition-colors underline underline-offset-2">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default CheckoutFlowPage
