import { BookingProvider } from "@/components/booking-provider";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { WhyAxis } from "@/components/why-axis";
import { Clients } from "@/components/clients";
import { Services } from "@/components/services";
import { TacosWidget } from "@/components/tacos-widget";
import { Testimonials } from "@/components/testimonials";
import { Team } from "@/components/team";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { SITE_URL } from "@/lib/site-url";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Axis Brands Group",
  url: SITE_URL,
  logo: `${SITE_URL}/axis-logo-navy.svg`,
  description:
    "Operator-led Amazon and Walmart growth partner. Flat monthly fee, no percentage of ad spend, no lock-in contracts.",
  founder: [
    { "@type": "Person", name: "Adam Levinter" },
    { "@type": "Person", name: "Anshuman Chhabra" },
    { "@type": "Person", name: "Jeffrey Talajic" },
  ],
  areaServed: "Worldwide",
  knowsAbout: ["Amazon marketplace", "Walmart marketplace", "Ecommerce growth", "Advertising optimization"],
};

export default function Home() {
  return (
    <BookingProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Reveal>
          <Stats />
        </Reveal>
        <Reveal>
          <WhyAxis />
        </Reveal>
        <Reveal>
          <Clients />
        </Reveal>
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <TacosWidget />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <Team />
        </Reveal>
        <FinalCTA />
      </main>
      <Footer />
    </BookingProvider>
  );
}
