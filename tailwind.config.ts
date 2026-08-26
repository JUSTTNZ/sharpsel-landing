import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "accent-start": "var(--accent-start)",
        "accent-end": "var(--accent-end)",
        "accent-text": "var(--accent-text)",
        "green-tint": "var(--green-tint)",
        border: "var(--border)",
        dark: "var(--dark)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        heading: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(135deg, var(--accent-start), var(--accent-end))",
      },
    },
  },
  plugins: [],
};
export default config;
