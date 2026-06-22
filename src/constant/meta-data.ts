import type { Metadata } from "next";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";
import { myDomain } from "./domain";

const defaultTitle = "ou9999.dev";
const defaultDescription =
  "직접 탐구하고 겪었던 문제점과 개선점을 공유하는 글을 작성하는 블로그입니다.";
const defaultOpenGraphImage = "/imgs/openGraph/default-og.png";

const defaultOpenGraph: OpenGraph = {
  type: "website",
  title: defaultTitle,
  description: defaultDescription,
  images: {
    url: defaultOpenGraphImage,
    width: 1200,
    height: 630,
  },
};

const defaultTwitter: Twitter = {
  card: "summary_large_image",
  site: "@OU9999",
  title: defaultTitle,
  description: defaultDescription,
  images: [defaultOpenGraphImage],
};

const siteMetadata: Metadata = {
  metadataBase: new URL(myDomain),
  title: "ou9999.dev",
  description: "OU9999's blog",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    ...defaultOpenGraph,
  },
  twitter: {
    ...defaultTwitter,
  },
  verification: {
    google: "c08fG67rRWvc_6yY5wNMLhl__pmClidB0MxV4N-GLIw",
    other: {
      "naver-site-verification": "064760e130b51b3bf3bd7c0f24aa0d3892199f1f",
    },
  },
};

export { defaultOpenGraph, defaultTwitter, siteMetadata };
