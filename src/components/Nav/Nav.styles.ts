import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as bhLogo } from "../../assets/bhLogo.svg";
import { mobileWidth } from "../../utils/constants";

export const NavContainer = styled.div`
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
  height: 100%;
  width: 70px;

  @media screen and (max-width: ${mobileWidth}) {
    width: 50px;
  }
`;

export const NavLinks = styled.div`
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
