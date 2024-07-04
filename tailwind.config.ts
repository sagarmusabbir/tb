import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
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
        gray: {
          "50": "#f8fafc",
          "100": "#f1f5f9",
          "200": "#e2e8f0",
          "300": "#cbd5e1",
          "400": "#94a3b8",
          "500": "#64748b",
          "600": "#374151",
          "700": "#303540",
          "800": "#282C35",
          "900": "#1F2229",
          "950": "#0F0F0F",
          //#4b5563
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
