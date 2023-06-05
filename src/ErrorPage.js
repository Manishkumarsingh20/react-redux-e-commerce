import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
import styled from "styled-components";


const ErrorPage = () => {
  return (
    <MainWrapper>
      <div className="container">
        <div>
            <img src="images/cross.png" alt="Not Found"></img>
          <h2>404 Error</h2>
          <h3>OOPS!You Have Entered Wrong Url</h3>
          <p>
            The Page you are looking for is not present.Please Click on the home button to Go to the home page of the Website
          </p>
          <NavLink to="/">
            <Button>Go Back to Home</Button>
          </NavLink>
        </div>
      </div>
    </MainWrapper>
  );
};

const MainWrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 14rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;

export default ErrorPage;