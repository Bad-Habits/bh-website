import { setIsLoading } from "../../../../redux/features/isLoading";
import { useAppDispatch } from "../../../../redux/store/hooks";
import { createEventDoc } from "../../../../utils/firebase";
import Form from "../../../elements/Form/Form";

const initialFormValues = {
  name: "",
  location: "",
  date: "",
  tickets: [{ tier: "", price: "", quantity: "" }],
  isPublic: false,
};

const AddEvent = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (formValues: any) => {
    dispatch(setIsLoading(true));
    await createEventDoc(formValues);
    dispatch(setIsLoading(false));
  };

  return (
    <Form
      header="Add Event"
      initialFormValues={initialFormValues}
      handleSubmit={handleSubmit}
      buttonText="Add Event"
    />
  );
};

export default AddEvent;
