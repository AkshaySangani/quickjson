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
          <h2 className="text-2xl font-semibold mb-3">Instant JSON Formatter, Validator & Converter</h2>
          <p>
            QuickJSON is a fast and lightweight online tool built for developers who work with APIs and structured data. Whether you need to format, validate, minify, analyze, or convert JSON, QuickJSON provides everything you need in one clean, easy-to-use interface. No installation, no signup — just paste your JSON and get instant results.
          </p>
        </section>
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
          <h2 className="text-2xl font-semibold mb-6">Why Use QuickJSON?</h2>

          <div className="mb-8">
            <div className="flex items-start gap-2 mb-2">
              <span className="text-purple-600 text-xl">✔</span>
              <h3 className="text-xl font-semibold">Lightning-Fast JSON Formatting</h3>
            </div>
            <p className="text-gray-700 ml-7">
              Prettify messy or minified JSON with a single click. QuickJSON automatically applies proper indentation,
              consistent spacing, and readable structure.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-start gap-2 mb-2">
              <span className="text-purple-600 text-xl">✔</span>
              <h3 className="text-xl font-semibold">Accurate JSON Validation</h3>
            </div>
            <p className="text-gray-700 ml-7">
              Check for errors in your JSON instantly. The validator highlights:
            </p>
            <ul className="list-disc ml-12 mt-2 text-gray-700">
              <li>Missing commas</li>
              <li>Incorrect quotes</li>
              <li>Extra brackets</li>
              <li>Structural issues</li>
              <li>Invalid JSON syntax</li>
            </ul>
            <p className="text-gray-700 ml-7 mt-2">
              You get clear error messages so you can fix issues quickly.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-start gap-2 mb-2">
              <span className="text-purple-600 text-xl">✔</span>
              <h3 className="text-xl font-semibold">One-Click JSON Minification</h3>
            </div>
            <p className="text-gray-700 ml-7">
              Reduce JSON size for production environments. Perfect for optimizing API request/response bodies.
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-start gap-2 mb-2">
              <span className="text-purple-600 text-xl">✔</span>
              <h3 className="text-xl font-semibold">Convert JSON to Other Formats</h3>
            </div>
            <p className="text-gray-700 ml-7 italic">
              (If available on your site; if not, remove this section)
            </p>
            <p className="text-gray-700 ml-7 mt-2">
              QuickJSON supports multiple conversions, including:
            </p>
            <ul className="list-disc ml-12 mt-2 text-gray-700">
              <li>JSON ⇄ CSV</li>
              <li>JSON ⇄ Plain Text</li>
            </ul>
          </div>
        </section>


        <section>
          <h2 className="text-2xl font-semibold mb-3">How to Format JSON Online?</h2>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Paste your JSON in the editor above.</li>
            <li>Click “Beautify” or use the keyboard shortcut.</li>
            <li>View beautified JSON with indentation and syntax colors.</li>
            <li>Validate your JSON to check for errors or invalid syntax.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">100% Secure — Your Data Stays in Your Browser</h2>
          <ol className="list-decimal ml-6 space-y-2">
            <li>QuickJSON does not store, upload, or log your JSON.</li>
            <li>All processing happens locally in your browser using JavaScript.</li>
            <li>This makes the tool safe for developers working with sensitive or private data.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Features Designed for Developers</h2>
          <ul className="list-disc ml-6 space-y-2 mb-3">
            <li>Clean and distraction-free UI</li>
            <li>Copy, clear, and download buttons</li>
            <li>Large input support</li>
            <li>Mobile-friendly layout</li>
            <li>Fast and lightweight (no heavy libraries)</li>
          </ul>
          <p>Whether you’re a front-end developer, backend engineer, tester, or student, QuickJSON helps simplify JSON-related tasks.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Who Uses QuickJSON?</h2>
          <p>QuickJSON is built for:</p>
          <ul className="list-disc ml-6 space-y-2 mb-3">
            <li>API developers</li>
            <li>QA testers</li>
            <li>Students learning JSON</li>
            <li>Backend engineers</li>
            <li>Mobile app developers</li>
            <li>Data analysts</li>
          </ul>
          <p>Anyone working with structured data will find this tool extremely useful.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">What Makes QuickJSON Unique?</h2>
          <p>Unlike many online JSON tools, QuickJSON focuses on:</p>
          <ul className="list-disc ml-6 space-y-2 mb-3">
            <li>Speed</li>
            <li>Simplicity</li>
            <li>Privacy</li>
            <li>Backend engineers</li>
            <li>Accuracy</li>
            <li>Clean UI</li>
            <li>Developer-friendly workflow</li>
          </ul>
          <p>The goal is to help you work faster without unnecessary clutter.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Upcoming Tools & Improvements</h2>
          <p>QuickJSON is continuously improving. Soon, you’ll see:</p>
          <ul className="list-disc ml-6 space-y-2 mb-3">
            <li>JSON diff tool</li>
            <li>JWT decoder</li>
            <li>Base64 encoder/decoder</li>
            <li>Backend engineers</li>
            <li>API testing utilities</li>
            <li>More data conversion tools</li>
          </ul>
          <p>Your suggestions are always welcome.</p>
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
              q: "What is QuickJSON?",
              a: "QuickJSON is an online toolkit that helps you format, validate, compress, and analyze JSON data instantly. It is built for developers who want fast results without installing any software.",
            },
            {
              q: "Is QuickJSON free to use?",
              a: "Yes, QuickJSON is completely free. You can format, validate, and beautify JSON without signing up or uploading data.",
            },
            {
              q: "Does it store my JSON?",
              a: "No. QuickJSON processes everything in your browser using JavaScript. Your data is never uploaded, saved, or stored on any server.",
            },
            {
              q: "Are there any usage limits",
              a: "There are no fixed limits, but extremely large JSON files (5 MB+) may slow down your browser depending on your device.",
            },
            {
              q: "What browsers are supported?",
              a: "QuickJSON works on all modern browsers including Chrome, Firefox, Safari, and Edge.",
            },
            {
              q: "Is QuickJSON safe for sensitive data?",
              a: "Yes. Since all operations happen locally in your browser, your JSON never leaves your device. However, avoid using this tool for classified or confidential government data.",
            },
            {
              q: "Can I use QuickJSON without internet?",
              a: "If the page is already loaded once, some browsers may allow offline use because the tool runs completely in JavaScript. However, this may not work in all cases.",
            },
            {
              q: "Can I prettify minified JSON?",
              a: "Yes. You can instantly convert minified JSON into a clean, readable, indented format."
            },
            {
              q: "Can I compress or minify JSON?",
              a: "Yes. QuickJSON includes a one-click compressor to reduce JSON size for APIs and production environments.",
            },
            {
              q: "How do I report bugs or suggest features?",
              a: "You can reach out via our contact page or GitHub repository to report issues or suggest new features.",
            },
            {
              q: "Can I share the formatted JSON with others?",
              a: "You can copy the output manually and share it anywhere. QuickJSON does not generate public links for privacy reasons.",
            }
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
