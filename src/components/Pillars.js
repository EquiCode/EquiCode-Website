import React from "react";
import styled from "styled-components";
import pillar1 from "../vector/investment.svg";

export default function Pillars() {
  const Pillars = [
    {
      icon: pillar1,
      header: "Header",
      body:
        "This body explains the four pillars of equicode. I have no idea whatsoever ki isme kya likhna hai, meko bolna bhi mat likhne ko. Bye !",
    },
    {
      icon: pillar1,
      header: "Header",
      body:
        "This body explains the four pillars of equicode. I have no idea whatsoever ki isme kya likhna hai, meko bolna bhi mat likhne ko. Bye !",
    },
    {
      icon: pillar1,
      header: "Header",
      body:
        "This body explains the four pillars of equicode. I have no idea whatsoever ki isme kya likhna hai, meko bolna bhi mat likhne ko. Bye !",
    },
  ];
  return (
    <StyledPillars>
      <div className="container">
        {Pillars.map((pillar) => {
          return (
            <div className="card">
              <img src={pillar.icon} className="icon" alt="" />
              <div className="content">
                <div className="header">{pillar.header}</div>
                <div className="body">{pillar.body}</div>
              </div>
            </div>
          );
        })}
      </div>
    </StyledPillars>
  );
}

const StyledPillars = styled.div`
  background: #f6b230;
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
  .card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #f6b230;
    border: none;
  }
  .icon {
    height: 14rem;
    background: #000;
    padding: 2rem;
    border-radius: 50%;
  }
  .header {
    font-size: 3rem;
    font-weight: 500;
    color: #e1970a;
  }
  .body {
    color: #fdefd2;
  }
  .content {
    background: #fff;
    border-radius: 40px 0px 0px 40px;
    margin: 1rem 10rem 2rem 4rem;
    padding: 2rem;
    ${"" /* background-image: url(${logo}); */}
    ${"" /* overflow: hidden;
    background-size: cover;
    backdrop-filter: opacity(0.5px); */}
    background: rgb(2,0,36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(46, 46, 48, 1) 21%,
      rgba(104, 104, 107, 1) 37%,
      rgba(177, 177, 179, 1) 52%,
      rgba(218, 218, 218, 1) 66%,
      rgba(255, 255, 255, 1) 77%,
      rgba(246, 179, 47, 1) 100%
    );
  }
`;
