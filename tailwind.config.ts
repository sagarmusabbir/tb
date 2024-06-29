import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        // primary: colors.emerald,
        primary: {
          "50": "#EDFCF5",
          "100": "#D3F8E6",
          "200": "#AAF0D1",
          "300": "#73E2B8",
          "400": "#3ACD9A",
          "500": "#17B282",
          "600": "#0B9069",
          "700": "#097357",
          "800": "#0A5B45",
          "900": "#094B3B",
          "950": "#042A22",
        },
      },
      boxShadow: {
        "lg-light":
          "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [flowbite.plugin()],
} satisfies Config;
