import styled from "styled-components";
import { maxWidth } from "../../../utils/constants";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IntroVideo = styled.iframe`
  position: relative;
  margin: auto;
  width: 80vw;
  max-width: ${maxWidth};
  height: ${80 * 0.5625}vw;
  max-height: 562px;
  border: 0;
  z-index: -1;
`;
