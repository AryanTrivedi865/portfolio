import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import About from "./screen/routes/about";
import Home from "./screen/routes/home";
import Contacts from "./screen/routes/contacts";
import Signup from "./screen/routes/signup";
import Navbar from "./components/navbar";
import NotFoundPage from "./screen/page404";
import Landing from "./screen/landing";
import "./styles/app.css"

function Layout() {
  const location = useLocation();

  const navbarPath = ["/home", "/", "/about", "/contacts", "/signup"];

  return (
    <div className="parent">
      {
      navbarPath.includes(location.pathname) && 
        <Navbar/>
      }
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
