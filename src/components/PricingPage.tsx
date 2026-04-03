import type React from "react"
import { useState } from "react"
import { useContact } from "../contexts/ContactContext"
import { usePageMeta } from "../hooks/usePageMeta"

const plans = [
  {
    name: "Launch",
    subtitle: "For startups validating fast",
    price: "$2,500",
    cadence: "one-time sprint",
    highlight: false,
    features: [
      "Discovery workshop + roadmap",
      "Landing page + conversion copy",
      "Core automation flow (n8n)",
      "Analytics + event tracking",
      "Delivery in 2-3 weeks",
    ],
  },
  {
    name: "Scale",
    subtitle: "For teams ready to automate growth",
    price: "$6,900",
    cadence: "per month",
    highlight: true,
    features: [
      "AI workflow architecture",
      "2 product features shipped monthly",
      "LLM integrations + guardrails",
      "Dedicated product designer",
      "Weekly strategy + reporting",
    ],
  },
  {
    name: "Enterprise",
    subtitle: "For complex ops and internal systems",
    price: "Custom",
    cadence: "tailored engagement",
    highlight: false,
    features: [
      "Multi-team automation strategy",
      "Secure API + data integrations",
      "SLA, observability, and compliance",
      "Dedicated pod (PM, engineer, designer)",
      "Quarterly innovation roadmap",
    ],
  },
]

const PricingPage: React.FC = () => {
  const { openContact } = useContact()
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null)

  usePageMeta({
    title: "Pricing | ShutdownX",
    description:
      "Explore ShutdownX pricing for AI engineering, automation systems, and product development engagements.",
    keywords: ["ShutdownX pricing", "AI automation pricing", "SaaS development cost", "LLM integration pricing"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      name: "ShutdownX Service Plans",
      itemListElement: plans.map((plan, index) => ({
        "@type": "Offer",
        position: index + 1,
        name: plan.name,
        description: plan.subtitle,
        priceSpecification:
          plan.price === "Custom"
            ? undefined
            : {
                "@type": "PriceSpecification",
                priceCurrency: "USD",
                price: plan.price.replace(/[$,]/g, ""),
                billingDuration: plan.cadence,
              },
      })),
    },
  })

  const origin = typeof window !== "undefined" ? window.location.origin : "https://yourdomain.com"

  const verificationLinks = [
    { label: "Pricing Page", path: "/pricing" },
    { label: "Terms of Service", path: "/terms-and-conditions" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Refund Policy", path: "/refund" },
  ]

  const faqs = [
    {
      q: "Do you support fixed-scope projects?",
      a: "Yes. We can scope, estimate, and deliver fixed milestones with clear acceptance criteria.",
    },
    {
      q: "Can we start small and scale later?",
      a: "Absolutely. Most clients start with Launch or Scale and then expand into a long-term roadmap.",
    },
    {
      q: "Do you sign NDAs and enterprise agreements?",
      a: "Yes. We support NDA workflows and enterprise procurement requirements.",
    },
  ]

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedLabel(label)
      window.setTimeout(() => setCopiedLabel(null), 1800)
    } catch {
      setCopiedLabel(null)
    }
  }

  return (
    <section id="pricing" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl reveal in-view">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            Transparent pricing • Built for outcomes
          </div>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-extrabold grad-text">Pricing that scales with your ambition</h1>
          <p className="mt-4 text-slate-300 text-base md:text-lg">
            Choose a plan designed for your stage. Every engagement includes strategy, execution, and premium support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`glass rounded-3xl p-7 border transition-all duration-300 ${
                plan.highlight ? "border-aurora-blue/50 shadow-glow" : "border-white/10"
              }`}
            >
              {plan.highlight ? (
                <span className="inline-flex rounded-full border border-aurora-blue/40 bg-aurora-blue/10 px-3 py-1 text-xs text-cyan-300">
                  Most popular
                </span>
              ) : null}

              <h2 className="mt-4 font-display text-2xl font-bold">{plan.name}</h2>
              <p className="mt-2 text-sm text-slate-300">{plan.subtitle}</p>

              <div className="mt-6">
                <div className="text-4xl font-extrabold">{plan.price}</div>
                <div className="text-sm text-slate-400">{plan.cadence}</div>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-aurora-teal" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openContact("hire")}
                className={`ripple mt-8 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-gradient-to-r from-aurora-purple via-aurora-blue to-aurora-teal text-white shadow-glow hover:shadow-glowTeal"
                    : "border border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                Start with {plan.name}
              </button>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="font-display text-2xl font-bold">Need a custom setup?</h3>
          <p className="mt-2 text-slate-300">
            We also offer fixed-scope builds, white-label product teams, and long-term AI transformation partnerships.
          </p>
          <button
            onClick={() => openContact("hire")}
            className="ripple mt-5 rounded-xl bg-gradient-to-r from-aurora-purple to-aurora-blue px-5 py-3 text-sm font-semibold shadow-glow hover:shadow-glowTeal transition"
          >
            Book a strategy call
          </button>
        </div>

        <div className="mt-10 rounded-3xl border border-aurora-blue/30 bg-gradient-to-br from-aurora-blue/10 via-white/5 to-aurora-teal/10 p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-aurora-teal/30 bg-aurora-teal/10 px-3 py-1 text-xs text-teal-200">
              Verification-ready
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              Professional policy stack
            </span>
          </div>
          <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold">Business verification links</h3>
          <p className="mt-2 text-slate-300">
            Use these URLs in payment provider and platform verification forms.
          </p>

          <div className="mt-6 space-y-3">
            {verificationLinks.map((item) => {
              const fullUrl = `${origin}${item.path}`
              return (
                <div
                  key={item.label}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <div className="text-sm font-semibold">{item.label}</div>
                    <a href={item.path} className="text-sm text-cyan-300 hover:text-teal-300 transition-colors break-all">
                      {fullUrl}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(item.label, fullUrl)}
                    className="ripple rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold hover:bg-white/10 transition"
                  >
                    {copiedLabel === item.label ? "Copied" : "Copy URL"}
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {faqs.map((faq) => (
            <article key={faq.q} className="glass rounded-2xl border border-white/10 p-5">
              <h4 className="font-semibold">{faq.q}</h4>
              <p className="mt-2 text-sm text-slate-300">{faq.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingPage
