export const metadata = {
  title: "Privacy Policy | QuickJSON - Online JSON Tools",
  description:
    "We respect your privacy. QuickJSON runs entirely in your browser. No data is stored, logged, or transmitted.",
}

export default function PrivacyPolicyPage() {
  return (
    <article className="max-w-3xl mx-auto my-16 px-6 sm:px-8 lg:px-12 prose prose-lg dark:prose-invert leading-relaxed">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-12 tracking-tight">Privacy Policy</h1>

      <p className="text-lg mb-8">
        At <strong>QuickJSON</strong>, your privacy is our top priority. All JSON operations run entirely in your browser. We do <strong>not</strong> store, log, or transmit any of your data to our servers.
      </p>

      <p className="bg-green-50 dark:bg-green-900 p-6 rounded-lg border-l-4 border-green-500 text-green-800 dark:text-green-300 mb-8">
        <strong>Client-side Processing:</strong> All formatting, validation, and manipulation of JSON occurs locally on your device. Your input never leaves your browser.
      </p>

      <p className="mb-8">
        We do not track, collect, or share any personal information. No cookies, no analytics, and no third-party tracking are used.
      </p>

      <p className="mb-8">
        QuickJSON may update this Privacy Policy occasionally to reflect improvements in our tools or legal requirements. Please check this page periodically for any changes.
      </p>

      <p className="mb-8">
        If you have any questions about how your data is handled, please contact us at{' '}
        <a href="mailto:support@quickjson.net" className="text-blue-600 underline">support@quickjson.net</a>.
      </p>
    </article>
  )
}
