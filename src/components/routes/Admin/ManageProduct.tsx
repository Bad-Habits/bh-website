import { FC, useState } from "react";
import Button from "../../elements/Button/Button";
import AddForm from "./AddForm";
import { ManageButtons, ManageContainer } from "./styles";
import { adminOptions, AdminOptionsType } from "../../../utils/constants";

type ManageProductType = {
  curProduct: string;
};

const ManageProduct: FC<ManageProductType> = ({ curProduct }) => {
  const [curForm, setCurForm] = useState("add");

  const handleClick = (newForm: AdminOptionsType) => {
    setCurForm(newForm);
  };

  return (
    <ManageContainer>
      <ManageButtons>
        {adminOptions.map((option) => (
          <Button
            key={option}
            buttonProps={{
              disabled: curForm === option,
              onClick: () => handleClick(option),
            }}
          >
            {option}
          </Button>
        ))}
      </ManageButtons>
      <AddForm curProduct={curProduct} curForm={curForm} />
    </ManageContainer>
  );
};

export default ManageProduct;
