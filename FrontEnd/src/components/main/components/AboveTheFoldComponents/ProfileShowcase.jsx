import { HeroSectionItems, HeroAssets } from "../../../../../constants";

export default function ProfileShowcase() {
  const { profile } = HeroSectionItems;

  return (
    <div className="main-img-Container w-full p-0 mt-5 h-[600px] overflow-hidden relative">
      <div className="main-img light:bg-light-blue/30 hover:animate-pulse w-4/5 h-[450px] rounded-4xl border-2 border-white/80 md:w-2/3 bg-gradient-to-t bg-dark opacity-100 absolute right-0 flex items-center justify-center">
        <img
          src={HeroAssets.profileImage}
          className="max-w-3/5 md:w-[40%]"
          alt="Profile"
        />

        <div className="w-4/5 h-28 bg-dark light:bg-white/90 light:border-2 light:border-black/20 rounded-2xl z-10 absolute bottom-5 ring-3 ring-white/10 flex flex-col items-center justify-around">
          <div className="flex items-center justify-between w-4/5">
            <p className="text-linear1 text-lg inline">
              {profile.statusLabel}
            </p>
            <span className="circle inline size-4 rounded-full bg-[#00C950] ring-6 ring-green-500/50 animate-pulse" />
          </div>

          <p className="Text text-white text-xl w-4/5 light:text-light__text">
            {profile.statusText}{" "}
            <span className="text-pink-400">
              {profile.highlightedText}
            </span>
          </p>
        </div>
      </div>

      <div className="main-img__border w-4/5 h-[450px] md:w-2/3 rounded-4xl border-2 border-linear1/20 absolute -right-10 mt-10 -z-10 flex justify-center items-end">
        <div className="main-img__line animate-bounce w-[3px] h-12 absolute -bottom-8 bg-gradient-to-b from-linear1/5 from-0% via-linear1 via-50% to-linear1/5 to-100%" />
      </div>

      <div className="main-img__border md:w-2/3 w-4/5 h-[450px] rounded-4xl border-2 border-linear2/20 absolute -right-20 mt-20 -z-20" />
    </div>
  );
}
