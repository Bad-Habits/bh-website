import { FormInputLabel, Input, Group } from "./styles";
import { FC, InputHTMLAttributes } from "react";

type FormInputProps = {
  label: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
};

const FormInput: FC<FormInputProps> = ({ label, inputProps }) => {
  const isEmpty = inputProps.value === "" && label !== "Date";

  if (inputProps.type === "checkbox") {
    let checked = false;
    if (inputProps.value) checked = true;
    return (
      <Group>
        <input {...inputProps} checked={checked} />
        <label>{label}</label>
      </Group>
    );
  }

  return (
    <Group>
      <Input {...inputProps} />
      {label && <FormInputLabel isEmpty={isEmpty}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
