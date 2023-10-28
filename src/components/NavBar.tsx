import React from "react";
import CreateModal from "./CreateModal";

const NavBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between p-8">
      <h1>Foodiary</h1>
      <div className="flex justify-evenly gap-10">{children}</div>
    </div>
  );
};

export default NavBar;
