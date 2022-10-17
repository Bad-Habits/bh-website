import { FC } from "react";
import { SignInFormContainer, ChangeFormLink } from "./styles";

type SignInFormProps = {
  handleFormChange: () => void;
};

const SignInForm: FC<SignInFormProps> = ({ handleFormChange }) => {
  return (
    <SignInFormContainer>
      <h2>Sign In Form</h2>
      <ChangeFormLink onClick={handleFormChange}>
        Don't have an account?
      </ChangeFormLink>
    </SignInFormContainer>
  );
};

export default SignInForm;
