
import JsonFormatterClient from "./JsonFormatterClient"

// ---------------- Metadata ----------------
export const metadata = {
  title: "JSON Formatter Online | Beautify, Minify, Validate, Stringify & Reverse JSON",
  description:
    "Free JSON Formatter online tool. Beautify, minify, validate, stringify, reverse, and view JSON in tree format. Fast, private, and secure — runs entirely in your browser.",
  keywords: [
    "json formatter",
    "json beautifier",
    "json minifier",
    "json validator",
    "json tree viewer",
    "stringify to json",
    "json to object",
    "reverse json",
    "online json tools",
  ],
  alternates: {
    canonical: "https://www.yoursite.com/json-formatter",
  },
}

// ---------------- Tools Definition ----------------
const tools = [
  { name: "Beautify JSON", id: "beautify", description: "Beautify JSON with indentation for easy readability." },
  { name: "Minify JSON", id: "minify", description: "Compress JSON to a single line for faster storage or transmission." },
  { name: "Validate JSON", id: "validate", description: "Check JSON for syntax errors and validate its format." },
  { name: "JSON Tree Viewer", id: "tree-view", description: "View JSON data in an expandable tree structure." },
  { name: "Stringify to JSON", id: "stringify-to-json", description: "Convert a JavaScript object into a JSON string." },
  { name: "JSON to Object", id: "json-to-object", description: "Convert a JSON string back into a JavaScript object." },
  { name: "Reverse JSON", id: "reverse", description: "Reverse arrays or object keys/values in JSON." },
]

// ---------------- Page Component ----------------
export default function JsonFormatterPage() {
  return (
    <>
      <JsonFormatterClient />

      {/* ---------------- Structured Data for SEO ---------------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "JSON Formatter Online",
            applicationCategory: "Utility",
            operatingSystem: "Any",
            url: "https://www.yoursite.com/json-formatter",
            author: {
              "@type": "Person",
              name: "Your Name",
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description:
              "Free JSON Formatter tool to beautify, minify, validate, stringify, reverse, and view JSON data in tree format.",
            featureList: tools.map((tool) => tool.name),
            itemListElement: tools.map((tool, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: tool.name,
              url: `https://www.yoursite.com/json-formatter#${tool.id}`,
              description: tool.description,
            })),
            keywords: tools.flatMap((tool) => tool.name.toLowerCase().split(" ")),
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "120",
            },
          }),
        }}
      />
    </>
  )
}
