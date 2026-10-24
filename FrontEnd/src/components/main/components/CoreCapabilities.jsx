import React from "react";
import { Core_Capabilities as abilitys } from "/constants/index.js";
const CoreCapabilities = (props) => {
  return (
    <div class="Ability-container  w-full h-auto flex-col-center ">
      <AbilityTitle />

      {abilitys.map((abilityItem) => {
        return (
          <div
            class=" relative w-3/5 md:w-2/5 h-80 glassy-DarkMode light:glassy-LightMode  flex flex-col overflow-hidden justify-around mt-8 "
            onPointerMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty(
                "--x",
                `${e.clientX - rect.left}px`,
              );
              e.currentTarget.style.setProperty(
                "--y",
                `${e.clientY - rect.top}px`,
              );
            }}
          >
            <div
              class={`circle-efect size-24 rounded-full blur-2xl ${abilityItem.circleColor}  absolute -right-8 -top-8`}
            />
            <img
              src={abilityItem.imgSrc}
              class="size-12 relative  left-5  "
              alt=""
            />
            <p class="Ability-Front__Title ml-5 text-xl text-dark-title light:text-light-title">
              {abilityItem.Title}
            </p>
            <p class="md:text-lg  w-4/5 ml-5 mb-2  inline text-dark-subtitle light:text-light-subtitle">
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
    <div class="Ability-Info  mb-16 flex-col-center gap-4">
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
