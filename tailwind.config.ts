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
      colors: {
        neutral: {
          100: '#f5f5f5',
          200: '#e5e5e5',
          800: '#333333',
        },
      },
    },
  },  
  plugins: [],
} satisfies Config;
