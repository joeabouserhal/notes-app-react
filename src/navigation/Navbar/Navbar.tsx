import React from "react";
import "./Navbar.css";
import { BsInfoCircle } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Notes</h1>
      <div className="buttons">
        <BsInfoCircle className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
