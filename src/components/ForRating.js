import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const Star = ({ star }) => {
 

  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {star >= index + 1 ? (
          <FaStarFilled className="icon" />
        ) : star >= number ? (
          <FaStarHalfAltFilled className="icon" />
        ) : (
          <AiOutlineStarEmpty className="icon" />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="icon-style">{ratingStar} </div>
      <h4>{star}</h4>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }
  }

  h4{
    padding-top:4px;
  }
`;

const FaStarFilled = styled(FaStar)`
  fill: orange;
`;

const FaStarHalfAltFilled = styled(FaStarHalfAlt)`
  fill: orange;
`;

const AiOutlineStarEmpty = styled(AiOutlineStar)`
  fill: orange;
`;

export default Star;
