import { setIsLoading } from "../../../../redux/features/isLoading";
import { useAppDispatch } from "../../../../redux/store/hooks";
import { createEventDoc } from "../../../../utils/firebase";
import Form from "../../../elements/Form/Form";

const fields = [
  "name",
  "location",
  "date",
  ["tickets", "tier", "price", "quantity"],
];

const AddEvent = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (formValues: any) => {
    dispatch(setIsLoading(true));
    console.log(formValues);
    await createEventDoc(formValues);
    dispatch(setIsLoading(false));
  };

  return (
    <Form
      header="Add Event"
      fields={fields}
      handleSubmit={handleSubmit}
      buttonText="Add Event"
    />
  );
};

export default AddEvent;
