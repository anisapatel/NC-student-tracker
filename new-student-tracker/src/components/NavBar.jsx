import React from "react";
import { Router, Link } from "@reach/router";
import styled from "styled-components";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "white" : "white")};
  color: ${props => (props.primary ? "black" : "red")};

  font-size: 1.1em;
  font-family: verdana;

  padding: 0.2em 3em;
  border: 2px solid;
  border-radius: 8px;
`;

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <Button primary>Home</Button>
      </Link>
      <Link to="/students/">
        <Button primary>Students</Button>
      </Link>
    </nav>
  );
};

export default NavBar;
