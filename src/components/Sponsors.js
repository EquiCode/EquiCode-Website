import React from "react";
import styled from "styled-components";
import bg from "../vector/sponsor.svg";
import { generateMedia } from 'styled-media-query';
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


const customMedia = generateMedia({
  smDesktop: '1440px',
  tablet: '960px',

})

const StyledSponsor = styled.div`
  height: 70vh;
  background: url(${bg});
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  ${customMedia.lessThan('tablet')`
    
  `}

  .card {
    background: #fef3db;
    border: none;
    padding: 2rem 7rem;

    border-radius: 16px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  }

  .header,
  .content,
  .form {
    margin: auto;
  }
  .header {
    font-size: 2rem;
    font-weight: 800;
  }
  .content {
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1rem;
  }
  .form {
    display: flex;
    flex-direction: row;
    margin: 2rem auto;
    ${customMedia.lessThan('tablet')`
        flex-direction:column;
    `}
  }
  .button {
    background-color: coral;
    padding: 1rem;
    border-radius: 8px;
    border: none;
    margin: 1rem;
    color: white;
    font-size: 1.2rem;
    ${customMedia.lessThan('tablet')`
        padding:0;
        margin:1rem 0 0 0;
    `}
  }
  .input {
    border-radius: 8px;
    border: none;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  }
`;
