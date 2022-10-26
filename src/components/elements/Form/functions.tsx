import FormInput from "./FormInput";
import { FormStateType } from "./Form";

const getInputType = (field: string) => {
  switch (field) {
    case "email":
      return "email";
    case "phoneNumber":
      return "tel";
    case "password":
    case "confirmPassword":
      return "password";
    case "price":
    case "quantity":
      return "number";
    case "date":
      return "datetime-local";
    default:
      return "text";
  }
};

export const generateFormInputs = (
  fields: string[],
  formValues: FormStateType,
  handleChange: (e: { target: { name: any; value: any } }) => void
) => {
  return fields.map((field) => {
    let type = getInputType(field);

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
          type,
          name: field,
          value: formValues[field],
          onChange: handleChange,
          required: true,
        }}
      />
    );
  });
};
