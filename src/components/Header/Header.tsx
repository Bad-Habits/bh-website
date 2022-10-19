import { Outlet } from "react-router-dom";
import {
  HeaderContainer,
  NavLink,
  BhIcon,
  LogoContainer,
  NavLinks,
} from "./styles";

const Header = () => {
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
        </NavLinks>
      </HeaderContainer>
      <Outlet />
    </>
  );
};

export default Header;
