import React from "react";
import "./customprop.scss";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar space-bet">
      <div className="logo">
        <p className="fs-4 typo-color-light ">PortLofio</p>
      </div>
      <div className="row gap-10">
        <div className="logo">
          <p className="fs-3 typo-color-light ">PortLofio</p>
        </div>
        <div className="logo">
          <p className="fs-3 typo-color-light ">PortLofio</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
