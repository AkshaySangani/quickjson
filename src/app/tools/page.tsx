import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "JSON Tools – Format, Validate, Minify & View JSON Online | QuickJSON",
  description:
    "Discover all free online JSON tools by QuickJSON — format, validate, beautify, minify, and view JSON instantly in your browser. 100% private and secure.",
  keywords: [
    "json tools",
    "json formatter",
    "json beautifier",
    "json validator",
    "json minifier",
    "json viewer",
    "format json online",
    "validate json online",
    "online json utilities",
  ],
  alternates: {
    canonical: "https://www.quickjson.net/tools",
  },
  openGraph: {
    title: "JSON Tools – Format, Validate, Minify & View JSON Online",
    description:
      "Access a complete suite of free JSON tools: Formatter, Validator, Minifier, and Viewer — all browser-based and privacy-safe.",
    url: "https://www.quickjson.net/tools",
    siteName: "QuickJSON",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JSON Tools Overview",
      },
    ],
  },
}

export default function ToolsPage() {
  const tools = [
    {
      title: "JSON Formatter",
      description:
        "Beautify and format your JSON instantly. Make complex JSON readable and properly indented.",
      link: "/json-formatter",
    },
    {
      title: "JSON Validator",
      description:
        "Check your JSON for syntax errors and validate structure before sending or saving.",
      link: "/json-validator",
    },
    {
      title: "JSON Minifier",
      description:
        "Reduce JSON size by removing whitespace and newlines for faster performance.",
      link: "/json-minify",
    },
    {
      title: "JSON Viewer",
      description:
        "Visualize and explore JSON data hierarchically. Perfect for debugging APIs and configurations.",
      link: "/json-tree-view",
    },
    {
      title: "JSON Parser",
      description:
        "Parse JSON text into readable data structures and verify nested elements easily.",
      link: "/json-formatter",
    },
  ]

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Online JSON Tools
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A collection of powerful and privacy-focused tools to format, validate, and analyze JSON
            data. All tools run locally in your browser — your JSON never leaves your device.
          </p>
        </div>
      </section>
      <section id="tools" className="">
        {/* ✅ Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "JSON Formatter", link: "/json-formatter" },
            { title: "JSON Beautifier", link: "/json-beautify" },
            { title: "JSON Minifier", link: "/json-minify" },
            { title: "JSON Validator", link: "/json-validator" },
            { title: "JSON Tree Viewer", link: "/json-tree-view" },
          ].map((tool) => (
            <a
              key={tool.title}
              href={tool.link}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all bg-gray-50 dark:bg-gray-900"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                {tool.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Try the {tool.title} now — 100% free, fast, and browser-based.
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* ✅ SEO Section */}
      <article className="mt-16 text-gray-700 dark:text-gray-300 space-y-6 leading-relaxed">
        <h2 className="text-2xl font-semibold">Why Use JSON Tools?</h2>
        <p>
          JSON (JavaScript Object Notation) is a lightweight data-interchange format widely used in
          web APIs and configuration files. The QuickJSON toolkit provides developers with
          essential utilities to manipulate and debug JSON efficiently.
        </p>

        <h2 className="text-2xl font-semibold">Our Free JSON Utilities</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>JSON Formatter</strong> – Beautify your JSON instantly for better readability.
          </li>
          <li>
            <strong>JSON Validator</strong> – Check and correct syntax errors before using your data.
          </li>
          <li>
            <strong>JSON Minifier</strong> – Optimize your JSON by reducing file size.
          </li>
          <li>
            <strong>JSON Viewer</strong> – Inspect and explore nested JSON visually.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">Is It Safe?</h2>
        <p>
          Absolutely. All processing is performed in your browser using JavaScript — no data is sent
          to our servers, ensuring complete privacy and security.
        </p>

        <p>
          Looking for the main formatter? Try our{" "}
          <Link href="/" className="text-blue-600 hover:underline">
            JSON Formatter
          </Link>{" "}
          — it’s the most popular tool in our collection.
        </p>
      </article>

      {/* ✅ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "QuickJSON Tools",
            description:
              "A free collection of online JSON utilities including formatter, validator, minifier, and viewer.",
            url: "https://www.quickjson.net/tools",
            itemListElement: tools.map((tool, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: tool.title,
              url: `https://www.quickjson.net${tool.link}`,
            })),
          }),
        }}
      />
    </ >
  )
}
