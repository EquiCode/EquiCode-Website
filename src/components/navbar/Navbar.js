import React, { Component } from "react";
import styled from "styled-components";
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <StyledNavbar>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            EquiCode<i class="fas fa-hand-holding-medical"></i>
          </h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <Button>Join us</Button>
        </nav>
      </StyledNavbar>
    );
  }
}
export default Navbar;

const StyledNavbar = styled.div`
  .NavbarItems {
    ${"" /* background: linear-gradient(
      90deg,
      rgb(110, 94, 254) 0%,
      rgba(73, 63, 252, 1) 100%
    ); */}
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
  }
  .navbar-logo {
    color: #000;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
  }
  .fa-hand-holding-medical {
    margin-left: 0.5rem;
    font-size: 1.6rem;
  }
  .nav-menu {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;
  }
  .nav-links {
    color: #000;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }
  .nav-links:hover {
    background-color: #6d76f7;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }
  .fa-bars {
    color: #fff;
  }
  .nav-links-mobile {
    display: none;
  }
  .menu-icon {
    display: none;
  }
  @media screen and (max-width: 960px) {
    .NavbarItems {
      position: relative;
    }
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 500px;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }
    .nav-menu.active {
      background: #6668f4;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
    .nav-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    }
    .nav-links:hover {
      background-color: #7577fa;
      border-radius: 0;
    }
    .navbar-logo {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(25%, 50%);
    }
    .menu-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }
    .fa-times {
      color: #fff;
      font-size: 2rem;
    }
    .nav-links-mobile {
      display: block;
      text-align: center;
      padding: 1.5rem;
      margin: 2rem auto;
      border-radius: 4px;
      width: 80%;
      background: #4ad9e4;
      text-decoration: none;
      color: #fff;
      font-size: 1.5rem;
    }
    .nav-links-mobile:hover {
      background: #fff;
      color: #6568f4;
      transition: 250ms;
    }
    Button {
      display: none;
    }
  }
`;
