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
  },
};

export default config;
