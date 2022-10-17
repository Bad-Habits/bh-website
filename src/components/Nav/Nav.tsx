import { Outlet } from "react-router-dom";
import {
  NavContainer,
  NavLink,
  BhIcon,
  LogoContainer,
  NavLinks,
} from "./Nav.styles";

const Nav = () => {
  return (
    <>
      <NavContainer>
        <LogoContainer to="/">
          <BhIcon />
        </LogoContainer>
        <NavLinks>
          <NavLink to="contact-us">Contact Us</NavLink>
          <NavLink to="tickets">Tickets</NavLink>
          <NavLink to="merch">Merch</NavLink>
        </NavLinks>
      </NavContainer>
      <Outlet />
    </>
  );
};

export default Nav;
