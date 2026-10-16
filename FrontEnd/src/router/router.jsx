import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from "../components/header/Header";
import { useState } from "react";
import SiteMain from "../components/main/main";
import SiteFooter from "../components/footer/footer";
import Carousels from "../components/main/components/Mobile/Carousels ";

function Home() {
    const [dark_theme, setDark_theme] = useState(true);
  
  const changeThemeSetter = () => {
    setDark_theme((prevState) => {
      return !prevState;
    });
  };
   return (
   <>
        {/* here is White theme components */}
        <div className="_container   flex-col-center">
          {/* <div className="flex flex-col justify-center items-center bg-red-300 h-1/3 w-full">
            <Carousels top={true} LeftSrc="dotnet-tile" CenterSrc=""  RightSrc="" />
          </div> */}
           <Header
            Dark_theme={dark_theme}
            changeThemeFunc={changeThemeSetter}
          />
         
          
          <SiteMain />
          <SiteFooter />
        </div>
      </>
  );
  
}

export function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      {/* <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav> */}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
// export default App; 

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}
