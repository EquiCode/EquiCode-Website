import React, { Component } from "react";
import styled from "styled-components";
import vector from "../vector/home2.svg";
import { Button } from "reactstrap";
import { generateMedia } from "styled-media-query";
class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <div className="content">
          <div className="header">Encouraging Equal Learning</div> 
          <div className="heading">
            EquiCode
          </div>
          <div className="intro">
            EquiCode is a wholsesome community focusing on the holistic development of beginners and veterans alike to provide equal opportunities for everyone to learn, grow and build. We aspire to cultivate a united diverse-learning environment. 
          </div>
          <Button size="lg" id="button">
            Join us
          </Button>{" "}
        </div>
        <div className="vector">
          <img src={vector} alt="" className="image" />
        </div>
      </HomeContainer>
    );
  }
}

export default Home;

// Media Query
const customMedia = generateMedia({
  smDesktop: "1440px",
  tablet: "960px",
});

const HomeContainer = styled.div`
  background: #fef3db;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  ${customMedia.lessThan("tablet")`
      flex-flow: row wrap;
      height:fit-content;
  `}
  .content {
    margin-top: 5rem;
    width: 30rem;
    align-items: center;
    ${customMedia.lessThan("tablet")`
      padding:2rem;
      font-size:1rem;
      margin-top:2rem;
    `}
  }
  .vector {
    margin-top: 5rem;
    // width:40rem;
    display: flex;
    width: fit-content;
    align-items: center;
    ${customMedia.lessThan("tablet")`
      margin-bottom:2rem;
    `}
  }
  .image {
    width: 50rem;
    ${customMedia.lessThan("tablet")`
      width:25rem;
    `}
  }

  .heading {
    font-size: 3rem;
    font-weight: 800;
    border-bottom: 10px solid coral;
    border-bottom-length: 4rem;
    line-height: 4rem;
    ${customMedia.lessThan("tablet")`
      font-size:2.5rem;
    `}
  }
  .header {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    ${customMedia.lessThan("tablet")`
      font-size:2rem;
    `}
  }
  #button {
    background: coral;
    border: none;
    margin-top: 2rem;
  }
  .intro {
    margin-top: 2rem;
    line-height: 1.5rem;
  }

  // flex-wrap:wrap;
  // align-items: center;
  // .content {
  //   margin: 1rem 0rem 15rem 3rem;
  //   padding: 5rem 2rem 7rem 2rem;
  //   overflow: hidden;
  // }
  // .vector {
  //   padding: 0rem 1rem;
  // }
  // .image {
  //   height: 57rem;
  //   width: 60rem;
  //   ${customMedia.lessThan("tablet")`
  //     height:20rem;
  //   `}
  // }
  // .header {
  //   font-size: 1.5rem;
  //   font-weight: 800;
  //   margin-bottom: 1.5rem;
  // }
  // .heading {
  //   font-size: 3rem;
  //   font-weight: 800;
  //   border-bottom: 10px solid coral;
  //   border-bottom-length: 4rem;
  //   line-height: 4rem;
  // }
  // .intro {
  //   margin-top: 2rem;
  //   line-height: 1.5rem;
  // }
  // #button {
  //   margin: 3.5rem auto;
  //   length: 40rem;
  //   width: 10rem;
  //   background-color: coral;
  //   border: none;
  // }
`;
