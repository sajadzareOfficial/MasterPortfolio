import React from "react";
import { Contact as contactElems } from "/constants/index.js";
const Contact = () => {
 
  return (
    <div className=" mt-10 Aboutme-section w-full flex-col-center gap-12 bg-linear-to-b from-linear1/0 to-linear1/10 light:from-linear2/8 light:to-linear1/18">
      <StaticContactItems />
      <ul class="Aboutme-link-grid w-full h-28 text-base mb-5  grid grid-cols-2 grid-rows-2 gap-2 justify-items-center ">
        {contactElems[0].Messaging_Apps.map((element) => {
          return(
          <li  key={element.id} class="Github ml-16 flex-center gap-3">
            <div class="size-10 rounded-full glassy-DarkMode light:glassy-LightMode flex-center">
              <img class="size-6 " src={`${element.imgSrc}`} alt={`${element.Title}-img`} />
            </div>
            <a href={`${element.Href}`} class=" text-subTitle font-bold">{element.Title}</a>
          </li>)
        })}
      </ul>
    </div>
  );
};

function StaticContactItems() {
  const items = contactElems[0];
  return (
   <>
      <div class="Aboutme-Title mt-10 w-4/5 font-bold">
        <p class="text-4xl  text-white light:text-black/80 text-center">{items.Title}</p>
        <p class="bg-linear-to-b h-12   text-center text-4xl bg-clip-text text-transparent from-linear1 from-0% via-linear2 via-45% to-linear3 to-100%">
          {items.ColorofullWord}
        </p>
        <p class="text-lg font-normal text-subTitle text-center mt-6">
          {items.Description}
        </p>
      </div>
      <ul class="Aboutme-Btns flex-col-center gap-4">
        <li class="Aboutme-Btn w-37 h-14 rounded-full flex-center gap-1.5 font-bold bg-linear-to-b from-linear1 to-linear2">
          <img class="size-5" src="assets/svg/letter-svgrepo-com.svg" alt="" />
          <p class="text-[#082F49] text-base"> Get In Touch</p>
        </li>
        <li
          class="Aboutme-Btn w-44 bg-border/30 ring ring-border h-14 rounded-full flex-center
         gap-2 font-bold"
        >
          <img class="size-5" src="assets/svg/date.svg" alt="" />
          <p class="text-white text-base"> Schedule a Call</p>
        </li>
      </ul>
   </>
  );
}
export default Contact;
