import Link from "next/link"

export default function HomePage() {
  return (
    <section className="text-center space-y-6">
      <h1 className="text-3xl font-bold">Free Online JSON Tools</h1>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Beautify, validate, minify, and view JSON instantly. All tools run 100% in your browser — private, fast, and free.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <Link
          href="/json-formatter"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700"
        >
          JSON Formatter Online
        </Link>

        <Link
          href="/tools"
          className="inline-block rounded-lg bg-green-600 px-6 py-3 text-white font-medium hover:bg-green-700"
        >
          See All JSON Tools
        </Link>
      </div>
    </section>
  )
}
