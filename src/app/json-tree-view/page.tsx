export const dynamic = "force-static";

import JsonFormatter from "@/components/JSONCodeMirror"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "JSON Tree Viewer – View JSON Data in Tree Format | QuickJSON",
  description:
    "Visualize and explore JSON data in a tree view with QuickJSON. Free JSON Tree Viewer for structured and collapsible JSON visualization.",
  keywords: [
    "json tree viewer",
    "view json as tree",
    "json visualizer",
    "json viewer online",
    "quickjson",
  ],
  alternates: { canonical: "https://www.quickjson.net/json-tree-view" },
}

export default function JsonTreeViewPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">JSON Tree Viewer</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        Explore your JSON data in a structured, expandable tree format.
      </p>

      {/* Reuse same JSON viewer component */}
      <JsonFormatter/>
    </section>
  )
}
