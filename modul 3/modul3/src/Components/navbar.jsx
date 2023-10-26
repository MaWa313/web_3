import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h3>Navbar</h3>
      <ul>
        <li>
          <Link to="/">Beranda</Link>
        </li>
        <li>
          <Link to="/About">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
