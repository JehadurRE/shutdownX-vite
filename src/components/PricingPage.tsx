import type React from "react"
import { useState } from "react"
import { useContact } from "../contexts/ContactContext"
import { usePageMeta } from "../hooks/usePageMeta"

const plans = [
  {
    name: "Launch",
    subtitle: "For teams launching their first automation stack",
    price: "$49",
    cadence: "per month",
    highlight: false,
    features: [
      "Core workflow automation modules",
      "Up to 5 active API integrations",
      "Webhook processing + retry logic",
      "Product documentation access",
      "Digital delivery: instant activation",
    ],
  },
  {
    name: "Scale",
    subtitle: "For growing companies with production workloads",
    price: "$199",
    cadence: "per month",
    highlight: true,
    features: [
      "All Launch features included",
      "Unlimited API integrations",
      "Advanced AI workflow modules",
      "Priority support + uptime monitoring",
      "Continuous security updates",
    ],
  },
  {
    name: "Enterprise",
    subtitle: "For enterprise deployment and governance",
    price: "$1,999",
    cadence: "per year",
    highlight: false,
    features: [
      "Full platform feature access",
      "Dedicated environment and controls",
      "SLA and audit-oriented logging",
      "Team-based access management",
      "Priority implementation guidance",
    ],
  },
]

const PricingPage: React.FC = () => {
  const { openContact } = useContact()
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null)

  usePageMeta({
    title: "Pricing | ShutdownX",
    description:
      "Explore ShutdownX software licenses and SaaS subscriptions for API automation and AI workflow products.",
    keywords: ["ShutdownX pricing", "automation software pricing", "SaaS license", "workflow automation subscription"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      name: "ShutdownX Software Plans",
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
      q: "How is the product delivered?",
      a: "All products are delivered digitally. Subscription access and license details are provided immediately after payment confirmation.",
    },
    {
      q: "Who handles checkout and taxes?",
      a: "Checkout, tax calculation, and invoicing are processed by our Merchant of Record partner, shown at checkout (Paddle or Lemon Squeezy).",
    },
    {
      q: "Are there prohibited use cases?",
      a: "Yes. Our products may not be used for spam, mass unsolicited messaging, or artificial social engagement automation.",
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
            Transparent software licensing • Instant digital delivery
          </div>
          <h1 className="type-rhythm mt-4 font-display text-4xl md:text-6xl font-extrabold grad-text">Pricing that scales with your ambition</h1>
          <p className="mt-4 text-slate-300 text-base md:text-lg">
            Choose a product license based on your workload. Plans include software access, updates, and technical documentation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`glass lux-card rounded-3xl p-7 border transition-all duration-300 ${
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
                className={`lux-btn ripple mt-8 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
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

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 lux-card">
          <h3 className="font-display text-2xl font-bold">Need enterprise controls?</h3>
          <p className="mt-2 text-slate-300">
            We provide add-on enterprise modules for governance, dedicated environments, and advanced compliance support.
          </p>
          <button
            onClick={() => openContact("hire")}
            className="lux-btn ripple mt-5 rounded-xl bg-gradient-to-r from-aurora-purple to-aurora-blue px-5 py-3 text-sm font-semibold shadow-glow hover:shadow-glowTeal transition"
          >
            Contact sales
          </button>
        </div>

        <div className="mt-10 rounded-3xl border border-aurora-blue/30 bg-gradient-to-br from-aurora-blue/10 via-white/5 to-aurora-teal/10 p-8 lux-card">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-aurora-teal/30 bg-aurora-teal/10 px-3 py-1 text-xs text-teal-200">
              Verification-ready
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              Professional policy stack
            </span>
          </div>
          <h3 className="type-rhythm mt-4 font-display text-2xl md:text-3xl font-bold">Business verification links</h3>
          <p className="mt-2 text-slate-300">
            Use these URLs in payment provider and platform verification forms.
          </p>

          <div className="mt-6 space-y-3">
            {verificationLinks.map((item) => {
              const fullUrl = `${origin}${item.path}`
              return (
                <div
                  key={item.label}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 md:flex-row md:items-center md:justify-between lux-card"
                >
                  <div>
                    <div className="text-sm font-semibold">{item.label}</div>
                    <a href={item.path} className="text-sm text-cyan-300 hover:text-teal-300 transition-colors break-all">
                      {fullUrl}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(item.label, fullUrl)}
                    className="lux-btn ripple rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold hover:bg-white/10 transition"
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
            <article key={faq.q} className="glass lux-card rounded-2xl border border-white/10 p-5">
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
