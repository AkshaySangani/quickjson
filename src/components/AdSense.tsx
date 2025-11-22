"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdSense({ slot, style }: { slot: string; style?: React.CSSProperties }) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style ?? { display: "block" }}
      data-ad-client="ca-pub-1776553000817606"
      data-ad-slot={getSlot(slot)}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

/* You can map all slot names here */
function getSlot(slotName: string) {
  const slots: Record<string, string> = {
    "top-banner": "1234567890",
    "right-sidebar": "1234567891",
    "after-editor": "1234567892",
    "footer-ad": "1234567893",
  };

  return slots[slotName] || "1234567890"; // fallback slot
}
