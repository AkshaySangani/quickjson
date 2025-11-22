"use client";

import dynamic from "next/dynamic";

const JsonFormatter = dynamic(() => import("./JSONCodeMirror"), {
  ssr: false, // 🚀 KEY FIX: Google will now see clean SSR without editor noise
  loading: () => <div>Loading editor…</div>,
});

export default function EditorWrapper() {
  return <JsonFormatter />;
}