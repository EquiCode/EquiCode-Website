import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import styled from "styled-components";

import Logo from "../images/logo.webp";

export default function NavbarNew() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavbarComponent>
      <Navbar light expand="md" className="rounded-nav">
        <NavbarBrand href="/">
          <img src={Logo} alt="" width="50" height="50" className="Logo" />
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
              <NavLink className="cnav" href="/#about">
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
              <NavLink className="cnav" href="/#sponsors">
                Contact us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="cnav"
                href="/volunteer"
                style={{ border: "1px solid black", borderRadius: "8px" }}
              >
                Apply Here
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
    background-color: #f7b32f;
  }
  .navbar-light .navbar-nav .nav-link {
    color: black;
    font-size: 1.1rem;
    font-weight: 600;
  }
  .cnav {
    margin-right: 2rem;
  }
  .logo {
    border-radius: 16px;
  }
`;
