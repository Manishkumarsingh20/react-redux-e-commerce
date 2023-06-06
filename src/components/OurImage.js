import React ,{useState} from "react";
import styled from "styled-components";


const OurImage = ({ thumb  }) => {
  if (thumb && thumb.length > 0) {
    // Access the first element of the array
    var firstElement = thumb[0];
    // Perform further operations with the first element
  } else {
    console.log("The array is either undefined or empty.");
  }
  
  //  console.log(firstElement)

  
   const [singleImage,setSingleImage] = useState(firstElement)
   


    return (
     
        <Wrapper>

            <div className="grid grid-four-column rowitem">
             {Array.isArray(thumb)?thumb.map((curElm, index) => {
          return (
            <figure key={index}>
              <img
                src={curElm}
                alt={` ${index + 1}`}
                className="box-image--style"
                key={index}
                onClick={() => setSingleImage(curElm)}
              />
            </figure>
          );
        })
        
:null}
            </div>
            {/* 2nd column  */}
        
            <div className="main-screen">
           <img src ={singleImage} alt="error" />
           
      </div>



        </Wrapper>
    );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    display:flex;
    justify-content:center;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default OurImage;