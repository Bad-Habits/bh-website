import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/store/hooks";
import { signOutUser } from "../../utils/firebase";
import {
  HeaderContainer,
  NavLink,
  BhIcon,
  LogoContainer,
  NavLinks,
} from "./styles";

const Nav = () => {
  const { user } = useAppSelector((state) => state.auth);

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
          {user ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="sign-in">Sign In</NavLink>
          )}
        </NavLinks>
      </HeaderContainer>
      <Outlet />
    </>
  );
};

export default Nav;
