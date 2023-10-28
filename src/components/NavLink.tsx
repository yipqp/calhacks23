import React from "react";

const NavLink = ({ name, action }: { name: string; action: () => void }) => {
  return <button onClick={action}>{name}</button>;
};

export default NavLink;
