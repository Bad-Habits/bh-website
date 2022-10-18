import styled from "styled-components";
import { Link } from "react-router-dom";

export const AuthFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: auto;
  padding: 10px;
  border: 2px solid grey;
  border-radius: 10px;
`;

export const Form = styled.form`
  width: 80%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ChangeFormLink = styled(Link)`
  margin: 30px 0;
  color: blue;
  cursor: pointer;
`;
