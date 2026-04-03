export type PlanId = "launch" | "scale" | "enterprise"

const configuredProvider = (import.meta.env.VITE_PAYMENT_PROVIDER ?? "paddle").toLowerCase()

const activeProvider: "paddle" | "lemon" = configuredProvider === "lemon" ? "lemon" : "paddle"

const providerMap: Record<"paddle" | "lemon", Record<PlanId, string | undefined>> = {
  paddle: {
    launch: import.meta.env.VITE_PADDLE_CHECKOUT_LAUNCH_URL,
    scale: import.meta.env.VITE_PADDLE_CHECKOUT_SCALE_URL,
    enterprise: import.meta.env.VITE_PADDLE_CHECKOUT_ENTERPRISE_URL,
  },
  lemon: {
    launch: import.meta.env.VITE_LEMON_CHECKOUT_LAUNCH_URL,
    scale: import.meta.env.VITE_LEMON_CHECKOUT_SCALE_URL,
    enterprise: import.meta.env.VITE_LEMON_CHECKOUT_ENTERPRISE_URL,
  },
}

const genericMap: Record<PlanId, string | undefined> = {
  launch: import.meta.env.VITE_CHECKOUT_LAUNCH_URL,
  scale: import.meta.env.VITE_CHECKOUT_SCALE_URL,
  enterprise: import.meta.env.VITE_CHECKOUT_ENTERPRISE_URL,
}

export const getCheckoutProviderLabel = () => (activeProvider === "lemon" ? "Lemon Squeezy" : "Paddle")

export const getCheckoutUrl = (planId: PlanId): string | null => {
  const providerUrl = providerMap[activeProvider][planId]
  const genericUrl = genericMap[planId]
  const url = providerUrl || genericUrl
  if (url && url.trim().length > 0) {
    return url.trim()
  }

  return `/checkout?plan=${planId}`
}

export const hasAnyCheckoutConfigured = () => {
  return ["launch", "scale", "enterprise"].some((id) => {
    const planId = id as PlanId
    return Boolean(providerMap[activeProvider][planId] || genericMap[planId])
  })
}
