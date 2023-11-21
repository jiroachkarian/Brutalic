import React from "react";
import "./customprop.scss";
import "./Header.css";

function HeaderCont() {
  return (
    <div className="container-2 center">
      <div className="rectangle-container p-absolute">
        <div className="fs-4 text-end">
          <p className="typo-color-dark mb-inv">OTHER BRUTALS</p>
        </div>
        <div className="rect-2  typo-color-dark text-end">
          <div className="carre-1 "></div>
          <div className="fs-3 carre-2 ">
            <button className=" typo-color-dark">learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderCont;
