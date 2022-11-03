import FormInput from "./FormInput";
import { FormStateType } from "./Form";
import { AdditionalFormInputs } from "./styles";
import Button from "../Button/Button";

export const generateDefaultFormValues = (fields: (string | string[])[]) => {
  return fields.reduce((acc: any, field) => {
    if (typeof field === "string") acc[field] = "";
    else acc[field[0]] = [];
    return acc;
  }, {});
};

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

const generateFormInput = (
  key: any,
  field: string,
  value: string,
  handleChange: (e: { target: { name: any; value: any } }) => void,
  innerField?: string
) => {
  const type = innerField ? getInputType(innerField) : getInputType(field);
  const name = innerField ? field + "." + innerField : field;
  const required = innerField === undefined && field !== "phoneNumber";

  const label = innerField ? innerField.split(".").pop() || "" : field;

  return (
    <FormInput
      key={key}
      label={
        label[0].toUpperCase() +
        label
          .slice(1)
          .split(/(?=[A-Z])/)
          .join(" ")
      }
      inputProps={{
        type,
        name,
        value,
        onChange: handleChange,
        required,
      }}
    />
  );
};

const addField = (fields: string[], setFormValues: any) => {
  setFormValues((prev: any) => {
    const newFormValues = { ...prev };
    const newObj: any = {};

    for (let i = 1; i < fields.length; i++) {
      newObj[fields[i]] = "";
    }

    newFormValues[fields[0]].push(newObj);
    return newFormValues;
  });
};

export const generateFormElements = (
  fields: (string | string[])[],
  formValues: FormStateType,
  setFormValues: any,
  handleChange: (e: { target: { name: any; value: any } }) => void
) => {
  const elements: any[] = [];

  Object.keys(formValues).forEach((field) => {
    if (Array.isArray(formValues[field])) {
      const compositeField = formValues[field];

      for (let i = 0; i < compositeField.length; i++) {
        elements.push(<hr key={elements.length} />);
        for (const key in compositeField[i]) {
          elements.push(
            generateFormInput(
              elements.length,
              field,
              formValues[field][i][key],
              handleChange,
              `${i}.${key}`
            )
          );
        }
      }
    } else {
      elements.push(
        generateFormInput(
          elements.length,
          field,
          formValues[field],
          handleChange
        )
      );
    }
  });

  for (const field of fields) {
    if (typeof field === "string") continue;

    elements.push(
      <AdditionalFormInputs key={elements.length}>
        <h2>{field[0]}</h2>
        <Button
          buttonProps={{
            type: "button",
            onClick: () => addField(field, setFormValues),
          }}
        >
          Add
        </Button>
      </AdditionalFormInputs>
    );
  }
  return elements;
};
