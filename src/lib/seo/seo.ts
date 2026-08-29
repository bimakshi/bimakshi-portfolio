import type { NextSeoProps } from "next-seo";

import { siteMetadata } from "@/data/siteMetaData.mjs";

interface PageSeoInput {
  title: string;
  description: string;
  /** Path starting with "/", or "" for the home page. */
  path?: string;
  type?: "website" | "profile" | "article";
  /** Absolute or root-relative image URL; defaults to the site OG banner. */
  image?: string;
  imageAlt?: string;
}

const OG_IMAGE_ALT = `${siteMetadata.author} - ${siteMetadata.description}`;

/**
 * Builds a consistent NextSeo config for a page: canonical URL, Open Graph,
 * Twitter card, and a correctly sized OG image.
 */
export function pageSeo({
  title,
  description,
  path = "",
  type = "website",
  image,
  imageAlt,
}: PageSeoInput): NextSeoProps {
  const url = `${siteMetadata.siteUrl}${path}`;
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${siteMetadata.siteUrl}${image}`
    : `${siteMetadata.siteUrl}${siteMetadata.image}`;

  return {
    title,
    description,
    canonical: url,
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteMetadata.siteName,
      locale: siteMetadata.locale,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          type: "image/png",
          alt: imageAlt ?? OG_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      cardType: "summary_large_image",
    },
    additionalMetaTags: [
      { name: "keywords", content: siteMetadata.keywords.join(", ") },
      { name: "author", content: siteMetadata.author },
    ],
  };
}
