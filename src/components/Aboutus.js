import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import { Button } from "reactstrap";
import image from "../vector/about.svg";
import cardimg from "../icons/process.svg";

class Aboutus extends Component {
  render() {
    const Factors = [
      {
        topic: "Encouraging Equality",
        info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        image: cardimg,
      },
      {
        topic: "Encouraging Equality",
        info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        image: cardimg,
      },
      {
        topic: "Encouraging Equality",
        info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        image: cardimg,
      },
      {
        topic: "Encouraging Equality",
        info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        image: cardimg,
      },
    ];
    return (
      <StyledAbout id="about">
        <Container fluid={true}>
          <Row className="row">
            <Col className="content">
              <div className="Heading">I have no idea what to write here.</div>
              {Factors.map((factor) => {
                return (
                  <Container className="themed-container" fluid={true}>
                    <img src={factor.image} alt="" className="icon" />
                    <div className="aboutinfo">
                      <div className="topic">{factor.topic}</div>
                      <div className="info">{factor.info}</div>
                    </div>
                    <div className="on-hover">
                      <h4 className="kk">KK</h4>
                      <Button size="sm" id="button">
                        Button
                      </Button>
                    </div>
                  </Container>
                );
              })}
            </Col>
            <Col className="vector">
              <img src={image} alt="" className="image" />
            </Col>
          </Row>
        </Container>
      </StyledAbout>
    );
  }
}

export default Aboutus;
const StyledAbout = styled.div`
  height: 120vh;
  background: #fff;
  padding: 4rem;
  .themed-container {
    display: flex;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    border-radius: 24px;
    margin: 1.2rem 0.5rem;

    padding-right: 0;
  }
  .on-hover {
    background-color: #f4c629;
    padding: 2.5rem;
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
    border-left: 1px dashed grey;
    visibility: hidden;
  }
  .kk {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 800;
  }
  .themed-container:hover .on-hover {
    visibility: visible;
  }
  .Heading {
    font-size: 2rem;
    font-weight: 800;
  }
  .content {
    margin: 1.5rem;
    overflow: hidden;
  }
  .aboutinfo {
    margin: 2rem 1rem;
  }
  .topic {
    font-weight: 800;
    font-size: 1.1rem;
  }
  .info {
  }
  #button {
    background-color: #fa3149;
    border: none;
  }
  .vector {
    overflow: hidden;
  }
  .image {
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
  .icon {
    overflow: hidden;
    color: coral;
  }
`;
