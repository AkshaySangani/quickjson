export const dynamic = "force-static";

import JsonFormatter from "@/components/JSONCodeMirror"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "JSON Beautifier – Beautify JSON Online | QuickJSON",
  description:
    "Beautify your JSON data instantly with QuickJSON. Free online JSON Beautifier to make JSON more readable and properly indented.",
  keywords: [
    "json beautifier",
    "beautify json online",
    "json pretty print",
    "json formatter",
    "quickjson",
  ],
  alternates: { canonical: "https://www.quickjson.net/json-beautify" },
}

export default function JsonBeautifyPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">JSON Beautifier</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        Paste your JSON below to beautify and format it into a clean, readable
        structure.
      </p>

      {/* Reuse same JSON editor component */}
      <JsonFormatter/>
    </section>
  )
}
