import React from "react";
import styled from "styled-components";
import bg from "../../images/vol.jpg";

export default function VolApply() {
  return (
    <Apply>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 my-11 items-center justify-center flex-col content">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Microdosing synth tattooed vexillologist
            </h1>
            <p className="mb-8 leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </Apply>
  );
}

const Apply = styled.div`
  background: url(${bg});
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 70vh;
  .content {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(192, 192, 192, 0.5);
  }
`;
