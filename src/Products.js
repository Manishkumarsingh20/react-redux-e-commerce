import React from "react";
import styled from "styled-components";
import Filter from "./components/Filter";
import Sorting from "./components/Sorting";
import ProductListUi from "./components/ProductListUi";
// import {NewFiltercustomHook} from "./ContextUse/CreateContexFilter"
const Products = () => {
  // const {productSection}= NewFiltercustomHook();
  // console.log(productSection)
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <Filter />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sorting />
          </div>
          <div className="main-product">
            <ProductListUi  />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
