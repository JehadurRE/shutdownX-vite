import type React from "react"
import { usePageMeta } from "../hooks/usePageMeta"

const RefundPolicyPage: React.FC = () => {
  const updatedOn = "April 3, 2026"

  usePageMeta({
    title: "Refund Policy | ShutdownX",
    description: "Understand ShutdownX refund terms, milestone billing rules, cancellations, and request timelines.",
    keywords: ["ShutdownX refund", "refund policy", "billing policy"],
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
                This policy applies to all ShutdownX service engagements, including strategy, design, development, and
                automation implementation.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">2. Deposits</h2>
              <p className="mt-2 text-slate-300">
                Project deposits secure scheduling and are generally non-refundable once project onboarding has started.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">3. Milestone Payments</h2>
              <p className="mt-2 text-slate-300">
                Refunds for milestone payments are evaluated only for undelivered portions of work. Completed
                deliverables and approved milestones are non-refundable.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">4. Subscription Services</h2>
              <p className="mt-2 text-slate-300">
                Monthly retainers can be canceled before the next billing cycle. Partial month refunds are not provided
                unless required by law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">5. Chargebacks</h2>
              <p className="mt-2 text-slate-300">
                Before opening a chargeback, contact us directly to resolve concerns. Fraudulent chargebacks may result
                in suspension of active services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">6. Request Process</h2>
              <p className="mt-2 text-slate-300">
                Submit refund requests within 14 days of the relevant invoice date with project details and rationale.
                We review each request in good faith and respond within 7 business days.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RefundPolicyPage
