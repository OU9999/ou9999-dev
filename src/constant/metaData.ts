import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";

const defaultTitle = "ou9999.dev";
const defaultDescription = "OU9999's blog";

export const defaultOpenGraph: OpenGraph = {
  type: "website",
  title: defaultTitle,
  description: defaultDescription,
  images: {
    url: "/openGraph/ovo3.png",
    width: 1200,
    height: 630,
  },
};

export const defaultTwitter: Twitter = {
  card: "summary_large_image",
  site: "@OU9999",
  title: defaultTitle,
  description: defaultDescription,
  images: ["/openGraph/ovo3.png"],
};
