export const metadata = {
  title: "Privacy Policy | QuickJSON - Online JSON Tools",
  description:
    "We respect your privacy. QuickJSON runs entirely in your browser. No data is stored, logged, or transmitted.",
}

export default function PrivacyPolicyPage() {
  return (
    <article className="max-w-3xl mx-auto my-16 px-6 sm:px-8 lg:px-12 prose prose-lg dark:prose-invert leading-relaxed space-y-8">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-12 tracking-tight">Privacy Policy</h1>

      <p className="text-lg mb-8">
        At <strong>QuickJSON</strong>, your privacy is our top priority. All JSON operations run entirely in your browser. We do <strong>not</strong> store, log, or transmit any of your data to our servers.
      </p>

      <p className="bg-green-50 dark:bg-green-900 p-6 rounded-lg border-l-4 border-green-500 text-green-800 dark:text-green-300 mb-8">
        <strong>Client-side Processing:</strong> All formatting, validation, and manipulation of JSON occurs locally on your device. Your input never leaves your browser.
      </p>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold mb-3">1. Information We Do (and Do Not) Collect</h2>
        <p><strong>No Personal Data Collected:</strong> QuickJSON does not collect, store, or transmit any personal information from users. All JSON processing (formatting, validation, editing, minifying, etc.) happens locally in your web browser. Your input data never leaves your device.</p>
        <p><strong>No Tracking or Analytics:</strong> We do not use cookies, analytics services, or any third-party trackers to collect information about you or your usage.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">2. How We Process Your Data</h2>
        <p>QuickJSON operates entirely on the client side:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>JSON formatting and manipulation occur in your browser.</li>
          <li>We do not transfer any input to our servers.</li>
          <li>No server logs contain your data because we do not receive it. </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">3. Cookies and Tracking Technologies</h2>
        <p>We do not use cookies or similar tracking technologies. If third-party tools ever become part of our services in the future (e.g., embedded libraries or partners), we will disclose that clearly and obtain necessary consent. </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">4. Third-Party Sharing</h2>
        <p>Since QuickJSON does not collect or store user input or personal information:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>We do not share personal data with third parties.</li>
          <li>We do not transfer any input to our servers.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">5. Security</h2>
        <p>Although we process data locally and do not store it, we are committed to security:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>All data remains on your device.</li>
          <li>We encourage you to use secure devices and networks when accessing QuickJSON.</li>
          <li>We ensure our site is served over HTTPS to protect any interactions with our site.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">6. Children’s Privacy</h2>
        <p>Our services are <strong>not intended for children under the age of 13</strong> (or any applicable age under local law). We do not knowingly collect information from minors. If you believe such data was submitted, please contact us so we can remove it.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">7. Your Rights and Choices</h2>
        <p>Even though we don’t collect personal data:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>You have control over what you enter into QuickJSON.</li>
          <li>You may delete or change any content you input at any time within your browser.</li>
          <li>You can clear your browser cache or history to remove any residual local settings or browser-stored data.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">8. Policy Changes</h2>
        <p>We may update this Privacy Policy occasionally to reflect legal updates or improvements in our service. We will post changes here, and the “Last Updated” date will be updated accordingly.</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">9. Contact Us</h2>
        <p className="mb-8">
        If you have any questions about how your data is handled, please contact us at{' '}
          <a href="mailto:support@quickjson.net" className="text-blue-600 underline">support@quickjson.net</a>.
        </p>
      </section>
    </article>
  )
}
