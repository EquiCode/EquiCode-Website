import React, { Component } from "react";
import styled from "styled-components";

class Events extends Component {
  render() {
    return (
      <StyledEvents>
        <h1>All Events</h1>
      </StyledEvents>
    );
  }
}

export default Events;

const StyledEvents = styled.div`
  background: #f5f5dc;
  overflow: scroll;
  display: flex;
  justify-content: center;
  height: 100vh;

  .container {
    border-radius: 24px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-height: 70%;
    min-width: 90%;
    margin: 4rem;
  }
`;
