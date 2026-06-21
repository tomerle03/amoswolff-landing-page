import { createFileRoute } from "@tanstack/react-router";
import heroBike from "@/assets/hero-bike.jpg";
import { Index } from "@/landing-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amos Wolff — Bike Fitting & Cycling Performance" },
      {
        name: "description",
        content:
          "Master-level bike fitting on the Guru platform. 20+ years engineering precision, comfort and power for cyclists and pro teams in Israel.",
      },
      { property: "og:title", content: "Amos Wolff — Bike Master" },
      {
        property: "og:description",
        content:
          "Precision bike fitting and professional cycling event management by Amos Wolff.",
      },
      { property: "og:image", content: heroBike },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});
