import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import About from "./screen/navbar/about";
import Home from "./screen/navbar/home";
import Contacts from "./screen/navbar/contacts";
import Signup from "./screen/navbar/signup";
import Navbar from "./components/navbar";
import NotFoundPage from "./screen/page404";
import Landing from "./screen/landing";

function Layout() {
  const location = useLocation();

  const navbarPath = ["/home", "/", "/about", "/contacts", "/signup"];

  return (
    <div style={{
      backgroundColor: "red",
      height: "100vh",
      color: "white",
    }}>
      {navbarPath.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
