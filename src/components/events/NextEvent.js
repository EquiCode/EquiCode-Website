import React from "react";
import styled from "styled-components";
import image from "../../vector/question.svg";

export default function NextEvent() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbycSbFRNPuh0TWf3irPIcjy3LZ_Ej-078UcIYPwfXuA4svEIQj-rXPtFt268g9z1Z4pmA/exec";
  const form = document.forms["google-sheet"];

  const Submit = (e) => {
    e.preventDefault();
    console.log("the form has been submitted");
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) =>
        alert("Thanks for Contacting us..! We Will Contact You Soon...")
      )
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <>
      <StyledEvent>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 content">
              <h1 class="title-font font-medium text-3xl text-gray-900">
                Slow-carb next level shoindcgoitch ethical authentic, poko
                scenester
              </h1>
              <p class="leading-relaxed mt-4">
                Poke slow-carb mixtape knausgaard, typewriter street art
                gentrify hammock starladder roathse. Craies vegan tousled etsy
                austin.
              </p>
            </div>
            <div class="lg:w-2/6 md:w-1/2 form-color rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
                Sign Up
              </h2>
              <form method="post" autocomplete="off" name="google-sheet">
                <div class="relative mb-4">
                  <label
                    for="full-name"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative mb-4">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button
                  method="post"
                  onClick={Submit}
                  type="submit"
                  name="submit"
                  class="text-white button-color border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
                >
                  Button
                </button>
              </form>
              <p class="text-xs text-gray-500 mt-3">
                Literally you probably haven't heard of them jean shorts.
              </p>
            </div>
          </div>
        </section>
      </StyledEvent>
    </>
  );
}

const StyledEvent = styled.div`
  background: url(${image});
  background-repeat: no-repeat;
  background-size: auto;
  .form-color {
    background-color: #f7b32f;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  }
  .button-color {
    background-color: #000;
  }
  .content {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(192, 192, 192, 0.5);
  }
`;
