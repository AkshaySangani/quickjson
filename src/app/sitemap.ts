import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.quickjson.net"

  // ✅ Primary pages
  const staticPaths = [
    "",
    "json-formatter",
    "tools",
    "json-beautify",
    "json-minify",
    "json-validator",
    "json-tree-view",
    // "stringify-to-json",
    // "json-to-object",
    // "reverse",
  ]

  const now = new Date()

  return staticPaths.map((path) => ({
    url: path ? `${baseUrl}/${path}` : baseUrl,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority:
      path === ""
        ? 1.0
        : ["json-formatter", "beautify", "validate"].includes(path)
        ? 0.9
        : 0.7,
  }))
}
