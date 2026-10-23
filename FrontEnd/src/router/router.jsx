import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import View from "../components/view";
export function CostomeRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}


