import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as bhLogo } from "../../assets/bhLogo.svg";
import { mobileWidth } from "../../utils/constants";

export const HeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: ${mobileWidth}) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)``;

export const BhIcon = styled(bhLogo)`
  height: 80px;
  width: 80px;

  @media screen and (max-width: ${mobileWidth}) {
    width: 60px;
  }
`;

export const NavLinks = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: ${mobileWidth}) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
