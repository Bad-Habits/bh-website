import { FC } from "react";
import Form from "../../elements/Form/Form";
import { createMerchDoc, createEventDoc } from "../../../utils/firebase";
import { useAppDispatch } from "../../../redux/store/hooks";
import { setIsLoading } from "../../../redux/features/isLoading";

const addEventFields = ["name", "location", "date"];

type AddFormProps = {
  curProduct: string;
};

const AddForm: FC<AddFormProps> = ({ curProduct }) => {
  const dispatch = useAppDispatch();
  const header = `Add ${curProduct}`;
  const isEvents = curProduct === "events";
  const fields = isEvents ? addEventFields : [];

  const handleSubmit = async (formValues: any) => {
    dispatch(setIsLoading(true));
    if (isEvents) {
      const doc = await createEventDoc(formValues);
      console.log("doc returned from AddForm:", doc);
    } else createMerchDoc(formValues);
    dispatch(setIsLoading(false));
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
