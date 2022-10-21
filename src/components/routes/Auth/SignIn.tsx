import { useState } from "react";
import Button from "../../Button/Button";
import GoogleButton from "react-google-button";
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
import { useAppDispatch, useAppSelector } from "../../../redux/store/hooks";

import { setIsLoading } from "../../../redux/features/isLoading";

const formFields: ("email" | "password")[] = ["email", "password"];

const SignIn = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const isLoading = useAppSelector((state) => state.isLoading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { email, password } = formValues;

    try {
      await signInUserWithEmailAndPassword(email, password);
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

    dispatch(setIsLoading(false));
  };

  const handleGoogleSignIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(setIsLoading(true));

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

    dispatch(setIsLoading(false));
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
          <Button isLoading={isLoading}>Sign In</Button>
          {isLoading ? null : <GoogleButton onClick={handleGoogleSignIn} />}
        </ButtonsContainer>
      </Form>
      <ChangeFormLink to="../sign-up">Don't have an account?</ChangeFormLink>
    </AuthFormContainer>
  );
};

export default SignIn;
