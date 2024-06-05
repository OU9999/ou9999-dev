import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";

const defaultTitle = "ou9999.dev";
const defaultDescription =
  "직접 탐구하고 겪었던 문제점과 개선점을 공유하는 글을 작성하는 블로그입니다.";

export const defaultOpenGraph: OpenGraph = {
  type: "website",
  title: defaultTitle,
  description: defaultDescription,
  images: {
    url: "/imgs/openGraph/ovo3.png",
    width: 1200,
    height: 630,
  },
};

export const defaultTwitter: Twitter = {
  card: "summary_large_image",
  site: "@OU9999",
  title: defaultTitle,
  description: defaultDescription,
  images: ["/imgs/openGraph/ovo3.png"],
};
