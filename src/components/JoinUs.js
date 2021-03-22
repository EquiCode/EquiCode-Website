import React from "react";
import styled from "styled-components";

export default function JoinUs() {
  return (
    <StyledJoin>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full cards-bg px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Raclette Blueberry Nextious Level
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a href="http://bit.ly/Equicode">
                  <button className="flex mx-auto mt-6 text-white bg-black border-0 py-2 px-5 focus:outline-none hover:bg-yellow-900 rounded">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full cards-bg  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Ennui Snackwave Thundercats
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a href="http://bit.ly/Equicode">
                  <button className="flex mx-auto mt-6 text-white bg-black border-0 py-2 px-5 focus:outline-none hover:bg-yellow-900 rounded">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full cards-bg  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Selvage Poke Waistcoat Godard
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a href="http://bit.ly/Equicode">
                  <button className="flex mx-auto mt-6 text-white bg-black border-0 py-2 px-5 focus:outline-none hover:bg-yellow-900 rounded">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StyledJoin>
  );
}

const StyledJoin = styled.div`
  background: #fae7b5;
  .cards-bg {
    background-color: #f7b32f;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  }
  .cards-bg:hover {
    transform: scale(1.1);
    transition-duration: 1.5s;
  }
`;
