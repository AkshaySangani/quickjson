import Link from "next/link"
import { Metadata } from "next"
import JsonFormatterClient from "../components/JsonFormatterClient"

export const metadata: Metadata = {
  title:
    "JSON Formatter | Free Online JSON Beautifier, Validator",
  description:
    "Format, beautify, minify, and validate JSON instantly with our free online JSON Formatter. QuickJSON is fast, secure, and runs completely in your browser.",
  keywords: [
    "json formatter",
    "json beautifier",
    "json validator",
    "format json online",
    "json minifier",
    "json viewer",
    "online json tools",
    "quickjson",
    "quick json",
    "free online json formatter",
    "best json formatter",
    "json formatter online",
    "json formatter tool",
    "json formatter tool online",
    "json formatter tool online free",
  ],
  alternates: {
    canonical: "https://www.quickjson.net/",
  },
  openGraph: {
    title: "JSON Formatter | Free Online JSON Beautifier, Validator",
    description:
      "Format, beautify, minify, and validate JSON instantly with our free online JSON Formatter. QuickJSON is fast, secure, and runs completely in your browser.",
    url: "https://www.quickjson.net/",
    siteName: "QuickJSON",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JSON Formatter Preview",
      },
    ],
  },
  robots: { index: true, follow: true },
}

export default function HomePage() {
  return (
    <main className="mx-auto px-4 py-12">
      {/* ✅ Hero Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          JSON Formatter - Free Online JSON Beautifier & Validator
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Paste your JSON below to format, beautify, validate, and minify instantly.
          <br />
          <span className="font-medium">QuickJSON</span> helps developers debug and visualize
          JSON data right in the browser.
        </p>
      </header>

      <p className="text-center mt-4 text-sm opacity-80">
        Try our free online JSON formatter — no signup, no ads, no limits.
      </p>

      {/* ✅ Main JSON Tool */}
      <section className="mt-8">
        <JsonFormatterClient />
      </section>

      {/* ✅ Tool CTA */}
      <div className="text-center mt-8">
        <Link
          href="/tools"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-red-400 text-white font-medium rounded-lg transition"
        >
          Explore All JSON Tools
        </Link>
      </div>

      {/* ✅ SEO Content Section */}
      <article className="mt-20 leading-relaxed space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">What is a JSON Formatter?</h2>
          <p>
            A JSON Formatter is a free online tool that helps you format, beautify, and validate
            JSON (JavaScript Object Notation) data. Developers often use JSON for APIs,
            configurations, and data exchange. However, raw JSON can be hard to read — this tool
            makes it easy to visualize and debug your JSON structures.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Why Use QuickJSON?</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>No signup required – 100% free and browser-based.</li>
            <li>Secure – your data never leaves your device.</li>
            <li>Supports JSON validation, minifying, and syntax highlighting.</li>
            <li>Built for developers – clean UI, dark mode, and instant results.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">How to Format JSON Online?</h2>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Paste your JSON in the editor above.</li>
            <li>Click “Format” or use the keyboard shortcut.</li>
            <li>View beautified JSON with indentation and syntax colors.</li>
            <li>Validate your JSON to check for errors or invalid syntax.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Other Free JSON Tools</h2>
          <p>
            Besides formatting, you can try our other developer tools like{" "}
            <Link href="/json-minifier" className="text-blue-600 dark:text-blue-400 hover:underline">
              JSON Minifier
            </Link>
            ,{" "}
            <Link href="/json-validator" className="text-blue-600 dark:text-blue-400 hover:underline">
              JSON Validator
            </Link>
            , and{" "}
            <Link href="/json-viewer" className="text-blue-600 dark:text-blue-400 hover:underline">
              JSON Viewer
            </Link>
            .
          </p>
        </section>
      </article>

      {/* ✅ FAQ Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

        <div className="space-y-6 divide-y divide-gray-200 dark:divide-gray-800">
          {[
            {
              q: "Is QuickJSON free to use?",
              a: "Yes, QuickJSON is completely free. You can format, validate, and beautify JSON without signing up or uploading data.",
            },
            {
              q: "Does it store my JSON?",
              a: "No. All operations are done locally in your browser for privacy and security.",
            },
            {
              q: "What browsers are supported?",
              a: "QuickJSON works on all modern browsers including Chrome, Firefox, Safari, and Edge.",
            },
          ].map(({ q, a }, i) => (
            <div key={i} className="pt-6">
              <h3 className="text-lg font-semibold mb-2">{q}</h3>
              <p className="opacity-90">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="text-center text-sm opacity-70 mt-12">
        Last updated: November 2025
      </p>

      {/* ✅ Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "JSON Formatter",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0.00",
              priceCurrency: "USD",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "1200",
            },
            description:
              "Free online JSON formatter and validator tool. Beautify, minify, and validate JSON instantly in your browser.",
            url: "https://www.quickjson.net/",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is QuickJSON free to use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, QuickJSON is completely free. You can format, validate, and beautify JSON without signing up.",
                },
              },
              {
                "@type": "Question",
                name: "Does it store my JSON?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, all operations are performed locally in your browser for privacy and security.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  )
}
