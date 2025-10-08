import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.quickjson.net"

  const urls = [
    `${baseUrl}/`,
    `${baseUrl}/json-formatter`,
    // Add other pages here
  ]

  // Include tool anchors as separate URLs for SEO
  const tools = [
    "beautify",
    "minify",
    "validate",
    "tree-view",
    "stringify-to-json",
    "json-to-object",
    "reverse",
  ]
  const toolUrls = tools.map((id) => `${baseUrl}/json-formatter#${id}`)

  return [...urls, ...toolUrls].map((url) => ({ url }))
}
