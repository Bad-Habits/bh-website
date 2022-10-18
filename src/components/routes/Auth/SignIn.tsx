import { useState } from "react";
import Button from "../../Button/Button";
import GoogleButton from "react-google-button";
import FormInput from "../../FormInput/FormInput";
import {
  AuthFormContainer,
  Form,
  ButtonsContainer,
  ChangeFormLink,
} from "./styles";
import {
  createUserDoc,
  signInUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { formInputGenerator } from "./functions";

const formFields: ("email" | "password")[] = ["email", "password"];

const SignIn = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);

    const { email, password } = formValues;

    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      console.log(user);
      navigate("/");
    } catch (err: any) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.error("Error signing in user with email and password:", err);
      }
    }

    setIsLoading(false);
  };

  const handleGoogleSignIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { user } = await signInWithGooglePopup();
      await createUserDoc(user);
      navigate("/");
    } catch (err: any) {
      switch (err.code) {
        default:
          console.error("Error signing in user with google:", err);
      }
    }

    setIsLoading(false);
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const formInputs = formInputGenerator(formFields, formValues, handleChange);

  return (
    <AuthFormContainer>
      <h2>Sign In</h2>
      <Form onSubmit={handleSignIn}>
        {formInputs}
        <ButtonsContainer>
          <Button buttonType="inverted" isLoading={isLoading}>
            Sign In
          </Button>
          {isLoading ? null : <GoogleButton onClick={handleGoogleSignIn} />}
        </ButtonsContainer>
      </Form>
      <ChangeFormLink to="../sign-up">Don't have an account?</ChangeFormLink>
    </AuthFormContainer>
  );
};

export default SignIn;
