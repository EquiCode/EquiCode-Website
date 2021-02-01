import React from 'react';
import Home from "../components/Home";
import AboutUs from "../components/Aboutus";
import Contactus from "../components/Contactus";
import CurrentEvent from "../components/CurrentEvent";
import Events from "../components/Events";
import Testimonials from "../components/Testimonials";
import Sponsors from "../components/Sponsors";

import styled from 'styled-components';

export default function Main() {
  return (
    <MainComponent>
      {/* <NavbarNew /> */}
      {/* <NavbarNew /> */}
      {/* <Navbar /> */}
      <Home />
      <AboutUs />
      <Events />
      <Contactus />
      {/* <Testimonials /> */}
      <Sponsors />
      {/* <Footer /> */}
    </MainComponent>
  );
}

const MainComponent = styled.div`
    

`;