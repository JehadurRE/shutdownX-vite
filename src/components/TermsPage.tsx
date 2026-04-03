import type React from "react"
import { usePageMeta } from "../hooks/usePageMeta"

const TermsPage: React.FC = () => {
  const updatedOn = "April 3, 2026"

  usePageMeta({
    title: "Terms and Conditions | ShutdownX",
    description: "Read ShutdownX Terms and Conditions for service scope, payment terms, IP, confidentiality, and liability.",
    keywords: ["ShutdownX terms", "terms and conditions", "service agreement"],
  })

  return (
    <section id="terms" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="glass rounded-3xl p-8 md:p-10 border border-white/10">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold grad-text">Terms and Conditions</h1>
          <p className="mt-3 text-sm text-slate-400">Last updated: {updatedOn}</p>

          <div className="mt-8 space-y-7 text-slate-200">
            <section>
              <h2 className="font-display text-2xl font-bold">1. Agreement to Terms</h2>
              <p className="mt-2 text-slate-300">
                By using ShutdownX services, you agree to these Terms. If you do not agree, please do not use our
                website or engage our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">2. Services</h2>
              <p className="mt-2 text-slate-300">
                We provide product design, AI engineering, automation development, and advisory services. Scope,
                deliverables, and timelines are finalized in signed proposals or statements of work.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">3. Fees and Payments</h2>
              <p className="mt-2 text-slate-300">
                Fees are due as specified in your agreement. Late payments may pause active work and delivery schedules
                until payment is received.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">4. Intellectual Property</h2>
              <p className="mt-2 text-slate-300">
                Upon full payment, client-owned deliverables are assigned to the client, except for pre-existing tools,
                templates, and libraries owned by ShutdownX or third parties.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">5. Confidentiality</h2>
              <p className="mt-2 text-slate-300">
                Both parties agree to protect confidential information and use it only for the purpose of delivering the
                agreed services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">6. Warranties and Liability</h2>
              <p className="mt-2 text-slate-300">
                Services are provided on a best-effort basis. To the maximum extent allowed by law, ShutdownX is not
                liable for indirect or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">7. Refunds and Cancellations</h2>
              <p className="mt-2 text-slate-300">
                Refund eligibility and cancellation terms follow our refund policy available at
                <a href="/refund" className="ml-1 text-aurora-blue hover:text-teal-300 transition-colors">
                  /refund
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">8. Contact</h2>
              <p className="mt-2 text-slate-300">
                For legal questions, contact us through the website contact form and include “Legal Request” in your
                message subject.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TermsPage
