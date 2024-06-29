import { Hero } from "~/components/hero";

import { ComparisonCardsFeatureSection } from "./projects/feature-sections/comparison";
import { FeatureListWithCTAsSection } from "./projects/feature-sections/cta-list";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-2xl p-4">
      <div>
        <Hero />
      </div>
      <div>
        <ComparisonCardsFeatureSection />
      </div>

      <div>
        <FeatureListWithCTAsSection />
      </div>
    </div>
  );
}
