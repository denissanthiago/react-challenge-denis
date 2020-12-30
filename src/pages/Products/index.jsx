import Navbar from "../../components/Navbar";
import ProductsList from "../../components/ProductsList";
import { Container } from "./Products.elements";

function ProductsPage() {
  return (
    <Container>
      <Navbar />
      <ProductsList />
    </Container>
  );
}

export default ProductsPage;
