import type React from "react"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const renderSocialIcon = (label: string) => {
    if (label === "X / Twitter") {
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" className="opacity-90">
          <path
            fill="currentColor"
            d="M18.244 2H21l-6.42 7.34L22.13 22h-5.91l-4.63-6.06L6.3 22H3.54l6.87-7.86L1.87 2h6.06l4.18 5.53L18.244 2Zm-1 18.3h1.64L7.06 3.62H5.3L17.244 20.3Z"
          />
        </svg>
      )
    }

    if (label === "GitHub") {
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" className="opacity-90">
          <path
            fill="currentColor"
            d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.88 1.52 2.31 1.08 2.87.82.09-.64.35-1.08.64-1.33-2.22-.26-4.56-1.11-4.56-4.93 0-1.08.39-1.96 1.03-2.65-.1-.25-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.01a9.47 9.47 0 0 1 5 0c1.9-1.28 2.74-1 2.74-1 .55 1.4.21 2.45.1 2.7.64.69 1.03 1.57 1.03 2.65 0 3.83-2.35 4.66-4.58 4.92.36.32.69.94.69 1.9v2.82c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
          />
        </svg>
      )
    }

    return (
      <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" className="opacity-90">
        <path
          fill="currentColor"
          d="M20.45 20.45h-3.56v-5.59c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.69H9.32V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22 0H2C.9 0 0 .87 0 1.94v20.12C0 23.13.9 24 2 24h20c1.1 0 2-.87 2-1.94V1.94C24 .87 23.1 0 22 0Z"
        />
      </svg>
    )
  }

  const legalLinks = [
    { label: "Products", href: "/products" },
    { label: "Pricing", href: "/pricing" },
    { label: "Terms of Service", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Refund Policy", href: "/refund" },
  ]

  const socialLinks = [
    { label: "X / Twitter", href: "https://twitter.com/jehadurre" },
    { label: "GitHub", href: "https://github.com/jehadurre" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jehadurre" },
  ]

  return (
    <footer className="py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass rounded-3xl border border-white/10 p-6 md:p-8 shadow-glow">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 bg-black/30 shadow-glow">
                  <img src="/brand-logo.png" alt="ShutdownX logo" className="h-full w-full object-contain" />
                </div>
                <div>
                  <div className="font-display text-lg font-bold">ShutdownX</div>
                  <div className="text-xs text-slate-400">AI-native product engineering</div>
                </div>
              </div>
              <p className="mt-4 max-w-md text-sm text-slate-300">
                Premium automation software and SaaS products built for reliable business operations.
              </p>
              <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                Verification-ready legal pages live
              </div>
              <div className="mt-4 space-y-1 text-xs text-slate-400">
                <div>
                  Support: <a href="mailto:hello@shutdownx.com" className="text-slate-300 hover:text-teal-300 transition-colors lux-link">hello@shutdownx.com</a>
                </div>
                <div>Business Address: Dhaka, Bangladesh</div>
                <div>Secure checkout with enterprise-grade payment processing</div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-200">Legal & Pricing</h4>
              <div className="mt-3 grid grid-cols-1 gap-2 text-sm">
                {legalLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="lux-link rounded-lg border border-transparent px-2 py-1 text-slate-300 transition hover:border-white/10 hover:bg-white/5 hover:text-teal-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-200">Social</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 transition hover:border-aurora-blue/40 hover:text-teal-300 lux-card"
                  >
                    {renderSocialIcon(social.label)}
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-4 flex flex-col gap-2 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
            <div>© {currentYear} ShutdownX. All rights reserved.</div>
            <div>Built with performance, accessibility, and premium UX standards.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
