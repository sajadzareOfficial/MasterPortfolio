import React from "react";
import { Core_Capabilities as abilitys } from "/constants/index.js";
const CoreCapabilities = (props) => {
  return (
    <div class="Ability-container  w-full h-auto flex-col-center ">
      <AbilityTitle />

      {abilitys.map((abilityItem) => {
        
        return (
          <div class=" relative w-3/5 md:w-2/5 h-80 bg-white/5 light:bg-black/5 ring-2 ring-white/10 rounded-2xl backdrop-blur-md   flex flex-col overflow-hidden justify-around mt-8 ">
            <div
              class={`circle-efect size-24 rounded-full blur-2xl ${abilityItem.circleColor}  absolute -right-8 -top-8`}
            />
            <img
              src={abilityItem.imgSrc}
              class="size-12 relative  left-5  "
              alt=""
            />
            <p class="Ability-Front__Title ml-5 text-xl text-white light:text-black">
              {abilityItem.Title}
            </p>
            <p class="md:text-lg text-white/60 w-4/5 ml-5 mb-2  inline light:text-black/70">
              {abilityItem.Description}
            </p>
          </div>
        );
      })}
    </div>

  );
};



function AbilityTitle() {
  return (
    <div class="Ability-Info mt-24 mb-16 flex-col-center gap-4">
      <p class="Text  text-white text-3xl light:text-black">
        Core <span class="text-linear1">Capabilities</span>
      </p>
      <p class="sub_Text text-center w-4/5 inline text-gray-300 text-xl light:text-light__text">
        Blending technical expertise with creative direction to build scalable,
        beautiful products.
      </p>
    </div>
  );
}
export default CoreCapabilities;
