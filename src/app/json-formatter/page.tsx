
import JsonFormatter from "./JSONCodeMirror";

// ---------------- Metadata ----------------
export const metadata = {
  title:
    "QuickJSON Formatter | Beautify, Minify, Validate, Stringify & Reverse JSON Online",
  description:
    "QuickJSON offers a free online JSON formatter tool to beautify, minify, validate, stringify, reverse, and view JSON in a tree structure. 100% browser-based, fast, and secure.",
  keywords: [
    "quickjson",
    "json formatter",
    "json beautifier",
    "json minifier",
    "json validator",
    "json tree viewer",
    "stringify to json",
    "json to object",
    "reverse json",
    "online json tools",
    "format json online",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_APP_URL}/json-formatter`,
  },
};


// ---------------- Tools Definition ----------------
const tools = [
  {
    name: "QuickJSON Beautifier",
    id: "beautify",
    description:
      "Beautify and format JSON with proper indentation for improved readability and structure.",
  },
  {
    name: "QuickJSON Minifier",
    id: "minify",
    description:
      "Minify and compress JSON into a single line for faster performance, sharing, or storage.",
  },
  {
    name: "QuickJSON Validator",
    id: "validate",
    description:
      "Instantly validate JSON and detect syntax errors to ensure your data is properly structured.",
  },
  {
    name: "QuickJSON Tree Viewer",
    id: "tree-view",
    description:
      "Visualize JSON data in an interactive, expandable tree view for easy navigation and analysis.",
  },
  {
    name: "Stringify to JSON",
    id: "stringify-to-json",
    description:
      "Convert JavaScript objects into JSON strings instantly using QuickJSON’s stringify tool.",
  },
  {
    name: "JSON to Object",
    id: "json-to-object",
    description:
      "Parse JSON strings back into JavaScript objects quickly and accurately with QuickJSON.",
  },
  {
    name: "Reverse JSON",
    id: "reverse",
    description:
      "Reverse JSON arrays or flip object keys and values easily with QuickJSON’s reverse tool.",
  },
];


// ---------------- Page Component ----------------
export default function JsonFormatterPage() {
  return (
    <>
    <JsonFormatter/>
    {/* <JsonMindMap jsonData={{
  fruits: {
    Apple: {
      color: "#FF0000",
      details: { type: "Pome", season: "Fall" },
      nutrients: { calories: 52, fiber: "2.4g", vitaminC: "4.6mg" },
    },
    Banana: {
      color: "#FFFF00",
      details: { type: "Berry", season: "Year-round" },
      nutrients: { calories: 89, fiber: "2.6g", potassium: "358mg" },
    },
    Orange: {
      color: "#FFA500",
      details: { type: "Citrus", season: "Winter" },
      nutrients: { calories: 47, fiber: "2.4g", vitaminC: "53.2mg" },
    },
  },
}}/> */}
      {/* <JsonFormatterClient /> */}

      {/* ---------------- Structured Data for SEO ---------------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "JSON Formatter Online",
            applicationCategory: "Utility",
            operatingSystem: "Any",
            url: `${process.env.NEXT_PUBLIC_APP_URL}/json-formatter`,
            author: {
              "@type": "Person",
              name: "Your Name",
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description:
              "Free JSON Formatter tool to beautify, minify, validate, stringify, reverse, and view JSON data in tree format.",
            featureList: tools.map((tool) => tool.name),
            itemListElement: tools.map((tool, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: tool.name,
              url: `${process.env.NEXT_PUBLIC_APP_URL}/json-formatter#${tool.id}`,
              description: tool.description,
            })),
            keywords: tools.flatMap((tool) => tool.name.toLowerCase().split(" ")),
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "120",
            },
          }),
        }}
      />
    </>
  )
}
