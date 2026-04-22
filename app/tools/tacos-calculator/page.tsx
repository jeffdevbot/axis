import type { Metadata } from "next";
import { BookingProvider } from "@/components/booking-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { TacosFull } from "@/components/tacos-full";
import { FinalCTA } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Amazon TACoS Calculator — Axis Brands Group",
  description:
    "Free TACoS calculator to validate Amazon product economics before you invest. Enter price, conversion rate, and CPC — get an instant read on whether the math works.",
};

export default function TacosCalculatorPage() {
  return (
    <BookingProvider>
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
