import type { Metadata } from "next";
import HomeHero from "@/components/sections/HomeHero";
import QuickFacts from "@/components/sections/QuickFacts";
import StorySnapshot from "@/components/sections/StorySnapshot";
import LeadershipTiles from "@/components/sections/LeadershipTiles";
import FeaturedActivities from "@/components/sections/FeaturedActivities";
import GalleryCarousel from "@/components/ui/GalleryCarousel";
import Testimonials from "@/components/sections/Testimonials";
import CampaignBand from "@/components/sections/CampaignBand";

export const metadata: Metadata = {
  title: "Kamuskay Kamara | Leadership that listens. Action that delivers.",
  description:
    "Kamuskay Kamara: Berea College junior, community builder, and candidate for SGA Executive Chair.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <QuickFacts />
      <StorySnapshot />
      <LeadershipTiles />
      <FeaturedActivities />
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryCarousel />
        </div>
      </section>
      <Testimonials />
      <CampaignBand />
    </>
  );
}
