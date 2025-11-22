"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdSense({ slot, style }: { slot: string; style?: React.CSSProperties }) {
    const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    const el = adRef.current;
    if (!el) return;

    // ❗ Don't load ad if container width is zero
    const width = el.offsetWidth;
    if (width === 0) {
      console.warn("Ad skipped (width = 0) for slot:", slot);
      return;
    }

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={style ?? { display: "block" }}
      data-ad-client="ca-pub-1776553000817606"
      data-ad-slot={getSlot(slot)}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

function getSlot(slotName: string) {
  const slots: Record<string, string> = {
    "top-banner": "7743658022",
    "right-sidebar": "5372645558",
    "after-editor": "6430576354",
    "footer-ad": "4059563881",
  };
  return slots[slotName] || "1234567890";
}
