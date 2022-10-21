import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as bhLogo } from "../../assets/bhLogo.svg";
import { mobileWidth, maxWidth, minWidth } from "../../utils/constants";

// Header
export const HeaderContainer = styled.header`
  position: fixed;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  background-color: black;
  min-width: ${minWidth};
  max-width: ${maxWidth};
  z-index: 1;

  border: 1px solid blue;
  @media screen and (max-width: ${mobileWidth}) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const BhIcon = styled(bhLogo)`
  position: relative;
  left: 5px;
  height: 80px;
  width: 80px;

  @media screen and (max-width: ${mobileWidth}) {
    width: 60px;
    height: 60px;
  }
`;

export const NavLinks = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  width: 80px;
  /* padding: 10px 15px; */
  cursor: pointer;
`;
