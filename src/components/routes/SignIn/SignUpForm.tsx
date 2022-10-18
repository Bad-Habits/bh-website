import { FC, useState } from "react";
import Button from "../../Button/Button";
import FormInput from "../../FormInput/FormInput";
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

type SignUpFormProps = {
  handleFormChange: () => void;
};

const SignUpForm: FC<SignUpFormProps> = ({ handleFormChange }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const signUpHandler = async () => {
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
      await createUserDoc(user, { displayName });
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
    }

    navigate("/");
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const formInputs = formFields.map((field) => {
    return (
      <FormInput
        key={field}
        label={
          field[0].toUpperCase() +
          field
            .slice(1)
            .split(/(?=[A-Z])/)
            .join(" ")
        }
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
      <h2>Sign Up Form</h2>
      <Form onSubmit={signUpHandler}>
        {formInputs}
        <ButtonsContainer>
          <Button buttonType="inverted">Sign Up</Button>
        </ButtonsContainer>
      </Form>
      <ChangeFormLink onClick={handleFormChange}>
        Already have an account?
      </ChangeFormLink>
    </AuthFormContainer>
  );
};

export default SignUpForm;
