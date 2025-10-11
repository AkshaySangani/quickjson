export const metadata = {
  title: "Terms of Use | QuickJSON - Online JSON Tools",
  description:
    "Read the Terms of Use for QuickJSON. Learn about your rights, responsibilities, and guidelines when using our online JSON tools.",
}

export default function TermsPage() {
  return (
    <article className="max-w-3xl mx-auto my-16 px-6 sm:px-8 lg:px-12 prose prose-lg dark:prose-invert leading-relaxed">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-12 tracking-tight">Terms of Use</h1>

      <p className="text-lg mb-8">
        Welcome to <strong>QuickJSON</strong>. By using our website and tools, you agree to these Terms of Use. Please read carefully before using our services.
      </p>

      <p className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg border-l-4 border-blue-500 text-blue-800 dark:text-blue-300 mb-8">
        <strong>Privacy Notice:</strong> QuickJSON does <em>not store any data</em> you enter or process. Your JSON input remains private and is never saved on our servers.
      </p>

      <p className="mb-8">
        QuickJSON provides online tools to format, validate, and manipulate JSON data. You are free to use these tools responsibly for personal or professional purposes.
      </p>

      <p className="mb-8">
        All content, design, logos, and tools on QuickJSON are the intellectual property of QuickJSON. You may not copy, modify, or distribute our content without explicit permission.
      </p>

      <p className="italic text-gray-700 dark:text-gray-400 mb-8">
        Our services are provided <em>&ldquo;as is&rdquo;</em> without warranties. We do not guarantee the accuracy, reliability, or availability of the tools at all times.
      </p>

      <p className="mb-8">
        By using QuickJSON, you accept responsibility for any output or results. QuickJSON is not liable for any direct or indirect consequences, including data loss or errors.
      </p>

      <p className="mb-8">
        We may update these Terms occasionally. Continued use of the website indicates acceptance of the updated terms. Please check this page periodically for changes.
      </p>

      <p className="mb-8">
        If you have questions or concerns, please contact us at{' '}
        <a href="mailto:support@quickjson.net" className="text-blue-600 underline">support@quickjson.net</a>.
      </p>
    </article>
  )
}
