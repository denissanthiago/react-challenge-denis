import { Container } from "./ProductsList.elements";
import Product from "../Product";
import { useFetch } from "../../hooks/useFetch";

function ProductsList() {
  const res = useFetch("https://fakestoreapi.com/products", {});

  if (!res.response) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      {res.response.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
}

export default ProductsList;
