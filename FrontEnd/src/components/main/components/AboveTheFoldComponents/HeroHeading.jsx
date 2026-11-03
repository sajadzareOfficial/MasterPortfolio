import { HeroSectionItems } from "../../../../../constants";

export default function HeroHeading() {
  const {
    title,
    highlightedTitle,
    titleSuffix,
    subtitle,
  } = HeroSectionItems;

  return (
    <>
      <h1 className="hero text-5xl text-white text-center light:text-black/70">
        {title}{" "}
        <span className="linear-gradient">{highlightedTitle}</span>{" "}
        {titleSuffix}
      </h1>

      <p className="sub-hero text-dark-subtitle light:text-light-title mt-10 w-4/5 text-xl text-center">
        {subtitle}
      </p>
    </>
  );
}
