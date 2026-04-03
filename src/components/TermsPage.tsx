import type React from "react"
import { usePageMeta } from "../hooks/usePageMeta"

const TermsPage: React.FC = () => {
  const updatedOn = "April 3, 2026"

  usePageMeta({
    title: "Terms and Conditions | ShutdownX",
    description: "Read ShutdownX Terms and Conditions for software licenses, subscriptions, merchant-of-record checkout, and acceptable use.",
    keywords: ["ShutdownX terms", "software license terms", "merchant of record"],
  })

  return (
    <section id="terms" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="glass lux-card rounded-3xl p-8 md:p-10 border border-white/10">
          <h1 className="type-rhythm font-display text-4xl md:text-5xl font-extrabold grad-text">Terms of Service</h1>
          <p className="mt-3 text-sm text-slate-400">Last updated: {updatedOn}</p>

          <div className="mt-8 space-y-7 text-slate-200">
            <section>
              <h2 className="font-display text-2xl font-bold">1. Agreement to Terms</h2>
              <p className="mt-2 text-slate-300">
                By accessing ShutdownX products, website, or checkout pages, you agree to these Terms. If you do not
                agree, do not use the platform.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">2. Product License</h2>
              <p className="mt-2 text-slate-300">
                ShutdownX provides software licenses and SaaS subscriptions for workflow automation and API-based
                operations. Purchase grants a non-exclusive, non-transferable right to use the product according to your
                selected plan.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">3. Merchant of Record and Payments</h2>
              <p className="mt-2 text-slate-300">
                Our checkout is processed by a Merchant of Record partner shown at checkout (Paddle.com or
                LemonSqueezy.com). The Merchant of Record is the seller of record for billing, tax collection, invoices,
                and refund processing.
              </p>
              <p className="mt-2 text-slate-300 text-sm">
                Reference policies:
                <a href="https://www.paddle.com/legal/terms" target="_blank" rel="noopener noreferrer" className="ml-1 text-aurora-blue hover:text-teal-300 transition-colors lux-link">
                  Paddle Terms
                </a>
                <span className="mx-1">•</span>
                <a href="https://www.lemonsqueezy.com/terms" target="_blank" rel="noopener noreferrer" className="text-aurora-blue hover:text-teal-300 transition-colors lux-link">
                  Lemon Squeezy Terms
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">4. Digital Delivery</h2>
              <p className="mt-2 text-slate-300">
                All products are delivered digitally by account activation, license provisioning, or email instructions
                after successful payment.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">5. Acceptable Use</h2>
              <p className="mt-2 text-slate-300">
                You may not use ShutdownX products for illegal activity, malware distribution, unauthorized surveillance,
                spam campaigns, or artificial social engagement manipulation.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">6. Prohibited Use Cases</h2>
              <p className="mt-2 text-slate-300">
                Specifically prohibited: spam or mass unsolicited messaging, artificial social media engagement automation (fake likes, followers, views, reviews), unauthorized data scraping, keyloggers or spyware, and any activity that violates third-party platform terms of service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">7. Intellectual Property</h2>
              <p className="mt-2 text-slate-300">
                ShutdownX retains ownership of platform code, trademarks, and documentation. Customers retain ownership
                of their own data and content processed through the platform.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">8. Warranties and Liability</h2>
              <p className="mt-2 text-slate-300">
                The product is provided on an "as is" and "as available" basis. To the maximum extent allowed by law,
                ShutdownX is not liable for indirect or consequential losses.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">9. Refunds and Cancellations</h2>
              <p className="mt-2 text-slate-300">
                Refund eligibility and cancellation terms are provided in our refund policy at
                <a href="/refund" className="ml-1 text-aurora-blue hover:text-teal-300 transition-colors lux-link">
                  /refund
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">10. Contact</h2>
              <p className="mt-2 text-slate-300">
                For legal requests, contact hello@shutdownx.com and include "Legal Request" in the subject.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TermsPage
