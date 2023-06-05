import React from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
const SectionOne = ({ Props }) => {
  

  return (
    <FirstComponentWrapper>
      <div className="container" >
        <div className="grid divide-grid-into-two-column">
            {/* our homepage image  */}
          <div className="image-part">
            <figure>
              <img
                src={Props.ImageUrl}
                alt="no"
                className="design-image"
              />
            </figure>
          </div>
          <div className="section">
            <p className="FirstHeading ">Welcome to </p>
            <h1 className="HeadingClass"> {Props.title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            <NavLink>
              <Button>show now</Button>
            </NavLink>
          </div>
          
        </div>
      </div>
    </FirstComponentWrapper>
  );
};

const FirstComponentWrapper = styled.section`
  padding: 10rem;
  background-color:#ffdd57;
  
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .HeadingClass{
    font-family: cursive;
    color:black;
  }
 

 
  .section {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .FirstHeading {
      margin-bottom: 0;
    }
  }

  .image-part {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: black;
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .design-image {
    width: 100%;
    height: auto;

  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default SectionOne;

   


