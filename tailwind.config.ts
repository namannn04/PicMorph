import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        sans: ["Inter", "Sans-serif"],
      },
      colors: {
        primary: "#333",
        secondary: "#555",
        accent: "#f5f5f5",
      },
      boxShadow: {
        card: "0 4px 8px rgba(0, 0, 0, 0.1)",
      },
    },
  },  
  plugins: [],
} satisfies Config;
