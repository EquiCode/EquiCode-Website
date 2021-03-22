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
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="-my-8 divide-y-2 divide-gray-100">
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                    Bitters hashtag waistcoat fashion axe chia unicorn
                  </h2>
                  <p class="leading-relaxed">
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                </div>
              </div>
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                    Meditation bushwick direct trade taxidermy shaman
                  </h2>
                  <p class="leading-relaxed">
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                </div>
              </div>
              <div class="py-8 flex flex-wrap md:flex-nowrap">
                <div class="md:flex-grow">
                  <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                    Woke master cleanse drinking vinegar salvia
                  </h2>
                  <p class="leading-relaxed">
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
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
