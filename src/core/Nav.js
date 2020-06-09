import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Ingredient List</Link>
      </li>
      <li>
        <Link to="/ingredient">Ingredient</Link>
      </li>
    </ul>
  );
};

export default Nav;
