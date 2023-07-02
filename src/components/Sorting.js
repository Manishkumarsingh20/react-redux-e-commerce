import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import {NewFiltercustomHook} from "../ContextUse/CreateContexFilter";


const Sorting = () => {
  const {Threeimage,Gridview,displayList,filterSection,Sortingdata} = NewFiltercustomHook();
 
  return (
    <Wrapper className="sort-section">
      {/* 1st column  */}
      <div className="sorting-list--grid">
        <button
          className= {Threeimage?"active sort-btn":"sort-btn"} onClick={Gridview}>

          <BsFillGridFill className="icon" />
        </button>

        <button
          className= {!Threeimage?" active sort-btn":"sort-btn" }
          onClick={displayList}>
            <BsList className="icon"/>
         
</button>
      </div>

  
      <div className="product-data">
        <p>{`In Stock ${filterSection.length} Product`}</p>
      </div> 



       <form>

<label htmlFor ="sort">
  <select name="sort" id="sort" onClick={Sortingdata}>
    <option value="lowest">Low to High</option>
    <option value="high">High to Low</option>
    <option value="ascending">Asc to Dsc</option>
    <option value="descending">Dsc to Asc</option>
  </select>
</label>
       </form>
    
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: black;
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sorting;
