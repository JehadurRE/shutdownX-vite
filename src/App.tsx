"use client"

import { useEffect } from "react"
import Layout from "./components/Layout"
import Hero from "./components/Hero"
import Services from "./components/Services"
import WhyChoose from "./components/WhyChoose"
import About from "./components/About"
import Careers from "./components/Careers"
import CTA from "./components/CTA"
import LegalHub from "./components/LegalHub"
import Footer from "./components/Footer"
import BackgroundEffects from "./components/BackgroundEffects"
import PricingPage from "./components/PricingPage"
import ProductsPage from "./components/ProductsPage"
import TermsPage from "./components/TermsPage"
import PrivacyPage from "./components/PrivacyPage"
import RefundPolicyPage from "./components/RefundPolicyPage"
import NotFoundPage from "./components/NotFoundPage"
import CheckoutFlowPage from "./components/CheckoutFlowPage"
import { ContactProvider } from "./contexts/ContactContext"
import { setupScrollReveal, setupRippleEffects, setupTiltEffects } from "./utils/animations"
import { usePageMeta } from "./hooks/usePageMeta"

function App() {
  const pathname = (typeof window !== "undefined" ? window.location.pathname : "/").replace(/\/+$/, "") || "/"
  const isHomePage = pathname === "/"

  usePageMeta({
    title: isHomePage
      ? "ShutdownX — Automation SaaS Platform"
      : "ShutdownX",
    description: isHomePage
      ? "ShutdownX provides automation-first SaaS products for workflow orchestration, API integrations, and AI-powered operations."
      : "ShutdownX provides automation software, AI workflows, and SaaS product infrastructure.",
    keywords: isHomePage
      ? ["automation SaaS", "workflow orchestration", "LLM automation", "API integrations", "ShutdownX"]
      : ["ShutdownX", "automation software", "SaaS platform"],
    structuredData: isHomePage
      ? {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "ShutdownX",
              url: typeof window !== "undefined" ? window.location.origin : "https://shutdownx.com",
              logo: `${typeof window !== "undefined" ? window.location.origin : "https://shutdownx.com"}/og-image.svg`,
            },
            {
              "@type": "WebSite",
              name: "ShutdownX",
              url: typeof window !== "undefined" ? window.location.origin : "https://shutdownx.com",
            },
          ],
        }
      : undefined,
  })

  useEffect(() => {
    if (!isHomePage) return

    // Initialize animations and interactions
    const scrollObserver = setupScrollReveal()
    setupRippleEffects()
    setupTiltEffects()

    const hash = window.location.hash.replace("#", "")
    if (hash) {
      requestAnimationFrame(() => {
        const section = document.getElementById(hash)
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      })
    }

    return () => {
      scrollObserver.disconnect()
    }
  }, [isHomePage])

  const renderPage = () => {
    if (pathname === "/pricing") {
      return <PricingPage />
    }

    if (pathname === "/products") {
      return <ProductsPage />
    }

    if (pathname === "/terms-and-conditions") {
      return <TermsPage />
    }

    if (pathname === "/privacy") {
      return <PrivacyPage />
    }

    if (pathname === "/refund") {
      return <RefundPolicyPage />
    }

    if (pathname === "/checkout") {
      return <CheckoutFlowPage />
    }

    if (
      pathname !== "/" &&
      pathname !== "/pricing" &&
      pathname !== "/products" &&
      pathname !== "/terms-and-conditions" &&
      pathname !== "/privacy" &&
      pathname !== "/refund" &&
      pathname !== "/checkout"
    ) {
      return <NotFoundPage />
    }

    return (
      <>
        <Hero />
        <Services />
        <WhyChoose />
        <About />
        <Careers />
        <LegalHub />
        <CTA />
      </>
    )
  }

  return (
    <ContactProvider>
      <div className="bg-[var(--bg-grad)] bg-ink text-slate-100 antialiased min-h-screen">
        <BackgroundEffects />
        <Layout>
          {renderPage()}
        </Layout>
        <Footer />
      </div>
    </ContactProvider>
  )
}

export default App
