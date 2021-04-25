import React, { Component } from "react";
import styled from "styled-components";
// import cardimg from "../icons/process.svg";

class Aboutus extends Component {
  render() {
    // const Factors = [

    //     {
    //     topic: "Inclusive Community",
    //     info:
    //       "Diversity is a fact, but being Inclusive is an original choice",
    //     image: cardimg,
    //   },
    //   {
    //     topic: "Diverse Learning Environment",
    //     info:
    //       "An unbiased tech-based community to unite and support people",
    //     image: cardimg,
    //   },
    //   {
    //     topic: "Beginner-centric culture",
    //     info:
    //       "Help Tech-novice develop the skills to promote themselves effectively",
    //     image: cardimg,
    //   },
    // {
    //   topic: "",
    //   info:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    //   image: cardimg,
    // },
    // ];
    return (
      <StyledAbout id="about">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:flex-grow">
                  <h2
                    style={{ textAlign: "center" }}
                    className="text-2xl font-medium text-gray-900 title-font mb-2"
                  >
                    Inclusive Community
                  </h2>
                  <p
                    style={{ textAlign: "center" }}
                    className="leading-relaxed"
                  >
                    Diversity is a fact, but being Inclusive is an original
                    choice
                  </p>
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:flex-grow">
                  <h2
                    style={{ textAlign: "center" }}
                    className="text-2xl font-medium text-gray-900 title-font mb-2"
                  >
                    Beginner-centric culture
                  </h2>
                  <p
                    style={{ textAlign: "center" }}
                    className="leading-relaxed"
                  >
                    Help Tech-novice develop the skills to promote themselves
                    effectively
                  </p>
                </div>
              </div>
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:flex-grow">
                  <h2
                    style={{ textAlign: "center" }}
                    className="text-2xl font-medium text-gray-900 title-font mb-2"
                  >
                    Diverse Learning Environment
                  </h2>
                  <p
                    style={{ textAlign: "center" }}
                    className="leading-relaxed"
                  >
                    An unbiased tech-based community to unite and support people
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </StyledAbout>
    );
  }
}

export default Aboutus;

const StyledAbout = styled.div``;
