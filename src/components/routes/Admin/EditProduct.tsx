import { FC } from "react";

type EditFormProps = {
  curProduct: string;
};

const EditForm: FC<EditFormProps> = ({ curProduct }) => {
  const header = `Edit ${curProduct}`;

  return <h2>{header}</h2>;
};

export default EditForm;
