import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

class Sponsors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(
        "https://sheet.best/api/sheets/42f8b18f-dab8-4763-a395-ad95093d035f",
        this.state
      )
      .then((response) => {
        console.log(response);
      });
  };
  render() {
    const { name, email, message } = this.state;
    return (
      <StyledSponsor id="sponsors">
        <section class="text-gray-600 body-font relative">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Contact Us
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                For any queries, Contact us here:
              </p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label class="leading-7 text-sm text-gray-600">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={this.changeHandler}
                      placeholder="Enter your Name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={this.changeHandler}
                      placeholder="Enter your Name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label
                      for="message"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      value={message}
                      onChange={this.changeHandler}
                      placeholder="Enter your Name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button
                    type="submit"
                    class="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </StyledSponsor>
    );
  }
}

export default Sponsors;

const StyledSponsor = styled.div`
  .style-form {
    border: 1px solid black;
  }
`;
