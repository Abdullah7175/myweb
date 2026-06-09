import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abdullah Anis — DevOps Engineer Portfolio",
    short_name: "Abdullah Anis",
    description:
      "DevOps Engineer, Full-Stack Developer, and IT System Director portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#020617",
    lang: "en",
  };
}
