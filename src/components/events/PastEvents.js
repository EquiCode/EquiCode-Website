import React from "react";
import image from "../../images/event.png";
import styled from "styled-components";

export default function PastEvents(props) {
  const PastEvents = [
    {
      name: "#ChooseToChallenge: IWD,21 Panel",
      about:
        "On the special occasion of International Women’s day, EquiCode came up with #ChooseToChallenge​ panel discussion to throw light on breaking the biases and empowering women.",
      image: image,
      link: "https://youtu.be/0wPc3WH8MJw",
    },
    {
      name: "International Women's Day 2021",
      about:
        "Celebrating International Women's Day 2021, we had some of the tech experts sharing importance of women in their lives. This is a special vidoe for the Real Architects of Society.",
      image: image,
      link: "https://youtu.be/KksVuTZ0nDc",
    },
    {
      name: "Generation Google Scholarship- Asia Pacific",
      about:
        "Generation Google Scholarship for women in computer science was established to help aspiring students pursuing computer science degrees excel in technology and become leaders in the field.",
      image: image,
      link: "https://youtu.be/YzBJxCpPZS8",
    },
    {
      name: "A Winning Resume wih Madhav Bahl",
      about:
        "A strong resume can help you clearly identify and communicate what differentiates you from your job-seeking competitors. EquiCode brings Madhav Bahl to help us create a Winning Resume. ",
      image: image,
      link: "https://youtu.be/bR_d1BwWH9c",
    },
    {
      name: "Grand Finale with the First GitHub Star of the Year : Eddie Jaoude",
      about:
        "EquiCode is thrilled to have Eddie Jaoude join us putting into words his experiences in #DevRel​ , opensource and much more and embark an end tto our Roadmap series: From Newbie to Pro.",
      image: image,
      link: "https://youtu.be/G6ZfLQVpOhQ",
    },
    {
      name: "Looking Beyond Tech",
      about:
        "EquiCode has got something for our audience to navigate an overwhelming amount of information availaible for all those starting out their tech-career soon.",
      image: image,
      link: "https://youtu.be/dkFiyfSdIT4",
    },
  ];

  return (
    <PastStyled>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col ">
            <div className="h-1 bg-gray-200 rounded overflow-hidden ">
              <div className="w-24 h-full bg-yellow-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12 ">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Past Specifics
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                EquiCode has collaborated with many amazing speakers out there, to put in the idea of encouraging Equal Learning and helping our audience in building up a brand for themselves. 
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:-m-4 justify-center -mt-4">
            {PastEvents.map((event) => {
              return (
                <div className="p-4 md:w-1/3 sm:mb-0 mb-6 max-w-sm cards ">
                  <div className="rounded-lg h-64 overflow-hidden images">
                    <img
                      alt="content"
                      className="object-cover object-center h-full w-full"
                      src={event.image}
                    />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                    {event.name}
                  </h2>
                  <p className="text-base leading-relaxed mt-2">{event.about}</p>
                  <a
                    className="text-black inline-flex items-center mt-3"
                    href={event.link}
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              );
            })}
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
  .cards:nth-child(odd) {
    background-color: #f7b32f;
    border-radius: 24px;
  }
  .border-card {
    border: 1px solid black;
  }
`;
