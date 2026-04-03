/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PAYMENT_PROVIDER?: "paddle" | "lemon"
  readonly VITE_CHECKOUT_LAUNCH_URL?: string
  readonly VITE_CHECKOUT_SCALE_URL?: string
  readonly VITE_CHECKOUT_ENTERPRISE_URL?: string
  readonly VITE_PADDLE_CHECKOUT_LAUNCH_URL?: string
  readonly VITE_PADDLE_CHECKOUT_SCALE_URL?: string
  readonly VITE_PADDLE_CHECKOUT_ENTERPRISE_URL?: string
  readonly VITE_LEMON_CHECKOUT_LAUNCH_URL?: string
  readonly VITE_LEMON_CHECKOUT_SCALE_URL?: string
  readonly VITE_LEMON_CHECKOUT_ENTERPRISE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
