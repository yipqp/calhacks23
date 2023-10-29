import React from "react";
import CreateModal from "./CreateModal";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
const NavBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex p-7 bg-white sticky top-0 shadow-sm">
      <div className="flex items-center flex-1 gap-3">
        <img width={80} src={logo}></img>
        <h1 className="font-inter text-2xl md:text-3xl font-semibold bottom-0">
          <Link to="/">FoodFlicks</Link>
        </h1>
      </div>
      <div className="flex items-center justify-between gap-5 md:gap-16">
        {children}
      </div>
    </div>
  );
};

export default NavBar;
