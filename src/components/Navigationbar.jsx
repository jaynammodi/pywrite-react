import React from "react";
import logoimg from "../Assets/logo.png";
import background from "../Assets/navbg.png";

import { Navbar, Nav } from "react-bootstrap";

function Navigationbar() {
  return (
    <Navbar
      className="nav"
      variant="dark"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100% 100%`
      }}
    >
      <Navbar.Brand href="/">
        <img
          src={logoimg}
          width="80"
          height="80"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Nav className="pull-right">
        <Nav.Link className="nav-link active" href="/">
          Home
        </Nav.Link>
        <Nav.Link className="nav-link" href="/about">
          About
        </Nav.Link>
        <Nav.Link className="nav-link" href="/contact">
          Contact
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
export default Navigationbar;
