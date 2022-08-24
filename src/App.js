import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import GpsRoute from "./routes/gps.route.js";
import OximetroRoute from "./routes/oximetro.route.js";
import Index from "./routes/index";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="" element={<Index />} />
        <Route path="/gps" element={<GpsRoute />} />
        <Route path="/oxim" element={<OximetroRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
