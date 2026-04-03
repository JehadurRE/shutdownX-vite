import type React from "react"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { useParallax } from "../hooks/useParallax"

interface CheckItemProps {
  index: number
  title: string
  description: string
  metric: string
  delay?: number
}

const CheckItem: React.FC<CheckItemProps> = ({ index, title, description, metric, delay = 0 }) => {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`flex items-start gap-4 glass lux-card rounded-2xl p-4 md:p-5 reveal transition-all duration-700 hover:shadow-glow ${
        isVisible ? "in-view" : ""
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-aurora-teal/20 border border-aurora-teal/40 flex-shrink-0 text-xs font-bold text-teal-300">
        {index}
      </span>
      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-aurora-blue/15 border border-aurora-blue/40 flex-shrink-0">
        <svg viewBox="0 0 24 24" width="16" height="16" className="text-aurora-teal">
          <path fill="currentColor" d="M9 16.2 4.8 12l1.4-1.4L9 13.4 17.8 4.6l1.4 1.4z" />
        </svg>
      </span>
      <div className="flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="font-semibold text-slate-100">{title}</div>
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300">{metric}</span>
        </div>
        <div className="mt-1 text-slate-300 text-sm">{description}</div>
      </div>
    </div>
  )
}

const WhyChoose: React.FC = () => {
  const { ref, isVisible } = useScrollReveal()
  const parallaxRef1 = useParallax(0.12)
  const parallaxRef2 = useParallax(-0.08)

  const benefits = [
    {
      title: "Senior execution, not junior trial-and-error",
      description: "Direct access to experienced product builders with clear technical ownership.",
      metric: "Lead-only delivery",
    },
    {
      title: "Speed with engineering discipline",
      description: "Rapid shipping cadence with maintainable architecture and clean code standards.",
      metric: "Weekly milestones",
    },
    {
      title: "AI-native by design",
      description: "LLM workflows, automation, and evaluation loops integrated from day one.",
      metric: "Outcome-focused AI",
    },
    {
      title: "Radical clarity and accountability",
      description: "Transparent scope, progress visibility, and decision-ready communication every sprint.",
      metric: "No black-box delivery",
    },
  ]

  const kpis = [
    { label: "Avg. kickoff time", value: "7 days", trend: "Fast onboarding" },
    { label: "Delivery confidence", value: "98%", trend: "Milestone adherence" },
    { label: "Infrastructure uptime", value: "99.9%", trend: "Reliability-first" },
    { label: "Automation impact", value: "3.4x", trend: "Operational lift" },
  ]

  const weeklyVelocity = [62, 68, 72, 79, 84, 90, 95]
  const velocityLinePoints = weeklyVelocity
    .map((value, index) => {
      const x = (index / (weeklyVelocity.length - 1)) * 100
      const y = 100 - value
      return `${x},${y}`
    })
    .join(" ")

  return (
    <section id="why" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          <div ref={ref}>
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur reveal transition-all duration-1000 ${
                isVisible ? "in-view" : ""
              }`}
            >
              Why founders choose us
            </div>
            <h2
              className={`type-rhythm mt-4 font-display text-3xl md:text-5xl font-bold reveal transition-all duration-1000 ${
                isVisible ? "in-view" : ""
              }`}
            >
              Premium execution with measurable outcomes
            </h2>
            <p
              className={`mt-3 text-slate-300 reveal transition-all duration-1000 delay-200 ${
                isVisible ? "in-view" : ""
              }`}
            >
              We combine product strategy, AI engineering, and design precision to build systems that perform at
              scale.
            </p>
            <div className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <CheckItem
                  key={benefit.title}
                  index={index + 1}
                  title={benefit.title}
                  description={benefit.description}
                  metric={benefit.metric}
                  delay={400 + index * 100}
                />
              ))}
            </div>

            <div
              className={`mt-6 flex flex-wrap gap-2 reveal transition-all duration-1000 delay-700 ${
                isVisible ? "in-view" : ""
              }`}
            >
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">Security-minded</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">Design-led delivery</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">Transparent roadmap</span>
            </div>
          </div>

          {/* Visual metrics */}
          <div className="relative">
            <div
              className={`h-full w-full min-h-[420px] glass rounded-3xl p-5 md:p-6 overflow-hidden reveal transition-all duration-1000 delay-600 ${
                isVisible ? "in-view" : ""
              }`}
            >
              <div className="absolute inset-0 opacity-50">
                <div
                  ref={parallaxRef1}
                  className="absolute -right-16 -top-16 h-80 w-80 rounded-full bg-gradient-to-br from-aurora-purple/30 to-aurora-blue/20 blur-3xl"
                />
                <div
                  ref={parallaxRef2}
                  className="absolute -left-10 -bottom-24 h-72 w-72 rounded-full bg-gradient-to-tr from-aurora-teal/30 to-aurora-blue/20 blur-3xl"
                />
              </div>
              <div className="relative">
                <div className="glass lux-card rounded-2xl p-4 md:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm text-slate-400">Performance confidence</div>
                      <div className="mt-1 font-display text-2xl md:text-3xl font-bold">Enterprise-grade delivery</div>
                    </div>
                    <div className="text-xs text-emerald-300 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1">
                      Live systems
                    </div>
                  </div>
                  <div className="mt-4 h-2 w-full rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full w-11/12 bg-gradient-to-r from-aurora-purple via-aurora-blue to-aurora-teal relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 glass lux-card rounded-2xl p-4 md:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm text-slate-400">Execution velocity</div>
                      <div className="mt-1 font-semibold">Weekly KPI momentum</div>
                    </div>
                    <div className="rounded-full border border-aurora-blue/40 bg-aurora-blue/10 px-2.5 py-1 text-xs text-cyan-300">
                      +18% trend
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-7 gap-2 items-end h-24">
                    {weeklyVelocity.map((value, index) => (
                      <div key={`${value}-${index}`} className="relative h-full flex items-end justify-center">
                        <div
                          className="w-4 rounded-t-md bg-gradient-to-t from-aurora-purple/70 via-aurora-blue/80 to-aurora-teal/80 animate-pulseSoft"
                          style={{ height: `${value}%`, animationDelay: `${index * 120}ms` }}
                        ></div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 relative h-10">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                      <polyline
                        points={velocityLinePoints}
                        fill="none"
                        stroke="rgba(34,211,238,0.9)"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.9)] animate-pulseSoft"></div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {kpis.map((kpi) => (
                    <div key={kpi.label} className="glass lux-card rounded-2xl p-4">
                      <div className="text-xs text-slate-400">{kpi.label}</div>
                      <div className="mt-1 text-2xl font-bold">{kpi.value}</div>
                      <div className="mt-1 text-xs text-teal-300">{kpi.trend}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-slate-300">
                    “ShutdownX helped us move from idea to validated product with a speed and polish we had not seen
                    before.”
                  </p>
                  <div className="mt-2 text-xs text-slate-400">— Product Lead, Growth-stage SaaS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
