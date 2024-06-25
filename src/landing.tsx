import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/landing.css";
import About from "./screen/navbar/about";
import Home from "./screen/home";
import Contacts from "./screen/navbar/contacts";
import Signup from "./screen/navbar/signup";
import Navbar from "./components/navbar";
import NotFoundPage from "./screen/page404";

function Landing() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default Landing;