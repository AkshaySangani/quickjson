export const dynamic = "force-static";

import JsonFormatter from "@/components/JSONCodeMirror"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "JSON Formatter – Format & Beautify JSON Online | QuickJSON",
  description:
    "Free online JSON Formatter to format, beautify, and view JSON data easily. QuickJSON lets you format JSON directly in your browser with no data upload.",
  keywords: [
    "json formatter",
    "online json formatter",
    "json beautify",
    "json pretty print",
    "quickjson",
    "format json",
    "json viewer",
  ],
  alternates: { canonical: "https://www.quickjson.net/json-formatter" },
  openGraph: { images: ["/og-image.png"] },
}

export default function JsonFormatterPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">JSON Formatter Online</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        Format and beautify your JSON instantly. Paste your JSON data below and
        click “Format” to make it human-readable.
      </p>

      {/* Reuse your existing JSON editor / formatter component here */}
      <JsonFormatter />
    </section>
  )
}
