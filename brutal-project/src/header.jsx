import React from "react";
import "./customprop.scss";
import HeaderTitle from "./headerTitle";
import "./Header.css";
import HeaderCont from "./headercont";

function Header() {
  return (
    <div className="row">
      <HeaderTitle></HeaderTitle>
      <HeaderCont></HeaderCont>
    </div>
  );
}

export default Header;
