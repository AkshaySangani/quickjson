import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 Not Found | QuickJSON",
  description: "The page you’re looking for doesn’t exist. Head back to QuickJSON and explore our free online JSON tools.",
  robots: { index: false },
}

export default function NotFound() {
  return (
    <section className="h-[calc(100%+2rem)] flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 text-center px-6">
      <div className="max-w-md">
        {/* Emoji or Icon */}
        <div className="text-7xl mb-4 animate-bounce">🧩</div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          Page Not Found
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Back Button */}
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-200"
        >
          Back to Home
        </Link>

        {/* Extra Link */}
        <div className="mt-4">
          <Link
            href="/json-formatter"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            Try our JSON Formatter →
          </Link>
        </div>
      </div>
    </section>
  )
}
