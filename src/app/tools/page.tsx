export const metadata = {
  title: "QuickJSON – Free Online JSON Formatter, Validator, Minifier & Viewer",
  description:
    "QuickJSON is your fast, free, and private online JSON toolset — format, validate, minify, and visualize JSON instantly right in your browser.",
  keywords: [
    "QuickJSON",
    "JSON formatter online",
    "JSON validator",
    "JSON minifier",
    "JSON viewer",
    "free JSON tools",
    "online JSON editor",
    "format JSON",
    "validate JSON",
    "minify JSON",
    "view JSON",
    "quick json tools",
  ],
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL,
  },
};


const tools = [
  {
    name: "QuickJSON Formatter",
    description:
      "Format, beautify, and minify JSON instantly using QuickJSON’s fast online formatter.",
    url: "/json-formatter",
    keywords: [
      "quickjson formatter",
      "online json beautifier",
      "pretty print json",
      "format json online",
    ],
  },
  {
    name: "QuickJSON Validator",
    description:
      "Validate and check JSON syntax errors in real time with QuickJSON’s free online validator.",
    url: "/json-formatter#validate",
    keywords: [
      "quickjson validator",
      "validate json online",
      "json syntax checker",
      "check json validity",
    ],
  },
  {
    name: "QuickJSON Minifier",
    description:
      "Compress and minify JSON into a single line for faster sharing, storage, or transmission.",
    url: "/json-formatter#minify",
    keywords: [
      "quickjson minifier",
      "minify json online",
      "compress json",
      "compact json",
    ],
  },
  {
    name: "QuickJSON Tree Viewer",
    description:
      "Explore your JSON data visually in an interactive tree view with QuickJSON.",
    url: "/json-formatter#tree-view",
    keywords: [
      "quickjson tree viewer",
      "json visualizer",
      "view json online",
      "json explorer",
    ],
  },
  {
    name: "Stringify to JSON",
    description:
      "Easily convert JavaScript objects into JSON strings using QuickJSON’s stringify tool.",
    url: "/json-formatter#stringify-to-json",
    keywords: [
      "stringify json online",
      "js object to json",
      "convert object to json",
    ],
  },
  {
    name: "JSON to Object",
    description:
      "Parse JSON strings into JavaScript objects instantly using QuickJSON’s parser tool.",
    url: "/json-formatter#json-to-object",
    keywords: [
      "json to object",
      "parse json online",
      "json parser",
      "convert json to object",
    ],
  },
  {
    name: "Reverse JSON",
    description:
      "Reverse JSON arrays or invert object keys and values easily with QuickJSON’s reverse tool.",
    url: "/json-formatter#reverse",
    keywords: [
      "reverse json",
      "invert json",
      "reverse json array",
      "flip json keys values",
    ],
  },
];


export default function ToolsPage() {
    return (
        <section className="space-y-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center">Online Quick JSON Tools</h1>
            <p className="text-gray-600 dark:text-gray-400 text-center">
                QuickJSON is your fast, free, and private online JSON toolset — format, validate, minify, and visualize JSON instantly right in your browser.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tools.map((tool) => (
                    <a
                        key={tool.name}
                        href={tool.url}
                        className="block p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow bg-gray-50 dark:bg-gray-900"
                    >
                        <h2 className="text-xl text-black dark:text-gray-400 font-semibold mb-2">{tool.name}</h2>
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
                            url: `${process.env.NEXT_PUBLIC_APP_URL}${tool.url}`,
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
