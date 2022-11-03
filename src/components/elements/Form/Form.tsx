import { FC, FormEventHandler, useState } from "react";
import { useAppSelector } from "../../../redux/store/hooks";
import { HandleChangeType } from "../../../utils/types";
import Button from "../Button/Button";
import { generateFormElements } from "./functions";
import { FormContainer, FormElement } from "./styles";

type FormProps = {
  header: string;
  initialFormValues: { [key: string]: any };
  handleSubmit: (formValues: any) => void;
  buttonText: string;
};

export interface FormStateType {
  [key: string]: any;
}

const Form: FC<FormProps> = ({
  header,
  initialFormValues,
  handleSubmit,
  buttonText,
}) => {
  const [formValues, setFormValues] =
    useState<FormStateType>(initialFormValues);
  const isLoading = useAppSelector((state) => state.isLoading);

  const handleChange: HandleChangeType = (e) => {
    let { name, value } = e.target;

    if (e.target.hasOwnProperty("checked")) value = e.target.checked;

    if (!name.includes("."))
      return setFormValues({ ...formValues, [name]: value });

    setFormValues((prev) => {
      const newFormValues = { ...prev };
      const [field, i, innerField] = name.split(".");
      prev[field][i][innerField] = value;
      return newFormValues;
    });
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    handleSubmit(formValues);
    console.log(formValues);
  };

  return (
    <FormContainer>
      <h2>{header.toUpperCase()}</h2>
      <FormElement onSubmit={handleFormSubmit}>
        {generateFormElements(formValues, setFormValues, handleChange)}
        <Button isLoading={isLoading}>{buttonText}</Button>
      </FormElement>
    </FormContainer>
  );
};

export default Form;
