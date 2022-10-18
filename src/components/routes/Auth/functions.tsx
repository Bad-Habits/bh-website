import FormInput from "../../FormInput/FormInput";

export const formInputGenerator = (
  formFields: string[],
  formValues: any,
  handleChange: (e: { target: { name: any; value: any } }) => void
) => {
  return formFields.map((field) => {
    let type: string;

    switch (field) {
      case "email":
        type = "email";
        break;
      case "phoneNumber":
        type = "tel";
        break;
      case "password":
      case "confirmPassword":
        type = "password";
        break;
      default:
        type = "text";
    }

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
          required: true,
          onChange: handleChange,
          name: field,
          value: formValues[field],
        }}
      />
    );
  });
};
