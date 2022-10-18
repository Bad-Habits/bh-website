import { useState } from "react";
import Button from "../../Button/Button";
import {
  AuthFormContainer,
  ChangeFormLink,
  ButtonsContainer,
  Form,
} from "./styles";
import {
  createNewUserWithEmailAndPassword,
  createUserDoc,
} from "../../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { formInputGenerator } from "./functions";
import { useAppDispatch } from "../../../redux/store/hooks";
import { setUser } from "../../../redux/features/authSlice";

const formFields: (
  | "firstName"
  | "lastName"
  | "email"
  | "phoneNumber"
  | "password"
  | "confirmPassword"
)[] = [
  "firstName",
  "lastName",
  "email",
  "phoneNumber",
  "password",
  "confirmPassword",
];

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const signUpHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);

    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      confirmPassword,
    } = formValues;

    if (password !== confirmPassword) {
      alert("passwords do not match");
      setFormValues({ ...formValues, password: "", confirmPassword: "" });
    }

    const displayName = firstName + " " + lastName;

    try {
      const { user } = await createNewUserWithEmailAndPassword(email, password);
      await createUserDoc(user, { displayName, phoneNumber });
      dispatch(setUser(user.uid));
      navigate("/");
    } catch (err: any) {
      switch (err.code) {
        case "auth/email-already-in-use":
          alert("Cannot create user, email already in use");
          break;
        default:
          console.error(
            "Error creating new user with email and password:",
            err
          );
      }

      setIsLoading(true);
    }
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const formInputs = formInputGenerator(formFields, formValues, handleChange);

  return (
    <AuthFormContainer>
      <h2>Sign Up Form</h2>
      <Form onSubmit={signUpHandler}>
        {formInputs}
        <ButtonsContainer>
          <Button buttonType="inverted" isLoading={isLoading}>
            Sign Up
          </Button>
        </ButtonsContainer>
      </Form>
      <ChangeFormLink to="../sign-in">Already have an account?</ChangeFormLink>
    </AuthFormContainer>
  );
};

export default SignUp;
