import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Intro } from "@/components/home/Intro";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { NetworkPreview } from "@/components/home/NetworkPreview";
import { Industries } from "@/components/home/Industries";
import { StatsBand } from "@/components/home/StatsBand";
import { ProjectsPreview } from "@/components/home/ProjectsPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABand } from "@/components/ui/CTABand";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Intro />
      <ServicesPreview />
      <NetworkPreview />
      <Industries />
      <StatsBand />
      <ProjectsPreview />
      <Testimonials />
      <CTABand />
    </>
  );
}
