import ProjectPortfolioAlternateSections from "../components/project";

import { BackgroundCoverImageWithCTAsHero } from "@/components/mainhero";
import { CTASectionWithTabsAndMobileApp } from "@/components/tabs";

export default function Home() {
  return (
    <main>
      <BackgroundCoverImageWithCTAsHero />
      <CTASectionWithTabsAndMobileApp />

      <ProjectPortfolioAlternateSections />
    </main>
  );
}
