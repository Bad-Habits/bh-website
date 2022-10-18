import { useState, FC } from "react";
import Button from "../../Button/Button";
import GoogleButton from "react-google-button";
import FormInput from "../../FormInput/FormInput";
import {
  AuthFormContainer,
  Form,
  ButtonsContainer,
  ChangeFormLink,
} from "./styles";
import { createUserDoc, signInWithGooglePopup } from "../../../utils/firebase";

const formFields: ("email" | "password")[] = ["email", "password"];

type SignInFormProps = {
  handleFormChange: () => void;
};

const SignInForm: FC<SignInFormProps> = ({ handleFormChange }) => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const handleSignIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log("regular sign in needs implementing");
  };

  const handleGoogleSignIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDoc(user);
    console.log(userDocRef);
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
    <AuthFormContainer>
      <h2>Sign In</h2>
      <Form>
        {formInputs}
        <ButtonsContainer>
          <Button buttonType="inverted" buttonProps={{ onClick: handleSignIn }}>
            Sign In
          </Button>
          <GoogleButton onClick={handleGoogleSignIn} />
        </ButtonsContainer>
      </Form>
      <ChangeFormLink onClick={handleFormChange}>
        Don't have an account?
      </ChangeFormLink>
    </AuthFormContainer>
  );
};

export default SignInForm;
