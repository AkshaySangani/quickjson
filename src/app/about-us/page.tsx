export const metadata = {
  title: "About Us | QuickJSON – Fast & Secure Online JSON Tools",
  description:
    "Learn about QuickJSON, a free online JSON tool designed for developers. All JSON processing happens securely in your browser with no data storage or tracking.",
};

export default function AboutUsPage() {
    return (
        <article className="max-w-3xl mx-auto my-16 px-6 sm:px-8 lg:px-12 prose prose-lg dark:prose-invert leading-relaxed space-y-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-12 tracking-tight">About Us</h1>

            <p className="text-lg mb-8">
                <strong>QuickJSON</strong> is a simple and fast online platform created to help developers work with JSON data more efficiently. Our goal is to remove friction from everyday development tasks by providing tools that are easy to use, reliable, and accessible from any device.
            </p>

            <p className="bg-green-50 dark:bg-green-900 p-6 rounded-lg border-l-4 border-green-500 text-green-800 dark:text-green-300 mb-8">
                <strong>Why QuickJSON Exists:</strong> Working with JSON is a daily task for developers, testers, and API users. Formatting errors, unreadable responses, and invalid structures slow down development. QuickJSON was built to solve these problems with a clean interface and instant results.
            </p>

            <section>
                <h2 className="text-2xl font-semibold mb-3">Who We Build For</h2>
                <p>QuickJSON is built for:</p>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                    <li>Front-end and back-end developers</li>
                    <li>API and integration engineers</li>
                    <li>Students learning JSON</li>
                    <li>QA testers</li>
                    <li>Students learning JSON</li>
                    <li>Anyone who regularly works with structured data</li>
                </ul>
                <p>Whether you’re debugging an API response or learning how JSON works, QuickJSON is designed to support your workflow.</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">Our Approach</h2>
                <p>We believe developer tools should be:</p>
                <ul className="list-disc ml-6 space-y-2 mb-3">
                    <li>Fast and responsive</li>
                    <li>Easy to understand</li>
                    <li>Consistent and accurate</li>
                    <li>Accessible without registration</li>
                </ul>
                <p>Every feature on QuickJSON is designed with real-world developer use cases in mind.</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">Independent & Developer-Focused</h2>
                <p>QuickJSON is independently built and maintained with a focus on long-term quality. We continuously improve the platform based on user feedback, performance needs, and modern web standards.</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">Looking Ahead</h2>
                <p>Our roadmap includes additional tools such as JSON diffing, data converters, code formatters, and utilities that help developers work faster and with fewer errors.</p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
                <p>We value user feedback and suggestions.</p>
                <p>If you have questions, ideas, or feature requests, feel free to reach out:</p>
                <p className="mb-8">
                    <a href="mailto:support@quickjson.net" className="text-blue-600 underline">support@quickjson.net</a>.
                </p>
            </section>
        </article>
    )
}
