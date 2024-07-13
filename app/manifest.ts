import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Third Bracket Solutions",
    short_name: "TB",
    description:
      "Step into Third Bracket Solutions, a UK-based modern web infrastructure development service born from the collective efforts of a group of nomads who conquered platforms like Upwork and Fiverr.",
    start_url: "/",
    display: "standalone",
    background_color: "#282c35",
    theme_color: "#3ACD9A",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
