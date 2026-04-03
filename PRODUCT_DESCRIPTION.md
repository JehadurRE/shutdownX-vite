# Product Description for Paddle/Lemon Squeezy Application

## Copy this into the "Tell us about your product" field:

ShutdownX provides a suite of cloud-based automation tools and specialized SaaS solutions designed to optimize business workflows. Our flagship product is an API-driven automation engine that allows businesses to sync data across platforms, manage messaging webhooks (including Meta Graph API integrations), and automate repetitive backend tasks.

We sell digital software licenses and tiered monthly subscriptions that provide users with access to our proprietary software, technical documentation, and regular security updates. All products are delivered digitally immediately upon purchase.

Our software includes:
- Workflow automation modules (n8n + FastAPI integrations)
- AI-powered LLM orchestration tools
- API integration management hub
- Dashboard platform components
- Webhook processing with retry logic

All products are off-the-shelf software licenses - not custom development services. Customers receive instant access to our platform upon successful payment.

---

## Application Links

Provide these URLs in your Paddle/Lemon Squeezy application:

- **Website**: https://your-domain.com
- **Pricing**: https://your-domain.com/pricing
- **Terms**: https://your-domain.com/terms-and-conditions
- **Privacy**: https://your-domain.com/privacy
- **Refund**: https://your-domain.com/refund

---

## Business Information

- **Business name**: ShutdownX
- **Support email**: hello@shutdownx.com
- **Business address**: [Your full address in Dhaka, Bangladesh]
- **VAT/BIN**: [If available]

---

## After Approval

1. Copy `.env.example` to `.env`
2. Set `VITE_PAYMENT_PROVIDER=paddle` or `lemon`
3. Add your checkout URLs from dashboard:
   - `VITE_PADDLE_CHECKOUT_LAUNCH_URL`
   - `VITE_PADDLE_CHECKOUT_SCALE_URL`
   - `VITE_PADDLE_CHECKOUT_ENTERPRISE_URL`
4. Run `pnpm dev` and test pricing buttons

---

## What Was Changed

✅ Primary CTA changed to "View Pricing" (product-focused)
✅ All emails updated to hello@shutdownx.com
✅ Terms: Added prohibited use cases section
✅ Privacy: Added cookies/tracking section
✅ Refund: Added chargeback policy
✅ Navigation: Prioritizes pricing over contact
✅ Hero: Reordered CTAs to lead with pricing
✅ All content emphasizes "software licenses" not "services"
✅ Merchant of Record properly mentioned in all legal pages
