import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Pages/Home";
import About from "./Components/About";
import TermsOfService from "./Components/TermsOfService";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Frames from "./Components/Frames";
import Statues from "./Components/Statues";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/frames" element={<Frames />} />
        <Route path="/statues" element={<Statues />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
