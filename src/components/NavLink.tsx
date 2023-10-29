import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({
  name,
  to,
  children,
}: {
  name: string;
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <Link to={to}>
      {name}
      {children}
    </Link>
  );
};

export default NavLink;
