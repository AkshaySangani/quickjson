import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "./providers"
import Link from "next/link"
import ThemeToggle from "../components/ThemeToggal"
import Script from "next/script"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.quickjson.net"),
  title: {
    default: "JSON Formatter Online - Free JSON Beautifier, Validator & Minifier",
    template: "%s | QuickJSON",
  },
  description:
    "Free online JSON formatter and validator. Beautify, minify, and check your JSON instantly with QuickJSON — fast, secure, and browser-based.",
  keywords: [
    "json formatter",
    "format json online",
    "json beautifier",
    "json validator",
    "json minifier",
    "json viewer",
    "quickjson",
    "free json tools",
  ],
  openGraph: {
    type: "website",
    url: "https://www.quickjson.net",
    title: "JSON Formatter Online - Free Beautifier, Validator & Minifier",
    description:
      "Instantly format, validate, and beautify JSON with this free online JSON Formatter. 100% private and browser-based.",
    siteName: "QuickJSON",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JSON Formatter Online by QuickJSON",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Formatter Online - Free & Fast JSON Beautifier",
    description: "Beautify, minify, and validate JSON instantly in your browser.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.quickjson.net",
  },
  robots: { index: true, follow: true },
  authors: [{ name: "QuickJSON" }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
        <Providers>
          {/* ✅ Header */}
          <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur">
            <nav
              className="container mx-auto flex flex-wrap items-center justify-between px-4 py-4"
              aria-label="Main Navigation"
            >
              <Link
                href="/"
                className="text-2xl font-bold tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition"
                title="QuickJSON Home"
              >
                QuickJSON
              </Link>
              <div className="flex gap-6 items-center text-sm font-medium">
                <Link href="/json-formatter" className="hover:underline" title="Online JSON Formatter">
                  JSON Formatter
                </Link>
                <Link href="/tools" className="hover:underline" title="All Developer Tools">
                  Tools
                </Link>
                <Link href="/about" className="hover:underline" title="About QuickJSON">
                  About
                </Link>
                <ThemeToggle />
              </div>
            </nav>
          </header>

          {/* ✅ Main content */}
          <main className="container mx-auto px-4 py-10">{children}</main>

          {/* ✅ SEO Footer */}
          <footer className="border-t border-gray-200 dark:border-gray-800 py-10 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Column 1 */}
                <div>
                  <h3 className="font-semibold text-lg mb-3">QuickJSON</h3>
                  <p className="text-sm leading-relaxed">
                    Free online JSON formatter, validator, and minifier. Fast, private, and built for
                    developers — run entirely in your browser.
                  </p>
                </div>

                {/* Column 2 */}
                <div>
                  <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/" className="hover:underline">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/json-formatter" className="hover:underline">
                        JSON Formatter
                      </Link>
                    </li>
                    <li>
                      <Link href="/tools" className="hover:underline">
                        All Tools
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="hover:underline">
                        About Us
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div>
                  <h4 className="font-semibold text-lg mb-3">Legal</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/privacy-policy" className="hover:underline">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms" className="hover:underline">
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="hover:underline">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-300 dark:border-gray-800 mt-8 pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} QuickJSON. All rights reserved.
              </div>
            </div>
          </footer>
        </Providers>

        {/* ✅ Global Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "QuickJSON",
              url: "https://www.quickjson.net",
              description:
                "Free online JSON Formatter and Validator. Format, beautify, and minify JSON instantly in your browser.",
              inLanguage: "en",
              publisher: {
                "@type": "Organization",
                name: "QuickJSON",
                url: "https://www.quickjson.net",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.quickjson.net/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "QuickJSON",
              url: "https://www.quickjson.net",
              logo: "https://www.quickjson.net/logo.png",
              sameAs: [
                "https://twitter.com/quickjson",
                "https://github.com/AkshaySangani/quickjson",
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.quickjson.net/" },
                { "@type": "ListItem", position: 2, name: "JSON Formatter", item: "https://www.quickjson.net/json-formatter" },
              ],
            }),
          }}
        />


        {/* ✅ Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZM1XJ8PJCQ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZM1XJ8PJCQ');
          `}
        </Script>

        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1776553000817606"
          crossOrigin="anonymous"></Script>
      </body>
    </html>
  )
}
