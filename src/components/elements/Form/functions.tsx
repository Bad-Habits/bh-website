import FormInput from "./FormInput";
import { FormStateType } from "./Form";
import { AdditionalFormInputs } from "./styles";
import Button from "../Button/Button";
import { HandleChangeType } from "../../../utils/types";

const getInputType = (field: string) => {
  switch (field) {
    case "isPublic":
      return "checkbox";
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
  name: string,
  value: string,
  required: boolean,
  handleChange: HandleChangeType
) => {
  return (
    <FormInput
      key={key}
      label={
        field[0].toUpperCase() +
        field
          .slice(1)
          .split(/(?=[A-Z])/)
          .join(" ")
      }
      inputProps={{
        type: getInputType(field),
        name,
        value,
        onChange: handleChange,
        required,
      }}
    />
  );
};

const addField = (field: string, innerFields: string[], setFormValues: any) => {
  setFormValues((prev: any) => {
    const newFormValues = { ...prev };
    const newObj = innerFields.reduce((acc: any, cur) => {
      acc[cur] = "";
      return acc;
    }, {});

    newFormValues[field].push(newObj);
    return newFormValues;
  });
};

const generateNestedFormInput = (
  elements: any[],
  field: string,
  values: any,
  handleChange: HandleChangeType,
  setFormValues: any
) => {
  for (let i = 0; i < values.length; i++) {
    elements.push(<hr key={elements.length} />);
    for (const innerField in values[i]) {
      elements.push(
        generateFormInput(
          elements.length,
          innerField,
          field + "." + i + "." + innerField,
          values[i][innerField],
          false,
          handleChange
        )
      );
    }
  }

  elements.push(
    <AdditionalFormInputs key={elements.length}>
      <h2>{field}</h2>
      <Button
        buttonProps={{
          type: "button",
          onClick: () => addField(field, Object.keys(values[0]), setFormValues),
        }}
      >
        Add
      </Button>
    </AdditionalFormInputs>
  );
};

export const generateFormElements = (
  formValues: FormStateType,
  setFormValues: any,
  handleChange: HandleChangeType
) => {
  const elements: any[] = [];

  Object.keys(formValues).forEach((field) => {
    if (Array.isArray(formValues[field])) {
      generateNestedFormInput(
        elements,
        field,
        formValues[field],
        handleChange,
        setFormValues
      );
    } else {
      elements.push(
        generateFormInput(
          elements.length,
          field,
          field,
          formValues[field],
          false,
          handleChange
        )
      );
    }
  });

  return elements;
};
