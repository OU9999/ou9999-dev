import type { Metadata } from "next";
import { defaultLocale, getLocalizedPath, locales, type AppLocale } from "@/i18n/config";
import { myDomain } from "./domain";

const siteTitle = "ou9999.dev";
const defaultDescription = "Only Clear in Hindsight";
const defaultOpenGraphImage = "/imgs/openGraph/default-og.png";
const twitterAccount = "@OU9999";

interface PageMetadataParams {
  title?: string;
  description?: string;
  image?: string;
  locale?: AppLocale;
  pathname?: string;
}

interface PostMetadataParams extends PageMetadataParams {
  publishedTime: string;
  tags: string[];
}

const openGraphLocales: Record<AppLocale, string> = {
  ko: "ko_KR",
  en: "en_US",
};

const createAlternates = (
  locale: AppLocale,
  pathname: string
): Metadata["alternates"] => {
  return {
    canonical: getLocalizedPath(locale, pathname),
    languages: {
      ko: getLocalizedPath("ko", pathname),
      en: getLocalizedPath("en", pathname),
      "x-default": getLocalizedPath(defaultLocale, pathname),
    },
  };
};

const getAlternateOpenGraphLocales = (locale: AppLocale) => {
  return locales
    .filter((alternateLocale) => alternateLocale !== locale)
    .map((alternateLocale) => openGraphLocales[alternateLocale]);
};

const createWebsiteOpenGraph = ({
  title = siteTitle,
  description = defaultDescription,
  image = defaultOpenGraphImage,
  locale = defaultLocale,
  pathname = "/",
}: PageMetadataParams): Metadata["openGraph"] => {
  return {
    type: "website",
    title,
    description,
    url: getLocalizedPath(locale, pathname),
    siteName: siteTitle,
    locale: openGraphLocales[locale],
    alternateLocale: getAlternateOpenGraphLocales(locale),
    images: {
      url: image,
      width: 1200,
      height: 630,
      alt: title,
    },
  };
};

const createArticleOpenGraph = ({
  title = siteTitle,
  description = defaultDescription,
  image = defaultOpenGraphImage,
  locale = defaultLocale,
  pathname = "/",
  publishedTime,
  tags,
}: PostMetadataParams): Metadata["openGraph"] => {
  return {
    type: "article",
    title,
    description,
    url: getLocalizedPath(locale, pathname),
    siteName: siteTitle,
    locale: openGraphLocales[locale],
    alternateLocale: getAlternateOpenGraphLocales(locale),
    publishedTime,
    tags,
    images: {
      url: image,
      width: 1200,
      height: 630,
      alt: title,
    },
  };
};

const createTwitter = ({
  title = siteTitle,
  description = defaultDescription,
  image = defaultOpenGraphImage,
}: PageMetadataParams): Metadata["twitter"] => {
  return {
    card: "summary_large_image",
    site: twitterAccount,
    creator: twitterAccount,
    title,
    description,
    images: {
      url: image,
      alt: title,
    },
  };
};

const createPageMetadata = ({
  title = siteTitle,
  description = defaultDescription,
  image = defaultOpenGraphImage,
  locale = defaultLocale,
  pathname = "/",
}: PageMetadataParams = {}): Metadata => {
  return {
    title,
    description,
    alternates: createAlternates(locale, pathname),
    openGraph: createWebsiteOpenGraph({
      title,
      description,
      image,
      locale,
      pathname,
    }),
    twitter: createTwitter({
      title,
      description,
      image,
    }),
  };
};

const createPostMetadata = ({
  title,
  description = defaultDescription,
  image = defaultOpenGraphImage,
  locale = defaultLocale,
  pathname = "/",
  publishedTime,
  tags,
}: PostMetadataParams): Metadata => {
  return {
    title,
    description,
    alternates: createAlternates(locale, pathname),
    openGraph: createArticleOpenGraph({
      title,
      description,
      image,
      locale,
      pathname,
      publishedTime,
      tags,
    }),
    twitter: createTwitter({
      title,
      description,
      image,
    }),
  };
};

const createSiteMetadata = (locale: AppLocale = defaultLocale): Metadata => {
  return {
    metadataBase: new URL(myDomain),
    applicationName: siteTitle,
    authors: {
      name: "Yujin Oh",
    },
    creator: "Yujin Oh",
    publisher: siteTitle,
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [
        {
          url: "/favicon.ico",
          sizes: "256x256",
        },
        {
          url: "/favicon.png",
          sizes: "1254x1254",
          type: "image/png",
        },
      ],
    },
    ...createPageMetadata({
      locale,
      pathname: "/",
    }),
    verification: {
      google: "c08fG67rRWvc_6yY5wNMLhl__pmClidB0MxV4N-GLIw",
      other: {
        "naver-site-verification": "064760e130b51b3bf3bd7c0f24aa0d3892199f1f",
      },
    },
  };
};

export {
  createPageMetadata,
  createPostMetadata,
  createSiteMetadata,
  defaultDescription,
  defaultOpenGraphImage,
  siteTitle,
};
