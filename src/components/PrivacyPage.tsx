import type React from "react"
import { usePageMeta } from "../hooks/usePageMeta"

const PrivacyPage: React.FC = () => {
  const updatedOn = "April 3, 2026"

  usePageMeta({
    title: "Privacy Policy | ShutdownX",
    description: "Review how ShutdownX collects account data, secures information, and uses merchant-of-record payment processing.",
    keywords: ["ShutdownX privacy", "payment data", "merchant of record privacy"],
  })

  return (
    <section id="privacy" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="glass lux-card rounded-3xl p-8 md:p-10 border border-white/10">
          <h1 className="type-rhythm font-display text-4xl md:text-5xl font-extrabold grad-text">Privacy Policy</h1>
          <p className="mt-3 text-sm text-slate-400">Last updated: {updatedOn}</p>

          <div className="mt-8 space-y-7 text-slate-200">
            <section>
              <h2 className="font-display text-2xl font-bold">1. Information We Collect</h2>
              <p className="mt-2 text-slate-300">
                We collect account and contact information such as name, business name, email address, and product usage
                data required to operate and support your software license.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">2. How We Use Information</h2>
              <p className="mt-2 text-slate-300">
                We use data to provision licenses, deliver software access, provide support, maintain security, and send
                essential product notices.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">3. Legal Basis and Consent</h2>
              <p className="mt-2 text-slate-300">
                Where required, we process data based on consent, contractual necessity, legal obligations, or
                legitimate business interests.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">4. Payment Processing</h2>
              <p className="mt-2 text-slate-300">
                We do not store full card details. Payments are processed by our Merchant of Record partner shown at
                checkout (Paddle.com or LemonSqueezy.com), which handles payment data under its own privacy and security
                policies.
              </p>
              <p className="mt-2 text-slate-300 text-sm">
                Payment processor policies:
                <a href="https://www.paddle.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="ml-1 text-aurora-blue hover:text-teal-300 transition-colors lux-link">
                  Paddle Privacy
                </a>
                <span className="mx-1">•</span>
                <a href="https://www.lemonsqueezy.com/privacy" target="_blank" rel="noopener noreferrer" className="text-aurora-blue hover:text-teal-300 transition-colors lux-link">
                  Lemon Squeezy Privacy
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">5. Data Sharing</h2>
              <p className="mt-2 text-slate-300">
                We do not sell personal data. We may share limited data with trusted vendors for hosting, analytics, and
                customer support under contractual safeguards.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">6. Data Retention and Security</h2>
              <p className="mt-2 text-slate-300">
                We keep data only as long as needed for legal, operational, and support obligations. We apply
                administrative, technical, and organizational safeguards to protect personal information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">7. Your Rights</h2>
              <p className="mt-2 text-slate-300">
                Depending on your location, you may request access, correction, deletion, or export of your personal
                data, and object to specific processing activities.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">8. Cookies and Tracking</h2>
              <p className="mt-2 text-slate-300">
                We may use essential cookies for authentication and session management. We do not use third-party advertising trackers.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">9. Contact for Privacy Requests</h2>
              <p className="mt-2 text-slate-300">
                Send privacy-related requests to hello@shutdownx.com with "Privacy Request" in the subject.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPage
