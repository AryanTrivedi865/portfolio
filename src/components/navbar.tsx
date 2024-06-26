import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./../styles/navbar.css";
import Hamburger from "hamburger-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const socialLinks = [
    { name: "Github", url: "https://www.github.com/aryantrivedi865" },
    { name: "Twitter", url: "https://www.twitter.com" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aryan-trivedi-251679279/",
    },
    { name: "Instagram", url: "https://www.instagram.com/aryan_.__" },
  ];

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
        <Link to="/contact">WORK</Link>
      </div>
      <div className="navbar__contact">
        <button>LET'S CONNECT</button>
        <div className="navbar__contact__social">
          <ul>
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <i className={`fab fa-${link.name.toLowerCase()}`}></i>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar__hamburger">
        <Hamburger
          toggled={isOpen}
          toggle={() => setOpen((prev) => !prev)}
          size={20}
        />
        <div
          className="navbar__hamburger__menu"
          style={{ display: isOpen ? "block" : "none" }}
        >
          <ul>
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <i className={`fab fa-${link.name.toLowerCase()}`}></i>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
