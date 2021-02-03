import React from "react";
import image from "../../images/event.png";
import styled from "styled-components";

export default function PastEvents() {
  return (
    <PastStyled>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col">
            <div class="h-1 bg-gray-200 rounded overflow-hidden">
              <div class="w-24 h-full bg-yellow-500"></div>
            </div>
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Space The Final Frontier
              </h1>
              <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Street art subway tile salvia four dollar toast bitters selfies
                quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
                Viral gochujang bitters dreamcatcher.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6 cards">
              <div class="rounded-lg h-64 overflow-hidden images">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={image}
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Shooting Stars
              </h2>
              <p class="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <a class="text-black inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden images">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={image}
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                The Catalyzer
              </h2>
              <p class="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <a href="/" class="text-yellow-500 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6 cards">
              <div class="rounded-lg h-64 overflow-hidden images">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={image}
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                The 400 Blows
              </h2>
              <p class="text-base leading-relaxed mt-2">
                Swag shoivdigoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <a href="/" class="text-black inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PastStyled>
  );
}

const PastStyled = styled.div`
  .images {
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  }
  .images:hover {
    transform: scale(1.05);
    transition-duration: 1.5s;
  }
  .cards {
    background-color: #f7b32f;
    border-radius: 24px;
  }
`;
