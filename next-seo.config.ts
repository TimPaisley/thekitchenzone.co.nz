import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  title: "The Kitchen Zone",
  description:
    "High quality kitchens, vanities and furniture from Tauranga, New Zealand.",
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://thekitchenzone.co.nz",
    siteName: "The Kitchen Zone",
    images: [
      {
        url: "https://thekitchenzone.co.nz/og-image1.jpg",
        width: 1000,
        height: 600,
        alt: "A kitchen designed and installed by The Kitchen Zone",
      },
      {
        url: "https://thekitchenzone.co.nz/og-image2.jpg",
        width: 1000,
        height: 600,
        alt: "A kitchen designed and installed by The Kitchen Zone",
      },
    ],
  },
};

export default config;
