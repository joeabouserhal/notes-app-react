import React from "react";
import Navbar from "../../navigation/Navbar/Navbar";
import SideBar from "../../navigation/SideBar/SideBar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-row">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
