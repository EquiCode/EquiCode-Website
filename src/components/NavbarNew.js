import React,{ useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
import styled from 'styled-components';
export default function NavbarNew() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavbarComponent>
      <Navbar color="light" light expand="md" className="rounded-nav">
        <NavbarBrand href="/">Equicode</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" style={{alignItems:"right",justifyContent:"right"}} navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">About us</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Random
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Team
                </DropdownItem>
                <DropdownItem>
                  Events
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Contact Us
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
      </NavbarComponent>
  );
}

const NavbarComponent = styled.div`
  .rounded-nav {
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    background:white;
  }
  .customnav{
   align-items:right;
   justify-content:right;
   align-self:right; 
  }
`;