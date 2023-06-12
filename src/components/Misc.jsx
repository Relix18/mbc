import React from "react";
import logo from "../assets/logo.png";
import { BsMouse } from "react-icons/bs";

const Misc = () => {
  return (
    <>
      <div className="cursor"></div>
      <a href="/" className="logo">
        <img src={logo} alt="logo" data-cursorpointer />
      </a>
      <a href="/franchise" className="franchiseBtn" data-cursorpointer>
        get a franchise
      </a>

      <BsMouse data-cursorpointer className="scrollBtn" />
    </>
  );
};

export default Misc;
