import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./styles/app.css"
import Home from "./screen/home";
import Navbar from "./components/navbar";

function Layout() {

  const location = useLocation();
  const navbarPath = ["/home", "/", "/about", "/contact", "/signup"];

  return (
    <div className="parent">
        {navbarPath.includes(location.pathname) && <Navbar/>}
        <Routes>
          <Route path="/" element={<Home />} />
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
