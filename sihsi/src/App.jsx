import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AIPred from "./pages/AIPred.jsx";
import Knowledge from "./pages/Knowledge.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Articles from "./pages/Articles.jsx";
import Tutorials from "./pages/Tutorials.jsx";
import Docs from "./pages/Docs.jsx";
import PriceTrends from "./pages/PriceTrends.jsx";
import WeatherUpdates from "./pages/WeatherUpdates.jsx";
import GovtSchemes from "./pages/GovtSchemes.jsx";
import Machinery from "./pages/Machinery.jsx";
import Research from "./pages/Research.jsx";
import AIAgri from "./pages/AIAgri.jsx";
import ResSum from "./pages/ResSum.jsx";
import Internship from "./pages/Internship.jsx";
import Journals from "./pages/Journals.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/aipred" element={<AIPred />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/knowledge/articles" element={<Articles />} />
        <Route path="/knowledge/video-tutorials" element={<Tutorials />} />
        <Route path="/knowledge/infographics" element={<Docs />} />
        <Route path="/knowledge/croptrends" element={<PriceTrends />} />
        <Route path="/knowledge/weatherupdates" element={<WeatherUpdates />} />
        <Route path="/knowledge/govtschemes" element={<GovtSchemes />} />
        <Route path="/knowledge/agrimachines" element={<Machinery />} />
        <Route path="/knowledge/agriresearch" element={<Research />} />
        <Route path="/knowledge/agriai" element={<AIAgri />} />
        <Route path="/knowledge/agrires" element={<ResSum />} />
        <Route path="/knowledge/internship" element={<Internship />} />
        <Route path="/knowledge/journals" element={<Journals />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App;
