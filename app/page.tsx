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

export default function Home() {
  return (
    <BookingProvider>
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
