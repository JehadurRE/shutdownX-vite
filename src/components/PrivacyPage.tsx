import type React from "react"
import { usePageMeta } from "../hooks/usePageMeta"

const PrivacyPage: React.FC = () => {
  const updatedOn = "April 3, 2026"

  usePageMeta({
    title: "Privacy Policy | ShutdownX",
    description: "Review how ShutdownX collects, uses, secures, and manages personal information and privacy rights.",
    keywords: ["ShutdownX privacy", "privacy policy", "data protection"],
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
                We may collect contact details, project requirements, analytics data, and communication history when you
                interact with our website or services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">2. How We Use Information</h2>
              <p className="mt-2 text-slate-300">
                We use your information to respond to inquiries, deliver services, improve user experience, and maintain
                service security.
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
              <h2 className="font-display text-2xl font-bold">4. Data Sharing</h2>
              <p className="mt-2 text-slate-300">
                We do not sell personal data. We may share data with trusted service providers for hosting, analytics,
                and operations under contractual protections.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">5. Data Retention and Security</h2>
              <p className="mt-2 text-slate-300">
                We retain data only as long as necessary and apply administrative, technical, and organizational
                safeguards to protect it.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">6. Your Rights</h2>
              <p className="mt-2 text-slate-300">
                Depending on your location, you may request access, correction, deletion, or export of your personal
                data, and object to certain processing.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">7. Contact for Privacy Requests</h2>
              <p className="mt-2 text-slate-300">
                Send privacy-related requests via our contact form and include “Privacy Request” in the message subject.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPage
