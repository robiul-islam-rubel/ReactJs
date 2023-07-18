import "./style.scss";

import data from "./data.js";
const Product = (props) => {
    console.log(props);
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="">
      <div className="">
        <img src={productImage} alt={productName} href="#" />
        <h1> {productName} </h1>
        <h4> $ {price} </h4>
        <a className="btn" href="#">
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default Product;
