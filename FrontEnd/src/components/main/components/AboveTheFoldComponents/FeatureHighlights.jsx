import { HeroSectionItems, HeroAssets } from "../../../../../constants";

const featureIcons = {
  "clean-code": HeroAssets.codeIcon,
  "pixel-perfect": HeroAssets.pixelIcon,
  performance: HeroAssets.rocketIcon,
};

export default function FeatureHighlights() {
  return (
    <div className="w-4/5 h-16 flex justify-between items-center gap-2">
      {HeroSectionItems.features.map((feature) => (
        <div
          key={feature.id}
          className="info-box w-1/3 h-full flex items-center justify-center gap-2"
        >
          <img
            src={featureIcons[feature.id]}
            alt=""
            aria-hidden="true"
          />
          <p className="text-white">{feature.label}</p>
        </div>
      ))}
    </div>
  );
}
