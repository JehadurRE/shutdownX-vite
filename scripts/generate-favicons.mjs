import fs from "node:fs"
import path from "node:path"
import { createRequire } from "node:module"

const require = createRequire(import.meta.url)
const rfg = require("rfg-api").init()

const rootDir = process.cwd()
const sourceLogo = process.argv[2] || path.join(rootDir, "public", "brand-logo.png")
const apiKey = process.env.RFG_API_KEY
const indexHtmlPath = path.join(rootDir, "index.html")

if (!apiKey) {
  console.error("Missing RFG_API_KEY. Set it before running favicon generation.")
  process.exit(1)
}

if (!fs.existsSync(sourceLogo)) {
  console.error(`Logo file not found: ${sourceLogo}`)
  process.exit(1)
}

const sourceBase64 = rfg.fileToBase64Sync(sourceLogo)

const generationRequest = {
  api_key: apiKey,
  master_picture: {
    type: "inline",
    content: sourceBase64,
  },
  files_location: {
    type: "path",
    path: "/",
  },
  favicon_design: {
    desktop_browser: {},
    ios: {
      picture_aspect: "background_and_margin",
      margin: "14%",
      background_color: "#0A0E16",
      assets: {
        ios6_and_prior_icons: false,
        ios7_and_later_icons: true,
        precomposed_icons: false,
        declare_only_default_icon: true,
      },
    },
    android_chrome: {
      picture_aspect: "no_change",
      theme_color: "#0A0E16",
      manifest: {
        name: "ShutdownX",
        display: "standalone",
        orientation: "not_set",
        on_conflict: "override",
        declared: true,
      },
      assets: {
        legacy_icon: true,
        low_resolution_icons: false,
      },
    },
    safari_pinned_tab: {
      picture_aspect: "silhouette",
      theme_color: "#22D3EE",
    },
    windows: {
      picture_aspect: "no_change",
      background_color: "#0A0E16",
      on_conflict: "override",
      assets: {
        windows_80_ie_10_tile: true,
        windows_10_ie_11_edge_tiles: {
          small: true,
          medium: true,
          big: false,
          rectangle: false,
        },
      },
    },
  },
  settings: {
    scaling_algorithm: "Mitchell",
    error_on_image_too_small: false,
    readme_file: false,
    html_code_file: false,
    use_path_as_is: false,
  },
}

rfg.generateFavicon(generationRequest, path.join(rootDir, "public"), (error, response) => {
  if (error) {
    console.error("Favicon generation failed:", error)
    process.exit(1)
  }

  const htmlCode = response?.favicon?.html_code
  if (!htmlCode) {
    console.error("Favicon generation succeeded but no html_code was returned.")
    process.exit(1)
  }

  const indexHtml = fs.readFileSync(indexHtmlPath, "utf8")
  rfg.injectFaviconMarkups(
    indexHtml,
    htmlCode,
    { keep: ['meta[property="og:image"]', 'meta[name="theme-color"]'] },
    (injectError, updatedHtml) => {
    if (injectError) {
      console.error("Failed to inject favicon markup into index.html:", injectError)
      process.exit(1)
    }

    fs.writeFileSync(indexHtmlPath, updatedHtml, "utf8")
    fs.writeFileSync(path.join(rootDir, "public", "favicon-markup.html"), htmlCode, "utf8")
    console.log("Favicons generated and index.html updated.")
    },
  )
})
