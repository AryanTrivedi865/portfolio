import { Link } from "react-router-dom";
import "./../styles/navbar.css";
import Hamburger from "hamburger-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to={"/"}>
          <h1 className="logo">ARYAN TRIVEDI</h1>
          <h1 className="short-logo">AT</h1>
        </Link>
      </div>
      <div className="navbar__links">
        <Link to="/about">ABOUT</Link>
        <Link to="/work">WORK</Link>
      </div>
      <div className="navbar__contact">
        <button>LET'S CONNECT</button>
      </div>
      <div className="navbar__hamburger">
        <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} size={20} />
        <div className={`navbar__hamburger__menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={handleClick}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={handleClick}>About</Link>
            </li>
            <li>
              <Link to="/work" onClick={handleClick}>Work</Link>
            </li>
            <li>
              <Link to="/contacts" onClick={handleClick}>Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
