import React from "react";
import { Router, Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/students/">
        <button>Students</button>
      </Link>
    </nav>
  );
};

export default NavBar;
