import Link from "next/link";

export const metadata = {
  title: "Contact Us | QuickJSON – Support & Feedback",
  description:
    "Get in touch with the QuickJSON team for support, feedback, or questions about our online JSON tools. We’re here to help.",
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h1 className="text-3xl font-bold tracking-tight">
            Contact Us
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Have a question, feedback, or suggestion about QuickJSON? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Get in Touch</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              If you have any issues, feature requests, or general inquiries, feel free to reach out.
            </p>

            <div className="mt-6 space-y-4 text-sm">
              <div>
                <p className="font-medium">Email</p>
                <a
                  href="mailto:support@quickjson.net"
                  className="text-primary hover:underline"
                >
                  support@quickjson.net
                </a>
              </div>

              <div>
                <p className="font-medium">Website</p>
                <Link
                  href="https://quickjson.net"
                  className="text-primary hover:underline"
                >
                  https://quickjson.net
                </Link>
              </div>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              We usually respond within 24–48 hours.
            </p>
          </div>

          {/* Info Box */}
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold">About Support</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>• QuickJSON is a free online JSON utility tool.</li>
              <li>• All JSON processing happens locally in your browser.</li>
              <li>• We do not store or log your data.</li>
              <li>• For bugs or feature ideas, email us anytime.</li>
            </ul>

            <div className="mt-6 rounded-xl bg-muted p-4 text-sm">
              <p className="font-medium">Privacy Note</p>
              <p className="mt-1 text-muted-foreground">
                Your messages are only used to respond to your inquiry. Read our{' '}
                <Link href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
