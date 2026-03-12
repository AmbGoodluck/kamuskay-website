import type { Metadata } from "next";
import HomeHero from "@/components/sections/HomeHero";
import QuickFacts from "@/components/sections/QuickFacts";
import StorySnapshot from "@/components/sections/StorySnapshot";
import LeadershipTiles from "@/components/sections/LeadershipTiles";
import FeaturedActivities from "@/components/sections/FeaturedActivities";
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
      <Testimonials />
      <CampaignBand />
    </>
  );
}
