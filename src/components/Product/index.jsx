import React from "react";
import { useHistory } from "react-router-dom";

import { ContentCard, Image } from "./Product.elements";
import { useDispatch } from "../../store";

const Product = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const addProducts = (product) => {
    dispatch({ type: "ADD_PRODUCT", product });
  };

  const detailProduct = (product, event) => {
    event.preventDefault();
    // console.log(product);
    history.push(`/products/${product.id}`);
  };

  return (
    <ContentCard>
      <Image
        onClick={(event) => detailProduct(product, event)}
        src={product.image}
        alt="img-e"
      />
      <h5 style={{ margin: 10 }}>{product.title}</h5>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px",
        }}
      >
        <div>S/.{product.price}</div>
        <button onClick={() => addProducts(product)}>Add to Card</button>
      </div>
    </ContentCard>
  );
};

export default Product;
