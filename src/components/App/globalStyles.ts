import { createGlobalStyle } from "styled-components";
import { mobileWidth } from "../../utils/constants";

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 40px;
    font-family: "Open Sans Condensed", sans-serif;

    @media screen and (max-width: ${mobileWidth}) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
