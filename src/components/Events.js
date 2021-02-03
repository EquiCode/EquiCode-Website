import React, { Component } from "react";
import styled from "styled-components";
import Current from "./events/Current";
import PastEvents from "./events/PastEvents";
import NextEvent from "./events/NextEvent";
import JoinUs from "./JoinUs";

class Events extends Component {
  render() {
    return (
      <StyledEvents>
        <div>
          <Current />
          <PastEvents />
          <NextEvent />
          <JoinUs />
        </div>
      </StyledEvents>
    );
  }
}

export default Events;

const StyledEvents = styled.div``;
