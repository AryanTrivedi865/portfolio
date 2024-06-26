import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./styles/app.css"
import PageNotFound from "./screen/routes/page-not-found";

function Layout() {
  const location = useLocation();

  const navbarPath = ["/home", "/", "/about", "/contacts", "/signup"];

  return (
    <div className="parent">
        <Routes>
          <Route path="/" element={
            <h1>WELCOME TO WEBSITE</h1>
          } />
          <Route path="*" element={<PageNotFound/>} />
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
