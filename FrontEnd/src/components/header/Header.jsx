import React, { Component, useState } from "react";
import DesktopMenuItems from "./components/Desktop/DesktopMenuItems";
import DesktopMenuButtons from "./components/Desktop/DesktopMenuButtons";
import HamburgerMenu from "./components/Mobile/HamburgerMenu";
import { Btn } from "../general/general";
function Header (){
  return (
    <header
      className={`w-4/5 h-14 fixed top-2  flex justify-between items-center border-2 border-white/10   rounded-4xl bg-dark  !z-50  light:light_utility `}
    >
      <p className="font-header ml-5 font-bold text-3xl linear-gradient">
        Sj.Dev
      </p>

      <DesktopMenuItems/>

      <DesktopMenuButtons changeSiteTheme={changeSiteTheme} />
      
      <HamburgerMenu
        changeSiteTheme={changeSiteTheme}
        
      />
    </header>
  );
};
function changeSiteTheme() {
  props.changeThemeFunc();
}

export default Header;
