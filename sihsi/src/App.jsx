import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AIPred from "./pages/AIPred.jsx";
import Knowledge from "./pages/Knowledge.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/aipred" element={<AIPred />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App;
