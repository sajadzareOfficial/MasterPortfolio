import React from "react";
import { Experience as experienceElems } from "/constants/index.js";
const Experience = () => {
  return (
    // <div class="experience-container w-4/5 h-[1637px]   mt-24 flex flex-col items-center gap-16">
    <>
      <ExperienceTitle />
      {experienceElems.map((item) => {
        return (
          <>
            <div key={item.id}
              class="experience py-4 w-80 
        flex-col-center gap-6 
        glassy-DarkMode
        light:glassy-LightMode
        "
            >
              <div class=" title w-4/5 flex flex-col gap-2">
                <p class=" font-bold text-2xl">{item.Title}</p>
                <p class="  text-lg">{item.Company}</p>
                <p class=" text-sm">{item.TimeLine}</p>
              </div>
              <p class="experience__text text-base text-subTitle  w-4/5 ">
                {item.Description}
              </p>
              <ul class="project-item__FrameWork w-4/5  flex items-center justify-start gap-2 text-white">
                {item.Specializations.map(element => {
                  return <li class="FrameWork text-xs font-bold  flex items-center  px-4 py-2 bg-white/5 light:bg-dark/5 rounded-2xl ">

                  {element}
                </li>  
                })}
              </ul>
            </div>
          </>
        );
      })}
      {/* <div class="experience-Grids w-full h-4/5 grid grid-cols-1 grid-rows-3 justify-items-center  "> */}

      {/* </div> */}
    </>
    // </div>
  );
};

function ExperienceTitle() {
  return (
    <div class="experience-Title w-full h-1/6 flex-col-center  mb-10">
      <p class="px-3 py-0.5  text-[#06B6D4] rounded-2xl ring ">Experience</p>
      <p class="text-white  light:text-dark/80 font-bold  text-4xl my-4">
        Professional
        <span class="bg-linear-to-b h-11 bg-clip-text  text-transparent from-linear1 to-linear2 block text-center">
          Journey
        </span>
      </p>
      <p class="text-xl text-subTitle text-center w-4/5 mt-4">
        Building products th matter at innovative companies.
      </p>
    </div>
  );
}

export default Experience;
