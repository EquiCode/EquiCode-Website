import React from "react";
import image from "../../images/event.png";
import styled from "styled-components";

export default function Current() {
  return (
    <CurrentContainer>
      <div class="flex flex-col text-center w-full">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mt-5 text-gray-900">
          Master Cleanse Reliac Heirloom
        </h1>
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -mb-10 text-center">
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden images">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full "
                  src={image}
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Buy YouTube Videos
              </h2>
              <p class="leading-relaxed text-base">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
              <button class="flex mx-auto mt-6 text-white bg-black border-0 py-2 px-5 focus:outline-none hover:bg-yellow-900 rounded">
                Learn More
              </button>
            </div>
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden images">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full image"
                  src={image}
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                The Catalyzer
              </h2>
              <p class="leading-relaxed text-base">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
              <button class="flex mx-auto mt-6 text-white bg-black border-0 py-2 px-5 focus:outline-none hover:bg-yellow-900 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </CurrentContainer>
  );
}

const CurrentContainer = styled.div`
  background-color: #f7b32f;
  .images {
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  }
  .images:hover {
    transform: scale(1.1);
    transition-duration: 1.5s;
  }
`;
