import React, { useEffect, useState } from "react";

// SunMoonToggle.tsx
// Next.js + TypeScript + Tailwind CSS component
// - toggles `dark` class on <html>
// - animated SVG sun <-> moon transition
// Usage: import and render <SunMoonToggle /> anywhere (e.g. in your header)

export default function SunMoonToggle({ setTheme, theme }: { setTheme: (theme: string) => void; theme?: string }) {

  return (
    <button
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(theme ==="light" ? "dark" : "light")}
      type="button"
      className="w-12 h-12 cursor-pointer rounded-lg flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 transition-colors"
    >
      <div className="relative w-8 h-8">
        {/* Sun */}
        <svg
          className={`absolute inset-0 w-8 h-8 transform transition-all duration-500 ${theme !== "dark" ? "opacity-0 scale-50 rotate-90" : "opacity-100 scale-100 rotate-0"}`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="4" className="fill-yellow-400 dark:fill-yellow-300" />

          {/* rays */}
          <g className={`transition-all duration-700 transform ${theme !== "dark" ? "opacity-0 scale-75" : "opacity-100 scale-100"}`}>
            <path d="M12 1v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-yellow-400 dark:text-yellow-300" />
            <path d="M12 21v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-yellow-400 dark:text-yellow-300" />
            <path d="M4.22 4.22l1.42 1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-yellow-400 dark:text-yellow-300" />
            <path d="M18.36 18.36l1.42 1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-yellow-400 dark:text-yellow-300" />
            <path d="M1 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-yellow-400 dark:text-yellow-300" />
            <path d="M21 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-yellow-400 dark:text-yellow-300" />
            <path d="M4.22 19.78l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-yellow-400 dark:text-yellow-300" />
            <path d="M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-yellow-400 dark:text-yellow-300" />
          </g>
        </svg>

        {/* Moon */}
        <svg
          className={`absolute inset-0 w-8 h-8 transform transition-all duration-500 ${theme !== "dark" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-45"}`}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Using two circles to create crescent effect */}
          <g className="transition-transform duration-700">
            <path
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
              fill="black"
              className="text-gray-900 dark:text-gray-100"
            />
          </g>
        </svg>
      </div>
    </button>
  );
}

/*
Tailwind Notes / Setup to make this work well:
1) In tailwind.config.js set darkMode: 'class'

module.exports = {
  darkMode: 'class',
  // ... rest of your config
}

2) Make sure you included the generated CSS in _app.tsx or globals.css
3) Use this component anywhere in your layout (Header/Nav). It writes the chosen theme to localStorage and toggles the `dark` class on <html>.

Accessibility:
- The button has aria-label and title to help screen readers.

Customization ideas:
- Add a small motion (tailwind animate) for the sun rays when switching.
- Persist user preference on server via cookie if you need SSR-aware theme.
*/
