import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import { Button } from "../styles/Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
       

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>Super Store</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="footer-subscribe">
              <h3>Shop Now to get a huge discount</h3>
              <h3>For More contact us</h3><NavLink to="/contact"><span><p className="goto">Go to Contact Page</p></span></NavLink>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3>+91 12345678978</h3>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div> <FaDiscord className="icons" />
                </div>
                <div> <FaInstagram className="icons" />
                </div>
                <div><FaYoutube className="icons" />
                  
                </div>
              </div>
            </div>
            
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} All Right-reserve of SuperStore
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
   
//   .iSIFGq {
//     margin: 0;
//     padding:0;
    
//   }

  .goto{
    color:blue;
    font:italic;
  }
  .container{
   display:flex;
   justify-content:center;
  }
  
  .footer-about h3{
    font-family: cursive;
    font-size:40px;
  }

  .contact-short {
    width:20% ;
    // margin: auto;
    // padding: 5rem 10rem;
    background-color: #527deb;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(20%);

    // .grid div:last-child {
    //   justify-self: end;
    //   align-self: center;
    // }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
  
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;