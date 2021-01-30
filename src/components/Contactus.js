import React from "react";
import styled from "styled-components";

export default function Contactus() {
  return (
    <StyledContact id="contactus">
      <h1>Contact Us Component</h1>
    </StyledContact>
  );
}

const StyledContact = styled.div`
  background: #f6b230;
  overflow: scroll;
  display: flex;
  justify-content: center;
  height: 30vh;

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
