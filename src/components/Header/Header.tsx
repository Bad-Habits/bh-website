import { Link } from "react-router-dom";
import { HeaderContainer, NavLink, BhIcon, NavLinks } from "./styles";

const Header = () => {
  return (
    <>
      <HeaderContainer sticky={true}>
        <Link to="/">
          <BhIcon />
        </Link>
        <NavLinks>
          <NavLink to="contact-us">Contact Us</NavLink>
          <NavLink to="tickets">Tickets</NavLink>
          <NavLink to="merch">Merch</NavLink>
        </NavLinks>
      </HeaderContainer>
    </>
  );
};

export default Header;
