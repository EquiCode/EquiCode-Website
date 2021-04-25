import React from "react";
import styled from "styled-components";
import profile from "../images/profile.jpg";
import insta from "../icons/insta.svg";
import twitter from "../icons/twitter.svg";
import linkedin from "../icons/linkedin.svg";
import { generateMedia } from "styled-media-query";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap";

export default function CardComp() {
  const Members = [
    {
      title: "Khushi ",
      profile: profile,
      team: "Founder",
      subtitle: "Founder",
      text: "I hate CSS",
    },
    {
      title: "Akshat Rana",
      profile: profile,
      team: "Co-Founder",
      subtitle: "Co-Founder",
      text: "I hate CSS",
    },
    {
      title: "Siddharth Mehta",
      profile: profile,
      team: "Content Team",
      subtitle: "Community Lead",
      text: "I hate CSS",
    },
    {
      title: "Ayushi Srivastava",
      profile: profile,
      team: "Content Team",
      subtitle: "Content Lead",
      text: "I hate CSS",
    },
    {
      title: "Gautam Jain",
      profile: profile,
      team: "Content Team",
      subtitle: "Graphic Designer",
      text: "I hate CSS",
    },
    {
      title: "Raghav Aggarwal",
      profile: profile,
      team: "Content Team",
      subtitle: "Graphic Designer",
      text: "I hate CSS",
    },
    {
      title: "Shaurya Guliani",
      profile: profile,
      team: "Content Team",
      subtitle: "Community Manager",
      text: "I hate CSS",
    },
    {
      title: "Mehak Agrawal",
      profile: profile,
      team: "Content Team",
      subtitle: "Content Writer",
      text: "I hate CSS",
    },
    {
      title: "Pratham Krishna",
      profile: profile,
      team: "Content Team",
      subtitle: "Social Media Manager",
      text: "I hate CSS",
    },
    {
      title: "Saumya Ranjan Nayak",
      profile: profile,
      team: "Content Team",
      subtitle: "Technical Associate",
      text: "I hate CSS",
    },
  ];
  return (
    <StyledTeam>
      <div className="container">
        {Members.map((member) => {
          return (
            <Card className="card">
              <div className="Team"> {member.team} </div>
              <CardImg
                center
                width="100%"
                src={member.profile}
                alt="Card image cap"
                className="CardImg"
              />
              <CardBody className="CardBody">
                <CardTitle tag="h5" className="CardTitle">
                  {member.title}
                </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted CardSubTitle">
                  {member.subtitle}
                </CardSubtitle>
                <CardText className="CardText">
                  {/* {member.text} */}
                  <img src={insta} alt="" className="icon insta" />
                  <img src={twitter} alt="" className="icon twitter" />
                  <img src={linkedin} alt="" className="icon linkedin" />
                </CardText>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </StyledTeam>
  );
}

// Media Query
const customMedia = generateMedia({
  smDesktop: "1440px",
  tablet: "960px",
});

const StyledTeam = styled.div`
  background: #f6b230;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  .container {
    border-radius: 24px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-height: 70%;
    min-width: 90%;
    justify-content: space-evenly;
    // gap:1.5rem;
    // margin-top: 25rem;
    ${customMedia.lessThan("tablet")`
      align-items:center;
      justify-content:center;
  `}
  }
  .Team {
    background: #000;
    color: #f6b230;
    border-radius: 0px 16px 16px 0px;
    // width:7rem;
    width: fit-content;
    text-align: center;
    font-size: 0.9rem;
    margin-top: 0.8rem;
    padding: 0.3rem;
  }
  .card {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    background: #f4f7ff;
    border-radius: 16px;
    overflow: hidden;
    height: 16rem;
    width: 16rem;
    ${customMedia.greaterThan("tablet")`
      margin-top:0;
      margin-bottom:0;
      margin:1.5rem;
  `}
  }
  .icon {
    visibility: hidden;
    margin-top: -20px;

    height: 2.5rem;
  }
  .insta {
  }
  .card:hover {
    transform: scale(1.1);
    transition-duration: 0.2s;
    background: black;
    color: #f6b230;
  }
  .card:hover .Team {
    background: #f6b230;
    color: #000;
  }
  .card:hover .icon {
    visibility: visible;
  }
  .card:hover .CardText {
    visibility: hidden;
  }
  .card:hover .CardSubTitle {
    visibility: hidden;
  }
  .CardImg {
    height: 45%;
    width: 45%;
    border-radius: 50%;
    margin: 5% auto auto;
    border: 1px black solid;
  }
  .CardBody {
    margin: 0 auto;

    padding: 1px;
  }
  .CardTitle,
  .CardSubTitle,
  .CardText {
    display: flex;
    flex-direction: row;
    text-align: center;
    margin: 0;
    align-items: center;
    justify-content: center;
  }
  .CardText {
  }
`;
