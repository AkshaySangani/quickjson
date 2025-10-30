"use client";
import React, { useEffect, useRef, useState } from "react";
import { EditorView, basicSetup } from "codemirror";
import { json } from "@codemirror/lang-json";
import { oneDark } from "@codemirror/theme-one-dark";
import { bracketMatching } from "@codemirror/language";
import { closeBrackets } from "@codemirror/autocomplete";

export default function JsonFormatter() {
  const inputRef = useRef<HTMLDivElement | null>(null);
  const outputRef = useRef<HTMLDivElement | null>(null);
  const jsonTreeRef = useRef<HTMLDivElement | null>(null);

  const inputEditor = useRef<EditorView | null>(null);
  const outputEditor = useRef<EditorView | null>(null);

  const [isTreeMode, setIsTreeMode] = useState(false);

  // Initialize editors
  useEffect(() => {
    if (!inputRef.current || !outputRef.current) return;

    const editorTheme = EditorView.theme({
      "&": { height: "100%", fontSize: "16px" },
      ".cm-content": { fontFamily: "monospace" },
      ".cm-scroller": { overflow: "auto" }, // ✅ Enable scroll for long JSON
    });

    inputEditor.current = new EditorView({
      doc: '{\n  "mills": "json",\n  "fiberline": "KNF2"\n}',
      extensions: [
        basicSetup,
        json(),
        oneDark,
        bracketMatching(),
        closeBrackets(),
        editorTheme,
      ],
      parent: inputRef.current,
    });

    outputEditor.current = new EditorView({
      doc: "",
      extensions: [
        basicSetup,
        json(),
        oneDark,
        bracketMatching(),
        closeBrackets(),
        EditorView.editable.of(false),
        editorTheme,
      ],
      parent: outputRef.current,
    });

    return () => {
      inputEditor.current?.destroy();
      outputEditor.current?.destroy();
    };
  }, []);

  const getInput = () => inputEditor.current?.state.doc.toString() ?? "";
  const getOutput = () => outputEditor.current?.state.doc.toString() ?? "";
  const setOutput = (text: string) =>
    outputEditor.current?.dispatch({
      changes: {
        from: 0,
        to: outputEditor.current.state.doc.length,
        insert: text,
      },
    });

  // --- Utility functions ---
  const flattenObject = (obj: any, prefix = "") => {
    return Object.keys(obj).reduce((acc: any, key) => {
      const newKey = prefix ? `${prefix}.${key}` : key;
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        Object.assign(acc, flattenObject(obj[key], newKey));
      } else {
        acc[newKey] = obj[key];
      }
      return acc;
    }, {});
  };

  const reverseObject = (obj: any): any => {
    if (typeof obj !== "object" || obj === null) return obj;

    if (Array.isArray(obj)) {
      return obj.map(reverseObject);
    }

    const reversed: Record<string, any> = {};
    for (const [key, value] of Object.entries(obj)) {
      const reversedValue = reverseObject(value);
      if (typeof reversedValue === "object" && !Array.isArray(reversedValue)) {
        reversed[key] = reversedValue;
      } else {
        reversed[value as any] = key;
      }
    }
    return reversed;
  };

  // --- Actions ---
  const handleValidate = () => {
    try {
      JSON.parse(getInput());
      setOutput("✅ Valid JSON");
    } catch (err: any) {
      setOutput("❌ Invalid JSON: " + err.message);
    }
  };

  const handleBeautify = () => {
    try {
      const parsed = JSON.parse(getInput());
      setOutput(JSON.stringify(parsed, null, 2));
    } catch (err: any) {
      setOutput("❌ Invalid JSON: " + err.message);
    }
  };

  const handleMinify = () => {
    try {
      const parsed = JSON.parse(getInput());
      setOutput(JSON.stringify(parsed));
    } catch (err: any) {
      setOutput("❌ Invalid JSON: " + err.message);
    }
  };

  const handleTreeView = () => {
    try {
      const parsed = JSON.parse(getInput());
      setIsTreeMode(true);
      setTimeout(() => {
        // if (treeEditor.current) {
        //   treeEditor.current.set(parsed);
        //   treeEditor.current.expandAll();
        // }
      }, 100);
    } catch (err: any) {
      setOutput("❌ Invalid JSON for Tree View: " + err.message);
    }
  };

  const handleToObject = () => {
    try {
      const parsed = JSON.parse(getInput());
      const flattened = flattenObject(parsed); // ✅ works for nested objects
      setOutput(JSON.stringify(flattened, null, 2));
    } catch (err: any) {
      setOutput("❌ Invalid JSON: " + err.message);
    }
  };

  const handleReverse = () => {
    try {
      const parsed = JSON.parse(getInput());
      const reversed = reverseObject(parsed); // ✅ works for nested objects
      setOutput(JSON.stringify(reversed, null, 2));
    } catch (err: any) {
      setOutput("❌ Invalid JSON: " + err.message);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getOutput());
        setOutput("✅ Copied to clipboard");
    } catch {
      setOutput("❌ Failed to copy JSON");
    }
  };

  const handleDownload = () => {
    const text = getOutput();
    const blob = new Blob([text], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "data.json";
    link.click();
  };

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-120px)] bg-gray-100">
      {/* Input JSON */}
      <div className="flex-1 border-r bg-white flex flex-col overflow-hidden">
        <div className="bg-gray-800 text-white px-3 py-2 font-semibold">
          Input JSON
        </div>
        <div ref={inputRef} className="flex-1 overflow-auto" />
      </div>

      {/* Center Controls */}
      <div className="w-full md:w-72 bg-[#009688] flex flex-col justify-center items-center gap-3 p-5">
        <button onClick={handleValidate} className="btn">Validate</button>
        <button onClick={handleBeautify} className="btn">Beautify</button>
        <button onClick={handleMinify} className="btn">Minify</button>
        {/* <button onClick={handleTreeView} className="btn">Tree</button> */}
        <button onClick={handleToObject} className="btn">JSON → Object</button>
        <button onClick={handleReverse} className="btn">Reverse JSON</button>
        <button onClick={handleCopy} className="btn">Copy JSON</button>
        <button onClick={handleDownload} className="btn">Download</button>
      </div>

      {/* Output / Tree */}
      <div className="flex-1 border-l bg-white flex flex-col overflow-hidden">
        <div className="bg-gray-800 text-white px-3 py-2 font-semibold flex justify-between items-center">
          <span>{isTreeMode ? "Tree View" : "Output JSON"}</span>
          {isTreeMode && (
            <button
              onClick={() => setIsTreeMode(false)}
              className="bg-white text-[#009688] text-sm px-2 py-1 rounded"
            >
              Back to Code
            </button>
          )}
        </div>

        {!isTreeMode ? (
          <div ref={outputRef} className="flex-1 overflow-auto" />
        ) : (
          <div ref={jsonTreeRef} className="flex-1 overflow-auto p-2" />
        )}
      </div>

      <style jsx>{`
        .btn {
          width: 100%;
          background: white;
          color: #009688;
          font-weight: 600;
          padding: 8px 0;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .btn:hover {
          background: #e7e7e7;
        }
      `}</style>
    </div>
  );
}
