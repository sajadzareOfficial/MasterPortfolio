import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { App as AppRouter } from "./router/router";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {
  const lenis = new Lenis();

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 800);
  });

  gsap.ticker.lagSmoothing(0);

  return <AppRouter />;
};

export default App;
