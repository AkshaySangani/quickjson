export const dynamic = "force-static";

import JsonFormatter from "@/components/JSONCodeMirror"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "JSON Minifier – Minify JSON Online | QuickJSON",
  description:
    "Compress and minify JSON data easily using QuickJSON. Free online JSON Minifier removes whitespace and formatting for smaller JSON files.",
  keywords: [
    "json minifier",
    "minify json online",
    "compress json",
    "reduce json size",
    "quickjson",
  ],
  alternates: { canonical: "https://www.quickjson.net/json-minify" },
}

export default function JsonMinifyPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">JSON Minifier</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        Minify and compress JSON data for faster transmission and storage.
      </p>

      {/* Reuse same JSON editor component */}
      <JsonFormatter/>
    </section>
  )
}
