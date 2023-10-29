import React from "react";
import CreateModal from "./CreateModal";
import logo from "../assets/Logo.svg";
const NavBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex p-7 bg-white sticky top-0 shadow-sm">
            <img width={80} src={logo}></img>
      <h1 className="font-inter text-3xl font-semibold bottom-0"><button>FoodFlicks</button></h1>
      <div className="flex justify-between gap-10">{children}</div>
      </div>
  );
};


export default NavBar;
