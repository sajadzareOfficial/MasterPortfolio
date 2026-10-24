import React from "react";
import { Contact as contactElems } from "/constants/index.js";
const Contact = () => {
  return (
    <div className=" mt-10 flex-col-center gap-15">
      <StaticContactItems />
      <ul class="Aboutme-link-grid w-full h-28 text-base  grid grid-cols-2 grid-rows-2 gap-2 justify-items-center ">
        {contactElems.map((element) => {
          return;
          <li class="Github ml-16 flex-center gap-1.5">
            <div class="size-10 rounded-full bg-white/5 ring ring-white/10 flex-center">
              <img class="size-6 " src={`sss`} alt="" />
            </div>
            <p class=" text-subTitle font-bold">GitHub</p>
          </li>;
        })}
      </ul>
    </div>
  );
};

function StaticContactItems() {
  const items = contactElems[0];
  return (
    <>
      <div class="Aboutme-Title w-4/5 font-bold">
        <p class="text-4xl  text-white text-center">{items.Title}</p>
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
