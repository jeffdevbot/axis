import type { Metadata } from "next";
import { BookingProvider } from "@/components/booking-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { TacosFull } from "@/components/tacos-full";
import { FinalCTA } from "@/components/final-cta";
import { SITE_URL } from "@/lib/site-url";

// Overriding openGraph drops the inherited root opengraph-image, so reference it directly
const shareImage = { url: "/opengraph-image.png", width: 1200, height: 630 };
const title = "Amazon TACoS Calculator — Axis Brands Group";
const description =
  "Free TACoS calculator to validate Amazon product economics before you invest. Enter price, conversion rate, and CPC — get an instant read on whether the math works.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/tacos-calculator" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/tacos-calculator",
    siteName: "Axis Brands Group",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

const calculatorJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Amazon TACoS Calculator",
  url: `${SITE_URL}/tacos-calculator`,
  description,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  provider: { "@type": "Organization", name: "Axis Brands Group", url: SITE_URL },
};

export default function TacosCalculatorPage() {
  return (
    <BookingProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorJsonLd) }}
      />
      <Nav />
      <main>
        <div className="pt-24">
          <TacosFull />
        </div>
        <FinalCTA />
      </main>
      <Footer />
    </BookingProvider>
  );
}
