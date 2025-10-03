export const metadata = {
    title: "Online JSON Tools | Formatter, Validator, Minifier, Viewer",
    description:
        "Explore our free online JSON tools: Formatter, Validator, Minifier, Tree Viewer, and more. Fast, private, and browser-based.",
    keywords: [
        "json formatter",
        "json validator",
        "json minifier",
        "json viewer",
        "online json tools",
    ],
    alternates: {
        canonical: "https://www.yoursite.com/tools",
    },
}

const tools = [
    {
        name: "JSON Formatter",
        description: "Beautify JSON, minify JSON, and view JSON in tree format.",
        url: "/json-formatter",
        keywords: ["json formatter", "json beautifier", "pretty print json"],
    },
    {
        name: "JSON Validator",
        description: "Validate JSON and detect syntax errors instantly.",
        url: "/json-formatter#validate",
        keywords: ["json validator", "check json syntax", "validate json online"],
    },
    {
        name: "JSON Minifier",
        description: "Compress JSON to a single line for faster storage or transmission.",
        url: "/json-formatter#minify",
        keywords: ["json minifier", "compact json", "minify json online"],
    },
    {
        name: "JSON Tree Viewer",
        description: "View JSON data in an expandable tree format.",
        url: "/json-formatter#tree-view",
        keywords: ["json tree viewer", "json visualizer", "pretty json tree"],
    },
    {
        name: "Stringify to JSON",
        description: "Convert a JavaScript object into a JSON string.",
        url: "/json-formatter#stringify-to-json",
        keywords: ["stringify json", "js object to json"],
    },
    {
        name: "JSON to Object",
        description: "Convert a JSON string back into a JavaScript object.",
        url: "/json-formatter#json-to-object",
        keywords: ["json to object", "parse json"],
    },
    {
        name: "Reverse JSON",
        description: "Reverse arrays or object keys/values in JSON.",
        url: "/json-formatter#reverse",
        keywords: ["reverse json", "invert json"],
    },
]

export default function ToolsPage() {
    return (
        <section className="space-y-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center">Online JSON Tools</h1>
            <p className="text-gray-600 dark:text-gray-400 text-center">
                Explore our free online JSON tools. Beautify, minify, validate, and view your JSON data instantly in your browser.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tools.map((tool) => (
                    <a
                        key={tool.name}
                        href={tool.url}
                        className="block p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow bg-gray-50 dark:bg-gray-900"
                    >
                        <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
                        <p className="text-gray-600 dark:text-gray-400">{tool.description}</p>
                    </a>
                ))}
            </div>

            {/* Structured Data for Tools Page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        itemListElement: tools.map((tool, index) => ({
                            "@type": "ListItem",
                            position: index + 1,
                            url: `https://www.yoursite.com${tool.url}`,
                            name: tool.name,
                            description: tool.description,
                            keywords: tool.keywords,
                        })),
                    }),
                }}
            />
        </section>
    )
}
