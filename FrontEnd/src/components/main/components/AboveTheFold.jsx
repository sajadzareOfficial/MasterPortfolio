import BlueAlert from "./AboveTheFoldComponents/BlueAlert";
import HeroHeading from "./AboveTheFoldComponents/HeroHeading";
import HeroActions from "./AboveTheFoldComponents/HeroActions";
import ScrollIndicator from "./AboveTheFoldComponents/ScrollIndicator";
import FeatureHighlights from "./AboveTheFoldComponents/FeatureHighlights";
import ProfileShowcase from "./AboveTheFoldComponents/ProfileShowcase";

export default function AboveTheFold() {
  return (
    <section className="w-full flex flex-col items-center">
      <BlueAlert />
      <HeroHeading />
      <HeroActions />
      <ScrollIndicator />
      <FeatureHighlights />
      <ProfileShowcase />
    </section>
  );
}
