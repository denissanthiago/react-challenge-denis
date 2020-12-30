import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { ShoppingCart } from "@styled-icons/entypo/ShoppingCart";

export const Nav = styled.nav`
  background-color: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 200;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 100;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentShopping = styled.div`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
`;

export const Banner = styled.div`
  width: 100%;
  height: 80px;
  background-color: gray;
  text-align: center;
  padding-top: 50px;
`;

export const ShoppingIcon = styled(ShoppingCart)`
  color: white;
  height: 20px;
  margin-right: 10px;
`;

export const ContainerOptions = styled.div`
  display: flex;
`;
