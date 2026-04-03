import type React from "react"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 bg-black/30 shadow-glow">
              <img src="/brand-logo.png" alt="ShutdownX logo" className="h-full w-full object-cover" />
            </div>
            <div className="text-sm text-slate-400">© {currentYear} ShutdownX. All rights reserved.</div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="/pricing" className="hover:text-teal-300 transition-colors">
              Pricing
            </a>
            <a href="/terms-and-conditions" className="hover:text-teal-300 transition-colors">
              Terms of Service
            </a>
            <a href="/privacy" className="hover:text-teal-300 transition-colors">
              Privacy Policy
            </a>
            <a href="/refund" className="hover:text-teal-300 transition-colors">
              Refund Policy
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition-colors"
            >
              X / Twitter
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-300 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
