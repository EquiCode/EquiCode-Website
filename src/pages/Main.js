import React from "react";
import Home from "../components/Home";
import AboutUs from "../components/Aboutus";
// import Contactus from "../components/Contactus";
import CurrentEvent from "../components/events/Current";
import Testimonials from "../components/Testimonials";
import Sponsors from "../components/Sponsors";
import JoinUs from "../components/JoinUs";

import styled from "styled-components";

export default function Main() {
  return (
    <MainComponent>
      <Home />
      <AboutUs />
      <CurrentEvent />
      {/* <Contactus /> */}
      <Testimonials />
      <Sponsors />
      {/* <Footer /> */}
      <JoinUs />
    </MainComponent>
  );
}

const MainComponent = styled.div``;
