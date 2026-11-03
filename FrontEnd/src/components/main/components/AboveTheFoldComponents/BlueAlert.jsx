import { HeroSectionItems } from "../../../../../constants";

export default function BlueAlert() {
  return (
    <div className="w-70 h-10 mt-10 flex-center justify-around relative py-2 px-3 rounded-4xl bg-secondary/5 ring-1 ring-secondary/50">
      <span className="size-4 relative flex shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
        <span className="relative inline-flex size-4 rounded-full bg-secondary" />
      </span>

      <p className="ml-3 flex items-center h-5 text-secondary">
        {HeroSectionItems.blueAlert}
      </p>
    </div>
  );
}
