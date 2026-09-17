import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Looksbay",
    short_name: "Looksbay",
    description: "High-performance web design and development for ambitious businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#9D5CFF",
  };
}