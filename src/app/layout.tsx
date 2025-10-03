import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "./providers"
import Link from "next/link"
import ThemeToggle from "../components/ThemeToggal"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yoursite.com"),
  title: {
    default: "Free Online JSON Tools",
    template: "%s | Free Online JSON Tools",
  },
  description:
    "Collection of free online JSON utilities — JSON Formatter, Validator, Minifier and more. Runs 100% in your browser.",
  keywords: ["json formatter", "json validator", "json minifier", "json tools online"],
  openGraph: {
    type: "website",
    url: "https://www.yoursite.com",
    title: "Free Online JSON Tools",
    description:
      "Beautify, minify, and validate JSON online with fast browser-based tools.",
    siteName: "JSON Tools Online",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online JSON Tools",
    description: "JSON Formatter, Validator, Minifier, and more.",
  },
  alternates: {
    canonical: "https://www.yoursite.com",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <Providers>
          <header className="border-b border-gray-200 dark:border-gray-800">
            <nav className="container mx-auto flex items-center justify-between px-4 py-3">
              <Link href="/" className="text-xl font-bold">JSON Tools</Link>

              <div className="flex gap-4 items-center">
                <Link href="/tools" className="hover:underline">
                  JSON Tools Index
                </Link>
                <Link href="/json-formatter" className="hover:underline">
                  JSON Formatter Online
                </Link>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:underline">
                  Terms
                </Link>
                <ThemeToggle />
              </div>
            </nav>
          </header>

          <main className="container mx-auto px-4 py-8">{children}</main>

          <footer className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} JSON Tools. All rights reserved.
          </footer>
        </Providers>

        {/* ✅ Global Structured Data for whole site */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "JSON Tools Online",
              url: "https://www.yoursite.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.yoursite.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: "JSON Tools Online",
              },
            }),
          }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXX');
    `,
          }}
        />

      </body>
    </html>
  )
}
