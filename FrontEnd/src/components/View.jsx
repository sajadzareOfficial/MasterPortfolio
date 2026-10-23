import React from "react";
import Header from "./header/Header";
import { useState } from "react";
import SiteMain from "./main/main";
import SiteFooter from "./footer/footer";
import Carousels from "./main/components/Mobile/Carousels ";
function View() {
  const [dark_theme, setDark_theme] = useState(true);

  const changeThemeSetter = () => {
    setDark_theme((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className="_container   flex-col-center">
      <Header Dark_theme={dark_theme} changeThemeFunc={changeThemeSetter} />
      <SiteMain />
      <SiteFooter />
    </div>
  );
}

export default View;
