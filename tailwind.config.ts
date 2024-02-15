import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Manrope"', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#0288bd',
        secondary: '#0288bd',
      },
    },
  },
  plugins: [],
};
export default config;
