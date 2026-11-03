import { HeroAssets } from "../../../../../constants";

export default function ScrollIndicator() {
  return (
    <div className="circle-bounce mt-4 size-7 rounded-full bg-white animate-bounce ring-4 ring-border flex items-center justify-center">
      <img
        src={HeroAssets.arrow}
        className="rotate-[135deg]"
        alt="Scroll down"
      />
    </div>
  );
}
