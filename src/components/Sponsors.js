import React from "react";
import styled from "styled-components";
import background from "../images/Final.png";

export default function Sponsors() {
  return (
    <StyledSponsor>
      <div className="card">
        <div className="header">Interested in partnering with us?</div>
        <div className="content">
          Email dedo yaar ek sponsor hi mil jaaye pleez
        </div>
        <form className="form">
          <input type="email" id="email" name="email" className="input" />
          <input type="submit" className="button" />
        </form>
      </div>
    </StyledSponsor>
  );
}

const StyledSponsor = styled.div`
  height: 70vh;

  .card {
    background-image: url(${background});
    background-size: 100% 100%;
    filter: blur(8px);
    -webkit-filter: blur(8px);

    padding: 2rem;
    margin: 5rem;
    border-radius: 16px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  }
  .header,
  .content,
  .form {
    margin: auto;
    filter: blur(0px);

    index: 1;
  }
  .header {
    font-size: 2rem;
    font-weight: 800;
  }
  .content {
    font-size: 1.2rem;
    font-weight: 300;
    padding: 1rem;
  }
  .form {
    display: flex;
    flex-direction: row;
    margin: 2rem auto;
  }
  .button {
    background-color: coral;
    padding: 1rem;
    border-radius: 8px;
    border: none;
    margin: 1rem;
    color: white;
    font-size: 1.2rem;
  }
  .input {
    border-radius: 8px;
    border: none;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  }
`;
