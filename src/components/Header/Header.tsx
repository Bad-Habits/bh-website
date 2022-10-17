import { Outlet } from "react-router-dom";
import {
  HeaderContainer,
  NavLink,
  BhIcon,
  LogoContainer,
  NavLinks,
} from "./styles";

const Nav = () => {
  return (
    <>
      <HeaderContainer>
        <LogoContainer to="/">
          <BhIcon />
        </LogoContainer>
        <NavLinks>
          <NavLink to="contact-us">Contact Us</NavLink>
          <NavLink to="tickets">Tickets</NavLink>
          <NavLink to="merch">Merch</NavLink>
          <NavLink to="sign-in">Sign In</NavLink>
        </NavLinks>
      </HeaderContainer>
      <Outlet />
    </>
  );
};

export default Nav;
