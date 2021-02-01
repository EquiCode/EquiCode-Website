import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import image from "../vector/girl_laptop.svg";
export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <div>
          <ul className="List">
            <li>xyzabc</li>
            <li>xyzabc</li>
            <li>xyzabc</li>
            <li>xyzabc</li>
          </ul>
        </div>
        <div>
          <ul className="List">
            <li>xyzabc</li>
            <li>xyzabc</li>
            <li>xyzabc</li>
            <li>xyzabc</li>
          </ul>
        </div>
        <div>
          <ul className="List">
            <li>xyzabc</li>
            <li>xyzabc</li>
            <li>xyzabc</li>
            <li>xyzabc</li>
          </ul>
        </div>
        <div className="vector">
          <img src={image} alt="" className="image" />
        </div>
      </StyledFooter>
    );
  }
}

const StyledFooter = styled.div`
  height: 30vh;
  background: #fef3db;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .List {
    list-style: none;
    margin: 4rem;
    border: 1px solid black;
  }
  .vector {
    border: 1px solid black;
  }
  .image {
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
`;
