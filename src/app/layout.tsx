import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "./providers"
import Link from "next/link"
import ThemeToggle from "../components/ThemeToggal"
import Script from "next/script"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://quickjson.net"),
  title: {
    default: "QuickJSON – Free Online JSON Formatter, Validator & Tools",
    template: "%s | QuickJSON",
  },
  description:
    "QuickJSON offers free, fast, and privacy-friendly online JSON tools — format, validate, minify, and visualize JSON directly in your browser.",
  keywords: [
    "quickjson",
    "json formatter",
    "json validator",
    "json minifier",
    "json viewer",
    "online json tools",
    "format json online",
    "validate json online",
    "minify json online",
  ],
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://quickjson.net",
    title: "QuickJSON – Free Online JSON Formatter, Validator & Tools",
    description:
      "Beautify, validate, and minify JSON easily with QuickJSON — fast, free, and browser-based.",
    siteName: "QuickJSON",
    images: [
      {
        url: "/og-image.png", // Optional — add your OG image path here
        width: 1200,
        height: 630,
        alt: "QuickJSON – Free Online JSON Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickJSON – Free Online JSON Formatter, Validator & Tools",
    description:
      "QuickJSON provides free online tools to format, validate, and minify JSON instantly in your browser.",
    images: ["/og-image.png"], // Optional
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL || "https://quickjson.net",
  },
};


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
                <ThemeToggle />
              </div>
            </nav>
          </header>

          <main className="container mx-auto px-4 py-8">{children}</main>

          <footer className="border-t border-gray-200 dark:border-gray-800 py-4 text-center text-sm text-gray-500">
            <div className="flex justify-center flex-wrap gap-4 mb-2">
              <Link href="/privacy-policy" className="hover:underline">
                Privacy
              </Link>
              <Link href="/terms" className="hover:underline">
                Terms
              </Link>
            </div>
            <div>© {new Date().getFullYear()} QuickJSON. All rights reserved.</div>
          </footer>


        </Providers>

        {/* ✅ Global Structured Data for whole site */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Quick JSON Tools",
              url: process.env.NEXT_PUBLIC_APP_URL,
              potentialAction: {
                "@type": "SearchAction",
                target: `${process.env.NEXT_PUBLIC_APP_URL}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: "Quick JSON Tools",
              },
            }),
          }}
        />
        {/* ✅ Google Analytics Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZM1XJ8PJCQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZM1XJ8PJCQ');
          `}
        </Script>
      </body>
    </html>
  )
}
