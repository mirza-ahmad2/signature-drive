export const SITE_NAME = "Signature Vans Direct";
export const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ||
  "https://www.signaturevansdirect.co.uk";

export const SITE_DEFAULT_DESCRIPTION =
  "Family-run van and truck dealership in Newcastle & Gateshead. Sale, hire and nationwide sourcing — 40+ years of no-pressure, honest advice.";

export const SITE_KEYWORDS =
  "van sales Newcastle, truck sales Gateshead, van hire Team Valley, commercial vehicles North East, Luton van, panel van, tipper, 18T truck, camper conversion base, Signature Vans Direct";

export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const DEFAULT_KEYWORDS = SITE_KEYWORDS;

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
};

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageHead({
  title,
  description,
  path,
  keywords = DEFAULT_KEYWORDS,
  image = OG_IMAGE,
}: PageSeo) {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "googlebot", content: "index, follow" },
      { name: "author", content: SITE_NAME },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_GB" },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: fullTitle },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:image:alt", content: fullTitle },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: SITE_NAME,
  url: SITE_URL,
  image: OG_IMAGE,
  description: SITE_DEFAULT_DESCRIPTION,
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "388 West Road",
      addressLocality: "Newcastle Upon Tyne",
      postalCode: "NE5 2ER",
      addressCountry: "GB",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Team Valley, Gateshead",
      addressCountry: "GB",
    },
  ],
  areaServed: ["Newcastle", "Gateshead", "North East England", "United Kingdom"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "15:00",
    },
  ],
};
