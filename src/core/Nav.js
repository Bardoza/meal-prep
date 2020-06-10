import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Recipies</Link>
      </li>
      <li>
        <Link to="/ingredient">Ingredients</Link>
      </li>
    </ul>
  );
};

export default Nav;
