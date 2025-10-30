export const dynamic = "force-static";

import JsonFormatter from "@/components/JSONCodeMirror"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "JSON Validator – Validate JSON Online | QuickJSON",
  description:
    "Validate JSON online and check for syntax errors instantly with QuickJSON. Fast and accurate JSON validation directly in your browser.",
  keywords: [
    "json validator",
    "validate json online",
    "json syntax checker",
    "quickjson",
    "json formatter",
  ],
  alternates: { canonical: "https://www.quickjson.net/json-validator" },
}

export default function JsonValidatePage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">JSON Validator</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        Paste your JSON below and click “Validate” to check for syntax errors
        and invalid structures.
      </p>

      {/* Reuse same JSON editor component */}
      <JsonFormatter/>
    </section>
  )
}
