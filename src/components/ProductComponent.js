import React from "react";
import { NavLink } from "react-router-dom";

const ProductComonent = (curElem) => {
  const { id, brand, images, price, category } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={images[0]} alt={brand} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{brand}</h3>
            <p className="card-data--price">${price}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductComonent;