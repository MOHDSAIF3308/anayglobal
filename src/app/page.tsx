import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Intro } from "@/components/home/Intro";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { NetworkPreview } from "@/components/home/NetworkPreview";
import { Industries } from "@/components/home/Industries";
import { Testimonials } from "@/components/home/Testimonials";
import { StatsBand } from "@/components/home/StatsBand";
import { CTABand } from "@/components/ui/CTABand";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Intro />
        <ServicesPreview />
        <NetworkPreview />
        <Industries />
        <StatsBand />
        <Testimonials />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
