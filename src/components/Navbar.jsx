import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink to="/">Home cpage</NavLink>
      <NavLink to="/add">Add product</NavLink>
    </div>
  );
}

export default Navbar;
