import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/theme-context";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
