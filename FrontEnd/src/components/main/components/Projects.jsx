import React from "react";
import { projrct_section } from "/constants/index.js";

const Projects = () => {
  return (
    <div class="Projrcts h-auto    w-4/5 flex-col-center">
      <Static_ProjectPart />
      {projrct_section.map((item) => {
        return (
          <>
            
              

<div class="bg-neutral-primary-soft block max-w-sm border border-default rounded-xl bg-white/5 shadow-xs ring-2 ring-white/50 m-18">
    <a href="#">
        <img class="w-full  rounded-xl" src={item.imgSrc} alt="" />
    </a>
    <div class="p-6 text-center">
        <span class="inline-flex items-center bg-blue-400 border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
            <svg class="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"/></svg>
            Trending
        </span>
        <a href="#">
            <h5 class="mt-3 mb-6 text-white text-2xl font-semibold tracking-tight text-heading"> {item.Title}</h5>
        </a>
        <a href="#" class="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
            Read more
            <svg class="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
        </a>
    </div>
</div>

           
          </>
        );
      })}
    </div>
  );
};
// <div class="project w-70 md:w-96  h-[500px] rounded-md  ring-2 ring-white bg-project flex flex-col justify-around items-center mt-19 relative">
//                 <img
//                   src={item.imgSrc}
//                   alt=""
//                   class=" size-full  object-fill rounded-md "
//                 />
//                 <div className="absolute bottom-5   bg-FrameWork">
//                     <div class="Project-info w-4/5 rounded-b-2xl    gap-2 flex flex-col  justify-center">
//                   <p class="project-item__title text-white text-2xl ">
//                     {item.Title}
//                   </p>
//                   <p class="project-item__subTitle text-sm text-gray-400">
//                     {item.Description}
//                   </p>
//                 </div>
//                 <ul class="project-item__Technologis w-full  ml-18 flex items-center justify-start gap-1">
//                   {item.Technologies.map((element) => {
//                     return (
//                       <li class="FrameWork h-6 flex items-center  p-3 bg-white/5 rounded-2xl text-FrameWork">
//                         {element}
//                       </li>
//                     );
//                   })}
//                 </ul>
//                 </div>
//               </div>
<div
  class="Projrcts-items mt-24 w-[328px] h-[1523px]
                grid grid-cols-1 grid-rows-3 font-bold gap-8"
>
  <div class="project  rounded-2xl w-full h-auto ring-2 ring-white bg-project flex flex-col justify-around items-center">
    <img
      src="assets/photos/Image.png"
      alt=""
      class="w-full h-1/2 rounded-t-2xl "
    />
    <div class="Project-info w-4/5 h-1/2 rounded-b-2xl    gap-2 flex flex-col  justify-center">
      <p class="project-item__title text-white text-2xl ">Nova Financial</p>
      <p class="project-item__subTitle text-sm text-gray-400">
        Real-time cryptocurrency trading dashboard with live WebSocket feeds,
        advanced charting, and portfolio analytics.
      </p>
      <ul class="project-item__FrameWork w-full  flex items-center justify-start gap-1">
        <li class="FrameWork h-6 flex items-center  p-3 bg-white/5 rounded-2xl text-FrameWork">
          React
        </li>
        <li class="FrameWork h-6 flex items-center  p-3 bg-white/5 rounded-2xl text-FrameWork">
          D3.js
        </li>
        <li class="FrameWork h-6 flex items-center  p-3 bg-white/5 rounded-2xl text-FrameWork">
          Supabase
        </li>
      </ul>
      <div class="project-item__source w-full border-t-2 border-white/5 flex mt-2 items-center justify-start gap-8">
        <a href="" class="flex mt-4  gap-1 items-center">
          <img
            class="size-6"
            src="assets/svg/infinity-endless-svgrepo-com.svg"
            alt=""
          />
          <p class="text-sm text-white">Live Demo</p>
        </a>
        <a href="" class="flex  mt-4 gap-1 items-center">
          <img
            class="size-6"
            src="assets/svg/github-142-svgrepo-com.svg"
            alt=""
          />
          <p class="text-sm text-white">Source</p>
        </a>
      </div>
    </div>
  </div>
</div>;

function Static_ProjectPart() {
  return (
    <div class="Projects-title w-4/5 h-[142px] mt-24  ">
      <div class="w-full  flex-center">
        <p class="rounded-2xl  w-auto ring-2 ring-linear3 text-linear3 p-2">
          Selected Works
        </p>
      </div>
      <p class=" text-3xl md:text-4xl  text-white font-bold mt-4">
        Featured{" "}
        <span class="bg-linear-to-t bg-clip-text text-transparent from-linear3 to-linear2">
          Projects
        </span>
      </p>
      <div class="btn mt-6  ring-2 ring-border rounded-2xl p-2 bg-border/30">
        <a class="flex items-center justify-center gap-3 " href="">
          <p class="text-white">View All Projects</p>
          <img
            src="assets/svg/arow.svg"
            class="rotate-45 bg-amber-50   fill-amber-50"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Projects;
