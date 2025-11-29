"use client";
import React, { useEffect, useRef, useState } from "react";
import { EditorView, basicSetup } from "codemirror";
import { json } from "@codemirror/lang-json";
import { oneDark } from "@codemirror/theme-one-dark";
import { bracketMatching } from "@codemirror/language";
import { closeBrackets } from "@codemirror/autocomplete";
import Modal from "./common/Modal";
import FileUploadBox from "./common/FileUploadBox";
import Button from "./common/Button";

export default function JsonFormatter() {
  const inputRef = useRef<HTMLDivElement | null>(null);
  const outputRef = useRef<HTMLDivElement | null>(null);
  const jsonTreeRef = useRef<HTMLDivElement | null>(null);

  const inputEditor = useRef<EditorView | null>(null);
  const outputEditor = useRef<EditorView | null>(null);

  const [isTreeMode, setIsTreeMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [urlError, setUrlError] = useState<string | null>(null);
  const [url, setUrl] = useState<string>("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // Initialize editors
  useEffect(() => {
    if (!inputRef.current || !outputRef.current) return;

    const editorTheme = EditorView.theme({
      "&": { height: "100%", fontSize: "16px" },
      ".cm-content": { fontFamily: "monospace" },
      ".cm-scroller": { overflow: "auto" }, // ✅ Enable scroll for long JSON
    });

    inputEditor.current = new EditorView({
      doc: '',
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
  const setInput = (text: string) =>
    inputEditor.current?.dispatch({
      changes: {
        from: 0,
        to: inputEditor.current.state.doc.length,
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

  const handleUpload = (file: any) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result;
        if (typeof content === "string") {
          setInput(content);
        }
      };
      setUploadedFile(file);
      reader.readAsText(file);
    }
  }

  const handleOpenUploadModal = () => {
    setIsOpen(true);
  };

  const handleCloseUploadModal = () => {
    setIsOpen(false);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const url = e.target.value;

  let isValid = true;

  try {
    new URL(url);        // If invalid, it will throw
  } catch {
    isValid = false;
  }

  if (!isValid) {
    setUrlError("Please enter a valid URL.");
    setUrl(url);
  } else {
    setUrlError(null);
    setUrl(url);
  }
};

const handleSubmitUrl = async () => {
  setLoading(true);
  try {
    const response = await fetch(url || "");
    if (!response.ok) {
      setUrlError("Failed to fetch JSON from the provided URL.");
      return;
    }
    const data = await response.text();
    setInput(data);
    setIsOpen(false);
    setUrl("");
  } catch (error) {
    setUrlError("Failed to fetch JSON from the provided URL.");
  } finally {
    setLoading(false);
  }
}


  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-120px)] shadow-xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 mt-8 ">
      {/* Input JSON */}
      <div className="flex-1 border-r bg-white flex flex-col overflow-hidden">
        <div className="bg-gray-800 text-white px-3 py-2 font-semibold">
          Input JSON
        </div>
        <div ref={inputRef} className="flex-1 overflow-auto" />
      </div>

      {/* Center Controls */}
      <div className="w-full md:w-56 flex flex-col justify-center items-center gap-3 p-5">
        <Button key={"validate"} onClick={handleValidate} className="w-full p-2" text="Validate" />
        <Button key={"beautify"} onClick={handleBeautify} className="w-full p-2" text="Beautify" />
        <Button key={"minify"} onClick={handleMinify} className="w-full p-2" text="Minify" />
        <Button key={"toObject"} onClick={handleToObject} className="w-full p-2" text="JSON → Object" />
        <Button key={"reverse"} onClick={handleReverse} className="w-full p-2" text="Reverse JSON" />
        <Button key={"copy"} onClick={handleCopy} className="w-full p-2" text="Copy JSON" />
        <Button key={"download"} onClick={handleDownload} className="w-full p-2" text="Download" />
        <Button key={"upload"} onClick={handleOpenUploadModal} className="w-full p-2" text="Upload JSON" />
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
      <Modal isOpen={isOpen} onClose={handleCloseUploadModal} title="Upload JSON File or Paste URL">
        <div className="space-y-4">
          <div className="flex flex-col space-y-2 justify-center items-center">
            <div className="w-full">
            <input type="url" value={url} placeholder="Paste URL here" className="w-full p-2 text-black border-1 border-gray-300 focus:border-gray-300 rounded-md" onChange={handleOnChange}/>
            {urlError && <p className="text-red-500 text-sm">{urlError}</p>}
            </div>
            <Button className="w-20 p-2" loading={loading} onClick={handleSubmitUrl} text="Submit" />
          </div>
          <div className="flex items-center justify-center gap-4 my-4 md:my-6 lg:my-6">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-sm text-gray-500 whitespace-nowrap">
              {"Or upload a file"}
            </span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
          <FileUploadBox
            uploadedFile={uploadedFile}
            handleUploadFile={(uploadedFile) => {
              if (uploadedFile) {
                handleUpload(uploadedFile);
                setIsOpen(false);
              }
            }}
          />
        </div>
      </Modal>
      
    </div>
  );
}
