import React from "react";

import { ContentCard, Image, TitleCard, CardInfo } from "./Product.elements";
import { useDispatch } from "../../store";

const Product = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const addProducts = (product) => {
    dispatch({ type: "ADD_PRODUCT", product });
  };

  return (
    <ContentCard>
      <Image src={product.image} alt="img-e" />
      <h5>{product.title}</h5>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px",
        }}
      >
        <div>S/.{product.price}</div>
        <button onClick={() => addProducts(product)}>Add</button>
      </div>
    </ContentCard>
  );
};

export default Product;
