import {
  Banner,
  Nav,
  NavbarContainer,
  NavLogo,
  ShoppingIcon,
  NavItem,
  NavLinks,
  CardContent,
  ContentShopping,
  ContainerOptions,
} from "./Navbar.elements";
import { useTrackedState } from "../../store";

function Navbar() {
  const { products } = useTrackedState();

  return (
    <>
      <Banner>My Shop</Banner>
      <Nav>
        <NavbarContainer>
          <ContainerOptions>
            <NavLogo to="/">E-Shop</NavLogo>
            <NavItem>
              <NavLinks to="products">Products</NavLinks>
            </NavItem>
          </ContainerOptions>

          <CardContent>
            <ContentShopping>
              <ShoppingIcon />
              {products.length}
            </ContentShopping>
          </CardContent>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
