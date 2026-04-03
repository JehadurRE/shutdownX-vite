import { useEffect } from "react"

interface UsePageMetaOptions {
  title: string
  description: string
  noindex?: boolean
  keywords?: string[]
  image?: string
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>
}

const setOrCreateMeta = (selector: string, attribute: "name" | "property", key: string, content: string) => {
  let meta = document.querySelector(selector)
  if (!meta) {
    meta = document.createElement("meta")
    meta.setAttribute(attribute, key)
    document.head.appendChild(meta)
  }
  meta.setAttribute("content", content)
}

export const usePageMeta = ({
  title,
  description,
  noindex = false,
  keywords = [],
  image = "/og-image.svg",
  structuredData,
}: UsePageMetaOptions) => {
  const keywordKey = keywords.join("|")
  const structuredDataKey = structuredData ? JSON.stringify(structuredData) : ""

  useEffect(() => {
    document.title = title
    const pageUrl = `${window.location.origin}${window.location.pathname}`
    const imageUrl = image.startsWith("http") ? image : `${window.location.origin}${image}`

    setOrCreateMeta('meta[name="description"]', "name", "description", description)
    if (keywords.length > 0) {
      setOrCreateMeta('meta[name="keywords"]', "name", "keywords", keywords.join(", "))
    }
    setOrCreateMeta('meta[name="robots"]', "name", "robots", noindex ? "noindex, nofollow" : "index, follow")
    setOrCreateMeta('meta[property="og:title"]', "property", "og:title", title)
    setOrCreateMeta('meta[property="og:description"]', "property", "og:description", description)
    setOrCreateMeta('meta[property="og:type"]', "property", "og:type", "website")
    setOrCreateMeta('meta[property="og:url"]', "property", "og:url", pageUrl)
    setOrCreateMeta('meta[property="og:image"]', "property", "og:image", imageUrl)
    setOrCreateMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image")
    setOrCreateMeta('meta[name="twitter:title"]', "name", "twitter:title", title)
    setOrCreateMeta('meta[name="twitter:description"]', "name", "twitter:description", description)
    setOrCreateMeta('meta[name="twitter:image"]', "name", "twitter:image", imageUrl)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.setAttribute("rel", "canonical")
      document.head.appendChild(canonical)
    }

    const canonicalHref = pageUrl
    canonical.setAttribute("href", canonicalHref)

    const existingJsonLd = document.getElementById("json-ld-primary")
    if (existingJsonLd) {
      existingJsonLd.remove()
    }

    if (structuredData) {
      const script = document.createElement("script")
      script.id = "json-ld-primary"
      script.type = "application/ld+json"
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }
  }, [title, description, noindex, image, keywordKey, structuredDataKey])
}
