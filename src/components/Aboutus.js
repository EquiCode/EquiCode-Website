import React, { Component } from "react";
import styled from "styled-components";
import cardimg from "../icons/process.svg";

class Aboutus extends Component {
  render() {
    const Factors = [
      {
        {
        topic: "Inclusive Community",
        info:
          "Diversity is a fact, but being Inclusive is an original choice",
        image: cardimg,
      },
      {
        topic: "Diverse Learning Environment",
        info:
          "An unbiased tech-based community to unite and support people",
        image: cardimg,
      },
      {
        topic: "Beginner-centric culture",
        info:
          "Help Tech-novice develop the skills to promote themselves effectively",
        image: cardimg,
      },
      // {
      //   topic: "",
      //   info:
      //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      //   image: cardimg,
      // },
    ];
    return (
      <StyledAbout id="about">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img
                alt="feature"
                class="object-cover object-center h-full w-full"
                src="https://dummyimage.com/460x500"
              />
            </div>
            <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
              <div class="flex flex-col mb-10 lg:items-start items-center">
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    Shooting Stars
                  </h2>
                  <p class="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                </div>
              </div>
              <div class="flex flex-col mb-10 lg:items-start items-center">
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    The Catalyzer
                  </h2>
                  <p class="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
                  </p>
                </div>
              </div>
              <div class="flex flex-col mb-10 lg:items-start items-center">
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    Neptune
                  </h2>
                  <p class="leading-relaxed text-base">
                    Blue bottle crucifix vinyl post-ironic four dollar toast
                    vegan taxidermy. Gastropub indxgo juice poutine.
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
