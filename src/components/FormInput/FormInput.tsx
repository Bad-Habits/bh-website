import { FormInputLabel, Input, Group } from "./styles";
import { FC, InputHTMLAttributes } from "react";

type FormInputProps = {
  label: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
};

const FormInput: FC<FormInputProps> = ({ label, inputProps }) => {
  const shrink = inputProps.value !== "";
  return (
    <Group>
      <Input {...inputProps} />
      {label && <FormInputLabel shrink={shrink}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
