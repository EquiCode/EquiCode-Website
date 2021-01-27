import React, { Component } from "react";
import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import NavbarNew from '../components/navbar/NavbarNew';
import { ReactComponent as ReactLogo } from "../vector/clip-942.svg";
class Home extends Component {
  render() {
    return (
      <HomeStyled>
        <div className="border">
          <Navbar />
          <div className="container">
            <div className="content">
              <div className="header">Encouraging</div>
              <div className="second-header">Equal Learning</div>
              <div className="third-header">
                EquiCode focuses on the holistic development of beginners <br />{" "}
                and veterans alike. We aspire to cultivate a diverse learning
                environment
              </div>
            </div>
            <ReactLogo className="homeVector" />
          </div>
        </div>
      </HomeStyled>
    );
  }
}

export default Home;

const HomeStyled = styled.div`
  background-color: #394561;
  height: 100vh;
  position: absolute;
  width: 100vw;

  .border {
    margin: 5vh 2vw;
    background-color: #f4f7ff;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    border-radius: 24px;
    height: 90vh;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .container .homeVector {
    height: 100%;
    width: 60%;
  }
  .container .content {
    margin-bottom: 20vh;
  }
  .container .content .header {
    font-weight: 800;
    font-size: 5rem;
    color: #394561;
  }
  .container .content .second-header {
    font-weight: 100;
    font-size: 4rem;
    color: #394561;
  }
  .container .content .third-header {
    font-weight: 50;
    font-size: 1rem;
    margin-top: 2vh;
    line-height: 1.5;
  }
`;
