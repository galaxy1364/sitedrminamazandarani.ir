import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "دکتر مینا",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fbfbff",
    theme_color: "#7557e8",
    lang: "fa",
    dir: "rtl"
  };
}
