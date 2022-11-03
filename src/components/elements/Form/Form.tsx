import { FC, FormEventHandler, useState } from "react";
import { useAppSelector } from "../../../redux/store/hooks";
import Button from "../Button/Button";
import { generateDefaultFormValues, generateFormElements } from "./functions";
import { FormContainer, FormElement } from "./styles";

type FormProps = {
  header: string;
  fields: (string | string[])[];
  handleSubmit: (formValues: any) => void;
  buttonText: string;
};

export interface FormStateType {
  [key: string]: any;
}

const Form: FC<FormProps> = ({ header, fields, handleSubmit, buttonText }) => {
  const [formValues, setFormValues] = useState<FormStateType>(
    generateDefaultFormValues(fields)
  );

  const isLoading = useAppSelector((state) => state.isLoading);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;

    if (!name.includes("."))
      return setFormValues({ ...formValues, [name]: value });

    setFormValues((prev) => {
      const newFormValues = { ...prev };
      const segments = name.split(".");
      let cur = newFormValues;

      for (let i = 0; i < segments.length - 1; i++) {
        cur = cur[segments[i]];
      }
      cur[segments[segments.length - 1]] = value;
      return newFormValues;
    });
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleSubmit(formValues);
  };

  return (
    <FormContainer>
      <h2>{header.toUpperCase()}</h2>
      <FormElement onSubmit={handleFormSubmit}>
        {generateFormElements(fields, formValues, setFormValues, handleChange)}
        <Button isLoading={isLoading}>{buttonText}</Button>
      </FormElement>
    </FormContainer>
  );
};

export default Form;
