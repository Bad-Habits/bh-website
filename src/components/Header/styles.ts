import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as bhLogo } from "../../assets/bhLogo.svg";
import { mobileWidth } from "../../utils/constants";

export const HeaderContainer = styled.header`
  height: 70px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  /* margin-bottom: 25px; */

  @media screen and (max-width: ${mobileWidth}) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  position: relative;
  top: -5px;
  left: -5px;
`;

export const BhIcon = styled(bhLogo)`
  height: 80px;
  width: 80px;

  @media screen and (max-width: ${mobileWidth}) {
    width: 60px;
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
  padding: 10px 15px;
  cursor: pointer;
`;
