import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          light: "#6D28D9",
          DEFAULT: "#5B21B6",
          dark: "#4C1D95",
        },
        secondary: {
          light: "#3B82F6",
          DEFAULT: "#2563EB",
          dark: "#1D4ED8",
        },
        error: {
          light: "#F87171",
          DEFAULT: "#EF4444",
          dark: "#B91C1C",
        },
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
        secondary: ["Open Sans", "sans-serif"],
        error: ["Courier New", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;