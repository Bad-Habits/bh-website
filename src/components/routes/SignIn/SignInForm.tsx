import { useState, FC } from "react";
import Button from "../../Button/Button";
import GoogleButton from "react-google-button";
import FormInput from "../../FormInput/FormInput";
import {
  SignInFormContainer,
  ButtonsContainer,
  ChangeFormLink,
} from "./styles";
import { signInWithGooglePopup } from "../../../utils/firebase";

const formFields: ("email" | "password")[] = ["email", "password"];

type SignInFormProps = {
  handleFormChange: () => void;
};

const SignInForm: FC<SignInFormProps> = ({ handleFormChange }) => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const handleSignIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log("regular sign in");
  };

  const handleGoogleSignIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const res = await signInWithGooglePopup();
    console.log({ res });
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const formInputs = formFields.map((field) => {
    return (
      <FormInput
        key={field}
        label={field[0].toUpperCase() + field.slice(1)}
        inputProps={{
          type: field,
          required: true,
          onChange: handleChange,
          name: field,
          value: formValues[field],
        }}
      />
    );
  });

  return (
    <SignInFormContainer>
      <h2>Sign In</h2>
      <form>
        {formInputs}
        <ButtonsContainer>
          <Button buttonType="inverted" buttonProps={{ onClick: handleSignIn }}>
            Sign In
          </Button>
          <GoogleButton onClick={handleGoogleSignIn} />
        </ButtonsContainer>
      </form>
      <ChangeFormLink onClick={handleFormChange}>
        Don't have an account?
      </ChangeFormLink>
    </SignInFormContainer>
  );
};

export default SignInForm;
