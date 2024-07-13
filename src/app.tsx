import { BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import "./styles/app.css"
import Home from "./screen/home";
import Contact from "./screen/contacts";
import Page404 from "./screen/page404";
import Navbar from "./components/navbar";

function Layout() {
  
  const location = useLocation();
  const navbarPath = ["/home", "/", "/about", "/contacts", "/work"];

  return (
    <div className="parent">
        {navbarPath.includes(location.pathname) && <Navbar/>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
          <Route
          path="*"
          element={
            <div className={`page404-wrapper ${location.pathname === "*" ? "show" : ""}`}>
              <Page404 />
            </div>
          }
        />
        </Routes>
    </div>
  );
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Layout />
    </Router>
  );
}

export default App;
