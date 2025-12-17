import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo3.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="nav-logo" />

      {/* Mobile Menu Open Icon */}
      <img
        src={menu_open}
        alt="Open Menu"
        className="nav-mob-open"
        onClick={openMenu}
      />

      {/* Navigation Menu */}
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          alt="Close Menu"
          className="nav-mob-close"
          onClick={closeMenu}
        />

        <li>
          <AnchorLink href="#home" onClick={() => setActiveMenu("home")}>
            Home
          </AnchorLink>
          {activeMenu === "home"}
        </li>

        <li>
          <AnchorLink href="#about" onClick={() => setActiveMenu("about")}>
            About Me
          </AnchorLink>
          {activeMenu === "about"}
        </li>

        <li>
          <AnchorLink href="#services" onClick={() => setActiveMenu("service")}>
            Services
          </AnchorLink>
          {activeMenu === "service"}
        </li>

        <li>
          <AnchorLink href="#work" onClick={() => setActiveMenu("work")}>
            Portfolio
          </AnchorLink>
          {activeMenu === "work"}
        </li>

        <li>
          <AnchorLink href="#contact" onClick={() => setActiveMenu("contact")}>
            Contact
          </AnchorLink>
          {activeMenu === "contact"}
        </li>
      </ul>

      {/* Connect Button */}
      <div className="nav-connect">
        <AnchorLink href="#contact">Connect with me</AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
