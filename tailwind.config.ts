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
          "50": "#f8fafc", //#f8f9fa #F8FAFA #f8fafc
          "100": "#f1f5f9", //#e9ecef #F2F5F5 #f1f5f9
          "200": "#e2e8f0", // #e9ecef #E6EBEB #e2e8f0
          "300": "#cbd5e1", //#dee2e6 #D2DBE0 #cbd5e1
          "400": "#94a3b8", //#ced4da #B8C6CD #94a3b8
          "500": "#6b7280", //#adb5bd #91A3B0 #5C697D
          "600": "#374151", //#6c757d #8394A4 #374151 #4b5563
          "700": "#282C35", //#495057 #708091 #282C35
          "800": "#1b1e24", //#343a40 #5E6C79 #1F2229
          "900": "#111111", //#212529 #4E5864 #131519
          "950": "#0B0C0F", // #0D0E12 #333B42 #0B0C0F
        },
        gunmetal: {
          "50": "#F4F7F7", //
          "100": "#E2EAEB", //
          "200": "#C8D6D9", //
          "300": "#A1BABF", //
          "400": "#73969D", //
          "500": "#587B82", //
          "600": "#4C676E", //
          "700": "#42555C", //
          "800": "#3B494F", //
          "900": "#2C3539", //
          "950": "#20292C", //
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
