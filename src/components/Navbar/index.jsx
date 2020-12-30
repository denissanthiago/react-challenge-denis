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
  ContainerTooltip,
  TitleTooltip,
  ContentProduct,
  ContainerProducts,
  TotalCost,
} from "./Navbar.elements";
import { useTrackedState } from "../../store";
import Tooltip from "react-tooltip-lite";

function Navbar() {
  const { products } = useTrackedState();

  const totalCost = () =>
    products.reduce((accumulator, current) => {
      accumulator = accumulator + current.price * current.count;

      return accumulator;
    }, 0);

  return (
    <>
      <Banner>My Shop</Banner>
      <Nav>
        <NavbarContainer>
          <ContainerOptions>
            <NavLogo to="/">E-Shop</NavLogo>
            <NavItem>
              <NavLinks to="/">Products</NavLinks>
            </NavItem>
          </ContainerOptions>

          <CardContent>
            <Tooltip
              content={
                <ContainerTooltip height={products.length * 70}>
                  <TitleTooltip>Shop Card List</TitleTooltip>
                  <ContainerProducts>
                    {products.map((product) => (
                      <ContentProduct key={product.id}>
                        <div>
                          {product.count} uni. - {product.title}
                        </div>
                        <div>S/ {Number(product.price).toFixed(2)}</div>
                        <div>
                          S/{(product.price * product.count).toFixed(2)}
                        </div>
                      </ContentProduct>
                    ))}
                  </ContainerProducts>
                  <TotalCost>
                    <div>Total</div>
                    <div>S/. {totalCost().toFixed(2)}</div>
                  </TotalCost>
                </ContainerTooltip>
              }
              direction="bottom"
              tagName="span"
              className="target"
            >
              <ContentShopping>
                <ShoppingIcon />
                {products.length}
              </ContentShopping>
            </Tooltip>
          </CardContent>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
