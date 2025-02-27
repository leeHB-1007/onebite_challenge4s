
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mission1 from "./Mission/mission1.tsx";
import Mission2 from "./Mission/mission2.tsx";
import Mission3 from "./Mission/mission3.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/mission1" element={<Mission1 />} />
      <Route path="/mission2" element={<Mission2 />} />
      <Route path="/mission3" element={<Mission3 />} />
    </Routes>
  </BrowserRouter>
);
