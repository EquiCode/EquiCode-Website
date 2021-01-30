import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import comma from "../icons/quote.svg";
import image from "../vector/testimonial.svg";

export default class Testimonials extends Component {
  render() {
    return (
      <StyledTest>
        <Container fluid={true}>
          <Row>
            <Col className="content" xs={7}>
              <Row className="test1">
                <img src={comma} alt="" className="quote" />
                <div className="center">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing
                </div>

                <div className="author">Author</div>
                <div className="position">Position</div>
                <img src={comma} alt="" className="quote even" />
              </Row>
              <Row className="test2">
                <img src={comma} alt="" className="quote" />
                <div className="center">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing
                </div>
                <div className="author">Author</div>
                <div className="position">Position</div>
                <img src={comma} alt="" className="quote even" />
              </Row>
            </Col>
            <Col className="vector">
              <div class="header">
                There are many variations of passages of Lorem passages of
                Lorem.
              </div>
              <img src={image} alt="" className="image" />
            </Col>
          </Row>
        </Container>
      </StyledTest>
    );
  }
}

const StyledTest = styled.div`
  height: 100vh;
  padding: 2rem;
  overflow: hidden;
  .content {
  }
  .vector {
  }
  .test1,
  .test2 {
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    margin: 3rem;
    padding: 2rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    font-style: italic;
  }
  .author {
    margin: 1rem 2rem 0 2rem;
    font-style: normal;
    font-size: 1.5rem;
    font-weight: 600;
    color: #606060;
  }
  .position {
    font-style: normal;
    font-size: 1.3rem;
    font-weight: 500;
    margin-left: 2rem;
    color: #808080;
  }
  .quote:nth-child(odd) {
    margin: auto;
    margin-left: 0;
  }
  .even {
    transform: rotate(180deg);
    margin: auto;
    margin-right: 0;
  }
  .center {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .image {
    width: 100%;
    height: 100%;
  }
  .header {
    font-weight: 800;
    font-size: 2rem;
  }
`;
