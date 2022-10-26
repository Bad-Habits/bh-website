import { FC, FormEvent } from "react";
import Form from "../../elements/Form/Form";
import { ticketOptions, merchOptions } from "../../../utils/constants";
import { MerchItemType, TicketType } from "../../../utils/types";

type ManageFormProps = {
  curProduct: string;
};

const AddForm: FC<ManageFormProps> = ({ curProduct }) => {
  const header = `Add ${curProduct}`;
  const fields = curProduct === "tickets" ? ticketOptions : merchOptions;

  const handleSubmit = (
    e: FormEvent,
    formValues: TicketType | MerchItemType
  ) => {
    e.preventDefault();
    console.log("add form submitted:", e, formValues);
  };

  return (
    <Form
      header={header}
      fields={fields}
      handleSubmit={handleSubmit}
      buttonText="Add"
    />
  );
};

export default AddForm;
