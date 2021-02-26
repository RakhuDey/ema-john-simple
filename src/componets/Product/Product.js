import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={props.product.img} alt="" srcset="" />
      </div>
      <div>
        <h4 className="product-name">{props.product.name}</h4>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <p>${price}</p>
        <p>only {stock} left in a stock - order soon</p>
        <button
          className="button"
          onClick={() => props.handleAddProduct(props.product)}
        >
          <FontAwesomeIcon icon={faCartPlus} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
