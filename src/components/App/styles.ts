import styled, { createGlobalStyle } from "styled-components";
import { mobileWidth } from "../../utils/constants";

// Global
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    color: red;
    margin: auto;
    padding: 20px;
    font-family: sans-serif;
    text-align: center;

    @media screen and (max-width: ${mobileWidth}) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: red;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  position: relative;
  top: 100px;
`;
