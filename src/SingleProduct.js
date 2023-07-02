import styled from "styled-components";
import { useParams } from "react-router-dom";
import React , {useEffect} from "react";
import {useProductContext} from "./ContextUse/Provider"
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { Container } from "./styles/Container";
import OurImage from "./components/OurImage";
import { NavLink } from "react-router-dom";
import NewRatingStar from "./components/ForRating"
import AddToCart from "./components/CartSection";
const API = "https://dummyjson.com/products";



const SingleProduct = ()=>{

  const {getSingleProduct,singleProduct,SingleLoading} = useProductContext();
  // console.log(getSingleProduct)
  // console.log(singleProduct)
 

  const {id} = useParams();
  console.log(id)

  //Api data

  const {id:newid ,title,description,price,discountPercentage,rating,stock,brand,category,images} = singleProduct;

  useEffect(()=>{
    getSingleProduct(`${API}/${id}`);
    
  },[getSingleProduct]);

  if (SingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }

  return (
    <Wrapper>
      <h4  className="newNavigation"><NavLink   to="/">Home</NavLink>/{title}</h4>
      <Container className="container">
        <div className="grid grid-two-column">
          {/* product Images  */}
          <div className="product_images">
            <OurImage className="centerimage" thumb={images} />
          </div>

          {/* product dAta  */}
          <div className="product-data">
            <h2>{title}</h2>
             <NewRatingStar star = {rating}/>
            <h2>{brand}</h2>
            <h2>{category}</h2>
            
            {/* <p>{reviews} reviews</p> */}
            <p className="product-data-price">
              MRP:
              <del>
              ${price + discountPercentage}
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: ${price};
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p> Delivery</p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {newid} </span>
              </p>
              <p>
                Brand :<span> {brand} </span>
              </p>
              
            </div>
            <hr></hr>
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
          
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
   
    
  }

  .centerimage{
    margin:auto;
  }

  .newNavigation{
    font-size:40px;
    text-align:end;
    padding-top:20px;
    padding-right:20px;
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
