"use client"

import { useState, useEffect, JSX } from "react"

export default function JsonFormatterClient() {
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")
    const [tree, setTree] = useState<any>(null)

    // ----- Core Functions -----
    const beautify = () => {
        try {
            const parsed = JSON.parse(input)
            setOutput(JSON.stringify(parsed, null, 2))
            setTree(null)
        } catch (e: any) {
            setOutput("❌ Error: " + e.message)
            setTree(null)
        }
    }

    const minify = () => {
        try {
            const parsed = JSON.parse(input)
            setOutput(JSON.stringify(parsed))
            setTree(null)
        } catch (e: any) {
            setOutput("❌ Error: " + e.message)
            setTree(null)
        }
    }

    const validate = () => {
        try {
            JSON.parse(input)
            setOutput("✅ Valid JSON")
            setTree(null)
        } catch (e: any) {
            setOutput("❌ Invalid JSON: " + e.message)
            setTree(null)
        }
    }

    const showTree = () => {
        try {
            const parsed = JSON.parse(input)
            setTree(parsed)
            setOutput("")
        } catch (e: any) {
            setOutput("❌ Error: " + e.message)
            setTree(null)
        }
    }

    const stringifyToJSON = () => {
        try {
            // Takes JS object in input, converts to JSON string
            const parsed = eval("(" + input + ")") // use eval carefully for JS objects
            setOutput(JSON.stringify(parsed, null, 2))
            setTree(null)
        } catch (e: any) {
            setOutput("❌ Error: " + e.message)
            setTree(null)
        }
    }

    const jsonToObject = () => {
        try {
            // Takes JSON string in input, converts to JS object
            const parsed = JSON.parse(input)
            setOutput(JSON.stringify(parsed, null, 2)) // or display object as string
            setTree(parsed)
        } catch (e: any) {
            setOutput("❌ Error: " + e.message)
            setTree(null)
        }
    }

    const reverseJSON = () => {
        try {
            const parsed = JSON.parse(input)
            let reversed: any

            if (Array.isArray(parsed)) {
                reversed = parsed.slice().reverse()
            } else if (typeof parsed === "object" && parsed !== null) {
                reversed = Object.fromEntries(Object.entries(parsed).reverse())
            } else {
                throw new Error("Input must be an array or object to reverse")
            }

            setOutput(JSON.stringify(reversed, null, 2))
            setTree(null)
        } catch (e: any) {
            setOutput("❌ Error: " + e.message)
            setTree(null)
        }
    }

    // ----- Utilities -----
    const copyOutput = () => {
        if (!output) return
        navigator.clipboard.writeText(output)
        setOutput("(✅ Copied to clipboard)")
        setTimeout(() => setOutput(""), 1200)
    }

    const downloadOutput = () => {
        if (!output) return
        const blob = new Blob([output], { type: "application/json" })
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = "data.json"
        a.click()
        URL.revokeObjectURL(url)
    }

    // ----- Tree Viewer -----
    const buildTree = (value: any): JSX.Element => {
        if (value === null || typeof value !== "object") {
            return <span className="text-blue-500">{String(value)}</span>
        }
        if (Array.isArray(value)) {
            return (
                <details open>
                    <summary>Array[{value.length}]</summary>
                    <ul className="ml-4">
                        {value.map((v, i) => (
                            <li key={i}>{buildTree(v)}</li>
                        ))}
                    </ul>
                </details>
            )
        }
        return (
            <details open>
                <summary>Object</summary>
                <ul className="ml-4">
                    {Object.entries(value).map(([k, v]) => (
                        <li key={k}>
                            <strong>{k}: </strong>
                            {buildTree(v)}
                        </li>
                    ))}
                </ul>
            </details>
        )
    }

    // ----- Scroll to anchor on mount (if URL has hash) -----
    useEffect(() => {
        const hash = window.location.hash
        if (hash) {
            const element = document.querySelector(hash)
            element?.scrollIntoView({ behavior: "smooth" })
        }
    }, [])

    // ----- JSX -----
    return (
        <section className="space-y-6">
            <h1 className="text-2xl font-bold">JSON Formatter Online</h1>
            <p className="text-gray-600 dark:text-gray-400">
                Paste JSON below and choose a tool: Beautify, Minify, Validate, Tree View, Stringify, Reverse.
                All operations run 100% in your browser — private and fast.
            </p>

            {/* Input */}
            <textarea
                className="w-full h-60 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-3 font-mono text-sm"
                placeholder='Paste JSON here...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
                <button id="beautify" onClick={beautify} className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                    Beautify JSON
                </button>
                <button id="minify" onClick={minify} className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                    Minify JSON
                </button>
                <button id="validate" onClick={validate} className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                    Validate JSON
                </button>
                <button id="tree-view" onClick={showTree} className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                    Tree View
                </button>
                <button id="stringify-to-json" onClick={stringifyToJSON} className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700">
                    Stringify to JSON
                </button>

                <button id="json-to-object" onClick={jsonToObject} className="px-4 py-2 rounded bg-yellow-600 text-white hover:bg-yellow-700">
                    JSON to Object
                </button>

                <button id="reverse" onClick={reverseJSON} className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700">
                    Reverse JSON
                </button>
                <button onClick={copyOutput} className="px-4 py-2 rounded bg-gray-600 text-white hover:bg-gray-700">
                    Copy
                </button>
                <button onClick={downloadOutput} className="px-4 py-2 rounded bg-gray-600 text-white hover:bg-gray-700">
                    Download
                </button>
            </div>

            {/* Output */}
            {output && (
                <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-sm overflow-x-auto font-mono whitespace-pre-wrap">
                    {output}
                </pre>
            )}

            {/* Tree Viewer */}
            {tree && (
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-sm font-mono">
                    {buildTree(tree)}
                </div>
            )}
        </section>
    )
}
