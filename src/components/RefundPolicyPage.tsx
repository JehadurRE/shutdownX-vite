import type React from "react"
import { usePageMeta } from "../hooks/usePageMeta"

const RefundPolicyPage: React.FC = () => {
  const updatedOn = "April 3, 2026"

  usePageMeta({
    title: "Refund Policy | ShutdownX",
    description: "Understand ShutdownX software subscription refunds, cancellation timelines, and merchant-of-record processing.",
    keywords: ["ShutdownX refund", "SaaS refund policy", "14-day money-back"],
  })

  return (
    <section id="refund" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="glass lux-card rounded-3xl p-8 md:p-10 border border-white/10">
          <h1 className="type-rhythm font-display text-4xl md:text-5xl font-extrabold grad-text">Refund Policy</h1>
          <p className="mt-3 text-sm text-slate-400">Last updated: {updatedOn}</p>

          <div className="mt-8 space-y-7 text-slate-200">
            <section>
              <h2 className="font-display text-2xl font-bold">1. Scope</h2>
              <p className="mt-2 text-slate-300">
                This policy applies to all ShutdownX digital products, software licenses, and SaaS subscriptions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">2. 14-Day Money-Back Guarantee</h2>
              <p className="mt-2 text-slate-300">
                First-time purchases are eligible for a full refund within 14 days if the product does not function as
                described and our support team cannot resolve the issue.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">3. Subscription Cancellations</h2>
              <p className="mt-2 text-slate-300">
                Subscriptions can be canceled any time before renewal to avoid the next charge. Cancellation prevents
                future billing and access continues until the end of the active billing period.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">4. Non-Refundable Cases</h2>
              <p className="mt-2 text-slate-300">
                Refunds are generally not provided for renewals older than 14 days, policy abuse, or issues caused by
                customer-side modifications outside documented product use.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">5. Merchant of Record Processing</h2>
              <p className="mt-2 text-slate-300">
                Approved refunds are issued by the Merchant of Record used at checkout (Paddle.com or LemonSqueezy.com)
                to your original payment method.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">6. Request Process</h2>
              <p className="mt-2 text-slate-300">
                Submit refund requests to hello@shutdownx.com within 14 days of purchase and include your order ID and
                issue details. We review in good faith and respond within 7 business days.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">7. Chargebacks</h2>
              <p className="mt-2 text-slate-300">
                We encourage you to contact us before initiating a chargeback. Chargebacks may result in immediate account suspension and may affect future purchase eligibility.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RefundPolicyPage
