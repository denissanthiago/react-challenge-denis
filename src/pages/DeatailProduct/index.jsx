import { useParams } from "react-router-dom";
import { useDispatch } from "../../store";
import Navbar from "../../components/Navbar";

import { Container, DetailContent, Image } from "./DetailProduct.elements";
import { useFetch } from "../../hooks/useFetch";

const DetailProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const productFetch = useFetch(
    `https://fakestoreapi.com/products/${productId}`,
    {}
  );

  const addProducts = (product) => {
    dispatch({ type: "ADD_PRODUCT", product });
  };

  const { response: product } = productFetch;

  return (
    <>
      <Navbar />
      {!product ? (
        <div>Loading...</div>
      ) : (
        <Container>
          <Image src={product.image} />
          <DetailContent>
            <h1>{product.title}</h1>
            <div>{product.description}</div>
            <button
              style={{ marginTop: 20, cursor: "pointer" }}
              onClick={() => addProducts(product)}
            >
              Add to Card
            </button>
          </DetailContent>
        </Container>
      )}
    </>
  );
};

export default DetailProduct;
