import { FC, FormEvent, FormEventHandler, useState } from "react";
import Button from "../Button/Button";
import { generateFormInputs } from "./functions";
import { FormContainer, FormElement } from "./styles";

type FormProps = {
  header: string;
  fields: string[];
  handleSubmit: (e: FormEvent<HTMLFormElement>, formValues: any) => void;
  buttonText: string;
};

export interface FormStateType {
  [key: string]: string;
}

const Form: FC<FormProps> = ({ header, fields, handleSubmit, buttonText }) => {
  const [formValues, setFormValues] = useState<FormStateType>(
    fields.reduce((acc: any, field) => {
      acc[field] = "";
      return acc;
    }, {})
  );

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    handleSubmit(e, formValues);
  };

  return (
    <FormContainer>
      <h2>{header}</h2>
      <FormElement onSubmit={handleFormSubmit}>
        {generateFormInputs(fields, formValues, handleChange)}
        <Button>{buttonText}</Button>
      </FormElement>
    </FormContainer>
  );
};

export default Form;
