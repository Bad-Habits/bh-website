import { FC, FormEventHandler, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store/hooks";
import Button from "../Button/Button";
import { generateFormInputs } from "./functions";
import { FormContainer, FormElement } from "./styles";

type FormProps = {
  header: string;
  fields: string[];
  handleSubmit: (formValues: any) => void;
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
  const isLoading = useAppSelector((state) => state.isLoading);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleSubmit(formValues);
  };

  return (
    <FormContainer>
      <h2>{header.toUpperCase()}</h2>
      <FormElement onSubmit={handleFormSubmit}>
        {generateFormInputs(fields, formValues, handleChange)}
        <Button isLoading={isLoading}>{buttonText}</Button>
      </FormElement>
    </FormContainer>
  );
};

export default Form;
