import type React from "react"
import { useContact } from "../contexts/ContactContext"
import { usePageMeta } from "../hooks/usePageMeta"
import { getCheckoutProviderLabel, getCheckoutUrl, hasAnyCheckoutConfigured } from "../lib/checkout"

const plans = [
  {
    id: "launch",
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
    id: "scale",
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
    id: "enterprise",
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
] as const

const PricingPage: React.FC = () => {
  const { openContact } = useContact()
  const checkoutProviderLabel = getCheckoutProviderLabel()
  const isCheckoutReady = hasAnyCheckoutConfigured()

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
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          price: plan.price.replace(/[$,]/g, ""),
          billingDuration: plan.cadence,
        },
      })),
    },
  })

  const handleCheckout = (planId: "launch" | "scale" | "enterprise") => {
    const checkoutUrl = getCheckoutUrl(planId)

    if (checkoutUrl) {
      window.location.href = checkoutUrl
      return
    }

    openContact("hire")
  }

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
                onClick={() => handleCheckout(plan.id)}
                className={`lux-btn ripple mt-8 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-gradient-to-r from-aurora-purple via-aurora-blue to-aurora-teal text-white shadow-glow hover:shadow-glowTeal"
                    : "border border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                {getCheckoutUrl(plan.id) ? `Checkout with ${checkoutProviderLabel}` : `Choose ${plan.name}`}
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

        <div className="mt-8 rounded-3xl border border-white/10 bg-black/20 p-6 lux-card">
          <h3 className="font-display text-xl font-bold">Checkout and billing setup</h3>
          <p className="mt-2 text-sm text-slate-300">
            Secure checkout is processed by {checkoutProviderLabel} as Merchant of Record. Taxes, invoicing, and
            refund processing follow your published policies.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              Provider: {checkoutProviderLabel}
            </span>
            <span
              className={`rounded-full border px-3 py-1 text-xs ${
                isCheckoutReady
                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                  : "border-amber-400/30 bg-amber-400/10 text-amber-300"
              }`}
            >
              {isCheckoutReady ? "Live gateway checkout" : "Fallback checkout active"}
            </span>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Pricing buttons are functional now. Add provider URLs anytime to switch from fallback to live card checkout.
          </p>
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
