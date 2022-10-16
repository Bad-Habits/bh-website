import { Outlet } from "react-router-dom";
import { NavContainer } from "./Nav.styles";

const Nav = () => {
  return (
    <>
      <NavContainer>Navbar</NavContainer>
      <Outlet />
    </>
  );
};

export default Nav;
