import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./styles/app.css"

function Layout() {

  const location = useLocation();

  const navbarPath = ["/home", "/", "/about", "/contacts", "/signup"];

  return (
    <div className="parent">
        <Routes/>
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
