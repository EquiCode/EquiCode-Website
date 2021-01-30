import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import styled from "styled-components";

import Logo from "../images/logo.png";

export default function NavbarNew() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavbarComponent>
      <Navbar light expand="md" className="rounded-nav">
        <NavbarBrand href="/">
          <img src={Logo} alt="" width="60" height="60" className="Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="cnav" href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="cnav" href="#about">
                About us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="cnav" href="/team">
                Team
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="cnav" href="/events">
                Events
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="cnav" href="/#contactus">
                Contact us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </NavbarComponent>
  );
}

const NavbarComponent = styled.div`
  .rounded-nav {
    background-color: #fef3db;
  }
  .navbar-light .navbar-nav .nav-link {
    color: black;
    font-size: 1.1rem;
    font-weight: 600;
  }
  .cnav {
    margin-right: 2rem;
  }
`;
