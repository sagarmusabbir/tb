import { LogoCTALinksImageFeatureListContentSection } from "@/components/feature-list";
import { BackgroundCoverImageWithCTAsHero } from "@/components/mainhero";

import { CTASectionWithTabsAndMobileApp } from "@/components/tabs";

export default function Home() {
  return (
    <main>
      <BackgroundCoverImageWithCTAsHero />
      <LogoCTALinksImageFeatureListContentSection />
      <CTASectionWithTabsAndMobileApp />
    </main>
  );
}
