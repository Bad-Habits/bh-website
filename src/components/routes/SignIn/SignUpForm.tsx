import { FC } from "react";
import { SignUpFormContainer, ChangeFormLink } from "./styles";

type SignUpFormProps = {
  handleFormChange: () => void;
};

const SignUpForm: FC<SignUpFormProps> = ({ handleFormChange }) => {
  return (
    <SignUpFormContainer>
      <h2>Sign Up Form</h2>
      <ChangeFormLink onClick={handleFormChange}>
        Already have an account?
      </ChangeFormLink>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
