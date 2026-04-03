import type React from "react"
import { usePageMeta } from "../hooks/usePageMeta"

const products = [
  {
    id: "workflow-automation",
    name: "Workflow Automation Engine",
    tagline: "n8n + FastAPI orchestration",
    description: "Pre-built automation workflows with webhook processing, retry logic, and API integrations. Connect your tools and automate repetitive tasks.",
    features: [
      "Visual workflow builder integration",
      "Webhook processing with retry logic",
      "API connector library (Meta, Slack, etc.)",
      "Error handling and monitoring",
      "Scheduled task execution",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" className="text-aurora-teal">
        <path fill="currentColor" d="M3 7h6v6H3V7Zm12 0h6v6h-6V7ZM9 17h6v4H9v-4Z" />
        <path fill="currentColor" d="M9 10h6v2H9zM6 13h2v2H6zM16 13h2v2h-2zM11 15h2v2h-2z" />
      </svg>
    ),
  },
  {
    id: "ai-llm-orchestration",
    name: "AI & LLM Orchestration",
    tagline: "Production-ready AI workflows",
    description: "Configurable LLM pipelines with retrieval, evaluation, and guardrails. Build AI-powered features without managing infrastructure.",
    features: [
      "Multi-model LLM routing",
      "RAG (Retrieval Augmented Generation)",
      "Prompt template management",
      "Response evaluation and filtering",
      "Token usage tracking",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" className="text-aurora-purple">
        <path
          fill="currentColor"
          d="M12 2a3 3 0 0 1 3 3v1h1a3 3 0 0 1 3 3v1h1a3 3 0 0 1 0 6h-1v1a3 3 0 0 1-3 3h-1v1a3 3 0 0 1-6 0v-1H8a3 3 0 0 1-3-3v-1H4a3 3 0 0 1 0-6h1V9a3 3 0 0 1 3-3h1V5a3 3 0 0 1 3-3Z"
        />
      </svg>
    ),
  },
  {
    id: "api-integration-hub",
    name: "API Integration Hub",
    tagline: "Unified API management",
    description: "Centralized API integration layer with authentication, rate limiting, and monitoring. Connect to third-party services securely.",
    features: [
      "OAuth 2.0 and API key management",
      "Rate limiting and quota tracking",
      "Request/response logging",
      "Webhook receiver endpoints",
      "API health monitoring",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" className="text-aurora-blue">
        <path fill="currentColor" d="M4 6h16v4H4V6Zm0 6h16v6H4v-6Zm2 2v2h12v-2H6Z" />
      </svg>
    ),
  },
  {
    id: "dashboard-platform",
    name: "Dashboard Platform",
    tagline: "Production-grade admin interfaces",
    description: "Pre-built dashboard components and templates for data visualization, user management, and system monitoring.",
    features: [
      "Responsive dashboard layouts",
      "Data visualization components",
      "User authentication UI",
      "Real-time data updates",
      "Export and reporting tools",
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" className="text-aurora-teal">
        <path fill="currentColor" d="M3 3h8v8H3V3Zm10 0h8v8h-8V3ZM3 13h8v8H3v-8Zm10 0h8v8h-8v-8Z" />
      </svg>
    ),
  },
]

const ProductsPage: React.FC = () => {
  usePageMeta({
    title: "Products | ShutdownX",
    description: "Explore ShutdownX software products: workflow automation, AI orchestration, API integrations, and dashboard platforms.",
    keywords: ["ShutdownX products", "automation software", "AI orchestration", "API integration"],
  })

  return (
    <section id="products" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl reveal in-view">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            Software products • Digital delivery
          </div>
          <h1 className="type-rhythm mt-4 font-display text-4xl md:text-6xl font-extrabold grad-text">
            Production-ready software modules
          </h1>
          <p className="mt-4 text-slate-300 text-base md:text-lg">
            Each product is delivered as a complete software module with documentation, updates, and support included in your subscription.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.id}
              className="glass lux-card rounded-3xl p-7 border border-white/10 transition-all duration-300 hover:border-aurora-blue/50 hover:shadow-glow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">{product.icon}</div>
                <div className="flex-1">
                  <h2 className="font-display text-2xl font-bold">{product.name}</h2>
                  <p className="text-sm text-aurora-blue">{product.tagline}</p>
                </div>
              </div>

              <p className="mt-4 text-slate-300">{product.description}</p>

              <div className="mt-6">
                <div className="text-sm font-semibold text-slate-200 mb-3">Included features:</div>
                <ul className="space-y-2 text-sm text-slate-300">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-aurora-teal flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Available in all plans</span>
                <a
                  href="/pricing"
                  className="text-sm text-aurora-blue hover:text-teal-300 transition-colors underline underline-offset-4"
                >
                  View pricing →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 glass lux-card rounded-3xl p-8 border border-white/10">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold">Enterprise add-ons</h3>
              <p className="mt-2 text-slate-300">
                Need dedicated environments, custom integrations, or compliance features? Enterprise plans include advanced modules.
              </p>
            </div>
            <a
              href="/pricing"
              className="lux-btn ripple rounded-xl bg-gradient-to-r from-aurora-purple to-aurora-blue px-5 py-3 text-sm font-semibold shadow-glow hover:shadow-glowTeal transition whitespace-nowrap"
            >
              View plans
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="glass lux-card rounded-2xl border border-white/10 p-5">
            <h4 className="font-semibold">Digital delivery</h4>
            <p className="mt-2 text-sm text-slate-300">
              Instant access upon payment confirmation. No physical shipping or manual provisioning.
            </p>
          </div>
          <div className="glass lux-card rounded-2xl border border-white/10 p-5">
            <h4 className="font-semibold">Continuous updates</h4>
            <p className="mt-2 text-slate-300 text-sm">
              Security patches, feature updates, and documentation improvements included in your subscription.
            </p>
          </div>
          <div className="glass lux-card rounded-2xl border border-white/10 p-5">
            <h4 className="font-semibold">Technical support</h4>
            <p className="mt-2 text-slate-300 text-sm">
              Email support for all plans. Priority support and implementation guidance for Enterprise.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsPage
