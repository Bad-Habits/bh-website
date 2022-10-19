import { createGlobalStyle } from "styled-components";
import { mobileWidth } from "../../utils/constants";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    color: red;
    padding: 20px 40px;
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
