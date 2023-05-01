import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink to="/">Home page</NavLink>
      <NavLink to="/add">Add product page</NavLink>
    </div>
  );
}

export default Navbar;
