import ProjectPortfolioAlternateSections from "../components/project";
import CardWithImageBlogSection from "../components/blog";
import ComparisonCardsFeatureSection from "../components/hero";
import { HeroSectionWithCarouselSlider } from "@/components/carousel";

export default function Home() {
  return (
    <main>
      <HeroSectionWithCarouselSlider />
      <CardWithImageBlogSection />
      <ProjectPortfolioAlternateSections />
    </main>
  );
}
