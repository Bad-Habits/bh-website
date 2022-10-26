import { FormInputLabel, Input, Group } from "./styles";
import { FC, InputHTMLAttributes } from "react";

type FormInputProps = {
  label: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
};

const FormInput: FC<FormInputProps> = ({ label, inputProps }) => {
  const isEmpty = inputProps.value === "" && label !== "Date";
  return (
    <Group>
      <Input {...inputProps} />
      {label && <FormInputLabel isEmpty={isEmpty}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
