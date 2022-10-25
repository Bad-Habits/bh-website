import { FC } from "react";

type ManageFormProps = {
  curPage: string;
  curForm: string;
};

const AddForm: FC<ManageFormProps> = ({ curPage, curForm }) => {
  return (
    <>
      {" "}
      <h2>
        {curForm} {curPage}
      </h2>
      <form></form>
    </>
  );
};

export default AddForm;
