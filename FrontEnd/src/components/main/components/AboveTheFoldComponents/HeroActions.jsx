import { heroAlert, HeroAssets } from "../../../../../constants";

export default function HeroActions() {
  return (
    <div className="btns mt-8 w-40 h-32 flex flex-col gap-4">
      {heroAlert.actions.map((action) => (
        <a
          key={action.id}
          href={action.href}
          className={
            action.type === "primary"
              ? "w-full h-1/2 bg-linear-to-b from-linear1 from-0% to-linear2 to-100% rounded-4xl flex-center gap-2"
              : "w-full h-1/2 glassy-DarkMode light:glassy-LightMode border border-border rounded-4xl flex-center gap-2"
          }
        >
          <span
            className={
              action.type === "primary"
                ? "text-[#082F49] font-bold"
                : "font-bold"
            }
          >
            {action.label}
          </span>

          <img
            className="size-5"
            src={
              action.type === "primary"
                ? HeroAssets.arrow
                : HeroAssets.folder
            }
            alt=""
            aria-hidden="true"
          />
        </a>
      ))}
    </div>
  );
}
