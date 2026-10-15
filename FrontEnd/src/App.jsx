import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {App as AppRouter } from './router/router'


const App = () => {
  const [dark_theme, setDark_theme] = useState(true);
  const stateSetter=()=>{
        setDark_theme(!dark_theme)
  }
  const changeThemeSetter=()=> {
    setDark_theme(
      prevState=>{
        return !prevState
      }
    )
  };
  // return (
  //  <>
  //       {/* here is White theme components */}
  //       <div className="_container   flex flex-col justify-center items-center">
  //         {/* <div className="flex flex-col justify-center items-center bg-red-300 h-1/3 w-full">
  //           <Carousels top={true} LeftSrc="dotnet-tile" CenterSrc=""  RightSrc="" />
  //         </div> */}
  //          <Header 
  //           Dark_theme={dark_theme}
  //           changeThemeFunc={changeThemeSetter}
  //         />
  //         <h1 className="text-4xl text-white">{dark_theme}</h1>
  //         {/* <h1 className='text-6xl  text-white mt-20' id='Home'>sajadd</h1> */}
  //         <SiteMain />
  //         <SiteFooter />
  //       </div>
  //     </>
  // );
return(
  <AppRouter/>


)

};


export default App;
