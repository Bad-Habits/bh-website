import { FC, useState } from "react";
import Button from "../../Button/Button";
import FormInput from "../../FormInput/FormInput";
import {
  SignUpFormContainer,
  ChangeFormLink,
  ButtonsContainer,
} from "./styles";

const formFields: (
  | "firstName"
  | "lastName"
  | "phoneNumber"
  | "email"
  | "password"
  | "confirmPassword"
)[] = [
  "firstName",
  "lastName",
  "phoneNumber",
  "email",
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
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
    <SignUpFormContainer>
      <h2>Sign Up Form</h2>
      <form>
        {formInputs}
        <ButtonsContainer>
          <Button>Sign Up</Button>
        </ButtonsContainer>
      </form>
      <ChangeFormLink onClick={handleFormChange}>
        Already have an account?
      </ChangeFormLink>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
