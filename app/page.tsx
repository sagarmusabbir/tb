import { LogoCTALinksImageFeatureListContentSection } from "@/components/about";
import { BackgroundCoverImageWithCTAsHero } from "@/components/mainhero";

import { CTASectionWithTabsAndMobileApp } from "@/components/services";

export default function Home() {
  return (
    <main>
      <BackgroundCoverImageWithCTAsHero />
      <LogoCTALinksImageFeatureListContentSection />
      <CTASectionWithTabsAndMobileApp />
    </main>
  );
}
