import { Container } from "./ProductsList.elements";
import Product from "../Product";
import { useFetch } from "../../hooks/useFetch";

const products = [
  { name: "1" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
  { name: "11" },
  { name: "12" },
  { name: "13" },
  { name: "14" },
  { name: "15" },
];

function ProductsList() {
  const res = useFetch("https://fakestoreapi.com/products", {});

  if (!res.response) {
    return <div>Loading...</div>;
  }

  console.log(res);

  return (
    <Container>
      {res.response.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
}

export default ProductsList;
