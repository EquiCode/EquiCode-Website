import React from "react";
import image from "../../images/event.png";
import styled from "styled-components";

export default function Current() {
  return (
    <CurrentContainer>
      <div className="flex flex-col text-center w-full">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mt-5 text-gray-900">
          Upcoming Keys
        </h1>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center text-center">
            <div className="sm:w-1/2 mb-10 max-w-md mx-6">
              <div className="rounded-lg h-64 overflow-hidden images">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full "
                  src={image}
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                MLH LHD Share
              </h2>
              <p className="leading-relaxed text-base">
                Join us in MLH LHD Share as we go on to continue our journey as
                a guild and experience the fun along!
              </p>
              <button className="flex mx-auto mt-6 text-white bg-black border-0 py-2 px-5 focus:outline-none hover:bg-yellow-900 rounded">
                Learn More
              </button>
            </div>
            <div className="sm:w-1/2 mb-10 max-w-md mx-6">
              <div className="rounded-lg h-64 overflow-hidden images">
                <img
                  alt="content"
                  classNameName="object-cover object-center h-full w-full image"
                  src={image}
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                The Catalyzer
              </h2>
              <p className="leading-relaxed text-base">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony.
              </p>
              <button className="flex mx-auto mt-6 text-white bg-black border-0 py-2 px-5 focus:outline-none hover:bg-yellow-900 rounded">
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
