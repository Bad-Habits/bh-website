import styled, { css } from "styled-components";

// Form
export const FormContainer = styled.div`
  background-color: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  max-width: 500px;
  margin: auto;
  padding: 10px;
  border: 2px solid grey;
  border-radius: 5px;
`;

export const FormElement = styled.form`
  width: 80%;
`;

export const AdditionalFormInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 25px;

  h2 {
    margin-left: 30px;
  }

  button {
    margin: 0;
  }
`;

// FormInput
const subColor = "grey";
const mainColor = "red";

const shrinkLabelStyles = css`
  top: -17px;
  font-size: 15px;
  color: ${mainColor};
`;

const isEmptyLabelStyles = css`
  top: 10px;
  font-size: 16px;
  color: ${subColor};
`;

type FormInputLabelProps = {
  isEmpty: boolean;
};

export const FormInputLabel = styled.label<FormInputLabelProps>`
  color: ${mainColor};
  font-size: 12px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: -14px;
  transition: 300ms ease all;
  ${({ isEmpty }) => isEmpty && isEmptyLabelStyles};
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: black;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin-top: 25px;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;
