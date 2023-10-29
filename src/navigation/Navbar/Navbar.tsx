import React from "react";
import "./Navbar.css";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Notes</h1>
      <Link to="/about" className="buttons">
        <BsInfoCircle className="text-2xl cursor-pointer" />
      </Link>
    </div>
  );
};

export default Navbar;
